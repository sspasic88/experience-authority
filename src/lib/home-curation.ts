import type { PublicExperience } from "./catalog";
import type { EditorialPathway } from "./editorial-pathways";

export const heroGuideSlugs = [
  "marble-steam-istanbul",
  "venice-through-an-oar",
  "a-bowl-of-attention",
];
/** A photograph gets one place on the homepage, even when a guide belongs to several pathways. */
export function curateHome(
  items: PublicExperience[],
  pathways: readonly EditorialPathway[],
) {
  const usedImages = new Set<string>();
  const claim = (item: PublicExperience) => {
    const key = item.image || item.id;
    if (usedImages.has(key)) return false;
    usedImages.add(key);
    return true;
  };
  const hero = items.filter((item) => heroGuideSlugs.includes(item.slug));
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
