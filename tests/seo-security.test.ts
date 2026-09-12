import test from "node:test";
import assert from "node:assert/strict";
import {
  canonicalUrl,
  indexingEnabled,
  isDiscoverable,
  serializeJsonLd,
  SITE_ORIGIN,
  guideStructuredData,
  collectionStructuredData,
} from "../src/lib/seo";
import { publicGuides } from "../src/lib/public-guides";
import { guideMediaFor } from "../src/lib/media";
import { sitemapEntries } from "../src/lib/discovery";
import { contentSecurityPolicy, isTrainingBot } from "../src/lib/security";
import type { PublicExperience } from "../src/lib/catalog";
import { analyticsMeasurementId } from "../src/lib/analytics";

const launch = {
  NODE_ENV: "production",
  EA_SITE_URL: SITE_ORIGIN,
  EA_LAUNCH_READY: "true",
  EA_INDEXING_ENABLED: "true",
  VERCEL_ENV: "production",
};

test("indexing requires explicit production and editorial release configuration", () => {
  assert.equal(indexingEnabled({}), false);
  assert.equal(indexingEnabled(launch), true);
  for (const override of [
    { NODE_ENV: "development" },
    { EA_SITE_URL: "https://preview.vercel.app" },
    { EA_SITE_URL: `${SITE_ORIGIN}/` },
    { EA_LAUNCH_READY: "false" },
    { EA_INDEXING_ENABLED: undefined },
    { EA_DEMO_MODE: "true" },
    { VERCEL_ENV: "preview" },
    { VERCEL: "1", VERCEL_ENV: undefined },
  ])
    assert.equal(indexingEnabled({ ...launch, ...override }), false);
});

test("canonicals fix the origin and remove query/hash variants", () => {
  assert.equal(
    canonicalUrl("/explore?q=clay#results"),
    `${SITE_ORIGIN}/explore`,
  );
  for (const bad of [
    "https://attacker.test",
    "//attacker.test",
    "/\\attacker.test",
    " /about",
    "/\n/evil",
  ])
    assert.throws(() => canonicalUrl(bad));
});

test("JSON-LD cannot break out of its script element", () => {
  const value = { text: "</script><script>alert(1)</script>&\u2028\u2029" };
  const safe = serializeJsonLd(value);
  assert.ok(!/[<>&\u2028\u2029]/.test(safe));
  assert.deepEqual(JSON.parse(safe), value);
});

test("guide structured data reflects visible sources and photo rights, never offers or ratings", () => {
  for (const item of publicGuides) {
    const data = guideStructuredData(item);
    assert.ok(data);
    const [article, rawImage] = data["@graph"];
    const image = rawImage as Record<string, unknown>;
    assert.equal(article.headline, item.title);
    assert.equal(article.dateModified, item.guideReview?.checkedOn);
    assert.deepEqual(
      article.citation,
      item.guideReview?.sources.map((source) => source.url),
    );
    const media = guideMediaFor(item.id)!;
    assert.equal(
      image.license,
      media.rightsBasis === "documented_license" ? media.licenseUrl : undefined,
    );
    assert.equal(image.acquireLicensePage, media.sourceUrl);
    assert.equal(image.caption, media.depiction);
    assert.ok(
      !/aggregateRating|priceCurrency|Offer|datePublished/.test(
        JSON.stringify(data),
      ),
    );
    assert.equal(
      guideStructuredData({ ...item, status: "protected_visibility" }),
      null,
    );
    assert.equal(guideStructuredData({ ...item, demo: true }), null);
  }
});

