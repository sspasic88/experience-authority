import type { PublicExperience } from "./catalog";

type ChapterStop = { slug: string; moment: string; why: string };
export type CityChapter = {
  slug: string;
  name: string;
  country: string;
  regions: string[];
  title: string;
  intro: string;
  pace: string;
  planning: string;
  stops: ChapterStop[];
};

/** Authored local combinations. These are ideas to adapt, not timed or bookable packages. */
export const cityChapters: readonly CityChapter[] = [
  {
    slug: "lisbon",
    name: "Lisbon",
    country: "portugal",
    regions: ["lisbon"],
    title: "Follow the water. Listen to the room.",
    intro:
      "Begin with an aqueduct most visitors only see from below. On a separately planned evening, enter a former chapel in Alfama and let fado change how you listen. One experience reveals what carries a city, the other asks you to stop moving through it.",
    pace: "An unhurried daytime crossing and a reserved evening, with travel and rest between them.",
    planning:
      "The aqueduct entrance is in Campolide, not Alfama. Check the Water Museum's current last entry, weather and elevated-walk suitability. Mesa de Frades is a separate dinner booking with a set menu, deposit and performance rhythm. Confirm dietary needs and the finishing time before choosing return transport. These are independent admissions in different neighbourhoods, not a continuous walking route, combined ticket, transfer or package.",
    stops: [
      {
        slug: "cross-lisbon-on-the-route-of-its-water",
        moment: "Begin with a different line across the city",
        why: "The public crossing turns monumental arches into a readable piece of water infrastructure. Keep the walk within the museum's admitted route.",
      },
      {
        slug: "let-the-fado-room-fall-quiet",
        moment: "Give the evening to listening",
        why: "A tiled former chapel changes from dining room to attentive audience between sets. Choose the current dinner programme, not a promised singer.",
      },
    ],
  },
  {
    slug: "budapest",
    name: "Budapest",
    country: "hungary",
    regions: ["budapest"],
    title: "Take the slower hour. Find the shared step.",
    intro:
      "Use a familiar Budapest bath as the unhurried beginning, then choose a public dance-house evening where watching and joining have different places. Shared space connects the two, but each has its own rules and timetable.",
    pace: "A daytime bath and a separately selected evening, on the same trip rather than a forced single-day route.",
    planning:
      "Széchenyi and Fonó are in different parts of Budapest and require separate admissions and travel planning. Read the bath's current maintenance closures and under-fourteen restriction. At Fonó, choose a published táncház that actually includes beginner teaching or an invitation to join. A general concert ticket is not the same thing. Confirm language, accessibility, finish time and transport. No shared ticket, transfer or package is implied.",
    stops: [
      {
        slug: "let-budapest-slow-to-the-pool",
        moment: "Leave time without an assignment",
        why: "An ordinary daytime bath can be more rewarding when you stop trying to complete every pool. Current closures decide the usable route.",
      },
      {
        slug: "step-into-the-dance",
        moment: "On a programmed evening, observe the first steps",
        why: "Live music and a public dance-house format offer another shared rhythm. Join only where the teacher or room makes the invitation clear.",
      },
    ],
  },
  {
    slug: "new-york-city",
    name: "New York City",
    country: "united-states",
    regions: ["new-york-city"],
    title: "Shape the ring. Follow the bottle. Open the other side.",
    intro:
      "Begin with a New York icon you can make rather than rank. Then follow a reusable seltzer siphon into one of the city's least expected working interiors. Finish on Ellis Island, where the hospital complex adds care, exclusion and preservation to the familiar arrival story.",
    pace: "One booked experience per day gives each borough and island crossing enough room.",
    planning:
      "BagelUp's public classes use live weekend dates and the exact venue must be confirmed during booking. The Brooklyn Seltzer Museum is in Cypress Hills and is usually open for public tours on selected Fridays. Ellis Island requires a separately purchased ferry, security time, early arrival and strict footwear, age and mobility checks. These are three independent bookings in different parts of the city. Do not attempt them as a continuous route or assume a combined ticket, transfer, meal beyond the class or package.",
    stops: [
      {
        slug: "make-the-bagel-before-new-york-serves-it",
        moment: "Begin with the New York everyone can taste",
        why: "Roll, boil and bake before you eat. The familiar ring becomes a sequence of texture, timing and heat rather than another contest for the best counter.",
      },
      {
        slug: "follow-the-fizz-through-a-working-factory",
        moment: "On a Friday that fits, follow the return",
        why: "See what a refillable glass siphon asks of machinery, maintenance, washing and delivery. The small museum and active works make one everyday drink into a whole urban system.",
      },
      {
        slug: "open-the-other-side-of-ellis-island",
        moment: "Give the island its more difficult second chapter",
        why: "Enter selected hospital buildings with an authorised guide. Care, inspection, exclusion and hope complicate the landmark without turning its unrestored rooms into spectacle.",
      },
    ],
  },
  {
    slug: "rome",
    name: "Rome",
    country: "italy",
    regions: ["rome"],
    title: "Make the shape. Follow the road. Enter the machine room.",
    intro:
      "Begin with the Rome almost everyone can picture, then change what makes it memorable. Give pasta enough time to become technique. Ride part of the road that carried the city beyond itself. Finish where ancient sculpture stands inside Rome's first public power station.",
    pace: "One hands-on session, one outdoor half-day and one flexible museum visit.",
    planning:
      "The pasta class is a three-hour paid booking at one of two named locations. Via Appia is outside the central monument circuit and needs a separate weather, surface, traffic, equipment and return check. Centrale Montemartini is on Via Ostiense and works best as its own unhurried visit. Do not force all three into one day. They are separate public offers with no combined ticket, transport, meal beyond the class, bicycle support or package included.",
    stops: [
      {
        slug: "make-pasta-until-the-sauce-makes-sense",
        moment: "Begin with the thing everyone recognises",
        why: "Roll, cut and fill before you eat. The familiar plate becomes a relationship between dough, shape, filling and sauce rather than another name on a list.",
      },
      {
        slug: "ride-the-road-rome-built-to-leave-it",
        moment: "On a suitable day, let the city stretch out",
        why: "Use one bounded section of Via Appia to understand Rome through movement and infrastructure. Distance must follow conditions and your ability, not ambition.",
      },
      {
        slug: "put-the-gods-back-among-the-machines",
        moment: "Give the last contrast room to work",
        why: "Meet ancient objects beside turbines and diesel engines. Rome stops being a single historical layer and becomes a city that repeatedly uncovers, powers and reframes itself.",
      },
    ],
  },
  {
    slug: "london",
    name: "London",
    country: "united-kingdom",
    regions: ["london"],
    title: "Taste the city. Meet the work. Open the door behind it.",
    intro:
      "Use a market everyone recognises as the way in, then let London reveal two working interiors. One tour follows ingredients and traders. Another makes the labour behind performance visible. A third opens the layers hidden beside an ordinary Underground journey.",
    pace: "Give the market its own morning. Put the two fixed tours on separate days.",
    planning:
      "The Borough Market public tour is currently listed for selected Friday mornings and lasts about three hours. The Royal Opera House and Hidden London visits are separate timed bookings with routes that can change. Hidden London has the strictest footwear, mobility and confined-space requirements. The three meeting points are not a continuous walking itinerary, and ordinary admission to each public venue does not include its guided access. Confirm every date, language, age rule and access need before paying. No transport, meal beyond stated tastings, combined ticket or package is included.",
    stops: [
      {
        slug: "ask-the-market-where-london-came-from",
        moment: "Begin with a familiar appetite",
        why: "Let the guide and traders turn a well-known food stop into questions about ingredients, production and the knowledge held behind the counter.",
      },
      {
        slug: "meet-the-work-before-the-curtain-rises",
        moment: "On another day, go behind the finished performance",
        why: "Follow the working theatre's available route and notice rehearsal, costume and production as interconnected practices. The route varies because the building is in use.",
      },
      {
        slug: "open-a-door-the-underground-left-behind",
        moment: "Choose the closed door that fits your route",
        why: "See how a system Londoners use every day still contains earlier stations and decisions. Select one current tour and read its physical demands carefully.",
      },
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "france",
    regions: ["paris"],
    title: "Fold the morning. Follow a thread. Meet the city below.",
    intro:
      "Start with a Paris reference almost everyone knows, then change the scale twice. Give pastry enough time to become technique. Watch a contemporary image take form on a historic loom. Finally, descend into the infrastructure that makes the city above possible.",
    pace: "One substantial booked anchor per day, with the sewer museum kept flexible.",
    planning:
      "The pastry workshop takes about five and a half hours and is not a casual breakfast stop. The Gobelins workshop visit is a separate reservation with a fixed start, French delivery and significant mobility constraints. The Sewer Museum is a self-guided public visit that can close because of flooding or operational conditions. These addresses are in different parts of Paris. Do not attempt all three in one day. No transport, combined ticket, meal, translation or package is included.",
    stops: [
      {
        slug: "make-the-morning-before-it-reaches-the-cafe",
        moment: "Give the familiar thing real time",
        why: "Move from recognising a croissant to working through the folds, temperature and patience behind it. Keep the rest of the day light because the published class lasts five and a half hours.",
      },
      {
        slug: "watch-a-picture-grow-one-thread-at-a-time",
        moment: "On another day, look from the reverse",
        why: "Watch makers translate contemporary images on historic high-warp looms. This is observation inside a working environment, not a hands-on class or a promise of English delivery.",
      },
      {
        slug: "see-what-keeps-paris-moving-underground",
        moment: "Use the flexible hour below street level",
        why: "Follow the city from landmark to system. The public museum route reveals the water, equipment and people behind a Paris most visitors never think to look for.",
      },
    ],
  },
  {
    slug: "krakow",
    name: "Kraków",
    country: "poland",
    regions: ["krakow"],
    title: "Taste a shape. Make with light. Watch the city become small.",
    intro:
      "Three familiar Kraków materials open in different directions. Twist the bread seen on street carts. Build a small object from glass and copper. In December, watch makers carry an intricate version of the city into its own main square.",
    pace: "Pair the bread and glass workshops on separate halves of a day. Let the szopka calendar decide whether the third encounter belongs to this trip.",
    planning:
      "The obwarzanek session lasts about one hour, while the stained-glass format takes two or three hours and uses tools that require close instruction. They are separate bookings at different addresses. Confirm language, age and access before fixing the day. The szopka arrival happens only on 3 December 2026, with a later museum exhibition from 6 December. It is public spectatorship, not a making workshop. No route, transport, combined ticket or package is included.",
    stops: [
      {
        slug: "twist-the-city-before-you-taste-it",
        moment: "Begin with the everyday shape",
        why: "Learn the twisting movement behind Kraków's most visible bread. Plan the tasting separately because the museum's own visitor information conflicts on whether the workshop piece should be eaten.",
      },
      {
        slug: "take-the-window-back-to-the-workbench",
        moment: "Give the afternoon to light and joins",
        why: "Move from dough to a more exacting material. A small visitor project reveals why every line in stained glass has structural work to do.",
      },
      {
        slug: "watch-a-city-arrive-in-miniature",
        moment: "When the December calendar allows",
        why: "Watch makers bring Kraków's architecture back to the Main Market Square in another scale. Keep the distinction between public witness and unavailable hands-on access clear.",
      },
    ],
  },
  {
    slug: "arcachon-bay",
    name: "Arcachon Bay",
    country: "france",
    regions: ["arcachon-bay"],
    title: "Meet the working bay. Read the moving dune.",
    intro:
      "An oyster trip takes you into a landscape's working hours. Dune du Pilat gives you space to notice the much longer movement of sand. Put the two in conversation without forcing them into a single tightly scheduled day.",
    pace: "Let the oyster departure anchor one day. Keep the dune flexible or give it another.",
    planning:
      "The oyster programme leaves from several different ports around the bay. Confirm yours before planning transport to the dune in La Teste-de-Buch. Facing the same water does not mean a quick crossing or a walk between stops. Outings take three to six hours and can be cancelled. The dune needs its own weather, heat and access check. No transfer, combined ticket or reserve entry is included.",
    stops: [
      {
        slug: "meet-the-bay-on-its-working-hours",
        moment: "Follow the working tide",
        why: "Begin with someone whose day depends on the water. Observe the farming and ask a useful question, without assuming unrestricted access or a guaranteed hands-on task.",
      },
      {
        slug: "read-the-landscape-one-grain-at-a-time",
        moment: "Leave room for another scale",
        why: "Trade the farm's working rhythm for a landscape shaped over much longer periods. Choose a suitable authorised walk or the interpretation spaces below, rather than treating the summit as compulsory.",
      },
    ],
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    country: "spain",
    regions: ["barcelona"],
    title: "See how separate parts hold together.",
    intro:
      "A human tower and a mosaic ask very different things of their parts. Witness castells from the public audience, then try arranging a small ceramic surface yourself. Barcelona becomes both something people build together and something you can learn to look at more closely.",
    pace: "A workshop on a booked day. Castells only when the public calendar allows.",
    planning:
      "The castells guide follows the publicly announced La Mercè programme, not a daily attraction or an invitation to join a tower. Confirm the event's date, square and crowd arrangements first. Mosaiccos is a separate studio booking and may require later collection. The espadrille workshop is another independent reservation, with its Barcelona address and sizes confirmed directly. None includes Park Güell admission. Choose one workshop rather than filling every interval.",
    stops: [
      {
        slug: "the-weight-of-the-tower",
        moment: "When the square has a programme",
        why: "Watch the coordination behind an instantly recognisable Catalan tradition. Your role is an attentive spectator, outside the working formation.",
      },
      {
        slug: "make-something-from-the-broken-pieces",
        moment: "Change from watching to making",
        why: "Try a smaller exercise in how parts meet. Leave time for grouting and collection, then look differently at the mosaic details around the city.",
      },
      {
        slug: "stitch-the-pair-you-take-home",
        moment: "Or make something you can wear",
        why: "A pair of espadrilles offers a different scale of joining and finishing. Choose it as an alternative hands-on anchor, not an obligatory extra after the mosaic class.",
      },
    ],
  },
  {
    slug: "vienna",
    name: "Vienna",
    country: "austria",
    regions: ["vienna"],
    title: "From the riding hall to the vineyard table.",
    intro:
      "Begin with the Vienna of a grand hall, but watch the work rather than expect a gala. Later, a Heuriger moves the visit towards the city's wine-growing edge. One place asks for quiet observation, the other leaves room for a conversation over food.",
    pace: "One dated morning session and a separately planned meal.",
    planning:
      "Book the specific Morning Exercise session at the Hofburg, not a performance ticket. Mayer am Pfarrplatz is in Heiligenstadt, away from the central riding hall, so allow transport time and confirm table availability. This is not a walking itinerary or a combined ticket. Read the training guide's animal-welfare and accessibility boundaries before choosing it.",
    stops: [
      {
        slug: "watch-the-work-before-the-performance",
        moment: "Begin with patient observation",
        why: "Notice repetition in a room usually associated with spectacle. The day's training is variable and does not promise famous jumps or visitor contact with horses.",
      },
      {
        slug: "the-vineyard-at-the-table",
        moment: "Let the city open towards its wine country",
        why: "Make room for a meal rather than a rushed tasting checklist. The named Heuriger is a public hospitality venue, not permission to enter working vineyards.",
      },
    ],
  },
  {
    slug: "porto-and-gaia",
    name: "Porto and Gaia",
    country: "portugal",
    regions: ["porto", "vila-nova-de-gaia"],
    title: "A city through appetite, sound and making.",
    intro:
      "Port belongs here, but it need not explain the whole visit. Put a working market, a church heard from a seat and the making of a tile around the familiar glass. Cross the Douro deliberately, not just for another photograph.",
    pace: "Choose two for a day, or keep all four for a longer stay.",
    planning:
      "Bolhão is closed on Sundays and public holidays. Clérigos advertises a noon concert, so confirm that fixed point first. Tile firing normally means next-day collection. Gaia is across the river and needs its own travel allowance. Do not schedule every stop back to back.",
    stops: [
      {
        slug: "let-the-market-write-your-menu",
        moment: "Begin with the everyday",
        why: "Let a food purchase and a serving suggestion bring the city down to the scale of a meal. This is independent shopping, not an included tasting tour.",
      },
      {
        slug: "hear-the-church-before-you-climb",
        moment: "Make room around noon",
        why: "Change from the market's movement to sustained listening. The same city has a different texture when you give half an hour to sound.",
      },
      {
        slug: "paint-the-pattern-you-noticed",
        moment: "Give your hands an afternoon",
        why: "Turn the patterns on the façades into a process you have tried. Plan collection before committing your final day to the workshop.",
      },
      {
        slug: "taste-what-time-does-to-port",
        moment: "Across the river",
        why: "Carry your new attention to process into the cellars. Ask what ageing changes rather than treating the tasting as a list of glasses to finish.",
      },
    ],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "japan",
    regions: ["kyoto"],
    title: "Give each sense a way into Kyoto.",
    intro:
      "Tea is a recognisable beginning. A scent gallery, a textile pattern and a ride through smaller streets make the city less dependent on a list of sights. Choose the contrast that interests you, not the maximum number of appointments.",
    pace: "One booked anchor and one lighter stop per day.",
    planning:
      "Camellia Flower is in Higashiyama and is not the same venue as Garden Teahouse. Kunjyukan, the textile and kintsugi studios and the cycle meeting point are separate locations. Confirm travel, languages, opening days and collection. Shikata's urushi trial has age and handling requirements, and the work needs further curing at home. Choose one substantial workshop per day. None is an automatic add-on to another booking.",
    stops: [
      {
        slug: "a-bowl-of-attention",
        moment: "Begin with a gesture",
        why: "Watch a bowl being prepared, then whisk your own. Take that attention to sequence into the rest of the visit.",
      },
      {
        slug: "find-a-place-through-its-scent",
        moment: "A quieter interval",
        why: "Trade a visual checklist for a comparison you make with your nose. The free gallery is a different kind of encounter from a booked ceremony.",
      },
      {
        slug: "build-a-pattern-in-colour",
        moment: "Another session, another material",
        why: "Move from observing to making. A small textile exercise lets you discover how a repeated pattern is assembled.",
      },
      {
        slug: "ride-from-alley-to-river",
        moment: "Let movement connect the city",
        why: "Give the streets their own guided session. This is a cycling experience, not a claim that the other three stops lie on its route.",
      },
      {
        slug: "repair-a-bowl-without-hiding-the-join",
        moment: "On another day, work with what already exists",
        why: "A repair introduction offers a contrast to making a new pattern. The aftercare and curing period carry the experience beyond the studio and need to fit your journey home.",
      },
    ],
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "turkiye",
    regions: ["istanbul"],
    title: "Water as passage, pattern and pause.",
    intro:
      "A ferry is the familiar crossing. Ebru makes water a working surface. A hammam changes the pace again. Three different roles for something the city is already making you notice.",
    pace: "Choose one booked experience and let the crossing breathe.",
    planning:
      "Use the current municipal ferry timetable and exact pier names. The hammam and marbling studio have separate reservations and conditions. Allow time to cool down after bathing and protect drying paper. This is a thematic sequence, not a verified walking route.",
    stops: [
      {
        slug: "let-the-ferry-redraw-istanbul",
        moment: "Start in public life",
        why: "Take the ordinary ferry on its own terms. Watch how a city is connected, rather than using the crossing only as a backdrop.",
      },
      {
        slug: "lift-a-pattern-from-the-water",
        moment: "Change the scale",
        why: "A vast stretch of water becomes a shallow tray. Try the transfer from floating colour to a sheet you can hold.",
      },
      {
        slug: "marble-steam-istanbul",
        moment: "Leave room to slow down",
        why: "End the rush, not necessarily the day. Read the bathing etiquette and choose a programme that suits your comfort.",
      },
    ],
  },
  {
    slug: "mexico-city",
    name: "Mexico City and Xochimilco",
    country: "mexico",
    regions: ["mexico-city", "xochimilco"],
    title: "A city that grows, moves and answers back.",
    intro:
      "See a living agricultural landscape, an avenue temporarily shared differently and a crowd that helps make a spectacle. The connection is participation, but your role changes at each stop.",
    pace: "Several days, with Xochimilco given its own outing.",
    planning:
      "The avenue programme is tied to its published Sunday calendar. Lucha libre depends on the announced arena and event. Xochimilco is a separate journey within the wider city, not a quick interval between central stops. Check the farm visit's meeting point and return arrangements before combining bookings.",
    stops: [
      {
        slug: "mexico-city-grown-on-water",
        moment: "Give the landscape a day",
        why: "Begin with the food system beneath a familiar destination name. This is an agricultural encounter, not an interchangeable party-boat excursion.",
      },
      {
        slug: "ride-the-avenue-when-the-cars-step-aside",
        moment: "On the right Sunday",
        why: "Notice what changes when a major street makes room for people moving at another pace. Verify the current route and conditions.",
      },
      {
        slug: "hear-the-arena-answer-back",
        moment: "An evening with a programme",
        why: "After seeing how a city shares space, listen to how it shares a reaction. Choose a specific Arena México event, not a generic ticket.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "singapore",
    regions: ["singapore"],
    title: "A shared table, a wax line and a wilder edge.",
    intro:
      "Begin with the Singapore people recognise, then follow food into making and the city into its greener margins. The small island is not a reason to compress every experience into one day.",
    pace: "Food and making for one day. Choose a separate nature outing.",
    planning:
      "Confirm hawker stall hours and the batik session first. Coney Island and Sungei Buloh Wetland Reserve are different outings with their own transport, weather and access considerations. Neither is a casual extension of the other. Check NParks' current entrance and closure notices, carry water and let heat or rain change the plan.",
    stops: [
      {
        slug: "a-morning-at-the-hawker-table",
        moment: "Start where people eat",
        why: "Make ordering, sharing space and clearing your tray part of the experience, not merely the logistics around a dish.",
      },
      {
        slug: "draw-with-wax-in-kampong-gelam",
        moment: "Make something slowly",
        why: "Give an afternoon to the relationship between a wax line and colour. It is a different kind of concentration from the food court.",
      },
      {
        slug: "walk-the-island-between-forest-and-shore",
        moment: "Choose an open-air day",
        why: "Let a walk on Coney Island change the scale of the visit. Check weather, paths and park rules before leaving.",
      },
      {
        slug: "find-the-citys-wilder-edge",
        moment: "Or follow the tidal habitat",
        why: "Sungei Buloh offers an independent wetland walk, with mangroves, hides and changing water levels. Choose it for patient observation rather than adding it automatically to Coney Island. No guided tour or wildlife sighting is included.",
      },
    ],
  },
  {
    slug: "venice",
    name: "Venice",
    country: "italy",
    regions: ["venice"],
    title: "Understand Venice through your hands.",
    intro:
      "An oar and a glass rod ask different things of balance, movement and attention. Put a rowing lesson alongside a contemporary atelier encounter and the city's familiar surfaces begin to carry the work behind them.",
    pace: "Two separate sessions, with time between them.",
    planning:
      "The rowing lesson and Castello atelier are separate locations and bookings. Check the meeting points, rowing conditions and glass cooling or collection before choosing dates. Do not assume the glass workshop takes place on Murano or that you can carry a hot piece away immediately.",
    stops: [
      {
        slug: "venice-through-an-oar",
        moment: "Learn the movement",
        why: "Try the learned balance behind a familiar Venetian image. Let the instructor and conditions determine the session.",
      },
      {
        slug: "draw-a-small-shape-in-flame",
        moment: "Return to the workbench",
        why: "Trade the water's resistance for heat and a smaller material. Contemporary making belongs in the city's story alongside the well-known traditions.",
      },
    ],
  },
];

export function resolveCityChapters(items: PublicExperience[]) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return cityChapters.flatMap((chapter) => {
    const stops = chapter.stops.flatMap((stop) => {
      const item = bySlug.get(stop.slug);
      return item &&
        item.countrySlug === chapter.country &&
        chapter.regions.includes(item.regionSlug)
        ? [{ ...stop, item }]
        : [];
    });
    // Partial sequences can leave misleading instructions. Hide until all stops are available.
    return stops.length === chapter.stops.length ? [{ ...chapter, stops }] : [];
  });
}

export function chapterHref(
  chapter: Pick<CityChapter, "country" | "regions" | "slug">,
) {
  return `/places/${chapter.country}${chapter.regions.length === 1 ? `/${chapter.regions[0]}` : ""}#${chapter.slug}`;
}
