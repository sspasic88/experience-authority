# Homepage and planning refinement

13 September 2026

## Implemented

- Replaced the catalogue-length homepage with a focused sequence: hero and search, dated discovery, four rotating local chapters, six visitor interests, three geographically varied recent guides, three rotating collections, one Journal feature and one Passport invitation.
- Kept the full destination, field, collection and Journal catalogues on their dedicated pages. This release does not remove or add public guides.
- Added three hand-composed hero editions. Reserved the photographs from every available edition when choosing lower-page images, so manual carousel changes cannot introduce an image duplicate.
- Reduced the mobile hero typography and spacing, brought photography earlier, normalised section rhythm and body-copy sizes, and simplified the Journal layout.
- Added destination suggestions alongside experience suggestions in home search. NYC, USA and UK are recognised in both home search and Compass.
- Made Make depend on hands-on participation for cooking, learning and working-place experiences. Passive production tours remain discoverable under Explore & reflect.
- Opened the actual private planner directly at /plan. Existing Passport links, saved guides and the ea:trip:v1 draft remain compatible. New links point to one clear planning destination.
- Corrected smooth-scroll route transitions, the planner's print-only layout and the analytics disclosure on Transparency.

## Verification

- 67 automated tests passed, including new category, search-alias and all-edition photograph regressions.
- Type checking and production build passed.
- Local production-mode smoke: 117 pages, 12 expected not-found routes, 117 distinct CSP nonces, crawler rules and social image passed. No failures. Local indexing remains intentionally disabled.
- Browser review at 320, 390 and 1280 pixels: no horizontal page overflow in the reviewed homepage layouts. Homepage height was approximately 7.4k pixels at 390px and 4.4k at 1280px, compared with 18.8k and 9.7k in the preceding audit.
- Keyboard search for NYC opened the New York City destination. Saved the bagel guide, opened Plan, added it to day 2, entered a test note and reloaded. The day and note persisted. Removed only the newly created test entry and save afterwards. No pre-existing user draft or save was cleared.
- Verified that moving from the homepage's lower planning invitation to /plan lands at the top, with the working form visible on the first desktop screen.
- Checked visible homepage photographs loaded, including the three recent guides and the single Journal feature.

## Still open

This is a navigation and visual hierarchy release, not completion of every item in the whole-site audit. Stronger photography across the full catalogue, deeper coverage of one-guide destinations, source diversification, duplicate SEO titles and further performance work still need attention. No photograph rights have been newly cleared in this release. Attribution is not permission.

Planning remains a private, single-browser draft. It does not synchronise across devices, calculate travel connections, make bookings or provide a shared editable itinerary. The daily-discovery queue remains finite through 15 October 2026. The 200-candidate selection process has not changed in this release.
