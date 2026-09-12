export const fields = [
  {
    slug: "taste",
    name: "Taste",
    line: "Understand a place through what it shares at the table.",
  },
  {
    slug: "make",
    name: "Make",
    line: "Learn through your hands, alongside people who know.",
  },
  {
    slug: "move",
    name: "Move",
    line: "Find a different rhythm by moving through a place.",
  },
  {
    slug: "nature",
    name: "Nature",
    line: "Pay attention to the living world around you.",
  },
  {
    slug: "gather",
    name: "Gather",
    line: "Be part of a moment that belongs to more than one person.",
  },
  {
    slug: "celebrate",
    name: "Celebrate",
    line: "Meet the occasions that bring a community together.",
  },
  {
    slug: "witness",
    name: "Witness",
    line: "Be present without needing to take part.",
  },
  {
    slug: "learn",
    name: "Learn",
    line: "Let a different way of knowing change your questions.",
  },
  {
    slug: "restore",
    name: "Restore",
    line: "Make room for care, stillness and a slower pace.",
  },
  {
    slug: "stay",
    name: "Stay",
    line: "Spend enough time for a place to become more than a view.",
  },
  {
    slug: "contribute",
    name: "Contribute",
    line: "Support work that a community has chosen for itself.",
  },
  { slug: "play", name: "Play", line: "Discover the shared language of play." },
  {
    slug: "work",
    name: "Work",
    line: "Understand the everyday work that holds a place together.",
  },
] as const;
export type Field = (typeof fields)[number]["slug"];
/**
 * Visitor-facing discovery lenses. Fields remain EA's editorial vocabulary;
 * these translate that vocabulary into the things a traveller actually wants
 * to do. Do not surface an interest until the collection contains it.
 */
export type Interest = {
  slug: string;
  name: string;
  fields: readonly Field[];
};
export const interests: readonly Interest[] = [
  { slug: "eat-drink", name: "Eat & drink", fields: ["taste"] },
  {
    slug: "make-learn",
    name: "Make & learn",
    fields: ["make", "learn", "work"],
  },
  {
    slug: "move-water",
    name: "Move & water",
    fields: ["move", "play"],
  },
  {
    slug: "explore-reflect",
    name: "Explore & reflect",
    fields: ["nature", "witness", "contribute"],
  },
  {
    slug: "swim-reset",
    name: "Swim & reset",
    fields: ["restore", "stay"],
  },
  {
    slug: "shared-rituals",
    name: "Shared rituals",
    fields: ["gather", "celebrate"],
  },
];
export type PublicStatus =
  | "public_guide"
  | "selected_open"
  | "selected_context_required"
  | "protected_visibility"
  | "paused";
export type Status =
  PublicStatus | "research_candidate" | "do_not_publish" | "retired";
