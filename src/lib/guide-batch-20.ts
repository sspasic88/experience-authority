import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-13",
  reviewBy: "2026-12-12",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch20: PublicExperience[] = [
  {
    id: "london-borough-market-tour",
    slug: "ask-the-market-where-london-came-from",
    title: "Ask the market where London came from",
    summary:
      "Begin with a London landmark people already know, then let its traders, ingredients and working history turn a food stop into a line of enquiry.",
    field: "taste",
    place: "London",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    status: "public_guide",
    demo: false,
    ...guideImage("london-borough-market-tour"),
    kernel:
      "Book one of the official licensed tours linked by Borough Market and arrive ready to follow ingredients rather than collect samples. The public Celia Brooks format begins with drinks and small bites, then moves through the market for tastings, conversations with traders and questions about origin and production. Use the guide's introductions to understand why a cheese, fish, tea or preserved food is here and what knowledge sits behind the counter. The useful result is not a definitive list of what to eat in London. It is a better way to read a working market.",
    rootedness:
      "Borough Market is both a globally recognised visitor destination and a charity-run food market with a history reaching back around a thousand years. The current halls still organise large producers, specialist traders and prepared food into distinct working areas. That makes it a relatable first stop with deeper layers available. EA does not call every product local or treat a busy market as an untouched community space. The guide stays with a publicly offered tour licensed by the market and with the people, sourcing and practical knowledge it introduces.",
    shift:
      "From arriving for a famous lunch to asking how ingredients, trade and knowledge make the market work.",
    humanReturn:
      "Choose one unfamiliar ingredient after the tour and ask how to store, serve or cook it. A useful market visit ends with a more precise question, not the claim that you have tasted London.",
    responsibility:
      "Confirm allergens, dietary requirements, alcohol content and walking or standing needs before booking. The market can be crowded and remains a working environment with hot food, deliveries and narrow passages. Stay with the guide, keep routes and counters clear, ask before photographing traders or other visitors and do not assume every tasting suits every diet. Buy with attention to what you can consume rather than treating stalls as unlimited samples.",
    evidence:
      "Borough Market's current official tours page describes the licensed Celia Brooks format, selected Friday mornings, advance booking, trader introductions and food and wine tastings. Its visitor and history pages describe the market's layout, access conditions, charity governance and long working history. The market's own responsible-tourism article provides useful conduct context. EA has not taken the tour, assessed the guide, verified a particular menu or checked availability for a chosen date.",
    duration: "About three hours for the currently published public tour",
    participation:
      "Guided market walk with trader introductions and planned tastings",
    access:
      "Follow Borough Market's official tours page to the currently licensed public booking route. The listed Celia Brooks tour runs on selected Friday mornings and requires advance booking. Confirm the live date, meeting point, price, language, dietary arrangements and cancellation terms before paying. Ordinary market entry is free but is not the same experience. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Borough Market: official tours",
        url: "https://boroughmarket.org.uk/events/official-tours/",
        note: "First-party listing of licensed tour routes, public Celia Brooks schedule, format, tastings, advance booking and direct provider hand-off.",
      },
      {
        title: "Borough Market: visit us",
        url: "https://boroughmarket.org.uk/visit-us/",
        note: "First-party current opening, layout, accessibility, crowd and working-environment information, with the official-tour route clearly distinguished from ordinary admission.",
      },
      {
        title: "Borough Market: our story",
        url: "https://boroughmarket.org.uk/our-story/",
        note: "First-party history and governance context, including the market's long trading history and current charitable structure.",
      },
      {
        title: "Borough Market: how to be a great tourist",
        url: "https://boroughmarket.org.uk/market-blog/how-to-be-a-great-tourist/",
        note: "Market-published conduct context on engaging traders, supporting independent businesses and avoiding obstruction. It is guidance, not independent assessment of the tour.",
      },
    ]),
  },
  {
    id: "london-rbo-backstage-tour",
    slug: "meet-the-work-before-the-curtain-rises",
    title: "Meet the work before the curtain rises",
    summary:
      "Go behind the public rooms at the Royal Opera House and meet a performance through rehearsal, costume, production and the changing needs of a working theatre.",
    field: "work",
    place: "London",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    status: "public_guide",
    demo: false,
    ...guideImage("london-rbo-backstage-tour"),
    kernel:
      "Reserve the Royal Ballet and Opera's Behind the Scenes Tour at Covent Garden. Follow the guide through the areas the working schedule allows on that day, which can include rehearsal studios, costumes and production workshops. Pay attention to coordination: who prepares a surface, moves a set, maintains a costume or changes the building between uses. The exact route varies because this is an operating theatre. That variation is part of the experience, not a missing attraction. It reveals that the finished performance depends on a much larger company of people than the audience sees.",
    rootedness:
      "The Royal Opera House is one of London's most recognisable cultural addresses, but the public image often ends at auditorium, dancer or singer. The tour redirects attention towards the institution's daily production ecology and more than two centuries of performance history at Covent Garden. This is not access to a private rehearsal on demand or proof that every named workshop will be active. It is the organisation's own publicly bookable route through a changing working building.",
    shift:
      "From seeing a performance as an event on stage to recognising the many forms of work that make it possible.",
    humanReturn:
      "At the next performance, stay through the final credits or programme list and notice how many distinct practices support the names at the centre of the stage.",
    responsibility:
      "Remain with the guide and follow all backstage, photography and safety instructions. Do not interrupt rehearsals, touch costumes, tools or sets, or photograph people without permission. The route can include long corridors, stairs, lifts, changing floor surfaces, busy spaces and variable sound and light. Contact the venue after booking to discuss step-free access, seating, hearing, sensory or other needs so the route can be planned where possible.",
    evidence:
      "The Royal Ballet and Opera's current tour and event pages describe a 75-minute public Behind the Scenes Tour, rolling year-round dates, possible rehearsal, costume and production areas, age guidance and detailed access variables. They also state that the route changes with the needs of the working theatre. EA has not taken the tour, inspected backstage conditions, assessed interpretation quality or confirmed which spaces will be available on a particular day.",
    duration: "About one hour and fifteen minutes",
    participation:
      "Guided observation through available backstage and production areas",
    access:
      "Book a dated Behind the Scenes Tour through the Royal Ballet and Opera. Current guidance lists ages 12 and over, requires children 14 and under to attend with an adult and adds dates on a rolling basis. Confirm the date, price, language, route and access needs before paying. A performance ticket or free access to the public building does not include this tour. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Royal Ballet and Opera: Behind the Scenes Tour",
        url: "https://www.rbo.org.uk/tickets-and-events/roh-behind-the-scene-tour-details",
        note: "First-party current programme, duration, age guidance, public booking route, variable backstage content and stated access contact.",
      },
      {
        title: "Royal Ballet and Opera: tours",
        url: "https://www.rbo.org.uk/visit/visitor-information/tours",
        note: "First-party year-round scheduling, meeting point, route variability, mobility, sensory and communication details for guided tours.",
      },
      {
        title: "Royal Ballet and Opera: things to do",
        url: "https://www.rbo.org.uk/things-to-do",
        note: "First-party distinction between free public access, performances, workshops and separately booked guided tours at Covent Garden.",
      },
    ]),
  },
  {
    id: "london-hidden-underground-tour",
    slug: "open-a-door-the-underground-left-behind",
    title: "Open a door the Underground left behind",
    summary:
      "Follow a London Transport Museum guide beyond the working station into platforms, passages and design details hidden beside ordinary journeys.",
    field: "witness",
    place: "London",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    status: "public_guide",
    demo: false,
    ...guideImage("london-hidden-underground-tour"),
    kernel:
      "Choose one current Hidden London route rather than treating the whole programme as a single attraction. Piccadilly Circus is the clearest central example. An expert guide opens normally closed passages, lift shafts and parts of earlier station designs behind one of London's busiest public spaces. Look for how the network was repeatedly adapted as passenger numbers, engineering and the city changed around it. Another route may be a better fit for your date or interests. Read its individual demands before booking because duration, stairs, age threshold and spaces vary.",
    rootedness:
      "The Underground is among London's most familiar systems. Hidden London makes the discarded and repurposed layers beside it legible without pretending they are secret territory available for independent exploration. At Piccadilly Circus, Leslie Green's 1906 station and Charles Holden's 1920s reconstruction sit behind the station people use today. London Transport Museum runs the exclusive public programme and connects design, engineering, wartime use and changing passenger flows through bounded guided access.",
    shift:
      "From reading the Tube as a map of destinations to seeing it as a city repeatedly rebuilt below another city.",
    humanReturn:
      "On the next ordinary journey, look at a tiled edge, blocked doorway or change in corridor width and ask which earlier version of the station is still present.",
    responsibility:
      "Book only through the museum's current route and never attempt to enter closed infrastructure independently. Wear flat, sturdy shoes and follow every instruction around platforms, equipment, stairs and confined areas. Hidden London publishes significant mobility limits and warns that some spaces may not suit people with claustrophobia. Confirm the exact route's age threshold, step count, lighting, dust, sound and emergency arrangements before paying. Do not obstruct passengers or photograph where the guide prohibits it.",
    evidence:
      "London Transport Museum's current booking page lists multiple public Hidden London routes and describes the principal spaces. Its 2025 to 2026 accessible groups guide and current private-tour brochure document duration, footwear, age, mobility and confined-space constraints. The museum's Piccadilly Circus booklet supports the station design and history context. EA has not taken a tour, entered closed infrastructure, assessed physical suitability or confirmed availability for a particular date.",
    duration: "Usually about 70 to 85 minutes, depending on the route",
    participation:
      "Expert-led observation inside a specifically authorised closed station area",
    access:
      "Choose and book a currently listed Hidden London tour through London Transport Museum. Tours run on selected dates and not every route operates year-round. Read the route-specific age, footwear, mobility and confined-space requirements before paying. Standard museum or Underground admission does not include closed-site access. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title:
          "London Transport Museum: current events and Hidden London tours",
        url: "https://bookings.ltmuseum.co.uk/",
        note: "First-party current public booking inventory for Hidden London routes, including their named sites and short descriptions.",
      },
      {
        title: "London Transport Museum: Hidden London private tour brochure",
        url: "https://www.ltmuseum.co.uk/sites/default/files/2025-11/Hidden%20London%20-%20Private%20Tour%20Brochure.pdf",
        note: "First-party route, duration, footwear, age, accessibility and confined-space information. Private prices are not used as a claim about public tickets.",
      },
      {
        title: "London Transport Museum: Piccadilly Circus tour booklet",
        url: "https://www.ltmuseum.co.uk/sites/default/files/2024-11/London%20Transport%20Museum%20Hidden%20London%20Piccadilly%20Circus%20Tour.pdf",
        note: "First-party historical account of Piccadilly Circus station, its original Leslie Green design, later reconstruction and changing passenger needs.",
      },
      {
        title: "London Transport Museum: 2025 to 2026 groups guide",
        url: "https://www.ltmuseum.co.uk/sites/default/files/2025-10/Groups%20and%20Travel%20Trade%20Guide_2025-2026_accessible.pdf",
        note: "First-party operating pattern and route comparison with durations and access limitations. Group pricing is not presented as a current public fare.",
      },
    ]),
  },
];
