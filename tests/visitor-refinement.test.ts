import test from "node:test";
import assert from "node:assert/strict";
import { interests, matchesInterest } from "../src/lib/catalog";
import { matchesFinder, discoveryProfiles } from "../src/lib/experience-finder";
import { publicGuides } from "../src/lib/public-guides";
import { curateHome, resolveHomeHeroEditions } from "../src/lib/home-curation";
import { editorialPathways } from "../src/lib/editorial-pathways";

test("Make describes participation, not a tour of somebody else's work", () => {
  const make = interests.find((item) => item.slug === "make-learn")!;
  const bagel = publicGuides.find(
    (item) => item.slug === "make-the-bagel-before-new-york-serves-it",
  )!;
  const factory = publicGuides.find(
    (item) => item.slug === "follow-the-fizz-through-a-working-factory",
  )!;
  assert.ok(matchesInterest(bagel, make));
  assert.ok(!matchesInterest(factory, make));
  for (const item of publicGuides) {
    if (
      item.field === "taste" &&
      discoveryProfiles[item.slug]?.modes.includes("hands-on")
    ) {
      assert.ok(matchesInterest(item, make), item.slug);
    }
    assert.ok(
      interests.some((interest) => matchesInterest(item, interest)),
      item.slug,
    );
  }
});

test("NYC is a useful search alias without adding unrelated guides", () => {
  const results = publicGuides.filter((item) =>
    matchesFinder(item, { q: "NYC" }),
  );
  assert.equal(results.length, 3);
  assert.ok(results.every((item) => item.regionSlug === "new-york-city"));
});

test("every manual hero edition remains distinct from the rest of the homepage", () => {
  const editions = resolveHomeHeroEditions(publicGuides);
  const home = curateHome(
    publicGuides,
    editorialPathways,
    editions[0],
    "2026-09-13",
  );
  const below = [
    ...home.newGuides,
    ...home.homePathways.map((entry) => entry.item),
  ];
  const heroImages = new Set(editions.flat().map((item) => item.image));
  assert.ok(below.every((item) => !heroImages.has(item.image)));
  assert.equal(
    new Set(home.newGuides.slice(0, 3).map((item) => item.countrySlug)).size,
    3,
  );
  assert.equal(home.homePathways.length, 3);
});
