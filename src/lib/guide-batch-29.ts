import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-14",
  reviewBy: "2026-12-13",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch29: PublicExperience[] = [
  {
    id: "hanoi-daos-care-herbal-bath",
    slug: "let-the-leaves-reach-the-water-first",
    title: "Let the leaves reach the water first",
    summary:
      "Step out of Hanoi's momentum for a Red Dao herbal bath whose long preparation makes the leaves, heat and inherited knowledge harder to overlook.",
    field: "restore",
    place: "Hanoi",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hanoi",
    status: "public_guide",
    demo: false,
    ...guideImage("hanoi-daos-care-herbal-bath"),
    kernel:
      "Reserve Dao's Care's current Red Dao herbal-bath service and begin with the preparation, not a promised result. Ask what the team can responsibly explain about the mixture served that day, then notice the aroma, temperature and wooden tub before entering. The useful shift is from treating the bath as a generic spa add-on to recognising a preparation linked by the provider to Red Dao plant knowledge from Tả Phìn. The Hanoi service is a public urban interpretation of that practice. It is not a village visit and it does not open a family recipe to inspection.",
    rootedness:
      "Vietnam Tourism describes Red Dao bathing recipes as family-held knowledge passed through women and identifies Tả Phìn around Sa Pa as one of the practice's important places. Dao's Care operates in Hanoi as a social enterprise and currently offers the bath within a wider treatment menu. That relationship gives an ordinary visitor a clear public route while keeping the geographic distinction visible. A commercial treatment in the capital should not be presented as the same encounter as bathing in a Red Dao household or community in the mountains.",
    shift:
      "From booking a wellness treatment for an outcome to noticing the many hours of plant selection, brewing and care that arrive before the water does.",
    humanReturn:
      "The next spa menu may prompt a better question: whose knowledge shaped this treatment, and how clearly does the place serving it acknowledge that relationship?",
    responsibility:
      "Read the current menu and disclose pregnancy, cardiovascular concerns, medication, allergies, skin sensitivity or any other relevant health condition directly to the provider before booking. A hot bath is not suitable for everyone. Stop immediately if you feel unwell. Treat all health benefits in provider and tourism copy as claims, not EA medical advice. Confirm the treatment length, temperature, private-room arrangement, price and cancellation terms. Do not ask for a protected recipe, photograph staff or other guests without permission or describe the Hanoi service as a visit to Tả Phìn.",
    evidence:
      "Dao's Care currently publishes a Hanoi service menu with Red Dao herbal baths, prices, opening times and a direct appointment route. The organisation describes itself as a social enterprise employing visually impaired people and ethnic-minority staff. Vietnam Tourism provides wider context on the recipes, preparation and named places where visitors can encounter the practice, but one of its featured rural lodges has since closed. This guide therefore uses the current Hanoi service only. EA has not taken the treatment, assessed its health claims or verified a particular appointment.",
    duration:
      "The bath is listed as a 30-minute element paired with another treatment. Confirm the complete booking length",
    participation:
      "Booked individual wellness service. No village visit, foraging or access to a family recipe is implied",
    access:
      "Use Dao's Care's current menu and appointment route for one of its Hanoi locations. Confirm the chosen branch, full treatment combination, price, room arrangement and any health restriction directly before payment. No EA booking or commission.",
    guideReview: review("public_hospitality", [
      {
        title: "Dao's Care: current service menu and appointment route",
        url: "https://www.daoscare.com/menu",
        note: "First-party menu with the current Red Dao herbal-bath format, treatment combinations, prices, opening times, locations and appointment links.",
      },
      {
        title: "Dao's Care: organisation and contact details",
        url: "https://www.daoscare.com/",
        note: "First-party description of the Hanoi social enterprise, its staff model, locations, opening hours and public contact routes.",
      },
      {
        title: "Vietnam Tourism: Red Dao herbal baths",
        url: "https://www.vietnam.travel/things-to-do/red-dao-herbal-baths",
        note: "National tourism context for Red Dao family knowledge, preparation, wooden tubs and visitor routes. Its rural provider information must be checked separately because one named lodge has closed.",
      },
    ]),
  },
  {
    id: "ambalavao-antemoro-paper-workshop",
    slug: "watch-flowers-enter-the-paper",
    title: "Watch flowers enter the paper",
    summary:
      "Pause on Madagascar's RN7 in Ambalavao and follow bark, pulp, water and fresh flowers until a sheet begins to hold the landscape inside it.",
    field: "work",
    place: "Ambalavao",
    country: "Madagascar",
    countrySlug: "madagascar",
    regionSlug: "ambalavao",
    status: "public_guide",
    demo: false,
    ...guideImage("ambalavao-antemoro-paper-workshop"),
    kernel:
      "Arrange a daylight visit to the Antemoro paper workshop listed by Aux Bougainvillées in Ambalavao. Follow the sequence that staff choose to show, from prepared fibre and beaten pulp to the wet sheet and flower placement. Watch what has to happen before the decorative surface appears. If visitors are invited to try a step, use only the material and tools provided. The dependable public promise is a workshop visit and observation. Making a complete sheet yourself is not published clearly enough to promise in advance.",
    rootedness:
      "The workshop describes Antemoro paper as a handmade material produced from avoha fibre, with a history connected to the Antemoro people and written manuscripts. Ambalavao has become one of the best-known visitor stops for its production. The named workshop is one public business, not authority over every Antemoro maker or the tradition's full history. Its visitor-facing flower papers also belong to a contemporary commercial practice. Let the people doing the work explain the materials and names they use.",
    shift:
      "From seeing a flower-decorated sheet as a souvenir to reading the wet, fibrous surface as the result of repeated physical decisions.",
    humanReturn:
      "A piece of paper may stop looking blank once you have seen how much material, water, time and handwork it takes to make one sheet hold together.",
    responsibility:
      "Contact the workshop before travel to confirm that visitor access, demonstration stages, language support and any fee are current. Stay clear of wet floors, hot preparation, blades and working tables unless staff direct you. Do not interrupt production or touch fibre, flowers, sheets or tools without invitation. Ask before photographing any worker. Buy only what you want and do not present a short observation as apprenticeship or mastery. The spelling Antemoro and Antaimoro varies across sources, so follow the named source when attributing a specific object or account.",
    evidence:
      "Aux Bougainvillées currently publishes an Antemoro paper workshop in Ambalavao with opening hours and direct contact details. Madagascar travel itineraries independently list a visit to the town's paper workshop, but they do not prove hands-on participation. Licensed photographs document fibre beating, flower placement and finishing in Ambalavao. Together these sources support a public workshop visit and careful observation, not a guaranteed class or access to every production stage. EA has not visited the workshop or assessed its working conditions.",
    duration:
      "Allow about one hour after direct confirmation. Production stages may vary during the day",
    participation:
      "Workshop visit and observation, with any hands-on step offered only at staff discretion",
    access:
      "Use the telephone or email published by Aux Bougainvillées to confirm the current visitor format, date, hour, fee and language before arriving. Do not infer a class from the word workshop. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Aux Bougainvillées: Antemoro paper workshop",
        url: "https://www.hotel-ambalavao.com/en/the-antemoro-paper-workshop",
        note: "First-party page naming the Ambalavao workshop and publishing current opening hours, telephone numbers and email. It does not clearly promise a visitor class.",
      },
      {
        title: "Wikimedia Commons: Antemoro paper in Ambalavao",
        url: "https://commons.wikimedia.org/wiki/File:Antaimoro-papier,_Ambalavao_03.JPG",
        note: "CC BY-SA photograph documenting fresh-flower placement during paper production in Ambalavao. It does not prove the current named workshop or visitor access.",
      },
      {
        title: "Madagaskar Travel: southern itinerary",
        url: "https://madagaskar.travel/wp-content/uploads/2022/12/South_with_Tsingy_en.pdf",
        note: "Published visitor itinerary independently listing a possible weekday paper-factory visit in Ambalavao. It is travel-trade context, not proof of hands-on participation.",
      },
    ]),
  },
  {
    id: "sao-tome-clocon-tela-chocolate",
    slug: "taste-the-distance-from-pod-to-bar",
    title: "Taste the distance from pod to bar",
    summary:
      "Use a small São Tomé chocolate-factory visit to follow cacao through texture and flavour without stepping around the islands' difficult plantation history.",
    field: "taste",
    place: "São Tomé",
    country: "São Tomé and Príncipe",
    countrySlug: "sao-tome-and-principe",
    regionSlug: "sao-tome",
    status: "public_guide",
    demo: false,
    ...guideImage("sao-tome-clocon-tela-chocolate"),
    kernel:
      "Request Cloçon Téla's current chocolate-factory visit and use the tasting as a sequence rather than a verdict. Begin with cacao as a fruit, then ask which steps between bean, nib and finished chocolate the visit can actually show that day. Compare aroma, texture and bitterness across the offered samples. Keep one question beside the flavour: where did this cacao grow, and what relationship does the factory have with its growers? A bean-to-bar label can describe production distance. It cannot by itself answer every question about land, labour or value.",
    rootedness:
      "São Tomé and Príncipe's tourism authority traces cacao's arrival under Portuguese colonial rule and acknowledges the enslaved labour behind the roça system. The islands later became the world's largest cacao producer. Cloçon Téla now offers a public factory visit in São Tomé city and presents locally rooted bean-to-bar products. This is a contemporary producer visit, not a plantation tour and not a complete account of the national cacao economy. Keep the pleasure of tasting and the responsibility of historical context in the same visit.",
    shift:
      "From treating origin as a premium word on a wrapper to asking how fruit, fermentation, roasting, craft, labour and history survive inside one bar.",
    humanReturn:
      "The next chocolate label may give you more to investigate than a percentage, beginning with who grew the cacao and where value was added.",
    responsibility:
      "Request the appointment before travel and confirm the address, language, current price, payment method, tasting content, allergens and accessibility. Do not assume that a city-factory visit includes a farm, harvest or every production step. Follow hygiene and photography rules around food preparation. Treat plantation buildings and history as evidence of a system shaped by slavery and coercive labour, not as romantic scenery. Ask precise questions without demanding that staff provide a complete national history during a commercial visit.",
    evidence:
      "Cloçon Téla currently publishes a 90-minute chocolate-factory visit for 125 STN with an appointment-request route. São Tomé and Príncipe's tourism authority recommends factory visits and provides direct context on cacao, the roças and enslaved labour. UNESCO's record for the roças describes the plantation landscape and monoculture system. These sources support a booked urban factory visit and a necessary historical frame. They do not establish a farm visit, guaranteed production activity or an independent EA assessment of the company. EA has not attended the visit or tasted its products.",
    duration: "Ninety minutes according to the current booking page",
    participation:
      "Guided factory visit with tasting. No farm, harvest or hands-on production is implied",
    access:
      "Request the current factory visit directly through Cloçon Téla's booking page. Obtain written confirmation of the address, date, language, price, inclusions and payment terms before building a day around it. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Cloçon Téla: reserve a chocolate-factory visit",
        url: "https://www.clocontela.com/book-online",
        note: "First-party appointment page publishing a 90-minute factory visit and a current price of 125 STN. The page does not promise a plantation or harvest component.",
      },
      {
        title:
          "São Tomé and Príncipe Tourism: local ingredients and cacao history",
        url: "https://turismo.gov.st/en/pourquoi-sao-tome-et-principe/culture-et-patrimoine/local-ingredients",
        note: "National tourism account of cacao's arrival, the roça system, the islands' production history and the enslaved labour behind it.",
      },
      {
        title:
          "UNESCO World Heritage Centre: the roças of São Tomé and Príncipe",
        url: "https://whc.unesco.org/en/tentativelists/6644/",
        note: "State-submitted heritage record describing the plantation landscape, cacao and coffee monoculture and the way the system transformed the islands.",
      },
      {
        title: "Wikimedia Commons: cacao pod on São Tomé",
        url: "https://commons.wikimedia.org/wiki/File:Cabosse_de_cacao_%C3%A0_S%C3%A3o_Tom%C3%A9_(5).jpg",
        note: "CC BY-SA photograph of a freshly opened cacao pod on the island of São Tomé. It does not depict Cloçon Téla, its factory or the current tour.",
      },
    ]),
  },
];
