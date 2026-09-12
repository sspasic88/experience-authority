import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { curateHome } from "../src/lib/home-curation";
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

test("home curation gives every image one position, including hero and pathway reuse", () => {
  const home = curateHome(publicGuides, editorialPathways);
  assert.equal(home.startingPoints.length, 3);
  assert.equal(home.newGuides.length, 6);
  const visible = [
    ...home.hero,
    ...home.startingPoints,
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

test("visible accent details use the EA colour tokens, not one-off coral values", () => {
  const styles = `${read("src/styles/prototype.css")}\n${read("src/styles/visitor.css")}`;
  for (const value of ["#ff754e", "#ff906f", "#ff4b20", "#d83a13"])
    assert.ok(
      !styles.includes(value),
      `unexpected off-palette accent: ${value}`,
    );
});
