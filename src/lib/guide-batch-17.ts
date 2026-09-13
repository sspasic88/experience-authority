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

export const guideBatch17: PublicExperience[] = [
  {
    id: "arcachon-oyster-tide",
    slug: "meet-the-bay-on-its-working-hours",
    title: "Meet the bay on its working hours",
    summary:
      "In Arcachon Bay, the oyster beds set the timetable. Join a publicly offered trip with an oyster farmer and follow the meal back to a working tide.",
    field: "taste",
    place: "Arcachon Bay",
    country: "France",
    countrySlug: "france",
    regionSlug: "arcachon-bay",
    status: "public_guide",
    demo: false,
    ...guideImage("arcachon-oyster-tide"),
    kernel:
      "Reserve a marée ostréicole through the regional oyster-farming booking service. Meet at the port assigned to your trip and travel with the professional to the beds. As the water retreats, watch the work that the tide makes possible, such as handling the mesh bags in which oysters grow. Ask what changes between seasons or why a particular task needs doing now. The published format ends with an oyster tasting. Your access and any participation remain under the host's direction, not a promise that you will work the beds yourself.",
    rootedness:
      "Here, oyster farming is part of the bay's working geography. The regional shellfish committee describes ports connected to channels and a trade organised around changing water levels. From a waterside table, the stakes and rows can look like scenery. Going out with someone who works among them gives those lines a practical meaning. The taste belongs to a place, but so do the timing, tools and decisions that precede it.",
    shift:
      "From ordering something from the bay to understanding why the bay cannot work to your schedule.",
    humanReturn:
      "Keep one explanation from the farmer alongside the memory of the tasting. A familiar luxury becomes more particular when you can describe a piece of the labour behind it, without pretending one outing has made you an expert.",
    responsibility:
      "This is a working boat and farm. Follow the skipper's instructions, use the required safety equipment and never step off the boat or handle tools without direction. Wear the footwear and weather protection specified for your outing. Confirm age, mobility, language and dietary requirements before booking. You can decline the tasting. Ask before photographing people and do not collect shellfish independently.",
    evidence:
      "Arcachon Destination links the current June 2026 brochure, which lists authorised professionals, the central booking route for oyster outings, a three-to-six-hour duration and possible last-minute cancellation. The regional shellfish committee explains the visitor format and tidal context. EA has not joined a trip, inspected a vessel or assessed working conditions. The photograph shows an oyster-farming visit, not a guaranteed host, task or water level.",
    duration: "Three to six hours, depending on the departure port and tide",
    participation:
      "Hosted observation of oyster farming, with a published tasting",
    access:
      "Book the oyster-farming outing through the official page's central reservation service. Confirm the exact port, departure and return window, current terms and access needs. Departure follows the tide, not a fixed daily tourist schedule. Weather, vessel problems or seasonal work can cancel the outing. This is not the separate professional fishing trip. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Arcachon Destination: oyster-farming outings and reservations",
        url: "https://www.arcachon.com/tourisme/je-decouvre/les-incontournables-du-bassin/le-pescatourisme/",
        note: "Official tourism page distinguishes oyster-farming trips from fishing trips, links the 2026 brochure and gives the current oyster reservation route.",
      },
      {
        title: "Arcachon Bay: June 2026 professional outing brochure (PDF)",
        url: "https://www.arcachon.com/app/uploads/arcachon/2026/05/Plaquette_4volets_pescatourisme_2026-DG-OK-1.pdf",
        note: "Four-page brochure visually checked. The oyster column specifies three to six hours and tasting. The roster separates departure ports and languages. Reservation and cancellation conditions are explicit.",
      },
      {
        title: "Regional shellfish committee: get on board",
        url: "https://huitres-arcachon-capferret.fr/en/get-on-board/",
        note: "First-party explanation of accompanying a professional to the oyster beds and the relationship between ports, channels and the tide. Not an EA assessment of sustainability or product quality.",
      },
    ]),
  },
  {
    id: "arcachon-dune-du-pilat",
    slug: "read-the-landscape-one-grain-at-a-time",
    title: "Read the landscape one grain at a time",
    summary:
      "Dune du Pilat is an extraordinary view, but it is also a landscape on the move. Climb with a question about the sand beneath your feet, not just the horizon ahead.",
    field: "nature",
    place: "Dune du Pilat, Arcachon Bay",
    country: "France",
    countrySlug: "france",
    regionSlug: "arcachon-bay",
    status: "public_guide",
    demo: false,
    ...guideImage("arcachon-dune-du-pilat"),
    kernel:
      "Begin at the Grand Site's reception area and check the day's notices before choosing your walk. If the climb suits your mobility and the conditions, take your time reaching the crest by the authorised access. Stop to notice the meeting of sand, water and the inland landscape. Look closely at a wind-made ripple, then outward at the much larger shape. The discovery spaces below offer another way to understand the site. A booked nature activity is a separate option, not included in this independent visit.",
    rootedness:
      "The site manager explains Pilat through the movement of sand. Coastal processes shaped its formation, and wind continues to move grains over the dune and inland. What looks like a fixed monument is not fixed at all. You will not watch the whole dune travel during one walk, but noticing a small surface pattern can make that larger timescale easier to imagine.",
    shift:
      "From a viewpoint you have reached to a landscape you have begun to read.",
    humanReturn:
      "Keep the photograph, but give it one sentence about what is changing. A place becomes easier to remember when you can tell someone what held your attention beyond its size.",
    responsibility:
      "Follow current closure notices and stay out of restricted forest or other closed areas. The ridge has no shade or water point, and sand can become very hot. Bring water and appropriate footwear, check the forecast and avoid the hottest hours. Do not remove sand or plants, disturb wildlife, smoke, light fires, camp or use recreational drones. The visible Banc d'Arguin has separate nature-reserve rules and is not an extension of this walk.",
    evidence:
      "The Grand Site manager's visitor, landscape, regulation and accessibility pages support this independent visit. The reception area is accessible, but steep slopes and sand prevent wheelchair access to the summit. The seasonal stairs do not make the crest step-free. EA has not inspected a current route. The licensed photograph was taken in September 2012 and shows landscape context, not current paths, vegetation, weather or crowd conditions.",
    duration:
      "Allow an unhurried visit and choose the length of your walk on site",
    participation:
      "Independent walking and landscape observation within authorised public areas",
    access:
      "Use the official visitor page for current access notices, transport, parking and seasonal stair information. Confirm the conditions before travelling. The reception area's discovery facilities offer an alternative if you cannot climb, but not an equivalent summit view. Guided activities require their own reservation. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Grand Site Dune du Pilat: prepare your visit",
        url: "https://ladunedupilat.com/en/preparation/visit-advice/",
        note: "Site-manager advice on arrival, crowding, weather, heat, water and the physical demands of walking in sand.",
      },
      {
        title: "Grand Site Dune du Pilat: how the dune moves",
        url: "https://ladunedupilat.com/je-decouvre/grand-site/la-dune-du-pilat/",
        note: "Official explanation of formation and ongoing wind-driven inland movement. No fixed height or annual movement rate is implied by this guide.",
      },
      {
        title: "Grand Site Dune du Pilat: current regulations",
        url: "https://ladunedupilat.com/en/preparation/regulation/",
        note: "Manager's published restrictions, current closure orders, fire and habitat protection, recreational drone ban and separate Banc d'Arguin reserve rules.",
      },
      {
        title: "Grand Site Dune du Pilat: accessibility",
        url: "https://ladunedupilat.com/en/preparation/accessibility-for-all/",
        note: "Distinguishes the accessible reception and interpretation facilities from the inaccessible summit and seasonal stair access.",
      },
    ]),
  },
];
