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
    slug: "the-pleasure-of-being-a-beginner",
    kind: "learned-skills",
    title: "The pleasure of being a beginner",
    promise: "Eight ways to give your hands a new problem.",
    intro:
      "A first attempt makes a familiar place less predictable. In Porto, a brush turns the tile you noticed on a facade into a decision of your own. Fez puts a hammer, a small piece of clay and a geometric pattern in the same frame. Suchitoto begins with a fold that tells indigo where not to go. Cambridge makes shared timing physical through a bell. Biarritz adds a wall and a ball, while Bo-Kaap, Salta and Loíza offer different first steps through food and rhythm. These are public introductions, not shortcuts to mastery. Choose the attempt you would enjoy even if the result were imperfect, then read the current programme before booking.",
    guideSlugs: [
      "paint-the-pattern-you-noticed",
      "fold-a-pattern-into-the-blue",
      "set-one-bell-in-motion",
      "play-the-wall-in-biarritz",
      "cook-beyond-the-postcard",
      "learn-the-fold-in-salta",
      "let-the-drum-lead-the-first-step",
      "cut-the-first-piece-of-a-pattern",
    ],
    visitorUse:
      "Compare what you actually do, how long the session asks for and what the instructor supplies. Keep room to collect a fired tile later or confirm a seasonal class date before fixing your route.",
    returnAndShare:
      "Send this collection to the person who would laugh through a first attempt with you, then save the skill you would like to try together.",
  },
  {
    slug: "make-room-for-a-slower-day",
    kind: "ritual-and-season",
    title: "Make room for a slower day",
    promise:
      "Warm rooms, a lakeside evening, two ways to share coffee and a night with a different rhythm.",
    intro:
      "Not every memorable experience needs acceleration. A Koyasan temple stay asks you to fit an overnight visit around one lodging's actual arrangements. Istanbul, Tampere, Busan, Kuopio and Reykjavík each open a different public bathing context. A Mooska farm walk stays outside the bathing promise and makes the preparation behind a Võrumaa smoke sauna visible. Sarajevo brings a seated coffee pause into a longer city walk, while Doha makes qahwa and majlis etiquette the subject of a hosted session. These are not interchangeable wellness products and none carries a promise of transformation. What they share is room to notice a threshold, a gesture or a pattern of ordinary life that a hurried itinerary would pass over.",
    guideSlugs: [
      "spend-the-night-in-a-temple-town",
      "marble-steam-istanbul",
      "make-room-in-the-steam",
      "a-city-in-the-water",
      "let-the-coffee-take-its-time",
      "read-the-language-of-the-coffee-cup",
      "spend-an-hour-between-the-hot-rooms",
      "step-from-smoke-sauna-into-the-lake",
      "read-a-smoke-sauna-before-the-heat",
    ],
    visitorUse:
      "Choose the format that genuinely fits your day or night. Read bathing rules, dietary and lodging details, current opening times and the scope of any tour before making arrangements.",
    returnAndShare:
      "Keep one quieter possibility beside your busiest day, or share the collection with someone who would welcome a little more space.",
  },
  {
    slug: "what-a-place-tastes-like",
    kind: "food-and-drink",
    title: "What a place tastes like",
    promise:
      "Eleven ways to read landscape, work and memory through the table.",
    intro:
      "Begin with appetite, then look further. These guides connect a Singapore hawker breakfast, halloumi made on a route into the Troodos foothills, Vienna's heuriger, Asturian cider, Grenadian cacao, Kyoto tea, Seoul kimchi, Québec maple season and food grown on Mexico City's chinampas. Oaxaca follows agave through heat and copper, while Doha uses qahwa to read the social language of a majlis. Each is a different kind of public encounter. Together they show why eating and drinking can reveal climate, labour, technique and social rhythm. Use the official links to check what is currently offered, and let the guide sharpen the questions you bring to the table.",
    guideSlugs: [
      "a-morning-at-the-hawker-table",
      "make-halloumi-before-it-reaches-the-plate",
      "the-vineyard-at-the-table",
      "the-pour-before-the-glass",
      "before-the-chocolate-bar",
      "a-bowl-of-attention",
      "mexico-city-grown-on-water",
      "kimchi-before-the-jar",
      "when-the-sap-starts-to-run",
      "follow-the-agave-into-the-still",
      "read-the-language-of-the-coffee-cup",
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
      "Follow six coastlines where water shapes movement, work and attention.",
    intro:
      "Water is not scenery in these guides. It sets the route, the working day and the limits of access. Learn Venetian rowing, cross exposed tidal ground with a qualified guide, read Lofoten through its fishery, watch Oostduinkerke's shrimp fishers work with horses and enter Reykjavík through a public pool. In Istanbul, an ordinary municipal ferry makes the Bosphorus legible as transport. Each asks you to notice the system that makes the encounter possible before treating water as a view.",
    guideSlugs: [
      "venice-through-an-oar",
      "walk-where-the-sea-was",
      "the-fish-behind-the-islands",
      "the-tide-brings-the-horses",
      "a-city-in-the-water",
      "let-the-ferry-redraw-istanbul",
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
      "A short introduction does not make anyone a master, but it can make knowledge visible. Shape lavash beside a tonir, prepare plant dyes in Luang Prabang, fold an indigo resist in Suchitoto, make kimchi in Seoul, cut a first zellige piece in Fez, find balance through a Venetian oar and learn what happens before cider reaches the glass in Asturias. These guides favour bounded public programmes where the teacher, sequence and limits remain clear. Arrive ready to follow instruction, ask precise questions and leave expertise with the people who hold it.",
    guideSlugs: [
      "bread-from-the-tonir",
      "colour-before-cloth",
      "fold-a-pattern-into-the-blue",
      "venice-through-an-oar",
      "the-fish-behind-the-islands",
      "the-pour-before-the-glass",
      "kimchi-before-the-jar",
      "cut-the-first-piece-of-a-pattern",
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
      "Six public encounters for people who want more than another bar list.",
    intro:
      "Evening can change the social temperature of a place. Stay for a traditional music session in Doolin, enter a Budapest dance house, let a caller bring an Edinburgh ceilidh into motion or give a Salta peña time to unfold across music, dance and the table. A vast starling flock gathers over the Danish marshes, while an Istanbul hammam offers a different way to slow the day. None should be treated as guaranteed nightly entertainment. Check the current programme, season, admission and house rules first. The reward is not simply staying out later, but paying closer attention to how people share time and space.",
    guideSlugs: [
      "stay-for-the-session",
      "step-into-the-dance",
      "when-the-sky-moves-as-one",
      "marble-steam-istanbul",
      "let-the-caller-start-the-dance",
      "stay-while-the-zamba-circles-back",
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
      "Some experiences cannot be separated from their timing. A tide opens and closes a walking route. Migrating starlings gather in the marshes. Shrimp fishers work when sea and public demonstrations align. Castellers meet through announced public events. Kuopio's smoke-sauna evening belongs to Tuesday, while Mexico City's car-free avenue belongs to most Sunday mornings. This pathway helps you plan around what the place is doing, rather than forcing every experience into the dates you already chose.",
    guideSlugs: [
      "walk-where-the-sea-was",
      "when-the-sky-moves-as-one",
      "the-tide-brings-the-horses",
      "the-pour-before-the-glass",
      "the-weight-of-the-tower",
      "make-room-in-the-steam",
      "follow-the-festa-through-the-streets",
      "step-from-smoke-sauna-into-the-lake",
      "ride-the-avenue-when-the-cars-step-aside",
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
      "Familiar cities, entered through practices and systems that remain alive.",
    intro:
      "A landmark can tell you where you are. A practice can tell you how a city works. Begin Barcelona with a human tower, Singapore at a hawker table, Seoul through kimchi and Venice through an oar. Cross Istanbul by municipal ferry, then give Mexico City's Sunday avenue back to feet and bicycles. Busan adds the etiquette of a jjimjilbang, Fez the precision of zellige and Montevideo a candombe workshop with a clearly defined public. These are not claims to know a whole city. They are practical starting points that move attention from the skyline to the routines and shared infrastructure beneath it.",
    guideSlugs: [
      "the-weight-of-the-tower",
      "a-morning-at-the-hawker-table",
      "venice-through-an-oar",
      "marble-steam-istanbul",
      "a-city-in-the-water",
      "mexico-city-grown-on-water",
      "kimchi-before-the-jar",
      "let-the-caller-start-the-dance",
      "read-the-language-of-the-coffee-cup",
      "let-the-ferry-redraw-istanbul",
      "ride-the-avenue-when-the-cars-step-aside",
      "spend-an-hour-between-the-hot-rooms",
      "cut-the-first-piece-of-a-pattern",
      "find-the-pulse-before-the-parade",
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
      "A compact introduction to how Experience Authority helps you travel.",
    intro:
      "New here? Start with a place you recognise, then notice the EA difference. A Singapore breakfast reveals shared food culture. A Venetian rowing lesson turns movement into skill. Barcelona reframes a public square through a human tower. Istanbul becomes legible from an ordinary ferry, while Mexico City's Sunday avenue becomes a space you can move through under your own power. A Kumano path asks what respectful public access requires. Together, the guides connect inspiration, practical planning, evidence and responsibility without pretending to replace local knowledge.",
    guideSlugs: [
      "a-city-in-the-water",
      "a-morning-at-the-hawker-table",
      "venice-through-an-oar",
      "the-pour-before-the-glass",
      "the-weight-of-the-tower",
      "leave-room-for-devotion",
      "let-the-ferry-redraw-istanbul",
      "ride-the-avenue-when-the-cars-step-aside",
    ],
    visitorUse:
      "Open the guide closest to your plans, check its evidence and official access route, then save it only if the practical fit is real.",
    returnAndShare:
      "Build a small Passport instead of a long wish list, share one guide that changed your mind, and return when the route begins to take shape.",
  },
  {
    slug: "before-the-first-sip",
    kind: "food-and-drink",
    title: "Before the first sip",
    promise:
      "Six ways to follow rice, grapes, apples, agave and cacao before flavour reaches the glass or table.",
    intro:
      "Taste becomes more memorable when you can trace what produced it. Begin makgeolli with rice and fermentation in Seoul. Enter Vila Nova de Gaia through the time and vessels behind Port, Asturias through cider poured at a working sidrería and Oaxaca through the transformation of agave. Vienna connects the vineyard to the heuriger table, while Grenada moves back from chocolate to cacao. These are public introductions to different systems, not a ranking of producers or permission to generalise about a whole region. Follow the ingredient, work and time first. Let the tasting confirm the story rather than replace it.",
    guideSlugs: [
      "begin-with-rice-not-the-bottle",
      "taste-what-time-does-to-port",
      "the-pour-before-the-glass",
      "follow-the-agave-into-the-still",
      "the-vineyard-at-the-table",
      "before-the-chocolate-bar",
    ],
    visitorUse:
      "Compare the part of the process each guide makes visible, then confirm current access, age rules, transport and tasting arrangements at the official source.",
    returnAndShare:
      "Save the process you want to understand, or share two contrasting guides with the person who usually chooses the bottle first.",
  },
  {
    slug: "another-way-into-a-familiar-city",
    kind: "city",
    title: "Another way into a familiar city",
    promise:
      "Return to places you recognise through public practices you may not have noticed the first time.",
    intro:
      "Familiarity can make a city easier to reach and harder to see. Istanbul offers three different corrections to the postcard: ebru turns colour and water into a first attempt, the municipal ferry makes daily geography visible and a historic hammam changes the pace of the day. Mexico City moves from the chinampa landscape to a car-free Sunday avenue and the collective energy of Arena México. Singapore connects a hawker breakfast, batik, a coastal forest and a wetland at the city's wilder edge. Seoul places kimchi beside the beginning of makgeolli. Use one known landmark as orientation, then choose the practice that gives the rest of the day a sharper point of view.",
    guideSlugs: [
      "lift-a-pattern-from-the-water",
      "let-the-ferry-redraw-istanbul",
      "marble-steam-istanbul",
      "hear-the-arena-answer-back",
      "ride-the-avenue-when-the-cars-step-aside",
      "mexico-city-grown-on-water",
      "a-morning-at-the-hawker-table",
      "find-the-citys-wilder-edge",
      "kimchi-before-the-jar",
      "begin-with-rice-not-the-bottle",
    ],
    visitorUse:
      "Choose the city already on your route, then select one guide from a different part of the day or a different kind of participation than your usual plan.",
    returnAndShare:
      "Keep the second way into a city you thought you knew, then send the collection to someone ready to look again.",
  },
] as const satisfies readonly EditorialPathway[];

export function getEditorialPathway(slug: string) {
  return editorialPathways.find((pathway) => pathway.slug === slug);
}
