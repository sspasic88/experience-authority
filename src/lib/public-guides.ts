import type { PublicExperience, GuideReview } from "./catalog";
import { guideImage } from "./media";
import { guideBatch02 } from "./guide-batch-02";
import { guideBatch03 } from "./guide-batch-03";
import { guideBatch04 } from "./guide-batch-04";
import { guideBatch05 } from "./guide-batch-05";
import { guideBatch06 } from "./guide-batch-06";
import { guideBatch08 } from "./guide-batch-08";
import { guideBatch07 } from "./guide-batch-07";
import { guideBatch09 } from "./guide-batch-09";
import { guideBatch11 } from "./guide-batch-11";
import { guideBatch10 } from "./guide-batch-10";
import { guideBatch12 } from "./guide-batch-12";
import { guideBatch13 } from "./guide-batch-13";
import { guideBatch14 } from "./guide-batch-14";
import { guideBatch15 } from "./guide-batch-15";

// Original EA desk-guide copy. No source photographs, private dossiers or contacts.
// Practice-level candidates are individually narrowed to publicly advertised access.
const review = (
  scope: GuideReview["scope"],
  accessUrl: string,
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-12",
  reviewBy: "2026-12-11",
  accessUrl,
  sources,
});
const common = {
  status: "public_guide",
  demo: false,
  image: null,
  imageAlt: "",
} as const;

