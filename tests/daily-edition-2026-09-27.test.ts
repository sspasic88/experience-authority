import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch43 } from "../src/lib/guide-batch-43";
import {
  edition20260927,
  discoveryBatch43,
} from "../src/lib/discovery-batch-43";
import { interests, matchesInterest } from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { publishedReleases } from "../src/lib/releases";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { resolveCityChapters } from "../src/lib/city-chapters";

test("27 September publishes eighteen original guides with three in each primary area", () => {
  const slugs = Object.values(edition20260927).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual(
    [...slugs].sort(),
    guideBatch43.map((guide) => guide.slug).sort(),
  );
  assert.deepEqual(
    Object.keys(edition20260927).sort(),
    interests.map((interest) => interest.slug).sort(),
  );
  const earlier = publicGuides.filter(
    (guide) => !guideBatch43.some((newGuide) => newGuide.id === guide.id),
  );
  for (const [primary, entries] of Object.entries(edition20260927)) {
    assert.equal(entries.length, 3, primary);
    for (const slug of entries) {
      const guide = guideBatch43.find((candidate) => candidate.slug === slug)!;
      const media = guideMediaFor(guide.id)!;
      assert.ok(
        matchesInterest(
          guide,
          interests.find((interest) => interest.slug === primary)!,
        ),
        slug,
      );
      assert.ok(canPublishGuide(guide, "2026-09-27"), slug);
      assert.ok(!canPublishGuide(guide, "2026-09-26"), slug);
      assert.ok(
        !earlier.some(
          (item) =>
            item.id === guide.id ||
            item.slug === slug ||
            item.guideReview?.accessUrl === guide.guideReview?.accessUrl,
        ),
        slug,
      );
      assert.ok(discoveryBatch43[slug], slug);
      assert.ok(
        editorialPathways.some((pathway) =>
          (pathway.guideSlugs as readonly string[]).includes(slug),
        ),
        slug,
      );
      assert.equal(guide.image, media.src);
      assert.equal(guide.guideReview?.checkedOn, "2026-09-27");
      assert.match(guide.evidence, /EA has not/);
      assert.doesNotMatch(
        [
          guide.title,
          guide.summary,
          guide.kernel,
          guide.rootedness,
          guide.shift,
          guide.humanReturn,
          guide.responsibility,
          guide.evidence,
          guide.duration,
          guide.participation,
          guide.access,
        ].join(" "),
        /[;—]/,
        slug,
      );
    }
  }
  assert.equal(
    publishedReleases(publicGuides, "2026-09-27")[0].guides.length,
    18,
  );
});

test("depiction and booking boundaries survive the release", () => {
  const byId = (id: string) => guideBatch43.find((guide) => guide.id === id)!;
  assert.match(
    byId("kanazawa-hakuichi-gold-leaf").responsibility,
    /not beating gold into leaf/,
  );
  assert.match(
    guideMediaFor("kanazawa-hakuichi-gold-leaf")!.depiction,
    /not the Hakuichi visitor class/,
  );
  assert.equal(
    guideMediaFor("kanazawa-hakuichi-gold-leaf")!.rightsBasis,
    "documented_license",
  );
  assert.match(byId("sydney-bush-tucker").responsibility, /Do not forage/);
  assert.match(
    byId("copenhagen-copenhill-ski").responsibility,
    /upper slope is red or black/,
  );
  assert.match(byId("sydney-maccallum-pool").responsibility, /a lifeguard/);
  assert.match(
    byId("valencia-water-tribunal").responsibility,
    /guaranteed case/,
  );
  assert.ok(
    resolveCityChapters(publicGuides).some(
      (chapter) => chapter.slug === "sydney" && chapter.stops.length === 3,
    ),
  );
});
