import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import {
  cityChapters,
  resolveCityChapters,
  chapterHref,
} from "../src/lib/city-chapters";
import {
  dailyDiscoveries,
  availableDiscoveries,
  currentDiscovery,
} from "../src/lib/daily-discovery";
import { publishedReleases, recentGuideReleases } from "../src/lib/releases";
import { addPassportGuides, type PassportData } from "../src/lib/passport";

test("fourteen complete local chapters offer real contrasting experiences and planning constraints", () => {
  const resolved = resolveCityChapters(publicGuides);
  assert.equal(resolved.length, 14);
  for (const chapter of resolved) {
    assert.ok(chapter.stops.length >= 2);
    assert.equal(
      new Set(chapter.stops.map((stop) => stop.slug)).size,
      chapter.stops.length,
    );
    assert.ok(
      new Set(chapter.stops.map((stop) => stop.item.field)).size >= 2,
      chapter.slug,
    );
    assert.ok(chapter.planning.length > 100);
    assert.ok(chapterHref(chapter).startsWith(`/places/${chapter.country}`));
    assert.ok(
      chapter.stops.every(
        (stop) =>
          stop.item.countrySlug === chapter.country &&
          chapter.regions.includes(stop.item.regionSlug),
      ),
    );
    const missing = chapter.stops[0].slug;
    assert.ok(
      !resolveCityChapters(
        publicGuides.filter((item) => item.slug !== missing),
      ).some((item) => item.slug === chapter.slug),
    );
  }
  assert.equal(cityChapters.length, resolved.length);
});

test("local planning preserves the named venue and visitor role, including Singapore's wetland correction", () => {
  const chapters = resolveCityChapters(publicGuides);
  const singapore = chapters.find((chapter) => chapter.slug === "singapore")!;
  const wetland = singapore.stops.find(
    (stop) => stop.slug === "find-the-citys-wilder-edge",
  )!;
  assert.match(singapore.planning, /Sungei Buloh/);
  assert.match(wetland.why, /independent wetland walk/);
  assert.match(wetland.why, /No guided tour/);
  assert.doesNotMatch(JSON.stringify(singapore), /Mandai/);
  const barcelona = chapters.find((chapter) => chapter.slug === "barcelona")!;
  assert.match(barcelona.planning, /La Mercè/);
  assert.match(barcelona.planning, /later collection/);
  const vienna = chapters.find((chapter) => chapter.slug === "vienna")!;
  assert.match(vienna.planning, /Heiligenstadt/);
  assert.match(vienna.planning, /not a walking itinerary/);
  const krakow = chapters.find((chapter) => chapter.slug === "krakow")!;
  assert.equal(krakow.stops.length, 3);
  assert.match(krakow.planning, /separate bookings/);
  assert.match(krakow.planning, /public spectatorship/);
  const paris = chapters.find((chapter) => chapter.slug === "paris")!;
  assert.equal(paris.stops.length, 3);
  assert.match(paris.planning, /Do not attempt all three in one day/);
  assert.match(paris.planning, /French delivery/);
  const london = chapters.find((chapter) => chapter.slug === "london")!;
  assert.equal(london.stops.length, 3);
  assert.match(london.planning, /separate timed bookings/);
  assert.match(london.planning, /not a continuous walking itinerary/);
  const rome = chapters.find((chapter) => chapter.slug === "rome")!;
  assert.equal(rome.stops.length, 3);
  assert.match(rome.planning, /Do not force all three into one day/);
  assert.match(rome.planning, /no combined ticket/);
  const newYork = chapters.find((chapter) => chapter.slug === "new-york-city")!;
  assert.equal(newYork.stops.length, 3);
  assert.match(newYork.planning, /separately purchased ferry/);
  assert.match(newYork.planning, /not attempt them as a continuous route/);
});

test("daily editions are authored, distinct, date-gated and do not silently loop", () => {
  assert.equal(dailyDiscoveries.length, 50);
  assert.equal(new Set(dailyDiscoveries.map((item) => item.slug)).size, 50);
  assert.equal(new Set(dailyDiscoveries.map((item) => item.date)).size, 50);
  assert.equal(availableDiscoveries(publicGuides, "2026-09-12").length, 0);
  assert.equal(availableDiscoveries(publicGuides, "2026-09-13").length, 1);
  assert.equal(availableDiscoveries(publicGuides, "2026-09-20").length, 8);
  assert.equal(
    currentDiscovery(publicGuides, "2026-09-13")?.slug,
    "hear-the-church-before-you-climb",
  );
  assert.equal(
    currentDiscovery(publicGuides, "2027-01-01")?.date,
    "2026-11-01",
  );
  for (const edition of dailyDiscoveries) {
    assert.ok(edition.angle.length > 180);
    const guide = publicGuides.find((item) => item.slug === edition.slug);
    assert.ok(guide);
    assert.ok(canPublishGuide(guide, edition.date));
  }
  assert.equal(currentDiscovery([], "2026-09-20"), undefined);
  const removed = publicGuides.filter(
    (item) => item.slug !== dailyDiscoveries[0].slug,
  );
  assert.equal(currentDiscovery(removed, "2026-09-13"), undefined);
});

test("release dates are independent from source checks and expire out of the new window", () => {
  assert.equal(publishedReleases(publicGuides, "2026-09-11").length, 0);
  assert.equal(
    publishedReleases(publicGuides, "2026-09-12")[0].guides.length,
    7,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-09-13")[0].guides.length,
    26,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-09-14")[0].guides.length,
    14,
  );
  assert.equal(recentGuideReleases(publicGuides, "2026-09-14").length, 47);
  assert.equal(recentGuideReleases(publicGuides, "2026-10-20").length, 0);
  assert.equal(publishedReleases([], "2026-09-13").length, 0);
  const changedChecks = publicGuides.map((item) => ({
    ...item,
    guideReview: item.guideReview && {
      ...item.guideReview,
      checkedOn: "2026-10-01",
    },
  }));
  assert.deepEqual(
    publishedReleases(changedChecks, "2026-10-01").map((item) => item.date),
    ["2026-09-14", "2026-09-13", "2026-09-12"],
  );
});

test("saving a chapter is atomic, validates IDs and preserves stages, comparison and input", () => {
  const before: PassportData = {
    saved: { first: "experienced", second: "return-to" },
    compare: ["first"],
  };
  const after = addPassportGuides(
    before,
    ["first", "second", "third", "third", "unknown", "__proto__"],
    ["first", "second", "third"],
  );
  assert.deepEqual(after, {
    saved: { first: "experienced", second: "return-to", third: "saved" },
    compare: ["first"],
  });
  assert.deepEqual(before.saved, { first: "experienced", second: "return-to" });
  assert.deepEqual(addPassportGuides(after, ["third"], ["third"]), after);
});
