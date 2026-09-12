export type EditorialPathwayKind =
  | "food-and-drink"
  | "water-and-coast"
  | "learned-skills"
  | "after-dark"
  | "ritual-and-season"
  | "city"
  | "slow-nature"
  | "first-time-ea";

export type EditorialPathway = {
  slug: string;
  kind: EditorialPathwayKind;
  title: string;
  promise: string;
  intro: string;
  guideSlugs: readonly string[];
  visitorUse: string;
  returnAndShare: string;
};

/**
 * Editorial routes through the current public-guide edition.
 *
 * These pathways use explicit guide slugs rather than fields. This keeps each
 * editorial connection intentional and prevents unrelated future guides from
 * entering a pathway automatically.
 */
export const editorialPathways = [
  {
    slug: "what-a-place-tastes-like",
    kind: "food-and-drink",
    title: "What a place tastes like",
    promise: "Eight ways to read landscape, work and memory through the table.",
    intro:
      "Begin with appetite, then look further. These guides connect a Singapore hawker breakfast, Vienna's heuriger, Asturian cider, Grenadian cacao, Kyoto tea, Seoul kimchi, Québec maple season and food grown on Mexico City's chinampas. Each is a different kind of public encounter. Together they show why eating and drinking can reveal climate, labour, technique and social rhythm. Use the official links to check what is currently offered, and let the guide sharpen the questions you bring to the table.",
    guideSlugs: [
      "a-morning-at-the-hawker-table",
      "the-vineyard-at-the-table",
      "the-pour-before-the-glass",
      "before-the-chocolate-bar",
      "a-bowl-of-attention",
      "mexico-city-grown-on-water",
      "kimchi-before-the-jar",
      "when-the-sap-starts-to-run",
    ],
    visitorUse:
      "Choose one guide near a route you already have, then compare access, timing and participation before adding it to your journey.",
    returnAndShare:
      "Save the table you want to understand first, or share this pathway with the person you would bring to it.",
  },
  {
    slug: "where-land-meets-water",
    kind: "water-and-coast",
    title: "Where land meets water",
    promise:
      "Follow five coastlines where water shapes movement, work and attention.",
    intro:
      "Water is not scenery in these guides. It sets the route, the working day and the limits of access. Learn Venetian rowing, cross exposed tidal ground with a qualified guide, read Lofoten through its fishery, watch Oostduinkerke's shrimp fishers work with horses, then enter Reykjavík through a public pool. The settings differ, but each asks you to check conditions, understand local rules and notice the systems that make an encounter possible before treating it as a view.",
    guideSlugs: [
      "venice-through-an-oar",
      "walk-where-the-sea-was",
      "the-fish-behind-the-islands",
      "the-tide-brings-the-horses",
      "a-city-in-the-water",
    ],
    visitorUse:
      "Use this pathway to compare weather dependence, physical participation and booking needs before building a coastal day.",
    returnAndShare:
      "Keep the guide that changes how you see the coast, then send the pathway to a travel companion before choosing a route.",
  },
  {
    slug: "learn-by-doing",
    kind: "learned-skills",
    title: "Learn by doing",
    promise:
      "Move from watching a skill to becoming responsible for your first attempt.",
    intro:
      "A short introduction does not make anyone a master, but it can make knowledge visible. Shape lavash beside a tonir, prepare plant dyes in Luang Prabang, make kimchi in Seoul, find balance through a Venetian oar, trace stockfish through Lofoten's museum and learn what happens before cider reaches the glass in Asturias. These guides favour bounded public programmes where the teacher, sequence and limits remain clear. Arrive ready to follow instruction, ask precise questions and leave expertise with the people who hold it.",
    guideSlugs: [
      "bread-from-the-tonir",
      "colour-before-cloth",
      "venice-through-an-oar",
      "the-fish-behind-the-islands",
      "the-pour-before-the-glass",
      "kimchi-before-the-jar",
    ],
    visitorUse:
      "Compare the teaching format, duration and preparation notes, then choose the skill you are willing to practise with patience.",
    returnAndShare:
      "Save one skill for this trip and one for later, or share the pair with someone who learns best by doing.",
  },
  {
    slug: "stay-out-for-the-real-evening",
    kind: "after-dark",
    title: "Stay out for the real evening",
    promise:
      "Four public encounters for travellers who want more than another bar list.",
    intro:
      "Evening can change the social temperature of a place. Stay for a traditional music session in Doolin, enter a Budapest dance house, watch a vast starling flock gather over the Danish marshes, or slow the day in the warmth of an Istanbul hammam. None should be treated as guaranteed nightly entertainment. Check the current programme, season, admission and house rules first. The reward is not simply staying out later, but paying closer attention to how people share time and space.",
    guideSlugs: [
      "stay-for-the-session",
      "step-into-the-dance",
      "when-the-sky-moves-as-one",
      "marble-steam-istanbul",
    ],
    visitorUse:
      "Check dates and last entry before travel, then pair one evening guide with a deliberately unhurried day nearby.",
    returnAndShare:
      "Add the evening you would make room for to your Passport, then share the route before the group fills every night with plans.",
  },
  {
    slug: "timed-by-place",
    kind: "ritual-and-season",
    title: "Timed by place",
    promise:
      "Let tide, migration, harvest and public custom decide when to arrive.",
    intro:
      "Some experiences cannot be separated from their timing. A tide opens and closes a walking route. Migrating starlings gather in the marshes. Shrimp fishers work when sea and public demonstrations align. Asturian cider carries an orchard and cellar calendar, while castellers meet through announced public events. A Tampere public sauna follows ordinary opening hours and shared customs rather than spectacle. This pathway helps you plan around what the place is doing, rather than forcing every experience into the dates you already chose.",
    guideSlugs: [
      "walk-where-the-sea-was",
      "when-the-sky-moves-as-one",
      "the-tide-brings-the-horses",
      "the-pour-before-the-glass",
      "the-weight-of-the-tower",
      "make-room-in-the-steam",
    ],
    visitorUse:
      "Start with the least flexible date or natural condition, confirm it at the official source, then shape the rest of the route around it.",
    returnAndShare:
      "Save this pathway while dates are uncertain, then return when the season or public calendar is clear enough to plan together.",
  },
  {
    slug: "cities-from-the-inside",
    kind: "city",
    title: "Cities from the inside",
    promise:
      "Seven familiar cities, entered through the practices that keep them alive.",
    intro:
      "A landmark can tell you where you are. A practice can tell you how a city works. Begin Barcelona with a human tower, Singapore at a hawker table, Seoul through kimchi, Venice through an oar, Istanbul in a working hammam, Reykjavík in a municipal pool and Mexico City among the chinampas of Xochimilco. These are not claims to know a whole city. They are public, practical starting points that move attention from the skyline to the routines, knowledge and shared infrastructure beneath it.",
    guideSlugs: [
      "the-weight-of-the-tower",
      "a-morning-at-the-hawker-table",
      "venice-through-an-oar",
      "marble-steam-istanbul",
      "a-city-in-the-water",
      "mexico-city-grown-on-water",
      "kimchi-before-the-jar",
    ],
    visitorUse:
      "Pick the city already on your route and use its guide as the anchor for one slower half-day beyond the standard highlights.",
    returnAndShare:
      "Bookmark the city you know, share the city you want to understand next, and return as this pathway grows.",
  },
  {
    slug: "move-at-the-landscapes-pace",
    kind: "slow-nature",
    title: "Move at the landscape's pace",
    promise: "Six encounters that reward less distance and more attention.",
    intro:
      "Slow travel is useful only when it changes what you notice. Walk the public approach at Kumano Kodo without reducing pilgrimage to a personal challenge. Cross Wadden mudflats at the tide's pace. Wait for starlings above the Danish marshes. Read Lofoten through the fishery behind its mountain views, then read the Namib through the smallest tracks in its dunes. Meet Xochimilco as a living agricultural landscape within Mexico City. Each guide keeps the encounter bounded and asks you to prepare for conditions, local rules and the limits of a short visit.",
    guideSlugs: [
      "leave-room-for-devotion",
      "walk-where-the-sea-was",
      "when-the-sky-moves-as-one",
      "the-fish-behind-the-islands",
      "mexico-city-grown-on-water",
      "read-the-desert-at-ground-level",
    ],
    visitorUse:
      "Choose one landscape, read its responsibility and access sections first, then give it more time than the headline duration suggests.",
    returnAndShare:
      "Save the place worth slowing down for, or send this pathway to the person who usually tries to fit in too much.",
  },
  {
    slug: "your-first-way-in",
    kind: "first-time-ea",
    title: "Your first way in",
    promise:
      "A six-stop introduction to how Experience Authority helps you travel.",
    intro:
      "New here? Start with a place you recognise, then notice the EA difference. A Singapore breakfast reveals shared food culture. A Venetian rowing lesson turns movement into skill. An Asturian cellar makes the pour part of a wider system. A Barcelona tower reframes a public square. A Reykjavík pool shows the city through ordinary infrastructure. A Kumano path asks what respectful public access requires. Together, the guides show how EA connects inspiration, practical planning, evidence and responsibility without pretending to replace local knowledge.",
    guideSlugs: [
      "a-city-in-the-water",
      "a-morning-at-the-hawker-table",
      "venice-through-an-oar",
      "the-pour-before-the-glass",
      "the-weight-of-the-tower",
      "leave-room-for-devotion",
    ],
    visitorUse:
      "Open the guide closest to your plans, check its evidence and official access route, then save it only if the practical fit is real.",
    returnAndShare:
      "Build a small Passport instead of a long wish list, share one guide that changed your mind, and return when the route begins to take shape.",
  },
] as const satisfies readonly EditorialPathway[];

export function getEditorialPathway(slug: string) {
  return editorialPathways.find((pathway) => pathway.slug === slug);
}
