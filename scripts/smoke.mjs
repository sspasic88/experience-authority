import assert from "node:assert/strict";

const base = process.env.EA_TEST_URL || "http://127.0.0.1:3100";
const liveIndexing = process.env.EA_TEST_INDEXING === "true";
const utilityPaths = new Set(["/passport", "/suggest", "/corrections"]);
const emptyFields = new Set(["contribute"]);
const paths = [
  "/",
  "/explore",
  "/explore?q=clay&field=make&view=list",
  "/places",
  "/fields",
  ...[
    "taste",
    "make",
    "move",
    "nature",
    "gather",
    "celebrate",
    "witness",
    "learn",
    "restore",
    "stay",
    "work",
    // Empty editorial fields are intentionally not public category routes.
    "play",
  ].map((f) => `/fields/${f}`),
  "/collections",
  "/collections/the-pleasure-of-being-a-beginner",
  "/collections/what-a-place-tastes-like",
  "/collections/cities-from-the-inside",
  "/places/united-states/new-york-city",
  "/experiences/make-the-bagel-before-new-york-serves-it",
  "/experiences/follow-the-fizz-through-a-working-factory",
  "/experiences/open-the-other-side-of-ellis-island",
  "/passport",
  "/plan",
  "/passport?view=compare",
  "/passport?view=plan",
  "/method",
  "/about",
  "/contact",
  "/accessibility",
  "/terms",
  "/legal",
  "/suggest",
  "/corrections",
  "/transparency",
  "/privacy",
  "/credits",
];
const failures = [];
if (process.env.EA_TEST_DEMO === "true") {
  paths.push(
    "/places/croatia",
    "/places/croatia/dalmatia",
    "/places/portugal/alentejo",
    "/places/japan/tokyo",
    "/places/italy/emilia-romagna",
    "/places/slovenia/julian-alps",
  );
  paths.push(
    ...[
      "learning-the-language-of-clay",
      "before-the-harbour-wakes",
      "what-the-season-brings",
      "a-different-kind-of-quiet",
      "reading-a-living-landscape",
      "a-table-without-a-script",
      "learning-to-look-again",
      "some-stories-need-distance",
    ].map((slug) => `/experiences/${slug}`),
  );
} else {
  paths.push(
    ...[
      "finland/tampere",
      "japan/kumano-kodo",
      "japan/kyoto",
      "armenia/gegharkunik",
      "italy/venice",
      "laos/luang-prabang",
      "iceland/reykjavik",
      "austria/vienna",
      "grenada/saint-patrick",
      "turkiye/istanbul",
      "mexico/mexico-city",
      "south-korea/busan",
      "morocco/fez",
      "uruguay/montevideo",
    ].flatMap((place) => [
      `/places/${place.split("/")[0]}`,
      `/places/${place}`,
    ]),
  );
  paths.push(
    ...[
      "make-room-in-the-steam",
      "leave-room-for-devotion",
      "venice-through-an-oar",
      "colour-before-cloth",
      "a-city-in-the-water",
      "the-vineyard-at-the-table",
      "before-the-chocolate-bar",
      "a-bowl-of-attention",
      "bread-from-the-tonir",
      "let-the-ferry-redraw-istanbul",
      "ride-the-avenue-when-the-cars-step-aside",
      "spend-an-hour-between-the-hot-rooms",
      "cut-the-first-piece-of-a-pattern",
      "find-the-pulse-before-the-parade",
    ].map((slug) => `/experiences/${slug}`),
  );
  paths.push(
    "/today",
    "/new",
    "/places/portugal",
    "/places/portugal/porto",
    "/experiences/hear-the-church-before-you-climb",
    "/experiences/let-the-market-write-your-menu",
    "/experiences/find-a-place-through-its-scent",
    "/experiences/draw-a-small-shape-in-flame",
    "/experiences/make-something-from-the-broken-pieces",
    "/experiences/watch-the-work-before-the-performance",
    "/places/spain/barcelona",
    "/places/austria/vienna",
    "/places/france/arcachon-bay",
    "/experiences/meet-the-bay-on-its-working-hours",
    "/experiences/read-the-landscape-one-grain-at-a-time",
    "/places/poland",
    "/places/poland/krakow",
    "/experiences/twist-the-city-before-you-taste-it",
    "/experiences/take-the-window-back-to-the-workbench",
    "/experiences/watch-a-city-arrive-in-miniature",
    "/places/france/paris",
    "/experiences/make-the-morning-before-it-reaches-the-cafe",
    "/experiences/watch-a-picture-grow-one-thread-at-a-time",
    "/experiences/see-what-keeps-paris-moving-underground",
    "/places/united-kingdom/london",
    "/experiences/ask-the-market-where-london-came-from",
    "/places/italy/rome",
    "/experiences/make-pasta-until-the-sauce-makes-sense",
    "/experiences/ride-the-road-rome-built-to-leave-it",
    "/experiences/put-the-gods-back-among-the-machines",
    "/experiences/meet-the-work-before-the-curtain-rises",
    "/experiences/open-a-door-the-underground-left-behind",
    "/places/cyprus",
    "/places/cyprus/troodos-foothills",
    "/experiences/make-halloumi-before-it-reaches-the-plate",
    "/places/estonia",
    "/places/estonia/vorumaa",
    "/experiences/read-a-smoke-sauna-before-the-heat",
    "/places/el-salvador",
    "/places/el-salvador/suchitoto",
    "/experiences/fold-a-pattern-into-the-blue",
    "/places/colombia",
    "/places/colombia/medellin-santa-elena",
    "/experiences/follow-medellins-flowers-back-to-the-farm",
    "/places/slovenia",
    "/places/slovenia/visnja-gora",
    "/experiences/read-a-hive-from-the-inside",
    "/places/greece",
    "/places/greece/chios",
    "/experiences/follow-mastiha-back-to-the-tree",
    "/places/switzerland",
    "/places/switzerland/appenzellerland",
    "/experiences/follow-appenzeller-from-vat-to-cellar",
    "/places/united-arab-emirates",
    "/places/united-arab-emirates/ajman",
    "/experiences/watch-a-dhow-take-shape-beside-the-creek",
    "/journal/let-the-place-set-the-clock",
    "/explore?q=row&field=move&place=italy&status=public_guide&view=list",
    "/explore?q=no-such-experience",
  );
}
const nonces = new Set();
for (const path of paths) {
  const response = await fetch(`${base}${path}`);
  const html = await response.text();
  try {
    assert.equal(response.status, 200);
    assert.ok(html.includes("<main"));
    const pathname = path.split("?")[0];
    const privatePage =
      !liveIndexing || utilityPaths.has(pathname) || path.includes("?");
    const emptyField =
      process.env.EA_TEST_DEMO !== "true" &&
      pathname.startsWith("/fields/") &&
      emptyFields.has(pathname.split("/")[2]);
    const robotsMeta = html.match(/<meta name="robots" content="([^"]+)"/)[1];
    assert.match(
      robotsMeta,
      privatePage || emptyField ? /noindex/ : /^index, follow$/,
    );
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(
      response.headers.get("x-robots-tag"),
      privatePage ? "noindex, nofollow" : null,
    );
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("x-powered-by"), null);
    assert.match(response.headers.get("cache-control"), /private.*no-store/);
    const csp = response.headers.get("content-security-policy");
    const nonce = csp.match(/'nonce-([^']+)'/)[1];
    assert.ok(!nonces.has(nonce), "Nonce reused between requests");
    nonces.add(nonce);
    for (const script of html.matchAll(/<script\b[^>]*>/g)) {
      assert.ok(
        script[0].includes(`nonce="${nonce}"`),
        "Script has no matching nonce",
      );
    }
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    assert.equal(
      new URL(canonical).href,
      `https://experienceauthority.com${path.split("?")[0]}`,
    );
    assert.match(html, /property="og:title"/);
    assert.match(html, /name="twitter:card"/);
    if (process.env.EA_TEST_DEMO !== "true") {
      assert.ok(
        !html.includes("fictional experience"),
        "Demo experience in guide mode",
      );
      if (path.startsWith("/experiences/")) {
        const schemas = [
          ...html.matchAll(
            /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
          ),
        ].map((match) => JSON.parse(match[1]));
        const article = schemas
          .flatMap((schema) => schema["@graph"] || [schema])
          .find((node) => node["@type"] === "Article");
        assert.ok(article, "Missing guide Article metadata");
        assert.equal(article.url, canonical);
        assert.ok(
          article.citation.length >= 2,
          "Missing structured source citations",
        );
        assert.match(
          html,
          /property="og:image" content="https:\/\/experienceauthority\.com\/images\/guides\//,
        );
        assert.ok(html.includes('id="sources"'), "Missing source notes");
        assert.match(
          article.dateModified,
          /^\d{4}-\d{2}-\d{2}$/,
          "Invalid source-check date",
        );
        assert.ok(
          html.includes(article.dateModified),
          "Missing source-check date",
        );
        assert.ok(
          html.includes("Official access information"),
          "Missing official access link",
        );
        assert.ok(
          html.includes("not visited, locally validated or"),
          "Missing evidence boundary",
        );
      }
    }
  } catch (error) {
    failures.push({ path, message: error.message });
  }
}
const unpublishedPaths = [
  "/not-a-published-page",
  "/experiences/not-published",
  "/places/croatia/unknown",
  "/fields/unknown",
  "/fields/contribute",
  "/collections/unknown",
  "/constructor",
  "/__proto__",
  "/toString",
];
if (process.env.EA_TEST_DEMO !== "true")
  unpublishedPaths.push(
    "/experiences/learning-the-language-of-clay",
    "/experiences/some-stories-need-distance",
    "/places/italy/emilia-romagna",
  );
