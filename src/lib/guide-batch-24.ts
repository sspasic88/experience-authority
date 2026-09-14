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

export const guideBatch24: PublicExperience[] = [
  {
    id: "medellin-santa-elena-silletero-farms",
    slug: "follow-medellins-flowers-back-to-the-farm",
    title: "Follow Medellín's flowers back to the farm",
    summary:
      "Leave the parade image behind and meet the gardens, wooden frames and family work that keep silletero culture growing in Santa Elena.",
    field: "work",
    place: "Santa Elena, Medellín",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "medellin-santa-elena",
    status: "public_guide",
    demo: false,
    ...guideImage("medellin-santa-elena-silletero-farms"),
    kernel:
      "Choose one farm from Medellín's current official Silletero Farms guide and reserve directly with that host. Walk the garden before focusing on the finished silleta. Ask how flowers are cultivated and selected, how a frame is built and carried, and what changes between an everyday farm visit and the annual parade. Some listed farms advertise a small silleta activity, food, coffee or other additions. Confirm the exact format rather than assuming every farm offers the same encounter.",
    rootedness:
      "The Desfile de Silleteros is one of Medellín's most recognisable images, but its visible day begins with year-round work in the rural district of Santa Elena. The city's current visitor material describes a network of family farms where hosts explain their own gardens and silletas. This guide is a route toward those named public visits. It does not treat one family as representative of every silletero, turn a living tradition into a photo set or repeat promotional claims about impact as independently proven fact.",
    shift:
      "From recognising flowers on a parade route to noticing the land, frame, labour and family decisions that come before them.",
    humanReturn:
      "When a procession passes, look for the months of work carried into a few public hours and ask whose knowledge made the visible moment possible.",
    responsibility:
      "Reserve with a listed farm and wait for confirmation before travelling. Santa Elena is a rural, highland area, so confirm the meeting point, transport, walking surface, weather plan, altitude, accessibility and facilities. Stay on the host's route and do not enter gardens, homes or work areas without invitation. Do not pick flowers or handle frames unless asked. Confirm ingredients and allergens for any food or drink. Ask before photographing people, private interiors or family objects.",
    evidence:
      "Medellín's official visitor bureau currently states that silletero farms in Santa Elena receive visitors year-round for garden walks, family stories and explanations of silleta making. Its current farm guide lists named farms and their direct contact routes. A separate official article notes that some farms offer mini-silleta workshops and other additions. These are first-party destination sources. EA has not visited a farm, interviewed a family or verified a particular host, activity, price, route or date.",
    duration: "Varies by farm. Confirm before arranging transport",
    participation:
      "Host-led farm visit, garden interpretation and the activity explicitly confirmed by the chosen farm",
    access:
      "Use Medellín's current Silletero Farms guide to compare named public farms, then contact one farm directly. Confirm the exact visitor format, date, language, price, transport, group size, inclusions, access needs and cancellation terms before paying. A farm visit is available beyond the festival season, but individual availability is not guaranteed. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Medellín Travel: Silletero culture and the farms behind it",
        url: "https://www.medellin.travel/silletero-culture-the-tradition-that-made-medellin-bloom/?lang=en",
        note: "Current official visitor account of year-round Santa Elena farm visits, garden walks, host stories and the relationship between the farms and the public parade.",
      },
      {
        title: "Medellín Travel: current Silletero Farms guide",
        url: "https://www.medellin.travel/wp-content/uploads/2026/03/FINCAS-SILLETERAS.pdf",
        note: "Official directory of named visitor farms and direct contact routes. Visitors must still confirm each farm's current format and availability.",
      },
      {
        title: "Medellín Travel: farms in Santa Elena",
        url: "https://www.medellin.travel/silletera-farms-medellins-tradition-blooms-in-santa-elena/?lang=en",
        note: "Official description of the range of public farm activities, including garden interpretation and additions offered by some, but not all, farms.",
      },
    ]),
  },
  {
    id: "visnja-gora-carniolan-bee-house",
    slug: "read-a-hive-from-the-inside",
    title: "Read a hive from the inside",
    summary:
      "Stand between illuminated combs in Višnja Gora and watch a living hive through glass before following the Carniolan bee into its wider story.",
    field: "learn",
    place: "Višnja Gora",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "visnja-gora",
    status: "public_guide",
    demo: false,
    ...guideImage("visnja-gora-carniolan-bee-house"),
    kernel:
      "Begin with the permanent exhibition at the House of the Carniolan Bee. Look through the glass hive long enough to separate individual movement from the changing pattern of the colony. Then use the displays to connect what you see with the bee's biology, beekeeping and the Rothschütz family story presented by the museum. The encounter works because the living hive resists becoming a static specimen. Its status can change, so confirm the current exhibition before making it the reason for a journey.",
    rootedness:
      "Višnja Gora identifies itself closely with the Carniolan bee and with the nineteenth-century work associated with Emil Rothschütz. The house offers a specific public interpretation of that relationship through a contemporary exhibition and real glass hives. It is a useful entry into one place's beekeeping history, not a licence to handle bees, a substitute for an apiary visit or proof that one institution speaks for every beekeeper in Slovenia.",
    shift:
      "From treating a hive as a single object to watching a living system made of thousands of small decisions.",
    humanReturn:
      "The next time you see a bee, pause before naming only the product it might make and notice the larger system its movement belongs to.",
    responsibility:
      "Check current opening hours, tickets, exhibition status, language and accessibility with the house before travelling. Do not tap the glass, use flash or attempt to touch bees or hive components. Follow staff instructions and supervise children closely. Tell the venue in advance about serious insect allergies or other access needs, but do not treat a museum visit as medical advice or a guarantee of zero exposure. Ask before photographing visitors or staff.",
    evidence:
      "The House of the Carniolan Bee currently describes a public exhibition with virtual interpretation and real glass hives containing living bees. Visit Ljubljana independently lists the house as a visitor attraction and directs travellers to confirm current hours. These sources establish the public route and exhibition premise. EA has not visited, assessed animal care, verified the live hive on a particular day or evaluated every historical interpretation in the displays.",
    duration: "A short museum visit. Allow more time for a listed programme",
    participation:
      "Self-directed exhibition visit with close observation of a glass hive",
    access:
      "Use the house's official site for current tickets, opening hours and any separately scheduled workshop or event. Confirm whether the live-bee element is operating and whether the facilities meet your needs before travelling. Do not assume a workshop, guided tour or bee handling is included in ordinary admission. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "House of the Carniolan Bee: official visitor site",
        url: "https://www.hisakranjskecebele.si/en/",
        note: "First-party current route to opening information and the public exhibition, including its virtual interpretation and real glass hives with living bees.",
      },
      {
        title: "Visit Ljubljana: House of the Carniolan Bee",
        url: "https://www.visitljubljana.com/en/poi/carniolan-bee-house/",
        note: "Destination listing that confirms the Višnja Gora visitor site, exhibition and additional programme context while directing visitors to current official hours.",
      },
    ]),
  },
  {
    id: "chios-mastic-museum",
    slug: "follow-mastiha-back-to-the-tree",
    title: "Follow mastiha back to the tree",
    summary:
      "Trace one clear drop from the mastic tree to cultivation, cooperative processing and everyday use at Chios Mastic Museum.",
    field: "learn",
    place: "Mastichochoria, Chios",
    country: "Greece",
    countrySlug: "greece",
    regionSlug: "chios",
    status: "public_guide",
    demo: false,
    ...guideImage("chios-mastic-museum"),
    kernel:
      "Start outdoors with the mastic tree before entering the museum's account of cultivation and processing. Look closely at the resin before it becomes a flavour, scent or packaged product. Inside, follow the sequence from landscape and manual work to cooperative organisation, machinery and modern use. The museum can make the system legible without placing a visitor inside a working harvest. Treat that distinction as part of the value, not as a missing attraction.",
    rootedness:
      "The museum stands in southern Chios among the Mastichochoria, the villages associated with the island's mastiha cultivation. Its permanent exhibition connects the plant and traditional cultivation with processing and cooperative history. UNESCO separately documents the know-how of cultivating mastic on Chios as intangible cultural heritage. This public museum route does not grant entry to working groves, participation in harvest or authority to make health claims about mastiha.",
    shift:
      "From recognising mastiha as a flavour or product to seeing the tree, landscape and organised work that make it possible.",
    humanReturn:
      "When a distinctive ingredient appears on a menu, ask what geography, labour and system had to remain intact before the flavour could travel.",
    responsibility:
      "Confirm current opening hours, tickets, transport and accessibility before travelling. Stay within public museum and outdoor-exhibit areas. Do not enter or photograph working groves as though they were museum space, touch machinery unless invited or collect resin or plant material. Avoid turning the visit into a health claim. Follow current fire and weather guidance in southern Chios and ask before photographing staff or other visitors.",
    evidence:
      "The Piraeus Bank Group Cultural Foundation currently describes the museum's public permanent exhibition, outdoor mastic-tree habitat and operating machinery. Visit Greece confirms the museum's subject and location. UNESCO provides wider context for the island's cultivation knowledge but not access evidence for this museum or a farm. EA has not visited, entered a working grove, observed a harvest or verified a specific machine, programme, ticket or date.",
    duration: "A self-paced museum visit. Confirm current hours",
    participation:
      "Museum interpretation, outdoor plant observation and viewing of the processing story",
    access:
      "Use the museum's official page for current opening hours, admission, directions, accessibility and any scheduled programme. Ordinary admission covers the public museum route, not a working-grove visit or harvest participation. Confirm transport because the museum is in southern Chios rather than Chios Town. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Piraeus Bank Group Cultural Foundation: Chios Mastic Museum",
        url: "https://www.piop.gr/en/diktuo-mouseion/chios-mastic-museum/",
        note: "Official current museum scope, location, permanent exhibition, outdoor plant encounter, machinery, access information and visitor-planning route.",
      },
      {
        title: "Visit Greece: Chios Mastic Museum",
        url: "https://www.visitgreece.gr/experiences/culture/museums/the-mastic-museum",
        note: "National visitor source confirming the museum's focus on the cultivation, production and cultural history of Chios mastiha.",
      },
      {
        title: "UNESCO: know-how of cultivating mastic on Chios",
        url: "https://ich.unesco.org/en/RL/know-how-of-cultivating-mastic-on-the-island-of-chios-00993",
        note: "Wider heritage context for cultivation knowledge on Chios. It does not establish museum access, field access or a visitor harvest experience.",
      },
    ]),
  },
];
