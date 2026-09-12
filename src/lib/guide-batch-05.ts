import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Familiar public occasions that passed the same desk-guide gate as every other guide. */
export const guideBatch05: PublicExperience[] = [
  {
    id: "barcelona-castells-merce",
    slug: "the-weight-of-the-tower",
    title: "The weight of the tower",
    summary:
      "Watch a listed castells performance in Barcelona, where a human tower is made in public by people who know the work.",
    field: "witness",
    place: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    status: "public_guide",
    demo: false,
    ...guideImage("barcelona-castells-merce"),
    kernel:
      "Choose a public performance from the Coordinadora de Colles Castelleres de Catalunya calendar and use the listing for its place and time. Barcelona’s September calendar includes the local Mercè diada at Plaça Sant Jaume, but any particular event can change or be cancelled. Arrive early enough to stand beyond the working space. Let the group’s own rhythm determine how close you go, where you stand and when you photograph.",
    rootedness:
      "UNESCO describes castells as a tradition passed between generations through the colles that build them. The tower is not a backdrop for an individual visitor’s bravery or a metaphor that belongs to anyone who sees it once. Its force comes from coordination, training, care and the people who take responsibility for each level.",
    shift:
      "From chasing a dramatic image to noticing how many people make one visible moment possible.",
    humanReturn:
      "You may leave with a clearer sense that public spectacle can still be work shared by a community. That is an editorial possibility, not a promised effect or a claim to understanding the practice.",
    responsibility:
      "Follow barriers, steward directions and any local event guidance. Do not enter the pinya, block routes or use a drone. Photograph thoughtfully and keep children, performers and other spectators out of a forced frame. If the gathering is busy, choose a quieter viewing position rather than pressing toward the centre. Confirm weather, time, accessibility and any crowd arrangements directly before going.",
    evidence:
      "The Coordinadora’s public calendar currently lists Barcelona castells performances, including the 2026 Mercè diada, with location and time information. UNESCO provides practice-level context. EA has not attended a performance, assessed crowd conditions, verified a specific team or determined whether a visitor can participate. The photograph is published by Castellers de Barcelona and shows their 2024 competition appearance. It is visual context, not an EA visit or a promise of a current line-up.",
    duration:
      "Event-specific. Check the current calendar entry for the announced time and local arrangements",
    participation:
      "Public witnessing only. Joining a colla or its working space is not implied",
    access:
      "Public programme subject to the organiser’s current listing and on-site direction. Use the castells calendar before travel. EA does not sell tickets, arrange access or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://castellscat.cat/en/schedule?a=2026&m=09&p=189",
      sources: [
        {
          title: "Coordinadora de Colles Castelleres de Catalunya: public schedule",
          url: "https://castellscat.cat/en/schedule?a=2026&m=09&p=189",
          note: "Current September 2026 calendar listing public Barcelona performances, including times, locations and participating colles. It remains the visitor’s source for changes or cancellation.",
        },
        {
          title: "UNESCO: Human towers",
          url: "https://ich.unesco.org/en/RL/human-towers-00364",
          note: "Practice-level context on castells as living intangible heritage transmitted through local groups. It does not validate a particular event or visitor access.",
        },
      ],
    },
  },
  {
    id: "wadden-guided-mudflat-walk",
    slug: "walk-where-the-sea-was",
    title: "Walk where the sea was",
    summary:
      "Enter the Dutch Wadden Sea at low tide with a qualified guide and learn to read a landscape that the water will reclaim.",
    field: "move",
    place: "Dutch Wadden Sea",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "wadden-sea",
    status: "public_guide",
    demo: false,
    ...guideImage("wadden-guided-mudflat-walk"),
    kernel:
      "Choose a listed guided excursion from the Waddenvereniging agenda or one of the organisations named by Visit Wadden. Match the route to your own preparation and follow the guide’s clothing, footwear, timing and meeting instructions exactly. This is a tide-led walk on a living seabed. It is not an independent beach stroll and it is not a route to improvise.",
    rootedness:
      "The Wadden Sea is shaped by water, wind, sediment and the lives that depend on the intertidal zone. Visit Wadden frames mudflat walking as a way to encounter that system while respecting birds and other wildlife. The useful authority here belongs to the landscape, the tide and the qualified guide who knows how to move through both.",
    shift:
      "From treating the coast as an edge to understanding it as a landscape that repeatedly appears and disappears.",
    humanReturn:
      "You may remember the scale, the exposed horizon and the discipline of moving when the tide allows it. That is a possible return, not a promise of transformation or safety.",
    responsibility:
      "Go only with a qualified guide or a properly permitted organisation. Follow every decision about route, pace, footwear, weather and cancellation. Keep distance from birds and wildlife, take nothing from the flats and leave no waste. Do not rely on EA for tide, safety, fitness or accessibility guidance. Confirm those matters with the organiser before booking and again before departure.",
    evidence:
      "Visit Wadden explains the guided format, the need to protect wildlife and the role of experienced mudflat guides. Waddenvereniging publishes a dated activity calendar with routes and booking links. Netherlands Enterprise Agency guidance confirms that mudflat walks operate within a permit framework that also covers guides and individual walkers. EA has not walked the route, assessed any guide, checked a visitor’s fitness or verified conditions on a particular day. The photograph is published by Visit Wadden and shows mudflat walkers on the exposed seabed. It is not an EA visit or evidence of a specific excursion.",
    duration:
      "Route-specific and tide-dependent. Use the current excursion listing for timing and preparation",
    participation:
      "Qualified-guide-led walking under current tide, weather and route conditions",
    access:
      "Public programme through the organiser’s own current agenda and booking route. EA does not book, assess or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://waddenvereniging.nl/ontdekken/agenda/",
      sources: [
        {
          title: "Waddenvereniging: current activities calendar",
          url: "https://waddenvereniging.nl/ontdekken/agenda/",
          note: "Dated public excursions with locations, times and links to details and booking. Each listing remains authoritative for current availability and requirements.",
        },
        {
          title: "Visit Wadden: mudflat walking",
          url: "https://www.visitwadden.nl/en/visit/wadlopen",
          note: "Regional destination guidance on qualified guides, wildlife respect and organisations offering mudflat walks. It does not assess an individual excursion for EA.",
        },
        {
          title: "Netherlands Enterprise Agency: mudflat walking permit",
          url: "https://business.gov.nl/regulations/mud-flat-walking-permit/",
          note: "Official government guidance confirming the Dutch permit framework for organised, guided and solo mudflat walking. It does not replace the organiser’s route and safety instructions.",
        },
      ],
    },
  },
  {
    id: "lofoten-skrei-museum",
    slug: "the-fish-behind-the-islands",
    title: "The fish behind the islands",
    summary:
      "Read Lofoten through skrei at the new SKREI centre in Kabelvåg, where fishing history, marine life and coastal art share one public visit.",
    field: "learn",
    place: "Lofoten",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "lofoten",
    status: "public_guide",
    demo: false,
    ...guideImage("lofoten-skrei-museum"),
    kernel:
      "Begin with The Otolith, SKREI’s main exhibition, then decide whether to continue into the Lofoten Museum, aquarium or Espolin Gallery. The combined site is designed for independent public visiting and offers separate or combined admission. Use the museum’s current page for hours, tickets and transport before making the journey to Kabelvåg.",
    rootedness:
      "Visit Lofoten describes skrei as central to the archipelago’s economy and culture, with the winter fishery shaping coastal life over centuries. The museum is a public interpretation of that relationship. It is not a substitute for the people who work at sea, and a visitor does not gain authority over their knowledge by completing an exhibition.",
    shift:
      "From seeing Lofoten as mountain scenery to noticing the fishery that helped make life there possible.",
    humanReturn:
      "You may carry the landscape differently after understanding why skrei matters to the settlements around it. That is an editorial possibility, not a promised learning outcome.",
    responsibility:
      "Check current opening, ticket, accessibility and transport information on the museum’s own page. Follow photography and visitor rules in each arena. Do not transfer museum interpretation into assumptions about today’s fishing crews, working conditions or environmental impact. If you later choose a fishing trip, use a licensed public operator and assess that activity separately.",
    evidence:
      "Museum Nord’s current page establishes the new SKREI centre, its public admission, four visitor arenas and practical information. Visit Lofoten provides wider destination context for skrei and identifies museums as a way to learn from land. EA has not visited, reviewed the exhibition, assessed accessibility or independently validated the museum’s claims. The photograph is an official view of The Otolith exhibition by Kjell Ove Storvik.",
    duration:
      "Self-paced within current opening hours. The combined visit spans several separate arenas",
    participation:
      "Independent public museum visit with optional listed activities",
    access:
      "Public admission through Museum Nord’s current ticket route. EA does not sell tickets or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.museumnord.no/en/our-venues/skrei/",
      sources: [
        {
          title: "Museum Nord: SKREI museum, aquarium and gallery",
          url: "https://www.museumnord.no/en/our-venues/skrei/",
          note: "Current public visitor page for The Otolith, the other SKREI arenas, opening hours, address, ticket route and transport information.",
        },
        {
          title: "Visit Lofoten: Fishing in Lofoten",
          url: "https://visitlofoten.com/en/topic/fishing-in-lofoten/",
          note: "Destination context for the winter skrei fishery and for museums as a land-based way to understand its role. It does not review the SKREI exhibition.",
        },
      ],
    },
  },
];
