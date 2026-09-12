import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Public food, coffee and music experiences that cleared the desk-guide gate together. */
export const guideBatch07: PublicExperience[] = [
  {
    id: "cape-town-bo-kaap-cooking",
    slug: "cook-beyond-the-postcard",
    title: "Cook beyond the postcard",
    summary:
      "Walk into a Bo-Kaap kitchen for a public Cape Malay cooking class, then let spice, dough and conversation replace the neighbourhood's familiar facade.",
    field: "make",
    place: "Bo-Kaap, Cape Town",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    status: "public_guide",
    demo: false,
    ...guideImage("cape-town-bo-kaap-cooking"),
    kernel:
      "Start with The Bo-Kaap Cooking Tour's current public route. Its published format combines a cultural and culinary walk with a hands-on class, including Cape Malay dishes and the mixing of masala. Use the operator's current page to confirm which parts are included on your date. The useful centre of the experience is the work at the table, not a quick photograph of the streets outside.",
    rootedness:
      "Cape Town Tourism describes Bo-Kaap as a predominantly Muslim Cape Malay neighbourhood whose history includes people brought to the Cape through slavery and political exile from parts of Asia and East Africa. Food here carries family knowledge as well as those wider histories. One public class can introduce ingredients, methods and one host's account. It cannot stand for every household or turn the neighbourhood into a single origin story.",
    shift:
      "From recognising Bo-Kaap by colour to noticing the hands, histories and decisions behind a meal.",
    humanReturn:
      "You may leave with a spice mixture, a practical memory of dough and a better reason to look beyond the facade. That is an editorial possibility, not a promised cultural understanding.",
    responsibility:
      "Use the operator's current booking route and disclose allergies, dietary needs and mobility requirements exactly as requested. Ask before photographing the host, other participants, homes, places of worship or residents in the street. Follow food-safety instructions and do not present one lesson as mastery of Cape Malay cooking. Treat Bo-Kaap as a lived neighbourhood, not a colour set built for visitors.",
    evidence:
      "The operator's current site establishes a public cultural walk, hands-on cooking class, address and booking route. Cape Town Tourism provides neighbourhood history and independently recommends a locally rooted cooking tour. These are operator and destination sources, not an EA visit or an independent assessment of teaching quality. The photograph shows Cape Malay snacks being prepared in South Africa. It does not depict this class, Bo-Kaap, its host or an EA visit.",
    duration:
      "Allow a half-day, then confirm the current start time, length and included format directly",
    participation:
      "Hands-on visitor class with a cultural walk when included in the current programme",
    access:
      "Public paid programme through the operator's current booking route. Capacity, menu and format remain with the operator. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.bokaapcookingtour.co.za/",
      sources: [
        {
          title: "The Bo-Kaap Cooking Tour: public class and booking route",
          url: "https://www.bokaapcookingtour.co.za/",
          note: "Current first-party description of the cultural and culinary walk, hands-on class, masala mixing, Bo-Kaap address and public booking link. It does not provide an independent quality review.",
        },
        {
          title: "Cape Town Tourism: Bo-Kaap neighbourhood",
          url: "https://www.capetown.travel/neighbourhood/bo-kaap/",
          note: "Official destination context for the neighbourhood's Cape Malay community, histories of forced movement and migration, and visitor-facing local cooking tours. It does not assess this class for EA.",
        },
      ],
    },
  },
  {
    id: "salta-empanada-workshop",
    slug: "learn-the-fold-in-salta",
    title: "Learn the fold in Salta",
    summary:
      "Build the filling, close the edge and understand why an empanada in Salta is more than a quick prelude to dinner.",
    field: "taste",
    place: "Salta",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "salta",
    status: "public_guide",
    demo: false,
    ...guideImage("salta-empanada-workshop"),
    kernel:
      "Begin with the current Salta City Tourism listing for its visitor workshop on making your own empanada. The page describes a kitchen session with cooks who introduce the recado, the seasoned filling at the centre of the dish. Treat the listing as a route into the current offer, then confirm the host, language, duration, price and meeting point before committing time or money.",
    rootedness:
      "The city tourism office groups the workshop inside its Auténtica Empanada Salteña programme and publishes a wider route devoted to the dish. That civic framing matters because the empanada is presented as part of Salta's food identity, not simply a portable pastry. A visitor workshop offers one practical version. It does not settle which family filling, fold or seasoning is definitive.",
    shift:
      "From ordering by the dozen to understanding how filling, moisture and the final fold shape the result.",
    humanReturn:
      "You may leave able to notice the choices hidden inside a familiar form. That is an editorial possibility, not a guarantee that one class gives you the definitive Salta recipe.",
    responsibility:
      "Use the live city tourism page as the starting point and verify the operating provider before payment. Confirm language, age limits, allergens, alcohol, accessibility and cancellation terms. Follow the kitchen's handling instructions and ask before photographing cooks or other participants. Credit the teacher if you repeat a technique or recipe later, and do not market a workshop version as an inherited family authority of your own.",
    evidence:
      "Salta City Tourism currently lists the workshop in its trip planner and on a dedicated public page. The dedicated page describes cooks teaching the recado with local ingredients but does not publish enough operational detail for EA to state a schedule. The city's current empanada category confirms a wider visitor programme around the dish. EA has not attended, assessed the cooks or verified a bookable date. The photograph is the official image on the workshop page, not an EA visit, and its reuse rights have not been independently cleared.",
    duration:
      "Programme-specific. Confirm the current length, language and meeting point before planning around it",
    participation:
      "Hands-on visitor workshop centred on filling and forming a Salta empanada",
    access:
      "Public visitor listing through Salta City Tourism, subject to the current provider and booking details. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl:
        "https://www.saltaciudad.travel/posts/taller-gastronomico-como-hacer-tu-propia-empanada",
      sources: [
        {
          title: "Salta City Tourism: make your own empanada workshop",
          url: "https://www.saltaciudad.travel/posts/taller-gastronomico-como-hacer-tu-propia-empanada",
          note: "Live official visitor page for the workshop, its kitchen format, cooks, recado and local ingredients. The page does not publish complete current schedule or booking terms.",
        },
        {
          title: "Salta City Tourism: current trip planner",
          url: "https://www.saltaciudad.travel/paginas/planificador-de-viaje",
          note: "Current municipal trip planner listing the workshop and the separate Tour de la Empanada Salteña among public visitor experiences. The individual listing remains the access route.",
        },
        {
          title: "Salta City Tourism: Auténtica Empanada Salteña",
          url: "https://www.saltaciudad.travel/categorias/autentica-empanada-saltena",
          note: "Current municipal category that groups the workshop with Salta's wider empanada visitor programme. It provides context, not an independent review or live schedule.",
        },
      ],
    },
  },
  {
    id: "sarajevo-bosnian-coffee",
    slug: "let-the-coffee-take-its-time",
    title: "Let the coffee take its time",
    summary:
      "Pause for Bosnian coffee during a guided walk through Sarajevo, where the small pot, cup and conversation are treated as part of the city rather than a tasting prop.",
    field: "gather",
    place: "Baščaršija, Sarajevo",
    country: "Bosnia and Herzegovina",
    countrySlug: "bosnia-and-herzegovina",
    regionSlug: "sarajevo",
    status: "public_guide",
    demo: false,
    ...guideImage("sarajevo-bosnian-coffee"),
    kernel:
      "Use Cheyf's current public route for its private Sarajevo city walk with a Bosnian coffee stop. The published three to four hour format moves through the city, pauses in a traditional cafe and includes an explanation of the coffee ritual. Keep the coffee connected to the walk and the conversation around it. It is not a challenge to consume quickly or a claim that one service style speaks for every household.",
    rootedness:
      "The Museum of Sarajevo describes coffee as an integral part of local culture with its own preparation and drinking ritual. Its ethnological collection includes cezves, small cups, cup holders and serving trays made or used in that social world. A guided cafe stop can make those objects and gestures easier to read. It does not turn hospitality into a script or give a visitor authority over someone else's family practice.",
    shift:
      "From treating coffee as fuel to noticing the time, objects and company that make a cup matter.",
    humanReturn:
      "You may remember the pause more clearly than the caffeine. That is an editorial possibility, not a promised insight into Sarajevo or Bosnian hospitality.",
    responsibility:
      "Book only through the operator's current public route and disclose dietary needs before the tour. Confirm caffeine, sugar and food inclusions if they matter to you. Ask before photographing the guide, cafe staff, other guests or craftspeople. Do not turn a private guided stop into permission to enter workshops or photograph people elsewhere in Baščaršija.",
    evidence:
      "Cheyf's current first-party page establishes the private walking tour, coffee stop, three to four hour duration, meeting point, included tastings and public booking route. The Museum of Sarajevo provides independent institutional context for the coffee ritual and its material culture. EA has not taken the tour, assessed the guide or verified a particular cafe. The photograph is published by Cheyf as a tour group enjoying coffee. It is not an EA visit, and reuse rights have not been independently cleared.",
    duration:
      "Three to four hours for the full private walk, according to the current operator page",
    participation:
      "Private guided city walk with a seated coffee stop and food tastings",
    access:
      "Public paid private tour through the operator's current booking route. The cafe and tasting stops may vary. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://cheyf.ba/products/sarajevo-city-tour-bosnian-coffee",
      sources: [
        {
          title: "Cheyf: Sarajevo city tour with Bosnian coffee",
          url: "https://cheyf.ba/products/sarajevo-city-tour-bosnian-coffee",
          note: "Current first-party public offer with a Bosnian coffee stop, private format, three to four hour duration, meeting point, inclusions and booking route. It does not independently validate its own quality claims.",
        },
        {
          title: "Museum of Sarajevo: Ethnological Collection",
          url: "https://www.muzejsarajeva.ba/en/etnografska-zbirka/",
          note: "Current institutional context for coffee as a local social ritual and for the cezves, cups, holders and trays held in the museum collection. It does not review the tour or its cafe stop.",
        },
      ],
    },
  },
  {
    id: "loiza-copi-bomba",
    slug: "let-the-drum-lead-the-first-step",
    title: "Let the drum lead the first step",
    summary:
      "Take a public bomba dance or percussion class at COPI in Loíza, where the first task is to listen closely enough to enter the rhythm with care.",
    field: "move",
    place: "Piñones, Loíza",
    country: "Puerto Rico",
    countrySlug: "puerto-rico",
    regionSlug: "loiza",
    status: "public_guide",
    demo: false,
    ...guideImage("loiza-copi-bomba"),
    kernel:
      "Choose one of the single-session dance or percussion classes that COPI currently lists through Escuela de Baile de Bomba Majestad Negra. The published teaching windows run from January to March and from August to October, with single-class options as well as a longer series. Confirm the next date before travel. Start with the rhythm and the instructor's sequence rather than arriving with a performance already imagined.",
    rootedness:
      "COPI presents its bomba teaching through African heritage, cultural history, instruments, songs, rhythms and dance. Discover Puerto Rico places the organisation within Loíza's living cultural landscape and separately identifies its public lessons. That context makes the class more than a dance pose. It is still one bounded programme, not permission to claim the practice or speak for Loíza after a single session.",
    shift:
      "From watching movement as spectacle to hearing the rhythm that asks for a different kind of attention.",
    humanReturn:
      "You may leave remembering the first moment your movement began to follow the drum. That is an editorial possibility, not a promise of skill, belonging or cultural understanding.",
    responsibility:
      "Confirm the current class date, level, language, age guidance, mobility needs and payment directly with COPI. Follow the instructor's sequence and accept correction without performing for the room. Ask before photographing, filming or recording teachers and participants, especially children. Do not reproduce teaching material commercially or present one class as mastery of bomba.",
    evidence:
      "COPI's current service page lists dance and percussion classes, seasonal teaching windows, single-class prices, its Loíza address and direct contact route. Discover Puerto Rico independently lists COPI and notes public bomba lessons on selected Saturdays. The two sources do not publish a shared live calendar, so the next class must be confirmed. EA has not attended or assessed the programme. The photograph shows bomba in Loíza at El Batey de los Hermanos Ayala, not a COPI class or an EA visit. Its reuse rights have not been independently cleared.",
    duration:
      "Class-specific. Confirm the next date, start time and session length directly with COPI",
    participation:
      "Instructor-led bomba dance or percussion class, with a single-session option",
    access:
      "Public paid programme in published seasonal windows, subject to COPI's current schedule and capacity. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://copipr.com/about/",
      sources: [
        {
          title: "COPI: services and bomba classes",
          url: "https://copipr.com/about/",
          note: "Current first-party service page listing public dance and percussion teaching, seasonal windows, single-class prices, address and direct access route. It does not publish a dated live class calendar.",
        },
        {
          title: "Discover Puerto Rico: COPI profile",
          url: "https://www.discoverpuertorico.com/profile/corporacion-pinones-se-integra-copi/12889",
          note: "Official destination profile locating COPI in Loíza and independently noting traditional bomba lessons on selected Saturdays. Exact dates still require confirmation with COPI.",
        },
        {
          title: "Discover Puerto Rico: Loíza destination guide",
          url: "https://www.discoverpuertorico.com/regions/east/loiza",
          note: "Official destination context for Loíza, Piñones and public bomba culture. It is also the source page for the photograph, which depicts El Batey rather than COPI.",
        },
      ],
    },
  },
];
