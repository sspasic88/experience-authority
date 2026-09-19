import type { PublicExperience } from "./catalog";
import type { EditorialPathway } from "./editorial-pathways";
import { recentGuideReleases } from "./releases";

/**
 * Hand-composed hero editions. Each row balances a recognisable point of entry
 * with two less expected ways into a place. The order is main image, upper
 * story and lower story. It is editorial rotation, never a random shuffle.
 */
export const heroGuideRotations = [
  [
    "meet-the-island-through-the-uga",
    "stay-where-the-town-knows-your-host",
    "let-the-room-introduce-mindelo",
  ],
  [
    "stay-until-the-desert-loses-its-colour",
    "follow-the-colour-back-to-the-wool",
    "hear-the-wooden-racket-crack",
  ],
  [
    "build-hudut-from-the-coconut-outward",
    "meet-the-largest-fish-on-its-terms",
    "read-prague-through-a-movement",
  ],
  [
    "raise-a-room-from-a-circle",
    "meet-the-largest-fish-on-its-terms",
    "let-the-drum-recover-its-history",
  ],
  [
    "pick-the-leaf-before-the-cup",
    "walk-where-terere-is-everyday-language",
    "hear-the-flute-before-anyone-plays",
  ],
  [
    "walk-where-terere-is-everyday-language",
    "build-hudut-from-the-coconut-outward",
    "coil-the-lowcountry-one-stitch-at-a-time",
  ],
  [
    "hear-the-wooden-racket-crack",
    "let-the-clay-keep-the-fingerprints",
    "enter-sevdah-through-the-room-that-remembers-it",
  ],
  [
    "choose-the-harvest-before-the-cellar",
    "let-the-ballad-move-the-circle",
    "follow-cardboard-toward-bay-street",
  ],
  [
    "ask-the-market-where-london-came-from",
    "lift-a-pattern-from-the-water",
    "a-city-in-the-water",
  ],
  [
    "put-the-gods-back-among-the-machines",
    "begin-with-rice-not-the-bottle",
    "stay-for-the-session",
  ],
  [
    "make-the-morning-before-it-reaches-the-cafe",
    "the-weight-of-the-tower",
    "walk-where-the-sea-was",
  ],
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
    "walk-the-island-between-forest-and-shore",
    "paint-the-pattern-you-noticed",
  ],
  [
    "spend-the-night-in-a-temple-town",
    "the-pour-before-the-glass",
    "walk-where-the-sea-was",
  ],
  [
    "taste-what-time-does-to-port",
    "let-the-rainforest-be-introduced",
    "lift-a-pattern-from-the-water",
  ],
  [
    "hear-the-arena-answer-back",
    "let-the-dog-read-the-forest",
    "begin-with-rice-not-the-bottle",
  ],
] as const;

const compassOpeningGuideSlugs = [
  "meet-the-island-through-the-uga",
  "stay-until-the-desert-loses-its-colour",
  "follow-the-colour-back-to-the-wool",
  "let-the-room-introduce-mindelo",
  "stay-where-the-town-knows-your-host",
  "build-hudut-from-the-coconut-outward",
  "meet-the-largest-fish-on-its-terms",
  "raise-a-room-from-a-circle",
  "coil-the-lowcountry-one-stitch-at-a-time",
  "walk-where-terere-is-everyday-language",
  "pick-the-leaf-before-the-cup",
  "let-the-drum-recover-its-history",
  "hear-the-wooden-racket-crack",
  "enter-sevdah-through-the-room-that-remembers-it",
  "move-the-stone-that-holds-the-water",
  "let-the-clay-keep-the-fingerprints",
  "hear-the-drum-after-sunset",
  "taste-what-time-does-to-port",
  "ask-the-market-where-london-came-from",
  "read-monument-valley-beyond-the-scenic-drive",
  "a-bowl-of-attention",
  "venice-through-an-oar",
  "follow-the-agave-into-the-still",
  "the-fish-behind-the-islands",
  "kimchi-before-the-jar",
  "follow-balis-water-before-the-rice",
  "marble-steam-istanbul",
  "a-morning-at-the-hawker-table",
  "read-the-desert-at-ground-level",
  "stay-for-the-session",
  "play-the-wall-in-biarritz",
  "before-the-chocolate-bar",
  "a-city-in-the-water",
  "leave-room-for-devotion",
  "paint-the-pattern-you-noticed",
] as const;

const heroEditionMilliseconds = 3 * 60 * 60 * 1000;