export const statusLabels: Record<PublicStatus, string> = {
  public_guide: "Independent guide",
  selected_open: "Open access",
  selected_context_required: "Context required",
  protected_visibility: "Protected",
  paused: "Paused",
};
export type PublicExperience = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  field: Field;
  place: string;
  country: string;
  countrySlug: string;
  regionSlug: string;
  status: PublicStatus;
  image: string | null;
  imageAlt: string;
  kernel: string;
  rootedness: string;
  shift: string;
  humanReturn: string;
  responsibility: string;
  evidence: string;
  duration: string;
  participation: string;
  access: string;
  demo: boolean;
  guideReview?: GuideReview;
};
export type GuideReview = {
  basis: "public_sources";
  scope: "public_programme" | "public_admission" | "public_hospitality";
  requiresSpecialPermission: false;
  checkedOn: string;
  reviewBy: string;
  accessUrl: string;
  sources: { title: string; url: string; note: string }[];
};
export type Query = {
  q?: string;
  field?: string;
  interest?: string;
  place?: string;
  status?: string;
  view?: string;
};
export function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}
export function filterExperiences(items: PublicExperience[], query: Query) {
  const q = normalizeSearch((query.q ?? "").trim());
  const interest = interests.find((entry) => entry.slug === query.interest);
  return items.filter(
    (item) =>
      (!q ||
        normalizeSearch(
          [item.title, item.summary, item.place, item.country, item.field].join(
            " ",
          ),
        ).includes(q)) &&
      (!query.field || item.field === query.field) &&
      (!interest || interest.fields.includes(item.field)) &&
      (!query.place || item.countrySlug === query.place) &&
      (!query.status || item.status === query.status),
  );
}
export const territories = [
  {
    slug: "belgium",
    name: "Belgium",
    region: "oostduinkerke",
    regionName: "Oostduinkerke",
    intro:
      "Meet a North Sea craft that still moves with horses, nets and the tide.",
    image: null,
  },
  {
    slug: "denmark",
    name: "Denmark",
    region: "ribe-marshes",
    regionName: "Ribe Marshes",
    intro:
      "Wait at the edge of the marsh while a migrating flock decides what the sky will become.",
    image: null,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "wadden-sea",
    regionName: "Wadden Sea",
    intro:
      "Follow the tide into a temporary landscape with someone qualified to read it.",
    image: null,
  },
  {
    slug: "norway",
    name: "Norway",
    region: "lofoten",
    regionName: "Lofoten",
    intro:
      "Look beyond the mountain silhouette to the fishery that shaped life along the islands.",
    image: null,
  },
  {
    slug: "spain",
    name: "Spain",
    region: "barcelona",
    regionName: "Barcelona",
    intro:
      "A public square, a trained collective and the care that makes a tower possible.",
    image: null,
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "singapore",
    regionName: "Singapore",
    intro:
      "Begin with a shared table and a living food culture that meets the city every day.",
    image: null,
  },
  {
    slug: "hungary",
    name: "Hungary",
    region: "budapest",
    regionName: "Budapest",
    intro:
      "Listen, watch and join only when invited at a public dance house shaped by live music.",
    image: null,
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    region: "istanbul",
    regionName: "Istanbul",
    intro:
      "Enter the familiar city through water, marble and the working life of a historic bathhouse.",
    image: null,
  },
  {
    slug: "mexico",
    name: "Mexico",
    region: "xochimilco",
    regionName: "Xochimilco, Mexico City",
    intro:
      "Look beyond the colourful boats to the agricultural landscape that still grows food within Mexico City.",
    image: null,
  },
  {
    slug: "ireland",
    name: "Ireland",
    region: "county-clare",
    regionName: "County Clare",
    intro:
      "Begin in Doolin with the shared attention of a traditional music session.",
    image: null,
  },
  {
    slug: "armenia",
    name: "Armenia",
    region: "gegharkunik",
    regionName: "Gegharkunik",
    intro:
      "Bread, skilled hands and a village table: begin with lavash in Tsaghkunk.",
    image: null,
  },
  {
    slug: "finland",
    name: "Finland",
    region: "tampere",
    regionName: "Tampere",
    intro:
      "A public room for warmth, quiet consideration and the ordinary rules of sharing space.",
    image: null,
  },
  {
    slug: "iceland",
    name: "Iceland",
    region: "reykjavik",
    regionName: "Reykjavík",
    intro:
      "A way into the city through the shared space of a municipal swimming pool.",
    image: null,
  },
  {
    slug: "laos",
    name: "Laos",
    region: "luang-prabang",
    regionName: "Luang Prabang",
    intro:
      "Start with a material: plant colour, silk and the decisions made by hand.",
    image: null,
  },
  {
    slug: "austria",
    name: "Austria",
    region: "vienna",
    regionName: "Vienna",
    intro:
      "Look beyond the monumental city to the relationship between its vineyards and its table.",
    image: null,
  },
  {
    slug: "grenada",
    name: "Grenada",
    region: "saint-patrick",
    regionName: "Saint Patrick",
    intro:
      "Follow cacao beyond the finished bar, with attention to its making and the history of the land.",
    image: null,
  },
  {
    slug: "croatia",
    name: "Croatia",
    region: "dalmatia",
    regionName: "Dalmatia",
    intro:
      "Coastal rhythms, working harbours and the knowledge held between land and sea.",
    image: "/images/harbour.jpg",
  },
  {
    slug: "portugal",
    name: "Portugal",
    region: "alentejo",
    regionName: "Alentejo",
    intro:
      "An exploration of material, patient craft and the everyday rituals of making.",
    image: "/images/pottery.jpg",
  },
  {
    slug: "japan",
    name: "Japan",
    region: "kumano-kodo",
    regionName: "Kumano Kodo",
    intro:
      "Stone paths and a bowl of tea: two distinct ways to give a place your attention, in Kumano Kodo and Kyoto.",
    image: null,
  },
  {
    slug: "italy",
    name: "Italy",
    region: "venice",
    regionName: "Venice",
    intro:
      "Understand Venice through the movement, balance and learned skill of an oar.",
    image: null,
  },
  {
    slug: "slovenia",
    name: "Slovenia",
    region: "julian-alps",
    regionName: "Julian Alps",
    intro:
      "Landscape as something to notice, care for and move through thoughtfully.",
    image: null,
  },
] as const;
/** Derive region coverage from actual public records, not one fixed region per country. */
export function regionsForCountry(country: string, items: PublicExperience[]) {
  const regions = new Map<string, string>();
  for (const item of items) {
    if (item.countrySlug !== country || !item.regionSlug) continue;
    const known = territories.find(
      (t) => t.slug === country && t.region === item.regionSlug,
    );
    regions.set(item.regionSlug, known?.regionName || item.place);
  }
  return [...regions].map(([slug, name]) => ({ slug, name }));
}

export function relatedExperiences(
  item: PublicExperience,
  items: PublicExperience[],
  limit = 3,
) {
  const score = (other: PublicExperience) =>
    (other.countrySlug === item.countrySlug ? 4 : 0) +
    (other.field === item.field ? 2 : 0) +
    (collections.some(
      (c) => c.fields.includes(item.field) && c.fields.includes(other.field),
    )
      ? 1
      : 0);
  return items
    .filter(
      (other) =>
        other.id !== item.id &&
        other.status !== "protected_visibility" &&
        other.status !== "paused",
    )
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}
export const collections = [
  {
    slug: "knowledge-in-the-hands",
    title: "Knowledge in the hands",
    subtitle: "A way of knowing that cannot be hurried.",
    fields: ["make", "learn", "work", "move"] as Field[],
    image: "/images/pottery.jpg",
  },
  {
    slug: "a-place-at-the-table",
    title: "A place at the table",
    subtitle: "Food as an invitation to understand.",
    fields: ["taste", "gather"] as Field[],
    image: "/images/market.jpg",
  },
  {
    slug: "the-art-of-paying-attention",
    title: "The art of paying attention",
    subtitle: "Sometimes the smallest shift is the most lasting.",
    fields: ["nature", "restore", "witness"] as Field[],
    image: "/images/forest.jpg",
  },
];