test("demo, protected and paused records never enter discovery feeds", () => {
  const base = {
    demo: false,
    status: "selected_open",
    slug: "public-story",
    field: "make",
    countrySlug: "portugal",
    regionSlug: "alentejo",
  } as PublicExperience;
  const excluded = [
    { ...base, demo: true, slug: "demo-secret" },
    { ...base, status: "protected_visibility", slug: "protected-secret" },
    { ...base, status: "paused", slug: "paused-secret" },
    { ...base, status: "research_candidate", slug: "research-secret" },
  ] as PublicExperience[];
  assert.equal(isDiscoverable(base), true);
  excluded.forEach((item) => assert.equal(isDiscoverable(item), false));
  assert.deepEqual(sitemapEntries([base], {}), []);
  const urls = sitemapEntries([base, ...excluded], launch).map(
    (entry) => entry.url,
  );
  assert.ok(urls.includes(`${SITE_ORIGIN}/experiences/public-story`));
  assert.ok(urls.includes(`${SITE_ORIGIN}/places/portugal/alentejo`));
  assert.ok(
    !urls.some((url) => /secret|passport|suggest|corrections|\?/.test(url)),
  );
});

test("destination lists describe only visible guides and journal pages enter the released sitemap", () => {
  const local = publicGuides.filter(
    (item) => item.countrySlug === "japan" && item.regionSlug === "kyoto",
  );
  const hidden = {
    ...local[0],
    slug: "hidden",
    status: "protected_visibility",
  } as PublicExperience;
  const data = collectionStructuredData(
    "Kyoto experiences",
    "/places/japan/kyoto",
    [...local, hidden],
  )!;
  assert.equal(data.mainEntity.numberOfItems, 3);
  assert.deepEqual(
    data.mainEntity.itemListElement.map((item) => item.position),
    [1, 2, 3],
  );
  assert.ok(!JSON.stringify(data).includes("hidden"));
  assert.equal(
    collectionStructuredData("Hidden", "/places/hidden", [hidden]),
    null,
  );
  const urls = sitemapEntries(publicGuides, launch).map((entry) => entry.url);
  assert.equal(urls.filter((url) => url.includes("/journal/")).length, 8);
  assert.equal(urls.filter((url) => url.includes("/collections/")).length, 12);
  assert.ok(urls.includes(`${SITE_ORIGIN}/places/japan/kyoto`));
});

test("production script policy requires a nonce with no eval or inline exception", () => {
  const policy = contentSecurityPolicy(
    "abcdefghijklmnopqrstuvwxyz012345",
    false,
  );
  const scripts = policy
    .split("; ")
    .find((part) => part.startsWith("script-src "))!;
  assert.ok(scripts.includes("'nonce-abcdefghijklmnopqrstuvwxyz012345'"));
  assert.ok(scripts.includes("'strict-dynamic'"));
  assert.ok(!scripts.includes("unsafe-inline"));
  assert.ok(!policy.includes("unsafe-eval"));
  assert.ok(!policy.includes("mcp.figma.com"));
  assert.ok(policy.includes("https://www.googletagmanager.com"));
  assert.ok(policy.includes("https://www.google-analytics.com"));
  assert.ok(policy.includes("frame-ancestors 'none'"));
  assert.ok(
    contentSecurityPolicy("abcdefghijklmnopqrstuvwxyz012345", true).includes(
      "unsafe-eval",
    ),
  );
  assert.throws(() => contentSecurityPolicy("bad'; script-src *", false));
});

test("analytics configuration fails closed without a separate valid GA4 stream", () => {
  assert.equal(analyticsMeasurementId(), null);
  assert.equal(analyticsMeasurementId(""), null);
  assert.equal(analyticsMeasurementId("UA-123"), null);
  assert.equal(analyticsMeasurementId("G-ABC<script>"), null);
  assert.equal(analyticsMeasurementId(" g-ab12cd34 "), "G-AB12CD34");
});

test("training crawler preference does not block search and user-directed agents", () => {
  for (const agent of [
    "Mozilla/5.0 (compatible; GPTBot/1.2)",
    "ClaudeBot",
    "CCBot/2.0",
    "Meta-ExternalAgent/1.1",
  ])
    assert.equal(isTrainingBot(agent), true);
  for (const agent of [
    "Googlebot",
    "Bingbot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "Mozilla/5.0",
    "NotGPTBot",
  ])
    assert.equal(isTrainingBot(agent), false);
});
