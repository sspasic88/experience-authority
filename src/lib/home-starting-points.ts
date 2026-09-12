export type StartingPointItem = {
  slug: string;
  place: string;
  country: string;
};

/**
 * A broad, editorially chosen pool for the empty home search. Randomness only
 * changes which useful doors are shown. It never changes search relevance.
 */
const preferredStartingPointSlugs = [
  "hear-the-arena-answer-back",
  "a-bowl-of-attention",
  "a-morning-at-the-hawker-table",
  "taste-what-time-does-to-port",
  "begin-with-rice-not-the-bottle",
  "let-the-dog-read-the-forest",
  "a-city-in-the-water",
  "venice-through-an-oar",
  "follow-the-agave-into-the-still",
  "the-weight-of-the-tower",
  "let-the-caller-start-the-dance",
  "cook-beyond-the-postcard",
  "let-the-rainforest-be-introduced",
  "follow-the-festa-through-the-streets",
  "play-the-wall-in-biarritz",
  "lift-a-pattern-from-the-water",
  "stay-for-the-session",
  "read-the-desert-at-ground-level",
] as const;

function shuffled<T>(items: readonly T[], random: () => number) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(random() * (index + 1));
    [result[index], result[swapWith]] = [result[swapWith], result[index]];
  }
  return result;
}

/** Select different places and countries, with a graceful full-catalogue fallback. */
export function selectHomeStartingPoints<T extends StartingPointItem>(
  items: readonly T[],
  count = 5,
  random: () => number = Math.random,
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const preferred = preferredStartingPointSlugs.flatMap(
    (slug) => bySlug.get(slug) ?? [],
  );
  const pool = [
    ...preferred,
    ...items.filter((item) => !preferred.includes(item)),
  ];
  const selected: T[] = [];
  const usedPlaces = new Set<string>();
  const usedCountries = new Set<string>();

  for (const item of shuffled(pool, random)) {
    const place = item.place.toLocaleLowerCase();
    const country = item.country.toLocaleLowerCase();
    if (usedPlaces.has(place) || usedCountries.has(country)) continue;
    selected.push(item);
    usedPlaces.add(place);
    usedCountries.add(country);
    if (selected.length === count) return selected;
  }

  for (const item of shuffled(pool, random)) {
    if (
      selected.includes(item) ||
      usedPlaces.has(item.place.toLocaleLowerCase())
    )
      continue;
    selected.push(item);
    usedPlaces.add(item.place.toLocaleLowerCase());
    if (selected.length === count) break;
  }
  return selected;
}
