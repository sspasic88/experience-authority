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

export const guideBatch26: PublicExperience[] = [
  {
    id: "monument-valley-guided-backcountry",
    slug: "read-monument-valley-beyond-the-scenic-drive",
    title: "Read Monument Valley beyond the scenic drive",
    summary:
      "Choose a guide listed by Navajo Nation Parks and let a familiar horizon open into landforms, routes and limits the public road cannot explain.",
    field: "learn",
    place: "Monument Valley Navajo Tribal Park",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "monument-valley",
    status: "public_guide",
    demo: false,
    ...guideImage("monument-valley-guided-backcountry"),
    kernel:
      "Begin with the Navajo Nation Parks and Recreation list, then choose one currently listed operator whose published route, duration and conditions fit your visit. A guided backcountry route can move beyond the 17-mile scenic drive to formations and restricted areas that independent visitors cannot enter. Ask the guide what can responsibly be explained on that particular route, then let their sequence and boundaries lead. The point is not to collect a secret place. It is to understand why access, names and stories belong within a Navajo-managed visit.",
    rootedness:
      "Monument Valley is a Navajo Tribal Park, managed for the benefit and enjoyment of the Navajo Nation. The official operator list is the essential starting point because commercial availability elsewhere does not establish authorisation. A guide may add geology, family knowledge, language or cultural context, but no tour can stand for every Diné perspective or make every place and story public. This guide covers only the route offered by one currently listed operator.",
    shift:
      "From recognising two famous buttes to noticing that the view is also governed land, with names, routes and knowledge that do not become public simply because a camera can see them.",
    humanReturn:
      "The next iconic landscape may prompt a better first question: who decides how visitors enter, what can be shared and where the road should stop?",
    responsibility:
      "Book only through an operator currently listed by Navajo Nation Parks and Recreation, and recheck park hours, fees, weather and route conditions shortly before arrival. Follow the guide's instructions on photography, recording, names, stories and restricted places. Never leave the authorised route, climb formations, enter homes or ceremonial spaces, collect natural material or treat residents as subjects. Heat, dust, rough roads and open vehicles can affect suitability. Ask the operator about mobility, children, seating and weather protection before booking.",
    evidence:
      "Navajo Nation Parks and Recreation currently publishes the authorised Monument Valley operator list, 2026 fee notice, seasonal visitor hours and restrictions on independent vehicle access. One listed operator publicly describes a backcountry tour that combines the Valley Drive with stops beyond it. That example confirms a bookable format, not the content of every tour or permission to enter any place independently. EA has not taken the tour, assessed an operator or verified a guide's account on a particular day.",
    duration:
      "Operator-specific. Current guided backcountry examples begin at about two and a half hours",
    participation:
      "Guided vehicle route with stops determined by the selected authorised operator",
    access:
      "Choose and book one operator from the current Navajo Nation Parks and Recreation list. Confirm the exact route, vehicle, meeting point, inclusions, cancellation terms and photography rules directly on that operator's current page. A park entry payment and a tour booking may be separate. No EA booking, ranking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Navajo Nation Parks: Monument Valley tour operators",
        url: "https://navajonationparks.org/guided-tour-operators/monument-valley-tour-operators/",
        note: "Current first-party list of authorised Monument Valley guides and operators, with 2026 park fees, seasonal hours and independent-drive restrictions.",
      },
      {
        title: "Monument Valley Tours: backcountry tour",
        url: "https://monumentvalleytours.com/product/backcountry-tour/",
        note: "A currently listed operator's public example of a guided route combining Valley Drive with operator-controlled backcountry stops. Details apply only to this offer.",
      },
      {
        title: "Discover Navajo: Monument Valley Navajo Tribal Park",
        url: "https://www.discovernavajo.com/monument-valley-navajo-tribal-park/",
        note: "Current Navajo Tourism Department destination page confirming the 17-mile loop, independent-vehicle restrictions, designated-trail boundary and route back to park-managed hours and admission.",
      },
    ]),
  },
  {
    id: "jatiluwih-subak-trek",
    slug: "follow-balis-water-before-the-rice",
    title: "Follow Bali's water before the rice",
    summary:
      "Walk Jatiluwih with a local farming guide and trace how canals, terraces, temples and shared decisions hold one celebrated landscape together.",
    field: "learn",
    place: "Jatiluwih, Tabanan",
    country: "Indonesia",
    countrySlug: "indonesia",
    regionSlug: "jatiluwih",
    status: "public_guide",
    demo: false,
    ...guideImage("jatiluwih-subak-trek"),
    kernel:
      "Arrange the public trekking offer listed by Indonesia's tourism-village platform, then ask the local guide to begin with water rather than the widest viewpoint. Follow a permitted trail beside terraces and irrigation channels. Notice where water enters, divides and changes level before it reaches rice. Let the guide explain only what belongs in the public visit. Farming activity, planting stages and the route itself vary, so the encounter should remain responsive to the working landscape rather than staged around a photograph.",
    rootedness:
      "Jatiluwih sits within the UNESCO-listed Cultural Landscape of Bali Province. Its terraces are one visible part of subak, a cooperative system connecting irrigation, farming communities and water temples. The landscape is still cultivated and managed, not preserved as an empty panorama. A publicly advertised farmer-guided trek gives visitors a bounded route into that system. It does not establish access to every field, temple, ritual or community decision, and one guide does not speak for every subak.",
    shift:
      "From seeing terraces as a pattern of green lines to reading them as a living agreement about water, labour, timing and responsibility.",
    humanReturn:
      "Another beautiful agricultural landscape may begin to look less like scenery and more like infrastructure maintained through many shared choices.",
    responsibility:
      "Arrange the trek in advance through the current village listing and confirm the route, duration, price, language, weather policy and physical demands. Stay on the guide-approved path. Do not step into planted terraces, block irrigation, touch gates or divert water. Temples and ceremonies are not visitor stages. Follow dress and photography guidance, ask before recording people, keep drones away unless expressly authorised and carry out every item you bring. Wet edges can be slippery, and shade may be limited.",
    evidence:
      "Indonesia's Ministry of Tourism village platform currently lists a Jatiluwih trekking experience led by a farmer who also acts as local guide, with a public village contact route. The wider village listing describes trekking and cycling trails through the rice-field and forest landscape. UNESCO documents subak as a still-functioning system of canals, water temples and farmer associations, and also warns that tourism pressure can threaten the landscape. These sources support a bounded guided walk, not guaranteed farmer interaction beyond the named format or unrestricted field and temple access. EA has not taken the trek or verified conditions on a particular day.",
    duration:
      "Arrange directly. The village listing prices the guide by time rather than publishing one fixed itinerary",
    participation:
      "Guided walking on a route set by the local farming guide and current field conditions",
    access:
      "Use the current Jatiluwih trekking listing to arrange the visit with the tourism village before travelling. Confirm the exact meeting point and what the guide-led route includes. General destination admission and the guided trek may be separate. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Jadesta: Jatiluwih trekking",
        url: "https://jadesta.kemenparekraf.go.id/atraksi/trekking_12",
        note: "Indonesia Ministry of Tourism village-platform listing for a public trek around Jatiluwih rice fields with a farmer acting as local guide and a direct village contact route.",
      },
      {
        title: "Jadesta: Jatiluwih tourism village",
        url: "https://jadesta.kemenparekraf.go.id/desa/jatiluwih",
        note: "Current government tourism-village profile describing public trekking and cycling routes through rice fields and forest, plus the village's wider visitor facilities.",
      },
      {
        title: "UNESCO: Cultural Landscape of Bali Province",
        url: "https://whc.unesco.org/en/list/1194",
        note: "Primary heritage context for the functioning subak system, its canals, farmer associations and water temples, with explicit conservation and tourism-pressure boundaries.",
      },
    ]),
  },
  {
    id: "pinglin-green-light-tea",
    slug: "make-tea-before-taipei-drinks-it",
    title: "Make tea before Taipei drinks it",
    summary:
      "Reserve a seasonal visit at a named Pinglin farm, pick the leaves available that day and follow part of their change from hillside to cup.",
    field: "taste",
    place: "Pinglin, New Taipei",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "pinglin",
    status: "public_guide",
    demo: false,
    ...guideImage("pinglin-green-light-tea"),
    kernel:
      "Reserve directly with Green Light Tea Plantation and confirm which tea-picking and production steps are available in the current season. Begin in the garden with the leaf the host asks you to select. Then follow only the processing stages included that day, which may involve handling or rolling leaves before tasting teas produced on the farm. Do not expect a complete commercial production cycle in one visit. The useful comparison is between the fresh leaf, the worked material and the cup, with the farmer setting the pace and limits.",
    rootedness:
      "Pinglin is a tea-growing district within New Taipei's protected watershed, known especially for Wenshan Baozhong. New Taipei's current destination material presents tea as a regional livelihood and identifies farms, the tea museum and the farmers' association as distinct visitor routes. Green Light is one named organic plantation that publicly offers tea picking and tea production by advance reservation. This guide does not treat one farm as the whole district or claim that every variety, harvest and processing step is available year-round.",
    shift:
      "From choosing tea by a finished aroma to noticing how season, leaf selection, handling and the farmer's judgment begin shaping the cup much earlier.",
    humanReturn:
      "A future pot of tea may invite you to ask about the leaf and its making before reaching for a flavour description on the package.",
    responsibility:
      "Reserve in advance and ask the farm to confirm season, language, price, duration, included processing steps, weather policy, transport and footwear. Enter rows and work areas only when invited. Pick only the leaves demonstrated by the host, handle tools and hot equipment exactly as instructed, and ask before photographing people. Confirm allergies and dietary needs before tasting. Do not infer health benefits from promotional language or expect wildlife sightings, a particular harvest stage or a fixed quantity of tea to take home.",
    evidence:
      "New Taipei City Travel currently lists Green Light Tea Plantation as open by appointment and explicitly advertises tea-picking and tea-production experiences by advance reservation with the farm owner. The destination's Pinglin page connects local livelihoods to tea and identifies several different tea-experience routes. A current 2026 New Taipei tourism report supplies the exact tea-picking photograph and documents a separate low-carbon visitor programme in Pinglin. It does not depict Green Light or prove what this farm includes on a particular date. EA has not visited the farm, tasted its tea or verified a session.",
    duration:
      "By advance arrangement. Confirm the seasonal format directly with the farm",
    participation:
      "Host-led tea picking and the production steps confirmed for that reservation, followed by tasting",
    access:
      "Use the Green Light Tea Plantation page to contact the farm and arrange the experience before travel. The listing contains differing telephone fields, so confirm that you have reached the named farm and record the agreed date, price and inclusions. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "New Taipei City Travel: Green Light Tea Plantation",
        url: "https://newtaipei.travel/en/attractions/detail/400319",
        note: "Current official tourism listing naming the farm and owner, with year-round appointment status and advance-reservation tea-picking and tea-production experiences.",
      },
      {
        title: "New Taipei City Travel: Pinglin",
        url: "https://newtaipei.travel/en/regional/sightseeing/30",
        note: "Official destination context connecting Pinglin's livelihoods with tea and distinguishing farms, the museum, farmers' association and food routes.",
      },
      {
        title: "New Taipei City Travel: 2026 low-carbon routes",
        url: "https://newtaipei.travel/zh-tw/news/detail/3538",
        note: "Current 2026 tourism-department report and exact-source photograph of a separate tea-picking activity in Pinglin. It is media context, not evidence of the Green Light session.",
      },
    ]),
  },
];
