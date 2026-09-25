import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-24",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-25",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

/** Original public-source guides. Primary daily allocations are in discovery-batch-42. */
export const guideBatch42: PublicExperience[] = [
  {
    id: "seoul-gwangjang-bindaetteok",
    slug: "follow-the-mung-bean-to-the-hot-pan",
    title: "Follow the mung bean to the hot pan",
    summary:
      "At Seoul's Gwangjang Market, let a freshly fried bindaetteok connect the grinding stone, the batter and the first crisp mouthful.",
    field: "taste",
    place: "Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    ...common,
    ...guideImage("seoul-gwangjang-bindaetteok"),
    kernel:
      "Look for the preparation before choosing your seat. From the public side of a working counter, notice the ground beans, the ladle and the change at the edge of the pan. Order a bindaetteok, confirm the price and portion, then taste it while the contrast between crust and centre is still clear. Soonheenae is one documented entry point, not a verdict on every stall.",
    rootedness:
      "Gwangjang is a working market with a famous food alley, not a set built for a tasting tour. Bindaetteok gives a very busy place one intelligible sequence. The Korea Tourism Organization describes mung beans ground on a millstone at Soonheenae, with kimchi, bracken and pork in the mixture. A familiar-looking pancake turns out to begin somewhere quite different.",
    shift:
      "From searching for the most photographed snack to noticing the ingredient and work that give it texture.",
    humanReturn:
      "The useful souvenir may be a new question about what holds a pancake together.",
    responsibility:
      "Mung bean does not mean vegetarian or allergen-free. Ask about pork, seafood, kimchi ingredients, soy, wheat and shared cooking surfaces. Keep out of the hot preparation area and ask before photographing people. English explanation, a seat and an uninterrupted view of grinding are not guaranteed. This is a food purchase, not a cooking lesson.",
    evidence:
      "Seoul's tourism authority confirms public food-alley access. The national tourism listing supplies a specific pancake counter, preparation and visitor details. Neither source establishes independent food-quality assessment or today's menu. EA has not visited or tasted the food. The documentary photograph is from 2016, not evidence of current staff or prices.",
    duration:
      "A self-paced food stop. Food-alley hours and individual stall hours differ",
    participation:
      "Watch only from the public side, then purchase a freshly prepared pancake. No hosted tasting is included",
    access:
      "Use Jongno 5-ga as a starting point. Soonheenae is listed at 5 Jong-ro 32-gil, currently 9am to 9pm with last orders at 8.30pm. Check the counter before settling in. No EA booking or partnership.",
    guideReview: review("public_hospitality", [
      {
        title: "VISITKOREA: Soonheenae Bindaetteok",
        url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=194106",
        note: "National tourism listing for the counter, mung-bean preparation, ingredients, address and hours.",
      },
      {
        title: "Visit Seoul: Gwangjang Market",
        url: "https://english.visitseoul.net/PalaceArea/Gwangjang-Market/ENP000286",
        note: "Market context, public food-alley access and transport. General market hours are not every stall's hours.",
      },
    ]),
  },
  {
    id: "lyon-halles-tasting",
    slug: "taste-lyon-one-market-counter-at-a-time",
    title: "Taste Lyon one market counter at a time",
    summary:
      "Turn a walk through Les Halles into a sequence of tastes, from savoury counters to the pink sweetness of praline tart.",
    field: "taste",
    place: "Lyon",
    country: "France",
    countrySlug: "france",
    regionSlug: "lyon",
    ...common,
    ...guideImage("lyon-halles-tasting"),
    kernel:
      "Reserve the two-and-a-half-hour Halles food tour and arrive hungry for explanations as well as samples. Ask what each counter adds to the city's food vocabulary. A cheese, a quenelle and a piece of praline tart are more revealing when you can connect their names to a person serving them. Leave room to revisit a counter independently after the guided part.",
    rootedness:
      "Les Halles de Lyon Paul Bocuse gathers specialist food businesses under one roof. Its reputation can make a first visit feel like an exam in knowing what to order. A small guided sequence offers another entry, through the differences between products rather than a claim that every stall is equally representative or exceptional.",
    shift:
      "From recognising a city's culinary reputation to having a few concrete tastes with which to question it.",
    humanReturn:
      "A menu later in the trip can feel less like a list of unfamiliar names.",
    responsibility:
      "The advertised sequence includes charcuterie, oysters, cheese, wine, quenelles and praline tart. Check allergens and dietary requirements before paying. The listing says this itinerary is unsuitable for several restrictions, including avoiding pork or alcohol. Do not assume substitutions, alcohol-free pairings or a child-friendly version. Ask about mobility and the language of your departure. Never block a working counter for a photograph.",
    evidence:
      "ONLYLYON sells the Lyon Food Tour programme with five tasting stops and a minimum departure group of four, while allowing individual reservations. The market's own site establishes the venue separately. Stops may change. EA has not visited, tasted the samples or assessed the guide, and the programme is not an EA selection or partnership.",
    duration:
      "Two and a half hours on a confirmed departure. General hall opening is not tour availability",
    participation:
      "Guided walking and included tastings. This is not a cooking workshop",
    access:
      "Reserve Food Tour Les Halles through ONLYLYON. Follow the confirmation for the Richart entrance meeting point at 102 Cours Lafayette and arrive five minutes early. Confirm the minimum group has been met.",
    guideReview: review("public_programme", [
      {
        title: "ONLYLYON: Food Tour Les Halles",
        url: "https://boutique.visiterlyon.com/food-tour-les-halles-2h30.html",
        note: "Public booking, duration, five stops, departure threshold, dietary exclusions and meeting instructions.",
      },
      {
        title: "Halles de Lyon Paul Bocuse",
        url: "https://www.halles-de-lyon-paulbocuse.com/",
        note: "The market's own venue and trader context, distinct from the booked tour.",
      },
    ]),
  },
  {
    id: "bologna-gelatology",
    slug: "taste-what-changes-inside-a-spoonful",
    title: "Taste what changes inside a spoonful",
    summary:
      "Near Bologna, compare gelato with a little history behind the spoon at the Carpigiani Gelato Museum.",
    field: "taste",
    place: "Anzola dell'Emilia, near Bologna",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "anzola-dellemilia",
    ...common,
    ...guideImage("bologna-gelatology"),
    kernel:
      "Choose Gelatology, the museum's guided visit and comparative tasting, rather than one of its making classes. Let the machines and displays come first. At the tasting, slow down enough to notice texture and temperature before searching for elaborate flavour words. Ask what changed between samples and which part of that change belongs to technique.",
    rootedness:
      "The museum sits in Anzola dell'Emilia at Carpigiani, a manufacturer whose equipment is part of gelato production. That industrial setting is useful context, but also a perspective to recognise. You are entering a company's account of gelato history, not an independent competition between shops or a claim that all Italian frozen desserts follow one method.",
    shift:
      "From choosing only by flavour to asking what makes a spoonful feel the way it does.",
    humanReturn:
      "The next gelateria can become a place for closer tasting rather than a longer queue.",
    responsibility:
      "Declare allergies and dietary requirements on the request and reconfirm them before tasting. Milk, eggs, nuts and other allergens may be relevant. Do not assume photographed flavours will be served. Confirm language, children's participation and mobility access. This programme includes tasting, not automatically a hands-on gelato lesson.",
    evidence:
      "The museum publishes Gelatology as a ninety-minute comparative tasting and museum experience. Its booking process is a request requiring confirmation, not a guarantee that any selected date is available. EA has not attended or tasted the programme. The museum and booking page are sources from the same institution.",
    duration:
      "Ninety minutes, plus travel outside Bologna. Published booking windows run Wednesday to Saturday",
    participation:
      "Guided museum visit and comparative tasting. Choose a different programme if you want to make gelato",
    access:
      "Request Gelatology directly at Via Emilia 45, Anzola dell'Emilia. Wait for confirmation of time, fee and language before arranging transport. No EA ticketing or commission.",
    guideReview: review("public_programme", [
      {
        title: "Gelato Museum: Gelatology",
        url: "https://www.gelatomuseum.com/en/book-your-gelato-experience/gelatology-300",
        note: "Specific ninety-minute programme, comparative tasting and confirmation-based booking.",
      },
      {
        title: "Carpigiani Gelato Museum",
        url: "https://www.gelatomuseum.com/en",
        note: "Museum location and separate visit formats. Making is not inferred from a tasting booking.",
      },
    ]),
  },
  {
    id: "delft-tile-painting",
    slug: "give-delft-blue-a-line-of-your-own",
    title: "Give Delft blue a line of your own",
    summary:
      "At Royal Delft, use a brush on a ceramic tile and discover how much attention a small decorative line can ask for.",
    field: "make",
    place: "Delft",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "delft",
    ...common,
    ...guideImage("delft-tile-painting"),
    kernel:
      "Book the public tile-painting workshop and begin with the available pattern choices. Follow the instructor's sequence, then watch what pressure and the amount of paint do to a line. You do not need to cover every part of the tile. Leave the object for its finishing process and decide where it will be sent before treating it as a souvenir for your suitcase.",
    rootedness:
      "Royal Delft places a small visitor workshop inside an institution associated with the city's blue-and-white ceramics. The value is not pretending that one session makes you a Delftware painter. It is being able to look at a finished surface and recognise a few decisions that were previously invisible.",
    shift:
      "From reading a decorative surface as a pattern to seeing it as a sequence of brush movements.",
    humanReturn:
      "A ceramic object at home may start to reveal the hand that made its marks.",
    responsibility:
      "The public workshop is for ages seven and over. The standard item is a tile, even when publicity photographs show other ceramic forms. Shipping within the Netherlands is included, overseas shipping costs extra and the operator says collection is not possible. Confirm delivery times, language, mobility needs and whether your chosen ticket includes museum admission.",
    evidence:
      "Royal Delft publishes a recurring individual workshop with online booking. Delft's tourism service separately describes its painting activities, but its dated listing is not used to establish current departures. EA has not attended, evaluated the teaching or inspected a participant's finished tile.",
    duration:
      "Allow roughly one to one and a half hours. Confirm the current session length and delivery schedule",
    participation:
      "Paint a ceramic tile with instruction. Finishing and delivery happen after the visit",
    access:
      "Use Royal Delft's current workshop calendar for Rotterdamseweg 196. The advertised individual session is at 2pm from Tuesday to Sunday, subject to availability. No EA partnership.",
    guideReview: review("public_programme", [
      {
        title: "Royal Delft Museum: painting workshop",
        url: "https://museum.royaldelft.com/en/activities/painting-workshop/",
        note: "Current individual tile workshop, age, booking and shipping conditions.",
      },
      {
        title: "InDelft: painting Delft blue",
        url: "https://www.indelft.nl/nl/uitagenda/uitagenda-delft/3701544212/schilderworkshop-delfts-blauw",
        note: "Destination context and documentary workshop photographs. Dated listing is not evidence of current availability.",
      },
    ]),
  },
  {
    id: "grasse-galimard-perfume",
    slug: "build-a-scent-one-decision-at-a-time",
    title: "Build a scent one decision at a time",
    summary:
      "At a Grasse perfume studio, compare scent materials and assemble a personal eau de parfum with guidance.",
    field: "make",
    place: "Grasse",
    country: "France",
    countrySlug: "france",
    regionSlug: "grasse",
    ...common,
    ...guideImage("grasse-galimard-perfume"),
    kernel:
      "Reserve an individual creation workshop at Galimard's Studio des Fragrances. Work through the materials with the instructor and notice how a note changes the direction of a mixture. Keep your ambition small enough to smell clearly. The point is a series of choices you can remember, not reproducing a famous perfume or finding a scent that supposedly defines your personality.",
    rootedness:
      "Grasse offers perfume as a place-based practice as well as a finished purchase. A studio session makes part of that practice tangible through comparison and composition. It does not provide access to every part of the regional industry, a flower harvest or professional perfumer training.",
    shift:
      "From asking whether a perfume smells good to asking what one addition changes.",
    humanReturn:
      "A familiar scent may become easier to describe without reaching immediately for a brand name.",
    responsibility:
      "The minimum age is eight, with an adult present for children. Confirm the language of your slot and discuss fragrance sensitivities before booking. The included 100ml eau de parfum comes in a laboratory bottle, with other bottles optional. This workshop does not include a detailed perfume-history or raw-materials tour. Creation is for personal use, not permission to market the formula.",
    evidence:
      "The current French booking page specifies one hour forty-five minutes and individual reservations at the Grasse studio. Its details take precedence over older English prices. EA has not attended, assessed the instruction or tested a formula. No factory visit, flower-field access or EA partnership is implied.",
    duration:
      "One hour forty-five minutes. Book a specific session and arrive on time",
    participation:
      "Compare materials and compose a personal eau de parfum under direction",
    access:
      "Book the Grasse individual creation workshop at 5 route de Pégomas. This is not the factory address or the separate Eze studio. Confirm language and current fee in your booking.",
    guideReview: review("public_programme", [
      {
        title: "Galimard: individual creation in Grasse",
        url: "https://www.galimard.com/produit/atelier-de-creation-de-parfum-a-grasse-particuliers-2",
        note: "Current French booking details, studio address, age, duration, language choices and included bottle.",
      },
      {
        title: "Galimard: Studio des Fragrances",
        url: "https://www.galimard.com/en/studio-des-fragrances",
        note: "Studio context and actual creation-workshop photograph. Current French booking terms control.",
      },
    ]),
  },
  {
    id: "tokyo-ganso-wax-food",
    slug: "make-a-lunch-you-cannot-eat",
    title: "Make a lunch you cannot eat",
    summary:
      "In Tokyo's kitchenware district, turn wax into tempura and lettuce at a food-replica workshop.",
    field: "make",
    place: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    ...common,
    ...guideImage("tokyo-ganso-wax-food"),
    kernel:
      "At Ganso Shokuhin Sample-ya in Kappabashi, watch the demonstration before putting your hands to the wax. A sheet becomes a lettuce leaf and a small movement gives imitation batter its uneven edge. Make the standard two pieces of tempura and one lettuce, then look again at restaurant-window food models outside. They are no longer simply pictures in three dimensions.",
    rootedness:
      "Kappabashi supplies the visible and practical language of eating, from kitchen tools to food displays. This short workshop opens one older wax technique behind that visual language. It does not claim that all modern restaurant replicas use the same material or that a visitor session covers the whole craft.",
    shift:
      "From believing your eyes at a restaurant window to noticing how texture has been constructed.",
    humanReturn:
      "A convincing fake can teach you to look more closely at something entirely ordinary.",
    responsibility:
      "The workshop uses hot water and requires following safety instructions. Teaching is in Japanese with limited English support. The operator recommends an interpreter for visitors who cannot understand the instructions. Participation starts at first grade of primary school, and preschool children cannot enter the workshop. It is upstairs, so check access needs. Video recording is prohibited. Nothing you make is edible.",
    evidence:
      "The operator publishes a forty-minute standard wax session, its two-tempura-and-lettuce format and a reservation route. The English page explicitly limits language support. EA has not attended or assessed the instruction. The photograph shows finished replicas, not a meal included in the visit.",
    duration: "About forty minutes. Arrive ten minutes before the booked start",
    participation:
      "Make wax food replicas with instruction and take them away. Not cooking or tasting",
    access:
      "Reserve the standard Kappabashi workshop through Ganso Sample-ya. The shop is at 3-7-6 Nishi-Asakusa, Taito. Confirm interpreter needs before paying. No EA booking or partnership.",
    guideReview: review("public_programme", [
      {
        title: "Ganso Sample-ya: Kappabashi experience",
        url: "https://www.ganso-sample.com/en/shop/kappabashi/experience/",
        note: "Format, duration, age, safety, language limits and recording rules.",
      },
      {
        title: "Ganso Sample-ya: current experience menu",
        url: "https://www.ganso-sample.com/experience/",
        note: "Japanese programme and booking options. Special menus are not silently substituted for the standard session.",
      },
    ]),
  },
  {
    id: "watergang-wetlands-canoe",
    slug: "paddle-below-waterlands-low-bridges",
    title: "Paddle below Waterland's low bridges",
    summary:
      "North of Amsterdam, follow a guide through narrow reed-lined channels where the next bridge sets the pace.",
    field: "move",
    place: "Watergang, Waterland",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "watergang",
    ...common,
    ...guideImage("watergang-wetlands-canoe"),
    kernel:
      "Choose the two-hour Fresh Air canoe tour and travel to Watergang rather than an Amsterdam departure point. Once afloat, let a narrow channel and a low bridge make you coordinate your movements. Pause when the guide asks and look along the reeds instead of trying to cover distance. The pleasure is in discovering how little height you need to see a landscape differently.",
    rootedness:
      "Waterland's waterways offer a very different scale from Amsterdam's busy canals. A guided canoe trip enters that landscape through physical decisions: paddle, turn, duck and wait. Keep it specific to this managed visitor route, not a claim of access to every wetland or an invitation to leave the marked channels.",
    shift:
      "From looking across a flat landscape to moving within its small changes of width and clearance.",
    humanReturn:
      "You may remember the bridge you slowed for more clearly than the distance you travelled.",
    responsibility:
      "You need enough fitness to paddle and flexibility to pass under low bridges. The stated minimum age is seven. Confirm swimming expectations, buoyancy equipment, language and individual suitability before booking. Wind, cold and rain can affect operation. Do not approach nests, feed wildlife or assume particular birds will appear. This is not an unguided canoe rental.",
    evidence:
      "Wetlands Safari publishes the Fresh Air tour as a two-hour programme from Watergang, with Wednesday, Friday and Sunday departures subject to booking and weather. Its FAQ explains the physical demands. EA has not paddled the route or assessed its safety. The operator's different day and sunset tours have different meeting arrangements and inclusions.",
    duration:
      "Two hours on the water programme, plus independent travel to Watergang",
    participation:
      "Guided canoeing through a wetland landscape. No wildlife encounter is guaranteed",
    access:
      "Reserve Fresh Air directly with Wetlands Safari and follow the confirmation for Dorpsstraat 21, Watergang. Do not use the Amsterdam Noord meeting instructions for another tour. No EA transfer or package.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Wetlands Safari: Fresh Air canoe tour",
          url: "https://www.wetlandssafari.nl/nl/english/2025-2/",
          note: "Current two-hour programme, Watergang meeting address, age and departure pattern.",
        },
        {
          title: "Wetlands Safari: questions and requirements",
          url: "https://www.wetlandssafari.nl/nl/english/tourinformatie/faq/",
          note: "Fitness, low bridges, weather and the distinction between guided tours and independent hire.",
        },
      ],
      "2026-10-25",
    ),
  },
  {
    id: "vancouver-grand-cycle",
    slug: "join-vancouvers-edges-by-bicycle",
    title: "Join Vancouver's edges by bicycle",
    summary:
      "Link forest, seawall, market and city streets on a guided ride that gives Vancouver's separate views a continuous shape.",
    field: "move",
    place: "Vancouver",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "vancouver",
    ...common,
    ...guideImage("vancouver-grand-cycle"),
    kernel:
      "Book Cycle City's Grand Tour and treat the bicycle as a way of joining scenes you might otherwise visit separately. Notice the transition from Stanley Park to the seawall, then from the water's edge to food counters and older streets. Use a stop to ask what changed around the route. Keep enough energy for the second half rather than turning every pause into another errand.",
    rootedness:
      "Vancouver's park, shoreline and neighbourhoods can feel disconnected on a list of attractions. A guided ride connects them at a human pace, with a market pause rather than a bus transfer. The route is one introduction to the city, not comprehensive local history or Indigenous interpretation by default.",
    shift:
      "From collecting separate Vancouver views to understanding how the water, park and streets meet.",
    humanReturn:
      "A place can become easier to navigate when you remember the transitions as well as the landmarks.",
    responsibility:
      "The advertised distance is about twenty kilometres over five hours. You must be comfortable cycling, including shared and urban sections. A mostly protected route is not traffic-free. Confirm age, bike fit, accessibility needs and tour language before booking. Dress for rain and changing temperatures, wear the supplied helmet and follow the guide. Lunch at the market is purchased separately.",
    evidence:
      "Cycle City publishes the Grand Tour's duration, approximate distance, included bike and helmet, and broad route. Its FAQ clarifies advance booking, equipment and weather policy. EA has not ridden the route or assessed the guide. Both sources belong to the operator and do not independently establish safety or quality.",
    duration:
      "About five hours and twenty kilometres, with stops. Keep most of the day free",
    participation:
      "A guided group bicycle ride, not simply bike rental. Food purchases are separate",
    access:
      "Reserve the Grand Tour and arrive twenty minutes early at the tour office, 648 Hornby Street. The neighbouring rental shop has a different street number. Check the live calendar and cancellation terms.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Cycle City: Vancouver Grand Tour",
          url: "https://cyclevancouver.com/bike-tours/the-grand-tour/",
          note: "Specific public tour, route, duration, distance, equipment and meeting instructions.",
        },
        {
          title: "Cycle City: visitor questions",
          url: "https://cyclevancouver.com/about/faqs/",
          note: "Advance booking, weather, bike fit and distinction between tour and rental addresses.",
        },
      ],
      "2026-10-25",
    ),
  },
  {
    id: "cape-town-granger-kayak",
    slug: "see-table-mountain-from-a-kayak",
    title: "See Table Mountain from a kayak",
    summary:
      "Paddle with a guide from Granger Bay and let Cape Town's familiar mountain become the backdrop to a much smaller movement.",
    field: "move",
    place: "Cape Town",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    ...common,
    ...guideImage("cape-town-granger-kayak"),
    kernel:
      "Choose the Cape Town sea-kayak departure, not the operator's Hout Bay trip. After the briefing, share a stable double kayak and find a rhythm with your paddling partner. Look back toward the city when the guide says it is appropriate to pause. Let the coastline and the work of steering be the experience, whether or not any wildlife appears.",
    rootedness:
      "A launch from Granger Bay changes the angle on a city often introduced through its mountain silhouette. At water level the same outline sits behind harbour edges, wind and small waves. It is a guided coastal outing, not access to a marine animal encounter or a promise of empty water.",
    shift:
      "From looking at the bay as scenery to responding to it one paddle stroke at a time.",
    humanReturn:
      "A familiar postcard view can acquire the memory of effort, balance and a shared rhythm.",
    responsibility:
      "This is cold ocean water, not a swimming pool. Conditions can cancel or change a trip. The operator states age ten and over, an adult for under-eighteens and a maximum weight of 120kg. Confirm fitness, medical concerns, language and ability to enter the kayak directly. Wear the provided buoyancy aid and stay with the guide. Never pursue, touch or feed wildlife.",
    evidence:
      "Kayak Adventures publishes a two-hour Cape Town trip and a detailed meeting route through the Granger Bay hotel property to the CPUT Survival Centre. Its FAQ supplies age and weight limits. EA has not paddled this route or assessed its safety. Animals, calm seas and a particular mountain view are not guaranteed.",
    duration:
      "About two hours, with weather determining whether the departure can operate",
    participation:
      "Guided sea kayaking in double kayaks. Solo visitors can book, subject to the operator's pairing arrangements",
    access:
      "Book the Cape Town departure directly. Follow the confirmation for the Radisson Collection entrance at 100 Beach Road and the CPUT Survival Centre meeting point. Do not go to Hout Bay. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Kayak Adventures: Cape Town kayaking",
          url: "https://kayakadventures.capetown/cape-town-kayaking",
          note: "Cape Town programme, duration, launch and exact meeting instructions.",
        },
        {
          title: "Kayak Adventures: participation questions",
          url: "https://kayakadventures.capetown/faqs",
          note: "Age, weight, equipment and weather boundaries. Promotional safety language is not adopted as an EA assessment.",
        },
      ],
      "2026-10-25",
    ),
  },
  {
    id: "amsterdam-micropia",
    slug: "look-for-the-life-too-small-to-see",
    title: "Look for the life too small to see",
    summary:
      "At Amsterdam's Micropia, use microscopes and living displays to make an ordinarily invisible world worth a longer look.",
    field: "learn",
    place: "Amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    ...common,
    ...guideImage("amsterdam-micropia"),
    kernel:
      "Choose a Micropia ticket and begin with one living display rather than rushing to every interactive station. Look, change your focus and look again. If a laboratory talk fits your visit, ask how the organisms are kept and observed. The most interesting shift may happen later, when an ordinary surface no longer seems quite so empty.",
    rootedness:
      "Micropia is part of ARTIS in Amsterdam's Plantage neighbourhood, but a visit is centred on microbes rather than zoo animals. The museum turns scale into an experience: organisms too small for an unaided glance become visible through equipment, cultures and explanation. Keep that educational framing separate from medical diagnosis or claims about your own health.",
    shift:
      "From treating the invisible as absent to recognising a world that needs another way of looking.",
    humanReturn:
      "A small question about a living thing can stay interesting after the large exhibit has been forgotten.",
    responsibility:
      "Follow staff instructions around specimens and equipment. This is not a laboratory class, body test or health consultation. The museum recommends the experience from around age eight, although younger admission rules differ. Confirm talk language, access needs and current ticket conditions. Displays and demonstrations can change.",
    evidence:
      "ARTIS publishes Micropia admission, daily hours and laboratory-talk times. Its ticketing distinguishes Micropia from the zoo, so a zoo ticket is not inferred as necessary or included. EA has not visited or assessed the exhibits. All current programme information here comes from the institution itself.",
    duration:
      "Allow one to one and a half hours. The published opening is daily from 10am to 5pm",
    participation:
      "Self-paced observation and interactive displays. A laboratory talk depends on the day's schedule and language",
    access:
      "Book Micropia specifically through ARTIS. Check the Plantage entrance and any access requirements before travelling. Other ARTIS attractions need their own ticket or an explicitly combined option.",
    guideReview: review("public_admission", [
      {
        title: "ARTIS: Micropia",
        url: "https://www.artis.nl/en/artis-micropia",
        note: "Microbe museum, visitor experience, recommended age, opening hours and laboratory talks.",
      },
      {
        title: "ARTIS: Micropia tickets",
        url: "https://dagtickets.artis.nl/kaartjes-kopen/micropia",
        note: "Separate Micropia ticket route. No zoo admission or talk language is assumed.",
      },
    ]),
  },
  {
    id: "seoul-cheonggyecheon-museum",
    slug: "read-the-stream-beneath-seouls-streets",
    title: "Read the stream beneath Seoul's streets",
    summary:
      "Begin at Cheonggyecheon Museum, then look at the waterway with its covered-over years and later reconstruction in mind.",
    field: "learn",
    place: "Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    ...common,
    ...guideImage("seoul-cheonggyecheon-museum"),
    kernel:
      "Start inside the museum, not at the stream's best-known downtown viewpoint. Follow the changes from waterway to covered road and back to an open urban channel. Choose one historical image to hold in mind. If conditions allow, continue independently to a public streamside path and compare the exhibition's account with the city moving around you.",
    rootedness:
      "Cheonggyecheon is both a place to walk and a record of decisions about Seoul. The museum's account makes engineering, everyday life and urban change visible behind a pleasant waterside view. It is more useful to ask what was altered and maintained than to assume the present landscape is untouched nature or a complete return to the past.",
    shift:
      "From enjoying a city stream as a finished amenity to noticing the choices that made it possible.",
    humanReturn:
      "The next piece of urban infrastructure might invite a question about what used to occupy its place.",
    responsibility:
      "The museum is east of the familiar Cheonggye Plaza starting point, so plan the correct journey. Streamside access is separate and can close during heavy rain or maintenance. Follow official barriers and weather notices, stay out of the water and do not assume a continuous walk is open. Confirm exhibition language, mobility access and any guided programme.",
    evidence:
      "Seoul Museum of History describes this annex and its account of the stream's transformation. Visit Seoul separately supplies public visitor details. EA has not visited or verified every exhibition label on site. The outdoor continuation is an independent suggestion, not an included guided walk or guaranteed open route.",
    duration:
      "A self-paced museum visit, with an optional separate streamside walk if paths are open",
    participation:
      "Read displays and compare historical images. No guided walk or private infrastructure access is included",
    access:
      "The museum is at 530 Cheonggyecheon-ro, Seongdong-gu. Listed admission is free, Tuesday to Sunday, 9am to 6pm, with Monday and New Year's Day closures. Recheck notices before travelling.",
    guideReview: review("public_admission", [
      {
        title: "Seoul Museum of History: Cheonggyecheon Museum",
        url: "https://museum.seoul.go.kr/eng/about/annex/cheongGyeMuse.jsp",
        note: "Official annex history, exhibition scope, location and documentary building image.",
      },
      {
        title: "Visit Seoul: Cheonggyecheon Museum",
        url: "https://english.visitseoul.net/attractions/Cheonggyecheon%20Museum/ENP004693",
        note: "Official destination visitor listing and admission hours. Outdoor access remains separate.",
      },
    ]),
  },
  {
    id: "melbourne-aboriginal-garden-walk",
    slug: "let-the-garden-be-introduced-through-country",
    title: "Let the garden be introduced through Country",
    summary:
      "Join a First Peoples guide at Melbourne's Royal Botanic Gardens and listen for relationships that a plant label cannot provide.",
    field: "learn",
    place: "Melbourne",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    ...common,
    ...guideImage("melbourne-aboriginal-garden-walk"),
    kernel:
      "Book the Aboriginal Heritage Walk and arrive ready to follow the guide's choice of what to share. Let a plant become a reason to listen, rather than something to identify and move past. Ask a respectful question within the programme. If invited to engage through touch or another sense, follow the invitation rather than assuming it applies to every plant around you.",
    rootedness:
      "The Gardens places this walk in the context of Country and the Eastern Kulin Nations. A First Peoples-led visitor programme offers a specific voice and setting, not permission to generalise across Aboriginal cultures. The experience is strongest when the guide controls the scope and the visitor accepts that some knowledge is not theirs to collect.",
    shift:
      "From seeing a botanical garden as a collection of specimens to listening for relationships between people and place.",
    humanReturn:
      "You can leave with greater attention without leaving with a claim to someone else's knowledge.",
    responsibility:
      "Do not pick, taste or collect plants unless the guide explicitly invites it. Ask before recording or photographing people and do not reproduce stories as if you have permission to teach them. Confirm language, children's participation, terrain and mobility needs. This is a public guided walk, not access to a private ceremony or unrestricted cultural knowledge.",
    evidence:
      "The Gardens' current programme specifies a ninety-minute walk with a First Peoples guide and advance booking. The City of Melbourne separately lists the event, but its older duration and prices are not adopted. EA has not attended or locally validated the interpretation. Individual guides and what is shared can change.",
    duration:
      "One and a half hours. Current listed starts are 10.45am on Tuesday, Wednesday, Thursday, Saturday and Sunday",
    participation:
      "Listen and walk with a guide. Sensory participation follows the guide's invitation",
    access:
      "Book through Royal Botanic Gardens Victoria and follow the confirmation for the Melbourne Gardens Visitor Centre. Recheck the date, fee and weather arrangements. No EA partnership or cultural authority is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Royal Botanic Gardens Victoria: Aboriginal Heritage Walk",
          url: "https://www.rbg.vic.gov.au/melbourne-gardens/whats-on-melbourne/aboriginal-heritage-walk/",
          note: "Current First Peoples-led programme, duration, schedule and meeting point.",
        },
        {
          title: "City of Melbourne: Aboriginal Heritage Walk",
          url: "https://whatson.melbourne.vic.gov.au/things-to-do/aboriginal-heritage-walk",
          note: "Destination context and programme photograph. Primary operator details take precedence over older prices and duration.",
        },
      ],
      "2026-11-25",
    ),
  },
  {
    id: "bath-thermae-welcome",
    slug: "meet-baths-warm-water-under-open-sky",
    title: "Meet Bath's warm water under open sky",
    summary:
      "Leave time between the indoor pool and the rooftop at Thermae Bath Spa, where the city stays in view while the pace changes.",
    field: "restore",
    place: "Bath",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "bath",
    ...common,
    ...guideImage("bath-thermae-welcome"),
    kernel:
      "Reserve a Thermae Welcome session and resist treating its facilities as a list to complete. Spend time in the Minerva pool, then move to the rooftop when you feel ready. Notice the difference between an enclosed room and the open air above the city. The session needs no treatment upgrade to become a deliberate pause in a busy visit.",
    rootedness:
      "Bath's association with warm spring water is visible throughout the city. Thermae offers a contemporary way to enter that water, distinct from looking at the archaeological Roman Baths. Keeping those two experiences separate makes both clearer: one is bathing in a modern facility, the other a historical visit where swimming is not the activity.",
    shift:
      "From seeing Bath's water as something historical to making room for a present-day pause.",
    humanReturn:
      "You may remember the city through a change of pace rather than another completed attraction.",
    responsibility:
      "The main spa is for ages sixteen and over. Read current health, pregnancy and heat-exposure restrictions before booking and seek qualified advice if unsure about suitability. Follow pool rules and take breaks. Phones and photography are restricted for privacy. The rooftop view and comfort depend on weather. This is not a medical treatment or swimming in the Roman Baths.",
    evidence:
      "Thermae publishes the two-hour Welcome format, pools, wellness facilities, age policy and visitor requirements. Advance booking and limited walk-in availability are different routes, not a promise of same-day entry. EA has not bathed here or assessed the facilities. No health outcome or treatment is implied.",
    duration:
      "A two-hour spa session. Check the current changing allowance and arrival instructions",
    participation:
      "Public thermal bathing and included wellness facilities. Treatments require a separate booking",
    access:
      "Reserve Thermae Welcome directly with Thermae Bath Spa on Hot Bath Street. Confirm what your ticket includes and the supplied robe and towel arrangements. No EA booking, discount or partnership.",
    guideReview: review("public_admission", [
      {
        title: "Thermae Bath Spa: visitor questions",
        url: "https://www.thermaebathspa.com/news-info/FAQs",
        note: "Main-spa age, booking, bathing rules and practical restrictions.",
      },
      {
        title: "Thermae Bath Spa: current spa experience",
        url: "https://www.thermaebathspa.com/",
        note: "Thermae Welcome, modern pools and separate treatment offering.",
      },
    ]),
  },
  {
    id: "baden-fortyseven-pools",
    slug: "give-baden-three-hours-of-warm-water",
    title: "Give Baden three hours of warm water",
    summary:
      "In Swiss Baden, move between FORTYSEVEN's thermal pools without turning rest into another schedule to keep.",
    field: "restore",
    place: "Baden",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "baden",
    ...common,
    ...guideImage("baden-fortyseven-pools"),
    kernel:
      "Choose a three-hour admission and begin with the bathing area rather than the full list of facilities. Notice how the room, light and water change between pools, then stay where you are comfortable. Leave time to sit without adding an activity. A visit can be complete without a treatment, a sauna circuit or any test of endurance.",
    rootedness:
      "FORTYSEVEN is a contemporary thermal facility in Baden, Switzerland, not Baden-Baden in Germany. The place-based entry is warm-water bathing, interpreted through a modern building and public admission. Treat claims about mineral water and wellbeing as the operator's framing, not evidence of a medical benefit.",
    shift:
      "From filling a spa visit with treatments to paying attention to the difference between spaces.",
    humanReturn:
      "A pause can have a shape without needing a measurable result.",
    responsibility:
      "Check heat and health restrictions directly before booking. Children must be at least three, and minors need an adult. Different sauna zones have additional age and clothing rules, so this guide centres on clothed thermal bathing. Confirm accessibility and pool-lift arrangements for your needs. Follow privacy rules, take breaks and do not treat admission as a guarantee that every facility is operating.",
    evidence:
      "FORTYSEVEN publishes time-based admission and separates included bathing facilities from paid treatments. Its house rules clarify supervision and zone restrictions. EA has not visited or assessed the pools. The credited photograph shows one pool, not a private booking or a guarantee of quiet conditions.",
    duration:
      "A three-hour admission option, with other ticket lengths available. Check the clock and closing rules",
    participation:
      "Public thermal bathing at your own pace. Massages and other treatments are separate",
    access:
      "Choose the date and entry conditions on FORTYSEVEN's official booking page. Bring swimwear and check towel or robe rental separately. Confirm the Baden, Switzerland address before planning transport.",
    guideReview: review("public_admission", [
      {
        title: "FORTYSEVEN: admission and pricing",
        url: "https://www.fortyseven.ch/en/pricing",
        note: "Time-based entry, inclusions and age conditions. Prices vary by ticket.",
      },
      {
        title: "FORTYSEVEN: house rules",
        url: "https://www.fortyseven.ch/en/hausordnung",
        note: "Bathing, supervision, clothing, sauna and conduct boundaries.",
      },
      {
        title: "FORTYSEVEN: visit and contact",
        url: "https://www.fortyseven.ch/en/contact",
        note: "Location, accessibility information and current arrival details.",
      },
    ]),
  },
  {
    id: "oslo-kok-shared-sauna",
    slug: "let-oslos-waterline-set-a-slower-pace",
    title: "Let Oslo's waterline set a slower pace",
    summary:
      "Share a dockside sauna session at KOK, with the fjord outside and no need to make a cold plunge the point.",
    field: "restore",
    place: "Oslo",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    ...common,
    ...guideImage("oslo-kok-shared-sauna"),
    kernel:
      "Book an individual place in a shared KOK session and arrive with swimwear, water and two towels. Let the host explain the room and the rules. Alternate warmth with a seated break outside if that suits you. A dip is optional, not a requirement for having done the experience properly. The sauna remains by the quay during this booking.",
    rootedness:
      "Oslo's waterfront becomes somewhere to spend unhurried time rather than just a route between buildings. A shared floating sauna places warmth beside the fjord without requiring a private group or cruise. This is a contemporary public programme, not a claim about one universal Norwegian bathing ritual.",
    shift:
      "From passing the water's edge to giving it a small, undistracted part of the day.",
    humanReturn:
      "You can remember the contrast between inside and outside without turning it into a challenge.",
    responsibility:
      "Cold open water, ladders and heat require individual judgement. Follow the host and current water-quality and weather advice. Do not enter the fjord if unsure of conditions or your ability. A shared session does not guarantee a lifeguard or life jacket. Under-eighteens require an adult throughout. Check health suitability, access needs and the specific booking's age policy. Respect other bathers' privacy and do not bring outside alcohol.",
    evidence:
      "KOK publishes shared ninety-minute sessions including changing time, with separate sauna-cruise products. Its FAQ explains supervision and that flotation equipment is not guaranteed for dockside bookings. EA has not attended or assessed safety. A fjord dip, private room and boat journey are not included promises.",
    duration:
      "Ninety minutes including changing, not ninety minutes of uninterrupted sauna time",
    participation:
      "Shared dockside sauna, with optional rest outside. Open-water swimming is not required",
    access:
      "Choose Shared sauna and confirm Langkaia or Aker Brygge in the booking. Follow that location's instructions and bring two towels. These are different meeting points. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "KOK: shared sauna",
          url: "https://koknorge.no/en/sauna-experiences/shared-sauna/",
          note: "Individual shared-session access, duration, locations and distinction from a cruise.",
        },
        {
          title: "KOK: questions and answers",
          url: "https://koknorge.no/en/questions-and-answers-2/",
          note: "Supervision, equipment, changing, weather and conduct conditions. Health claims are not adopted.",
        },
      ],
      "2026-10-25",
    ),
  },
  {
    id: "glasgow-sloans-ceilidh",
    slug: "let-the-caller-bring-you-into-the-dance",
    title: "Let the caller bring you into the dance",
    summary:
      "On a Friday at Sloans in Glasgow, a live band and called steps turn a ballroom into something you can join.",
    field: "gather",
    place: "Glasgow",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "glasgow",
    ...common,
    ...guideImage("glasgow-sloans-ceilidh"),
    kernel:
      "Book the Friday-night ceilidh, listen to the caller and start with the dance being taught rather than trying to remember everything at once. Watch a round if you need to. When you join, offer your partner attention rather than expertise. A missed step is usually a reason to listen again, not a reason to disappear from the floor.",
    rootedness:
      "A public ceilidh gives Scottish social dancing a practical doorway: live music, explained figures and other people willing to move together. Sloans provides one Glasgow setting for that shared evening. It is a ticketed venue event, not a private community gathering or proof that every guest is local.",
    shift:
      "From watching a social dance as a performance to understanding the small cooperation that keeps it moving.",
    humanReturn:
      "Remembering how someone helped you find the next step can outlast remembering the name of the dance.",
    responsibility:
      "The Friday event is for ages eighteen and over. Check stairs, mobility requirements, sound levels and the physical demands of group dancing before booking. Ask before taking a partner's hand or filming others. You can pause or watch when needed. Drinking is not the purpose, and any drinks package is optional. The venue accepts card payments rather than cash.",
    evidence:
      "Sloans publishes a Friday ceilidh with a live band, instruction and public tickets. Its booking page gives an 8.30pm start in the Grand Ballroom. EA has not attended or assessed the teaching. The band, dances, crowd and finish time need confirmation for the specific date.",
    duration:
      "A Friday evening, currently starting at 8.30pm. Check the dated ticket for arrival and finish times",
    participation:
      "Join called group dances or watch a round. No previous ceilidh experience is advertised as necessary",
    access:
      "Buy a Friday Night Ceilidh ticket directly from Sloans, 62 Argyll Arcade / 108 Argyle Street. Do not substitute a private-hire or family-event listing. No EA partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Sloans: Friday Night Ceilidh",
          url: "https://www.sloansglasgow.co.uk/ceilidh",
          note: "Public Friday format, live band, instruction, minimum age and ticket options.",
        },
        {
          title: "Sloans: ceilidh tickets",
          url: "https://www.sloansglasgow.co.uk/book-ceilidh-tickets",
          note: "Current booking route, 8.30pm start, venue address and card-only policy.",
        },
      ],
      "2026-10-25",
    ),
  },
  {
    id: "amsterdam-lunchtime-concert",
    slug: "give-lunch-half-an-hour-of-listening",
    title: "Give lunch half an hour of listening",
    summary:
      "At Amsterdam's Concertgebouw, a lunchtime ticket can open a short concert or rehearsal without asking you to surrender the whole day.",
    field: "gather",
    place: "Amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    ...common,
    ...guideImage("amsterdam-lunchtime-concert"),
    kernel:
      "Look at the lunchtime programme before choosing a date. It may offer chamber musicians, younger performers or an orchestral rehearsal, so decide what you are actually going to hear. Reserve when that event opens, arrive early and give the short programme your full attention. A modest place in the calendar can become the part of a city day that changes its rhythm.",
    rootedness:
      "The Concertgebouw is familiar as an Amsterdam landmark, but a lunchtime programme offers a less formal-scale way to listen inside it. The building is not the whole experience. The changing performers and repertoire make this a calendar-led choice rather than an architectural stop with guaranteed background music.",
    shift:
      "From treating a concert hall as a building to visit to treating it as a room for a shared act of listening.",
    humanReturn:
      "Half an hour can be enough to make room for a piece of music you would not have chosen yourself.",
    responsibility:
      "Dates, hall and programmes vary. Do not assume a daily or always-Wednesday event, a full orchestra, famous soloists or the same hall as the photograph. Follow ticket-release times, age guidance and audience rules. Confirm access needs and any handling charge at checkout. Put devices away and avoid recording unless explicitly permitted.",
    evidence:
      "The Concertgebouw publishes a dated series of approximately thirty-minute lunchtime events and their ticket-release windows. Current listings distinguish concerts from rehearsals. EA has not attended or assessed a performance. The series is described as free, but a ticket is still required and checkout conditions must be checked.",
    duration:
      "Usually thirty minutes around lunchtime. The dated event controls the exact time",
    participation:
      "Sit and listen to the advertised performance or rehearsal. Not a backstage visit or music lesson",
    access:
      "Choose a specific event on the official lunchtime calendar, then follow its ticket-release instructions. Capacity is limited. A listing does not mean tickets are currently available. No EA reservation or partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Concertgebouw: lunchtime concerts",
          url: "https://www.concertgebouw.nl/lunchconcerten",
          note: "Primary dated programme, performance versus rehearsal, ticket-release dates and duration.",
        },
        {
          title: "Concertgebouw: visitor questions",
          url: "https://www.concertgebouw.nl/veelgestelde-vragen",
          note: "Official route to current audience, accessibility, age, recording and ticket-charge policies. Individual event conditions still apply.",
        },
      ],
      "2026-10-09",
    ),
  },
  {
    id: "tokyo-kabukiza-single-act",
    slug: "begin-kabuki-with-a-single-act",
    title: "Begin kabuki with a single act",
    summary:
      "At Tokyo's Kabukiza, a limited single-act ticket lets you begin with one part of the programme rather than a full theatre day.",
    field: "gather",
    place: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    ...common,
    ...guideImage("tokyo-kabukiza-single-act"),
    kernel:
      "Read the month's programme and choose a specific act before buying. A short dance and a longer dramatic scene ask for different kinds of attention. From the dedicated upper-level seating, notice the relationship between movement, voice, costume and music. If caption support is offered for your act, decide in advance whether it would help you stay with the story.",
    rootedness:
      "Kabukiza in Ginza offers a particular institutional doorway into kabuki, with single-act access distinct from a full programme ticket. It makes an initial encounter more manageable without pretending that one excerpt explains the form. The unfinished understanding is part of the invitation to read and listen further.",
    shift:
      "From feeling you must understand an entire theatre tradition before entering to choosing one attentive beginning.",
    humanReturn:
      "You may leave with a gesture, sound or question you want to follow, rather than a claim to have seen it all.",
    responsibility:
      "Single-act seats are on the fourth level, with restricted access to other floors and their shops or restaurants. The view is not the same as the historical interior photograph. Check stairs, seat access, the specific act's length and children's rules. English or Chinese caption devices are not available for every act and cost extra when offered. Follow all performance photography and recording restrictions.",
    evidence:
      "Shochiku publishes single-act ticket rules and monthly act-by-act schedules. The ticket service lists online sales from noon Japan time on the previous day, subject to availability. EA has not attended or assessed the production. A past month's timetable is not reused as a future performance promise, and single-act availability must be checked for the month of travel.",
    duration:
      "One selected act. Length varies substantially, so read its published start and finish times",
    participation:
      "Watch from the dedicated single-act seating. No backstage access or performer interaction",
    access:
      "Use Kabukiweb's current monthly single-act notice and the linked Shochiku ticket service. Follow the dedicated entrance instructions at Kabukiza, Ginza. Do not buy a full programme expecting interchangeable access.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Kabukiweb: single-act tickets",
          url: "https://www.kabukiweb.net/about/ticket/single-act-tickets/",
          note: "Primary explanation of the single-act system and links to current monthly notices.",
        },
        {
          title: "Shochiku: single-act ticket service",
          url: "https://www.e-tix.jp/shochiku_makumi/en/",
          note: "Ticket-release timing, dedicated seating, monthly conditions and caption-device limits.",
        },
        {
          title: "Kabukiweb: Kabukiza",
          url: "https://www.kabukiweb.net/theatres/kabukiza/",
          note: "Theatre location and programme context, not a guarantee of any particular act.",
        },
      ],
      "2026-10-09",
    ),
  },
];
