# Experience Authority

Independent editorial selection of locally rooted experiences. Native Next.js + TypeScript. No Innovation Authority dependencies.

## Local development

Use Node 22+ and pnpm. Run `pnpm install`, copy `.env.example` to `.env.local`, then `pnpm dev` and open http://localhost:3100.

`pnpm test`, `pnpm typecheck` and `pnpm build` validate the source. `pnpm start` serves a production build.

With the standard guide preview running, `pnpm smoke` checks the public-source guides, directories, metadata, nonces, unknown paths and response protection. Use `EA_TEST_DEMO=true` only when testing the separate fictional design mode. Set EA_TEST_URL if the server uses a port other than 3100. The local production-style preview uses port 3101, not the public domain.

EA_DEMO_MODE explicitly enables demo content in local and preview environments only. VERCEL_ENV=production overrides the flag and refuses to serve demo records. The standard production configuration serves seven original public-source guides through a separate evidence gate. They are not locally validated EA Selected records. Each has cited official sources, a check date, a review-by date (maximum 90 days), a public-access scope and an official link. Expired/incomplete guides are excluded, not promoted to Selected. All guide images are original typographic artwork; no provider imagery is imported. The public launch configuration enables crawlable canonicals, robots and sitemap entries for experienceauthority.com. See docs/content-edition.md. Operational launch services remain unprovisioned.

## Hosting

Import this repository into a separate Vercel project using the Next.js preset. Enable EA_DEMO_MODE=true only in a protected Preview deployment; it is rejected in Production. Production uses https://experienceauthority.com with EA_DEMO_MODE=false, EA_LAUNCH_READY=true and EA_INDEXING_ENABLED=true.

Public production sends indexable metadata, robots and sitemap entries for current public-source guides. Preview deployments remain noindex. A private deployment still requires access protection.

See [decisions](docs/decisions.md), [architecture](docs/architecture.md), [build status](docs/build-status.md), [QA report](docs/qa-report.md) and [launch checklist](docs/launch-checklist.md).
