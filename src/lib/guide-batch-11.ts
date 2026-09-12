import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Two public Kyoto programmes that cleared evidence, access and media review. */
export const guideBatch11: PublicExperience[] = [
  {
    id: "kyoto-marumasu-yuzen",
    slug: "build-a-pattern-in-colour",
    title: "Build a pattern in colour",
    summary:
      "Choose a cloth item, stencil and colours inside a Kyoto machiya, then build a Surikomi Yuzen pattern one brush and layer at a time.",
    field: "make",
    place: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    status: "public_guide",
    demo: false,
    ...guideImage("kyoto-marumasu-yuzen"),
    kernel:
      "Reserve Marumasu Nishimuraya's Kyo-Yuzen Beginner's Course through its public workshop form. The studio lists a 60 to 90-minute session where participants choose an item, colours and stencils, then apply dye through the pattern with a brush. Most items can leave with you that day. Fans and coin purses need later assembly, so choose with the rest of your trip in mind and check the current collection or shipping terms before committing.",
    rootedness:
      "Marumasu Nishimuraya identifies the workshop method as Surikomi Yuzen, a form of stencil Yuzen. The stencil holds a boundary while the brush builds colour through it. Repeating that sequence shows how a larger textile image can depend on small decisions of pressure, placement and layering.",
    shift:
      "From reading a dyed pattern as finished surface to noticing the boundaries, layers and repeated hand movements that let colour take shape.",
    humanReturn:
      "A motif may stay in your attention longer once you have worked through one of its layers. That is an editorial possibility, not a claim that a short visitor course teaches the craft.",
    responsibility:
      "Read the current item, reservation and delivery conditions before choosing. Follow the studio's dye handling and heat-setting instructions. Pick an item you can collect or receive within your travel plan. Keep the session in proportion to the wider craft and the work of practitioners. Ask before photographing staff, other participants or work beyond your own piece.",
    evidence:
      "Marumasu Nishimuraya's current individual visitor page publishes the beginner format, Surikomi Yuzen method, duration, item choices and same-day take-home limits. Its public reservation form accepts the course, date, time and participant count. Kyoto City's tourism listing independently confirms the central Kyoto workshop, published hours, prices and reservation form. EA has not attended, assessed instruction or inspected the studio. The photograph is published by Marumasu Nishimuraya and depicts its Yuzen process, not an EA visit or proof of a future session.",
    duration: "60 to 90 minutes according to the studio",
    participation:
      "Guided public beginner workshop using brushes, dye and a chosen stencil",
    access:
      "Advance reservation through the studio's public workshop form. A submitted form is not a promise of availability. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.marumasu-nishimuraya.co.jp/en/contact",
      sources: [
        {
          title: "Marumasu Nishimuraya: Kyo-Yuzen Beginner's Course",
          url: "https://www.marumasu-nishimuraya.co.jp/en/private",
          note: "Current first-party course description with Surikomi Yuzen method, 60 to 90-minute duration, item choices, hours, prices and take-home or later-assembly conditions.",
        },
        {
          title: "Marumasu Nishimuraya: workshop reservation form",
          url: "https://www.marumasu-nishimuraya.co.jp/en/contact",
          note: "First-party public reservation form for the introductory course with requested date, time and participant count.",
        },
        {
          title: "Kyoto City Tourism: Marumasu Nishimuraya",
          url: "https://ja.kyoto.travel/tourism/single01.php?category_id=3&tourism_id=2026",
          note: "Official city listing confirming the central Kyoto workshop, visitor activities, location, published hours, indicative prices and reservation route.",
        },
      ],
    },
  },
  {
    id: "kyoto-kctp-backstreet-cycling",
    slug: "ride-from-alley-to-river",
    title: "Ride from alley to river",
    summary:
      "Follow a guide for 15 kilometres from Kyoto Station through Miyagawacho, Gion, Shirakawa and the imperial park before finishing along the Kamo River.",
    field: "move",
    place: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    status: "public_guide",
    demo: false,
    ...guideImage("kyoto-kctp-backstreet-cycling"),
    kernel:
      "Choose the Kyoto Back Street Tour on Kyoto Cycling Tour Project's public booking form. The current private guided route starts and ends at Kyoto Station Cycle Terminal, runs for about three hours and covers 15 kilometres through Miyagawacho, Gion, Shirakawa, Kyoto Gyoen and the Kamo riverside. A form submission begins the booking process. The operator says confirmation follows only after availability, invoicing and payment are complete.",
    rootedness:
      "This route connects streets and water that can feel like separate postcard scenes on foot or by transit. The narrow approach through Miyagawacho and Gion opens into the imperial park, then the Kamo becomes a moving line back through the city. The value is in feeling those changes of scale and surface, not collecting stops at speed.",
    shift:
      "From seeing Kyoto as isolated attractions to feeling how alleys, open ground and riverbank sit within one continuous city.",
    humanReturn:
      "The distance between two familiar names may become part of your memory rather than dead time between them. That is an editorial possibility, not a promise that one route reveals the whole city.",
    responsibility:
      "Read the current riding requirements before applying. KCTP requires participants to be at least ten years old, at least 120 centimetres tall and able to ride, mount and dismount without assistance on public roads. Follow the guide, helmet and weather instructions. Kyoto City requires bicycles to use designated parking. Slow down or dismount where people and space require it. Do not photograph residents as part of the scenery without permission.",
    evidence:
      "KCTP's current tour page publishes the named route, private guided format, start times, distance, duration and group pricing. Its booking page explains rider requirements and the multi-step confirmation process. Kyoto City's official cycling guidance confirms the need to slow or dismount where appropriate and use designated parking. EA has not joined the tour, assessed the route or evaluated the guide. The photograph shows a person with a bicycle in Gion in 2019, not the KCTP tour or an EA visit.",
    duration:
      "About three hours. Traffic and weather can affect the finishing time",
    participation:
      "Private guided public cycling programme covering 15 kilometres",
    access:
      "Public booking request at least two days ahead, followed by availability, invoice, payment and final confirmation. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://kctp.net/en/tour/booking",
      sources: [
        {
          title: "Kyoto Cycling Tour Project: Kyoto Back Street Tour",
          url: "https://kctp.net/en/tours/backstreet",
          note: "Current first-party route with private guided format, Kyoto Station meeting point, named neighbourhoods, three-hour duration, 15-kilometre distance, start times and pricing.",
        },
        {
          title:
            "Kyoto Cycling Tour Project: booking process and rider requirements",
          url: "https://kctp.net/en/tour/booking",
          note: "First-party public booking form explaining the confirmation sequence, two-day online deadline and minimum age, height and independent riding requirements.",
        },
        {
          title: "Kyoto City Official Travel Guide: cycling in Kyoto",
          url: "https://kyoto.travel/en/getting-around/bike/",
          note: "Official city guidance on mixed cycling conditions, slowing or dismounting where needed and the requirement to use designated bicycle parking.",
        },
      ],
    },
  },
];
