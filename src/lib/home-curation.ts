import type { PublicExperience } from "./catalog";
import type { EditorialPathway } from "./editorial-pathways";

/**
 * Hand-composed hero editions. Each row balances a recognisable point of entry
 * with two less expected ways into a place. The order is main image, upper
 * story and lower story. It is editorial rotation, never a random shuffle.
 */
export const heroGuideRotations = [
  ["marble-steam-istanbul", "venice-through-an-oar", "a-bowl-of-attention"],
  [
    "a-morning-at-the-hawker-table",
    "a-city-in-the-water",
    "the-weight-of-the-tower",
  ],
  [
    "follow-the-agave-into-the-still",
    "let-the-caller-start-the-dance",
    "follow-the-festa-through-the-streets",
  ],
  [
    "mexico-city-grown-on-water",
    "stay-for-the-session",
    "cook-beyond-the-postcard",
  ],
  [
    "read-the-desert-at-ground-level",
    "kimchi-before-the-jar",
    "the-fish-behind-the-islands",
  ],
  [
    "read-the-language-of-the-coffee-cup",
    "stay-while-the-zamba-circles-back",
    "paint-the-pattern-you-noticed",
  ],
  [
    "spend-the-night-in-a-temple-town",
    "the-pour-before-the-glass",
    "walk-where-the-sea-was",
  ],
] as const;

const dayInMilliseconds = 86_400_000;

export function homeHeroRotationIndex(date: Date | string = new Date()) {
  const value = typeof date === "string" ? new Date(`${date}T00:00:00Z`) : date;
  const utcDay = Math.floor(
    Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate()) /
      dayInMilliseconds,
  );
  return utcDay % heroGuideRotations.length;
}

/** A stable daily selection. Missing or expired guides fail over gracefully. */
export function selectHomeHero(
  items: PublicExperience[],
  date: Date | string = new Date(),
) {
  const edition = heroGuideRotations[homeHeroRotationIndex(date)];
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const selected = edition.flatMap((slug) => bySlug.get(slug) ?? []);
  for (const item of items) {
    if (selected.length === 3) break;
    if (item.image && !selected.includes(item)) selected.push(item);
  }
  return selected;
}
/** A photograph gets one place on the homepage, even when a guide belongs to several pathways. */
export function curateHome(
  items: PublicExperience[],
  pathways: readonly EditorialPathway[],
  hero: PublicExperience[] = selectHomeHero(items),
) {
  const usedImages = new Set<string>();
  const claim = (item: PublicExperience) => {
    const key = item.image || item.id;
    if (usedImages.has(key)) return false;
    usedImages.add(key);
    return true;
  };
  hero.forEach(claim);
  const familiar = [
    "a-morning-at-the-hawker-table",
    "step-into-the-dance",
    "a-city-in-the-water",
  ].flatMap((slug) => items.find((item) => item.slug === slug) || []);
  const startingPoints = (familiar.length ? familiar : items)
    .filter((item) => !usedImages.has(item.image || item.id))
    .slice(0, 3);
  startingPoints.forEach(claim);
  const newGuides = items
    .filter((item) => !usedImages.has(item.image || item.id))
    .slice(0, 6);
  newGuides.forEach(claim);
  const homePathways = pathways.slice(0, 3).flatMap((pathway) => {
    const item = items.find(
      (entry) =>
        pathway.guideSlugs.includes(entry.slug) &&
        !usedImages.has(entry.image || entry.id),
    );
    if (!item) return [];
    claim(item);
    return [{ pathway, item }];
  });
  return { hero, startingPoints, newGuides, homePathways, usedImages };
}
