# QA report — 12 September 2026

## Current public-source guide build

- Production deployment verified at https://experienceauthority.com on 12 September 2026: HTTP 200, HTTPS, self-hosted Nimbus Sans, a fresh CSP nonce, no `X-Robots-Tag: noindex` on the root, `index, follow` robots meta and the canonical production URL.
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

No full automated accessibility audit, screen-reader acceptance test, public Core Web Vitals field data, independent penetration test, production WAF/DNS/certificate review or authenticated-backend test has been completed. Figma composed screens and final visual handoff remain unfinished. See build-status.md and launch-checklist.md for the remaining release boundaries.
