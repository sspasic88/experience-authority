import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3103";
const output = process.env.EA_AUDIT_OUTPUT || "../../work/ea-visitor-audit";
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.EA_CHROME_PATH
    ? { executablePath: process.env.EA_CHROME_PATH }
    : {}),
});
const results = [];
const errors = [];
async function visit(page, path) {
  await page.goto(base + path, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
}
async function audit(page, label) {
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    `Overflow: ${label}`,
  );
  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  assert.deepEqual(
    violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    [],
    label,
  );
  results.push(label);
}
async function capture(page, path, fullPage = true) {
  await page.evaluate(async () => {
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
    await Promise.all(
      [...document.images].map((img) => {
        img.loading = "eager";
        return img.decode().catch(() => {});
      }),
    );
  });
  if (fullPage) await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path, fullPage });
}
try {
  for (const width of [320, 390, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      acceptDownloads: true,
    });
    // Isolated test browser only; never touches the visitor's real Passport.
    await context.addInitScript(() => {
      Object.defineProperty(navigator, "share", {
        configurable: true,
        value: undefined,
      });
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: {
          writeText: async () => {
            throw new Error("clipboard disabled for fallback test");
          },
        },
      });
    });
    const page = await context.newPage();
    page.on("pageerror", (e) => errors.push(e.message));
    await visit(page, "/explore");
    await expect(page.locator(".experience-card")).toHaveCount(114);
    for (const slug of ["a-bowl-of-attention", "bread-from-the-tonir"]) {
      const card = page
        .locator(".experience-card")
        .filter({ has: page.locator(`a[href="/experiences/${slug}"]`) });
      await card.locator(".save-button").click();
    }
    await visit(page, "/");
    await expect(
      page.getByRole("link", { name: "Continue my journey" }),
    ).toBeVisible();
    await expect(page.locator(".prototype-hero-image-link")).toHaveCount(3);
    await page.getByRole("link", { name: "Continue my journey" }).click();
    await expect(
      page.getByLabel("Journey name", { exact: true }),
    ).toBeVisible();
    await page
      .getByLabel("Journey name", { exact: true })
      .fill("PRIVATE journey");
    await page
      .getByLabel("Add a saved experience")
      .selectOption("kyoto-camellia-tea");
    await page
      .getByLabel("Add a saved experience")
      .selectOption("tsaghkunk-lavash");
    await page.getByLabel("Day for A bowl of attention").fill("2");
    await page
      .getByLabel("My note", { exact: true })
      .first()
      .fill("PRIVATE personal note");
    await page
      .getByLabel("Travel & stay notes", { exact: true })
      .fill("PRIVATE travel notes");
    await expect(page.locator(".trip-caution")).toBeVisible();
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.getByLabel("Journey name", { exact: true })).toHaveValue(
      "PRIVATE journey",
    );
    await expect(page.getByLabel("Day for A bowl of attention")).toHaveValue(
      "2",
    );
    await expect(page.locator(".trip-entry")).toHaveCount(2);
    for (const input of await page.locator(".trip-day input").all())
      assert(
        (await input.boundingBox()).height < 80,
        "Day field must not stretch with the card",
      );
    await page
      .getByRole("button", { name: "Share this plan", exact: true })
      .click();
    const shared = page.getByRole("textbox", {
      name: "Text to share",
      exact: true,
    });
    await expect(shared).toBeVisible();
    assert(!(await shared.inputValue()).includes("PRIVATE"));
    assert(
      (await shared.inputValue()).indexOf("Day 1") <
        (await shared.inputValue()).indexOf("Day 2"),
    );
    await page
      .getByLabel(
        "Include my journey name, planning status and private notes when sharing",
      )
      .check();
    await expect(shared).toHaveValue(/PRIVATE personal note/);
    await page
      .getByLabel(
        "Include my journey name, planning status and private notes when sharing",
      )
      .uncheck();
    assert(
      !(await shared.inputValue()).includes("PRIVATE"),
      "Old private text must not remain after opting out",
    );
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download my plan" }).click();
    const download = await downloadPromise;
    assert.equal(download.suggestedFilename(), "my-ea-journey.txt");
    const downloaded = await fs.readFile(await download.path(), "utf8");
    assert(downloaded.includes("PRIVATE personal note"));
    await audit(
      page,
      `populated private planner + manual sharing at ${width}px`,
    );
    await capture(page, `${output}/journey-${width}.png`);
    const second = await context.newPage();
    await visit(second, "/passport?view=plan");
    await expect(
      second.getByLabel("Journey name", { exact: true }),
    ).toHaveValue("PRIVATE journey");
    await page
      .getByLabel("Journey name", { exact: true })
      .fill("Updated across tabs");
    await expect(
      second.getByLabel("Journey name", { exact: true }),
    ).toHaveValue("Updated across tabs");
    await second.close();
    await page
      .getByRole("button", { name: "Remove A bowl of attention from plan" })
      .click();
    await expect(page.locator(".trip-entry")).toHaveCount(1);
    await expect(page.locator(".trip-caution")).toHaveCount(0);
    results.push(
      `local save, reload, cross-tab sync, removal, private share and export at ${width}px`,
    );
    for (const slug of ["a-bowl-of-attention", "bread-from-the-tonir"]) {
      await visit(page, `/experiences/${slug}`);
      await page
        .locator(".prototype-detail-photo img")
        .evaluate((img) => img.decode());
      const trigger = page.getByRole("button", {
        name: /^Enlarge photograph:/,
      });
      await trigger.click();
      const modal = page.getByRole("dialog", { name: "A closer look" });
      await expect(modal).toBeVisible();
      await modal.locator("img").evaluate((img) => img.decode());
      await expect(
        page.getByRole("button", { name: "Close photograph" }),
      ).toBeFocused();
      await audit(page, `photo modal ${slug} at ${width}px`);
      if (slug === "bread-from-the-tonir")
        await capture(page, `${output}/photo-${width}.png`, false);
      await page.keyboard.press("Escape");
      await expect(modal).not.toBeVisible();
      await expect(trigger).toBeFocused();
      await expect
        .poll(() => page.evaluate(() => document.body.style.overflow))
        .toBe("");
      await page.getByRole("button", { name: "Share", exact: true }).click();
      await expect(
        page.getByRole("textbox", { name: "Text to share", exact: true }),
      ).toHaveValue(
        new RegExp(`https://experienceauthority.com/experiences/${slug}`),
      );
      await audit(page, `guide share fallback ${slug} at ${width}px`);
      if (slug === "bread-from-the-tonir")
        await capture(page, `${output}/detail-${width}.png`);
    }
    await context.close();
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  await visit(page, "/experiences/a-bowl-of-attention");
  await page.evaluate(() => {
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: async (payload) => {
        window.__shared = payload;
      },
    });
  });
  await page.getByRole("button", { name: "Share", exact: true }).click();
  assert.equal(
    await page.evaluate(() => window.__shared.url),
    "https://experienceauthority.com/experiences/a-bowl-of-attention",
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: async () => {
        throw new DOMException("Cancelled", "AbortError");
      },
    });
  });
  await page.getByRole("button", { name: "Share", exact: true }).click();
  await expect(
    page.getByRole("textbox", { name: "Text to share", exact: true }),
  ).toHaveCount(0);
  results.push(
    "native share payload and cancelled share; no external message sent",
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.__copied = text;
        },
      },
    });
  });
  await page.getByRole("button", { name: "Share", exact: true }).click();
  await expect(page.getByText(/^Copied\. Paste/)).toBeVisible();
  assert(
    (await page.evaluate(() => window.__copied)).includes(
      "a-bowl-of-attention",
    ),
  );
  results.push("clipboard share fallback");
  await context.close();
  const blocked = await browser.newContext();
  await blocked.addInitScript(() =>
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Storage disabled", "SecurityError");
      },
    }),
  );
  const blockedPage = await blocked.newPage();
  await visit(blockedPage, "/passport?view=plan");
  await expect(blockedPage.getByText(/Storage is unavailable/)).toBeVisible();
  await expect(
    blockedPage.getByLabel("Journey name", { exact: true }),
  ).toBeVisible();
  results.push("storage-disabled session remains usable with visible warning");
  await blocked.close();
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify({ checks: results.length, results, errors }, null, 2),
  );
} finally {
  await fs.writeFile(
    `${output}/visitor-audit.json`,
    JSON.stringify({ results, errors }, null, 2),
  );
  await browser.close();
}
