import type { PublicExperience } from "./catalog";

export type DiscoveryChoice = Pick<
  PublicExperience,
  "id" | "slug" | "title" | "field" | "countrySlug" | "regionSlug"
>;

/** No unreviewed, overdue or illustrative entries in the surprise pool. */
export function canSurprise(
  item: PublicExperience,
  approvedPhoto: boolean,
  today = new Date().toISOString().slice(0, 10),
) {
  return Boolean(
    item.status === "public_guide" &&
    !item.demo &&
    item.image &&
    approvedPhoto &&
    item.guideReview &&
    item.guideReview.checkedOn <= today &&
    item.guideReview.reviewBy >= today &&
    !item.guideReview.requiresSpecialPermission,
  );
}

/** Exhaust unseen choices before repeating. Vary place and activity where possible. */
export function nextDiscovery<T extends DiscoveryChoice>(
  items: T[],
  seen: string[],
  saved: string[] = [],
  random = Math.random,
): T | undefined {
  if (!items.length) return undefined;
  const previous = items.find((item) => item.slug === seen.at(-1));
  const unseen = items.filter((item) => !seen.includes(item.slug));
  let pool = unseen.length ? unseen : items.filter((item) => item !== previous);
  if (!pool.length) pool = items;
  const notSaved = pool.filter((item) => !saved.includes(item.id));
  if (notSaved.length) pool = notSaved;
  const different = pool.filter(
    (item) =>
      item.countrySlug !== previous?.countrySlug &&
      item.field !== previous?.field,
  );
  if (different.length) pool = different;
  const sample = random();
  const fraction = Number.isFinite(sample)
    ? Math.max(0, Math.min(sample, 0.999999))
    : 0;
  return pool[Math.floor(fraction * pool.length)];
}

export function areaKey(
  item: Pick<DiscoveryChoice, "countrySlug" | "regionSlug">,
) {
  // Do not turn a save in Kyoto into a claim of interest in every place in Japan.
  return item.countrySlug && item.regionSlug
    ? `${item.countrySlug}/${item.regionSlug}`
    : undefined;
}

export function savedAreas(items: DiscoveryChoice[], saved: string[]) {
  return new Set(
    items
      .filter((item) => saved.includes(item.id))
      .flatMap((item) => areaKey(item) ?? []),
  );
}

export function withinPublicationWeek(date: string, today: string) {
  const age =
    Date.parse(`${today}T00:00:00Z`) - Date.parse(`${date}T00:00:00Z`);
  return Number.isFinite(age) && age >= 0 && age < 7 * 86400000;
}
