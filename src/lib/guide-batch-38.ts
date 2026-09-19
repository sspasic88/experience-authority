import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-19",
  reviewBy: "2026-12-18",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch38: PublicExperience[] = [
  {
    id: "hopkins-palmento-garifuna-cooking",
    slug: "build-hudut-from-the-coconut-outward",
    title: "Build hudut from the coconut outward",
    summary:
      "Turn coconut, plantain and fish into a Garifuna meal at a Hopkins programme run by the family that hosts it.",
    field: "taste",
    place: "Hopkins",
    country: "Belize",
    countrySlug: "belize",
    regionSlug: "stann-creek",
    status: "public_guide",
    demo: false,
    ...guideImage("hopkins-palmento-garifuna-cooking"),
    kernel:
      "Choose Palmento Grove's published farm-to-table cooking class and confirm that cooking, not a bundled performance, is the centre of your session. Begin with fresh coconut milk and plantain rather than the finished plate. Follow the host's sequence, take the task offered and leave enough time to understand why hudut belongs to Garifuna family life as well as a visitor programme.",
    rootedness:
      "Palmento Grove identifies itself as a Garifuna-owned family operation in Hopkins and names Uwahnie Martinez as its founder. Travel Belize places hudut inside a wider Garifuna cultural experience. A public class can open one kitchen process. It cannot stand in for every Garifuna household, make a recipe communal property or turn hospitality into proof of intimacy.",
    shift:
      "From ordering an island dish to recognising the labour, sequence and family knowledge inside the bowl.",
    humanReturn:
      "Coconut milk may stop feeling like an ingredient once you have watched a meal begin before the tin or menu.",
    responsibility:
      "Reserve directly and confirm the exact class, host, ingredients, allergies, transport, group size, price and what participants will prepare. Keep spiritual and healing claims outside this guide. Ask before photographing people or a family workspace. The image shows a finished hudut plate published by Travel Belize, not the Palmento Grove class, its current host or an EA visit.",
    evidence:
      "Palmento Grove currently publishes a hands-on Garifuna cooking class in Hopkins and identifies its family team. Travel Belize describes a Hopkins hudut class and the sequence from coconut and fish to mashed plantain. Together they support a host-run public cooking programme. They do not independently verify quality, ingredient sourcing, payment distribution, daily availability or EA attendance.",
    duration:
      "Confirm the current length, meal timing and boat or road transfer before building it into a travel day",
    participation:
      "Host-directed cooking with the tasks and cultural explanation chosen by the family. No private household access or recipe ownership is implied",
    access:
      "Use Palmento Grove's current programme and booking route to confirm the class directly. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Palmento Grove: cultural and culinary programmes",
        url: "https://www.palmentogrove.com/",
        note: "Current family-run Hopkins programme page naming the team and a hands-on Garifuna cooking class.",
      },
      {
        title: "Travel Belize: a Garifuna cultural experience",
        url: "https://www.travelbelize.org/blog/garifuna-cultural-experience/",
        note: "Official destination context for the hudut sequence in Hopkins and the exact photograph source.",
      },
    ]),
  },
  {
    id: "gisakura-public-tea-tour",
    slug: "pick-the-leaf-before-the-cup",
    title: "Pick the leaf before the cup",
    summary:
      "Enter Rwanda's tea landscape at Gisakura through a pre-arranged public tour that keeps field, factory and tasting connected.",
    field: "work",
    place: "Gisakura",
    country: "Rwanda",
    countrySlug: "rwanda",
    regionSlug: "nyungwe",
    status: "public_guide",
    demo: false,
    ...guideImage("gisakura-public-tea-tour"),
    kernel:
      "Arrange a Gisakura tea visit through Visit Rwanda or a current licensed operator. Ask for the version that begins among the bushes and explains which leaves are picked before moving toward processing and tasting. If a host offers a short picking step, treat it as an introduction to skilled work, not a harvest performance or a claim that you have worked a tea field.",
    rootedness:
      "Tea shapes the hills along Nyungwe and supports a much larger chain of growers, pickers, factories and buyers. Visit Rwanda states that plantations do not liaise with tourists directly. That boundary matters. The visitor route must be arranged, and access to a field does not disclose wages, land relations or the full economics behind the cup.",
    shift:
      "From reading flavour notes to seeing how leaf choice, elevation, labour and processing arrive in the same cup.",
    humanReturn:
      "A handful of bright leaves can make the finished drink feel less automatic and more accountable.",
    responsibility:
      "Arrange the visit before travelling and confirm operator licensing, field access, factory access, worker photography, footwear, weather and what tasting includes. Do not photograph workers closely without consent or frame a brief visitor task as equivalence with paid labour. The image shows a real tea harvest published by Visit Rwanda, not a confirmed visitor group or an EA visit.",
    evidence:
      "Visit Rwanda currently states that Gisakura offers tours and tastings arranged through an operator or Visit Rwanda. Its destination guide also describes learning to pick tea leaves at Gisakura. These official sources support a pre-arranged public agro-tourism visit. They do not verify a cooperative host, guarantee factory access, establish a daily schedule or prove EA attendance.",
    duration:
      "Usually part of a pre-arranged half day around Nyungwe. Confirm the exact field, factory and tasting sequence before departure",
    participation:
      "Guided observation with a picking introduction only if the current host offers it. No production role or cooperative membership is implied",
    access:
      "Use Visit Rwanda's tea page and its current booking guidance to arrange the visit through an authorised route. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Visit Rwanda: tea",
        url: "https://visitrwanda.com/interests/tea/",
        note: "Official current access guidance for Gisakura tours, tastings and operator-arranged visits. It is also the photograph source.",
      },
      {
        title: "Visit Rwanda: destination guide",
        url: "https://visitrwanda.com/wp-content/uploads/2024/07/Rwanda-destination-Guide.pdf",
        note: "Official guide describing the Gisakura field experience and introductory tea picking. Exact delivery still requires confirmation.",
      },
    ]),
  },
  {
    id: "isle-of-palms-sweetgrass-class",
    slug: "coil-the-lowcountry-one-stitch-at-a-time",
    title: "Coil the Lowcountry one stitch at a time",
    summary:
      "Learn the beginning of a sweetgrass basket from a Charleston maker in a current, bounded two-hour class.",
    field: "make",
    place: "Isle of Palms",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "south-carolina-lowcountry",
    status: "public_guide",
    demo: false,
    ...guideImage("isle-of-palms-sweetgrass-class"),
    kernel:
      "Book the Sweetgrass Inn class currently listed by Explore Charleston, then begin with the coil rather than the souvenir. Listen for the maker's account of material, patience and family transmission before trying the first stitches. A small basket made in two hours should reveal the scale of the craft, not suggest that a visitor has mastered it.",
    rootedness:
      "Sweetgrass basketry in the Lowcountry carries Gullah Geechee knowledge with roots in West African rice cultures. The current class is taught by a Charleston native and offers a defined making task. It cannot speak for every maker, replace the history of labour and land behind the material or give a visitor ownership of a family tradition.",
    shift:
      "From admiring a finished spiral to feeling how much time and judgement are held inside one coil.",
    humanReturn:
      "The basket you carry away may matter less as an object than as a measure of the maker's fluency.",
    responsibility:
      "Confirm the current Thursday date, instructor, materials, accessibility, age limit, capacity, price and cancellation policy. Credit the maker when showing your work and do not copy or commercialise a design. Ask before photographing the instructor. The image shows a named maker with finished baskets, not the current class in progress or an EA visit.",
    evidence:
      "Explore Charleston currently lists a two-hour Thursday class at Sweetgrass Inn from 16 September 2026 to 28 January 2027. National Park Service context locates sweetgrass basketry within Gullah Geechee heritage. These sources support the dated public class and its cultural context. They do not independently verify the instructor for each date, material provenance, benefit distribution or EA attendance.",
    duration:
      "Two hours on listed Thursdays at 10am. Confirm a live place before travelling to Isle of Palms",
    participation:
      "Instructor-led introductory basket making with supplied materials. No mastery, design ownership or harvest access is implied",
    access:
      "Use the live Explore Charleston listing and the linked venue route to reserve the current class directly. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Explore Charleston: Sweetgrass Basket Making Class",
        url: "https://www.charlestoncvb.com/events/sweetgrass-basket-making-class~27880/",
        note: "Current official destination listing with dates, venue, duration, price, age guidance and contact. It is also the exact photograph source.",
      },
      {
        title: "National Park Service: Gullah Geechee heritage",
        url: "https://www.nps.gov/subjects/africanamericanheritage/gullah-geechee.htm",
        note: "Public heritage context for Gullah Geechee history. It is not a booking or endorsement source.",
      },
    ]),
  },
  {
    id: "kyrgyzstan-public-yurt-installation",
    slug: "raise-a-room-from-a-circle",
    title: "Raise a room from a circle",
    summary:
      "Join a published Kyrgyz yurt installation and watch a portable home become structure, felt and collective memory.",
    field: "make",
    place: "Naryn Region",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    regionSlug: "naryn",
    status: "public_guide",
    demo: false,
    ...guideImage("kyrgyzstan-public-yurt-installation"),
    kernel:
      "Reserve the yurt installation published by the Rural Tourism Alliance Kyrgyzstan. Let the host assign each action, from opening the lattice wall to lifting roof poles and placing felt. Pay attention to how the structure depends on sequence and coordination. Tea inside is the closing gesture, not proof that a short demonstration reproduces nomadic life.",
    rootedness:
      "The yurt is architecture, family knowledge and a working response to movement through land. Visit Kyrgyzstan places local families at the centre of the explanation. A public installation can reveal the system. It cannot compress regional variation, household meaning or the labour of making every wooden and felt component into one tourist exercise.",
    shift:
      "From seeing an iconic silhouette to understanding a room as a precise agreement between many separate parts.",
    humanReturn:
      "A circular roof may remain memorable because you helped discover how nothing in it stands alone.",
    responsibility:
      "Confirm the host family, village, transport, weather, language, group size, physical demands, price and exact participation before booking. Follow lifting instructions and do not step on textiles or touch decorated objects without guidance. The photograph shows a real yurt installation published by the organiser, not the family, place or date of a future session or an EA visit.",
    evidence:
      "Visit Kyrgyzstan currently publishes a participatory yurt installation led by local families. Its partner page separately identifies family guesthouses that offer yurt-building demonstrations and felt workshops. These sources support a public host-led introduction. They do not establish the exact village for every booking, daily availability, benefit distribution or EA attendance.",
    duration:
      "Confirm whether the installation is a standalone session or part of a stay, and allow weather and transport margin",
    participation:
      "Host-assigned installation tasks suited to the group. No construction competence, household role or private family access is implied",
    access:
      "Use Visit Kyrgyzstan's current activity page to confirm location and reserve through the organiser. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Visit Kyrgyzstan: yurt installation and nomadic life",
        url: "https://visitkyrgyzstan.kg/tour/yurt-installation-nomadic-life/",
        note: "Current Rural Tourism Alliance activity page supporting visitor participation with local-family explanation. It is also the exact photograph source.",
      },
      {
        title: "Visit Kyrgyzstan: partner guesthouses",
        url: "https://visitkyrgyzstan.kg/partners/",
        note: "Current partner context identifying family-run rural hosts and yurt-building demonstrations. Exact booking conditions still require confirmation.",
      },
    ]),
  },
  {
    id: "dili-alola-tais-observation",
    slug: "watch-the-body-tension-the-loom",
    title: "Watch the body tension the loom",
    summary:
      "Meet tais through a Dili tour that visits women weaving, while the makers keep control of the loom and the meaning of its patterns.",
    field: "work",
    place: "Dili",
    country: "Timor-Leste",
    countrySlug: "timor-leste",
    regionSlug: "dili",
    status: "public_guide",
    demo: false,
    ...guideImage("dili-alola-tais-observation"),
    kernel:
      "Choose the Dili orientation tour currently advertising a visit to the Alola Esperansa women's weaving workshop. Treat it as observation unless the weavers explicitly offer another task. Follow thread from colour and tension to the growing textile, then buy only if the maker or shop can explain who made the piece and where the payment goes.",
    rootedness:
      "Tais is used across Timor-Leste, with motifs and colour systems that vary by municipality and carry social meaning. The official tourism platform states that some patterns are restricted to particular families. A public workshop visit can make labour visible. It does not grant permission to reproduce motifs or turn one organisation into the voice of every weaver.",
    shift:
      "From seeing a bright cloth to recognising the body, memory and controlled tension that hold every line in place.",
    humanReturn:
      "A finished textile may become more specific once you have watched the loom depend on the weaver's whole posture.",
    responsibility:
      "Confirm the exact workshop, weaver presence, language, duration, photography rules, purchase route and whether observation interrupts production. Never ask to copy a motif without explicit permission. The photograph shows a tais weaver in Lautem published by The Kindcraft, not Alola Esperansa, the Dili tour or an EA visit.",
    evidence:
      "Timor Indigenous Tours currently advertises a Dili tour that includes watching women weave at Alola Esperansa. Timor-Leste Tourism documents tais practice, workshop participation and motif boundaries. These sources support a named public observation stop. They do not guarantee a particular weaver, hands-on participation, provenance of every item for sale, independent benefit assessment or EA attendance.",
    duration:
      "A stop within a published six-hour Dili orientation tour. Confirm time at the workshop before booking the full route",
    participation:
      "Observation and conversation as directed by the weavers. Hands-on weaving, motif use and private workspace access are not promised",
    access:
      "Use the current Timor Indigenous Tours itinerary to confirm the Alola Esperansa stop directly. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Timor Indigenous Tours: Dili orientation tour",
        url: "https://timorindigenoustours.com/6hr-dili-orientation-tours/",
        note: "Current local operator itinerary naming observation at the Alola Esperansa women’s weaving workshop.",
      },
      {
        title: "Timor-Leste Tourism: arts and crafts",
        url: "https://timorleste.tl/experiences/arts-crafts",
        note: "Official context for tais, workshop participation and community-specific pattern boundaries.",
      },
      {
        title: "The Kindcraft: tais weaving in East Timor",
        url: "https://thekindcraft.com/tais-weaving-in-east-timor/",
        note: "Context and exact photograph source for a weaver in Lautem. It does not depict the Dili programme.",
      },
    ]),
  },
  {
    id: "prague-tyrs-house-sokol-tour",
    slug: "read-prague-through-a-movement",
    title: "Read Prague through a movement",
    summary:
      "Enter Tyrš House on a public Sokol tour and follow one civic movement through architecture, exercise and political interruption.",
    field: "learn",
    place: "Prague",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "prague",
    status: "public_guide",
    demo: false,
    ...guideImage("prague-tyrs-house-sokol-tour"),
    kernel:
      "Reserve the monthly guided tour published by the Czech Sokol organisation. Begin in the courtyard and let the building connect Michna Palace, gymnasiums, the swimming pool and the movement's changing public role. This is a way to understand Sokol through its living headquarters, not an invitation to enter a training session or perform civic belonging.",
    rootedness:
      "Sokol joined physical education to civic life and survived prohibition, state appropriation and restitution. Tyrš House carries those layers in one Prague complex. A guided tour can introduce both history and current use. It cannot represent every local unit, replace testimony from members or turn a mass movement into a picturesque sports club.",
    shift:
      "From reading Prague through monuments to reading it through the bodies and organisations that tried to shape civic life.",
    humanReturn:
      "A gymnasium may stay with you as political architecture rather than an anonymous room for exercise.",
    responsibility:
      "Reserve the specific monthly date and confirm language, route, cash payment, accessibility and which spaces are included. Ordinary tour admission does not include a class, pool use or member access. Follow photography rules. The photograph shows a 2026 guided group in the courtyard, not a guaranteed route or an EA visit.",
    evidence:
      "Czech Sokol currently publishes public guided tours on the third Wednesday of each month in 2026, with a reservation route, price and accessibility note. Prague City Tourism provides independent place and architectural context. These sources support a public guided visit. They do not support the original proposal to join a local gymnastics session or prove EA attendance.",
    duration:
      "Sixty minutes on the published monthly schedule. Arrive at the courtyard meeting point with a confirmed reservation",
    participation:
      "Guided architectural and movement-history tour. No gymnastics, pool use, club membership or training observation is included",
    access:
      "Use the Czech Sokol 2026 tour page and its reservation route. Group visits require separate direct confirmation. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Czech Sokol: Tyrš House tours in 2026",
        url: "https://www.sokol.eu/aktualita/komentovane-prohlidky-tyrsova-domu-pokracuji-i-v-roce-2026",
        note: "Current holder page with the recurring schedule, duration, price, meeting point and accessibility boundary. It is also the exact photograph source.",
      },
      {
        title: "Prague City Tourism: Tyrš House",
        url: "https://prague.eu/en/objevujte/tyrsuv-dum-tyrs-house-michna-palace/",
        note: "Official city context for the complex, its architectural layers and Sokol history. It is not the reservation source.",
      },
    ]),
  },
  {
    id: "detva-podpolianske-fujara-museum",
    slug: "hear-the-flute-before-anyone-plays",
    title: "Hear the flute before anyone plays",
    summary:
      "Meet the fujara through twenty-one instruments in Detva before asking where its deep voice can responsibly be heard live.",
    field: "learn",
    place: "Detva",
    country: "Slovakia",
    countrySlug: "slovakia",
    regionSlug: "podpolanie",
    status: "public_guide",
    demo: false,
    ...guideImage("detva-podpolianske-fujara-museum"),
    kernel:
      "Start at the Podpolianske Museum's permanent folk-instrument exhibition. Look closely at the length, finger holes, decoration and maker variation across its fujaras before using any current calendar to look for a live player. The museum is the dependable public entry. A performance or lesson belongs only if a separate current listing confirms it.",
    rootedness:
      "UNESCO identifies the fujara and its music with central Slovakia and a tradition joining instrument making, playing and song. The Detva collection brings work by contemporary makers into one room. It can show material continuity and difference. It cannot reproduce the sound, pastoral setting or knowledge held by a player and maker.",
    shift:
      "From treating an unusually long flute as an object of curiosity to seeing a regional system of making, sound and memory.",
    humanReturn:
      "The silence of the display may sharpen the question of whose breath gives the instrument its real scale.",
    responsibility:
      "Check seasonal opening hours, language, admission and Saturday appointment rules before travelling. Do not assume live music, a maker meeting or permission to handle instruments. Follow museum photography rules. The image shows the current instrument exhibition published by Slovakia Travel, not a live performance or an EA visit.",
    evidence:
      "Slovakia Travel currently publishes the museum's permanent folk-instrument exhibition, seasonal hours and contact. UNESCO provides practice-level context for fujara making and music. These sources support ordinary museum admission only. They do not establish a live player, hands-on lesson, maker meeting or EA attendance.",
    duration:
      "Allow about an hour and confirm Saturday appointments at least two days ahead when the seasonal schedule requires it",
    participation:
      "Self-paced museum visit with any handling or sound element limited to what the exhibition explicitly provides",
    access:
      "Use the current Slovakia Travel listing to confirm hours and contact the museum where an appointment is required. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Slovakia Travel: Podpolianske Museum Detva",
        url: "https://slovakia.travel/en/podpolianske-museum-detva",
        note: "Current official visitor listing for the permanent instrument exhibition, hours and access. It is also the exact photograph source.",
      },
      {
        title: "UNESCO: fujara and its music",
        url: "https://ich.unesco.org/en/RL/fujara-and-its-music-00099",
        note: "Practice-level context for the instrument, music and transmission. It is not a visitor-access source.",
      },
    ]),
  },
  {
    id: "asuncion-club-walkers-terere",
    slug: "walk-where-terere-is-everyday-language",
    title: "Walk where tereré is everyday language",
    summary:
      "Use Asunción's public walking club to meet the city while tereré, Guaraní and ordinary hospitality remain part of the street.",
    field: "move",
    place: "Asunción",
    country: "Paraguay",
    countrySlug: "paraguay",
    regionSlug: "asuncion",
    status: "public_guide",
    demo: false,
    ...guideImage("asuncion-club-walkers-terere"),
    kernel:
      "Join SENATUR's current Club de Caminantes route from Turista Róga after confirming the weekday departure. Let the guide introduce central Asunción through streets, squares, architecture and everyday practices including tereré. Bring your own drink only if advised. The walk does not promise that strangers will share a guampa or invite a visitor into a private social circle.",
    rootedness:
      "UNESCO describes tereré with poha ñana as knowledge carried through Guaraní language, medicinal plants and social practice. SENATUR places it among the ordinary expressions encountered on its public city walk. That is a responsible opening because it makes the city, not a staged tasting, the host. A mention on the route does not guarantee preparation or sharing.",
    shift:
      "From collecting a national drink to noticing how a vessel, language and repeated pause organise everyday company.",
    humanReturn:
      "You may remember tereré less as a flavour than as a rhythm by which a warm city makes room for conversation.",
    responsibility:
      "Confirm the current departure day, time, language, meeting point, heat plan, accessibility and whether visitors should bring water or tereré equipment. Never ask to share from another person's vessel. The photograph shows SENATUR's public walking programme, not a promised tereré exchange, named participants or an EA visit.",
    evidence:
      "Visit Paraguay currently lists a weekday guided walking programme from Turista Róga and explicitly names tereré, hospitality and Guaraní among the everyday traditions interpreted on the route. UNESCO provides cultural context for tereré and poha ñana. These sources support the public walk and contextual learning. They do not establish a tasting, private sharing circle or EA attendance.",
    duration:
      "A weekday morning city walk. Confirm the current start and heat conditions through the listed SENATUR contact",
    participation:
      "Public guided walk with observation and conversation. No drink service, private invitation or medicinal guidance is promised",
    access:
      "Use the current Visit Paraguay Club de Caminantes page and listed contact to confirm departure. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Visit Paraguay: Club de Caminantes",
        url: "https://visitparaguay.travel/routes/club-de-caminantes",
        note: "Current SENATUR route with weekday departure, meeting point, contact and tereré context. It is also the exact photograph source.",
      },
      {
        title: "UNESCO: practices and knowledge of tereré",
        url: "https://ich.unesco.org/en/RL/practices-and-traditional-knowledge-of-terere-in-the-culture-of-poha-nana-guarani-ancestral-drink-in-paraguay-01603",
        note: "Cultural context for tereré, poha ñana and transmission. It does not create visitor access to a private sharing circle.",
      },
    ]),
  },
  {
    id: "arta-regulated-whale-shark-tour",
    slug: "meet-the-largest-fish-on-its-terms",
    title: "Meet the largest fish on its terms",
    summary:
      "Enter Arta Bay with a licensed seasonal operator and let Djibouti's protection rules set the shape of the encounter.",
    field: "nature",
    place: "Arta Bay",
    country: "Djibouti",
    countrySlug: "djibouti",
    regionSlug: "gulf-of-tadjoura",
    status: "public_guide",
    demo: false,
    ...guideImage("arta-regulated-whale-shark-tour"),
    kernel:
      "Choose an operator that can show current Djibouti whale-shark authorisation, then read the official distance and boat rules before boarding. Enter the water only when instructed and let the shark decide whether an encounter happens. The purpose is not to close distance for a photograph. It is to witness a seasonal feeding aggregation without changing its direction or pace.",
    rootedness:
      "Juvenile whale sharks gather seasonally in the plankton-rich Gulf of Tadjoura. Djibouti now regulates operator authorisation, boat numbers, approach distance and access days around Arta. A legal framework is a meaningful boundary, not proof that every trip is responsible or that a sighting will occur.",
    shift:
      "From chasing a bucket-list animal to accepting that the most valuable encounter may be the one you do not force.",
    humanReturn:
      "The animal's scale becomes more memorable when your own right to approach it becomes smaller.",
    responsibility:
      "Ask the operator for current authorisation and a passenger briefing. Never touch, feed, chase, block or dive onto a shark. Keep the official boat and swimmer distances, follow the guide and accept cancellation or no sighting. The photograph by Hussan Al Qalaf shows a juvenile whale shark over reef in Djibouti, not the named operator, a current tour or an EA visit.",
    evidence:
      "Djibouti's official decree defines the usual 15 October to 15 March season, licensed-operator authorisation, limited access days and boat-distance rules. A current operator page advertises a one-day Arta whale-shark trip within the coming season. These sources support a regulated public route. They do not verify that the operator presently holds the required permit, guarantee a sighting or establish conservation benefit or EA attendance.",
    duration:
      "A seasonal day trip. Confirm the authorised operating day, sea conditions, briefing, equipment and cancellation terms",
    participation:
      "Boat-based observation and supervised snorkelling only when conditions and guides allow. No contact, pursuit, feeding or sighting guarantee",
    access:
      "Verify the operator's current whale-shark authorisation before paying and use only the official seasonal access calendar. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Massigo Travel: one-day whale shark and Arta Beach tour",
        url: "https://www.travel2djibouti.com/tour-package/one-day-whale-shark-and-arta-beach-tour/",
        note: "Current public programme page with seasonal dates, duration, location and price bands. Operator authorisation must still be verified.",
      },
      {
        title: "Djibouti Official Journal: whale-shark tourism decree",
        url: "https://www.journalofficiel.dj/texte-juridique/decret-n-2023-362-pr-mct-portant-sur-la-protection-et-lattraction-touristique-des-requins-baleines-a-djibouti/",
        note: "Primary legal source for season, authorised operators, access limits, boat conduct and enforcement.",
      },
      {
        title: "Ecology and Evolution: Djibouti whale-shark movements",
        url: "https://ecologyandevolutionblog.wordpress.com/2021/03/26/unravelling-the-mysterious-whereabouts-of-djiboutis-whale-sharks/",
        note: "Research context and exact Hussan Al Qalaf photograph source. It is not a tour endorsement.",
      },
    ]),
  },
  {
    id: "curacao-tambu-shon-cola-museum",
    slug: "let-the-drum-recover-its-history",
    title: "Let the drum recover its history",
    summary:
      "Begin tambú at Shon Cola's museum, where instruments, memory and Afro-Curaçaoan history arrive before entertainment.",
    field: "learn",
    place: "Curaçao",
    country: "Curaçao",
    countrySlug: "curacao",
    regionSlug: "west-curacao",
    status: "public_guide",
    demo: false,
    ...guideImage("curacao-tambu-shon-cola-museum"),
    kernel:
      "Visit Museo di Tambú Shon Cola as the dependable public entry to tambú. Move from the instrument wall and named practitioners toward the music's social history before seeking a current performance elsewhere. If the museum offers a demonstration on your date, let its staff set the context and rules. Ordinary admission does not promise a session or invite visitors to perform.",
    rootedness:
      "Tambú joins drum, song, dance and social commentary within Afro-Curaçaoan history. Curaçao's official tourism platform presents the museum as a place dedicated to that story. A museum can name instruments and people that resort entertainment often erases. It cannot replace a practitioner-led gathering or make every repertoire visible to a visitor.",
    shift:
      "From hearing a Caribbean rhythm as atmosphere to recognising who used sound to carry memory, criticism and collective life.",
    humanReturn:
      "A drum may sound less anonymous once the room has returned names and history to every object around it.",
    responsibility:
      "Confirm current opening hours, tour language, admission, demonstration schedule and photography rules directly. Do not assume that instruments may be handled or that a performance will occur. Keep any later music event separate from this museum guide. The photograph shows the actual museum display published by Curaçao Tourism, not a live session or an EA visit.",
    evidence:
      "Curaçao Tourism currently lists Museo di Tambú Shon Cola among the island's public museums and publishes an image of its instrument display. Its tambú editorial explains the form's history and social role. These sources support museum admission and contextual learning only. They do not support the original practitioner-led session, guarantee a demonstration or prove EA attendance.",
    duration:
      "Confirm opening hours directly and allow enough time for a guided explanation if one is available",
    participation:
      "Museum visit with any demonstration or instrument handling limited to what staff explicitly offer on the day",
    access:
      "Use Curaçao Tourism's museum listing and current contact details to confirm admission. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Curaçao Tourism: Museo di Tambú Shon Cola",
        url: "https://www.curacao.com/en/activity/museo-di-tambu-shon-cola",
        note: "Official public museum listing and exact photograph source. Live programming must be confirmed separately.",
      },
      {
        title: "Curaçao Tourism: tambú, the heartbeat of Curaçao",
        url: "https://www.curacao.com/en/article/tambu-the-heartbeat-of-curacao",
        note: "Official cultural context for tambú as music, dance and social history. It is not proof of a current session.",
      },
    ]),
  },
];
