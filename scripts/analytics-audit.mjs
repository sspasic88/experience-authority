import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3117";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.EA_CHROME_PATH
    ? { executablePath: process.env.EA_CHROME_PATH }
    : {}),
});

try {
  const requests = [];
  const context = await browser.newContext({
    viewport: { width: 390, height: 900 },
  });
  await context.route(
    /google-analytics\.com|googletagmanager\.com/,
    async (route) => {
      requests.push(route.request().url());
      await route.abort();
    },
  );
  const page = await context.newPage();
  await page.goto(base + "/explore?q=private-search-text", {
    waitUntil: "networkidle",
  });

  await expect(
    page.getByRole("heading", { name: "Help us see what proves useful." }),
  ).toBeVisible();
  assert.equal(requests.length, 0, "Google was contacted before consent");
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  assert.deepEqual(
    axe.violations,
    [],
    "Consent panel has accessibility violations",
  );

  await page.getByRole("button", { name: "Allow analytics" }).click();
  await page.waitForFunction(() =>
    document.querySelector('script[data-ea-analytics="true"]'),
  );
  assert.ok(
    requests.some((url) => url.includes("googletagmanager.com/gtag/js")),
    "Google tag did not start after consent",
  );
  const commands = await page.evaluate(() =>
    (window.dataLayer || []).map((entry) => Array.from(entry)),
  );
  const serialized = JSON.stringify(commands);
  assert.ok(serialized.includes('"consent","default"'));
  assert.ok(serialized.includes('"analytics_storage":"denied"'));
  assert.ok(serialized.includes('"consent","update"'));
  assert.ok(serialized.includes('"analytics_storage":"granted"'));
  assert.ok(serialized.includes('"allow_google_signals":false'));
  assert.ok(serialized.includes('"event","page_view"'));
  assert.ok(!serialized.includes("private-search-text"));
  assert.ok(!serialized.includes("?q="));

  const requestCount = requests.length;
  await page.getByRole("button", { name: "Analytics choices" }).click();
  await page.getByRole("button", { name: "Do not use analytics" }).click();
  await page.waitForLoadState("networkidle");
  assert.equal(
    await page.evaluate(() => localStorage.getItem("ea:analytics-consent:v1")),
    "denied",
  );
  assert.equal(
    requests.length,
    requestCount,
    "Google tag reloaded after revocation",
  );
  await context.close();

  console.log(
    JSON.stringify(
      {
        beforeConsentRequests: 0,
        grantLoadedGoogleTag: true,
        queryAndPrivateDataExcluded: true,
        revocationReloadedWithoutGoogle: true,
        accessibilityViolations: 0,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
