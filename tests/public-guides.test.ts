import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import {
  canPublishGuide,
  canPublish,
  toPublicExperience,
} from "../src/lib/publication";
import {
  filterExperiences,
  territories,
  regionsForCountry,
  connectedExperiences,
  relatedExperiences,
} from "../src/lib/catalog";
import { isDiscoverable, SITE_ORIGIN } from "../src/lib/seo";
import { sitemapEntries } from "../src/lib/discovery";
import { guideMediaFor, publicGuideMedia } from "../src/lib/media";

const today = "2026-09-12";
const sample = publicGuides.find((p) => p.id === "kumano-daimon-zaka")!;
test("guide set contains sixty-one distinct, sourced public experiences, not Selected or demo records", () => {
  assert.equal(publicGuides.length, 61);
  assert.equal(
    new Set(publicGuides.map((p) => p.id)).size,
    publicGuides.length,
  );
  assert.equal(
    new Set(publicGuides.map((p) => p.slug)).size,
    publicGuides.length,
  );
  assert.equal(new Set(publicGuides.map((p) => p.countrySlug)).size, 36);
  assert.equal(
    new Set(territories.map((place) => place.slug)).size,
    territories.length,
  );
  for (const p of publicGuides) {
    assert.equal(canPublishGuide(p, "2026-09-13"), true, p.slug);
    assert.equal(p.status, "public_guide");
    assert.equal(p.demo, false);
    const media = guideMediaFor(p.id);
    assert.ok(media, `missing media record: ${p.slug}`);
    assert.equal(media?.visualReview.outcome, "approved");
    assert.equal(p.image, media?.src);
    assert.equal(p.imageAlt, media?.alt);
    assert.ok(
      territories.some(
        (t) =>
          t.slug === p.countrySlug &&
          regionsForCountry(t.slug, publicGuides).some(
            (r) => r.slug === p.regionSlug,
          ),
      ),
    );
    assert.ok(p.guideReview!.sources.every((s) => s.note.length > 20));
  }
  assert.equal(publicGuideMedia.length, publicGuides.length);
  assert.equal(
    new Set(publicGuideMedia.map((media) => media.src)).size,
    publicGuides.length,
  );
});
test("new regions are derived from real coverage and recommendations favour a relevant connection", () => {
  assert.deepEqual(
    regionsForCountry("japan", publicGuides)
      .map((r) => r.slug)
      .sort(),
    ["koyasan", "kumano-kodo", "kyoto"],
  );
  assert.deepEqual(
    regionsForCountry("spain", publicGuides)
      .map((r) => r.slug)
      .sort(),
    ["asturias", "barcelona"],
  );
  const kyoto = publicGuides.find((p) => p.id === "kyoto-camellia-tea")!;
  assert.equal(relatedExperiences(kyoto, publicGuides)[0].countrySlug, "japan");
  assert.ok(
    relatedExperiences(kyoto, publicGuides).every((p) => p.id !== kyoto.id),
  );
});
test("connected guides prefer local contrast and label wider geography honestly", () => {
  const gaia = publicGuides.find(
    (guide) => guide.slug === "taste-what-time-does-to-port",
  )!;
  const gaiaConnections = connectedExperiences(gaia, publicGuides);
  assert.ok(
    [
      "paint-the-pattern-you-noticed",
      "hear-the-church-before-you-climb",
    ].includes(gaiaConnections[0].item.slug),
  );
  assert.equal(gaiaConnections[0].scope, "connected_area");
  assert.equal(gaiaConnections[0].label, "Porto and Gaia");
  assert.equal(gaiaConnections[0].href, "/places/portugal");
  assert.notEqual(gaiaConnections[0].item.field, gaia.field);
  assert.ok(
    gaiaConnections.every(
      (connection) => connection.scope === "connected_area",
    ),
  );
  assert.ok(
    gaiaConnections.some(
      (connection) => connection.item.slug === "let-the-market-write-your-menu",
    ),
  );

  const istanbul = publicGuides.find(
    (guide) => guide.slug === "marble-steam-istanbul",
  )!;
  const istanbulConnections = connectedExperiences(istanbul, publicGuides);
  assert.ok(
    istanbulConnections
      .slice(0, 2)
      .every((connection) => connection.scope === "same_area"),
  );

  const xochimilco = publicGuides.find(
    (guide) => guide.slug === "mexico-city-grown-on-water",
  )!;
  assert.ok(
    connectedExperiences(xochimilco, publicGuides)
      .slice(0, 2)
      .every((connection) => connection.scope === "connected_area"),
  );

  const coneyIsland = publicGuides.find(
    (guide) => guide.slug === "walk-the-island-between-forest-and-shore",
  )!;
  assert.equal(
    connectedExperiences(coneyIsland, publicGuides)[0].label,
    "More in Singapore",
  );
  assert.equal(
    connectedExperiences(coneyIsland, publicGuides)[0].href,
    "/places/singapore/singapore",
  );
});
test("desk guides fail closed for missing evidence, special permission, stale or future checks", () => {
  const r = sample.guideReview!;
  for (const override of [
    { sources: [] },
    { sources: [r.sources[0], r.sources[0]] },
    { accessUrl: "javascript:alert(1)" },
    { accessUrl: "https://not-a-cited-source.example" },
    { checkedOn: "2026-09-13" },
    { checkedOn: "2026-02-30" },
    { reviewBy: "2026-09-11" },
    { reviewBy: "2027-09-12" },
    { sources: r.sources.map((s) => ({ ...s, url: "http://unsafe.example" })) },
  ])
    assert.equal(
      canPublishGuide({ ...sample, guideReview: { ...r, ...override } }, today),
      false,
    );
  assert.equal(
    canPublishGuide({ ...sample, guideReview: undefined }, today),
    false,
  );
  assert.equal(
    canPublishGuide({ ...sample, image: "/unlicensed.jpg" }, today),
    false,
  );
  assert.equal(canPublishGuide({ ...sample, demo: true }, today), false);
  assert.equal(
    canPublishGuide({ ...sample, status: "selected_open" }, today),
    false,
  );
  assert.equal(
    canPublishGuide(
      {
        ...sample,
        guideReview: { ...r, requiresSpecialPermission: true } as never,
      },
      today,
    ),
    false,
  );
  assert.equal(canPublishGuide(sample, "2026-12-12"), false);
});
test("guide evidence is recursively allowlisted, not a raw dossier or private contact", () => {
  const p = {
    ...sample,
    guideReview: {
      ...sample.guideReview!,
      privateNotes: "SECRET",
      sources: sample.guideReview!.sources.map((s) => ({
        ...s,
        privateNotes: "SECRET",
      })),
    },
  };
  const dto = toPublicExperience({
    id: p.id,
    status: p.status,
    publicCopy: p,
    holderContact: "SECRET",
  });
  // The gate also uses real time: expired guides must return null, not leak data.
  assert.ok(!JSON.stringify(dto).includes("SECRET"));
  if (canPublishGuide(sample))
    assert.equal(dto?.guideReview?.sources.length, 2);
});
test("guide route cannot confer selected publication approval", () => {
  assert.equal(
    canPublish({
      status: "public_guide",
      revision: 1,
      highRisk: false,
      holderConsent: true,
      evidenceReviewed: true,
      approvals: [{ reviewerId: "editor", role: "editor", revision: 1 }],
    }),
    false,
  );
  assert.equal(
    canPublish({
      status: "selected_open",
      revision: 1,
      highRisk: false,
      holderConsent: false,
      evidenceReviewed: true,
      approvals: [{ reviewerId: "editor", role: "editor", revision: 1 }],
    }),
    false,
  );
});
test("guides support search and places; indexing still requires an explicit launch", () => {
  assert.equal(
    filterExperiences(publicGuides, {
      q: "Row Venice",
      field: "move",
      place: "italy",
    }).length,
    1,
  );
  assert.equal(
    filterExperiences(publicGuides, { status: "selected_open" }).length,
    0,
  );
  assert.equal(filterExperiences(publicGuides, { q: "<script>" }).length, 0);
  assert.deepEqual(sitemapEntries(publicGuides, {}), []);
  const launch = {
    NODE_ENV: "production",
    EA_SITE_URL: SITE_ORIGIN,
    EA_LAUNCH_READY: "true",
    EA_INDEXING_ENABLED: "true",
    VERCEL_ENV: "production",
  };
  const urls = sitemapEntries(publicGuides, launch).map((e) => e.url);
  for (const p of publicGuides)
    assert.equal(
      urls.includes(`${SITE_ORIGIN}/experiences/${p.slug}`),
      isDiscoverable(p),
    );
  const guideEntry = sitemapEntries(publicGuides, launch).find(
    (entry) => entry.url === `${SITE_ORIGIN}/experiences/${sample.slug}`,
  );
  assert.equal(
    guideEntry?.lastModified?.toISOString(),
    "2026-09-12T00:00:00.000Z",
  );
  assert.ok(!urls.some((url) => url.includes("learning-the-language-of-clay")));
});
