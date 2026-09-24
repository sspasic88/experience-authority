import { editorialPathways } from "./editorial-pathways";
import { discoveryProfiles } from "./discovery-profiles";

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
      "build-the-curry-before-the-wok",
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
    name: "Make",
    fields: ["make"],
    guideSlugs: [
      "learn-the-fold-in-salta",
      "kimchi-before-the-jar",
      "the-pour-before-the-glass",
    ],
  },
  {
    slug: "move-water",
    name: "Move",
    fields: ["move", "play"],
  },
  {
    slug: "explore-reflect",
    name: "Explore & reflect",
    fields: ["nature", "witness", "contribute", "work", "learn"],
  },
  {
    slug: "swim-reset",
    name: "Reset",
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
  if (interest.slug === "make-learn") {
    return (
      item.field === "make" ||
      (["taste", "learn", "work"].includes(item.field) &&
        Boolean(discoveryProfiles[item.slug]?.modes.includes("hands-on")))
    );
  }
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
  scope:
    | "public_programme"
    | "public_admission"
    | "public_hospitality"
    | "public_observation";
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
  const normalized = value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
  const aliases: Record<string, string> = {
    nyc: "new york",
    usa: "united states",
    uk: "united kingdom",
  };
  return aliases[normalized.trim()] ?? normalized;
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
    slug: "thailand",
    name: "Thailand",
    region: "bangkok",
    regionName: "Bangkok",
    intro:
      "Begin with ingredients in a Silom kitchen, ride a smaller route through the city and give a theatre gesture time to tell its story.",
    image: null,
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "rotorua",
    regionName: "Rotorua",
    intro:
      "Give Rotorua's geothermal setting a slower place in the day through managed public bathing, with clear boundaries between pools, landscape and cultural claims.",
    image: null,
  },
  {
    slug: "sweden",
    name: "Sweden",
    region: "stockholm",
    regionName: "Stockholm",
    intro:
      "Read Stockholm from its island edges on a seasonal guided kayak outing, with the water itself connecting the view.",
    image: null,
  },
  {
    slug: "nepal",
    name: "Nepal",
    region: "kavrepalanchok",
    regionName: "Panauti",
    intro:
      "Stay in Panauti through a women-led network that lets a family table, host household and old town set the pace.",
    image: null,
  },
  {
    slug: "peru",
    name: "Peru",
    region: "sacred-valley",
    regionName: "Sacred Valley",
    intro:
      "Follow Chinchero's colour back to fibre, dye, tension and the women who keep the loom moving.",
    image: null,
  },
  {
    slug: "niue",
    name: "Niue",
    region: "north-niue",
    regionName: "North Niue",
    intro:
      "Meet Niue's forest and plantation through the extraordinary uga and the local knowledge that keeps the encounter grounded.",
    image: null,
  },
  {
    slug: "cabo-verde",
    name: "Cabo Verde",
    region: "sao-vicente",
    regionName: "São Vicente",
    intro:
      "Let Mindelo's current musicians, working rooms and changing live programme introduce São Vicente after dark.",
    image: null,
  },
  {
    slug: "jordan",
    name: "Jordan",
    region: "wadi-rum",
    regionName: "Wadi Rum",
    intro:
      "Stay after Wadi Rum loses its colour and let darkness, dinner, temperature and morning redraw the protected landscape.",
    image: null,
  },
  {
    slug: "belize",
    name: "Belize",
    region: "stann-creek",
    regionName: "Stann Creek",
    intro:
      "Begin in Hopkins with coconut, plantain and fish, then let a Garifuna family programme keep the meal connected to its makers.",
    image: null,
  },
  {
    slug: "rwanda",
    name: "Rwanda",
    region: "nyungwe",
    regionName: "Nyungwe",
    intro:
      "Follow tea from the bright leaf at Gisakura toward processing and tasting on a visit arranged through a current authorised route.",
    image: null,
  },
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    region: "naryn",
    regionName: "Naryn Region",
    intro:
      "See a yurt become a room through lattice, crown, roof poles, felt and the sequence held by its hosts.",
    image: null,
  },
  {
    slug: "timor-leste",
    name: "Timor-Leste",
    region: "dili",
    regionName: "Dili",
    intro:
      "Meet tais through the posture, tension and judgement of weaving, with makers controlling the loom and its meanings.",
    image: null,
  },
  {
    slug: "czechia",
    name: "Czechia",
    region: "prague",
    regionName: "Prague",
    intro:
      "Read Prague through Tyrš House and the civic movement that joined architecture, physical culture and public life.",
    image: null,
  },
  {
    slug: "slovakia",
    name: "Slovakia",
    region: "podpolanie",
    regionName: "Podpoľanie",
    intro:
      "Begin with the shape, material and regional life of the fujara before expecting the instrument to sound.",
    image: null,
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    region: "asuncion",
    regionName: "Asunción",
    intro:
      "Walk Asunción through public space and everyday tereré context without turning ordinary social life into a performance.",
    image: null,
  },
  {
    slug: "djibouti",
    name: "Djibouti",
    region: "gulf-of-tadjoura",
    regionName: "Gulf of Tadjoura",
    intro:
      "Enter Arta Bay through a regulated seasonal encounter where the whale shark, the decree and the sea set the terms.",
    image: null,
  },
  {
    slug: "curacao",
    name: "Curaçao",
    region: "west-curacao",
    regionName: "Bandabou",
    intro:
      "Let a dedicated museum return tambú to the history, resistance and social memory held inside its drum.",
    image: null,
  },
  {
    slug: "tunisia",
    name: "Tunisia",
    region: "bizerte",
    regionName: "Bizerte and Sejnane",
    intro:
      "Meet northern Tunisia through clay, hand-built form and the knowledge carried by Sejnane's women potters.",
    image: null,
  },
  {
    slug: "tonga",
    name: "Tonga",
    region: "tongatapu",
    regionName: "Tongatapu",
    intro:
      "Begin with ngatu as bark, pattern, work and exchange before its finished surface takes over.",
    image: null,
  },
  {
    slug: "kosovo",
    name: "Kosovo",
    region: "prizren",
    regionName: "Prizren",
    intro:
      "Read Prizren from a working filigree bench, where silver becomes structure one join at a time.",
    image: null,
  },
  {
    slug: "faroe-islands",
    name: "Faroe Islands",
    region: "torshavn",
    regionName: "Tórshavn",
    intro:
      "Let a current public chain dance connect ballad, language, joined hands and the pace of the circle.",
    image: null,
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    region: "mahe",
    regionName: "Mahé",
    intro:
      "Stay after sunset for a public moutya evening that keeps drum, movement and history together.",
    image: null,
  },
  {
    slug: "barbados",
    name: "Barbados",
    region: "island-wide",
    regionName: "Across Barbados",
    intro:
      "Meet a homegrown game through its low net, wooden racket and the community courts that keep it moving.",
    image: null,
  },
  {
    slug: "the-bahamas",
    name: "The Bahamas",
    region: "new-providence",
    regionName: "New Providence",
    intro:
      "Follow Nassau's Junkanoo from parade motion back to cardboard, rhythm and collective construction.",
    image: null,
  },
  {
    slug: "moldova",
    name: "Moldova",
    region: "stefan-voda",
    regionName: "Ștefan Vodă",
    intro:
      "Time a winery visit for harvest and let the season arrive before the tasting note.",
    image: null,
  },
  {
    slug: "brazil",
    name: "Brazil",
    region: "rio-de-janeiro",
    regionName: "Rio de Janeiro",
    intro:
      "See Rio build Carnaval before competition night, when a free public rehearsal exposes the coordination beneath the spectacle.",
    image: null,
  },
  {
    slug: "romania",
    name: "Romania",
    region: "bucovina",
    regionName: "Bucovina",
    intro:
      "Enter Bucovina through wax, colour and the small decisions held inside Vama's extraordinary collection of decorated eggs.",
    image: null,
  },
  {
    slug: "georgia",
    name: "Georgia",
    region: "kakheti",
    regionName: "Kakheti",
    intro:
      "Begin Kakheti below the cellar floor, where a buried qvevri changes the questions you bring to Georgian wine.",
    image: null,
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    region: "central-highlands",
    regionName: "Central Highlands",
    intro:
      "Meet Sri Lanka's Central Highlands on a seasonal public pilgrimage where devotion, weather and shared steps outrank a summit photograph.",
    image: null,
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    region: "addis-ababa",
    regionName: "Addis Ababa",
    intro:
      "Slow Addis Ababa through green-coffee sorting, roasting, cupping and the social time held by a jebena.",
    image: null,
  },
  {
    slug: "kenya",
    name: "Kenya",
    region: "lamu-archipelago",
    regionName: "Lamu Archipelago",
    intro:
      "Let Lamu's water, mangroves and lateen sail reveal a maritime intelligence that no waterfront photograph can contain.",
    image: null,
  },
  {
    slug: "uganda",
    name: "Uganda",
    region: "entebbe",
    regionName: "Entebbe",
    intro:
      "Hear the repeated mallet behind barkcloth during a bounded host-led introduction in Entebbe.",
    image: null,
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    region: "kingston-jamaica",
    regionName: "Kingston",
    intro:
      "Hear Kingston through a Sunday sound system where records, selectors, speakers and hillside become one public event.",
    image: null,
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    region: "kilimanjaro-region",
    regionName: "Kilimanjaro Region",
    intro:
      "Follow coffee from plant to pan in Materuni, where a hands-on public programme brings Kilimanjaro's cultivated slopes into one freshly brewed cup.",
    image: null,
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    region: "baku",
    regionName: "Baku",
    intro:
      "Listen past Baku's skyline and into mugham, where voice, tar and kamancha keep a musical path open to improvisation.",
    image: null,
  },
  {
    slug: "trinidad-and-tobago",
    name: "Trinidad and Tobago",
    region: "port-of-spain",
    regionName: "Port of Spain",
    intro:
      "Meet Trinidad through the maker's hammer, the tuner's ear and the first bright notes drawn from a shaped steelpan.",
    image: null,
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    region: "el-alto",
    regionName: "El Alto",
    intro:
      "Look up in El Alto, where commerce, event halls and rooftop homes stack into a neo-Andean architecture found nowhere else.",
    image: null,
  },
  {
    slug: "montenegro",
    name: "Montenegro",
    region: "perast",
    regionName: "Perast",
    intro:
      "Begin with Perast's maritime history, then face the island whose edge is renewed by a local procession of stones each July.",
    image: null,
  },
  {
    slug: "lesotho",
    name: "Lesotho",
    region: "semonkong",
    regionName: "Semonkong",
    intro:
      "Let a Basotho pony and a local guide set the pace through Semonkong's mountain terrain, where distance is read through footing, weather and slope.",
    image: null,
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    region: "tortuguero",
    regionName: "Tortuguero",
    intro:
      "Enter Tortuguero through a protected night system where trained spotters, local guides and the turtle's timing decide when observation can begin.",
    image: null,
  },
  {
    slug: "egypt",
    name: "Egypt",
    region: "aswan",
    regionName: "Aswan",
    intro:
      "Begin inside the Nubian Museum, then let a felucca reconnect its history, objects and displacement with Aswan's living river geography.",
    image: null,
  },
  {
    slug: "san-marino",
    name: "San Marino",
    region: "historic-centre",
    regionName: "Historic Centre",
    intro:
      "Read the historic centre through the Crossbowmen's Quarry, where one public contest concentrates civic ritual, exact rules and practised skill.",
    image: null,
  },
  {
    slug: "oman",
    name: "Oman",
    region: "ad-dakhiliyah",
    regionName: "Jabal Akhdar",
    intro:
      "Meet Jabal Akhdar in its short rose season, when a hosted morning can connect petals on the terrace with the still that carries their scent forward.",
    image: null,
  },
  {
    slug: "china",
    name: "China",
    region: "fujian",
    regionName: "Yongding",
    intro:
      "Enter Fujian through Yongding's earthen rings, where one open centre reveals the thresholds, galleries and shared structure inside a famous silhouette.",
    image: null,
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    region: "muharraq",
    regionName: "Muharraq",
    intro:
      "Begin with Muharraq's pearling history, then follow a licensed public route from the shore back to the oyster beds beneath Bahrain's water.",
    image: null,
  },
  {
    slug: "brunei",
    name: "Brunei",
    region: "kampong-ayer",
    regionName: "Kampong Ayer",
    intro:
      "Approach Bandar Seri Begawan from the river, then read Kampong Ayer through its public landings, walkways and relationship with the waterline.",
    image: null,
  },
  {
    slug: "botswana",
    name: "Botswana",
    region: "okavango-delta",
    regionName: "Okavango Delta",
    intro:
      "Move through the Okavango at the delta's pace, with a trained poler reading the shallow channels while the route remains open to water and season.",
    image: null,
  },
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    region: "samarkand",
    regionName: "Samarkand",
    intro:
      "Let Samarkand's finished pages lead out to Konigil, where mulberry bark, water and patient handwork make the material beneath the writing.",
    image: null,
  },
  {
    slug: "ghana",
    name: "Ghana",
    region: "ashanti-region",
    regionName: "Ashanti Region",
    intro:
      "Begin near Kumasi at Bonwire's loom, where one narrow strip reveals the preparation, pattern and skilled coordination inside a finished kente cloth.",
    image: null,
  },
  {
    slug: "samoa",
    name: "Samoa",
    region: "apia",
    regionName: "Apia",
    intro:
      "Begin Apia with the fire, stone, leaves and shared preparation behind an umu-cooked lunch in the public Cultural Village programme.",
    image: null,
  },
  {
    slug: "french-polynesia",
    name: "French Polynesia",
    region: "moorea",
    regionName: "Moorea",
    intro:
      "Enter Moorea's lagoon through a first va'a paddle, where the outrigger and a shared stroke matter as much as the water around them.",
    image: null,
  },
  {
    slug: "albania",
    name: "Albania",
    region: "tirana",
    regionName: "Tirana",
    intro:
      "Meet Tirana in the shared pace of its evening xhiro, when a public walk becomes part of how the city sees itself.",
    image: null,
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    region: "echternach",
    regionName: "Echternach",
    intro:
      "Begin with the context behind Echternach's hopping procession, then witness the live pilgrimage only when its public date and viewing guidance are confirmed.",
    image: null,
  },
  {
    slug: "sao-tome-and-principe",
    name: "São Tomé and Príncipe",
    region: "sao-tome",
    regionName: "São Tomé",
    intro:
      "Begin with cacao as fruit, then follow it into a contemporary factory tasting without leaving the islands' plantation history outside the room.",
    image: null,
  },
  {
    slug: "madagascar",
    name: "Madagascar",
    region: "ambalavao",
    regionName: "Ambalavao",
    intro:
      "Watch bark, water, fibre and fresh flowers become Antemoro paper in Ambalavao, with the boundary between observing work and learning a craft kept clear.",
    image: null,
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    region: "siem-reap",
    regionName: "Siem Reap",
    intro:
      "Stay in Siem Reap after Angkor closes and watch carved leather, dancers, narration and music bring another Khmer story-world into motion.",
    image: null,
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    region: "kazanlak",
    regionName: "Kazanlak and Rose Valley",
    intro:
      "Meet Bulgaria's rose before it becomes fragrance, through an announced public morning that connects flowers, timing, field work and distillation.",
    image: null,
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    region: "central",
    regionName: "Central",
    intro:
      "Take a seat in Central and learn Hong Kong through the tiles, etiquette and shared decisions of a Cantonese mahjong table.",
    image: null,
  },
  {
    slug: "north-macedonia",
    name: "North Macedonia",
    region: "skopje",
    regionName: "Skopje",
    intro:
      "Enter Skopje's Old Bazaar through two days of fine silver wire, patient fitting and a first filigree project of your own.",
    image: null,
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    region: "pinglin",
    regionName: "Pinglin",
    intro:
      "Follow tea from a Pinglin hillside into the hands, timing and judgment that begin shaping the cup before Taipei drinks it.",
    image: null,
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    region: "jatiluwih",
    regionName: "Jatiluwih",
    intro:
      "Follow Bali's shared water through Jatiluwih, then meet the ribs and planks of South Sulawesi's boatbuilding coast before the sails arrive.",
    image: null,
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    region: "appenzellerland",
    regionName: "Appenzellerland",
    intro:
      "Look down into daily cheese production in Stein, then follow Appenzeller from milk and curd to cellar and tasting.",
    image: null,
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    region: "ajman",
    regionName: "Ajman",
    intro:
      "Meet the Gulf through a working edge of Ajman Creek, where timber frames and unfinished dhows shift attention from skyline to shipyard.",
    image: null,
  },
  {
    slug: "colombia",
    name: "Colombia",
    region: "medellin-santa-elena",
    regionName: "Santa Elena, Medellín",
    intro:
      "Follow Medellín's flowers into the highland gardens, frames and family work of Santa Elena before the parade reaches the city.",
    image: null,
  },
  {
    slug: "slovenia",
    name: "Slovenia",
    region: "visnja-gora",
    regionName: "Višnja Gora",
    intro:
      "Look into a living hive in Višnja Gora, where the Carniolan bee becomes a route into biology, beekeeping and local history.",
    image: null,
  },
  {
    slug: "greece",
    name: "Greece",
    region: "chios",
    regionName: "Chios",
    intro:
      "Begin with clear resin on a mastic tree, then follow Chios mastiha through cultivation, cooperative work and use.",
    image: null,
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    region: "troodos-foothills",
    regionName: "Troodos foothills",
    intro:
      "Take one familiar Cypriot cheese back to milk, curd, whey and a village table on a public route into the Troodos foothills.",
    image: null,
  },
  {
    slug: "estonia",
    name: "Estonia",
    region: "vorumaa",
    regionName: "Võrumaa",
    intro:
      "Begin in Võrumaa with the timber, fire, preparation and family knowledge behind the smoke sauna, through a bounded public farm walk.",
    image: null,
  },
  {
    slug: "el-salvador",
    name: "El Salvador",
    region: "suchitoto",
    regionName: "Suchitoto",
    intro:
      "Fold, bind and open an indigo pattern in Suchitoto, with one hour focused on the decisions hidden inside the finished blue.",
    image: null,
  },
  {
    slug: "united-states",
    name: "United States",
    region: "new-york-city",
    regionName: "New York City",
    intro:
      "Move from New York's food, working systems and difficult harbour history to a Navajo-managed route beyond Monument Valley's familiar scenic drive.",
    image: null,
  },
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
    region: "paris",
    regionName: "Paris",
    intro:
      "Begin in Paris with pastry, tapestry and the city below the street. Biarritz and Arcachon Bay open very different ways into movement, food and the Atlantic landscape.",
    image: null,
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    region: "hanoi",
    regionName: "Hanoi",
    intro:
      "Take a seat in Hanoi for theatre made of water, then slow the city through the leaves, heat and long preparation behind a Red Dao herbal bath.",
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
    region: "london",
    regionName: "London",
    intro:
      "Begin in London with a market, a working theatre and the Underground behind closed doors. Cambridge and Edinburgh offer two more forms of shared timing.",
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
      "Follow a truffle dog through inland Istria, then cross to Sinj and read the rules, objects and town-wide work behind one famous annual gallop.",
    image: null,
  },
  {
    slug: "portugal",
    name: "Portugal",
    region: "porto",
    regionName: "Porto",
    intro:
      "Follow ingredients, sound and making through Porto and Gaia, then travel into Alentejo through the unaccompanied voices documented and heard in Serpa.",
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
    region: "rome",
    regionName: "Rome",
    intro:
      "Make pasta, ride the Appian Way and put ancient gods among modern machines in Rome. Then understand Venice through the movement of an oar and the shaping of glass.",
    image: null,
  },
] as const;
// Area labels can differ from a guide's specific site. Never let the last guide rename the area.
const additionalRegionNames: Readonly<Record<string, string>> = {
  "south-africa/west-coast": "West Coast",
  "nepal/kavrepalanchok": "Panauti",
  "peru/sacred-valley": "Sacred Valley",
  "niue/north-niue": "North Niue",
  "cabo-verde/sao-vicente": "São Vicente",
  "jordan/wadi-rum": "Wadi Rum",
  "belize/stann-creek": "Stann Creek",
  "rwanda/nyungwe": "Nyungwe",
  "united-states/south-carolina-lowcountry": "South Carolina Lowcountry",
  "kyrgyzstan/naryn": "Naryn Region",
  "timor-leste/dili": "Dili",
  "czechia/prague": "Prague",
  "slovakia/podpolanie": "Podpoľanie",
  "paraguay/asuncion": "Asunción",
  "djibouti/gulf-of-tadjoura": "Gulf of Tadjoura",
  "curacao/west-curacao": "Bandabou",
  "romania/bucovina": "Bucovina",
  "georgia/kakheti": "Kakheti",
  "sri-lanka/central-highlands": "Central Highlands",
  "ethiopia/addis-ababa": "Addis Ababa",
  "kenya/lamu-archipelago": "Lamu Archipelago",
  "uganda/entebbe": "Entebbe",
  "canada/haida-gwaii": "Haida Gwaii",
  "united-states/lafayette-louisiana": "Lafayette",
  "brazil/rio-de-janeiro": "Rio de Janeiro",
  "jamaica/kingston-jamaica": "Kingston",
  "tanzania/kilimanjaro-region": "Kilimanjaro Region",
  "azerbaijan/baku": "Baku",
  "trinidad-and-tobago/port-of-spain": "Port of Spain",
  "bolivia/el-alto": "El Alto",
  "montenegro/perast": "Perast",
  "croatia/sinj": "Sinj",
  "lesotho/semonkong": "Semonkong",
  "costa-rica/tortuguero": "Tortuguero",
  "egypt/aswan": "Aswan",
  "san-marino/historic-centre": "Historic Centre",
  "oman/ad-dakhiliyah": "Jabal Akhdar",
  "china/fujian": "Yongding",
  "bahrain/muharraq": "Muharraq",
  "brunei/kampong-ayer": "Kampong Ayer",
  "botswana/okavango-delta": "Okavango Delta",
  "uzbekistan/samarkand": "Samarkand",
  "ghana/ashanti-region": "Ashanti Region",
  "samoa/apia": "Apia",
  "french-polynesia/moorea": "Moorea",
  "albania/tirana": "Tirana",
  "luxembourg/echternach": "Echternach",
  "sao-tome-and-principe/sao-tome": "São Tomé",
  "madagascar/ambalavao": "Ambalavao",
  "vietnam/hanoi": "Hanoi",
  "france/paris": "Paris",
  "france/arcachon-bay": "Arcachon Bay",
  "poland/krakow": "Kraków",
  "italy/rome": "Rome",
  "portugal/serpa": "Serpa",
  "united-states/new-york-city": "New York City",
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
