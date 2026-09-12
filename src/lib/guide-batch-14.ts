import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-12",
  reviewBy: "2026-12-11",
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

/** Two narrowed atlas candidates and five destination-depth additions. */
export const guideBatch14: PublicExperience[] = [
  {
    ...common,
    id: "istanbul-ebru-marbling",
    slug: "lift-a-pattern-from-the-water",
    title: "Lift a pattern from the water",
    summary:
      "Make colour float, draw it into a pattern and lift it onto paper in an Istanbul ebru workshop. A different souvenir begins in a shallow tray.",
    field: "make",
    place: "Istanbul",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    ...guideImage("istanbul-ebru-marbling"),
    kernel:
      "Reserve a two-hour introduction at Les Arts Turcs in Sultanahmet. The published format combines a demonstration with making your own marbled paper. Watch how the instructor places colour on the prepared liquid, then try the tools yourself. The moment to stay for is the transfer: a floating arrangement becomes something you can hold. Confirm the session language and collection or drying arrangements when booking.",
    rootedness:
      "Ebru belongs to a longer practice of decorating paper, books and calligraphic work. Türkiye's Ministry of Culture and Tourism describes knowledge passed through sustained relationships between masters and apprentices, including the preparation of tools and materials. A visitor class opens a small part of that practice. It is not the same as learning the whole craft, and the heritage listing does not endorse this particular studio.",
    shift:
      "From buying a finished pattern to noticing the sequence of decisions that allows one to exist.",
    humanReturn:
      "A sheet of paper can bring back the exact moment when you stopped trying to control every line. Ask which technique you attempted so the object carries a name and a process as well as a colour.",
    responsibility:
      "Book rather than assuming the studio accepts walk-ins. Check step-free access and any material sensitivities directly. Follow the instructor's handling and cleanup instructions. Ask before photographing other participants or recording a demonstration. A short workshop does not authorise you to reproduce an artist's designs commercially.",
    evidence:
      "The studio publishes a beginner workshop, two-hour duration, languages and a direct reservation route. The ministry provides separate context for ebru and its transmission. EA has not attended or assessed teaching quality. The studio photograph shows a group around a marbling tray, not a guaranteed instructor, group size or result for your booking.",
    duration:
      "About two hours. Confirm your session and when the paper can travel",
    participation: "A demonstration followed by hands-on paper marbling",
    access:
      "Advance paid reservation through the studio's public workshop page. Confirm language, meeting point and current terms. EA does not handle bookings or receive commission.",
    guideReview: review("public_programme", [
      {
        title: "Les Arts Turcs: Turkish Ebru Marbling Workshop",
        url: "https://www.lesartsturcs.com/product/turkish-ebru-marbling-workshop-in-istanbul/",
        note: "First-party workshop description, duration, languages, location and reservation route. Availability and teaching quality are not independently assessed.",
      },
      {
        title: "Türkiye Ministry of Culture and Tourism: Ebru",
        url: "https://yakegm.ktb.gov.tr/TR-345124/ebru-turkish-art-of-marbling.html",
        note: "Official cultural context on paper marbling, materials and master-apprentice transmission. The heritage recognition concerns the practice, not this provider.",
      },
    ]),
  },
  {
    ...common,
    id: "mexico-city-arena-mexico",
    slug: "hear-the-arena-answer-back",
    title: "Hear the arena answer back",
    summary:
      "Take a seat at Arena México for lucha libre, then watch the crowd as closely as the ring. The evening has more than one set of performers.",
    field: "celebrate",
    place: "Mexico City",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    ...guideImage("mexico-city-arena-mexico"),
    kernel:
      "Choose an Arena México event from CMLL's current cartelera, its programme of announced shows. Check the venue name carefully: the same organisation also lists Arena Coliseo and arenas in other cities. Buy through the linked official ticket route or published box-office arrangement. Once seated, divide your attention between the wrestlers' entrances, the action and the response travelling around the stands.",
    rootedness:
      "CMLL identifies Arena México in the Doctores neighbourhood as its principal home. This is a public professional wrestling venue with an audience, a programme and a long institutional history, not a private cultural encounter. The useful way in is the relationship between spectacle and spectators. You can arrive knowing very little and still begin to notice what a gesture, arrival or reversal asks the room to do.",
    shift:
      "From watching a spectacle at a distance to noticing how an audience helps make the evening.",
    humanReturn:
      "You may remember a wave of reaction more vividly than a result. Leave with one question about what you did not understand, rather than a claim to have decoded lucha libre in one visit.",
    responsibility:
      "Expect amplified sound, bright lighting, crowds and staged combat. Check seating, entry, bag and camera rules with the venue before buying. Consider hearing protection and your own comfort with the environment. Follow staff directions and keep aisles clear. Participation here means being a spectator, never entering the ring, touching performers or imitating wrestling moves.",
    evidence:
      "CMLL publishes the venue address, its own historical account and a live programme linked to ticket sales. These are promoter sources, not independent reviews. EA has not attended or verified a particular seat, event or performer. The official photograph shows an earlier full arena and does not predict the attendance, lighting or view at your event.",
    duration:
      "One scheduled show. Check the listed start time and allow for entry and departure",
    participation:
      "Ticketed spectator attendance at a professional lucha libre event",
    access:
      "Use the official programme and select Arena México, not another CMLL venue. Cards and times can change. EA does not sell tickets or receive commission.",
    guideReview: review("public_admission", [
      {
        title: "CMLL: current event programme",
        url: "https://cmll.com/cartelera/",
        note: "Current promoter listings identify venue, date, start time and the official ticket route. The programme explicitly remains subject to changes.",
      },
      {
        title: "CMLL: Arena México",
        url: "https://cmll.com/arenas/arena-mexico/",
        note: "First-party venue identity, address, historical context and photographs. This is not an independent review of a show or seat.",
      },
    ]),
  },
  {
    ...common,
    id: "seoul-makgeolli-brewing",
    slug: "begin-with-rice-not-the-bottle",
    title: "Begin with rice, not the bottle",
    summary:
      "Turn a Seoul tasting into a hands-on introduction to makgeolli. Rice, water and a fermentation starter make the first questions more interesting than which bottle to buy.",
    field: "make",
    place: "Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    ...guideImage("seoul-makgeolli-brewing"),
    kernel:
      "Book The Sool Company's one-day makgeolli brewing class. The current public offer describes a two-and-a-half-hour, hands-on introduction. An April 2025 feature in KOREA magazine documents participants working with rice, mixing a mash and tasting different drinks. Use that as context, then confirm which stages the current class includes. This is the start of a fermentation process, not a promise to finish brewing a drink within the lesson.",
    rootedness:
      "Makgeolli becomes easier to approach when the ingredients come before the bottle. In the KOREA interview, founder Julia Mellor connects rice, water and nuruk, the fermentation starter, to a broader family of Korean alcoholic drinks. The interest lies in how related starting materials can lead to different outcomes. Seoul becomes a place to ask about process and variation rather than treating one milky drink as an entire tradition.",
    shift:
      "From ordering by a label to asking what happened before the drink reached the glass.",
    humanReturn:
      "Take away a more precise question for the next menu or bottle shop. What was fermented, how was it handled and which differences can you actually taste? There is no need to become an expert in an afternoon.",
    responsibility:
      "Confirm age requirements, tasting arrangements and dietary or ingredient concerns before booking. Follow the instructor's hygiene and storage guidance. Do not assume a class mixture is ready to drink or suitable to carry across a border. Alcohol tasting is optional, and nobody needs to finish a sample. Do not drive after drinking.",
    evidence:
      "The Sool Company currently lists the class and its duration. KOREA magazine, published by Korea's Ministry of Culture, Sports and Tourism, provides a dated account of the programme and an interview. It is contextual reporting, not proof of today's exact format. EA has not attended or assessed brewing instruction. The class image is supplied by the operator.",
    duration:
      "About two and a half hours. Fermentation continues beyond the class",
    participation:
      "Hands-on introductory brewing class, with tasting arrangements to confirm",
    access:
      "Advance public booking through The Sool Company. Check the current class location, age terms, inclusions and take-home arrangements. EA does not book or receive commission.",
    guideReview: review("public_programme", [
      {
        title: "The Sool Company: public Seoul experiences",
        url: "https://thesoolcompany.com/",
        note: "Current public offer lists a 2.5-hour hands-on makgeolli brewing class and links to its reservation route.",
      },
      {
        title: "KOREA magazine: Korean alcohol, April 2025",
        url: "https://www.korean-culture.org/eng/webzine/202504/sub02.html",
        note: "Ministry-published interview with Julia Mellor and a dated account of a Sool Company class. Used for context and process, not as current availability evidence.",
      },
    ]),
  },
  {
    ...common,
    id: "istria-karlic-truffle-hunt",
    slug: "let-the-dog-read-the-forest",
    title: "Let the dog read the forest",
    summary:
      "Follow a handler and truffle dogs near Buzet in Istria, then connect what happened beneath the trees with what arrives at the tasting table.",
    field: "taste",
    place: "Istria",
    country: "Croatia",
    countrySlug: "croatia",
    regionSlug: "istria",
    ...guideImage("istria-karlic-truffle-hunt"),
    kernel:
      "Reserve Karlić Tartufi's public truffle-hunting experience, based in Paladini near Buzet. The family's current page combines an introduction, time following handler and dogs, and a tasting. Watch the change in pace when the dog becomes interested in a patch of ground. Follow the handler's lead rather than searching independently. Confirm the actual route, duration, footwear and tasting inclusions for your date.",
    rootedness:
      "The Karlić family's own account traces its truffle work across generations in this part of inland Istria. That is first-party history, not an independently audited claim. The encounter's specificity is more tangible: a handler's judgement, a trained dog's attention and a food found beneath the ground. The tasting becomes more interesting when the ingredient is no longer detached from the work of finding it.",
    shift:
      "From treating truffle as a finishing touch to following the knowledge and animal partnership behind it.",
    humanReturn:
      "The most memorable moment may be the pause before anything is found. Bring that patience to the tasting, and ask which truffle or product you are actually trying rather than assuming every flavour came from that day's hunt.",
    responsibility:
      "Enter only with the booked handler and stay on their route. Do not dig, forage, feed the dogs or distract them without instruction. Avoid sharing precise productive locations. Check terrain, weather, food allergies and mobility needs before paying. A tour is not a licence to return and harvest independently, and no particular find is guaranteed.",
    evidence:
      "The operator publishes year-round public tours and a broad two-hour format, alongside a family-history page and public meeting address. EA has not joined a hunt, checked land permissions or assessed animal welfare. The guide concerns the advertised hosted tour only. The official photograph shows a handler with a dog and a truffle, not a guaranteed discovery on your visit.",
    duration:
      "The public page describes around two hours. Reconfirm your chosen tour",
    participation:
      "Guided forest outing with truffle dogs, followed by the booked tasting",
    access:
      "Advance paid booking via Karlić Tartufi. Confirm the current route and tasting with the host. EA does not arrange access, sell the tour or receive commission.",
    guideReview: review("public_programme", [
      {
        title: "Karlić Tartufi: truffle hunting experience",
        url: "https://karlictartufi.hr/en/lov-na-tartufe/",
        note: "First-party public tour, tasting, year-round offering and booking route. The exact date, duration, route and inclusions require confirmation.",
      },
      {
        title: "Karlić Tartufi: family and truffle work",
        url: "https://karlictartufi.hr/en/o-nama/",
        note: "The family's own account of its work near Buzet and photographs of handlers and dogs. Historical and welfare claims are not independently verified.",
      },
    ]),
  },
  {
    ...common,
    id: "gaia-taylors-port-cellars",
    slug: "taste-what-time-does-to-port",
    title: "Taste what time does to Port",
    summary:
      "Across the Douro from Porto, enter Taylor's cellars in Vila Nova de Gaia and follow the difference between ageing in wood and ageing in a bottle.",
    field: "taste",
    place: "Vila Nova de Gaia",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "vila-nova-de-gaia",
    ...guideImage("gaia-taylors-port-cellars"),
    kernel:
      "Use the public audio-guided cellar visit at Taylor's, then make the tasting an opportunity to compare rather than collect. The current route combines cellar interpretation with exhibits and wine tasting. Bring headphones if you want to use the mobile guide, or ask for an on-site device. Read the current ticket carefully: additional tastings and other experiences are separate options, not automatically part of the standard visit.",
    rootedness:
      "Port connects this city on the Douro's south bank to vineyards further inland. Taylor's explains that the ageing vessel and time spent in it help shape colour and flavour. A cellar gives that idea scale. A large vat, a smaller cask and a bottle are different environments, not just different ways to store the same thing. This guide stays with one producer's interpretation, not a verdict on the best Port house.",
    shift:
      "From seeing an age on a label to thinking about the place in which those years were spent.",
    humanReturn:
      "Keep one comparison in mind after the visit: what changed in colour, texture or aroma, and what did the explanation help you notice? A useful tasting does not require an expensive bottle at the end.",
    responsibility:
      "Confirm current admission, age and accessibility arrangements before booking. Check what the tasting includes and whether an alternative is available if you do not drink. Follow cellar rules, ask before photographing people and keep sampling within your own limits. Do not drive after drinking. The address is in Gaia, not Porto's city centre.",
    evidence:
      "Taylor's publishes the audio-guide format, current visitor details and a Vila Nova de Gaia address. Its separate ageing guide supports the comparison between vessels and styles. Both are producer sources. EA has not visited, tasted the current selection or independently assessed the premises. The official cellar image is context, not a guarantee of your route or unrestricted access to working storage areas.",
    duration:
      "Self-paced within opening hours. Leave additional time for the tasting",
    participation:
      "Audio-guided cellar visit and the tasting included in your chosen ticket",
    access:
      "Public paid admission through Taylor's visitor page. Check the exact ticket and current opening details before crossing to Gaia. EA does not book or receive commission.",
    guideReview: review("public_admission", [
      {
        title: "Taylor's: Port cellar visits",
        url: "https://www.taylor.pt/us/visit-taylors/port-cellars",
        note: "Producer's visitor page with audio-guide format, ticket options, tasting, opening details and the exact Gaia address.",
      },
      {
        title: "Taylor's: ageing and Port styles",
        url: "https://www.taylor.pt/us/what-is-port-wine/port-ageing-styles",
        note: "Producer's explanation of how vessels and maturation shape Port. Used for technical context, not an independent quality ranking.",
      },
    ]),
  },
  {
    ...common,
    id: "mossman-ngadiku-walk",
    slug: "let-the-rainforest-be-introduced",
    title: "Let the rainforest be introduced",
    summary:
      "Join the public Ngadiku Dreamtime Walk at Mossman Gorge and let an Indigenous guide decide how the rainforest's plants, places and stories are introduced.",
    field: "learn",
    place: "Mossman Gorge",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "mossman-gorge",
    ...guideImage("mossman-ngadiku-walk"),
    kernel:
      "Book the Ngadiku Dreamtime Walk through Mossman Gorge Cultural Centre. Its published format is approximately 90 minutes with an Indigenous guide, interpretation of plants and cultural context, demonstrations, and bush tea and damper. It is a hosted introduction, not a self-guided route to reproduce later. Follow the guide's choices about where to stop, what to share and how to take part.",
    rootedness:
      "The centre identifies the rainforest as Country of the Kuku Yalanji people. The guide's role matters because a forest can be more than the species a visitor recognises or the view a camera records. The public programme offers a bounded encounter with knowledge that remains with its holders. Buying a ticket does not make every place, story or practice available for recording or retelling.",
    shift:
      "From arriving with a route to follow to accepting an introduction shaped by the person leading it.",
    humanReturn:
      "You may leave more attentive to who introduces a place and who decides what remains unspoken. That can change the questions you ask on the rest of a journey without turning a short visit into cultural expertise.",
    responsibility:
      "Remain with the guide and ask before photographing, recording or sharing cultural material. Do not collect plants, copy a demonstration without permission or publish restricted locations. The operator describes uneven, sometimes slippery terrain and says this walk is not wheelchair accessible. Check suitability and current weather directly. This guide does not include swimming or independent access to the tour tracks.",
    evidence:
      "The Cultural Centre publishes the tour's approximate duration, inclusions, terrain and booking route, plus its account of the Kuku Yalanji people. EA has not attended, assessed cultural authority or independently verified community benefit. Only the existing publicly bookable programme is described. The official image shows a group listening in the rainforest and makes no claim about a future guide or itinerary.",
    duration: "Approximately 90 minutes, plus arrival and transfer time",
    participation:
      "Booked, Indigenous-guided rainforest walk with interpretation and demonstrations",
    access:
      "Reserve the Ngadiku programme through the Cultural Centre. A shuttle ticket alone is not the guided walk. Check the current meeting and transfer arrangements. EA does not book or receive commission.",
    guideReview: review("public_programme", [
      {
        title: "Mossman Gorge Cultural Centre: guided Dreamtime walks",
        url: "https://www.mossmangorge.com.au/things-to-do/dreamtime-walks",
        note: "Current public programme, Indigenous-guided format, approximate duration, terrain limitations, inclusions and direct booking route.",
      },
      {
        title: "Mossman Gorge Cultural Centre: Kuku Yalanji people",
        url: "https://www.mossmangorge.com.au/our-community/kuku-yalanji-people",
        note: "The Cultural Centre's public introduction to the Kuku Yalanji people and connection to Country. This does not give permission to reproduce restricted knowledge.",
      },
    ]),
  },
  {
    ...common,
    id: "singapore-sungei-buloh",
    slug: "find-the-citys-wilder-edge",
    title: "Find the city's wilder edge",
    summary:
      "Trade central Singapore for Sungei Buloh's mangroves, tidal water and birdwatching shelters. Here the tide, not an attraction timetable, changes what is visible.",
    field: "nature",
    place: "Singapore",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    ...guideImage("singapore-sungei-buloh"),
    kernel:
      "Start with NParks' current map and closure notices, then choose an open section of Sungei Buloh Wetland Reserve. Take time at a shelter or along a boardwalk instead of trying to cover every trail. Scan the mud and the water before looking further away. If you have binoculars, bring them. The visit works as observation, not a promise to collect a particular wildlife sighting.",
    rootedness:
      "These mangroves grow at a shifting boundary between land and sea. NParks describes a habitat adapted to tidal water and oxygen-poor mud, and a reserve used by migratory birds. Its seasonal account highlights September to March for migration, but the wetland is not only a seasonal event. The changing waterline makes an ordinary walk a lesson in how much a place can alter while the visitor stays still.",
    shift:
      "From looking for a green escape to noticing a working tidal habitat at the city's edge.",
    humanReturn:
      "Try remembering one small change rather than the longest species list. A root exposed by the tide or a bird's pause can give the next urban green space more detail.",
    responsibility:
      "Read flood and weather closures before setting out and never enter a closed or flooded area. Stay on marked paths, keep distance from wildlife and do not feed, call, touch or pursue animals. Bring water and protection appropriate to sun, rain and insects. Keep noise low at hides and leave space for other observers. Check which entrance and open route suit your mobility needs.",
    evidence:
      "NParks publishes the reserve's opening hours, map, access information and flood notices. Its separate nature article explains mangroves, tidal observation and bird migration. EA has not walked the current routes or verified conditions. The official photograph shows the Kingfisher Pod structure at the reserve, not an animal encounter or a guarantee that every path is open.",
    duration:
      "Self-paced. Allow a morning or afternoon including travel from central Singapore",
    participation:
      "Independent walking and wildlife observation on open public routes",
    access:
      "Public reserve access during current opening hours. Consult NParks for entrance, transport, map and closures before leaving. No guided tour or wildlife sighting is included.",
    guideReview: review("public_admission", [
      {
        title: "NParks: Sungei Buloh Wetland Reserve",
        url: "https://www.nparks.gov.sg/visit/parks/park-detail/sungei-buloh-wetland-reserve",
        note: "Official access page with opening hours, maps, visitor entrances, habitat information and specific flood or trail closure notices.",
      },
      {
        title: "NParks: Awake to Sungei Buloh Wetland Reserve",
        url: "https://www.nparks.gov.sg/publications-resources/articles/awake-to-sungei-buloh-wetland-reserve",
        note: "Darius Tay's NParks article provides context on mangroves, observation and the September-to-March migratory season. Sightings are not guaranteed.",
      },
    ]),
  },
];
