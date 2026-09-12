import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Publicly available, familiar ways into place. Each remains a desk guide. */
export const guideBatch04: PublicExperience[] = [
  {
    id: "singapore-hawker-morning",
    slug: "a-morning-at-the-hawker-table",
    title: "A morning at the hawker table",
    summary:
      "Choose a Singapore hawker centre for breakfast, settle at a shared table and let the city set the pace.",
    field: "taste",
    place: "Singapore",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    status: "public_guide",
    demo: false,
    ...guideImage("singapore-hawker-morning"),
    kernel:
      "Choose one currently operating hawker centre, arrive for an ordinary breakfast and order from a stall that is already serving. A good first move is to keep the choice simple, then eat at the shared tables rather than treating the centre as a checklist. The NEA’s current overview maps its managed centres and lists planned closure dates. It is the planning source, not a promise that a specific stall will be open or have a particular dish.",
    rootedness:
      "Singapore’s National Environment Agency and National Heritage Board describe hawker centres as places where food, work and shared public life meet. The food traditions have grown through many communities and do not belong to a single visitor narrative. This guide is about using an ordinary public dining room with attention, not about claiming to have understood Singapore through one meal.",
    shift:
      "From hunting for a famous dish to noticing how a shared room works around it.",
    humanReturn:
      "You may remember the pace of ordering, the noise of trays and the ease of a table that belongs to nobody in particular. That is a possibility, not a promise. Let the meal remain an encounter with a living public place rather than evidence of expertise.",
    responsibility:
      "Choose food that works for your own dietary needs and ask the stall directly when ingredients matter. Follow current centre signage, return your tray and leave tables usable for the next people. Do not photograph workers or diners without asking. Stall hours, queues, payment methods, accessibility and cleaning arrangements vary, so confirm what matters before a special journey.",
    evidence:
      "The National Environment Agency’s current centre overview establishes the managed-centre map and closure information. Its hawker-culture page and the National Heritage Board’s heritage record provide wider public context. EA has not dined at a named stall, assessed food quality, hygiene, price, dietary suitability, labour conditions or a centre’s current accessibility. The photograph is an official government image of hawker-centre dining, used as place context only. It is not an EA visit.",
    duration: "As long as you choose to stay, with current hours set by each centre and stall",
    participation: "Independent public dining",
    access:
      "Ordinary public hospitality. Use the NEA map and current centre information to choose a location, then check a specific stall directly if its opening time matters. EA does not make reservations, sell food or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.nea.gov.sg/our-services/hawker-management",
      sources: [
        {
          title: "National Environment Agency: managing hawker centres and markets",
          url: "https://www.nea.gov.sg/our-services/hawker-management",
          note: "Current government overview with a map of managed hawker centres and published closure information. Individual stall schedules and menus still require direct confirmation.",
        },
        {
          title: "National Environment Agency: Hawker Culture",
          url: "https://www.nea.gov.sg/our-services/hawker-management/programmes-and-grants/hawker-culture",
          note: "Government context for hawker centres as communal dining spaces and for the 2020 UNESCO inscription. It does not recommend or validate a particular stall.",
        },
        {
          title: "National Heritage Board: Hawker Culture",
          url: "https://www.roots.gov.sg/ich-landing/ich/hawker-culture",
          note: "Public heritage context on the social practice of dining and mingling at Singapore hawker centres. It is not current access evidence for a named venue.",
        },
      ],
    },
  },
  {
    id: "budapest-fono-tanchaz",
    slug: "step-into-the-dance",
    title: "Step into the dance",
    summary:
      "Join a published táncház evening at Fonó Budapest Music Hall, where live music, teaching and open dance share one room.",
    field: "gather",
    place: "Budapest",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    status: "public_guide",
    demo: false,
    ...guideImage("budapest-fono-tanchaz"),
    kernel:
      "Use Fonó’s current programme to choose a listed táncház, then follow that event’s own ticket, time and participation information. The calendar regularly includes dance-house events with live music, and some listings are free while others use tickets. Arrive ready to observe first. Join only where the room, teachers or organisers make the invitation clear. The programme page is the planning source because individual dates and formats change.",
    rootedness:
      "UNESCO describes the Táncház method as a way of learning folk dance and music through direct observation and imitation with live accompaniment. A public dance house in Budapest is not a shortcut to ownership of every regional tradition it draws upon. It can be a real opportunity to meet a living practice with care, while leaving interpretation and authority with the people who hold it.",
    shift:
      "From watching folk culture on a stage to learning how a room makes participation possible.",
    humanReturn:
      "You may leave with a remembered rhythm, a new awareness of listening or the modest relief of being allowed to learn slowly. Treat that as a beginning, not a credential or a claim to belonging.",
    responsibility:
      "Read the particular event’s guidance before travel and follow its ticketing, timing and photography rules. Ask before filming people or musicians. Make space at the edge of the floor for those teaching and dancing, and do not assume a dance invitation or instruction is owed to you. Choose your own level of participation and leave if the environment does not suit your needs.",
    evidence:
      "Fonó’s live programme establishes that it publishes current táncház events and their ticket or free-entry markers. UNESCO provides practice-level context for the Táncház method. EA has not attended, assessed teaching, verified a specific line-up, checked an event’s suitability or evaluated the venue’s accessibility. The photograph is published by Fonó and depicts a dance gathering at the venue. It is not an EA visit or a guarantee of a particular event.",
    duration: "Event-specific. Confirm the current listing’s start time, ticket terms and finish",
    participation: "Public listening, learning or dancing at your own discretion",
    access:
      "Public programme, with entry terms set by each current listing. Open Fonó’s programme before travel and use the venue’s own route for tickets or free-entry details. EA does not reserve places or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.fono.hu/hu/programok/",
      sources: [
        {
          title: "Fonó Budai Zeneház: current programme",
          url: "https://www.fono.hu/hu/programok/",
          note: "Current venue calendar with listed táncház events, event times and ticket or free-programme markers. Dates, entry and format can change.",
        },
        {
          title: "UNESCO: Táncház method",
          url: "https://ich.unesco.org/en/BSP/tanchaz-method-a-hungarian-model-for-the-transmission-of-intangible-cultural-heritage-00515?Art18=00515",
          note: "Practice-level context for learning folk dance and music through live accompaniment, observation and participation. It does not review Fonó or a named event.",
        },
      ],
    },
  },
];
