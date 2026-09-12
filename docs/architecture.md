# Architecture — public-source edition and EA Selected boundary

## Implemented

Native Next.js App Router with strict TypeScript. Pages and data access are server rendered; only Passport controls, mobile navigation and local draft forms require client state. `src/lib/data.ts` is marked `server-only`. The public renderer uses an explicit allowlist and independently supplied safe narrative for protected records.

The standard catalogue contains seven original public-source guides in seven countries and six fields, with three thematic collections. A separate opt-in demo mode retains eight fictional concepts. Neither is the 25 locally validated Selected experiences required for launch. Real guide cards use original typographic artwork. Existing stock imagery is explicitly illustrative and credited, not documentary evidence.

Search and filters use URL query parameters with a native GET form. The filters intersect, and grid/list changes preserve them. Unknown routes fail with a not-found page. Passport stores only known public story IDs, stage values and at most three comparison IDs in `localStorage`. Malformed and obsolete data is rejected. There are no auth cookies or cross-project user accounts.

## Security boundaries

- Research candidates, do-not-publish and retired records cannot produce public DTOs.
- Protected narratives are a separate editorial input, not a redaction of arbitrary private free text. This boundary is unit tested; no private source records are currently stored.
- `canPublish` expresses consent, evidence and reviewer requirements. It is a tested policy function, **not** an active publishing service or authorization system.
- `canPublishGuide` is a distinct, narrow gate for public-source guides. It requires a documented public scope, no special permission, substantive context and limitations, two distinct HTTPS source links, a cited official access URL and current dates with a maximum 90-day review window. It rejects photographs until an appropriate media-rights workflow exists. It cannot grant Selected status, attest truth or replace human/local judgement. The gate runs before public DTO serialization; source objects are independently allowlisted.
- Demo data requires an explicit flag and is rejected for Vercel production and the canonical domain configuration.
- Production pages are indexable only when the explicit production release configuration is present; Preview and local environments fail closed with noindex and an empty sitemap. Guide detail sitemap entries use the real desk-check date as their `lastModified` value, following the freshness discipline used in Innovation Authority. Training crawler preferences are separate from search indexing. These are indexing controls, not authentication.
- No booking, payments, analytics, submission endpoint or third-party data processor integration is active.
- Suggestion/correction forms generate unsent local files only.

## Pending independent infrastructure

Choose a dedicated database, authentication and editorial-admin setup for EA, then implement the persistence and permission boundary before connecting any public submission endpoint. No Innovation Authority infrastructure or secrets were accessed or copied. Only user-approved font assets were reused.

The backend requires auditable revisions, evidence/media rights/holder consent records, role-based authorization, distinct local and editorial approval for high-risk content, protected-data isolation, CSRF protection, input validation, abuse controls and retention policies. A production schema and API are intentionally not claimed as complete.

## SEO and response protection

Each page has descriptive metadata and a fixed-domain canonical; query variants cannot choose an external canonical origin. Passport and draft forms are always noindex. Demo, protected and paused experiences are excluded from discovery feeds. Protected stories use generic social metadata with a shared brand image, never a location-specific image. Organization/WebSite JSON-LD describes only known brand facts and is escaped before insertion into a nonce-bearing script element.

`src/proxy.ts` generates a new random nonce for every request, overwrites incoming nonce/CSP headers and passes the policy to Next's renderer. HTML is dynamically rendered and private/no-store so a cached response cannot reuse its nonce. Production script policy has no unsafe-inline or unsafe-eval; inline styles remain allowed for framework image/style attributes. The Figma capture script and development connections are absent from production. Fonts and images are self-hosted.

This trades full-page static caching for nonce-based script protection. Images, fonts and static framework assets retain their normal asset caching. Revisit performance and deployment cost with real traffic before choosing a different CSP architecture. Do not enable public HTML caching without redesigning and retesting nonce handling.

HTTP headers include frame denial, MIME-sniffing prevention, referrer restrictions, cross-origin isolation-related controls and restricted camera/microphone/location/payment/USB permissions. HSTS is enabled for HTTPS production with no preload or includeSubDomains until the entire domain estate is verified. The deployment still needs HTTPS redirects, account protection, abuse controls and monitoring; no WAF or DDoS guarantee is made by this code. COOP must be reviewed before integrating popup-based OAuth.

## Hosting

Source is a separate public GitHub repository and Vercel project. It contains only self-hosted, openly licensed Nimbus Sans assets; supplied Aeonik files have been removed. Stakeholder previews should use Vercel deployment protection and remain noindex. No Innovation Authority deployment is changed.

Do not upload a locally built `.next` directory as a production artifact: build on the deployment target with its environment. Production uses the canonical URL `https://experienceauthority.com`, disables the demo flag and enables the public-source release gates. Locally validated EA Selected publication remains subject to its separate editorial, legal/privacy and operational review.
