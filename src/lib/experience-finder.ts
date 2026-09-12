import {
  interests,
  matchesInterest,
  normalizeSearch,
  type Field,
} from "./catalog";

export const participationModes = [
  { value: "hands-on", label: "Make or take part" },
  { value: "watch-listen", label: "Watch & listen" },
  { value: "at-table", label: "Eat & drink" },
  { value: "outdoors", label: "Be outdoors" },
  { value: "slow-down", label: "Slow down" },
] as const;
export const timeFits = [
  { value: "short", label: "A short visit" },
  { value: "half-day", label: "A morning or afternoon" },
  { value: "own-pace", label: "At my own pace" },
  { value: "calendar", label: "Let the calendar decide" },
  { value: "overnight", label: "Stay the night" },
] as const;
type Mode = (typeof participationModes)[number]["value"];
type TimeFit = (typeof timeFits)[number]["value"];
export type DiscoveryProfile = {
  modes: Mode[];
  time?: TimeFit;
  keywords: string[];
};

/** Editorial planning lenses, based on the scope and duration stated in each guide.
 * These are not live session lengths, availability or suitability guarantees. */
export const discoveryProfiles: Record<string, DiscoveryProfile> = {
  "draw-with-wax-in-kampong-gelam": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Singapore",
      "Kampong Gelam",
      "batik",
      "batik tulis",
      "canting",
      "textile workshop",
      "wax resist",
    ],
  },
  "walk-the-island-between-forest-and-shore": {
    modes: ["outdoors", "slow-down"],
    time: "short",
    keywords: [
      "Singapore",
      "Coney Island",
      "Pulau Serangoon",
      "nature walk",
      "mangroves",
      "coastal forest",
      "birdwatching",
    ],
  },
  "build-a-pattern-in-colour": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Kyoto",
      "Yuzen",
      "Surikomi",
      "stencil",
      "textile",
      "dyeing",
      "Marumasu Nishimuraya",
      "machiya",
      "workshop",
    ],
  },
  "ride-from-alley-to-river": {
    modes: ["hands-on", "outdoors"],
    time: "half-day",
    keywords: [
      "Kyoto",
      "cycling",
      "bicycle",
      "bike",
      "Gion",
      "Kamo River",
      "Miyagawacho",
      "Shirakawa",
      "Kyoto Gyoen",
    ],
  },
  "when-the-herds-come-down": {
    modes: ["watch-listen", "outdoors"],
    time: "calendar",
    keywords: [
      "Allgäu",
      "Viehscheid",
      "cattle",
      "Alpine festival",
      "Thalkirchdorf",
      "Oberstaufen",
      "September",
    ],
  },
  "set-one-bell-in-motion": {
    modes: ["hands-on", "watch-listen"],
    time: "short",
    keywords: [
      "Cambridge",
      "bell ringing",
      "change ringing",
      "church bells",
      "campanology",
    ],
  },
  "paint-the-pattern-you-noticed": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Porto",
      "azulejo",
      "tile painting",
      "ceramics",
      "workshop",
      "Campanhã",
    ],
  },
  "spend-the-night-in-a-temple-town": {
    modes: ["slow-down"],
    time: "overnight",
    keywords: [
      "Koyasan",
      "Mount Koya",
      "temple stay",
      "shukubo",
      "Japan",
      "Buddhist lodging",
    ],
  },
  "cook-beyond-the-postcard": {
    modes: ["hands-on", "at-table"],
    time: "half-day",
    keywords: [
      "Cape Town",
      "Bo-Kaap",
      "Cape Malay",
      "cooking class",
      "spices",
      "samoosas",
      "masala",
    ],
  },
  "learn-the-fold-in-salta": {
    modes: ["hands-on", "at-table"],
    keywords: [
      "Salta",
      "Argentina",
      "empanada",
      "cooking workshop",
      "recado",
      "repulgue",
      "food",
    ],
  },
  "let-the-coffee-take-its-time": {
    modes: ["at-table", "watch-listen", "slow-down"],
    time: "half-day",
    keywords: [
      "Sarajevo",
      "Baščaršija",
      "Bosnian coffee",
      "cafe",
      "Old Town",
      "guided walk",
    ],
  },
  "let-the-drum-lead-the-first-step": {
    modes: ["hands-on", "watch-listen"],
    time: "calendar",
    keywords: [
      "Loíza",
      "Puerto Rico",
      "bomba",
      "dance class",
      "drumming",
      "percussion",
    ],
  },
  "play-the-wall-in-biarritz": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Biarritz",
      "Basque",
      "pelota",
      "pala",
      "chistera",
      "fronton",
      "Jai Alai",
      "sport",
      "beginner",
    ],
  },
  "watch-a-stage-made-of-water": {
    modes: ["watch-listen"],
    keywords: [
      "Hanoi",
      "Thang Long",
      "water puppetry",
      "theatre",
      "performance",
      "Hoan Kiem",
      "Vietnam",
    ],
  },
  "a-bowl-of-attention": {
    modes: ["hands-on", "at-table", "slow-down"],
    time: "short",
    keywords: ["tea", "matcha", "Kyoto", "Japan", "tea ceremony"],
  },
  "venice-through-an-oar": {
    modes: ["hands-on", "outdoors"],
    time: "short",
    keywords: ["rowing", "boat", "water", "lagoon", "voga"],
  },
  "marble-steam-istanbul": {
    modes: ["slow-down"],
    time: "short",
    keywords: [
      "hammam",
      "hamam",
      "Turkish bath",
      "bathing",
      "steam",
      "architecture",
    ],
  },
  "the-pour-before-the-glass": {
    modes: ["hands-on", "at-table"],
    time: "short",
    keywords: ["cider", "cellar", "apple", "tasting", "sidra"],
  },
  "colour-before-cloth": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: [
      "dyeing",
      "dye",
      "textile",
      "craft",
      "workshop",
      "colour",
      "color",
    ],
  },
  "mexico-city-grown-on-water": {
    modes: ["outdoors", "at-table"],
    time: "half-day",
    keywords: ["chinampa", "farm", "food", "boat", "breakfast", "Xochimilco"],
  },
  "read-the-desert-at-ground-level": {
    modes: ["outdoors", "watch-listen"],
    time: "half-day",
    keywords: ["desert", "wildlife", "dunes", "chameleon", "Namib"],
  },
  "a-morning-at-the-hawker-table": {
    modes: ["at-table"],
    time: "own-pace",
    keywords: ["street food", "breakfast", "hawker", "Singapore", "market"],
  },
  "a-city-in-the-water": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: ["swim", "swimming", "pool", "Reykjavik", "water"],
  },
  "make-room-in-the-steam": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: ["sauna", "steam", "Tampere", "bathing"],
  },
  "the-vineyard-at-the-table": {
    modes: ["at-table"],
    time: "own-pace",
    keywords: ["wine", "dinner", "heuriger", "Vienna", "vineyard"],
  },
  "leave-room-for-devotion": {
    modes: ["outdoors", "slow-down"],
    time: "own-pace",
    keywords: [
      "walk",
      "walking",
      "forest",
      "Kumano",
      "Daimon-zaka",
      "pilgrimage",
    ],
  },
  "the-fish-behind-the-islands": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: ["museum", "fishing", "stockfish", "skrei", "Lofoten"],
  },
  "stay-for-the-session": {
    modes: ["watch-listen", "at-table"],
    time: "calendar",
    keywords: ["music", "live music", "evening", "pub", "Doolin"],
  },
  "step-into-the-dance": {
    modes: ["hands-on", "watch-listen"],
    time: "calendar",
    keywords: ["dance", "dancing", "music", "evening", "tanchaz"],
  },
  "the-weight-of-the-tower": {
    modes: ["watch-listen", "outdoors"],
    time: "calendar",
    keywords: ["castells", "human towers", "Barcelona", "festival"],
  },
  "walk-where-the-sea-was": {
    modes: ["outdoors"],
    time: "calendar",
    keywords: ["walk", "walking", "mudflat", "tide", "Wadden"],
  },
  "the-tide-brings-the-horses": {
    modes: ["watch-listen", "outdoors"],
    time: "calendar",
    keywords: ["horses", "fishing", "shrimp", "beach", "tide"],
  },
  "when-the-sky-moves-as-one": {
    modes: ["outdoors", "watch-listen"],
    time: "calendar",
    keywords: [
      "birds",
      "birdwatching",
      "starlings",
      "wildlife",
      "sunset",
      "black sun",
    ],
  },
  "when-the-sap-starts-to-run": {
    modes: ["at-table"],
    time: "calendar",
    keywords: ["maple", "sugar shack", "spring", "Quebec"],
  },
  "kimchi-before-the-jar": {
    modes: ["hands-on", "at-table"],
    keywords: ["kimchi", "cooking", "class", "fermentation", "Seoul"],
  },
  "bread-from-the-tonir": {
    modes: ["hands-on", "at-table"],
    keywords: ["bread", "baking", "lavash", "tonir", "Armenia"],
  },
  "before-the-chocolate-bar": {
    modes: ["watch-listen", "at-table"],
    keywords: ["cacao", "cocoa", "chocolate", "estate", "Grenada"],
  },
};

