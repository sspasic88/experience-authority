import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Public programmes from the Atlas register that cleared evidence, access and media review together. */
export const guideBatch06: PublicExperience[] = [
  {
    id: "seoul-kimchikan-making",
    slug: "kimchi-before-the-jar",
    title: "Kimchi, before the jar",
    summary:
      "Make kimchi in a scheduled visitor class at Museum Kimchikan, then place the recipe inside a much wider culture of making and sharing.",
    field: "make",
    place: "Insadong, Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    status: "public_guide",
    demo: false,
    ...guideImage("seoul-kimchikan-making"),
    kernel:
      "Use Museum Kimchikan's current programme page to confirm whether an individual kimchi class is available during your visit. The published visitor format combines museum interpretation with a practical making session. Treat the class as an introduction to ingredients, seasoning and fermentation. It is not a shortcut to claiming the wider knowledge held in Korean households and communities.",
    rootedness:
      "UNESCO describes kimjang as the making and sharing of kimchi through a practice carried across families, regions and seasons. Museum Kimchikan offers one bounded public route into that subject in Seoul. The class can make the work visible without standing in for the whole tradition or turning a communal practice into a recipe alone.",
    shift:
      "From recognising a finished side dish to noticing the preparation, season and shared knowledge held before the jar is closed.",
    humanReturn:
      "You may leave with a more precise appetite for process and a better question about who taught the food you enjoy. That is an editorial possibility, not a promised cultural understanding.",
    responsibility:
      "Book only through the museum's current public route and disclose allergies or dietary needs exactly as requested. Follow the instructor's food-safety and handling directions. Ask before photographing teachers or other participants. Do not present the class as mastery of kimjang or assume that one institutional version represents every household, region or recipe.",
    evidence:
      "Museum Kimchikan is the official programme source. VisitKorea documents the museum setting, English visitor support and its kimchi-making format, but warns that programme details can change. UNESCO provides practice-level context for kimjang and does not validate this class. EA has not attended, assessed teaching quality or verified an individual date. The photograph is a Museum Kimchikan visitor class published by VisitKorea, not an EA visit.",
    duration:
      "Programme-specific. Confirm the current class length and museum admission directly",
    participation: "Instructor-led visitor class with museum interpretation",
    access:
      "Public programme subject to the museum's current schedule, minimum numbers and reservation terms. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.kimchikan.com/en",
      sources: [
        {
          title: "Museum Kimchikan: official English site",
          url: "https://www.kimchikan.com/en",
          note: "Official route to the museum's current visitor information and experience programme. Availability and reservation conditions must be confirmed here before travel.",
        },
        {
          title: "VisitKorea: Museum Kimchikan visitor programme",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=189628",
          note: "National tourism context for the museum, its interpretation floors and documented kimchi-making programme. The page says its practical details may have changed.",
        },
        {
          title: "UNESCO: Kimjang, making and sharing kimchi",
          url: "https://ich.unesco.org/en/decisions/8.COM/8.23",
          note: "Practice-level context for kimjang as shared cultural knowledge. It does not establish current museum access or assess a visitor class.",
        },
      ],
    },
  },
  {
    id: "namib-living-desert-tour",
    slug: "read-the-desert-at-ground-level",
    title: "Read the desert at ground level",
    summary:
      "Follow tracks across the Namib dunes with a specialist guide and look for the small lives that turn an apparently empty landscape into a system.",
    field: "nature",
    place: "Swakopmund dune belt",
    country: "Namibia",
    countrySlug: "namibia",
    regionSlug: "swakopmund",
    status: "public_guide",
    demo: false,
    ...guideImage("namib-living-desert-tour"),
    kernel:
      "Join Living Desert Adventures through its normal public booking route. The morning tour moves through the dune belt between Swakopmund and Walvis Bay, stopping to read tracks and discuss endemic fauna, flora, geology and conservation. Wildlife decides what appears. A guide may locate animals, but no species, photograph or close encounter can be guaranteed.",
    rootedness:
      "The operator describes a fog-dependent dune ecosystem where small animals survive through highly specific adaptations. The point is not a checklist called the Little Five. It is the skill of reading signs in sand and understanding why careful movement matters in a sensitive landscape. The guide and the desert set the pace.",
    shift:
      "From seeing emptiness at a distance to noticing how much life can be read from one small track.",
    humanReturn:
      "You may leave looking more carefully at landscapes that first appear blank. That is an editorial possibility, not a promise of a sighting or a scientific education.",
    responsibility:
      "Follow the guide's route, vehicle and handling decisions without exception. Never chase, touch or feed an animal yourself. Do not step across untouched dunes for a photograph or disclose sensitive wildlife locations. Confirm heat, clothing, mobility, pickup, payment and cancellation details directly. Animals are wild and any sighting can be brief or absent.",
    evidence:
      "The operator's current page establishes the route, morning duration, pickup area, group format, languages, practical preparation and rates valid through October 2026. Namibia's official visitor guide describes Swakopmund as an access point for Namib desert activities. These are provider and destination sources, not an independent ecology or animal-welfare review. EA has not joined the tour or assessed its guides. The photograph shows a Namaqua chameleon in the Namib, not an animal found on this tour.",
    duration:
      "A morning. The current page lists 08:00 to between 12:00 and 13:00",
    participation:
      "Small-group guided dune tour with frequent stops and limited walking",
    access:
      "Public paid programme with advance contact through the operator. Current pickup, rate and cancellation terms remain with the operator. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.livingdesertnamibia.com/what-we-offer",
      sources: [
        {
          title: "Living Desert Adventures: public tour description",
          url: "https://www.livingdesertnamibia.com/what-we-offer",
          note: "Current first-party description of route, duration, pickup, group size, languages, preparation, rates and booking contact. Wildlife sightings are not independently verified.",
        },
        {
          title: "Namibia Tourism Board: Explore Namibia visitor guide",
          url: "https://visitnamibia.com.na/wp-content/uploads/2023/02/explore-namibia.pdf",
          note: "Official national destination context for Swakopmund and public activities in the Namib landscape. It does not review this operator or guarantee access.",
        },
      ],
    },
  },
  {
    id: "quebec-outaouais-sugar-shack",
    slug: "when-the-sap-starts-to-run",
    title: "When the sap starts to run",
    summary:
      "Plan for Québec's maple season through a public sugar-shack meal, where the social table begins with a brief harvest.",
    field: "taste",
    place: "Outaouais, Québec",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "outaouais",
    status: "public_guide",
    demo: false,
    ...guideImage("quebec-outaouais-sugar-shack"),
    kernel:
      "Use Tourisme Outaouais' rolling seasonal guide to choose one publicly offered sugar-shack meal whose format, date and reservation route suit you. Some listings centre on a traditional shared menu, some include music or outdoor activities and some interpret syrup making. Decide from the current entry rather than assuming every cabane à sucre offers the same day.",
    rootedness:
      "Maple season is short because it follows the movement of sap rather than a permanent visitor calendar. The regional guide connects sugar shacks to a seasonal harvest and public meal in Québec. This account stays with advertised hospitality. It does not claim access to a private family gathering or treat one menu as the single authentic version.",
    shift:
      "From maple as a flavour to a season that briefly reorganises work, weather and the table.",
    humanReturn:
      "You may carry a more exact memory of when a familiar sweetness comes into being. That is an editorial possibility, not a judgement of authenticity or quality.",
    responsibility:
      "Treat the regional page as a starting point, then confirm the chosen venue's next season, reservation, payment, accessibility and dietary information directly. Do not infer that a historical photograph or a previous year's listing describes the current programme. Respect private production areas and ask before photographing staff, families or other guests.",
    evidence:
      "Tourisme Outaouais updated its regional guide in March 2026 with dates, prices and booking notes for several public sugar shacks. That season has ended, so it proves the public format but not future availability. The next season must be checked before travel. EA has not eaten at or assessed any listed venue. The photograph shows maple taffy being poured on snow in Québec and does not depict a named Outaouais programme.",
    duration:
      "Seasonal and venue-specific. Plan only after the next current listing is published",
    participation:
      "Public seasonal hospitality, with activities varying by venue",
    access:
      "Public seasonal offer through the venues listed by the regional tourism authority. Confirm the next dates directly. EA does not reserve a table or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://tourismeoutaouais.com/en/blog/sugar-shack-maple",
      sources: [
        {
          title: "Tourisme Outaouais: 2026 sugar-shack guide",
          url: "https://tourismeoutaouais.com/en/blog/sugar-shack-maple",
          note: "Regional tourism authority guide updated in March 2026 with public venues, dates, prices and reservation notes. The published season has ended and future dates require a fresh check.",
        },
        {
          title: "Bonjour Québec: sugar-shack introduction",
          url: "https://www.bonjourquebec.com/en/to-see-and-do/delicious-discoveries/sugar-shacks",
          note: "Official provincial destination context for the seasonal sugar-shack experience. It does not validate an individual Outaouais venue or future opening date.",
        },
      ],
    },
  },
];
