import type { PublicExperience } from "./catalog";

/** Publication dates are distinct from source-check dates. Older undated guides are not backfilled. */
export const guideReleases = [
  {
    date: "2026-09-13",
    slugs: [
      "make-something-from-the-broken-pieces",
      "watch-the-work-before-the-performance",
      "hear-the-church-before-you-climb",
      "let-the-market-write-your-menu",
      "find-a-place-through-its-scent",
      "draw-a-small-shape-in-flame",
    ],
  },
  // The preceding edition shipped at 23:06 UTC on 12 September (commit 8e42e98).
  {
    date: "2026-09-12",
    slugs: [
      "lift-a-pattern-from-the-water",
      "hear-the-arena-answer-back",
      "begin-with-rice-not-the-bottle",
      "let-the-dog-read-the-forest",
      "taste-what-time-does-to-port",
      "let-the-rainforest-be-introduced",
      "find-the-citys-wilder-edge",
    ],
  },
] as const;

export function publishedReleases(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return guideReleases
    .filter((release) => release.date <= today)
    .flatMap((release) => {
      const guides = release.slugs.flatMap((slug) => bySlug.get(slug) ?? []);
      return guides.length ? [{ date: release.date, guides }] : [];
    });
}

export function recentGuideReleases(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const cutoff = new Date(`${today}T00:00:00Z`);
  cutoff.setUTCDate(cutoff.getUTCDate() - 30);
  return publishedReleases(items, today)
    .filter((release) => release.date >= cutoff.toISOString().slice(0, 10))
    .flatMap((release) => release.guides);
}
