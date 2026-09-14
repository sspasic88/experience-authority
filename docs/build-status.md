# Build status — 13 September 2026

Public-source edition live at https://experienceauthority.com, deployed from the separate EA GitHub repository to its own Vercel project on 12 September 2026.

Current release scope: 84 guides across 44 countries and territories, 12 editorial collections, nine Journal articles, 14 local planning chapters and 39 dated daily discoveries prepared for 13 September to 21 October. Includes an actual-publication log, private journey planning, batch saving, sharing and credited photographs. See [content expansion batch 24](content-expansion-batch-24-2026-09-14.md). Prepared future editions are not already public. Production status requires a verified deployment, not this document alone.

## Implemented

- Independent source project, self-hosted Source Sans 3 Variable typography under OFL 1.1, reusable visual tokens and responsive editorial layouts.
- Homepage, Compass search/filter/grid/list interface, experience detail, fields, places, collections, method/about/transparency/privacy/credits and unknown-route handling.
- Device-local Passport categories, comparison limited to three experiences, one private day-by-day journey draft, optional travel/stay notes and download/share. No cloud synchronization or route feasibility check.
- Suggestions remain a local downloaded draft. Corrections prepare an addressed email draft and provide a copy fallback. Nothing is sent until the visitor chooses to send it, and no EA submission service is connected.
- Company, contact, accessibility and website terms are published directly on EA. The footer identifies Innovation Authority Ltd as the rights holder and links to EA's own company and legal pages rather than using an external company-register page as the visitor's primary route.
- Public-data allowlist, protected-narrative boundary and tested publication policy functions.
- Per-route SEO/social metadata, brand share image, JSON-LD, production sitemap with real guide review dates, indexable production robots and noindex preview rules.
- Nonce-based production script CSP, response security headers and training crawler preferences.
- Privacy-first GA4 integration with Basic Consent Mode, explicit allow and deny choices, later revocation, query-free page paths and a bounded event set. A separate EA Measurement ID is configured for production.
- Eighty-one public-source guides, separate from Selected and demo records; dated source notes, official access links, evidence boundaries, credited real photographs and expiry checks. Normal mode serves this content, not the eight fictional examples. See content-edition.md and content-expansion-batch-23-2026-09-13.md.
- Clickable homepage photographs, full-size guide-photo dialogs and user-initiated sharing; the slash aligns optically with the two name rows, with the tagline separately underneath. Homepage imagery uses nine hand-curated three-guide editions, a stable three-hour starting edition and visitor-controlled previous/next navigation. Each edition contains three different countries and fields.
- Deterministic guide continuations that prefer local geographic relevance and a contrasting activity. Porto and Gaia and Mexico City and Xochimilco are explicitly connected; wider country and editorial suggestions are clearly labelled and link to their context. This is not route or travel-time advice.
- Every visible photograph credit uses the same direct-source treatment: `Image: creator / source ↗` in the lower-right corner, opening the original source in a new tab. Detailed rights records remain on Credits rather than competing with the image.

## Design handoff in progress

[EA Figma file](https://www.figma.com/design/dKCURpmjIMSDRlMAlYx33P) is separate from IA designs. Foundations and reusable wordmark, button, status, card, header, footer, field and collection components are created. Full composed desktop/mobile screens, final design QA and design/code mapping remain in progress; do not treat the Screens page as a completed handoff yet.

## Not provisioned / not claimed

No production database, authentication, editorial admin, live submissions, EA Selected catalogue, booking or payments. Analytics collection remains off for each visitor until that visitor explicitly allows it. The separate public repository is https://github.com/sspasic88/experience-authority and the Vercel project is connected to experienceauthority.com. No existing Innovation Authority code or deployment has been modified. See launch-checklist.md for post-launch work.