export type FinderItem = {
  slug: string;
  title: string;
  summary: string;
  place: string;
  country: string;
  countrySlug: string;
  regionSlug?: string;
  field: Field;
};
export type FinderQuery = {
  q?: string;
  interest?: string;
  place?: string;
  region?: string;
  field?: string;
  mode?: string;
  time?: string;
  view?: string;
};
export function matchesFinder(item: FinderItem, query: FinderQuery) {
  const profile = discoveryProfiles[item.slug];
  const interest = interests.find((entry) => entry.slug === query.interest);
  const haystack = normalizeSearch(
    [
      item.title,
      item.summary,
      item.place,
      item.country,
      item.field,
      ...(profile?.keywords ?? []),
    ].join(" "),
  );
  const terms = normalizeSearch((query.q ?? "").trim())
    .split(/\s+/)
    .filter(Boolean);
  return (
    terms.every((term) => haystack.includes(term)) &&
    (!interest || matchesInterest(item, interest)) &&
    (!query.place || item.countrySlug === query.place) &&
    (!query.region || item.regionSlug === query.region) &&
    (!query.field || item.field === query.field) &&
    (!query.mode ||
      Boolean(profile?.modes.some((mode) => mode === query.mode))) &&
    (!query.time || profile?.time === query.time)
  );
}

export function finderUrl(query: FinderQuery) {
  const params = new URLSearchParams();
  for (const key of [
    "q",
    "interest",
    "place",
    "region",
    "field",
    "mode",
    "time",
    "view",
  ] as const) {
    const value = query[key]?.trim();
    if (value && !(key === "view" && value === "grid")) params.set(key, value);
  }
  return `/explore${params.size ? `?${params}` : ""}`;
}
