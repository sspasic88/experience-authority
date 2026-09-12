import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Individually checked public programmes; not locally validated EA selections. */
export const guideBatch02: PublicExperience[] = [
  {
    id: "kyoto-camellia-tea",
    slug: "a-bowl-of-attention",
    title: "A bowl of attention",
    summary:
      "Watch tea being prepared, then whisk your own matcha at Camellia Flower Teahouse in Kyoto. A small introduction, with room to pay attention.",
    field: "taste",
    place: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    status: "public_guide",
    demo: false,
    ...guideImage("kyoto-camellia-tea"),
    kernel:
      "Begin by watching the host prepare tea; then make a bowl of matcha yourself. Camellia describes its shared Flower Teahouse session as a 45-minute English-language introduction, including a sweet. This is a bookable visitor programme, not a private gathering or a full course in tea practice. You can come for a first encounter without pretending to have mastered what you have seen.",
    rootedness:
      "Flower Teahouse is tucked off Ninenzaka in Kyoto’s Higashiyama district. Camellia’s directions distinguish it from Garden Teahouse across the city: choose the location deliberately, rather than treating the name as interchangeable. The interest here is in letting an ordinary act—preparing something for another person—become visible as a sequence of considered gestures.",
    shift:
      "From drinking tea as a pause between sights to noticing the care within its preparation.",
    humanReturn:
      "A useful question to take home: which everyday act would feel different if you gave it this much attention? You might remember the movement of the whisk more vividly than another landmark. That is an invitation to notice, not a promised result.",
    responsibility:
      "Arrive in time for your booked session. Flower’s tea rooms are upstairs; ask about mobility arrangements before paying. The operator permits still photography without flash, respecting other guests, but not video. Shared sessions are listed for ages six and over. Raise dietary needs directly rather than relying on a general description of the sweets.",
    evidence:
      "The operator’s programme, directions and booking pages establish the format and route to access. They do not independently establish teaching quality or cultural representativeness. EA has not attended. The photograph shows tea preparation in Kyoto, not a verified Camellia session.",
    duration: "45-minute session, plus time to find the teahouse and arrive",
    participation:
      "Watch a host prepare tea, then whisk your own bowl of matcha",
    access:
      "Book the shared Flower Teahouse format through Camellia. Follow your confirmation for the correct location; Garden and Flower are different venues. Check current prices, cancellation terms and available sessions before making travel plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://tea-kyoto.com/flower-general-information",
      sources: [
        {
          title: "Camellia — Flower Teahouse programme and visitor rules",
          url: "https://tea-kyoto.com/flower-general-information",
          note: "First-party format, duration, age and mobility information, photography rules and shared/private distinction. Prices and availability remain with Camellia.",
        },
        {
          title: "Camellia — finding Flower Teahouse",
          url: "https://tea-kyoto.com/find-us/flower",
          note: "Official directions distinguish Ninenzaka’s Flower location from Garden Teahouse. Use the booking confirmation for final arrival instructions.",
        },
        {
          title: "Camellia — shared Flower booking page",
          url: "https://tea-kyoto.com/reservation/flower",
          note: "The public booking route for the shared programme, not a check of free places on a particular date.",
        },
      ],
    },
  },
  {
    id: "tsaghkunk-lavash",
    slug: "bread-from-the-tonir",
    title: "Bread, from the tonir",
    summary:
      "Follow lavash from dough to oven at Tsaghkunk’s Glkhatun, where a baking encounter leads into a contemporary Armenian meal.",
    field: "make",
    place: "Tsaghkunk",
    country: "Armenia",
    countrySlug: "armenia",
    regionSlug: "gegharkunik",
    status: "public_guide",
    demo: false,
    ...guideImage("tsaghkunk-lavash"),
    kernel:
      "Watch the dough rolled thin, stretched over a cushion and placed against the tonir’s inner wall. Tsaghkunk names Anna and Gohar as the local bakers who introduce the process, with an opportunity for guests to try making lavash under their guidance. This guide concerns the advertised Tsaghkunk Experience: baking and tastings in the Glkhatun, followed by a restaurant set menu—not a standalone drop-in baking class.",
    rootedness:
      "The Glkhatun and restaurant stand in Tsaghkunk village in Gegharkunik. The operator describes a short walk between the two, connecting bread preparation with a contemporary meal. That relationship is the reason to consider the visit: the bread is not simply a prop on the table, but something whose making you have just watched. We do not treat the restaurant’s heritage or community-impact claims as independently verified.",
    shift:
      "From bread arriving at the table to seeing the hands, timing and shared work behind it.",
    humanReturn:
      "Look for the moment when a familiar ingredient becomes a skilled action. What did the baker judge by touch or movement that a written recipe could not show? Remembering the person and the decision, rather than just the dish, is one possible return from the visit.",
    responsibility:
      "Ask specifically for the Tsaghkunk Experience and confirm its current baking component before booking. Let the bakers set the pace and decide what guests may handle near the hot oven. Ask before photographing people. Confirm language, dietary needs and step-free access directly; the public pages do not settle those details for every visitor.",
    evidence:
      "Tsaghkunk’s Glkhatun page identifies the baking sequence and named hosts; its main page describes the wider dining package and reservation route. Both are operator sources. The programme’s quality, staff conditions and visitor suitability have not been independently assessed by EA. The licensed photograph records this location in 2022, not today’s programme or an EA visit.",
    duration: "Baking and a meal; ask the host for the current total duration",
    participation:
      "Observe lavash making, with an advertised opportunity to try under the bakers’ guidance",
    access:
      "Arrange the named Tsaghkunk Experience with the restaurant, not just a table. Confirm total time, inclusions and whether you can take part on your chosen date. Plan the journey to and from the village separately; transport is not established as part of the package.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://tsaghkunk.am/glkhatun/",
      sources: [
        {
          title: "Tsaghkunk — Glkhatun and lavash making",
          url: "https://tsaghkunk.am/glkhatun/",
          note: "Operator description of Anna and Gohar, the baking sequence and guest participation. Archaeological and spiritual claims are not independently verified or repeated as fact.",
        },
        {
          title: "Tsaghkunk — the wider experience and reservations",
          url: "https://tsaghkunk.am/",
          note: "First-party description connects Glkhatun baking and tastings with a restaurant set menu. A general table reservation is not proof of a confirmed baking session.",
        },
      ],
    },
  },
];
