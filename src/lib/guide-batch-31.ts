import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-15",
  reviewBy: "2026-12-14",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch31: PublicExperience[] = [
  {
    id: "apia-cultural-village-umu",
    slug: "see-lunch-built-from-fire-stone-and-leaves",
    title: "See lunch built from fire, stone and leaves",
    summary:
      "Follow an umu from hot volcanic rocks and wrapped ingredients to the lunch served inside Apia's public Cultural Village programme.",
    field: "taste",
    place: "Apia",
    country: "Samoa",
    countrySlug: "samoa",
    regionSlug: "apia",
    status: "public_guide",
    demo: false,
    ...guideImage("apia-cultural-village-umu"),
    kernel:
      "Enter through the Samoa Cultural Village's published daytime programme on Beach Road. Stay with the umu sequence rather than trying to absorb every demonstration at once. Notice how coconut husks and wood heat volcanic rocks, how ingredients and coconut cream are contained by leaves and how the oven is covered to hold heat. Samoa Tourism states that the programme includes umu preparation and an umu-cooked lunch. Your dependable role is to watch, listen and eat what the public programme serves. Handling food, fire, tools or the oven is never assumed.",
    rootedness:
      "Samoa Tourism describes umu cooking as part of Fa'a Samoa and as a method still used for family and village meals, especially on Sundays and special occasions. A public cultural programme cannot stand in for private household life or every Samoan community. Its value is more specific. It makes the time, materials and coordinated work behind a meal visible before the plate arrives, while the hosts retain control of the explanation and sequence.",
    shift:
      "From treating an island lunch as a finished spread to seeing fire, stone, leaves, timing and shared labour as part of what is being served.",
    humanReturn:
      "A meal at home may prompt one more question about the heat source, preparation time and work that disappeared before the plate reached the table.",
    responsibility:
      "Confirm the programme directly before arrival because hours, price and content can change. Follow host instructions around hot stones, fire, knives and food. Do not step into the demonstration area or handle ingredients unless invited within the public programme. Ask before photographing identifiable people or culturally significant details. Check allergens and dietary needs directly, and do not assume every displayed item is part of lunch. The Cultural Village is an interpreted public setting, not access to a private Sunday meal.",
    evidence:
      "Samoa Tourism's current Cultural Village listing publishes its Beach Road location, Tuesday to Friday hours, admission prices and umu preparation within the programme. The authority's food guide separately states that visitors receive umu-cooked food for lunch there and explains the method's continuing place in Samoan food life. Its Apia guide independently repeats the public meal and stone-oven context. These sources support paid public observation and lunch. They do not prove a hands-on cooking class, every day's menu, dietary suitability or EA attendance.",
    duration:
      "The published Cultural Village window runs from 10:30am to 1:30pm, Tuesday to Friday. Confirm it before travel",
    participation:
      "Public cultural programme with hosted observation and lunch. Food preparation or oven work is not promised",
    access:
      "Check the Samoa Cultural Village listing or contact Samoa Tourism before setting out. The listed adult price is SAT 20, with separate child rates. Pay under the venue's current terms. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Samoa Tourism Authority: Samoa Cultural Village",
        url: "https://www.samoa.travel/plan-book/activities/samoa-cultural-village",
        note: "Current official listing with location, public hours, prices and umu preparation among the Cultural Village demonstrations.",
      },
      {
        title: "Samoa Tourism Authority: Samoa food guide",
        url: "https://www.samoa.travel/experience/foodies/",
        note: "Official food context explaining umu stages and stating that the Cultural Village programme serves umu-cooked lunch.",
      },
      {
        title: "Samoa Tourism Authority: Apia",
        url: "https://www.samoa.travel/discover/the-islands-of-samoa/upolu-island/apia/",
        note: "Official capital guide locating the Cultural Village on Beach Road and independently describing the meal from its stone oven.",
      },
    ]),
  },
  {
    id: "moorea-we-do-vaa",
    slug: "take-the-lagoon-one-stroke-at-a-time",
    title: "Take the lagoon one stroke at a time",
    summary:
      "Join a small Moorea operator for a first va'a paddle and discover why the outrigger is a working design before it becomes a lagoon image.",
    field: "move",
    place: "Moorea",
    country: "French Polynesia",
    countrySlug: "french-polynesia",
    regionSlug: "moorea",
    status: "public_guide",
    demo: false,
    ...guideImage("moorea-we-do-vaa"),
    kernel:
      "Choose We Do Va'a's published introduction rather than a generic motorised lagoon circuit. Begin on shore with the craft, the outrigger and the day's conditions. Let experienced rowers set seating, timing and route, then find the shared cadence that keeps the canoe moving cleanly. The current listing offers a two-and-a-half-hour format with transfer and fruit tasting, plus longer meal options. This guide remains with the paddling introduction. It does not turn an ordinary first session into traditional navigation training or an open-ocean expedition.",
    rootedness:
      "Tahiti Tourisme describes va'a as both an outrigger design adapted to lagoon and ocean movement and the national sport of French Polynesia. Contemporary craft and purposes vary across racing, fishing, transport and visitor excursions. One commercial introduction on Moorea does not confer mastery or represent every island tradition. It can still reveal how the ama, iato, hull, crew positions and repeated stroke turn balance into collective movement.",
    shift:
      "From crossing a turquoise lagoon as scenery to feeling how a hull, outrigger and several paddlers negotiate balance together.",
    humanReturn:
      "The next boat may look less like an object and more like a record of the water, purpose and coordinated bodies it was designed to carry.",
    responsibility:
      "Contact the operator before travel because the official listing contains conflicting day information and does not publish live inventory or prices. Confirm the exact format, meeting point, transfer, language, swimming ability, flotation equipment, weather policy and physical requirements. Wear the safety equipment provided, follow the lead paddler and keep hands clear when launching or landing. Use reef-safe sun protection and do not touch coral or wildlife. The lagoon photograph is context, not the named operator or proof of current conditions.",
    evidence:
      "Tahiti Tourisme's current We Do Va'a listing identifies a small family business in Haapiti, a va'a introduction with experienced rowers, two-and-a-half and four-and-a-half-hour formats and direct phone and email contact. The same page currently conflicts between a Monday to Friday description and a daily opening table, so EA does not resolve the schedule on the visitor's behalf. Tahiti Tourisme's editorial va'a guide explains the craft's construction, varied uses and place in contemporary training and competition. These sources support a hosted paddling introduction, not traditional navigation tuition, guaranteed conditions or EA attendance.",
    duration:
      "The shortest published format is two and a half hours including transfer and fruit tasting. Confirm the actual session directly",
    participation:
      "Hosted beginner va'a paddling with experienced rowers. Navigation teaching, racing and open-ocean travel are not included",
    access:
      "Contact We Do Va'a through the official Tahiti Tourisme listing and confirm the date, price, route and equipment before committing. The listing names direct phone and email contact but no live booking inventory. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Tahiti Tourisme: We Do Va'a",
        url: "https://www.tahititourisme.com/service/we-do-vaa/",
        note: "Current official service listing with a public va'a introduction, operator contact, location and published formats. Day information conflicts and must be confirmed directly.",
      },
      {
        title: "Tahiti Tourisme: Try out a va'a",
        url: "https://www.tahititourisme.com/try-out-a-vaa-the-polynesian-canoe/",
        note: "Official editorial account of va'a design, uses, beginner lessons, training and competition across French Polynesia.",
      },
    ]),
  },
];
