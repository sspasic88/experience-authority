import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { publicGuideMedia } from "../src/lib/media";
import { publicGuides } from "../src/lib/public-guides";
import { createHash } from "node:crypto";
import {
  imageRevisions,
  imageSource,
  imageEdition,
} from "../src/lib/image-revisions";
import config from "../next.config";

test("every published guide has a local, credited photograph with a depiction boundary", () => {
  assert.equal(
    new Set(publicGuideMedia.map((media) => media.guideId)).size,
    publicGuideMedia.length,
  );
  for (const guide of publicGuides) {
    const media = publicGuideMedia.find((item) => item.guideId === guide.id);
    assert.ok(media);
    assert.equal(guide.image, media.src);
    assert.equal(guide.imageAlt, media.alt);
    assert.ok(media.alt.length > 30);
    assert.ok(media.photographer && media.title && media.depiction);
    assert.ok(
      ["documented_license", "official_source"].includes(media.rightsBasis),
    );
    assert.equal(media.visualReview.outcome, "approved");
    assert.ok(media.visualReview.rationale.length > 40);
    assert.equal(new URL(media.sourceUrl).protocol, "https:");
    assert.equal(new URL(media.licenseUrl).protocol, "https:");
    if (media.rightsBasis === "official_source")
      assert.match(media.licenseName, /not independently cleared/i);
    const file = new URL(`../public${media.src}`, import.meta.url);
    assert.ok(existsSync(file));
    const fingerprint = createHash("sha256")
      .update(readFileSync(file))
      .digest("hex")
      .slice(0, 12);
    assert.equal(
      imageRevisions[media.src],
      fingerprint,
      `Refresh photograph cache revision: ${media.src}`,
    );
    assert.equal(imageSource(media.src), `${media.src}?v=${imageEdition}`);
    assert.ok(
      statSync(file).size > 10000,
      "Photograph must not be a tiny placeholder",
    );
  }
});

test("the photograph edition is fresh and its exact query is allowed by the image optimizer", () => {
  assert.equal(
    imageEdition,
    createHash("sha256")
      .update(JSON.stringify(imageRevisions))
      .digest("hex")
      .slice(0, 12),
  );
  assert.deepEqual(config.images?.localPatterns, [
    { pathname: "/images/**", search: "" },
    { pathname: "/images/guides/**", search: `?v=${imageEdition}` },
  ]);
  assert.equal(imageSource("/images/pottery.jpg"), "/images/pottery.jpg");
});

test("card photo sizing cannot stretch the credit link over the photograph", () => {
  const css = readFileSync(
    new URL("../src/styles/global.css", import.meta.url),
    "utf8",
  );
  assert.ok(!/\.card-image\s*>\s*a\s*\{/.test(css));
  assert.match(css, /\.card-photo-link\s*\{[^}]*inset:\s*0/s);
});
