import { editorialPathways } from "./editorial-pathways";

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
  guideSlugs?: readonly string[];
};
export const interests: readonly Interest[] = [
  {
    slug: "eat-drink",
    name: "Eat & drink",
    fields: ["taste"],
    guideSlugs: [
      "begin-with-rice-not-the-bottle",
      "cook-beyond-the-postcard",
      "let-the-coffee-take-its-time",
      "bread-from-the-tonir",
      "kimchi-before-the-jar",
      "mexico-city-grown-on-water",
      "read-the-language-of-the-coffee-cup",
      "stay-while-the-zamba-circles-back",
    ],
  },
  {
    slug: "make-learn",
    name: "Make & learn",
    fields: ["make", "learn", "work"],
    guideSlugs: [
      "learn-the-fold-in-salta",
      "kimchi-before-the-jar",
      "the-pour-before-the-glass",
    ],
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
    name: "Rest & stay",
    fields: ["restore", "stay"],
    guideSlugs: ["make-room-in-the-steam"],
  },
  {
    slug: "shared-rituals",
    name: "Shared rituals",
    fields: ["gather", "celebrate"],
  },
];
export function matchesInterest(
  item: { slug: string; field: Field },
  interest: Interest,
) {
  return (
    interest.fields.includes(item.field) ||
    Boolean(interest.guideSlugs?.includes(item.slug))
  );
}
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
      (!interest || matchesInterest(item, interest)) &&
      (!query.place || item.countrySlug === query.place) &&
      (!query.status || item.status === query.status),
  );
}
export const territories = [
  {
    slug: "poland",
    name: "Poland",
    region: "krakow",
    regionName: "Kraków",
    intro:
      "Taste Kraków through its everyday ring-shaped bread, take stained glass back to the workbench and, in December, watch the city reappear in miniature.",
    image: null,
  },
  {
    slug: "australia",
    name: "Australia",
    region: "mossman-gorge",
    regionName: "Mossman Gorge",
    intro:
      "Begin in Queensland's rainforest with a public Indigenous-guided walk at Mossman Gorge. Let the introduction belong to the people leading it.",
    image: null,
  },
  {
    slug: "south-africa",
    name: "South Africa",
    region: "cape-town",
    regionName: "Cape Town",
    intro:
      "Look beyond the familiar facade of Bo-Kaap through the practical work, spice and conversation of a Cape Malay cooking class.",
    image: null,
  },
  {
    slug: "argentina",
    name: "Argentina",
    region: "salta",
    regionName: "Salta",
    intro:
      "Make the fold at a Salta kitchen table, then stay into the evening for live folk music, dance and a shared peña room.",
    image: null,
  },
  {
    slug: "bosnia-and-herzegovina",
    name: "Bosnia and Herzegovina",
    region: "sarajevo",
    regionName: "Sarajevo",
    intro:
      "Give Sarajevo time, with a city walk that pauses for the objects, gestures and company of Bosnian coffee.",
    image: null,
  },
  {
    slug: "puerto-rico",
    name: "Puerto Rico",
    region: "loiza",
    regionName: "Loíza",
    intro:
      "Follow the rhythm into a public bomba class in Loíza, with room to listen before taking the first step.",
    image: null,
  },
  {
    slug: "france",
    name: "France",
    region: "biarritz",
    regionName: "Biarritz",
    intro:
      "Try a Basque game in Biarritz or follow Arcachon Bay from working oyster beds to a moving dune. Choose a place, then the way you want to experience it.",
    image: null,
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    region: "hanoi",
    regionName: "Hanoi",
    intro:
      "Take a seat in Hanoi for a theatre made of water, music, lacquered figures and work hidden behind the screen.",
    image: null,
  },
  {
    slug: "germany",
    name: "Germany",
    region: "allgaeu",
    regionName: "Allgäu",
    intro:
      "Follow the Alpine year to a public cattle return, where the work of summer meets the life of the village.",
    image: null,
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    region: "cambridge",
    regionName: "Cambridge",
    intro:
      "Learn the shared timing behind Cambridge church bells, then let a caller bring an Edinburgh dance floor into motion.",
    image: null,
  },
  {
    slug: "south-korea",
    name: "South Korea",
    region: "seoul",
    regionName: "Seoul",
    intro:
      "Make kimchi in Seoul, then meet Busan through the shared rules and unhurried time of a contemporary jjimjilbang.",
    image: null,
  },
  {
    slug: "morocco",
    name: "Morocco",
    region: "fez",
    regionName: "Fez",
    intro:
      "Begin with clay and geometry in Fez, where a first piece of zellige makes the labour behind a familiar surface visible.",
    image: null,
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    region: "montevideo",
    regionName: "Montevideo",
    intro:
      "Meet Montevideo through a shared candombe pulse, with attention to who the current public workshop is designed for.",
    image: null,
  },
  {
    slug: "namibia",
    name: "Namibia",
    region: "swakopmund",
    regionName: "Swakopmund",
    intro:
      "Read the Namib at ground level, where tracks and small lives change the meaning of an apparently empty horizon.",
    image: null,
  },
  {
    slug: "canada",
    name: "Canada",
    region: "outaouais",
    regionName: "Outaouais, Québec",
    intro:
      "Plan for the brief maple season through a public table shaped by sap, snow and the next current calendar.",
    image: null,
  },
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
      "A tower held by a public square, then cider understood through orchard, cellar and pour.",
    image: null,
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "singapore",
    regionName: "Singapore",
    intro:
      "A hawker breakfast, batik at a Kampong Gelam worktable and a coastal walk on Coney Island. Meet the city through food, craft and open air.",
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
    slug: "malta",
    name: "Malta",
    region: "malta-and-gozo",
    regionName: "Malta and Gozo",
    intro:
      "Choose one village and one feast day, then follow the work of a festa from decorated street to band, procession and square.",
    image: null,
  },
  {
    slug: "qatar",
    name: "Qatar",
    region: "doha",
    regionName: "Doha",
    intro:
      "Begin in a Souq Al Wakrah cultural house, where preparing and sharing qahwa opens a conversation about the majlis.",
    image: null,
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    region: "istanbul",
    regionName: "Istanbul",
    intro:
      "Enter Istanbul through two forms of public infrastructure: a working hammam and the municipal ferries that turn water into a city street.",
    image: null,
  },
  {
    slug: "mexico",
    name: "Mexico",
    region: "xochimilco",
    regionName: "Xochimilco, Mexico City",
    intro:
      "Follow food back to the chinampas and agave fields, then meet Mexico City at the speed of its Sunday car-free avenue.",
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
      "Compare two public sauna rhythms, from Tampere's historic neighbourhood room to smoke, snow and Lake Kallavesi in Kuopio.",
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
    region: "istria",
    regionName: "Istria",
    intro:
      "Follow a truffle dog through inland Istria, then bring a new understanding of the ingredient to the table. Begin near Buzet with a publicly offered guided hunt.",
    image: null,
  },
  {
    slug: "portugal",
    name: "Portugal",
    region: "porto",
    regionName: "Porto",
    intro:
      "Follow an ingredient through Bolhão, listen inside Clérigos and paint a tile in Porto. Cross the Douro to Gaia for the cellars. Four ways to look beyond the finished thing, with room to connect them.",
    image: null,
  },
  {
    slug: "japan",
    name: "Japan",
    region: "kumano-kodo",
    regionName: "Kumano Kodo",
    intro:
      "Tea, scent, textile craft and backstreet cycling in Kyoto. A public pilgrimage path in Kumano Kodo. A temple night in Koyasan. Choose a place, then find your way in.",
    image: null,
  },
  {
    slug: "italy",
    name: "Italy",
    region: "venice",
    regionName: "Venice",
    intro:
      "Understand Venice through the movement of an oar and the shaping of glass in a Castello atelier. Two hands-on encounters with the skill behind familiar surfaces.",
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
// Area labels can differ from a guide's specific site. Never let the last guide rename the area.
const additionalRegionNames: Readonly<Record<string, string>> = {
  "france/arcachon-bay": "Arcachon Bay",
  "poland/krakow": "Kraków",
};

function regionDisplayName(country: string, region: string, fallback: string) {
  return (
    additionalRegionNames[`${country}/${region}`] ||
    territories.find((item) => item.slug === country && item.region === region)
      ?.regionName ||
    fallback
  );
}

/** Derive region coverage from actual public records, not one fixed region per country. */
export function regionsForCountry(country: string, items: PublicExperience[]) {
  const regions = new Map<string, string>();
  for (const item of items) {
    if (item.countrySlug !== country || !item.regionSlug) continue;
    regions.set(
      item.regionSlug,
      regionDisplayName(country, item.regionSlug, item.place),
    );
  }
  return [...regions].map(([slug, name]) => ({ slug, name }));
}

export function relatedExperiences(
  item: PublicExperience,
  items: PublicExperience[],
  limit = 3,
) {
  return connectedExperiences(item, items, limit).map(
    (connection) => connection.item,
  );
}

const connectedLocalAreas: readonly {
  countrySlug: string;
  regionSlugs: readonly string[];
  label: string;
}[] = [
  {
    countrySlug: "portugal",
    regionSlugs: ["porto", "vila-nova-de-gaia"],
    label: "Porto and Gaia",
  },
  {
    countrySlug: "mexico",
    regionSlugs: ["mexico-city", "xochimilco"],
    label: "Mexico City and Xochimilco",
  },
];

export type ExperienceConnection = {
  item: PublicExperience;
  scope: "same_area" | "connected_area" | "same_country" | "editorial";
  label: string;
  href: string;
};

function sharedInterest(a: PublicExperience, b: PublicExperience) {
  return interests.find(
    (interest) => matchesInterest(a, interest) && matchesInterest(b, interest),
  );
}

function sharedEditorialPathway(a: PublicExperience, b: PublicExperience) {
  return editorialPathways.find(
    (pathway) =>
      pathway.guideSlugs.some((slug) => slug === a.slug) &&
      pathway.guideSlugs.some((slug) => slug === b.slug),
  );
}

function connectionScope(
  current: PublicExperience,
  other: PublicExperience,
): Omit<ExperienceConnection, "item"> {
  if (
    current.countrySlug === other.countrySlug &&
    current.regionSlug === other.regionSlug
  ) {
    return {
      scope: "same_area",
      label: `More in ${regionDisplayName(current.countrySlug, current.regionSlug, current.place)}`,
      href: `/places/${current.countrySlug}/${current.regionSlug}`,
    };
  }

  const connectedArea = connectedLocalAreas.find(
    (area) =>
      area.countrySlug === current.countrySlug &&
      area.countrySlug === other.countrySlug &&
      area.regionSlugs.some((region) => region === current.regionSlug) &&
      area.regionSlugs.some((region) => region === other.regionSlug),
  );
  if (connectedArea)
    return {
      scope: "connected_area",
      label: connectedArea.label,
      href: `/places/${current.countrySlug}`,
    };
  if (current.countrySlug === other.countrySlug)
    return {
      scope: "same_country",
      label: `Elsewhere in ${current.country}`,
      href: `/places/${current.countrySlug}`,
    };
  return {
    scope: "editorial",
    label: "A complementary EA thread",
    href: "/explore",
  };
}

/** Place comes first, then contrast of activity and visitor interest. */
export function connectedExperiences(
  item: PublicExperience,
  items: PublicExperience[],
  limit = 3,
): ExperienceConnection[] {
  return items
    .filter(
      (other) =>
        other.id !== item.id &&
        other.status !== "protected_visibility" &&
        other.status !== "paused",
    )
    .map((other, order) => {
      const connection = connectionScope(item, other);
      const sharedPathway = sharedEditorialPathway(item, other);
      const sharedVisitorInterest = sharedInterest(item, other);
      const geographicWeight = {
        same_area: 400,
        connected_area: 300,
        same_country: 200,
        editorial: 0,
      }[connection.scope];
      const contrastWeight = other.field === item.field ? 0 : 30;
      const pathwayWeight = sharedPathway ? 24 : 0;
      const interestWeight = sharedVisitorInterest ? 12 : 0;
      return {
        ...connection,
        label:
          connection.scope === "editorial" && sharedPathway
            ? `From “${sharedPathway.title}”`
            : connection.scope === "editorial" && sharedVisitorInterest
              ? `Explore ${sharedVisitorInterest.name}`
              : connection.label,
        href:
          connection.scope === "editorial" && sharedPathway
            ? `/collections/${sharedPathway.slug}`
            : connection.scope === "editorial" && sharedVisitorInterest
              ? `/explore?interest=${sharedVisitorInterest.slug}`
              : connection.href,
        item: other,
        order,
        score:
          geographicWeight + contrastWeight + pathwayWeight + interestWeight,
      };
    })
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .slice(0, limit)
    .map(({ item: other, scope, label, href }) => ({
      item: other,
      scope,
      label,
      href,
    }));
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
