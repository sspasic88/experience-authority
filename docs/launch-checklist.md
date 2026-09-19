# Experience Authority — launch gates

All boxes below are outstanding until explicitly evidenced. This checklist is not a declaration of compliance or a completed security audit.

## Separate project and access

- [x] Create a separate public EA GitHub repository with no supplied font assets, IA credentials, database, auth or user data.
- [x] Create a separate Vercel project and production environment settings. No IA credentials, database, auth or user data reuse.
- [ ] Require account MFA/passkeys, least-privilege team access, branch protection and successful checks before production deployment.
- [ ] Protect stakeholder previews with deployment authentication. noindex is not access control.
- [x] Configure HTTPS and redirect www/alternate production domains to https://experienceauthority.com. Verify certificate and DNS ownership.
- [x] Verify canonical URLs, metadata, robots, sitemap and security headers on the actual Vercel deployment.

## Content and legal/operational readiness

- [ ] Supply the brief's 25 genuine reviewed experiences; no fictional demo may be published as a verified story.
- [ ] Implement and verify editorial persistence, revisions, permissions, holder consent, source records and independent local review.
- [x] Confirm public image/typography scope: source-guides use credited real photographs with explicit depiction boundaries and individual licence records; no AI photographs. Aeonik and Nimbus Sans were removed; Source Sans 3 and Newsreader are self-hosted under OFL 1.1.
- [ ] Confirm operating entity, contact route, privacy notice, retention and processors with appropriate professional review.
- [ ] Before collecting submissions, implement server-side validation, size limits, CSRF/origin protection, rate limits, bot controls and an accountable correction process.
- [ ] Before adding accounts, implement server-enforced authorization, secure session cookies, login abuse controls and recovery safeguards. Never rely solely on Proxy for authorization.
- [ ] Keep private notes, contacts and precise locations outside public responses, source maps, image metadata, analytics, search and social previews.
- [ ] Test backup restoration, audit logs, alerting, incident response and data deletion before storing real personal/editorial data.

## SEO, accessibility and operations

- [x] Replace preview-only public descriptions/labels and keep empty taxonomy pages noindex.
- [ ] Validate JSON-LD against rendered content; do not add fabricated ratings, reviews, events, prices or availability.
- [ ] Complete keyboard, screen-reader, contrast, mobile and Core Web Vitals checks on representative live pages.
- [ ] Configure Vercel firewall/rate limits and spend alerts to match traffic and plan; test false positives. User-agent filters are spoofable, not DDoS protection.
- [ ] Set up uptime/error monitoring without capturing sensitive content; define update and dependency review ownership.
- [x] Set EA_SITE_URL=https://experienceauthority.com, disable EA_DEMO_MODE, and set EA_LAUNCH_READY=true plus EA_INDEXING_ENABLED=true on Production only. Rebuilt on the deployment target.
- [ ] Verify Search Console ownership and submit the production sitemap only after inspecting the release.

## Reference basis

Implementation follows the installed Next.js documentation and [Next CSP guidance](https://nextjs.org/docs/app/guides/content-security-policy), [OWASP HTTP headers guidance](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html) and [Google's noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing). Crawling must be allowed for search engines to read a page's noindex directive. Training crawler preferences do not prevent determined scraping.
