import test from "node:test";
import assert from "node:assert/strict";
import { matchesFinder, finderUrl } from "../src/lib/experience-finder";
import { publicGuides } from "../src/lib/public-guides";

test("discovery matches multiword intent and accents while intersecting participation, place and time", () => {
  const kyoto = publicGuides.find(
    (item) => item.slug === "a-bowl-of-attention",
  )!;
  assert.ok(
    matchesFinder(kyoto, {
      q: "Kyoto tea",
      mode: "hands-on",
      time: "short",
      place: "japan",
    }),
  );
  assert.ok(!matchesFinder(kyoto, { q: "Kyoto tea", place: "italy" }));
  assert.ok(!matchesFinder(kyoto, { q: "Kyoto", time: "half-day" }));
  const pool = publicGuides.find(
    (item) => item.slug === "a-city-in-the-water",
  )!;
  assert.ok(matchesFinder(pool, { q: "reykjavik swimming", time: "own-pace" }));
  assert.ok(!matchesFinder(pool, { q: "reykjavik surfing" }));
});
test("finder links preserve combined choices and escape user queries", () => {
  const href = finderUrl({
    q: " tea & <script> ",
    mode: "hands-on",
    place: "japan",
    view: "list",
  });
  assert.equal(
    new URL(href, "https://experienceauthority.com").searchParams.get("q"),
    "tea & <script>",
  );
  assert.equal(
    new URL(href, "https://experienceauthority.com").searchParams.get("mode"),
    "hands-on",
  );
  assert.equal(finderUrl({ q: " ", view: "grid" }), "/explore");
});
