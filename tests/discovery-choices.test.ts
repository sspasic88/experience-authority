import test from "node:test";
import assert from "node:assert/strict";
import {
  canSurprise,
  nextDiscovery,
  savedAreas,
  withinPublicationWeek,
} from "../src/lib/discovery-choices";
import { publicGuides } from "../src/lib/public-guides";
import { guideMediaFor } from "../src/lib/media";
import { finderUrl, matchesFinder } from "../src/lib/experience-finder";

test("surprise eligibility requires a current real guide and approved photo", () => {
  const guide = publicGuides.find(
    (item) => item.slug === "cut-a-line-that-catches-the-light",
  )!;
  assert.ok(canSurprise(guide, true, "2026-09-24"));
  assert.equal(canSurprise(guide, false, "2026-09-24"), false);
  assert.equal(
    canSurprise({ ...guide, image: null }, true, "2026-09-24"),
    false,
  );
  assert.equal(
    canSurprise({ ...guide, demo: true }, true, "2026-09-24"),
    false,
  );
  assert.equal(
    canSurprise({ ...guide, status: "paused" }, true, "2026-09-24"),
    false,
  );
  assert.equal(canSurprise(guide, true, "2027-09-24"), false);
  assert.equal(canSurprise(guide, true, "2025-09-24"), false);
});
test("surprises exhaust every eligible choice before repeating and avoid an immediate repeat", () => {
  const pool = publicGuides.slice(0, 12);
  const seen: string[] = [];
  for (let index = 0; index < pool.length; index++) {
    const next = nextDiscovery(pool, seen, [], () => 0.4)!;
    assert.ok(!seen.includes(next.slug));
    seen.push(next.slug);
  }
  assert.notEqual(nextDiscovery(pool, seen, [], () => 0.4)!.slug, seen.at(-1));
  assert.equal(nextDiscovery([], []), undefined);
  assert.equal(
    nextDiscovery(pool.slice(0, 1), [pool[0].slug])!.slug,
    pool[0].slug,
  );
});
test("surprises prefer unsaved choices and geographic/activity contrast without escaping the pool", () => {
  const first = publicGuides[0];
  const same = { ...first, id: "same", slug: "same" };
  const different = {
    ...first,
    id: "different",
    slug: "different",
    countrySlug: "elsewhere",
    field: "make" as const,
  };
  assert.equal(
    nextDiscovery([first, same, different], [first.slug], [], () => 0)!.id,
    "different",
  );
  assert.equal(
    nextDiscovery([same, different], [], [same.id], () => 0)!.id,
    "different",
  );
  assert.ok(nextDiscovery([same], [], [], () => Number.NaN));
  assert.ok(nextDiscovery([same], [], [], () => 1));
});
test("saved-place matching is exact and does not infer a whole country", () => {
  const tokyo = publicGuides.find((item) => item.regionSlug === "tokyo")!;
  const areas = savedAreas(publicGuides, [tokyo.id, "invented-id"]);
  assert.deepEqual([...areas], ["japan/tokyo"]);
  assert.equal(areas.has("japan/kyoto"), false);
  assert.equal(savedAreas([{ ...tokyo, regionSlug: "" }], [tokyo.id]).size, 0);
});
test("publication week uses real publication dates and excludes future and eighth-day entries", () => {
  assert.ok(withinPublicationWeek("2026-09-24", "2026-09-24"));
  assert.ok(withinPublicationWeek("2026-09-18", "2026-09-24"));
  assert.equal(withinPublicationWeek("2026-09-17", "2026-09-24"), false);
  assert.equal(withinPublicationWeek("2026-09-25", "2026-09-24"), false);
  assert.equal(withinPublicationWeek("bad", "2026-09-24"), false);
});
test("surprise URLs retain intentional filters and do not change finder semantics", () => {
  assert.equal(
    finderUrl({ place: "japan", region: "tokyo", surprise: "1" }),
    "/explore?place=japan&region=tokyo&surprise=1",
  );
  const pool = publicGuides.filter(
    (item) =>
      canSurprise(
        item,
        guideMediaFor(item.id)?.visualReview?.outcome === "approved",
        "2026-09-24",
      ) &&
      matchesFinder(item, { place: "japan", region: "tokyo", surprise: "1" }),
  );
  assert.ok(pool.length > 1);
  assert.ok(
    pool.every(
      (item) => item.countrySlug === "japan" && item.regionSlug === "tokyo",
    ),
  );
});
