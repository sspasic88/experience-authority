# Build status — 12 September 2026

Public-source edition live at https://experienceauthority.com, deployed from the separate EA GitHub repository to its own Vercel project on 12 September 2026.

Current local release candidate: 48 guides across 34 countries and territories, private journey planning, sharing, enlarged credited photographs, real multi-region place coverage and guide-specific search and social metadata. The production revision is updated only after the current batch is pushed and verified live.

## Implemented

- Independent source project, self-hosted Source Sans 3 Variable typography under OFL 1.1, reusable visual tokens and responsive editorial layouts.
- Homepage, Compass search/filter/grid/list interface, experience detail, fields, places, collections, method/about/transparency/privacy/credits and unknown-route handling.
- Device-local Passport categories, comparison limited to three experiences, one private day-by-day journey draft, optional travel/stay notes and download/share. No cloud synchronization or route feasibility check.
- Suggestion/correction forms download unsent drafts only. No submission or personal-data processing service is connected.
- Public-data allowlist, protected-narrative boundary and tested publication policy functions.
- Per-route SEO/social metadata, brand share image, JSON-LD, production sitemap with real guide review dates, indexable production robots and noindex preview rules.
- Nonce-based production script CSP, response security headers and training crawler preferences.
- Forty-eight original public-source guides, separate from Selected and demo records; dated source notes, official access links, evidence boundaries, credited real photographs and expiry checks. Normal mode serves this content, not the eight fictional examples. See content-edition.md.
- Clickable homepage photographs, full-size guide-photo dialogs and user-initiated sharing; the slash aligns optically with the two name rows, with the tagline separately underneath.

## Design handoff in progress

[EA Figma file](https://www.figma.com/design/dKCURpmjIMSDRlMAlYx33P) is separate from IA designs. Foundations and reusable wordmark, button, status, card, header, footer, field and collection components are created. Full composed desktop/mobile screens, final design QA and design/code mapping remain in progress; do not treat the Screens page as a completed handoff yet.

## Not provisioned / not claimed

No production database, authentication, editorial admin, live submissions, EA Selected catalogue, booking, payments or analytics. The separate public repository is https://github.com/sspasic88/experience-authority and the Vercel project is connected to experienceauthority.com. No existing Innovation Authority code or deployment has been modified. See launch-checklist.md for post-launch work.
