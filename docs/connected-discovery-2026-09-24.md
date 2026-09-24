# Connected discovery, 24 September 2026

## Purpose

Apply the useful structural lessons from the TasteAtlas review to EA's existing editorial product. Improve discovery, local planning and relevant return visits without copying its identity, importing ratings or inventing experiences.

## Shipped scope

- **Compass surprise mode** at `/explore?surprise=1`, linked from the homepage. It respects the same place, interest, participation and time filters as normal results. Only current non-demo public guides with an approved documentary photograph enter the pool. Unseen choices are exhausted before a cycle restarts. Unsaved guides and changes of country/activity are preferred when the filtered pool allows them. No browsing history is persisted or sent to a service.
- **Practical discovery**, not a random redirect. Each result keeps its photograph, source credit, saving action and original guide. Time and visitor role remain visible. The visitor can explore the exact local area or share the public guide. Changing discovery clears a previous share confirmation.
- **Destination planning filters** for time and participation, alongside existing interests. Only time/mode options represented in the destination are offered. Empty intersections explain the gap and reset in place without broadening geography. Durations are explicitly not transfer times.
- **New-guide browsing** by real publication date, interest and country. The seven-day count excludes future dates and uses publication dates, not source-check dates. Optional filters are collapsed initially to keep photographs closer to the entry point on mobile.
- **Private saved-place discovery** on `/new`. Match exact country/region keys from Passport, exclude already-saved guides and default to the past seven days when activated. No inference that saving Tokyo means every destination in Japan. Honest empty states, no account, notifications or new tracking.
- **Local pairs** on experience pages. Save the current guide and a same-area or explicitly connected-area recommendation atomically with the existing Passport mechanism. Existing stages, comparison and plans are preserved. Authored chapter explanations support recommendations where available. No combined booking, guaranteed timing or transport claim.
- **Homepage return signals and photo deduplication.** Show the actual seven-day publication count. Reserve destination photographs alongside all rotating cover photographs before choosing new guides, collections and journal imagery.

## Deliberate limits

This is a product/UX improvement, not a new-content batch. Existing public guides, verified sources and photo rights records are unchanged. Geographic expansion, live availability, reservations, location permissions, newsletters, accounts, ratings and cultural rankings were not introduced. No new dependencies were added. Improvements to retention are a hypothesis to measure, not a claimed result.

## Checks

- 86 unit tests passed, including eligibility, no-repeat selection, scoped URL state, exact saved-area matching, seven-day date boundaries and reserved photograph regression tests.
- TypeScript and production build passed with explicit production canonical and indexing flags.
- 265-route smoke check and 491-route sitemap/SEO check passed with no duplicate titles or descriptions.
- New interaction audit passed 32 views at 320, 390, 768 and 1440 pixels, including image decoding, WCAG checks, overflow, back navigation, share fallback, local pair saving, empty/reset states, immutable Passport filtering and storage-denied behavior.
- Existing visitor audit passed all 21 checks including persistence, cross-tab sync, comparisons, private planning, sharing/export and storage failure.
- Current-edition regression audit passed 141 views at mobile, tablet and desktop sizes and checked 523 internal links, with no failures.
- Reviewed the actual mobile/desktop screenshots. Collapsed secondary filters to reduce the mobile distance to photography and placed connection explanations below cards to preserve image alignment.

The repeatable additional browser suite is `scripts/connected-discovery-audit.mjs`. Production verification is performed after deployment and reported in the task handoff.
