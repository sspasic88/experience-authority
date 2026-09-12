import { interests, matchesInterest, type PublicExperience } from "./catalog";

/** Geographic scope is exact. A shared country is never treated as "nearby". */
export function destinationCoverage(
  items: PublicExperience[],
  country: string,
  region?: string,
) {
  const local = items.filter(
    (item) =>
      item.countrySlug === country && (!region || item.regionSlug === region),
  );
  const categories = interests.flatMap((interest) => {
    const count = local.filter((item) =>
      matchesInterest(item, interest),
    ).length;
    return count ? [{ slug: interest.slug, name: interest.name, count }] : [];
  });
  const elsewhere = region
    ? items.filter(
        (item) => item.countrySlug === country && item.regionSlug !== region,
      )
    : [];
  return { local, categories, elsewhere };
}