export function homeHeroRotationIndex(date: Date | string = new Date()) {
  const value = typeof date === "string" ? new Date(`${date}T00:00:00Z`) : date;
  const edition = Math.floor(value.getTime() / heroEditionMilliseconds);
  return edition % heroGuideRotations.length;
}

/** Resolve only complete hand-composed editions so an expired guide cannot leave a gap. */
export function resolveHomeHeroEditions(items: PublicExperience[]) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return heroGuideRotations.flatMap((edition) => {
    const guides = edition.flatMap((slug) => bySlug.get(slug) ?? []);
    return guides.length === 3 ? [guides] : [];
  });
}

/** A stable three-hour selection. Missing or expired guides fail over gracefully. */
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

/**
 * Give the unfiltered Compass a deliberate opening sequence instead of the
 * implementation order of the guide files. The opening alternates familiar
 * points of reference with less expected discoveries and strong documentary
 * frames. Filtered results keep this order while still including every guide.
 */
export function orderExperienceDirectory(items: PublicExperience[]) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const seen = new Set<string>();
  const opening = compassOpeningGuideSlugs.flatMap((slug) => {
    const item = bySlug.get(slug);
    if (!item || seen.has(item.slug)) return [];
    seen.add(item.slug);
    return [item];
  });

  return [...opening, ...items.filter((item) => !seen.has(item.slug))];
}
/** A photograph gets one place on the homepage, even when a guide belongs to several pathways. */
export function curateHome(
  items: PublicExperience[],
  pathways: readonly EditorialPathway[],
  hero: PublicExperience[] = selectHomeHero(items),
  today = new Date().toISOString().slice(0, 10),
) {
  const usedImages = new Set<string>();
  const claim = (item: PublicExperience) => {
    const key = item.image || item.id;
    if (usedImages.has(key)) return false;
    usedImages.add(key);
    return true;
  };
  // The client can show any edition without replacing the server-rendered sections.
  // Reserve every available hero photograph, not only the initial three.
  resolveHomeHeroEditions(items).flat().forEach(claim);
  hero.forEach(claim);
  const familiar = [
    "a-morning-at-the-hawker-table",
    "step-into-the-dance",
    "a-city-in-the-water",
  ].flatMap((slug) => items.find((item) => item.slug === slug) || []);
  const startingPool = [
    ...familiar,
    ...items.filter((item) => !familiar.includes(item)),
  ].filter((item) => !usedImages.has(item.image || item.id));
  const startingPoints: PublicExperience[] = [];
  const startingCountries = new Set<string>();
  for (const item of startingPool) {
    if (startingCountries.has(item.countrySlug)) continue;
    startingPoints.push(item);
    startingCountries.add(item.countrySlug);
    if (startingPoints.length === 3) break;
  }
  // Small or filtered editions can still offer up to three distinct guides.
  for (const item of startingPool) {
    if (startingPoints.length === 3) break;
    if (!startingPoints.includes(item)) startingPoints.push(item);
  }
  // Starting points currently render as text-only destination prompts. Do not
  // reserve their photographs from sections that actually display an image.
  const recent = recentGuideReleases(items, today).filter(
    (item) => !usedImages.has(item.image || item.id),
  );
  const newGuides: PublicExperience[] = [];
  const countries = new Set<string>();
  for (const item of recent) {
    if (countries.has(item.countrySlug)) continue;
    newGuides.push(item);
    countries.add(item.countrySlug);
    if (newGuides.length === 6) break;
  }
  for (const item of recent) {
    if (newGuides.length === 6) break;
    if (!newGuides.includes(item)) newGuides.push(item);
  }
  newGuides.forEach(claim);
  const offset =
    Math.floor(Date.parse(`${today}T00:00:00Z`) / 86400000) %
    Math.max(pathways.length, 1);
  const orderedPathways = [
    ...pathways.slice(offset),
    ...pathways.slice(0, offset),
  ];
  let pathwayCount = 0;
  const homePathways = orderedPathways
    .flatMap((pathway) => {
      if (pathwayCount === 3) return [];
      const item = items.find(
        (entry) =>
          pathway.guideSlugs.includes(entry.slug) &&
          !usedImages.has(entry.image || entry.id),
      );
      if (!item) return [];
      pathwayCount += 1;
      claim(item);
      return [{ pathway, item }];
    })
    .slice(0, 3);
  return { hero, startingPoints, newGuides, homePathways, usedImages };
}
