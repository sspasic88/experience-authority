import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (sources: GuideReview["sources"]): GuideReview => ({
  basis: "public_sources",
  scope: "public_programme",
  requiresSpecialPermission: false,
  checkedOn: "2026-09-13",
  reviewBy: "2026-12-12",
  accessUrl: sources[0].url,
  sources,
});

/** New city-depth commissions, not approvals of additional preliminary candidates. */
export const guideBatch16: PublicExperience[] = [
  {
    status: "public_guide",
    demo: false,
    id: "barcelona-mosaiccos-trencadis",
    slug: "make-something-from-the-broken-pieces",
    title: "Make something from the broken pieces",
    summary:
      "Barcelona's mosaic surfaces become more interesting when you have tried fitting the fragments yourself. Give a small trencadís object two hours of attention.",
    field: "make",
    place: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    ...guideImage("barcelona-mosaiccos-trencadis"),
    kernel:
      "Book Mosaiccos' two-hour introductory trencadís workshop at its Barcelona studio. Follow the tool demonstration, choose the object offered by your booking and arrange ceramic fragments into a surface. Begin with one relationship, perhaps two colours or a curve meeting a straight edge. The most useful moment may be finding a piece that nearly fits and deciding what to do about it. Staff handle the later grouting, so the session and collection are not necessarily the same visit.",
    rootedness:
      "Broken ceramic becomes a design material in the trencadís surfaces associated with Barcelona's Modernista architecture. A familiar reference is the serpentine bench in Park Güell. The studio class is not a visit to that bench, nor a claim to reproduce its craftsmanship in an afternoon. It gives you a small practical question to take back to the city: how do irregular parts make a coherent whole?",
    shift:
      "From recognising a famous surface to understanding a few of the decisions that hold it together.",
    humanReturn:
      "Choose one detail in the streets afterwards and look at its joins, not just its colour. Your object can be modest. The lasting souvenir is a new way of looking at something you thought you already knew.",
    responsibility:
      "Use cutting tools only as instructed and follow the studio's age and supervision rules. Confirm allergens or material sensitivities, access needs and the language of instruction before booking. Do not take fragments from buildings or public artworks. Ask before photographing other participants and allow the staff time to finish the work.",
    evidence:
      "Mosaiccos' current booking site lists a two-hour trencadís format with materials and finishing. Its class page describes instruction and later collection, commonly that afternoon or the following morning. Other formats have different durations and objects. Barcelona Turisme independently lists the studio's family mosaic workshops. EA has not attended or assessed teaching quality. The photograph shows a Park Güell mosaic detail, not the studio or a promised beginner result.",
    duration: "Two-hour introduction, with collection arranged separately",
    participation: "Guided hands-on ceramic mosaic making",
    access:
      "Use the operator's current booking calendar for the two-hour format at C/dels Assaonadors 10. Confirm the object, collection time, language and accessibility before paying, especially near the end of a stay. Park Güell admission is separate and is not included. No EA booking or commission.",
    guideReview: review([
      {
        title: "Mosaiccos: current workshop booking",
        url: "https://experiencegaudibarcelona.com/es/",
        note: "First-party two-hour format, materials and finishing, studio address and live booking route. Other workshops on the same page have different terms.",
      },
      {
        title: "Mosaiccos: mosaic classes and collection",
        url: "https://mosaiccos.com/activity/mosaic-classes/",
        note: "Operator's explanation of introductory visitor classes, tools and staff grouting, including the need to arrange later collection.",
      },
      {
        title: "Barcelona Turisme: family art workshops",
        url: "https://www.barcelonaturisme.com/wv3/en/page/5197/.html",
        note: "Official city tourism context for trencadís and Mosaiccos workshops. Use the operator's current booking terms rather than a tourism listing's price.",
      },
    ]),
  },
  {
    status: "public_guide",
    demo: false,
    id: "vienna-spanish-riding-school-training",
    slug: "watch-the-work-before-the-performance",
    title: "Watch the work before the performance",
    summary:
      "At Vienna's Spanish Riding School, the morning exercise makes room for something a finished performance can hide: repetition, adjustment and the work still in progress.",
    field: "witness",
    place: "Vienna",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    ...guideImage("vienna-spanish-riding-school-training"),
    kernel:
      "Choose a specifically listed Morning Exercise session at the Spanish Riding School, then settle in the Winter Riding School at the Hofburg. This is a public view of part of the horses' and riders' daily training, accompanied by classical music. Watch a transition or a repeated movement rather than wait for a spectacular jump. The programme changes with training stage and the day. You are observing work, not attending a shortened version of the full performance.",
    rootedness:
      "The setting is recognisably imperial Vienna, but the useful contrast is between a grand room and small adjustments. A performance makes movements look resolved. Training gives you a reason to notice what is being repeated and refined. EA's invitation is to watch patiently, not to treat tradition or a prestigious address as proof of training quality or animal welfare.",
    shift:
      "From waiting for the highlight to noticing the practice that a highlight usually conceals.",
    humanReturn:
      "Take away a question about learning rather than a list of movements. What did you notice changing between attempts? It is a way of paying attention that can travel beyond a riding hall.",
    responsibility:
      "Remain in the visitor area and follow staff instructions. Photography, film and audio recording are prohibited during the session. This is not a riding lesson, stable visit or invitation to touch the horses. EA has not independently assessed animal welfare. Read the institution's account and decide whether this form of animal-based performance and training aligns with your values.",
    evidence:
      "The school's ticket page describes an approximately sixty-minute training session with no fixed programme. Famous school jumps are rarely part of it and are not promised. Its visitor information distinguishes training from performances and explains access limitations. EA has not attended or assessed the horses, methods or welfare. The official photograph depicts a trainer and horse, not an interaction available to visitors or a guaranteed view from a seat.",
    duration: "Around one hour, with arrival before the booked start",
    participation:
      "Audience observation of a publicly ticketed training session",
    access:
      "Book Morning Exercise for a specific date and time, choosing the correct seated or standing category. Children under three are not admitted. The historic galleries require stairs and have no lift. Wheelchair spaces are limited and require advance written confirmation from the school. Follow the entrance and arrival instructions on your ticket. No EA booking or commission.",
    guideReview: review([
      {
        title: "Spanish Riding School: Morning Exercise",
        url: "https://www.srs.at/en/tickets/morning-exercise",
        note: "First-party calendar and public training format, approximate duration, variable exercises and distinction from guaranteed performance highlights.",
      },
      {
        title: "Spanish Riding School: Vienna visitor information",
        url: "https://www.srs.at/en/visitor-information/vienna/wichtige-informationen",
        note: "Official distinction between training and performances, visitor recording rules, ticket categories, age restrictions and limited wheelchair access.",
      },
    ]),
  },
];
