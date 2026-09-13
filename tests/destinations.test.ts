import test from "node:test";
import assert from "node:assert/strict";
import { destinationCoverage } from "../src/lib/destinations";
import { interests, matchesInterest } from "../src/lib/catalog";
import { matchesFinder, discoveryProfiles } from "../src/lib/experience-finder";
import { publicGuides } from "../src/lib/public-guides";

test("destination browsing keeps country and city scopes exact, with honest wider-country options", () => {
  const japan = destinationCoverage(publicGuides, "japan");
  assert.equal(japan.local.length, 6);
  assert.equal(japan.categories.length, 5);
  const kyoto = destinationCoverage(publicGuides, "japan", "kyoto");
  assert.equal(kyoto.local.length, 4);
  assert.equal(kyoto.elsewhere.length, 2);
  assert.ok(
    kyoto.elsewhere.every(
      (item) => item.countrySlug === "japan" && item.regionSlug !== "kyoto",
    ),
  );
  assert.equal(
    destinationCoverage(publicGuides, "france", "kyoto").local.length,
    0,
  );
  assert.ok(
    matchesFinder(
      kyoto.local.find((item) => item.slug === "a-bowl-of-attention")!,
      {
        place: "japan",
        region: "kyoto",
        interest: "eat-drink",
      },
    ),
  );
  assert.ok(
    !matchesFinder(kyoto.local[0], { place: "japan", region: "koyasan" }),
  );
});
test("visitor interests can overlap without duplicating the source record", () => {
  const cooking = publicGuides.find(
    (item) => item.slug === "cook-beyond-the-postcard",
  )!;
  assert.ok(
    matchesInterest(
      cooking,
      interests.find((item) => item.slug === "eat-drink")!,
    ),
  );
  assert.ok(
    matchesInterest(
      cooking,
      interests.find((item) => item.slug === "make-learn")!,
    ),
  );
  assert.ok(
    !matchesInterest(
      cooking,
      interests.find((item) => item.slug === "move-water")!,
    ),
  );
  assert.equal(
    destinationCoverage(publicGuides, "south-africa").local.length,
    1,
  );
  for (const guide of publicGuides)
    assert.ok(discoveryProfiles[guide.slug], guide.slug);
});

test("Singapore offers four guides across three distinct interests without inflating its guide count", () => {
  const singapore = destinationCoverage(publicGuides, "singapore", "singapore");
  assert.equal(singapore.local.length, 4);
  assert.equal(singapore.categories.length, 3);
  assert.equal(singapore.elsewhere.length, 0);
  for (const guide of publicGuides) {
    assert.ok(
      interests.some((interest) => matchesInterest(guide, interest)),
      `${guide.slug} needs a visitor-facing category`,
    );
  }
});

test("the new edition deepens familiar routes and opens new countries without geographic leakage", () => {
  assert.equal(destinationCoverage(publicGuides, "mexico").local.length, 4);
  assert.equal(
    destinationCoverage(publicGuides, "united-kingdom").local.length,
    5,
  );
  assert.equal(
    destinationCoverage(publicGuides, "argentina", "salta").local.length,
    2,
  );
  assert.equal(destinationCoverage(publicGuides, "malta").local.length, 1);
  assert.equal(
    destinationCoverage(publicGuides, "qatar", "doha").local.length,
    1,
  );
  assert.ok(
    destinationCoverage(publicGuides, "qatar").local.every(
      (guide) => guide.countrySlug === "qatar",
    ),
  );
  assert.equal(
    destinationCoverage(publicGuides, "turkiye", "istanbul").local.length,
    3,
  );
  assert.equal(
    destinationCoverage(publicGuides, "south-korea").local.length,
    3,
  );
  assert.equal(destinationCoverage(publicGuides, "finland").local.length, 2);
  assert.equal(
    destinationCoverage(publicGuides, "morocco", "fez").local.length,
    1,
  );
  assert.equal(
    destinationCoverage(publicGuides, "uruguay", "montevideo").local.length,
    1,
  );
  assert.equal(
    destinationCoverage(publicGuides, "croatia", "istria").local.length,
    1,
  );
  assert.equal(
    destinationCoverage(publicGuides, "australia", "mossman-gorge").local
      .length,
    1,
  );
  assert.equal(
    destinationCoverage(publicGuides, "portugal", "vila-nova-de-gaia").local
      .length,
    1,
  );
});
