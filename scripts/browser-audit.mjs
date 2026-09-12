import assert from "node:assert/strict";
import fs from "node:fs";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3103";
const output = process.env.EA_AUDIT_OUTPUT || "../../work/ea-ui-audit";
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.EA_CHROME_PATH
    ? { executablePath: process.env.EA_CHROME_PATH }
    : {}),
});
const results = [];
const failures = [];
const links = new Set();
const routes = [
  "/",
  "/explore",
  "/explore?view=list",
  "/experiences/venice-through-an-oar",
  "/experiences/colour-before-cloth",
  "/places",
  "/fields",
  "/collections",
  "/passport",
  "/method",
  "/credits",
  "/suggest",
  "/corrections",
];
try {
  for (const width of [390, 768, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
    });
    const page = await context.newPage();
    for (const route of routes) {
      const errors = [];
      const onError = (error) => errors.push(error.message);
      page.on("pageerror", onError);
      const response = await page.goto(base + route, {
        waitUntil: "networkidle",
      });
      await page.evaluate(async () => {
        await document.fonts.ready;
        // Load off-screen images too, so full-page captures cannot hide broken assets.
        await Promise.all(
          [...document.images].map((img) => {
            img.loading = "eager";
            return img.decode().catch(() => {});
          }),
        );
      });
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1: document.querySelectorAll("h1").length,
        brokenImages: [...document.images]
          .filter((img) => !img.complete || !img.naturalWidth)
          .map((img) => img.currentSrc),
        font: getComputedStyle(document.body).fontFamily,
        links: [...document.querySelectorAll("a[href]")].map((a) =>
          a.getAttribute("href"),
        ),
        badges: [...document.querySelectorAll(".image-source-badge")].map(
          (badge) => ({
            height: badge.getBoundingClientRect().height,
            width: badge.getBoundingClientRect().width,
            photoWidth: badge.parentElement.getBoundingClientRect().width,
          }),
        ),
      }));
      state.links.forEach((link) => {
        if (link.startsWith("/") && !link.startsWith("//"))
          links.add(link.split("#")[0]);
      });
      delete state.links;
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      const violations = axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      }));
      const result = {
        width,
        route,
        status: response.status(),
        errors,
        ...state,
        violations,
      };
      results.push(result);
      if (
        result.status !== 200 ||
        result.overflow ||
        result.h1 !== 1 ||
        errors.length ||
        state.brokenImages.length ||
        violations.length ||
        state.badges.some((b) => b.height > 60 || b.width > b.photoWidth * 0.8)
      )
        failures.push(result);
      if (
        ["/", "/explore", "/experiences/venice-through-an-oar"].includes(route)
      ) {
        await page.screenshot({
          path: `${output}/${route === "/" ? "home" : route === "/explore" ? "compass" : "detail"}-${width}.png`,
          fullPage: true,
        });
      }
      page.off("pageerror", onError);
    }
    await page.goto(base + "/", { waitUntil: "networkidle" });
    await page
      .getByRole("searchbox", { name: "Search experiences" })
      .fill("cacao");
    await page
      .getByRole("button", { name: "Search experiences", exact: true })
      .click();
    await page.waitForURL(/q=cacao/);
    await expect(page.locator(".experience-card")).toHaveCount(1);
    await page.goto(base + "/explore", { waitUntil: "networkidle" });
    const firstCard = page.locator(".experience-card").first();
    await firstCard.locator(".save-button").click();
    assert.equal(
      await firstCard.locator(".save-button").getAttribute("aria-pressed"),
      "true",
    );
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(
      await page.locator(".save-button").first().getAttribute("aria-pressed"),
      "true",
    );
    await page.locator(".card-photo-link").first().click();
    await page.waitForURL("**/experiences/leave-room-for-devotion");
    await page.getByRole("button", { name: "Compare", exact: true }).click();
    await page.locator(".compare-tray a").click();
    await page.waitForURL("**/passport?view=compare");
    await expect(
      page
        .locator(".compare-table")
        .getByRole("link", { name: /Leave room for devotion/ }),
    ).toBeVisible();
    await page.goto(base + "/explore");
    await page.getByRole("searchbox").fill("cacao");
    await page.getByRole("button", { name: "Search", exact: true }).click();
    await page.waitForURL(/q=cacao/);
    await expect(page.locator(".experience-card")).toHaveCount(1);
    assert.ok(
      await page
        .getByRole("heading", { name: "Before the chocolate bar" })
        .count(),
    );
    if (width === 390) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page.keyboard.press("Escape");
      assert.equal(
        await page
          .getByRole("button", { name: "Open navigation" })
          .getAttribute("aria-expanded"),
        "false",
      );
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "Places", exact: true })
        .click();
      await page.waitForURL("**/places");
      assert.equal(
        await page
          .getByRole("button", { name: "Open navigation" })
          .getAttribute("aria-expanded"),
        "false",
      );
    }
    await context.close();
  }
  const page = await browser.newPage();
  for (const link of links) {
    const response = await page.request.get(base + link);
    if (!response.ok()) failures.push({ link, status: response.status() });
  }
  console.log(
    JSON.stringify(
      {
        views: results.length,
        internalLinks: links.size,
        interactions:
          "save persistence, image click, compare, search, mobile menu and Escape passed",
        failures,
      },
      null,
      2,
    ),
  );
} catch (error) {
  failures.push({ error: error.stack });
  console.error(error);
} finally {
  fs.writeFileSync(
    `${output}/audit.json`,
    JSON.stringify(
      { base, results, failures, internalLinks: [...links] },
      null,
      2,
    ),
  );
  await browser.close();
}
if (failures.length) process.exitCode = 1;