const publicGuideDrafts: PublicExperience[] = [
  ...guideBatch15,
  ...guideBatch14,
  ...guideBatch13,
  ...guideBatch12,
  ...guideBatch11,
  ...guideBatch10,
  ...guideBatch08,
  ...guideBatch09,
  ...guideBatch07,
  ...guideBatch06,
  ...guideBatch05,
  ...guideBatch04,
  ...guideBatch03,
  ...guideBatch02,
  {
    ...common,
    id: "kumano-daimon-zaka",
    ...guideImage("kumano-daimon-zaka"),
    slug: "leave-room-for-devotion",
    title: "Leave room for devotion",
    summary:
      "Follow stone steps beneath tall trees on Daimon-zaka, a short walk into Kumano Kodo’s living pilgrimage landscape.",
    field: "witness",
    place: "Kumano Kodo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kumano-kodo",
    kernel:
      "Choose the short Daimon-zaka cobblestone ascent as a bounded way into the Kumano Kodo network. The Tanabe City Kumano Tourism Bureau describes it as a public section leading toward the Nachisan shrine-temple area. Walk the path for what it asks of attention. Do not make the living religious landscape into a background for a personal challenge.",
    rootedness:
      "Kumano Kodo is a network of pilgrimage routes with more than a thousand years of history, and Daimon-zaka remains tied to the approach to Kumano Nachi Taisha, Seiganto-ji and Nachi Falls. Its significance is not exhausted by scenery or heritage status. This guide concerns the public path only. It does not confer participation in worship, access to private property or authority to interpret the place for others.",
    shift:
      "From collecting an ancient route to noticing the responsibilities of passing through it.",
    humanReturn:
      "Perhaps a more careful relationship to “access”: a route can be open while still asking visitors to lower their claim on the place. That is an editorial possibility, not a promise of insight or spiritual experience.",
    responsibility:
      "Check current closures, weather and route guidance before departure. Stay on the path, keep noise low, carry out waste and do not enter private property. At shrines and temples, follow posted rules. Ask before photographing people and do not fly drones without permission. Choose a route that suits your own preparation and turn back when conditions require it.",
    evidence:
      "The Tanabe City Kumano Tourism Bureau’s public route and etiquette pages support the short-walk framing, current planning route and visitor conduct. They are local tourism sources, not independent heritage, access or safety assessment. EA has not walked this section, assessed individual capability or verified conditions on a particular day.",
    duration:
      "A short walk. Consult the current route page and allow for conditions",
    participation:
      "Independent public walking, with no ritual participation implied",
    access:
      "Public path access subject to current route conditions and posted rules. Use the official route page and its planning links before travel. EA does not provide a guide, booking, permit or a claim of special access.",
    guideReview: review(
      "public_admission",
      "https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/daimon-zaka/",
      [
        {
          title: "Tanabe City Kumano Tourism Bureau: Daimon-zaka",
          url: "https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/daimon-zaka/",
          note: "Public description of the short Daimon-zaka section, its route context and links to current route-planning information.",
        },
        {
          title:
            "Tanabe City Kumano Tourism Bureau: manners and trail etiquette",
          url: "https://www.tb-kumano.jp/en/2025/07/28/15578/",
          note: "Published guidance on respect for sacred sites, residents, trail conduct, photography and drones. It is not a guarantee of access or conditions.",
        },
      ],
    ),
  },
  {
    ...common,
    id: "tampere-rajaportti",
    ...guideImage("tampere-rajaportti"),
    slug: "make-room-in-the-steam",
    title: "Make room in the steam",
    summary:
      "Slow down in the wood-heated warmth of Rajaportti, Tampere’s historic public sauna and a shared space with its own rhythm.",
    field: "gather",
    place: "Tampere",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "tampere",
    kernel:
      "Visit through ordinary public admission, if the sauna is operating and its current arrangements suit you. Rajaportti is listed by Visit Tampere as Finland’s oldest public sauna still in use. The point here is neither a wellness promise nor a performance of belonging. It is the practical attention required in a shared space.",
    rootedness:
      "The public listing places Rajaportti in Pispala, Tampere, and describes a wood-heated sauna that has remained in use across decades. This guide stays with the advertised public visit. It does not offer a private ritual, claim access to local social life or turn Finnish sauna culture into a lesson a single visit can complete.",
    shift: "From seeking a private amenity to sharing a room with care.",
    humanReturn:
      "You may notice how much a public place depends on small decisions: arrive prepared, leave room, lower the volume and let other people use the space in their own way. That is an observation, not a promised personal result.",
    responsibility:
      "Read the operator’s current rules before going and follow posted arrangements for changing, bathing and phones. Do not photograph or record other visitors. Ask staff rather than assuming what is appropriate, and leave if the setting or its facilities do not meet your needs. EA does not assess health, safety, accessibility or current opening arrangements.",
    evidence:
      "Visit Tampere’s public pages support the venue’s public-sauna status, location and historical framing, and provide a route to current planning information. They are destination-marketing sources rather than independent cultural or access assessment. EA has not visited Rajaportti, interviewed users or verified any health, cultural or accessibility claim.",
    duration: "Self-paced, within the venue’s current public arrangements",
    participation: "Independent visit to a shared public sauna",
    access:
      "Public admission subject to the operator’s current terms and capacity. Use the official destination listing for the current route to the venue. Confirm practical details directly before travel. EA makes no booking and has no commercial relationship.",
    guideReview: review(
      "public_admission",
      "https://visittampere.fi/en/destination/rajaportti-sauna-oldest-public-sauna-in-finland/",
      [
        {
          title: "Visit Tampere: Rajaportti Sauna",
          url: "https://visittampere.fi/en/destination/rajaportti-sauna-oldest-public-sauna-in-finland/",
          note: "Public destination listing for the sauna’s location, historic public status and route to current venue information.",
        },
        {
          title: "Visit Tampere: how to use a public sauna",
          url: "https://visittampere.fi/en/articles/how-to-public-sauna/",
          note: "General visitor guidance on public-sauna etiquette and checking the venue’s current arrangements. It is not Rajaportti-specific access evidence.",
        },
      ],
    ),
  },
  {
    ...common,
    id: "venice-voga",
    ...guideImage("venice-voga"),
    slug: "venice-through-an-oar",
    title: "Venice, through an oar",
    summary:
      "Learn the movement behind the view: a Venetian rowing lesson in a traditional boat, with Row Venice.",
    field: "move",
    place: "Venice",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "venice",
    kernel:
      "Take a publicly offered introductory rowing lesson rather than a passenger ride. Row Venice teaches the voga in traditional Venetian craft. The useful question is not how much of the city you can cover, but what changes when moving a boat becomes your task.",
    rootedness:
      "The association describes its work as teaching Venetian rowing and supporting its continued presence in the city. Here the place is part of the skill, not simply scenery around a transferable activity. This guide concerns the advertised lesson only, not access to private boatyards or a gondolier qualification.",
    shift:
      "From watching boats move through Venice to paying attention to the work of an oar.",
    humanReturn:
      "You might leave with a more precise respect for a familiar-looking movement. Skill is something to practise, not something a short visit lets you claim.",
    responsibility:
      "Use the organiser’s normal booking process. Follow the instructor’s safety decisions and stay within the agreed lesson. Water conditions and suitability matter. Read the current requirements before choosing a session. EA does not assess individual fitness or guarantee a route.",
    evidence:
      "The organiser’s public pages establish the lesson format, traditional craft and access route. EA has not attended, independently assessed instruction or verified the association’s wider impact. The perspective described here is an editorial interpretation, not a promised outcome.",
    duration: "About 90 minutes. Confirm the chosen lesson",
    participation: "Instructor-led rowing lesson",
    access:
      "Publicly offered paid lesson with advance booking through Row Venice. Current prices, conditions and availability are on the official site. No EA booking or affiliation.",
    guideReview: review(
      "public_programme",
      "https://rowvenice.org/venetian-rowing-lessons/",
      [
        {
          title: "Row Venice: lessons and rates",
          url: "https://rowvenice.org/venetian-rowing-lessons/",
          note: "Advertised lesson formats, duration and direct booking route.",
        },
        {
          title: "Row Venice: association and activity",
          url: "https://rowvenice.org/",
          note: "The organiser’s account of its instructors, traditional craft and teaching activity. It is not independent impact evidence.",
        },
      ],
    ),
  },
  {
    ...common,
    id: "luang-prabang-natural-dye",
    ...guideImage("luang-prabang-natural-dye"),
    slug: "colour-before-cloth",
    title: "Colour, before cloth",
    summary:
      "Work with plant colour in a public natural-dyeing class at Ock Pop Tok’s Living Crafts Centre in Luang Prabang.",
    field: "make",
    place: "Luang Prabang",
    country: "Laos",
    countrySlug: "laos",
    regionSlug: "luang-prabang",
    kernel:
      "The advertised half-day class introduces silk and natural dye preparation, using plants from the centre’s garden to make three dyes. It offers a practical entry into colour as a sequence of material decisions, rather than a finished textile to buy.",
    rootedness:
      "Ock Pop Tok presents its Luang Prabang classes as introductions to Lao textile practices taught by its weavers and teachers. This is a bounded, publicly offered learning setting. It should not be read as access to private village life or permission to reproduce culturally restricted designs.",
    shift:
      "From choosing a colour to noticing the knowledge needed to make it.",
    humanReturn:
      "A finished object can become a prompt to remember a process: preparation, patience and the limits of a beginner’s understanding. What you learn matters more than how much you take home.",
    responsibility:
      "Attend the advertised class and follow the teacher’s handling instructions. Do not collect plants elsewhere or copy designs beyond what is offered for the session. Keep other participants and makers out of photographs unless they agree. No photography is needed to take part.",
    evidence:
      "The provider documents the natural-dye class and its teaching programme. EA has not attended or independently verified labour conditions, environmental performance or community benefit. No broad ethical certification is implied by inclusion in this guide.",
    duration: "Half day. Advertised as a three-hour session",
    participation: "Teacher-led making",
    access:
      "Publicly offered paid class. Arrange and confirm a place through Ock Pop Tok. Check the current class description and terms. EA does not make reservations.",
    guideReview: review(
      "public_programme",
      "https://www.ockpoptok.com/classes/natural-dyeing/",
      [
        {
          title: "Ock Pop Tok: natural dyeing",
          url: "https://www.ockpoptok.com/classes/natural-dyeing/",
          note: "Class content, materials, session length and confirmation process.",
        },
        {
          title: "Ock Pop Tok: classes",
          url: "https://www.ockpoptok.com/classes/",
          note: "Public teaching programme and the provider’s description of its teachers and textile focus.",
        },
      ],
    ),
  },
  {
    ...common,
    id: "reykjavik-sundholl",
    ...guideImage("reykjavik-sundholl"),
    slug: "a-city-in-the-water",
    title: "A city, in the water",
    summary:
      "Make time for a swim at Sundhöll and discover Reykjavík through the everyday ritual of its public pools.",
    field: "restore",
    place: "Reykjavík",
    country: "Iceland",
    countrySlug: "iceland",
    regionSlug: "reykjavik",
    kernel:
      "Visit Sundhöll through ordinary public admission. The city lists swimming facilities and hot tubs, with access information and rules available through its municipal pool pages. You can swim, pause and share the space without arranging a hosted cultural performance.",
    rootedness:
      "The municipality places its pools within Icelandic swimming-pool culture. Sundhöll, opened in 1937, is one specific point of entry. EA’s interest is the ordinary public setting: understanding a city can begin with using a shared amenity considerately, not seeking exceptional access.",
    shift:
      "From looking for a special attraction to noticing the value of an everyday shared place.",
    humanReturn:
      "Perhaps a different measure of time spent well: participation without collecting a spectacle. Conversation is a possibility, never something other bathers owe a visitor.",
    responsibility:
      "Read the municipality’s current safety, hygiene and conduct rules before entering. Respect personal space and keep cameras away from bathers and changing areas. Check access and changing-room arrangements on the official site. Do not infer that every facility suits every visitor.",
    evidence:
      "Municipal sources support the venue, public pool context and route to current rules, fees and hours. EA has not inspected the facilities, conducted local interviews or assessed individual health suitability. No therapeutic or wellness outcome is claimed.",
    duration: "Self-paced, within current public opening hours",
    participation: "Independent visit to a shared public pool",
    access:
      "Municipal admission, subject to posted rules and facility availability. Use the city’s pages for current fees, opening hours and accessibility information. School use can affect individual facilities.",
    guideReview: review(
      "public_admission",
      "https://reykjavik.is/en/citylife/pools",
      [
        {
          title: "City of Reykjavík: Sundhöll",
          url: "https://reykjavik.is/en/sundholl-reykjavik-pool",
          note: "The municipal venue record, history, facilities and access-related information.",
        },
        {
          title: "City of Reykjavík: swimming pools",
          url: "https://reykjavik.is/en/citylife/pools",
          note: "Public admission information and links to fees, opening hours, accessibility and conduct rules.",
        },
      ],
    ),
  },
  {
    ...common,
    id: "vienna-heuriger",
    ...guideImage("vienna-heuriger"),
    slug: "the-vineyard-at-the-table",
    title: "The vineyard at the table",
    summary:
      "Find a table at Mayer am Pfarrplatz, where Vienna’s wine-growing landscape meets the food and conviviality of the Heuriger.",
    field: "taste",
    place: "Vienna",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    kernel:
      "Visit the wine tavern through its normal dining service. Mayer am Pfarrplatz advertises a seasonal hot and cold buffet, its wines and Heuriger music. Use the meal to notice what connects the table to the surrounding wine-growing city, rather than treating it as a list of dishes to complete.",
    rootedness:
      "The venue locates its wine-making history in Heiligenstadt, Vienna. The reason for this guide is the connection between growing, serving and gathering in one local tradition. It is not a restaurant ranking or a claim that a visitor is joining a private community occasion.",
    shift:
      "From a glass and a plate to the relationship between a city and its cultivated land.",
    humanReturn:
      "You might leave more curious about where everyday food and drink come from. Ordering alcohol is not a requirement for that curiosity. Choose what suits you and the current menu.",
    responsibility:
      "Stay within the public dining offer. A meal does not include vineyard, cellar or backstage access. Let staff work, respect other guests’ privacy and use the venue’s published terms for any reservation. Do not assume ingredients or dietary suitability without checking.",
    evidence:
      "The venue’s pages document its public hospitality offer and describe its wine-tavern tradition. These are first-party accounts, not an independent assessment of quality, sourcing or working conditions. EA has not dined here or validated an experience on site.",
    duration: "A self-paced meal during service",
    participation: "Public dining. No hosted EA session",
    access:
      "Ordinary paid hospitality, subject to capacity and the venue’s reservation terms. Follow the official site for the current menu and service information. There is no EA commercial relationship.",
    guideReview: review("public_hospitality", "https://www.pfarrplatz.at/en/", [
      {
        title: "Mayer am Pfarrplatz: public offer",
        url: "https://www.pfarrplatz.at/en/",
        note: "Venue location, public dining, current menu and reservation route.",
      },
      {
        title: "Mayer am Pfarrplatz: the Heurige",
        url: "https://www.pfarrplatz.at/en/the-heurige/",
        note: "The venue’s own account of its wine-tavern history and food/music offer. Promotional claims are not treated as EA findings.",
      },
    ]),
  },
  {
    ...common,
    id: "grenada-belmont-cacao",
    ...guideImage("grenada-belmont-cacao"),
    slug: "before-the-chocolate-bar",
    title: "Before the chocolate bar",
    summary:
      "Approach cacao through its processing and its history on Belmont Estate’s publicly offered tour in northern Grenada.",
    field: "taste",
    place: "Saint Patrick",
    country: "Grenada",
    countrySlug: "grenada",
    regionSlug: "saint-patrick",
    kernel:
      "The estate’s Classic Tour describes a visit to cocoa fermentation and drying areas. Begin with that process: what must happen before cacao becomes the chocolate you recognise? Follow the advertised guided route, rather than seeking entry to production areas on your own.",
    rootedness:
      "Belmont’s own history places the estate in Saint Patrick and acknowledges its colonial plantation past and enslaved labour. That history belongs in the account alongside contemporary cacao production. A picturesque agricultural setting is not a reason to omit the conditions that shaped it.",
    shift:
      "From a finished taste to a process, a place and a history that deserve attention.",
    humanReturn:
      "A more thoughtful set of questions about an everyday product: how it is made, whose work is involved and what a tour can and cannot tell you.",
    responsibility:
      "Choose the normal advertised tour and remain with its guide. Do not handle crops or machinery without instruction, enter staff-only areas or photograph workers without agreement. This guide concerns cacao interpretation. It does not recommend animal encounters or custom private access.",
    evidence:
      "The public tour page supports the cacao-processing focus. The estate’s history supplies context. EA has not visited or independently verified sustainability certifications, wages, animal welfare or the tour’s treatment of history. The current page uses a booking widget. Confirm the exact tour content on the official site before making plans.",
    duration: "Confirm the current Classic Tour duration",
    participation: "Guided public visitor programme",
    access:
      "A paid tour offered by Belmont Estate, subject to its current programme and availability. Use the official tour page. No custom tour, workplace access or booking is arranged by EA.",
    guideReview: review(
      "public_programme",
      "https://belmontestategrenada.com/experience-belmont/tours/",
      [
        {
          title: "Belmont Estate: tours",
          url: "https://belmontestategrenada.com/experience-belmont/tours/",
          note: "Public tour offer. The indexed Classic Tour description identifies cocoa fermentation and drying. Confirm current inclusions in the booking widget.",
        },
        {
          title: "Belmont Estate: history",
          url: "https://belmontestategrenada.com/our-history/",
          note: "The estate’s account of location, colonial ownership, enslaved labour and its later development. It is not an independent historical review.",
        },
      ],
    ),
  },
];

export const publicGuides = publicGuideDrafts;
