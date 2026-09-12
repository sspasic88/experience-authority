import {
  fields,
  territories,
  regionsForCountry,
  type PublicExperience,
} from "./catalog";
import { editorialPathways } from "./editorial-pathways";
import { getJournalArticles } from "./journal";
import { canonicalUrl, indexingEnabled, isDiscoverable } from "./seo";

export type SitemapEntry = { url: string; lastModified?: Date };

export function sitemapEntries(
  items: PublicExperience[],
  env: Record<string, string | undefined> = process.env,
): SitemapEntry[] {
  if (!indexingEnabled(env)) return [];
  const publicItems = items.filter(isDiscoverable);
  const paths = [
    "/",
    "/about",
    "/method",
    "/transparency",
    "/contact",
    "/accessibility",
    "/terms",
    "/legal",
    "/privacy",
    "/credits",
    "/plan",
  ];
  if (publicItems.length)
    paths.push("/explore", "/fields", "/places", "/collections");
  for (const field of fields) {
    if (publicItems.some((item) => item.field === field.slug))
      paths.push(`/fields/${field.slug}`);
  }
  for (const collection of editorialPathways) {
    if (
      publicItems.some((item) =>
        collection.guideSlugs.some((guideSlug) => guideSlug === item.slug),
      )
    )
      paths.push(`/collections/${collection.slug}`);
  }
  for (const place of territories) {
    if (publicItems.some((item) => item.countrySlug === place.slug))
      paths.push(`/places/${place.slug}`);
    for (const region of regionsForCountry(place.slug, publicItems))
      paths.push(`/places/${place.slug}/${region.slug}`);
  }
  const staticEntries = [...new Set(paths)].map((path) => ({
    url: canonicalUrl(path),
  }));
  const guideEntries = publicItems.map((item) => ({
    url: canonicalUrl(`/experiences/${encodeURIComponent(item.slug)}`),
    // A desk check is the only current editorial revision date for this public guide.
    ...(item.status === "public_guide" && item.guideReview
      ? { lastModified: new Date(`${item.guideReview.checkedOn}T00:00:00Z`) }
      : {}),
  }));
  const articles = getJournalArticles(publicItems);
  const journalEntries = articles.length
    ? [
        { url: canonicalUrl("/journal") },
        ...articles.map((article) => ({
          url: canonicalUrl(`/journal/${article.slug}`),
          lastModified: new Date(`${article.updatedOn}T00:00:00Z`),
        })),
      ]
    : [];
  return [...staticEntries, ...guideEntries, ...journalEntries];
}
