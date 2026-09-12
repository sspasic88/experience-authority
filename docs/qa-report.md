# QA report — 12 September 2026

## Current release candidate — 13 September 2026

- The current candidate contains 55 public-source guides in 36 countries and territories, 12 editorial collections and eight Journal articles. Seven new guides deepen familiar destinations and open bounded routes in Istria, Vila Nova de Gaia and Mossman Gorge. Preliminary atlas candidates 1 and 91 were individually narrowed into the Istria and Mossman guides. The remaining candidates were not bulk-published.
- All 51 policy, content, privacy, SEO and security tests pass. TypeScript and the optimized Next.js production build pass.
- Homepage discovery now varies five recognisable starting places without permanently ranking Istanbul first. Homepage imagery uses nine hand-curated editions, each containing three distinct countries and fields. The initial edition changes every three hours; visitor controls move between editions without autoplay.
- Every public photograph uses a consistent lower-right `Image: creator / source ↗` link that opens the original source in a new tab. Duplicate photograph-context and rights blocks were removed from guide, Journal and enlarged-photo displays. The detailed rights register remains available on Credits.
- The correction route validates same-origin page context, prepares an email draft to the published EA contact and provides a copy fallback. It does not transmit a correction, edit the site or create an account.
- Guide continuations now rank the same area first, explicitly connected local areas second, the same country third and wider editorial threads last. Each card labels and links its geographic or editorial relationship. The implementation does not calculate distance, routing or live feasibility. Nineteen of 55 guides currently have a same-area or explicitly connected-area continuation; this is a useful foundation, not complete destination depth.
- The full responsive browser audit passed 120 views at 390, 768 and 1440 pixels, including the company, contact, accessibility and terms pages. It encountered 236 internal links and reported zero failures. It exercised the curated hero rotation, varied homepage suggestions, direct image credits, local complementary guides, save persistence, image opening, comparison, search, city-first filtering and mobile menu dismissal. Automated accessibility checks remain scoped tests, not certification or a substitute for screen-reader and user acceptance.
- The production dependency audit reported no known vulnerabilities at the time of checking. A separate check of 159 distinct official access, evidence, image and licence URLs found 141 directly reachable, 12 guarded by rate limits or access controls and five transient timeout/network results. One confirmed obsolete Bonjour Québec link was replaced with its current official page. These are reachability checks, not rights clearance or factual verification.
- The homepage hero's page-specific client payload was reduced from approximately 63.4 KB to 39.4 KB minified by sending only the fields the interactive mosaic needs. No public Core Web Vitals claim is made without field data.

## Batch 02 — current verification scope

- Commit `d610826` deployed successfully through the separate Vercel project on 12 September 2026. The canonical production domain serves the nine-guide edition with index/follow, HTTPS and no root `X-Robots-Tag`; its public sitemap includes both new guide URLs plus Kyoto and Gegharkunik.
- The same production domain passed the 61-page/11-not-found smoke suite, the 54-view responsive/accessibility browser suite and all 21 isolated visitor scenarios described below. No real Passport data, private notes, bookings or external messages were used.
- 26 policy/content/SEO/security tests pass, including private-trip sanitization, opt-in sharing and source/photo structured-data boundaries; TypeScript and optimized production build pass.
- Expanded route/security smoke covers 61 URL checks and 11 expected 404 paths; fresh per-request CSP nonces, script nonce matching, fixed canonicals, public indexing, private/filter exclusions, Article metadata, guide-specific social images and both Japan regions in sitemap.
- Browser audit covers 54 views at 390/768/1440 px, 65 encountered internal links, image decoding, heading count, horizontal overflow and automated WCAG A/AA checks. Save/reload, photo-link navigation, comparison, search and mobile menu/Escape are exercised.
- Visitor audit covers 21 scenarios at 320/390/1440 px: populated journey plans, reload and cross-tab persistence, removal, day sorting, private-note opt-in/out, downloaded text, native-share and clipboard/manual fallbacks, cancellation, blocked local storage, photo modal focus and scroll restoration. Sharing is intercepted in isolated test browsers; no external messages or real visitor state are touched.
- Automated accessibility checks are scoped tests, not certification or a substitute for screen-reader/user acceptance. Source checks are not on-site, safety, availability or service-quality verification.
- The production checks above concern this exact revision; earlier checks below refer to prior releases.

## Earlier public-source guide checks (historical)

