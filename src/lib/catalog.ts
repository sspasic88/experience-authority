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
export type PublicStatus =
  | "public_guide"
  | "selected_open"
  | "selected_context_required"
  | "protected_visibility"
  | "paused";
export type Status =
  PublicStatus | "research_candidate" | "do_not_publish" | "retired";
export const statusLabels: Record<PublicStatus, string> = {
  public_guide: "Public-source guide",
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
  place?: string;
  status?: string;
  view?: string;
};
export function filterExperiences(items: PublicExperience[], query: Query) {
  const q = (query.q ?? "").trim().toLocaleLowerCase();
  return items.filter(
    (item) =>
      (!q ||
        [item.title, item.summary, item.place, item.country, item.field]
          .join(" ")
          .toLocaleLowerCase()
          .includes(q)) &&
      (!query.field || item.field === query.field) &&
      (!query.place || item.countrySlug === query.place) &&
      (!query.status || item.status === query.status),
  );
}
export const territories = [
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
      "A short public path where walking needs to remain attentive to a living place of worship.",
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