for (const path of unpublishedPaths) {
  const response = await fetch(`${base}${path}`);
  if (response.status !== 404)
    failures.push({ path, message: `Expected 404, got ${response.status}` });
}
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.match(robots, /User-Agent: \*\s+Allow: \//i);
assert.ok(robots.includes("GPTBot"));
assert.equal(robots.includes("Sitemap:"), liveIndexing);
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
assert.equal(sitemap.includes("<loc>"), liveIndexing);
if (liveIndexing) {
  assert.ok(sitemap.includes("https://experienceauthority.com/explore"));
  assert.ok(!sitemap.includes("/passport"));
  for (const path of [
    "/places/japan/kyoto",
    "/places/japan/kumano-kodo",
    "/places/armenia/gegharkunik",
    "/places/poland/krakow",
    "/places/france/paris",
    "/experiences/a-bowl-of-attention",
    "/experiences/bread-from-the-tonir",
    "/experiences/twist-the-city-before-you-taste-it",
    "/experiences/take-the-window-back-to-the-workbench",
    "/experiences/watch-a-city-arrive-in-miniature",
    "/experiences/make-the-morning-before-it-reaches-the-cafe",
    "/experiences/watch-a-picture-grow-one-thread-at-a-time",
    "/experiences/see-what-keeps-paris-moving-underground",
    "/places/united-kingdom/london",
    "/experiences/ask-the-market-where-london-came-from",
    "/places/italy/rome",
    "/experiences/make-pasta-until-the-sauce-makes-sense",
    "/experiences/ride-the-road-rome-built-to-leave-it",
    "/experiences/put-the-gods-back-among-the-machines",
    "/experiences/meet-the-work-before-the-curtain-rises",
    "/experiences/open-a-door-the-underground-left-behind",
    "/places/cyprus/troodos-foothills",
    "/experiences/make-halloumi-before-it-reaches-the-plate",
    "/places/estonia/vorumaa",
    "/experiences/read-a-smoke-sauna-before-the-heat",
    "/places/el-salvador/suchitoto",
    "/experiences/fold-a-pattern-into-the-blue",
  ])
    assert.ok(
      sitemap.includes(`${path}</loc>`),
      `Missing sitemap route: ${path}`,
    );
  assert.ok(!/<loc>[^<]*\?/.test(sitemap));
  for (const field of emptyFields)
    assert.ok(!sitemap.includes(`/fields/${field}</loc>`));
}
const blocked = await fetch(base, { headers: { "user-agent": "GPTBot/1.2" } });
assert.equal(blocked.status, 403);
const searchBot = await fetch(base, {
  headers: {
    "user-agent": "Googlebot",
    "x-nonce": "attacker-nonce",
    "Content-Security-Policy": "script-src 'nonce-attacker-nonce'",
  },
});
assert.equal(searchBot.status, 200);
assert.ok(
  !searchBot.headers.get("content-security-policy").includes("attacker-nonce"),
);
const og = await fetch(`${base}/opengraph-image`);
assert.equal(og.status, 200);
assert.equal(og.headers.get("content-type"), "image/png");
console.log(
  JSON.stringify(
    {
      checkedPages: paths.length,
      unpublishedPaths: unpublishedPaths.length,
      uniqueNonces: nonces.size,
      indexing: liveIndexing
        ? "public pages indexable; utilities, filters and empty fields excluded"
        : "noindex; empty sitemap",
      crawlerRules: "passed",
      socialImage: "passed",
      failures,
    },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
