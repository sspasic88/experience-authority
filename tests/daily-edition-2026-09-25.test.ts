import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch42 } from "../src/lib/guide-batch-42";
import {
  edition20260925,
  discoveryBatch42,
} from "../src/lib/discovery-batch-42";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { publishedReleases } from "../src/lib/releases";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { cityChapters } from "../src/lib/city-chapters";
import { dailyDiscoveries } from "../src/lib/daily-discovery";

test("25 September adds eighteen distinct guides, exactly three per primary interest", () => {
  const slugs = Object.values(edition20260925).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch42.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20260925).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter(
    (g) => !guideBatch42.some((n) => n.id === g.id),
  );
  for (const [primary, entries] of Object.entries(edition20260925)) {
    assert.equal(entries.length, 3);
    for (const slug of entries) {
      const g = guideBatch42.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === primary)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-09-25"), slug);
      assert.ok(!canPublishGuide(g, "2026-09-24"), slug);
      assert.ok(
        !earlier.some(
          (e) =>
            e.slug === g.slug ||
            e.id === g.id ||
            e.guideReview?.accessUrl === g.guideReview?.accessUrl,
        ),
      );
      assert.ok(discoveryBatch42[slug]);
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
        slug,
      );
      assert.ok(guideMediaFor(g.id));
      assert.equal(g.guideReview?.checkedOn, "2026-09-25");
      assert.match(g.evidence, /EA has not/);
      assert.doesNotMatch(
        [
          g.title,
          g.summary,
          g.kernel,
          g.rootedness,
          g.shift,
          g.humanReturn,
          g.responsibility,
          g.evidence,
          g.duration,
          g.participation,
          g.access,
        ].join(" "),
        /[;—]/,
      );
    }
  }
  const release = publishedReleases(publicGuides, "2026-09-25")[0];
  assert.equal(release.date, "2026-09-25");
  assert.equal(release.guides.length, 18);
});

test("material booking, cultural and image boundaries remain explicit", () => {
  const byId = (id: string) => guideBatch42.find((g) => g.id === id)!;
  assert.match(
    byId("seoul-gwangjang-bindaetteok").responsibility,
    /does not mean vegetarian/,
  );
  assert.match(
    byId("lyon-halles-tasting").responsibility,
    /avoiding pork or alcohol/,
  );
  assert.match(
    byId("delft-tile-painting").responsibility,
    /collection is not possible/,
  );
  assert.match(byId("tokyo-ganso-wax-food").responsibility, /Japanese/);
  assert.match(
    byId("tokyo-ganso-wax-food").responsibility,
    /Nothing you make is edible/,
  );
  assert.match(
    byId("watergang-wetlands-canoe").access,
    /Do not use the Amsterdam Noord/,
  );
  assert.match(
    byId("cape-town-granger-kayak").responsibility,
    /Never pursue, touch or feed/,
  );
  assert.match(
    byId("melbourne-aboriginal-garden-walk").responsibility,
    /not.*private ceremony/,
  );
  assert.match(
    byId("bath-thermae-welcome").responsibility,
    /not.*swimming in the Roman Baths/,
  );
  assert.match(
    byId("oslo-kok-shared-sauna").responsibility,
    /does not guarantee a lifeguard/,
  );
  assert.match(byId("glasgow-sloans-ceilidh").responsibility, /eighteen/);
  assert.match(
    byId("tokyo-kabukiza-single-act").responsibility,
    /fourth level/,
  );
  assert.equal(
    guideMediaFor("tokyo-kabukiza-single-act")?.rightsBasis,
    "documented_license",
  );
  assert.match(
    guideMediaFor("lyon-halles-tasting")!.depiction,
    /not a guaranteed tour stop/,
  );
});

test("new city depth and future daily discoveries connect without fabricating a package", () => {
  for (const slug of ["amsterdam-waterland", "seoul"]) {
    const chapter = cityChapters.find((c) => c.slug === slug)!;
    assert.equal(chapter.stops.length, 3);
    assert.match(chapter.planning, /No.*package|No shared booking/);
    for (const stop of chapter.stops) {
      const guide = publicGuides.find((g) => g.slug === stop.slug)!;
      assert.equal(guide.countrySlug, chapter.country);
      assert.ok(chapter.regions.includes(guide.regionSlug));
    }
  }
  for (const id of [
    "amsterdam-micropia",
    "seoul-gwangjang-bindaetteok",
    "tokyo-ganso-wax-food",
  ]) {
    const guide = guideBatch42.find((g) => g.id === id)!;
    const next = connectedExperiences(guide, publicGuides)[0];
    assert.equal(next.scope, "same_area");
    assert.notEqual(next.item.field, guide.field);
  }
  assert.equal(
    dailyDiscoveries.find((d) => d.date === "2026-09-25")?.slug,
    "cross-lisbon-on-the-route-of-its-water",
  );
  assert.equal(
    dailyDiscoveries.find((d) => d.date === "2026-09-26")?.slug,
    "make-a-lunch-you-cannot-eat",
  );
  assert.equal(
    dailyDiscoveries.find((d) => d.date === "2026-09-28")?.slug,
    "look-for-the-life-too-small-to-see",
  );
});
