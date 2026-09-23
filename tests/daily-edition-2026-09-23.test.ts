import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch40 } from "../src/lib/guide-batch-40";
import {
  edition20260923,
  discoveryBatch40,
} from "../src/lib/discovery-batch-40";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { publishedReleases } from "../src/lib/releases";

test("23 September publishes eighteen unique guides with exactly three primary allocations per interest", () => {
  const slugs = Object.values(edition20260923).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch40.map((g) => g.slug).sort());
  assert.equal(Object.keys(edition20260923).length, interests.length);
  for (const [interestSlug, entries] of Object.entries(edition20260923)) {
    assert.equal(entries.length, 3);
    const interest = interests.find((i) => i.slug === interestSlug)!;
    for (const slug of entries) {
      const guide = guideBatch40.find((g) => g.slug === slug)!;
      assert.ok(matchesInterest(guide, interest), `${slug}: ${interestSlug}`);
      assert.ok(canPublishGuide(guide, "2026-09-23"), slug);
      assert.ok(!canPublishGuide(guide, "2026-09-22"), slug);
      assert.ok(discoveryBatch40[slug]);
      assert.ok(guideMediaFor(guide.id));
      const copy = [
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
      ].join(" ");
      assert.doesNotMatch(copy, /[;—]/);
      assert.match(guide.evidence, /EA has not/);
    }
  }
  assert.equal(
    publishedReleases(publicGuides, "2026-09-23")[0].guides.length,
    18,
  );
});

test("new guides preserve maintenance, dietary, material, seasonal and cultural boundaries", () => {
  const byId = (id: string) => guideBatch40.find((g) => g.id === id)!;
  assert.match(byId("tokyo-ninben-dashi-bar").responsibility, /contains fish/);
  assert.match(
    byId("kyoto-shikata-kintsugi").responsibility,
    /contact dermatitis/,
  );
  assert.match(byId("kyoto-shikata-kintsugi").duration, /two to three weeks/);
  assert.match(
    byId("helsinki-loyly-public-sauna").responsibility,
    /4 to 7 October 2026/,
  );
  assert.match(
    byId("budapest-szechenyi-daytime-bathing").responsibility,
    /21 September to 2 October/,
  );
  assert.match(
    byId("budapest-szechenyi-daytime-bathing").responsibility,
    /under fourteen/,
  );
  assert.equal(
    byId("stockholm-tanto-guided-kayak").guideReview?.reviewBy,
    "2026-09-30",
  );
  assert.equal(
    byId("ljubljana-bananaway-sup").guideReview?.reviewBy,
    "2026-10-15",
  );
  assert.match(
    byId("stockholm-tanto-guided-kayak").responsibility,
    /Swimming ability is required/,
  );
  assert.match(
    byId("khwattu-san-tracking-tour").rootedness,
    /different San communities/,
  );
  assert.match(
    byId("naples-galleria-borbonica-standard").participation,
    /No rafting/,
  );
  assert.equal(byId("khwattu-san-tracking-tour").regionSlug, "west-coast");
  for (const id of [
    "lisbon-aguas-livres-crossing",
    "lisbon-mesa-de-frades-fado",
    "budapest-szechenyi-daytime-bathing",
  ]) {
    const guide = byId(id);
    const first = connectedExperiences(guide, publicGuides)[0];
    assert.equal(first.scope, "same_area");
    assert.notEqual(first.item.field, guide.field);
    assert.equal(first.item.regionSlug, guide.regionSlug);
  }
});
