import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { publicGuideMedia } from "../src/lib/media";
import { publicGuides } from "../src/lib/public-guides";

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
    assert.equal(new URL(media.sourceUrl).protocol, "https:");
    assert.equal(new URL(media.licenseUrl).protocol, "https:");
    const file = new URL(`../public${media.src}`, import.meta.url);
    assert.ok(existsSync(file));
    assert.ok(
      statSync(file).size > 10000,
      "Photograph must not be a tiny placeholder",
    );
  }
});

test("card photo sizing cannot stretch the credit link over the photograph", () => {
  const css = readFileSync(
    new URL("../src/styles/global.css", import.meta.url),
    "utf8",
  );
  assert.ok(!/\.card-image\s*>\s*a\s*\{/.test(css));
  assert.match(css, /\.card-photo-link\s*\{[^}]*inset:\s*0/s);
});
