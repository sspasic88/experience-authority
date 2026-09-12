import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const read = (path: string) =>
  readFileSync(new URL(path, root), "utf8");

test("the public edition is experience editorial, never generic travel editorial", () => {
  const layout = read("src/app/layout.tsx");
  assert.match(layout, /INDEPENDENT EXPERIENCE EDITORIAL/);
  assert.doesNotMatch(layout, /INDEPENDENT TRAVEL EDITORIAL/);
});

test("home curation does not repeat the Istanbul hero guide and keeps three distinct entries", () => {
  const home = read("src/app/page.tsx");
  const selected = [
    "a-morning-at-the-hawker-table",
    "step-into-the-dance",
    "a-city-in-the-water",
  ];
  assert.ok(selected.every((slug) => home.includes(`\"${slug}\"`)));
  assert.doesNotMatch(home, /\"marble-steam-istanbul\"/);
  assert.equal(new Set(selected).size, 3);
});

test("visible accent details use the EA colour tokens, not one-off coral values", () => {
  const styles = `${read("src/styles/prototype.css")}\n${read("src/styles/visitor.css")}`;
  for (const value of ["#ff754e", "#ff906f", "#ff4b20", "#d83a13"])
    assert.ok(!styles.includes(value), `unexpected off-palette accent: ${value}`);
});
