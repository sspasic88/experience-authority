# Experience Authority

Independent editorial selection of locally rooted experiences. Native Next.js + TypeScript. No Innovation Authority dependencies.

Current edition: 78 public-source guides, 14 local planning chapters, nine Journal articles, dated daily discoveries and an explicit new-publication log. See [New York City depth](docs/new-york-city-depth.md) for current scope, evidence boundaries and the next editorial deadline.

## Local development

Use Node 22+ and pnpm. Run `pnpm install`, copy `.env.example` to `.env.local`, then `pnpm dev` and open http://localhost:3100.

`pnpm test`, `pnpm typecheck` and `pnpm build` validate the source. `pnpm start` serves a production build.

Production analytics uses a separate EA GA4 web stream through `NEXT_PUBLIC_GA_MEASUREMENT_ID`. If the variable is absent or invalid, no analytics interface or Google tag is rendered. When configured, the Google tag is still created only after a visitor explicitly allows analytics.

With the standard guide preview running, `pnpm smoke` checks the public-source guides, directories, metadata, nonces, unknown paths and response protection. Use `EA_TEST_INDEXING=true` when checking the indexable public-production configuration, and `EA_TEST_DEMO=true` only when testing the separate fictional design mode. Set EA_TEST_URL if the server uses a port other than 3100. `node scripts/browser-audit.mjs` checks responsive views, accessibility, internal links and interactions in an isolated browser; set EA_CHROME_PATH to an installed Chrome executable if needed.

EA_DEMO_MODE explicitly enables demo content in local and preview environments only. VERCEL_ENV=production overrides the flag and refuses to serve demo records. The standard production configuration serves seventy-five original public-source guides through a separate evidence gate. They are not locally validated EA Selected records. Each has cited official sources, a check date, a review-by date (maximum 90 days), a public-access scope and an official link. Expired/incomplete guides are excluded, not promoted to Selected. Every guide photograph has a checked media record, source, licence or explicit uncleared-reuse status, and depiction boundary. No AI-generated photographs are used. The public launch configuration enables crawlable canonicals, robots and sitemap entries for experienceauthority.com. See docs/content-edition.md and docs/build-status.md for operational boundaries.

## Hosting

Import this repository into a separate Vercel project using the Next.js preset. Enable EA_DEMO_MODE=true only in a protected Preview deployment; it is rejected in Production. Production uses https://experienceauthority.com with EA_DEMO_MODE=false, EA_LAUNCH_READY=true and EA_INDEXING_ENABLED=true.

Public production sends indexable metadata, robots and sitemap entries for current public-source guides. Preview deployments remain noindex. A private deployment still requires access protection.

See [decisions](docs/decisions.md), [architecture](docs/architecture.md), [build status](docs/build-status.md), [QA report](docs/qa-report.md) and [launch checklist](docs/launch-checklist.md).
