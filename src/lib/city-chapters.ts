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
      "Camellia Flower is in Higashiyama and is not the same venue as Garden Teahouse. Kunjyukan, the textile studio and the cycle meeting point are separate locations. Confirm travel between them, opening days, workshop collection and the cycling route. None is an automatic add-on to another booking.",
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
      "Confirm hawker stall hours and the batik session first. Coney Island and Mandai are different outings with their own transport, weather and access considerations. Neither is a casual extension of the other. Carry water and let heat or rain change the plan.",
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
        moment: "Or choose a guided nature setting",
        why: "Mandai offers another nature-focused direction. Compare its access and format with the independent park walk instead of automatically doing both.",
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
