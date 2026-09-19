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
test("Arcachon stays a bay-wide chapter regardless of guide order or a more specific site name", () => {
  for (const guides of [publicGuides, [...publicGuides].reverse()]) {
    assert.equal(
      regionsForCountry("france", guides).find(
        (region) => region.slug === "arcachon-bay",
      )?.name,
      "Arcachon Bay",
    );
  }
  const bay = publicGuides.filter(
    (guide) =>
      guide.countrySlug === "france" && guide.regionSlug === "arcachon-bay",
  );
  assert.equal(bay.length, 2);
  for (const guide of bay) {
    const next = connectedExperiences(guide, publicGuides)[0];
    assert.equal(next.scope, "same_area");
    assert.equal(next.label, "More in Arcachon Bay");
    assert.equal(next.href, "/places/france/arcachon-bay");
    assert.notEqual(next.item.field, guide.field);
  }
});

test("guide set contains 154 distinct, sourced public experiences, not Selected or demo records", () => {
  assert.equal(publicGuides.length, 154);
  assert.equal(
    new Set(publicGuides.map((p) => p.id)).size,
    publicGuides.length,
  );
  assert.equal(
    new Set(publicGuides.map((p) => p.slug)).size,
    publicGuides.length,
  );
  assert.equal(new Set(publicGuides.map((p) => p.countrySlug)).size, 104);
  assert.equal(
    new Set(territories.map((place) => place.slug)).size,
    territories.length,
  );
  for (const p of publicGuides) {
    assert.equal(p.status, "public_guide");
    assert.equal(p.demo, false);
    const media = guideMediaFor(p.id);
    assert.ok(media, `missing media record: ${p.slug}`);
    assert.equal(
      canPublishGuide(
        p,
        [p.guideReview!.checkedOn, media!.visualReview.checkedOn].sort().at(-1),
      ),
      true,
      p.slug,
    );
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
test("batch 39 keeps household, craft, wildlife, music and desert access within verified public scope", () => {
  const slugs = [
    "stay-where-the-town-knows-your-host",
    "follow-the-colour-back-to-the-wool",
    "meet-the-island-through-the-uga",
    "let-the-room-introduce-mindelo",
    "stay-until-the-desert-loses-its-colour",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug),
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[0]!.participation, /Friendship, ceremony and access beyond/i);
  assert.match(guides[1]!.participation, /motif reproduction/i);
  assert.match(guides[2]!.responsibility, /Do not demand handling/i);
  assert.match(guides[3]!.responsibility, /Do not label every Cape Verdean performance as morna/i);
  assert.match(guides[4]!.participation, /unrestricted desert access/i);
  assert.ok(
    guides.every((guide) =>
      guide!.access.includes("No EA booking or commission"),
    ),
  );
});
test("batch 38 keeps participation, wildlife and cultural access within verified public scope", () => {
  const slugs = [
    "build-hudut-from-the-coconut-outward",
    "pick-the-leaf-before-the-cup",
    "coil-the-lowcountry-one-stitch-at-a-time",
    "raise-a-room-from-a-circle",
    "watch-the-body-tension-the-loom",
    "read-prague-through-a-movement",
    "hear-the-flute-before-anyone-plays",
    "walk-where-terere-is-everyday-language",
    "meet-the-largest-fish-on-its-terms",
    "let-the-drum-recover-its-history",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug),
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[0]!.participation, /No private household access/i);
  assert.match(guides[1]!.responsibility, /paid labour/i);
  assert.match(guides[2]!.responsibility, /do not copy or commercialise/i);
  assert.match(guides[3]!.participation, /No construction competence/i);
  assert.match(guides[4]!.participation, /Observation and conversation/i);
  assert.match(guides[5]!.participation, /No gymnastics/i);
  assert.match(guides[6]!.responsibility, /Do not assume live music/i);
  assert.match(guides[7]!.evidence, /private sharing circle/i);
  assert.match(guides[8]!.responsibility, /Never touch, feed, chase/i);
  assert.match(guides[9]!.responsibility, /performance will occur/i);
  assert.ok(
    guides.every((guide) =>
      guide!.access.includes("No EA booking or commission"),
    ),
  );
});
test("batch 37 keeps public access narrower than the original candidate promise", () => {
  const slugs = [
    "let-the-clay-keep-the-fingerprints",
    "meet-the-cloth-before-it-becomes-a-gift",
    "enter-sevdah-through-the-room-that-remembers-it",
    "watch-silver-become-a-line",
    "let-the-ballad-move-the-circle",
    "hear-the-drum-after-sunset",
    "hear-the-wooden-racket-crack",
    "follow-cardboard-toward-bay-street",
    "move-the-stone-that-holds-the-water",
    "choose-the-harvest-before-the-cellar",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug),
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[2]!.participation, /No live performance/i);
  assert.match(guides[3]!.participation, /No making step/i);
  assert.match(guides[4]!.responsibility, /Do not assume recurrence/i);
  assert.match(guides[6]!.participation, /No lesson is promised/i);
  assert.match(guides[7]!.participation, /No active shack access/i);
  assert.match(guides[8]!.participation, /Tasks vary and can be strenuous/i);
  assert.match(guides[9]!.kernel, /seasonal possibility/i);
  assert.ok(
    guides.every((guide) =>
      guide!.access.includes("No EA booking or commission"),
    ),
  );
});
test("batch 36 preserves cultural, event, access and depiction boundaries", () => {
  const slugs = [
    "draw-the-line-that-keeps-the-colour-out",
    "meet-the-wine-below-the-cellar-floor",
    "climb-without-making-the-mountain-yours",
    "let-the-jebena-slow-the-cup",
    "let-the-lateen-sail-read-lamus-water",
    "hear-the-mallet-open-the-cloth",
    "begin-haida-gwaii-with-haida-voices",
    "let-the-band-open-the-dance-floor",
    "watch-rio-build-the-parade-before-carnaval",
    "stand-where-the-sound-system-does-the-talking",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug),
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[0]!.responsibility, /Do not copy or commercialise/i);
  assert.match(guides[2]!.participation, /No religious role/i);
  assert.match(guides[5]!.participation, /Visitor tool use/i);
  assert.match(guides[6]!.participation, /No private community/i);
  assert.match(guides[8]!.participation, /No parade-floor/i);
  assert.match(guides[9]!.responsibility, /return transport/i);
  assert.ok(
    guides.every((guide) =>
      guide!.access.includes("No EA booking or commission"),
    ),
  );
});
test("batch 35 preserves programme, private-interior, event and depiction boundaries", () => {
  const slugs = [
    "roast-the-cup-on-kilimanjaros-slopes",
    "listen-for-the-turn-inside-mugham",
    "hear-a-drum-become-an-instrument",
    "read-the-ballroom-above-the-shop",
    "read-the-island-one-stone-at-a-time",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug),
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[0]!.participation, /No farm work/i);
  assert.match(guides[1]!.responsibility, /one current option/i);
  assert.match(guides[2]!.participation, /No visitor metalworking/i);
  assert.match(guides[3]!.participation, /No event-hall/i);
  assert.match(guides[4]!.responsibility, /Do not plan the next edition/i);
  assert.ok(
    guides.every((guide) =>
      guide!.access.includes("No EA booking or commission"),
    ),
  );
});
test("batch 34 preserves access, season, animal and depiction boundaries", () => {
  const slugs = [
    "read-the-ring-before-the-horse-runs",
    "let-the-pony-read-the-mountain",
    "wait-until-the-turtle-is-ready",
    "read-nubia-before-the-sail-opens",
    "watch-one-bolt-cross-the-republic",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug),
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[0]!.responsibility, /2026 Alka has already taken place/i);
  assert.match(guides[1]!.responsibility, /animal-welfare practice/i);
  assert.match(guides[2]!.participation, /No research work/i);
  assert.match(guides[3]!.participation, /No combined programme/i);
  assert.match(guides[4]!.responsibility, /cited 2026 events have ended/i);
  assert.ok(
    guides.every((guide) =>
      guide!.access.includes("No EA booking or commission"),
    ),
  );
});
test("batch 33 preserves exact access, participation and depiction boundaries", () => {
  const slugs = [
    "meet-the-rose-before-it-becomes-water",
    "walk-inside-the-earthen-ring",
    "follow-the-pearl-back-underwater",
    "read-a-city-from-the-waterline",
    "let-the-delta-decide-the-route",
  ];
  const guides = slugs.map((slug) =>
    publicGuides.find((guide) => guide.slug === slug)!,
  );
  assert.ok(guides.every(Boolean));
  assert.match(guides[0].responsibility, /pick only/i);
  assert.match(guides[1].participation, /private residential space/i);
  assert.match(guides[2].evidence, /not guaranteed weather, a pearl find/i);
  assert.match(guides[3].participation, /Private homes/i);
  assert.match(guides[4].responsibility, /never stand/i);
  assert.ok(
    guides.every((guide) =>
      guide.access.includes("No EA booking or commission"),
    ),
  );
});
test("New York connects a recognisable food with living production and a difficult second history", () => {
  const newYork = publicGuides.filter(
    (guide) =>
      guide.countrySlug === "united-states" &&
      guide.regionSlug === "new-york-city",
  );
  assert.equal(newYork.length, 3);
  assert.deepEqual([...new Set(newYork.map((guide) => guide.field))].sort(), [
    "taste",
    "witness",
    "work",
  ]);
  assert.ok(newYork.every((guide) => guide.access.includes("No EA booking")));
  assert.match(
    newYork.find(
      (guide) => guide.slug === "open-the-other-side-of-ellis-island",
    )!.responsibility,
    /never enter closed spaces independently/,
  );
  assert.equal(
    connectedExperiences(newYork[0], publicGuides)[0].scope,
    "same_area",
  );
});
test("Rome moves from a familiar food to ancient infrastructure and an unexpected museum", () => {
  const rome = publicGuides.filter(
    (guide) => guide.countrySlug === "italy" && guide.regionSlug === "rome",
  );
  assert.equal(rome.length, 3);
  assert.deepEqual([...new Set(rome.map((guide) => guide.field))].sort(), [
    "move",
    "taste",
    "witness",
  ]);
  assert.ok(rome.every((guide) => guide.access.includes("No EA booking")));
  assert.match(
    rome.find((guide) => guide.slug === "ride-the-road-rome-built-to-leave-it")!
      .responsibility,
    /Some sections carry local vehicles/,
  );
  assert.equal(
    connectedExperiences(rome[0], publicGuides)[0].scope,
    "same_area",
  );
});
test("London connects a recognisable market with production work and hidden infrastructure", () => {
  const london = publicGuides.filter(
    (guide) =>
      guide.countrySlug === "united-kingdom" && guide.regionSlug === "london",
  );
  assert.equal(london.length, 3);
  assert.deepEqual([...new Set(london.map((guide) => guide.field))].sort(), [
    "taste",
    "witness",
    "work",
  ]);
  assert.ok(london.every((guide) => guide.access.includes("No EA booking")));
  assert.match(
    london.find(
      (guide) => guide.slug === "open-a-door-the-underground-left-behind",
    )!.responsibility,
    /never attempt to enter closed infrastructure independently/,
  );
  assert.equal(
    connectedExperiences(london[0], publicGuides)[0].scope,
    "same_area",
  );
});
test("Paris offers a recognisable entry, a living craft and hidden city work", () => {
  const paris = publicGuides.filter(
    (guide) => guide.countrySlug === "france" && guide.regionSlug === "paris",
  );
  assert.equal(paris.length, 3);
  assert.deepEqual([...new Set(paris.map((guide) => guide.field))].sort(), [
    "taste",
    "witness",
    "work",
  ]);
  assert.ok(paris.every((guide) => guide.access.includes("No EA booking")));
  assert.match(
    paris.find(
      (guide) => guide.slug === "watch-a-picture-grow-one-thread-at-a-time",
    )!.access,
    /French-language route/,
  );
  assert.equal(
    connectedExperiences(paris[0], publicGuides)[0].scope,
    "same_area",
  );
});
test("public guide headlines avoid sensational, extreme and objectifying travel language", () => {
  const disallowed =
    /\b(extreme|dangerous|crazy|adrenaline|bucket list|once in a lifetime|untouched|primitive|exotic)\b/i;
  for (const guide of publicGuides) {
    assert.doesNotMatch(
      `${guide.title} ${guide.summary}`,
      disallowed,
      guide.slug,
    );
  }
  const kuopio = publicGuides.find(
    (guide) => guide.slug === "step-from-smoke-sauna-into-the-lake",
  )!;
  assert.equal(kuopio.title, "Make an evening of the smoke sauna");
  assert.match(kuopio.responsibility, /swimming are optional/);
});
test("Kraków offers three distinct, connected reasons to stay with an honest event boundary", () => {
  const krakow = publicGuides.filter(
    (guide) => guide.countrySlug === "poland" && guide.regionSlug === "krakow",
  );
  assert.equal(krakow.length, 3);
  assert.deepEqual([...new Set(krakow.map((guide) => guide.field))].sort(), [
    "make",
    "taste",
    "witness",
  ]);
  const event = krakow.find(
    (guide) => guide.slug === "watch-a-city-arrive-in-miniature",
  )!;
  assert.match(event.access, /3 December 2026/);
  assert.match(event.access, /not offered here as visitor access/);
  assert.equal(connectedExperiences(event, publicGuides)[0].scope, "same_area");
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
