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

export const guideBatch19: PublicExperience[] = [
  {
    id: "paris-croissant-workshop",
    slug: "make-the-morning-before-it-reaches-the-cafe",
    title: "Make the morning before it reaches the café",
    summary:
      "Give a familiar Paris breakfast most of a day. Fold, shape and bake croissants, pains au chocolat and brioche in a public teaching kitchen.",
    field: "taste",
    place: "Paris",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    status: "public_guide",
    demo: false,
    ...guideImage("paris-croissant-workshop"),
    kernel:
      "Book the Freshly Baked Pastries workshop at Le Cordon Bleu Paris. It is a substantial 5.5-hour class, not a quick demonstration. The published programme moves through croissants, pains au chocolat and brioche at individual workstations, with the chef explaining before participants make the recipes. Take the pastries with you at the end. Look for the decisions that disappear inside the finished breakfast: how dough is folded, kept cool, shaped and given time. The useful comparison comes later, when a bakery window no longer shows only a row of perfect objects.",
    rootedness:
      "The croissant is one of the most recognisable ways visitors imagine a Paris morning. That familiarity is the entry point, not the conclusion. A serious practical class restores labour, temperature, repetition and timing to a food often reduced to a prop beside a coffee cup. Le Cordon Bleu is an international culinary school, so this is not presented as a neighbourhood secret or proof of the single authentic Paris croissant. It is a publicly bookable way to learn a demanding French bakery technique in Paris.",
    shift:
      "From ordering an icon to understanding why its layers require time, temperature and control.",
    humanReturn:
      "Choose one bakery the next morning and look at the lamination, colour and shape before deciding what to buy. The class does not make you a baker. It gives you a more exact way to appreciate one.",
    responsibility:
      "Confirm allergens, dietary requirements and physical access before paying. Expect prolonged standing and close work around professional equipment. Follow all kitchen, hygiene and heat-safety instructions. The published minimum age is 18. Take only the food the school says may leave the kitchen, transport it as directed and ask before photographing staff or other participants.",
    evidence:
      "Le Cordon Bleu's current workshop page describes the 5.5-hour public format, individual workstations, pastries made, take-home result, minimum age, price, dates and consecutive English translation. Paris je t'aime supports the croissant's place among recognisable Paris food references. EA has not taken the class, assessed teaching quality, checked allergens or confirmed availability for a particular date.",
    duration: "About five and a half hours",
    participation:
      "Hands-on bakery workshop at an individual workstation after chef instruction",
    access:
      "Reserve a dated session through Le Cordon Bleu Paris. The current page lists classes taught in French with consecutive English translation, a minimum age of 18 and a published price of €295. Confirm the live calendar, language, ingredients, cancellation terms and access needs before paying. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Le Cordon Bleu Paris: Freshly Baked Pastries Workshop",
        url: "https://www.cordonbleu.edu/paris/pastry-workshop-freshly-baked-pastries/en?Page=1",
        note: "First-party programme, duration, participation, menu, age threshold, French teaching with consecutive English translation, dates, price and booking route.",
      },
      {
        title: "Paris je t'aime: Paris cuisine in ten specialities",
        url: "https://parisjetaime.com/eng/article/cuisine-paris-en-10-specialites-a682",
        note: "Official destination context for the croissant as a familiar Paris food reference. It does not assess this particular school or workshop.",
      },
    ]),
  },
  {
    id: "paris-gobelins-workshops",
    slug: "watch-a-picture-grow-one-thread-at-a-time",
    title: "Watch a picture grow one thread at a time",
    summary:
      "Go behind the gallery wall at the Gobelins and watch contemporary images being translated into tapestry inside working national workshops.",
    field: "witness",
    place: "Paris",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    status: "public_guide",
    demo: false,
    ...guideImage("paris-gobelins-workshops"),
    kernel:
      "Reserve the guided behind-the-scenes visit to the Gobelins workshops. The published route enters two of the three national weaving manufactories still active on the site. Watch how an image is interpreted through warp, weft, colour and the repeated movement of the weaver. At the Gobelins, high-warp looms hold the wool warp vertically and the weaver works from the reverse, checking the front in a mirror. Do not expect a hands-on class or a predictable set of works. These are functioning workshops and the visit is shaped by what can be seen safely on the day.",
    rootedness:
      "The Gobelins site has been tied to dyeing and tapestry for centuries, with the royal manufacture consolidated here in 1662. The work did not stop at historical replicas. Mobilier national describes current production as a dialogue between inherited technique and contemporary artists. That continuity is the reason to visit. The experience connects a globally recognised Paris institution to people still making, adjusting and translating images by hand.",
    shift:
      "From treating tapestry as a finished surface to seeing it as thousands of decisions made from the reverse.",
    humanReturn:
      "In the next gallery, spend time at the edge of one woven colour and ask what had to happen for it to meet the next. The visit offers attention, not entry into the profession or ownership of its history.",
    responsibility:
      "Stay with the guide and outside marked working zones. Do not touch looms, materials or works. The booking information prohibits photographs of the artists and warns of many stairs, uneven paving and no admission after the start. The City of Paris listing marks the route as not wheelchair accessible. Confirm sensory, mobility, language and other access needs before booking rather than relying on the building's public profile.",
    evidence:
      "Current City of Paris and Paris je t'aime listings describe a reservation-only guided visit through two active workshops and publish the principal access constraints. Mobilier national explains the Gobelins high-warp technique, current production and history of the site. Current visitor information indicates French delivery, so an English booking interface must not be mistaken for an English-language tour. EA has not taken the visit, entered the workshops or verified which artists and works will be visible.",
    duration: "About one hour and thirty minutes",
    participation:
      "Guided observation inside active weaving workshops, with no visitor making",
    access:
      "Book the specific behind-the-scenes workshop tour in advance. Current listings show a French-language route and significant mobility constraints. Confirm the date, language, meeting point and suitability before paying. Arrive early because late admission is refused. A gallery ticket is not the same experience. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "City of Paris: Behind the scenes at the Gobelins workshops",
        url: "https://www.paris.fr/evenements/les-coulisses-des-ateliers-des-gobelins-66697",
        note: "Current official city listing through April 2027, with reservation, duration, pricing, age framing, venue and wheelchair-access limitation.",
      },
      {
        title:
          "Paris je t'aime: guided tour behind the scenes at the Gobelins Workshops",
        url: "https://ticket.parisjetaime.com/en/other-activities-and-experiences-c11/guided-tour-behind-the-scenes-at-the-gobelins-workshops-134",
        note: "Official destination booking description of the two active workshops, stairs, uneven surfaces, photography restriction, punctuality rule and current calendar.",
      },
      {
        title: "Mobilier national: Manufacture des Gobelins",
        url: "https://mobiliernational.culture.gouv.fr/fr/nous-connaitre/les-manufactures/manufacture-des-gobelins",
        note: "First-party account of the high-warp method, historic site, current looms and relationship between traditional technique and contemporary work.",
      },
      {
        title: "Paris je t'aime: Paris behind the scenes",
        url: "https://parisjetaime.com/eng/article/paris-behind-the-scenes-a972?dpl43p=2",
        note: "Current official destination article identifies the Gobelins workshop tour as available in French. EA therefore does not promise English delivery.",
      },
    ]),
  },
  {
    id: "paris-sewer-museum",
    slug: "see-what-keeps-paris-moving-underground",
    title: "See what keeps Paris moving underground",
    summary:
      "Descend beneath the postcard city into a museum threaded through part of the working sewer network, where water, maintenance and public health become visible.",
    field: "work",
    place: "Paris",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    status: "public_guide",
    demo: false,
    ...guideImage("paris-sewer-museum"),
    kernel:
      "Enter the Paris Sewer Museum near Pont de l'Alma and follow its permanent exhibition below ground. Begin in the dry gallery with the history, water cycle and people who operate the system. The route then enters a wet gallery within the active network, where equipment, reservoirs and flowing water make the city's hidden work tangible. Give the machinery and job descriptions as much attention as the novelty of being underground. This is a public museum route through an industrial site, not an invitation to explore tunnels independently.",
    rootedness:
      "Paris is usually introduced through what rises above the street. The sewer network explains how the same dense city became workable, healthier and able to grow. The museum occupies the Alma plant and connects nineteenth-century engineering to present maintenance, water management and the people who keep the network operating. Its value is not that the setting is strange. It is that necessary urban work becomes briefly legible.",
    shift:
      "From seeing Paris as a collection of monuments to noticing the systems and workers that let the city function.",
    humanReturn:
      "Back at street level, look once at a drain, service cover or slope in the pavement and remember that a second city is carrying water below. Infrastructure is easiest to ignore when it works.",
    responsibility:
      "Stay on the museum route and follow staff instructions. This is a real sewer environment with humidity, cooler temperatures, water, industrial equipment and possible odours. Wear stable footwear and decide whether an underground setting suits you. The museum publishes access provisions, but confirm any mobility, sensory or health requirement directly because EA has not audited the route. Do not touch equipment or enter closed passages.",
    evidence:
      "The museum's current official pages describe a renovated public route through dry interpretation galleries and a wet section of the active sewer network, with opening hours, booking and access information. The City of Paris documents the 2021 redesign and identifies the Alma site as an operating facility. EA has not visited, assessed cleanliness, measured environmental conditions or verified access for an individual visitor.",
    duration: "Allow about one hour",
    participation:
      "Self-guided museum visit through interpreted galleries in an active sewer site",
    access:
      "Check the official museum site before travelling. It currently publishes opening Tuesday to Sunday, 10:00 to 17:00, with last admission at 16:00, and offers online ticketing. Flooding or operational conditions can affect access. Confirm the live timetable, ticket, audio guide and any specific access need. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Paris Sewer Museum: visitor information",
        url: "https://musee-egouts.paris.fr/en/",
        note: "First-party current opening information, address, ticket route, museum scope and public description of the sewer network and its work.",
      },
      {
        title: "Paris Sewer Museum: prepare your visit",
        url: "https://musee-egouts.paris.fr/en/prepare-your-visit-at-the-museum-of-sewers/",
        note: "First-party practical information on visit length, tickets and the museum's published access provisions. EA treats these as claims to confirm, not an access audit.",
      },
      {
        title: "Paris Sewer Museum: permanent exhibition",
        url: "https://musee-egouts.paris.fr/en/discover-the-museum-today/permanent-exhibition-of-the-museum-of-sewers/",
        note: "First-party description of the underground route, active sewers and industrial systems presented in the permanent exhibition.",
      },
      {
        title: "City of Paris: the Paris Sewer Museum",
        url: "https://www.paris.fr/pages/le-musee-des-egouts-retrouve-la-lumiere-19500",
        note: "Official city account of the renovated 2021 museum, Alma operating site, interpretive galleries, equipment and working-network section.",
      },
    ]),
  },
];
