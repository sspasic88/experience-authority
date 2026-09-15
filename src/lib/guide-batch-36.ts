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

export const guideBatch36: PublicExperience[] = [
  {
    id: "vama-egg-museum-workshop",
    slug: "draw-the-line-that-keeps-the-colour-out",
    title: "Draw the line that keeps the colour out",
    summary:
      "Enter Bucovina through wax, dye and a first decorated egg made under Letitia Orsivschi's direction in Vama.",
    field: "make",
    place: "Vama",
    country: "Romania",
    countrySlug: "romania",
    regionSlug: "bucovina",
    status: "public_guide",
    demo: false,
    ...guideImage("vama-egg-museum-workshop"),
    kernel:
      "Begin with the museum collection, then choose the public workshop described by the Vama Egg Museum. Letitia Orsivschi explains the symbols used in Bucovina and directs visitors as they decorate an egg. Pay attention to the order. A wax line protects one colour while the next dye changes everything around it. The object is small enough to hold, but the useful lesson is larger: pattern is planned through what the maker decides not to colour yet.",
    rootedness:
      "The museum places eggs from many countries beside examples from Bucovina and Vama, including older local motifs made with vegetable colours. The municipality also identifies the collection and workshop as part of Vama's public visitor offer. The guide stays with one named artist-led museum programme. It does not claim that a first attempt reproduces inherited expertise, that every motif is available to copy or that all decorated eggs in Romania share one method.",
    shift:
      "From seeing a finished ornament to understanding how wax, sequence and restraint build the pattern one colour at a time.",
    humanReturn:
      "A souvenir may feel less disposable when your eye can still find the decisions hidden beneath its final surface.",
    responsibility:
      "Confirm the museum opening, workshop availability, duration, language, price and materials directly before travel. Ask which motifs are appropriate for a visitor to attempt and follow the artist's instruction around hot wax, dyes and fragile shells. Do not copy or commercialise a design simply because it was visible. Ask before photographing the artist, another visitor or a close working sequence. The photograph shows Letitia Orsivschi with finished eggs, not the workshop itself. It does not establish today's programme or an EA visit.",
    evidence:
      "The Vama Egg Museum currently publishes its collection, workshop, named teacher, visitor egg-decoration activity and multilingual explanation. Vama municipality independently lists the museum and wax-resist decorating workshop, though its collection figures differ from the museum's current page. These sources support a public museum and directed first attempt. They do not verify daily availability, a particular motif, material inclusion, commercial reuse rights or EA attendance.",
    duration:
      "Confirm the combined museum and workshop duration directly. Leave enough time to see the collection before beginning the practical sequence",
    participation:
      "Artist-directed introductory egg decoration inside the museum's public workshop. No mastery, unrestricted motif use or private studio access is implied",
    access:
      "Use the museum's current contact route to confirm a workshop place and language before travelling to Vama. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Vama Egg Museum: collection and workshop",
        url: "https://muzeuloului-vama.com/",
        note: "Current museum page naming Letitia Orsivschi, the visitor workshop, egg-decoration activity, symbolic explanation and available languages. It is also the exact photograph source.",
      },
      {
        title: "Vama municipality: visitor sights",
        url: "https://vamabucovina.ro/comuna-vama/obiective-turistice/",
        note: "Municipal visitor page locating the museum in Vama and describing its workshop and wax-resist technique. Older collection totals are not used where they conflict with the museum's current figures.",
      },
    ]),
  },
  {
    id: "telavi-milorauli-qvevri",
    slug: "meet-the-wine-below-the-cellar-floor",
    title: "Meet the wine below the cellar floor",
    summary:
      "Step into a Telavi marani, read the buried qvevri and taste four wines after the vessel has changed the question.",
    field: "taste",
    place: "Telavi",
    country: "Georgia",
    countrySlug: "georgia",
    regionSlug: "kakheti",
    status: "public_guide",
    demo: false,
    ...guideImage("telavi-milorauli-qvevri"),
    kernel:
      "Choose Marani Milorauli's published cellar tour and tasting in Telavi. Begin with the circular openings set into the floor before the first glass arrives. Georgia's National Wine Agency explains how qvevri can hold fermentation and ageing below ground, while the exact winery tour brings that vessel into a working cellar and follows it with four wines. Taste for difference only after asking what was made in qvevri, from which grapes and by which method.",
    rootedness:
      "The qvevri is not an atmospheric prop added to a tasting room. The National Wine Agency describes it as central to a Georgian method in which the buried earthenware vessel supports fermentation and storage. Kakheti has its own widely used approach, but one Telavi cellar cannot stand for every Georgian household or winemaker. This guide narrows the original harvest and supra idea to a currently published cellar visit and tasting. Vintage work and a feast are not promised.",
    shift:
      "From choosing Georgian wine by label to recognising the vessel, temperature and cellar decisions beneath the glass.",
    humanReturn:
      "The next bottle can begin a better conversation when you know to ask how the wine met skins, stems, time and earth.",
    responsibility:
      "Reserve directly and confirm the current wines, food, language, mobility access and return transport. Alcohol is optional. Drink only if legal and appropriate for you, taste at your own pace and never drive afterwards. Tell the host about food allergies before arrival. Do not touch qvevri lids, cellar tools or stored wine without invitation. The photograph shows the actual Milorauli cellar but not a current host, tasting or production stage. It does not prove EA attendance.",
    evidence:
      "Marani Milorauli currently publishes an individually scheduled 90 to 120 minute cellar tour in Telavi with a winemaker, four wines, chacha and food. The Georgian National Wine Agency explains qvevri construction and the Kakhetian winemaking method. These sources support a reservable public cellar and tasting route. They do not establish harvest participation, a supra, the exact wines on a future date, independent quality assessment or EA attendance.",
    duration:
      "The current programme states 90 to 120 minutes. Confirm the start time and transport before building the rest of the day",
    participation:
      "Winemaker-led cellar interpretation and tasting. No harvest work, production handling, supra or private household access is included",
    access:
      "Reserve the named tour through Marani Milorauli and confirm the current tasting and food scope. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Marani Milorauli: wine tour and tasting",
        url: "https://www.milorauli.ge/en/product/10",
        note: "Current winery page with individual scheduling, duration, opening window, qvevri cellar, winemaker-led format, tasting and food. It is also the exact source for the cellar photograph.",
      },
      {
        title: "National Wine Agency of Georgia: Qvevri wine",
        url: "https://wine.gov.ge/En/KvevriWine",
        note: "Official background on the buried earthenware vessel and the Kakhetian method. It is cultural and production context, not a review of the selected winery.",
      },
    ]),
  },
  {
    id: "sri-pada-public-pilgrimage",
    slug: "climb-without-making-the-mountain-yours",
    title: "Climb without making the mountain yours",
    summary:
      "Join the seasonal public route to Sri Pada as a guest inside a pilgrimage, not as a conqueror collecting a sunrise.",
    field: "witness",
    place: "Sri Pada",
    country: "Sri Lanka",
    countrySlug: "sri-lanka",
    regionSlug: "central-highlands",
    status: "public_guide",
    demo: false,
    ...guideImage("sri-pada-public-pilgrimage"),
    kernel:
      "Plan only within the established pilgrimage season, normally from the Duruthu full moon in December or January through Vesak in April or May. Use one recognised public trail and treat the people moving toward the sacred footprint as pilgrims, not as atmosphere for a personal summit story. The climb is steep, long and often crowded. Let greetings, bells, pauses and the pace of older family groups tell you what kind of route you have entered.",
    rootedness:
      "Sri Pada is sacred across several religious traditions, with different understandings of the footprint at the summit. Sri Lanka Tourism describes a long-standing public pilgrimage with customs, greetings and multiple routes. That does not make the peak a neutral trekking product. A visitor may use the public path while remaining outside the beliefs and obligations that give the journey its deepest meaning.",
    shift:
      "From treating a mountain as a physical achievement to recognising that the same steps can carry devotion, family memory and obligation.",
    humanReturn:
      "Another famous climb may feel different when reaching the top is no longer the only story worth noticing.",
    responsibility:
      "Check the current season, weather, route condition, transport, accommodation and local guidance before departure. The climb contains thousands of steps and can involve cold, heat, rain, darkness and long queues. Assess your own health and turn back when needed. Carry water and layers, keep the route clean, make space for pilgrims and follow posted rules at religious sites. Do not photograph worship closely without permission. Sunrise, visibility and summit access are never guaranteed. The image shows the route in February 2020, not current conditions or EA attendance.",
    evidence:
      "Sri Lanka Tourism identifies the principal public routes, pilgrimage season, religious significance and visitor customs, and warns that off-season conditions can include rain, wind and mist. The licensed photograph documents pilgrims on the steps in February 2020. These sources support a seasonal public pilgrimage route with a strong responsibility boundary. They do not assess individual fitness, guarantee a current opening date, sunrise, crowd level or EA attendance.",
    duration:
      "A demanding overnight or early-morning route whose duration varies substantially by trail, crowd, weather and individual capacity. Do not rely on one generic ascent time",
    participation:
      "Independent movement on a public pilgrimage route. No religious role, ritual participation, guide, summit priority or spiritual outcome is implied",
    access:
      "Start with Sri Lanka Tourism's current route and season guidance, then confirm local conditions before travelling to the trailhead. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Sri Lanka Tourism: Sri Pada pilgrimage",
        url: "https://www.srilanka.travel/festive?article=55",
        note: "Official introduction to the seasonal public pilgrimage, religious significance, customs and practical character of the climb. Exact dates still require a current local check.",
      },
      {
        title: "Sri Lanka Tourism: Adam's Peak visitor route",
        url: "https://srilanka.travel/index.php?attraction_id=150&route=attractions%2Fattraction",
        note: "Official route overview naming six trails and warning about off-season rain, wind and mist. Outdated price information on the page is deliberately not repeated.",
      },
      {
        title: "Wikimedia Commons: Adam's Peak, February 2020",
        url: "https://commons.wikimedia.org/wiki/File:Adam%27s_Peak_-_February_2020_(3).jpg",
        note: "Image record identifying Rehman Abubakr's photograph of pilgrims on the route and documenting its CC BY-SA 4.0 licence.",
      },
    ]),
  },
  {
    id: "addis-hadero-coffee-gallery",
    slug: "let-the-jebena-slow-the-cup",
    title: "Let the jebena slow the cup",
    summary:
      "Follow coffee through an Addis roastery and finish with the open-fire ceremony that refuses to behave like a quick order.",
    field: "taste",
    place: "Addis Ababa",
    country: "Ethiopia",
    countrySlug: "ethiopia",
    regionSlug: "addis-ababa",
    status: "public_guide",
    demo: false,
    ...guideImage("addis-hadero-coffee-gallery"),
    kernel:
      "Use Hadero Coffee Gallery's published visitor route to connect the crop, processing and cup without claiming entry into a private social gathering. The programme moves through gallery displays, green-coffee sorting, a working roastery and cupping before a coffee ceremony prepared over an open fire. Notice how the jebena, repeated pours, aroma and time around the cup resist the speed of an ordinary cafe transaction.",
    rootedness:
      "Coffee ceremony in Ethiopia is a social practice whose meaning cannot be completed by one commercial visitor programme. Hadero offers a bounded public interpretation in Addis Ababa, supported by a gallery and processing tour. This guide treats that as an introduction with a known host and access route. It does not turn every Ethiopian household practice into visitor inventory or suggest that a purchased tour creates private belonging.",
    shift:
      "From drinking an origin quickly to recognising the sorting, roasting, vessels and shared time that can gather around one cup.",
    humanReturn:
      "Coffee may stop feeling like a pause between tasks when the preparation itself becomes the reason to stay.",
    responsibility:
      "Confirm the tour day, start time, language, group size, mobility access, tasting and food details before arrival. The contact page currently publishes weekday and Saturday hours and says Sunday is closed, but a tour still requires direct confirmation. Follow instructions around the roaster, open fire and hot vessels. Ask before photographing staff or other guests. The photograph shows a jebena at the gallery, not a complete ceremony or EA visit.",
    evidence:
      "Hadero currently publishes a gallery and roastery tour with green-coffee sorting, cupping, roast-master interpretation, an open-fire coffee ceremony and storytelling. Its contact page provides the Addis location and operating hours. Visit Ethiopia also includes the gallery and processing plant in official visitor material. These sources support a public commercial introduction, not a private invitation, a complete account of Ethiopian coffee culture, independent quality assessment or EA attendance.",
    duration:
      "Confirm the current tour duration and start time directly. Do not compress the ceremony into a short gap between fixed appointments",
    participation:
      "Guided gallery, roastery and tasting route followed by a hosted coffee ceremony. Exact hands-on steps depend on the current programme",
    access:
      "Contact Hadero Coffee Gallery in advance and confirm the tour rather than relying on general opening hours alone. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Hadero Coffee: gallery and tour",
        url: "https://hadero.et/gallery-tour/",
        note: "Current provider page describing the gallery, roastery, green-coffee sorting, cupping, roast-master interpretation, open-fire ceremony and storytelling. It is also the exact image source.",
      },
      {
        title: "Hadero Coffee: Addis contact and hours",
        url: "https://hadero.et/contact-us-2/",
        note: "Current address and general operating hours. These hours are not treated as guaranteed tour availability.",
      },
      {
        title: "Visit Ethiopia: destination brochure",
        url: "https://www.visitethiopia.et/themes/mytravel/ass/UNFoodSystemsSummit2025Brochure.pdf",
        note: "Official visitor material naming Hadero Coffee Gallery and processing plant, its exhibits, plant tour, cupping and ceremony. It is not an independent review.",
      },
    ]),
  },
  {
    id: "lamu-kijani-dhow-sail",
    slug: "let-the-lateen-sail-read-lamus-water",
    title: "Let the lateen sail read Lamu's water",
    summary:
      "Take a short sunrise or sunset dhow sail through Lamu's mangroves and let wind, tide and working knowledge set the pace.",
    field: "move",
    place: "Lamu",
    country: "Kenya",
    countrySlug: "kenya",
    regionSlug: "lamu-archipelago",
    status: "public_guide",
    demo: false,
    ...guideImage("lamu-kijani-dhow-sail"),
    kernel:
      "Choose the bounded 90-minute dhow cruise currently published by Kijani Hotel at sunrise or sunset. Once the lateen sail opens, watch the crew read wind, shallow water and mangrove edges rather than treating the boat as a floating viewing platform. Kenya's tourism authority places dhow travel inside Lamu's relationship with the sea. The short route can make that relationship visible without inventing a sailing lesson or access to a working fishing voyage.",
    rootedness:
      "Dhows have long connected Lamu's islands, settlements and trade across the Swahili coast. Their form and use carry more than a scenic silhouette. The selected excursion is a contemporary visitor sail run through one named property, not proof of how every boat was built, owned or worked. This guide stays with public passenger access and gives skilled handling back to the crew.",
    shift:
      "From admiring Lamu beside the water to noticing how a sail, crew and changing channel make movement possible.",
    humanReturn:
      "A boat ride can become more memorable when the intelligence that moves the boat matters as much as the view from it.",
    responsibility:
      "Book ahead and confirm departure point, passenger limit, lifejackets, weather policy, mobility needs, child conditions and return arrangement. Follow the skipper's instructions and keep hands clear of ropes and moving rigging. Do not assume that calm water, a full sail or a motor-free trip is guaranteed. Ask before photographing crew or nearby working boats. The photograph shows another Lamu dhow in 2022, not the selected excursion, its crew or EA attendance.",
    evidence:
      "Kijani Hotel currently publishes a 90-minute sunrise or sunset dhow cruise through the mangroves with advance booking. Magical Kenya independently presents dhow sailing as integral to Lamu's maritime setting. The licensed photograph documents a dhow sailing near Lamu. These sources support a short public passenger sail. They do not support sailing instruction, fishing participation, a specific vessel, guaranteed wind, independently verified benefit or EA attendance.",
    duration:
      "The current Kijani listing states one and a half hours. Confirm departure and return timing because wind and local conditions still matter",
    participation:
      "Crewed passenger sail at sunrise or sunset. No sailing lesson, fishing work, boatbuilding access or independent boat handling is included",
    access:
      "Use Kijani Hotel's current activities page and book in advance through its direct route. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Kijani Hotel: Lamu activities",
        url: "https://www.kijani-lamu.com/activities/",
        note: "Current provider page publishing the 90-minute sunrise or sunset dhow cruise, mangrove route, passenger basis and advance-booking requirement.",
      },
      {
        title: "Magical Kenya: sail Lamu by dhow",
        url: "https://domino-140.magicalkenya.com/default.nsf/doc21/4YMS72FZEI2?e=2&l=1&opendocument=&p=y&s=3",
        note: "Official destination context for dhow sailing and Lamu's maritime life. It does not review the selected operator.",
      },
      {
        title: "Wikimedia Commons: traditional dhow in Lamu",
        url: "https://commons.wikimedia.org/wiki/File:Traditional_dhow_sailboat_in_Lamu,_Kenya.jpg",
        note: "Image record identifying Elena Laps's 2022 photograph and documenting its CC BY-SA 4.0 licence.",
      },
    ]),
  },
  {
    id: "entebbe-ewaffe-barkcloth",
    slug: "hear-the-mallet-open-the-cloth",
    title: "Hear the mallet open the cloth",
    summary:
      "See barkcloth widen under a grooved wooden mallet during a short, host-led introduction in Entebbe.",
    field: "make",
    place: "Entebbe",
    country: "Uganda",
    countrySlug: "uganda",
    regionSlug: "entebbe",
    status: "public_guide",
    demo: false,
    ...guideImage("entebbe-ewaffe-barkcloth"),
    kernel:
      "Choose Ewaffe Cultural Village's published Entebbe Mini Experience and listen for the barkcloth section within its wider two-hour programme. The host explains how the inner bark is worked, then demonstrates the repeated blows that widen and soften it. Watch the relationship between tool, rhythm and material. A short demonstration can reveal the labour inside the finished cloth without pretending that observation transfers the skill to a first-time visitor.",
    rootedness:
      "Barkcloth carries histories of making, dress and social use that cannot be contained by one visitor stop. Ewaffe offers a bounded introduction alongside food, coffee and other elements of its cultural programme. This guide keeps the claim narrow. It does not present the demonstration as a complete apprenticeship, imply that every visitor handles the tools or treat barkcloth as an anonymous decorative surface.",
    shift:
      "From seeing a soft brown textile to recognising the repeated force, judgement and material knowledge required to open it.",
    humanReturn:
      "A handmade surface can become harder to dismiss once you have heard the rhythm that brought it into being.",
    responsibility:
      "Book at least a day ahead and confirm the exact programme, language, group size, transport, food and mobility conditions. Follow the host's instructions around the mallet, log and working material. Do not assume that handling the tool or taking barkcloth away is included. Ask before photographing the host, another participant or a close working sequence. The image shows a demonstration published by Ewaffe, not a guaranteed visitor action or an EA visit.",
    evidence:
      "Ewaffe currently publishes a two-hour Entebbe Mini Experience available by advance booking and describes an approximately 20-minute barkcloth story showing how the material is made. Uganda's museums portal provides broader institutional context for the country's cultural collections. These sources support a public host-led introduction. They do not establish unrestricted participation, complete production, independent quality assessment or EA attendance.",
    duration:
      "The full Entebbe Mini Experience is currently listed as two hours, with about 20 minutes assigned to the barkcloth story. Confirm the sequence directly",
    participation:
      "Host-led explanation and demonstration inside a broader cultural programme. Visitor tool use, a finished object and full process access are not promised",
    access:
      "Reserve directly with Ewaffe at least one day ahead and confirm that the barkcloth segment remains in the selected programme. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Ewaffe Cultural Village: Entebbe Mini Experience",
        url: "https://www.ewaffe.ug/entebbe/",
        note: "Current provider page listing the two-hour programme, advance-booking requirement and approximately 20-minute barkcloth story. It is also the exact photograph source.",
      },
      {
        title: "Uganda museums portal: virtual rooms",
        url: "https://museums.tourism.go.ug/virtual-rooms/",
        note: "Official cultural-institution context from Uganda's museums portal. It does not review Ewaffe or establish the precise visitor activity.",
      },
    ]),
  },
  {
    id: "skidegate-haida-heritage-centre",
    slug: "begin-haida-gwaii-with-haida-voices",
    title: "Begin Haida Gwaii with Haida voices",
    summary:
      "Make the Haida Heritage Centre at Ḵay Llnagaay your first orientation, then let it change the rest of the route.",
    field: "learn",
    place: "Skidegate",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "haida-gwaii",
    status: "public_guide",
    demo: false,
    ...guideImage("skidegate-haida-heritage-centre"),
    kernel:
      "Visit the Haida Heritage Centre at Ḵay Llnagaay near the beginning of a Haida Gwaii stay. Move through the exhibitions, carving house and public interpretation before turning the islands into a checklist of landscapes. When the seasonal cultural tour is available, let its Haida guide establish the terms, names and histories that should travel with you beyond the building. The useful outcome is not completion. It is a better-informed way to enter the rest of the place.",
    rootedness:
      "The centre is a Haida institution in Haida Gwaii, not a generic museum borrowing Indigenous material for visitor atmosphere. Its galleries, poles, canoe, language and public programmes are held within a living community context. Admission does not grant access to all knowledge, sites, ceremonies or people. This guide begins with the centre precisely because a visitor should not invent that access independently.",
    shift:
      "From arriving with a landscape itinerary to understanding that every later stop sits inside Haida histories, responsibilities and present life.",
    humanReturn:
      "A destination can remain vivid longer when its own voices have changed the names, questions and silences you carry through it.",
    responsibility:
      "Check current opening dates, admission, cultural-tour schedule, accessibility and ferry or flight conditions before travel. Follow the centre's photography and conduct rules. Do not assume that every carved object, story or place is available for reproduction, geotagging or further access. Use the destination's visitor pledge and local planning guidance beyond the centre. The image shows the centre exterior, not a current programme, guide or EA visit.",
    evidence:
      "The Haida Heritage Centre publishes its location at Ḵay Llnagaay, exhibitions, public visitor information and seasonal cultural tours. Go Haida Gwaii provides community-based planning guidance for travel across the islands. These sources support public institutional admission and a published tour when scheduled. They do not grant cultural authority to EA, guarantee a particular interpreter or programme, or open restricted sites and knowledge.",
    duration:
      "Allow several unhurried hours and confirm the current cultural-tour time separately. Do not schedule the visit as a brief photo stop between transport connections",
    participation:
      "Public museum admission with optional scheduled cultural interpretation. No private community, ceremony, archive or restricted-site access is implied",
    access:
      "Use the centre's current visitor information and Go Haida Gwaii planning guidance before fixing transport and dates. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Haida Heritage Centre",
        url: "https://www.haidaheritagecentre.com/",
        note: "The institution's current public visitor entry point, identity and practical notices.",
      },
      {
        title: "Haida Heritage Centre: explore",
        url: "https://www.haidaheritagecentre.com/explore/",
        note: "Current overview of the galleries, cultural tour and visitor experience. It is also the exact source for the exterior photograph.",
      },
      {
        title: "Go Haida Gwaii: plan your trip",
        url: "https://www.gohaidagwaii.ca/plan-your-trip",
        note: "Community destination guidance for responsible planning across Haida Gwaii. It does not replace current centre hours or transport checks.",
      },
    ]),
  },
  {
    id: "lafayette-bal-du-dimanche",
    slug: "let-the-band-open-the-dance-floor",
    title: "Let the band open the dance floor",
    summary:
      "Spend a Sunday afternoon at Vermilionville where live Cajun or Creole music turns a museum visit into a shared Lafayette floor.",
    field: "gather",
    place: "Lafayette",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "lafayette-louisiana",
    status: "public_guide",
    demo: false,
    ...guideImage("lafayette-bal-du-dimanche"),
    kernel:
      "Choose a named Bal du Dimanche on Vermilionville's current calendar rather than arriving for an abstract promise of Cajun music. Enter while the band and dancers are building the room. Watch how experienced pairs find the pulse, then join only when the floor and your own comfort make that sensible. Lafayette Travel's two-step guidance can give a beginner a few useful cues, but the afternoon works even if you spend the first songs listening.",
    rootedness:
      "The Sunday dance sits inside a living Louisiana music and social-dance ecology rather than a costume display staged solely for visitors. Vermilionville's programme may feature Cajun or Creole artists and each band changes the floor. This guide does not collapse those traditions into one sound, promise a lesson or claim that attendance makes a visitor part of the community.",
    shift:
      "From consuming regional music as background to noticing how a live band, shared floor and returning dancers make the tradition social.",
    humanReturn:
      "A song can stay in the body differently after you have watched an entire room decide together where its beat lives.",
    responsibility:
      "Use the live calendar and select a named date. Confirm admission, museum access, timing, accessibility and any schedule change on the day. The event can be pre-empted. Ask before joining a partner, respect a refusal and make room for regular dancers. Hearing protection is reasonable near amplified music. Do not photograph identifiable people closely without permission. The image shows dancing at Vermilionville but may not show the selected date or performers, and it is not an EA visit.",
    evidence:
      "Vermilionville's current calendar lists named Bal du Dimanche events, normally from 1 to 4 pm, and warns that dates can be pre-empted. Lafayette Travel publishes beginner context for local two-step dancing and identifies the venue as a place to hear and dance to live music. These sources support a scheduled public social-dance event. They do not guarantee a lesson, partner, exact music style, unchanged performer or EA attendance.",
    duration:
      "The listed Sunday dances currently run for three hours. Arrive early enough to read the room and confirm the event before making it the day's fixed anchor",
    participation:
      "Public live music and optional social dancing. A lesson, dance partner, reserved place and particular repertoire are not included unless separately listed",
    access:
      "Choose a named Bal du Dimanche on Vermilionville's live calendar and recheck it on the day. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Vermilionville: events calendar",
        url: "https://bayouvermiliondistrict.org/events/map/",
        note: "Current first-party calendar listing named Bal du Dimanche dates, performers, times and the possibility of pre-emption.",
      },
      {
        title: "Lafayette Travel: a two-stepping good time",
        url: "https://www.lafayettetravel.com/plan/trip-ideas-itineraries/two-stepping-good-time/",
        note: "Official destination guidance on local dance venues and beginner two-step context. It does not guarantee instruction at Vermilionville.",
      },
      {
        title: "Lafayette Travel: Vermilionville",
        url: "https://www.lafayettetravel.com/listing/vermilionville-living-history-museum-%26-folklife-park/1393/",
        note: "Official venue listing and exact source for the dance photograph. Individual people, date and photographer are not named.",
      },
    ]),
  },
  {
    id: "rio-sambadrome-technical-rehearsal",
    slug: "watch-rio-build-the-parade-before-carnaval",
    title: "Watch Rio build the parade before Carnaval",
    summary:
      "Take a free seat at a 2027 Sambadrome technical rehearsal and watch a samba school test movement, singing and scale.",
    field: "witness",
    place: "Rio de Janeiro",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    status: "public_guide",
    demo: false,
    ...guideImage("rio-sambadrome-technical-rehearsal"),
    kernel:
      "Use Rio's official 2027 calendar and choose one of the free technical-rehearsal nights at the Sambadrome. The competition is still ahead. Schools use the avenue to test singing, movement, timing and the relationship between their community and monumental parade space. Watch what repeats and what stops. A rehearsal can expose coordination and collective labour that the finished broadcast often hides behind costume and spectacle.",
    rootedness:
      "A samba school is not a cast assembled for a visitor show. Its parade grows through neighbourhood organisations, musicians, dancers, makers and months of preparation. Public technical rehearsals create a legitimate way to witness part of that work from the stands. They do not grant entry to the parade floor, rehearsal quadra, workshops or internal community roles.",
    shift:
      "From seeing Carnaval as a finished spectacle to recognising the repetition, correction and collective scale required before it can move.",
    humanReturn:
      "The polished event may become more astonishing after you have seen how much unfinished work it is brave enough to reveal.",
    responsibility:
      "Use the official calendar and wait for detailed times, school order and access instructions before fixing the night. The 2027 article currently lists January 23, 24, 30 and 31 and says admission is free, but operational detail may change. Plan safe transport, keep valuables discreet, prepare for heat, rain, crowds and amplified sound, and follow security instructions. Do not imply access to school members or working areas. The image shows a technical rehearsal published by Riotur, not a guaranteed 2027 scene or EA visit.",
    evidence:
      "Rio's official Carnaval portal published the 2027 technical-rehearsal dates on September 10, 2026 and states that public admission at the Sambadrome will be free. Riotur's 2026 coverage independently demonstrates the recurring public format and operational character of the rehearsals. These sources support a future public observation opportunity. They do not yet supply final nightly times, school order, gate arrangements or an EA assessment.",
    duration:
      "Hold the full evening until the official nightly timetable and school order are published. Entry, queues and the rehearsal sequence can extend well beyond one performance",
    participation:
      "Public observation from authorised spectator areas. No parade-floor, school, workshop, costume or rehearsal-room participation is included",
    access:
      "Follow the official Carnaval Rio calendar for the final timetable and entry instructions. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Carnaval Rio: 2027 technical rehearsal calendar",
        url: "https://carnaval.rio/calendario-dos-ensaios-tecnicos-e-desfiles-das-escolas-mirins-do-carnaval-2027-e-divulgado/",
        note: "Official current announcement of the January 23, 24, 30 and 31, 2027 Sambadrome rehearsal dates and free public admission. It is also the exact photograph source.",
      },
      {
        title: "Riotur: 2026 Gold Series technical rehearsals",
        url: "https://riotur.rio/editorial/carnaval-2026-ensaios-tecnicos-da-serie-ouro-serao-realizados-em-tres-dias-no-sambodromo/",
        note: "Official prior-season context showing the public technical-rehearsal format. It does not establish the final 2027 order or operations.",
      },
    ]),
  },
  {
    id: "kingston-dub-club-sunday",
    slug: "stand-where-the-sound-system-does-the-talking",
    title: "Stand where the sound system does the talking",
    summary:
      "Climb to Jack's Hill on a confirmed Sunday and hear roots, rockers and dub through Kingston Dub Club's own speaker stack.",
    field: "gather",
    place: "Kingston",
    country: "Jamaica",
    countrySlug: "jamaica",
    regionSlug: "kingston-jamaica",
    status: "public_guide",
    demo: false,
    ...guideImage("kingston-dub-club-sunday"),
    kernel:
      "Confirm the Sunday session directly, then arrange the climb to Kingston Dub Club at Jack's Hill with the journey home already solved. Stand far enough from the stack to listen well rather than merely endure volume. Let selectors, bass weight and the sequence between roots, rockers and dub reveal why a sound system is more than equipment. The experience is the relationship between records, operator, speakers, hillside and the people who return.",
    rootedness:
      "Jamaican sound-system culture shaped how recorded music is selected, amplified, voiced and shared far beyond the island. Kingston Dub Club offers a current public Sunday setting around Rockers Sound Station. A paid or public night does not create backstage access, friendship with operators or authority to tell the whole culture. This guide stays with respectful attendance in the space the club itself publishes.",
    shift:
      "From treating dub as a playlist category to hearing how selection, space and a hand-built system turn recordings into a public event.",
    humanReturn:
      "Recorded music can feel newly alive once you have heard a room and a speaker stack become part of the performance.",
    responsibility:
      "Verify the current Sunday time, admission, age conditions and venue notice directly before leaving. The official page currently states Sunday from 8 pm to 2 am at 7b Skyline Drive, but listings can change. Arrange reliable return transport because the venue is uphill and the session ends late. Use hearing protection, watch alcohol intake, keep valuables discreet and respect the operator's space. Ask before photographing identifiable guests. The image shows the club's sound system, not a specific session or EA visit.",
    evidence:
      "Kingston Dub Club's own public page currently identifies Rockers Sound Station, the Jack's Hill address and a Sunday 8 pm to 2 am session. Visit Jamaica separately lists the venue and publishes the selected photograph. These sources support a recurring public music night. They do not guarantee an uninterrupted weekly schedule, particular selectors, entry price, transport, crowd conditions, independent quality assessment or EA attendance.",
    duration:
      "The club currently publishes Sunday from 8 pm to 2 am. Confirm the night and build the duration around safe return transport rather than an assumed closing time",
    participation:
      "Public attendance and listening. No booth, selector, microphone, backstage or private-session access is implied",
    access:
      "Check Kingston Dub Club's official page on the day and arrange return transport before travelling to Jack's Hill. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Kingston Dub Club: official visitor page",
        url: "https://mbprointernational.wixsite.com/dub-club",
        note: "The club's current public page naming Rockers Sound Station, Sunday hours and the Jack's Hill address. Confirm the specific night directly.",
      },
      {
        title: "Visit Jamaica: Kingston Dub Club",
        url: "https://www.visitjamaica.com/listing/kingston-dub-club/3655/",
        note: "Official destination listing for the venue and exact source of the selected sound-system photograph. It does not replace same-day confirmation.",
      },
    ]),
  },
];
