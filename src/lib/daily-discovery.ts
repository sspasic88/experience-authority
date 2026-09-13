import type { PublicExperience } from "./catalog";

type Discovery = {
  date: string;
  slug: string;
  title: string;
  angle: string;
  notice: string;
  question: string;
};

/** Dated, authored angles on already published guides. No fake new articles or endless random cycle. */
export const dailyDiscoveries: readonly Discovery[] = [
  {
    date: "2026-09-13",
    slug: "hear-the-church-before-you-climb",
    title: "A landmark you can listen to.",
    angle:
      "You know the instinct: find the tower, climb, take in the city. Porto offers another beginning. Sit beneath the stone vaults at Clérigos and listen to what an organ phrase becomes after it leaves the instrument. A landmark can change without your moving an inch.",
    notice:
      "The space between the notes. Listen to the room, not only to the player.",
    question:
      "Which building on your next journey might be more interesting to hear than to photograph?",
  },
  {
    date: "2026-09-14",
    slug: "find-a-place-through-its-scent",
    title: "What if you remembered Kyoto by scent?",
    angle:
      "A photograph can tell you what was in front of you. A scent can bring back an association you did not know you were carrying. In Kunjyukan's gallery, begin by comparing two impressions before the labels offer their explanation. You do not have to buy a thing to leave with something.",
    notice:
      "Your own words before the display's words. Familiar, dry, green or something harder to name.",
    question:
      "What would you notice in a place if sight stopped doing all the work?",
  },
  {
    date: "2026-09-15",
    slug: "draw-a-small-shape-in-flame",
    title: "Venice, before the souvenir is finished.",
    angle:
      "A glass object in a window looks inevitable. A rod in a flame does not. A small Castello atelier lets you meet the decisions before the finished curve. Pair that concentration with a rowing lesson and Venice begins to look like a city of learned movements.",
    notice:
      "The work of keeping a softening material in motion. Shape is something someone has to maintain.",
    question:
      "Which object would you see differently after trying its first difficult step?",
  },
  {
    date: "2026-09-16",
    slug: "let-the-market-write-your-menu",
    title: "One ingredient. A better way into Porto.",
    angle:
      "A market becomes more interesting when you stop trying to taste everything. Choose one ingredient at Bolhão and follow the questions it opens. Fresh or preserved? Eaten alone or with something else? One purchase can give the rest of a meal a direction.",
    notice: "How a serving suggestion changes what you were about to buy.",
    question:
      "Could your next lunch begin with a question rather than a restaurant ranking?",
  },
  {
    date: "2026-09-17",
    slug: "let-the-ferry-redraw-istanbul",
    title: "The crossing is part of the city.",
    angle:
      "Not every revealing experience needs to be sold as one. A municipal ferry joins real journeys across Istanbul. Use the current timetable, find the right pier and let the crossing have its ordinary purpose. The skyline is still there, but it is no longer the whole story.",
    notice:
      "Arrivals, departures and how people share a moving public space. Observe without turning commuters into subjects for your camera.",
    question:
      "What does a place's everyday transport show that its viewing platform cannot?",
  },
  {
    date: "2026-09-18",
    slug: "begin-with-rice-not-the-bottle",
    title: "Start before the first sip.",
    angle:
      "A drink list gives you names. A brewing introduction gives you different questions. In Seoul, handling the beginning of makgeolli shifts attention to rice, water, starter and time. The class ends before the fermentation does, which is precisely the point.",
    notice:
      "The difference between beginning a process and having a finished product.",
    question:
      "What might you ask about the next drink before deciding whether you like it?",
  },
  {
    date: "2026-09-19",
    slug: "hear-the-arena-answer-back",
    title: "There is more than one performance in the room.",
    angle:
      "At Arena México, the ring naturally takes your eye. Give the stands some of your attention too. An entrance, a reversal and a pause travel through an audience before they become a shared reaction. You can be new to lucha libre and still notice that exchange.",
    notice:
      "How a reaction spreads. Do not worry about decoding every rule in one evening.",
    question: "When did the audience last become part of what you came to see?",
  },
  {
    date: "2026-09-20",
    slug: "ride-the-avenue-when-the-cars-step-aside",
    title: "A street can have another life.",
    angle:
      "A Sunday avenue in Mexico City is not a different place on the map. It is a different agreement about how to use the same space. Check the current public programme, then notice what becomes possible when the pace changes.",
    notice:
      "What you can hear and how far ahead you look when movement is no longer organised around traffic.",
    question:
      "Which street in your own city would you like to experience under different rules?",
  },
  {
    date: "2026-09-21",
    slug: "draw-with-wax-in-kampong-gelam",
    title: "A line that tells colour where to stop.",
    angle:
      "Batik asks you to notice a boundary being made, not just a pattern being filled. In Kampong Gelam, a workshop can make a familiar decorative surface feel like a sequence of decisions. The first imperfect line is useful information.",
    notice:
      "Where the colour meets the wax. Look for process, not a competition with the example.",
    question:
      "What changes when you make the boundary before you choose the colour?",
  },
  {
    date: "2026-09-22",
    slug: "taste-what-time-does-to-port",
    title: "Time has a taste, but ask how.",
    angle:
      "Port is a familiar reason to cross to Gaia. Use the cellar visit to get beyond a preference for one glass. Ask what the vessels and ageing choices change, then see whether the tasting gives you a difference you can actually describe.",
    notice:
      "A specific comparison, not a collection of impressive-sounding tasting words.",
    question:
      "Which question would make a tasting useful even if you remembered none of the labels?",
  },
  {
    date: "2026-09-23",
    slug: "build-a-pattern-in-colour",
    title: "A pattern is a set of decisions.",
    angle:
      "A finished textile can hide its order of making. In Kyoto, an introductory colouring session lets you slow that order down. After the tea bowl and the scent gallery, here is another small act that rewards close attention.",
    notice:
      "What has to happen first for the next colour or layer to make sense.",
    question:
      "Which repeated pattern have you admired without wondering how it is built?",
  },
  {
    date: "2026-09-24",
    slug: "mexico-city-grown-on-water",
    title: "Look beyond the boat.",
    angle:
      "Xochimilco is a name many visitors recognise through images of colourful boats. A bounded agricultural encounter asks a different question: how is this landscape worked, and what is growing within it? Choose the guide's specific public access route rather than assuming any boat trip offers the same thing.",
    notice:
      "The distinction between a landscape as a setting and a landscape as someone's ongoing work.",
    question:
      "What lies behind the most repeated photograph of your next destination?",
  },
  {
    date: "2026-09-25",
    slug: "a-morning-at-the-hawker-table",
    title: "The table matters as much as the dish.",
    angle:
      "Singapore's hawker food is a recognisable starting point. Stay attentive to what happens around the plate: ordering, waiting, finding a place and returning your tray. An ordinary meal can teach you something without becoming a performance arranged for visitors.",
    notice:
      "The shared rules that make a busy meal possible. Follow the guide's practical etiquette.",
    question:
      "What makes a public place feel welcoming without it having been designed just for you?",
  },
  {
    date: "2026-09-26",
    slug: "lift-a-pattern-from-the-water",
    title: "The moment a surface becomes a souvenir.",
    angle:
      "In ebru, the colour is still floating until the paper meets it. An Istanbul introduction gives that change a scale you can watch closely. Pair it with a ferry crossing and you have two very different reasons to pay attention to water.",
    notice:
      "The transfer, and what it preserves or changes about the floating arrangement.",
    question:
      "Would you rather bring back a perfect object or remember the moment you made one?",
  },
  {
    date: "2026-09-27",
    slug: "make-something-from-the-broken-pieces",
    title: "Look at the joins.",
    angle:
      "Barcelona's mosaic surfaces are easy to recognise and easy to photograph. A small trencadís workshop changes the question. Instead of admiring only the finished colour, you begin to see how one irregular fragment meets another. Take that attention back to the city without expecting a two-hour introduction to make you a master craftsperson.",
    notice:
      "The gap between two pieces, and the decision that makes it part of the pattern.",
    question:
      "Which familiar detail might become more interesting after you have tried making it?",
  },
  {
    date: "2026-09-28",
    slug: "watch-the-work-before-the-performance",
    title: "Let the unfinished part hold your attention.",
    angle:
      "A finished performance encourages us to wait for its most impressive moment. Vienna's publicly ticketed riding-school training asks for a different kind of looking. The repeated movement and the small adjustment are the reason to be there. Read the guide's welfare boundary before deciding whether this animal-based experience is for you.",
    notice:
      "What changes between attempts, without assuming you can assess a training method from the audience.",
    question:
      "When did you last choose to see the practice instead of the finished show?",
  },
  {
    date: "2026-09-29",
    slug: "meet-the-bay-on-its-working-hours",
    title: "The tide has the first word.",
    angle:
      "A plate of oysters is the familiar beginning. In Arcachon Bay, a public outing with an oyster farmer takes the story back to the beds and the water that sets the working hours. Leave the rest of the day loose enough to follow the confirmed departure, rather than asking the tide to fit around lunch.",
    notice:
      "The task that becomes possible as the water changes, and who decides when it can happen.",
    question:
      "What would you understand differently about a favourite food after seeing one part of the work behind it?",
  },
  {
    date: "2026-09-30",
    slug: "read-the-landscape-one-grain-at-a-time",
    title: "The monument is moving.",
    angle:
      "Dune du Pilat makes a strong first impression through scale. Look again through a smaller detail: the shape of sand at your feet. The manager's account of wind-driven movement turns a famous viewpoint into something less fixed, a landscape still being rearranged long after you put the camera away.",
    notice:
      "A surface pattern you can observe without disturbing it. Do not remove sand or enter closed areas.",
    question:
      "Which apparently permanent place might become more interesting if you asked what is changing?",
  },
  {
    date: "2026-10-01",
    slug: "twist-the-city-before-you-taste-it",
    title: "Kraków has a shape you can learn with your hands.",
    angle:
      "Obwarzanek krakowski is easy to recognise and easy to eat without a second thought. Slow the ring down. In a one-hour public workshop, the revealing moment is the twist that turns separate strands of dough into the city's everyday form. Taste a normally produced one later, when your hands know what your eyes are seeing.",
    notice:
      "The sequence before the finished crust. The museum gives conflicting advice about eating the workshop piece, so keep making and tasting separate.",
    question:
      "Which food have you known for years without ever noticing the movement that gives it shape?",
  },
  {
    date: "2026-10-02",
    slug: "take-the-window-back-to-the-workbench",
    title: "The line between colours is doing the work.",
    angle:
      "Kraków's stained glass rewards distance, but its making begins much closer. A tour-and-workshop inside a studio still in use moves from monumental windows to a small object you cut, wrap and solder under direction. The scale is modest. The shift in looking can be much larger.",
    notice:
      "The join, not only the colour. Follow every safety instruction around glass and tools.",
    question:
      "What finished surface would become more interesting if you could see what holds its separate parts together?",
  },
  {
    date: "2026-10-03",
    slug: "watch-a-city-arrive-in-miniature",
    title: "Once a year, Kraków carries in another Kraków.",
    angle:
      "On the first Thursday of December, szopka makers bring elaborate constructions shaped by the city's own architecture to the Main Market Square. The encounter is public and visually immediate, but the right role is simple: make room, look carefully and let the makers carry the work.",
    notice:
      "A tower, dome or colour translated from the full-sized city. This is spectatorship, not a visitor workshop.",
    question:
      "Which familiar landmark would you recognise if a local maker transformed it into something small enough to carry?",
  },
];

export function availableDiscoveries(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return dailyDiscoveries.flatMap((discovery) => {
    const item = bySlug.get(discovery.slug);
    return discovery.date <= today && item ? [{ ...discovery, item }] : [];
  });
}

export function currentDiscovery(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  return availableDiscoveries(items, today).at(-1);
}

export function editionDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
