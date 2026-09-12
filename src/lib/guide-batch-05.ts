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
  {
    id: "oostduinkerke-horseback-shrimp",
    slug: "the-tide-brings-the-horses",
    title: "The tide brings the horses",
    summary:
      "Watch Oostduinkerke’s shrimp fishers work the North Sea shallows on horseback, from the public beach and on the tide’s terms.",
    field: "witness",
    place: "Oostduinkerke",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "oostduinkerke",
    status: "public_guide",
    demo: false,
    ...guideImage("oostduinkerke-horseback-shrimp"),
    kernel:
      "Use NAVIGO’s current information and linked calendar to choose a public demonstration. Arrive before the listed time, then watch from the beach beyond the fishers’ route and working space. The sequence follows the tide: horses enter the shallows, nets move across the seabed and the catch is sorted after the group returns. Some dates include cooking and others do not, so let the current listing set the expectation.",
    rootedness:
      "UNESCO describes Oostduinkerke’s horseback shrimp fishing as a body of knowledge carried by fishing families and supported by the wider community. The horses, nets, tides and reading of the sea form one practice. Public visibility does not make that knowledge visitor property, and watching one outing does not turn the work into a performance staged for an individual camera.",
    shift:
      "From seeing an improbable image to noticing the timing, labour and shared knowledge that hold it together.",
    humanReturn:
      "You may remember the yellow rainwear against the North Sea, but the more useful memory may be how precisely the work follows water and weather. That is an editorial possibility, not a claim to understand the craft.",
    responsibility:
      "Stay outside the fishers’ path and follow every instruction from staff, stewards or the fishing group. Do not approach the horses, nets or catch, and do not use flash or a drone. Keep children and dogs well clear of the working route. Weather, tide and animal welfare can change or cancel an outing. Confirm the current calendar before travel and accept that no catch, tasting or close view is guaranteed.",
    evidence:
      "NAVIGO publishes the public viewing format, seasonal pattern and route to the current demonstration calendar. UNESCO provides practice-level context. Visit Flanders publishes the credited photograph used here. EA has not attended, assessed crowd management, evaluated animal welfare or verified conditions on a particular date. The photograph shows the practice in Oostduinkerke, not the line-up for a future demonstration.",
    duration:
      "Demonstration-specific and tide-dependent. Use the current calendar for timing",
    participation:
      "Public witnessing from the beach, outside the working route",
    access:
      "Public programme subject to the current calendar, tide, weather and on-site direction. EA does not arrange private sessions or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.navigomuseum.be/en/shrimp-fishers-on-horseback",
      sources: [
        {
          title: "NAVIGO Fisheries Museum: shrimp fishers on horseback",
          url: "https://www.navigomuseum.be/en/shrimp-fishers-on-horseback",
          note: "Current heritage-holder page explaining public demonstrations, seasonal limits, tide dependence and the route to the current calendar. Individual outings can change.",
        },
        {
          title: "UNESCO: shrimp fishing on horseback in Oostduinkerke",
          url: "https://ich.unesco.org/en/RL/shrimp-fishing-on-horseback-in-oostduinkerke-00673",
          note: "Practice-level context on the knowledge, families and community connected to the craft. It does not provide a current viewing schedule.",
        },
        {
          title: "Visit Flanders: immaterial cultural heritage",
          url: "https://www.visitflanders.com/en/stories/flanders-immaterial-cultural-heritage-always-impressive",
          note: "Official regional context and the original source for Dirk van Hove’s photograph. It is not an EA review or the current event calendar.",
        },
      ],
    },
  },
  {
    id: "denmark-black-sun-wadden",
    slug: "when-the-sky-moves-as-one",
    title: "When the sky moves as one",
    summary:
      "Follow a nature guide into Denmark’s Wadden Sea marshes and wait for a starling flock that may redraw the evening sky.",
    field: "nature",
    place: "Danish Wadden Sea",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "ribe-marshes",
    status: "public_guide",
    demo: false,
    ...guideImage("denmark-black-sun-wadden"),
    kernel:
      "Choose a dated Black Sun tour from the Wadden Sea Centre’s current programme. The guides track changing roosts before each outing, but the birds determine whether a murmuration appears and what shape it takes. Bring the clothing and transport specified for your chosen format, arrive at the stated meeting point and expect the group to wait at a distance in the marsh landscape.",
    rootedness:
      "National Park Vadehavet explains that starlings use the marsh meadows to feed and the reed beds to roost during migration. Their formations are not choreography for visitors. They are a response to predators, safety and the conditions of the flock. The phenomenon belongs to a living wetland system whose needs take priority over a closer photograph.",
    shift:
      "From expecting a guaranteed spectacle to letting weather, migration and the flock decide the evening.",
    humanReturn:
      "You may leave with the rare feeling of seeing many lives make one form without a director. You may also see only the marsh at dusk. Neither outcome is evidence of a failed or successful relationship with nature.",
    responsibility:
      "Follow the guide’s position, route and transport instructions. Keep a low profile, stay off dyke tops, make no unnecessary noise and never use flash. Respect private land and move a vehicle when asked. Do not approach a roost or try to make birds take flight. Take all waste away. Recheck weather, meeting details, accessibility and clothing requirements directly before departure.",
    evidence:
      "The Wadden Sea Centre currently lists dated guided Black Sun tours and explicitly states that nature offers no guarantee. National Park Vadehavet explains season, habitat, changing roosts and visitor conduct. EA has not joined a tour, assessed a guide, verified accessibility or predicted bird movement. Sandra Prudencio’s photograph depicts Black Sun in the Tønder marsh, not a promised view on a particular tour.",
    duration:
      "Tour-specific. Current listed formats are timed around the evening movement of the birds",
    participation:
      "Guide-led observation at a distance, with the flock’s presence never guaranteed",
    access:
      "Public programme through the Wadden Sea Centre’s current tour calendar. EA does not sell tickets or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.vadehavscentret.dk/en/tours-and-activities/black-sun/",
      sources: [
        {
          title: "Wadden Sea Centre: Black Sun tours",
          url: "https://www.vadehavscentret.dk/en/tours-and-activities/black-sun/",
          note: "Current public programme with dated guided tours, booking routes and an explicit no-guarantee boundary for a changing natural phenomenon.",
        },
        {
          title: "National Park Vadehavet: Black Sun",
          url: "https://eng.nationalparkvadehavet.dk/experience-the-wadden-sea/animal-and-bird-life/black-sun",
          note: "Official national-park context on the birds, marsh habitat, seasons, changing roosts and conduct that reduces disturbance. It is not a tour review.",
        },
      ],
    },
  },
  {
    id: "asturias-trabanco-cider",
    slug: "the-pour-before-the-glass",
    title: "The pour before the glass",
    summary:
      "Follow Asturian cider from old presses and timber barrels to the small learned gesture that brings it into the glass.",
    field: "taste",
    place: "Asturias",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "asturias",
    status: "public_guide",
    demo: false,
    ...guideImage("asturias-trabanco-cider"),
    kernel:
      "Book Trabanco’s public Orígenes visit through its current site. The route enters the family cellar and traditional press area, then finishes with a short introduction to pouring and a taste from the barrel. Treat the mini-course as a first physical lesson, not a test of performance. The operator currently lists regular weekend times, but the current booking page remains the authority for availability and changes.",
    rootedness:
      "UNESCO describes Asturian cider culture as a relationship between native apples, rural landscape, making, serving and social life. Pouring is one visible part of that larger system. The cellar offers a public way to see production and practise the gesture, but one visit does not turn a regional culture into a technique detached from the people, orchards and places that sustain it.",
    shift:
      "From ordering a drink to noticing the agriculture, fermentation and learned movement that arrive with it.",
    humanReturn:
      "You may leave with a steadier hand or simply a better question about why the pour matters. Either is more useful than treating the ritual as a trick for the camera.",
    responsibility:
      "Use the current booking route and check the language, age, mobility and dietary details that matter to you. The operator states that scheduled visits are in Spanish and asks visitors to consult about other languages. Drink only if appropriate for you and never drive after drinking. Follow the guide around working equipment, ask before photographing people and do not treat staff or other visitors as a backdrop for repeated pouring attempts.",
    evidence:
      "Trabanco’s current visitor page establishes the public Orígenes format, booking requirement, listed schedule, cellar route, short pouring course and tasting. Turismo Asturias lists Trabanco among visitable cider makers. UNESCO supplies practice-level context for Asturian cider culture. EA has not visited, assessed the tour, tasted the cider or verified a particular date. The photograph is published by Trabanco and carries an embedded JFK Imagen Social copyright credit.",
    duration:
      "The operator currently describes Orígenes as about 1 hour 15 minutes. Recheck when booking",
    participation:
      "Guided cellar visit, introductory pouring practice and tasting under the operator’s current terms",
    access:
      "Public visitor programme with advance booking through Sidra Trabanco. EA does not reserve places or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.sidratrabanco.com/sidra-turismo",
      sources: [
        {
          title: "Sidra Trabanco: cider tourism visits",
          url: "https://www.sidratrabanco.com/sidra-turismo",
          note: "Current operator page for the Orígenes visit, advance booking, listed schedule, language note, route, pouring introduction and tasting. Availability can change.",
        },
        {
          title: "Turismo Asturias: Llagar Sidra Trabanco",
          url: "https://www.turismoasturias.es/en/descubre/gastronomia/llagares/llagar-sidra-trabanco",
          note: "Official regional listing that identifies Trabanco as a visitable cider maker and outlines the visitor route. It is not an independent quality review.",
        },
        {
          title: "UNESCO: Asturian cider culture",
          url: "https://ich.unesco.org/en/RL/asturian-cider-culture-01959",
          note: "Practice-level context for cider making, pouring, tasting, social spaces and the rural landscape. It does not validate Trabanco or a particular tour.",
        },
      ],
    },
  },
];
