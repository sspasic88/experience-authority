import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  curateHome,
  heroGuideRotations,
  homeHeroRotationIndex,
  resolveHomeHeroEditions,
  selectHomeHero,
} from "../src/lib/home-curation";
import { publicGuides } from "../src/lib/public-guides";
import { editorialPathways } from "../src/lib/editorial-pathways";

const root = new URL("../", import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), "utf8");

test("the public edition uses EA language, never generic travel editorial", () => {
  const layout = read("src/app/layout.tsx");
  assert.match(layout, /EA \/ PUBLIC GUIDE EDITION/);
  assert.doesNotMatch(layout, /INDEPENDENT EXPERIENCE EDITORIAL/);
  assert.doesNotMatch(layout, /INDEPENDENT TRAVEL EDITORIAL/);
});

test("home curation gives every visible photograph one position", () => {
  const hero = selectHomeHero(publicGuides, "2026-09-12");
  const home = curateHome(publicGuides, editorialPathways, hero, "2026-09-13");
  assert.equal(home.startingPoints.length, 3);
  assert.equal(
    new Set(home.startingPoints.map((item) => item.countrySlug)).size,
    3,
  );
  assert.equal(home.newGuides.length, 6);
  const visible = [
    ...home.hero,
    ...home.newGuides,
    ...home.homePathways.map((entry) => entry.item),
  ];
  assert.equal(new Set(visible.map((item) => item.image)).size, visible.length);
  const remaining = publicGuides.filter(
    (item) => item.slug !== "a-morning-at-the-hawker-table",
  );
  assert.ok(
    curateHome(remaining, editorialPathways).startingPoints.every((item) =>
      remaining.includes(item),
    ),
  );
});

test("the homepage hero follows a stable, hand-curated three-hour rotation", () => {
  const date = "2026-09-12";
  const index = homeHeroRotationIndex(date);
  const first = selectHomeHero(publicGuides, date).map((item) => item.slug);
  const repeated = selectHomeHero(publicGuides, date).map((item) => item.slug);
  const next = selectHomeHero(publicGuides, "2026-09-13").map(
    (item) => item.slug,
  );
  assert.deepEqual(first, [...heroGuideRotations[index]]);
  assert.deepEqual(repeated, first);
  assert.notDeepEqual(next, first);
  assert.equal(new Set(first).size, 3);
  const editions = resolveHomeHeroEditions(publicGuides);
  assert.equal(editions.length, heroGuideRotations.length);
  for (const edition of editions) {
    assert.equal(new Set(edition.map((item) => item.countrySlug)).size, 3);
    assert.equal(new Set(edition.map((item) => item.field)).size, 3);
    const home = curateHome(
      publicGuides,
      editorialPathways,
      edition,
      "2026-09-13",
    );
    assert.equal(
      new Set(home.startingPoints.map((item) => item.countrySlug)).size,
      3,
    );
  }
  for (let offset = 0; offset < heroGuideRotations.length; offset += 1) {
    const heroForEdition = selectHomeHero(
      publicGuides,
      `2026-09-${String(12 + offset).padStart(2, "0")}`,
    );
    assert.equal(
      curateHome(publicGuides, editorialPathways, heroForEdition).startingPoints
        .length,
      3,
    );
  }
});

test("every published collection contains available, distinct guides", () => {
  const publicSlugs = new Set(publicGuides.map((guide) => guide.slug));
  assert.equal(editorialPathways.length, 12);
  for (const pathway of editorialPathways) {
    assert.ok(pathway.guideSlugs.length >= 5, pathway.slug);
    assert.equal(new Set(pathway.guideSlugs).size, pathway.guideSlugs.length);
    assert.ok(
      pathway.guideSlugs.every((slug) => publicSlugs.has(slug)),
      pathway.slug,
    );
  }
});

test("visible accent details use the EA colour tokens, not one-off coral values", () => {
  const styles = `${read("src/styles/prototype.css")}\n${read("src/styles/visitor.css")}`;
  for (const value of ["#ff754e", "#ff906f", "#ff4b20", "#d83a13"])
    assert.ok(
      !styles.includes(value),
      `unexpected off-palette accent: ${value}`,
    );
});