- Production deployment verified at https://experienceauthority.com on 12 September 2026: HTTP 200, HTTPS, a fresh CSP nonce, no `X-Robots-Tag: noindex` on the root, `index, follow` robots meta and the canonical production URL.
- Typography audit: Nimbus Sans was rejected for EA display use after glyph review (notably its lowercase `t`). Instrument Sans and DM Sans were also rejected; Source Sans 3 was selected after comparison on EA display, body, label and repeated-character tests. The production build self-hosts one Source Sans 3 variable font for the application (200–900) and uses original static Regular/Semibold files only for the social-image renderer. No visitor request is made to an external font host.
- Vercel domain verification passed. `www.experienceauthority.com` redirects to the canonical apex domain. Production robots.txt permits ordinary search crawlers, disallows the listed training crawlers and declares the production sitemap. The sitemap lists the public routes and genuine desk-check `lastmod` dates for guide detail pages.

- 20 policy/SEO/security/content tests passed using `node --import tsx --test tests/*.test.ts`. The normal tsx CLI hit a sandbox IPC restriction; the equivalent Node runner passed without that IPC step.
- TypeScript and optimized Next.js production build passed with EA_DEMO_MODE=false.
- Local server: 127.0.0.1:3101, normal guide mode. `EA_TEST_URL=http://127.0.0.1:3101 pnpm smoke` passed 48 page URLs and 11 expected 404 paths. No failures. Old demo experience URLs do not render in normal mode.
- Local preview verification: 48 distinct matching CSP nonces; fixed-domain canonicals, social metadata, noindex, private/no-store, frame denial and MIME-sniffing prevention verified. Preview sitemap remains empty. Training/search crawler checks and PNG social image response passed.
- Every guide detail includes source notes, source-check date, official access link and the explicit no-on-site-review disclosure. Tests cover stale/future/invalid dates, duplicate/missing/insecure sources, special-permission scope, unlicensed-image exclusion and recursive source allowlisting.
- Compass guide images are now real photographs, not AI-generated material. The tests require an allowlisted media record for each public guide and reject any image path or alt text that does not match that record. Each record supplies a photographer, original source URL, licence, licence URL, rights-check date and depiction boundary; all public cards link to the corresponding Credits entry.
- Browser verified the seven-card desktop Compass, the Finland and Japan guide details and their two source links, saving and comparison with real guide status/date, and removal of only the test-created saved/comparison entry. Passport returned to 0 saved.
- At 390 px: homepage, guide detail/access panel/source notes and filtered list were visually inspected. Checked page widths remained 390 px, without horizontal overflow. Search “rowing” + Move returned one guide; switching to list preserved the query and field. Temporary viewport override was reset.
- These checks verify implementation and truthful labels, not local validity, availability, actual service quality or the broader EA launch criteria.

## Earlier fictional-design build (historical results, before guide content)

- `pnpm check`: 15 policy/SEO/security tests passed, TypeScript passed, optimized Next.js build passed.
- `pnpm audit --prod` and `pnpm audit`: no known vulnerabilities reported by the registry at the time of the checks. This is not a guarantee that no vulnerability exists.
- Production-server smoke test (`EA_TEST_DEMO=true EA_TEST_URL=http://127.0.0.1:3101 pnpm smoke`): 45 page URLs passed, including all eight demo details and filtered results; eight unknown routes returned 404, including object-prototype property names.
- Each of 45 responses had a distinct CSP nonce and all rendered script tags matched it. Responses were private/no-store, noindex, nosniff and frame-denied. Incoming attacker-controlled nonce/CSP values were overwritten.
- Canonicals resolved to the fixed experienceauthority.com origin without query variants. Open Graph/Twitter metadata existed on all tested pages.
- robots.txt allowed ordinary crawlers to read noindex and disallowed listed training crawlers; preview sitemap was empty. GPTBot received 403; Googlebot received 200. These user-agent controls can be spoofed.
- The brand Open Graph image returned PNG and was visually inspected using the supplied Aeonik Pro fonts and EA night/paper/vermilion palette.

## Browser interaction checks after CSP implementation

- Saving a story, opening Passport, changing its category and reloading preserved the selection. The test-created saved entry was then removed through the interface.
- At 390 px width: list view displayed eight cards with no horizontal overflow; mobile navigation opened/closed; no-match search produced the expected empty state.
- Protected-story view had no horizontal overflow, clearly withheld location/access, used generic social description, and remained noindex.
- Temporary browser width override was reset after testing.

Earlier preview checks also covered desktop/mobile home layouts, intersecting search/filter behavior, grid/list URL preservation and comparison capped at three stories. Those are not a substitute for a full accessibility or production acceptance audit.

## Not yet verified

No full-site accessibility certification, screen-reader acceptance test, public Core Web Vitals field data, independent penetration test, production WAF configuration audit or authenticated-backend test has been completed. Representative automated accessibility checks are documented above. Figma composed screens and final visual handoff remain unfinished. See build-status.md and launch-checklist.md for the remaining release boundaries.
