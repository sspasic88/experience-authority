import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3120";
const output =
  process.env.EA_AUDIT_OUTPUT || "../../work/ea-connected-discovery";
const widths = process.env.EA_AUDIT_WIDTH
  ? [Number(process.env.EA_AUDIT_WIDTH)]
  : [320, 390, 768, 1440];
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.EA_CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const results = [];
const errors = [];
async function visit(page, route) {
  await page.goto(base + route, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
}
async function check(page, label, width) {
  await page.evaluate(async () => {
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
    await Promise.all(
      [...document.images].map(async (image) => {
        image.loading = "eager";
        await image.decode();
      }),
    );
    for (const animation of document.getAnimations()) {
      if (
        animation.timeline instanceof DocumentTimeline &&
        Number.isFinite(animation.effect?.getComputedTiming().endTime)
      )
        animation.finish();
    }
  });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    `Overflow: ${label}/${width}`,
  );
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  assert.deepEqual(
    audit.violations.map(({ id, nodes }) => ({
      id,
      targets: nodes.map((node) => node.target),
    })),
    [],
    `${label}/${width}`,
  );
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
  });
  await page.screenshot({
    path: `${output}/${label}-${width}.png`,
    fullPage: true,
    animations: "disabled",
  });
  results.push({ label, width });
}
try {
  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      reducedMotion: "reduce",
    });
    await context.addInitScript(() => {
      localStorage.setItem("ea:analytics-consent:v1", "denied");
      Object.defineProperty(navigator, "share", {
        configurable: true,
        value: undefined,
      });
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: {
          writeText: async () => {
            throw new Error("test fallback");
          },
        },
      });
    });
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push(error.message));
    await visit(page, "/");
    await expect(page.getByRole("link", { name: "Surprise me" })).toBeVisible();
    await check(page, "home", width);
    const images = await page
      .locator("main img")
      .evaluateAll((elements) =>
        elements.map(
          (image) =>
            new URL(image.currentSrc).searchParams.get("url") ||
            image.getAttribute("src"),
        ),
      );
    assert.equal(
      new Set(images).size,
      images.length,
      "Home must not repeat photography across sections",
    );

    await visit(page, "/explore?place=japan&region=tokyo&surprise=1");
    await page.getByRole("button", { name: "Find my first discovery" }).click();
    const seen = [];
    let previousHref = "";
    for (let turn = 0; turn < 6; turn++) {
      const card = page.locator(".surprise-card .experience-card");
      await expect(card).toHaveCount(1);
      await expect(card.locator(".card-meta")).toContainText("Tokyo");
      const href = await card.locator("h3 a").getAttribute("href");
      if (turn === 3) seen.length = 0;
      assert.notEqual(
        href,
        previousHref,
        "No immediate repeat across a cycle boundary",
      );
      previousHref = href;
      assert.ok(
        !seen.includes(href),
        "No repeated discovery before exhausting choices",
      );
      seen.push(href);
      if (!turn) {
        await card.locator(".save-button").click();
        await expect(card.locator(".save-button")).toHaveAttribute(
          "aria-pressed",
          "true",
        );
        await page.getByRole("button", { name: "Send this discovery" }).click();
        await expect(page.getByLabel("Text to share")).toHaveValue(
          new RegExp(`https://experienceauthority.com${href}`),
        );
        await check(page, "surprise", width);
      }
      if (turn === 1)
        await expect(page.getByLabel("Text to share")).toHaveCount(0);
      if (turn < 5)
        await page.getByRole("button", { name: "Show me another" }).click();
    }
    await page.getByRole("button", { name: "Back to all matches" }).click();
    await expect(page.locator(".surprise-discovery")).toHaveCount(0);
    await page.goBack();
    await expect(
      page.getByRole("button", { name: "Find my first discovery" }),
    ).toBeVisible();
    await page.getByRole("searchbox").fill("a-query-with-no-match");
    await expect(page.locator(".surprise-discovery")).toContainText(
      "No current photographed guide fits",
    );
    await check(page, "surprise-empty", width);

    // Use an explicit saved anchor so the return filter has a deterministic local scope.
    await visit(page, "/experiences/cut-a-line-that-catches-the-light");
    const save = page
      .locator(".detail-start-actions .experience-actions button")
      .first();
    await expect(save).toBeEnabled();
    if ((await save.getAttribute("aria-pressed")) !== "true")
      await save.click();
    await check(page, "connected-guide", width);
    const pair = page.locator(".local-pair-save");
    await expect(pair).toBeVisible();
    const pairSave = pair.getByRole("button", {
      name: "Save these 2 experiences",
    });
    if (await pairSave.count()) await pairSave.click();
    await expect(
      pair.getByRole("link", { name: "Arrange your days" }),
    ).toBeVisible();
    const savedBefore = await page.evaluate(() =>
      localStorage.getItem("ea:passport:v1"),
    );

    await visit(page, "/new");
    await page.getByRole("button", { name: /New in my saved places/ }).click();
    const count = await page
      .locator(".new-guide-browser .experience-card")
      .count();
    for (const card of await page
      .locator(".new-guide-browser .experience-card")
      .all())
      await expect(card.locator(".card-meta")).toContainText("Tokyo");
    await check(page, count ? "new-saved-places" : "new-saved-empty", width);
    assert.equal(
      await page.evaluate(() => localStorage.getItem("ea:passport:v1")),
      savedBefore,
      "Filtering must not change Passport",
    );
    await page.getByRole("button", { name: "Show all places again" }).click();
    await page.locator(".new-filter-disclosure summary").click();
    await page.getByLabel("Country or territory").selectOption("thailand");
    await page.getByLabel("What interests you").selectOption("make-learn");
    await expect(
      page.locator(".new-guide-browser .experience-card"),
    ).toHaveCount(1);
    await expect(
      page.locator(".new-guide-browser .experience-card"),
    ).toContainText("Build the curry before the wok");
    await check(page, "new-filtered", width);
    await page.getByLabel("What interests you").selectOption("swim-reset");
    await expect(
      page.getByRole("heading", {
        name: "No new guide fits this combination yet.",
      }),
    ).toBeVisible();
    await page
      .getByRole("button", { name: "See all published guides" })
      .click();
    await expect(
      page.locator(".new-guide-browser .experience-card").first(),
    ).toBeVisible();

    await visit(page, "/places/thailand/bangkok");
    await expect(
      page.locator(".destination-browser .save-button").first(),
    ).toBeEnabled();
    await page.getByRole("link", { name: /^Make\s/ }).click();
    await expect(page).toHaveURL(`${base}/places/thailand/bangkok`);
    await page.getByLabel("Time for an experience").selectOption("calendar");
    await expect(
      page.getByRole("button", { name: "Show all experiences here" }),
    ).toBeVisible();
    await check(page, "destination-empty", width);
    await page
      .getByRole("button", { name: "Show all experiences here" })
      .click();
    await page.getByLabel("How you take part").selectOption("hands-on");
    await expect(
      page.locator(".destination-browser .experience-card"),
    ).toHaveCount(1);
    await check(page, "destination-planning", width);
    assert.deepEqual(errors, []);
    await context.close();
  }
  // Functional features remain usable when storage is denied.
  const context = await browser.newContext();
  await context.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("storage disabled");
      },
    });
  });
  const page = await context.newPage();
  await visit(page, "/explore?surprise=1");
  await page.getByRole("button", { name: "Find my first discovery" }).click();
  await expect(page.locator(".surprise-card")).toBeVisible();
  await visit(page, "/new");
  await page.locator(".new-filter-disclosure summary").click();
  await expect(page.getByLabel("Published")).toBeVisible();
  await context.close();
} catch (error) {
  errors.push(error.stack);
} finally {
  await browser.close();
  await fs.writeFile(
    `${output}/audit.json`,
    JSON.stringify({ base, results, errors }, null, 2),
  );
}
console.log(
  JSON.stringify({ views: results.length, results, errors }, null, 2),
);
if (errors.length) process.exitCode = 1;
