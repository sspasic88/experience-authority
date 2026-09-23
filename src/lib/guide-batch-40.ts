import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-22",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-23",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});

/** Daily edition: each record has one primary visitor-interest allocation in the run ledger. */
export const guideBatch40: PublicExperience[] = [
  {
    id: "modena-giusti-acetaia",
    slug: "taste-balsamico-before-it-meets-the-plate",
    title: "Taste balsamico before it meets the plate",
    summary:
      "Visit an ageing room outside Modena and taste balsamic vinegar by the spoon, where wood and waiting become easier to recognise.",
    field: "taste",
    place: "Modena",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "modena",
    status: "public_guide",
    demo: false,
    ...guideImage("modena-giusti-acetaia"),
    kernel:
      "Reserve the Casa Giusti guided visit rather than treating the museum as a shop stop. Follow the account into the ageing rooms, then taste the vinegars without food first. Ask which production method and designation belongs to each sample. Sweetness, acidity and texture are more useful starting points than a ranking of the most expensive bottle.",
    rootedness:
      "An acetaia gives Modena's familiar condiment a physical setting: wooden barrels, stored liquid and time. Giusti presents both its collection and production history here. The useful distinction is between the different vinegars you actually taste, not an assumption that every dark bottle has the same protected designation or ageing process.",
    shift:
      "From adding balsamico as a finishing gesture to asking what happened before it reached the spoon.",
    humanReturn:
      "The next drop on a plate can carry a memory of a room, not just a label.",
    responsibility:
      "Confirm the date, tour language, exact entrance, mobility access, tasting ingredients and allergies directly. Official and tourism listings use different street numbers, so follow the booking confirmation. Do not touch barrels or assume purchase is required. The image shows the producer's ageing room, not an EA visit or the exact route of every tour.",
    evidence:
      "Casa Giusti publishes an approximately one-hour guided museum, ageing-room and tasting visit. Visit Modena separately identifies the acetaia as a visitor destination. These support a public booked introduction, not independent verification of production claims, awards or comparative quality. EA has not visited or tasted the products.",
    duration:
      "About one hour for the guided visit. Confirm the live slot and language before arranging onward travel",
    participation:
      "Guided observation and tasting. Production work, private cellars and a meal are not included unless expressly booked",
    access:
      "Reserve through Casa Giusti's official visit page. Check the confirmed address and current fee. No EA booking, commission or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Giusti: Casa Giusti",
        url: "https://giusti.com/pages/casa-giusti",
        note: "Direct visit description, duration, ageing rooms, tasting and photograph source.",
      },
      {
        title: "Visit Modena: Gran Deposito Aceto Balsamico Giusti",
        url: "https://www.visitmodena.it/it/scopri-modena/eccellenze-gastronomiche/le-acetaie/gran-deposito-aceto-balsamico-giusti",
        note: "Official local destination listing. Address details differ, so the direct booking confirmation takes precedence.",
      },
    ]),
  },
  {
    id: "tokyo-ninben-dashi-bar",
    slug: "meet-tokyo-in-a-cup-of-dashi",
    title: "Meet Tokyo in a cup of dashi",
    summary:
      "Stop at a Nihonbashi standing counter for the stock that usually stays behind the scenes of a Japanese meal.",
    field: "taste",
    place: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    status: "public_guide",
    demo: false,
    ...guideImage("tokyo-ninben-dashi-bar"),
    kernel:
      "At Ninben's Nihonbashi Dashi Bar, order a cup of broth before choosing anything more elaborate. Smell it, take a first sip and notice how much flavour a clear liquid can hold. The adjacent shop makes a useful second stop to look at katsuobushi and ask what you would need to prepare stock at home.",
    rootedness:
      "Nihonbashi's Ninben store connects an ordinary kitchen foundation to a specialist counter. The English store account explains its use of dried skipjack tuna and freshly shaved katsuobushi. This is a working retail and food stop, not an invitation to a private kitchen or a comprehensive lesson in Japanese cooking.",
    shift:
      "From noticing only the finished dish to recognising one of the quiet structures beneath it.",
    humanReturn:
      "A plain cup may give you a better question for the rest of Tokyo: what am I tasting that I cannot see?",
    responsibility:
      "This stock contains fish. Ask about every ingredient, allergen and dietary requirement rather than assuming clear broth is vegetarian. Follow the counter's queue and payment rules. English explanation and shaving demonstrations are not guaranteed. The programme photograph shows the counter's cup being served, not an EA tasting.",
    evidence:
      "Ninben's Japanese store page publishes the current Nihonbashi counter, opening pattern and menu approach. Its English store page describes the broth and neighbouring katsuobushi shop. Both are the company's own accounts. They establish a public purchase route, not independently assessed flavour, nutrition or teaching quality. EA has not visited or tasted the broth.",
    duration:
      "A short counter stop. The current listing gives 11am to 6pm, with a shorter lunch menu window. Recheck holiday hours",
    participation:
      "Order and taste at the standing bar. No workshop, table reservation or guided tasting is promised",
    access:
      "Use the official Nihonbashi listing for COREDO Muromachi 1, first floor. Pay the counter directly. No EA booking or partnership.",
    guideReview: review("public_hospitality", [
      {
        title: "Ninben: Nihonbashi Dashi Bar",
        url: "https://www.ninben.co.jp/store/dashiba/",
        note: "Japanese direct source for the counter, current menu approach, location and hours.",
      },
      {
        title: "Ninben: stores",
        url: "https://www.ninben.jp/store/",
        note: "English explanation of the broth, katsuobushi counter and exact serving photograph.",
      },
    ]),
  },
  {
    id: "brussels-cantillon-brewery",
    slug: "follow-lambic-from-the-brewery-to-the-glass",
    title: "Follow lambic from the brewery to the glass",
    summary:
      "Walk through Cantillon's Brussels brewery before tasting the differences between lambic, gueuze and a fruit blend.",
    field: "taste",
    place: "Brussels",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "brussels",
    status: "public_guide",
    demo: false,
    ...guideImage("brussels-cantillon-brewery"),
    kernel:
      "Choose either the self-guided visit or a reserved Saturday tour at Cantillon. Look at the working equipment before the tasting, then compare the three sample styles without rushing to name a favourite. Ask how the brewery distinguishes the starting beer from a blend. The building can give an unfamiliar glass a sequence you can follow.",
    rootedness:
      "The Musée de la Gueuze occupies a brewery rather than a detached display about beer. That relationship makes equipment, fermentation and drinking part of the same visit. It does not mean you will see active brewing on an ordinary day. Public brewing events have their own calendar and access arrangements.",
    shift:
      "From ordering a Belgian beer by reputation to asking what separates a beer from the blends made with it.",
    humanReturn:
      "The most memorable part of a tasting may be the question you can finally put into words.",
    responsibility:
      "Alcohol tasting is for adults of legal drinking age. Confirm non-alcoholic options, age rules, steps, tour language and mobility access before booking. Do not handle working equipment or expect active brewing. Avoid driving after tasting. The photograph shows a brewery interior, not an EA visit or a promised production stage.",
    evidence:
      "Cantillon publishes separate self-guided and guided access, durations, tasting inclusions and closure days. Its event page distinguishes special brewing days from ordinary visits. These are direct operational sources, not an independent evaluation or a guarantee of active production. EA has not visited or tasted the beer.",
    duration:
      "About one hour self-guided or 90 minutes guided. Recheck closures on Wednesdays, Sundays and public holidays",
    participation:
      "Public brewery visit and included tasting. No brewing lesson or independent access to production equipment",
    access:
      "Saturday guided visits require advance booking. The current weekday self-guided route operates without reservation for small parties. Use Cantillon's visit page for exact conditions. No EA commission.",
    guideReview: review("public_programme", [
      {
        title: "Cantillon: visits",
        url: "https://www.cantillon.be/visites?lang=en",
        note: "Direct source for guided and self-guided access, tasting, duration and current closure pattern.",
      },
      {
        title: "Cantillon: public events",
        url: "https://www.cantillon.be/evenements?lang=en",
        note: "Separates dated brewing events from ordinary museum visits. Active brewing is not promised here.",
      },
      {
        title: "Brasserie Cantillon",
        url: "https://www.cantillon.be/?lang=en",
        note: "Official brewery identity, location and documentary interior photograph.",
      },
    ]),
  },
  {
    id: "florence-il-papiro-marbling",
    slug: "draw-a-sheet-on-floating-colour",
    title: "Draw a sheet on floating colour",
    summary:
      "Try paper marbling with Il Papiro in Florence, where a moving surface becomes something you can hold.",
    field: "make",
    place: "Florence",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "florence",
    status: "public_guide",
    demo: false,
    ...guideImage("florence-il-papiro-marbling"),
    kernel:
      "Arrange Il Papiro's paper-marbling workshop and begin by watching how the colour is placed and moved. Make your own sheet, then compare what you expected with what the transfer preserved. If you want to turn the paper into a notebook, request the combined format rather than assuming bookbinding belongs to every session.",
    rootedness:
      "Decorated paper is easy to encounter in Florence as stationery. A workshop changes its status from a shop surface to a material process. Il Papiro presents marbling and bookbinding as related but selectable activities. This is one workshop's introduction, not evidence that the technique belongs exclusively to Florence or Italy.",
    shift:
      "From choosing a pattern to meeting the moment before a pattern settles.",
    humanReturn:
      "A slightly unexpected sheet may tell you more about making than a faultless object bought already finished.",
    responsibility:
      "Confirm the actual workshop address, date, duration, language, minimum age, accessibility, materials and drying or collection time before paying. A retail store visit is not a confirmed class. Follow the instructor's handling rules. The photograph shows the programme's working materials and hands, not a guaranteed host or EA attendance.",
    evidence:
      "Il Papiro publishes a hands-on marbling offer and a distinct combined marbling-and-bookbinding option, with a direct enquiry route. The Italian and English descriptions agree on those formats. Dates, duration and delivery language require confirmation. EA has not attended or assessed the teaching.",
    duration:
      "Confirm the length of the chosen workshop directly. Do not build a timed itinerary around an unpublished duration",
    participation:
      "Guided making of marbled paper. Bookbinding is an additional format, not automatically included",
    access:
      "Contact the workshop through Il Papiro's official page and obtain a confirmed Florence session. No EA booking, commission or studio partnership.",
    guideReview: review("public_programme", [
      {
        title: "Il Papiro: workshops",
        url: "https://ilpapirofirenze.it/en/pages/workshop",
        note: "English direct description of marbling, combined bookbinding, enquiry route and workshop photograph.",
      },
      {
        title: "Il Papiro: laboratorio",
        url: "https://ilpapirofirenze.it/pages/workshop",
        note: "Italian programme description used to cross-check the selectable workshop formats. Not an independent review.",
      },
    ]),
  },
  {
    id: "kyoto-shikata-kintsugi",
    slug: "repair-a-bowl-without-hiding-the-join",
    title: "Repair a bowl without hiding the join",
    summary:
      "Try a supervised urushi repair in Kyoto and leave with a piece whose final waiting happens after the class.",
    field: "make",
    place: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    status: "public_guide",
    demo: false,
    ...guideImage("kyoto-shikata-kintsugi"),
    kernel:
      "Book Shikata's introductory kintsugi session and work on the vessels supplied for the exercise. Follow the handling and finishing instructions closely, then ask how to transport and cure the work at home. The important final step is patience: a piece that can leave the studio is not necessarily ready to use.",
    rootedness:
      "The lacquer specialist's trial makes repair visible through a small practical exercise. Its published finishing options include brass and tin, with precious-metal options charged separately. Do not assume every bright join is gold. A short introduction also cannot stand in for the longer, staged work required by other repairs.",
    shift:
      "From treating repair as an invisible correction to recognising the join as a record of work.",
    humanReturn:
      "The bowl asks for another kind of attention after you get home, which may be why the lesson lasts.",
    responsibility:
      "Real urushi can cause contact dermatitis. Follow protective handling, glove and aftercare instructions and discuss sensitivities before booking. The listed minimum age is ten, with a guardian for under-eighteens. Confirm language and mobility needs. Do not use the vessel until the studio's curing and food-use instructions permit it. Bringing your own object needs prior assessment.",
    evidence:
      "Shikata's trial page specifies a two-hour introduction, at least two participants, supplied practice vessels and a further two to three weeks of curing after take-home. The studio's main site establishes the programme context. EA has not attended, tested the finished work or verified individual food safety.",
    duration:
      "About two hours in the studio, followed by the stated two to three weeks of curing at home",
    participation:
      "Supervised repair exercise, not qualification as a restorer. The photograph shows close repair work rather than a promised object or finish",
    access:
      "Reserve the trial through Shikata's official programme and confirm participant count, language and aftercare. No EA booking or relationship.",
    guideReview: review("public_programme", [
      {
        title: "Shikata Urushi: kintsugi trial",
        url: "https://kintsugi.shikataurushi.com/trial/",
        note: "Japanese primary programme with duration, materials, ages, urushi precautions, curing period and exact photograph.",
      },
      {
        title: "Shikata Kizo Urushi: kintsugi studio",
        url: "https://kintsugi.shikataurushi.com/",
        note: "Official studio and programme context. Not independent evidence of teaching or finished-object safety.",
      },
    ]),
  },
  {
    id: "barcelona-handmade-espadrilles",
    slug: "stitch-the-pair-you-take-home",
    title: "Stitch the pair you take home",
    summary:
      "Choose the materials and finish your own espadrilles in Barcelona, turning a familiar shoe into a sequence of small decisions.",
    field: "make",
    place: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    status: "public_guide",
    demo: false,
    ...guideImage("barcelona-handmade-espadrilles"),
    kernel:
      "Select the Barcelona in-person workshop from HANDMADE's live booking options. Choose your size and design, learn the stitching and finish the pair with the instructor. Pay attention to how the upper, sole and ties work together. This is a practical introduction using prepared components, not a promise to manufacture a shoe from raw fibre.",
    rootedness:
      "The espadrille is a recognisable entry into the region's everyday material culture. Working on a pair puts the connection between construction and wearing within reach. The brand operates in several cities, so the workshop is a public commercial encounter, not an undiscovered family practice exclusive to Barcelona.",
    shift:
      "From asking which pair looks right to understanding a little of what holds it together.",
    humanReturn:
      "An ordinary act of getting dressed can bring back the memory of a stitch you had to learn.",
    responsibility:
      "Confirm the Barcelona address, session language, available sizes, materials, age requirements, dexterity needs and cancellation terms. Choose the ordinary workshop, not a private event or another city's package. The photograph shows finished shoes from the programme gallery, not the exact pair, colour choices or instructor you will receive. No EA visit is implied.",
    evidence:
      "The programme lists Barcelona among its in-person locations and links to a direct workshop purchase page. Its description supports guided stitching and customisation with prepared components. EA has not assessed material provenance, labour claims, fit, durability or teaching quality.",
    duration:
      "The in-person programme states one to two hours. Confirm the exact session before planning collection or onward travel",
    participation:
      "Hands-on finishing and customisation of a pair, with instruction and supplied components",
    access:
      "Use the official workshop ticket page and explicitly choose Barcelona, date and size. No EA booking, commission or partnership.",
    guideReview: review("public_programme", [
      {
        title: "HANDMADE: workshop experience ticket",
        url: "https://handmadethebrand.com/products/workshop-experience-ticket",
        note: "Direct workshop booking destination linked by the programme. Confirm the city and current session there.",
      },
      {
        title: "The Espadrilles Experience: in-person events",
        url: "https://espadrillesexperience.com/in-person-events/",
        note: "Official description of public locations, supplied equipment and approximate workshop duration.",
      },
      {
        title: "The Espadrilles Experience: gallery",
        url: "https://espadrillesexperience.com/gallery/",
        note: "Source of the finished-pair photograph. The image is material context, not a guaranteed participant result.",
      },
    ]),
  },
  {
    id: "dublin-na-fianna-gaelic-games",
    slug: "try-the-games-before-you-watch-the-match",
    title: "Try the games before you watch the match",
    summary:
      "Start with a hurley, a ball and a coach at a Dublin club, then let Gaelic games become more than unfamiliar rules on a screen.",
    field: "play",
    place: "Dublin",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    status: "public_guide",
    demo: false,
    ...guideImage("dublin-na-fianna-gaelic-games"),
    kernel:
      "Book the beginner session with Experience Gaelic Games at Na Fianna in Glasnevin. Follow the coach through the introductory movements of hurling, Gaelic football and handball, keeping the emphasis on learning rather than competing. Ask what to look for in a match once you have felt how one pass or strike works.",
    rootedness:
      "The published Dublin session takes place in a Gaelic club, giving the games a setting beyond a stadium visit. The provider's account links coaching with an introduction to sporting culture. A visitor lesson does not make you a club member or promise access to training, changing rooms in use or a competitive fixture.",
    shift:
      "From trying to decode a game at full speed to recognising one movement from the inside.",
    humanReturn:
      "The next match has something to attach to: the awkward first attempt that made a player's skill visible.",
    responsibility:
      "Confirm session length, participant ages, language, access needs and any injury or mobility concerns with the coach. Wear trainers and clothing suitable for movement and follow equipment and contact rules. Weather may change the format. The photograph shows a coached hurling movement, not a guaranteed group, instructor or EA visit.",
    evidence:
      "The programme and FAQ identify the three games, beginner coaching and the Na Fianna location. The operator says sessions adapt to the group, but that is not an independent safety or accessibility assessment. EA has not participated or inspected the facilities.",
    duration:
      "Reserve a session and confirm its current start and finish directly. Leave room for arrival and changing",
    participation:
      "Coached introductory play at the intensity agreed with the instructor. No competitive match or club membership",
    access:
      "Prebook the Dublin session through the official programme and use Na Fianna, Mobhi Road, as confirmed by the operator. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Experience Gaelic Games",
        url: "https://experiencegaelicgames.com/",
        note: "Direct programme describing hurling, Gaelic football and handball, with the documentary action photograph.",
      },
      {
        title: "Experience Gaelic Games: FAQ",
        url: "https://experiencegaelicgames.com/faqs/",
        note: "Specific Dublin club, beginner format, clothing, facilities and weather-dependent adaptation.",
      },
    ]),
  },
  {
    id: "stockholm-tanto-guided-kayak",
    slug: "paddle-between-stockholms-island-edges",
    title: "Paddle between Stockholm's island edges",
    summary:
      "Join a guided two-person kayak tour from Tantolunden and read central Stockholm through shorelines rather than bridges.",
    field: "move",
    place: "Stockholm",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    status: "public_guide",
    demo: false,
    ...guideImage("stockholm-tanto-guided-kayak"),
    kernel:
      "Choose Långholmen Kajak's guided city tour, not a self-guided rental. Learn the paddle movement and launch with the group from the confirmed Tanto meeting point. Let the guide set the route around the islands, then notice how a familiar skyline changes when the water becomes your way of getting there.",
    rootedness:
      "The published route connects the island edges around Långholmen and Reimersholme with views towards central Stockholm. It makes the city legible as connected water and land, rather than as a sequence of monuments. Weather and traffic remain part of the experience, not obstacles a booking can remove.",
    shift:
      "From crossing over water to recognising it as part of the city's everyday geography.",
    humanReturn:
      "A bridge can look different once you have approached it at paddle height.",
    responsibility:
      "Swimming ability is required. The operator lists a 130 kg maximum and guardian accompaniment for children under twelve. Confirm child suitability, equipment fit, language, weather and cancellation rules. The tour starts at Tanto, while the same page also describes a different rental base. Follow the written tour confirmation. The image shows the operator's kayaks, not a guaranteed group or route.",
    evidence:
      "The direct tour description gives about two hours and six kilometres, tandem kayaks, English or Swedish guiding and a two-to-ten-person group. Visit Stockholm independently lists the operator and a May-to-September season. EA has not paddled the route or audited safety. Current departures must be checked before travel.",
    duration:
      "About two hours, with arrival time before launching. Seasonal availability and the actual route depend on current conditions",
    participation:
      "Guided tandem paddling for swimmers, with an introductory briefing. Not an independent expedition or transport service",
    access:
      "Book a live guided-tour departure directly and confirm Tanto SUP and Kayak as the meeting point. No winter availability, EA booking or commission is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Långholmen Kajak: guided city tour",
          url: "https://langholmenkajak.se/en/pages/guidad-kajaktur-i-stockholm",
          note: "Direct route, duration, languages, swim requirement, group limits and distinction between tour and rental meeting points.",
        },
        {
          title: "Visit Stockholm: Långholmen Kajak",
          url: "https://www.visitstockholm.com/o/langholmen-kajak/",
          note: "Official destination listing with seasonal context. Rental address is not substituted for the guided-tour meeting point.",
        },
      ],
      "2026-09-30",
    ),
  },
  {
    id: "ljubljana-bananaway-sup",
    slug: "stand-at-river-level-in-ljubljana",
    title: "Stand at river level in Ljubljana",
    summary:
      "Learn to handle a paddleboard on a guided Ljubljanica outing and watch the riverside city rise around you.",
    field: "move",
    place: "Ljubljana",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "ljubljana",
    status: "public_guide",
    demo: false,
    ...guideImage("ljubljana-bananaway-sup"),
    kernel:
      "Reserve Bananaway's Ljubljana SUP tour and begin with the instruction before thinking about the view. Follow the guide from the confirmed Špica meeting point, using the board in the position the instructor recommends. The riverfront becomes a continuous line of trees, embankments and buildings instead of a series of separate stops.",
    rootedness:
      "Ljubljana is easy to explore beside the river. A guided outing changes the angle without needing a remote adventure. The useful local connection is the relationship between the Ljubljanica and the centre's public edges, not a claim that a modern paddleboard tour is an ancient city tradition.",
    shift:
      "From following a river on a map to feeling the small adjustments needed to move along it.",
    humanReturn:
      "You may remember an ordinary bridge through balance, sound and distance rather than another identical photograph.",
    responsibility:
      "Confirm swimming ability requirements, age, weight limits, mobility needs, instruction language, buoyancy equipment and the actual river conditions. Follow the guide's cancellation decisions and do not enter the water for a swim simply because a promotional image looks calm. The photograph shows a programme group, not guaranteed water quality, weather or EA attendance.",
    evidence:
      "Bananaway publishes a beginner-oriented two-hour outing of about four kilometres, with a lesson, a Špica meeting point and a stated March-to-mid-October season. Its contact page establishes the operator, not a substitute launch address. EA has not assessed instruction, water quality or safety and cannot verify availability for a future date.",
    duration:
      "About two hours. The published season ends on 15 October, subject to conditions and live departures",
    participation:
      "Guided paddleboarding with initial instruction. Not a swim, unsupervised rental or river transfer",
    access:
      "Book directly through the current Ljubljana SUP page and confirm departure, minimum group and weather terms. No EA booking or commission.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Bananaway: SUP tour Ljubljana",
          url: "https://bananaway.eu/pages/sup-tour-ljubljana",
          note: "Direct current tour, duration, distance, meeting point, seasonal window and group photograph.",
        },
        {
          title: "Bananaway: contact",
          url: "https://bananaway.si/pages/kontakt",
          note: "Official operator identity and enquiry route. Office address is not presented as the river meeting point.",
        },
      ],
      "2026-10-15",
    ),
  },
  {
    id: "lisbon-aguas-livres-crossing",
    slug: "cross-lisbon-on-the-route-of-its-water",
    title: "Cross Lisbon on the route of its water",
    summary:
      "Walk the public Águas Livres aqueduct crossing and turn an imposing line of arches into a question about how a city drinks.",
    field: "learn",
    place: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    status: "public_guide",
    demo: false,
    ...guideImage("lisbon-aguas-livres-crossing"),
    kernel:
      "Enter the Water Museum's public aqueduct route at Campolide and follow the authorised crossing above the Alcântara valley. Look along the structure as well as out over the city. Ask what its gradient had to accomplish before pumps and taps became things a visitor could take for granted.",
    rootedness:
      "EPAL describes an eighteenth-century gravity-fed network extending far beyond the visible arches. The 941-metre valley crossing is one part of that system, not permission to walk its full historic length. Here a familiar Lisbon silhouette becomes infrastructure you can encounter at human pace.",
    shift:
      "From seeing an aqueduct as a monument to reading it as a line connecting water, terrain and daily life.",
    humanReturn:
      "The city below may become more interesting when you imagine the invisible work behind an ordinary glass of water.",
    responsibility:
      "Stay within the admitted route and behind barriers. This is an elevated, exposed walk, so check weather, vertigo, stairs and mobility suitability. Confirm last admission directly because EPAL and Visit Lisboa list different closing times. Underground galleries require separate arrangements. The photograph is an overview of the actual aqueduct, not the exact visitor view or an EA visit.",
    evidence:
      "EPAL's heritage and opening-information pages confirm the aqueduct and public visitor access. Visit Lisboa independently describes the crossing and supplies the photograph. The sources differ on closing time, which is left for direct confirmation. EA has not walked or assessed the route.",
    duration:
      "Self-paced within the current opening window. Both sources list Tuesday to Sunday, but confirm last entry with the museum",
    participation:
      "Public heritage crossing. Guided interpretation, reservoirs and underground passages are separate visits",
    access:
      "Check EPAL's Water Museum information for admission at Calçada da Quintinha 6. Confirm tickets and any guided language in advance. No EA booking or combined pass.",
    guideReview: review("public_admission", [
      {
        title: "EPAL: Water Museum contacts and opening hours",
        url: "https://www.epal.pt/EPAL/en/menu/water-museum/useful-information/contacts-and-opening-hours",
        note: "Primary operator for the entrance, opening days and contact route. Confirm last admission against conflicting tourism hours.",
      },
      {
        title: "EPAL: Águas Livres Aqueduct",
        url: "https://www.epal.pt/EPAL/en/menu/water-museum/permanent-collection-and-associated-heritage/%C3%A1guas-livres-aqueduct",
        note: "Primary heritage account of the gravity-fed system and the bounded public crossing.",
      },
      {
        title: "Visit Lisboa: Water Museum aqueduct",
        url: "https://www.visitlisboa.com/en/places/water-museum-aguas-livres-aqueduct",
        note: "Official destination corroboration and actual aqueduct photograph. Its closing time differs from EPAL.",
      },
    ]),
  },
  {
    id: "khwattu-san-tracking-tour",
    slug: "read-the-veld-with-a-san-guide",
    title: "Read the veld with a San guide",
    summary:
      "At !Khwa ttu on South Africa's West Coast, learn how tracks, plants and wind can turn an apparently quiet landscape into information.",
    field: "nature",
    place: "!Khwa ttu, West Coast",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "west-coast",
    status: "public_guide",
    demo: false,
    ...guideImage("khwattu-san-tracking-tour"),
    kernel:
      "Choose the published Tracking tour at !Khwa ttu and let the San guide decide where attention belongs. The introduction combines reading environmental signs with a game-drive component. Instead of searching for the largest animal, ask how one trace changes what the guide understands about the ground around you.",
    rootedness:
      "The centre presents guides from different San communities, each with their own language and account. Its heritage museum provides a useful companion to the landscape visit. Neither one guide nor one short tour stands for every San community, and living knowledge should not be framed as a surviving curiosity from the past.",
    shift:
      "From looking for something spectacular in a landscape to noticing what was already there but unread.",
    humanReturn:
      "A track can stay with you as a question, not a trophy or a secret to give away.",
    responsibility:
      "Confirm the named Tracking departure, language, vehicle access, walking demands, age suitability and weather. Arrange the West Coast journey separately from Cape Town. Do not demand animal contact, hunting, foraging or private knowledge. Ask before recording the guide or publishing detailed explanations. The photograph shows the reserve landscape and vehicle, not a promised sighting or EA visit.",
    evidence:
      "!Khwa ttu currently publishes a 45-minute San-guided Tracking programme with a vehicle component. Its museum account supplies the wider institutional context. These direct sources support a booked public introduction, not independent verification of every interpretation, conservation outcome or community benefit. EA has not visited.",
    duration:
      "The named Tracking programme is listed at 45 minutes. Allow additional time for travel and any separately admitted museum visit",
    participation:
      "Guided observation and questions. Hunting, plant collection and wildlife handling are not part of this guide",
    access:
      "Reserve the specific tour through !Khwa ttu's official tours page and confirm arrival at Grootwater Farm on the R27. No EA booking or transfer.",
    guideReview: review("public_programme", [
      {
        title: "!Khwa ttu: tours and trails",
        url: "https://www.khwattu.org/visit-and-explore/tours-and-trails/",
        note: "Direct named Tracking programme, duration, San guiding, vehicle component and booking route.",
      },
      {
        title: "!Khwa ttu: heritage centre museum",
        url: "https://www.khwattu.org/heritage-centre-museum/",
        note: "Institutional and interpretive context for a separate museum visit, not permission to access community knowledge.",
      },
    ]),
  },
  {
    id: "naples-galleria-borbonica-standard",
    slug: "read-naples-below-the-street",
    title: "Read Naples below the street",
    summary:
      "Follow Galleria Borbonica's standard route through water storage, tunnelling and reused underground space beneath Naples.",
    field: "learn",
    place: "Naples",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "naples",
    status: "public_guide",
    demo: false,
    ...guideImage("naples-galleria-borbonica-standard"),
    kernel:
      "Book the Standard route and let the guide separate the different uses of the underground rooms. Cisterns, a Bourbon-era passage, shelter and later storage belong to different moments. Notice a change in scale, a wall marking or an object left in place before trying to make the whole underground city into one story.",
    rootedness:
      "Galleria Borbonica makes the reuse of space beneath Naples publicly legible. Its standard visit is not the same offer as the site's adventure or other specialised routes. Choosing the precise route matters more than the general promise of going underground.",
    shift:
      "From imagining a city as a surface to recognising that the same volume can acquire several lives.",
    humanReturn:
      "A street overhead may feel less final once you know that another history occupies the space beneath it.",
    responsibility:
      "Confirm the entrance, tour language, stairs, lighting and suitability for enclosed spaces. The operator describes only part of the Standard route as wheelchair accessible from Via Morelli, not the whole complex. Keep to the guide's route and do not touch objects or remove material. This is not a search for danger or a spectacle of wartime suffering.",
    evidence:
      "The direct Standard page publishes an approximately one-hour guided route, reservation requirements, entrances and partial accessibility. The main site distinguishes other route types. EA has not visited, independently assessed safety or verified the accessibility of a particular departure. The official photograph is site context, not proof of EA attendance.",
    duration:
      "About one hour. Current public departures are on Fridays, Saturdays, Sundays and holidays, subject to confirmation",
    participation:
      "Guided Standard-route observation. No rafting, crawling, unrestricted exploration or access to every tunnel",
    access:
      "Reserve the Standard route on the official site and confirm the appropriate entrance, especially for mobility needs. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Galleria Borbonica: percorso Standard",
        url: "https://www.galleriaborbonica.com/it/percorsi/standard",
        note: "Italian primary route, duration, public days, entrances, partial accessibility and exact site photograph.",
      },
      {
        title: "Galleria Borbonica",
        url: "https://www.galleriaborbonica.com/",
        note: "Official visitor portal distinguishing the Standard route from other separately booked routes.",
      },
    ]),
  },
  {
    id: "helsinki-loyly-public-sauna",
    slug: "give-helsinki-time-between-the-heat",
    title: "Give Helsinki time between the heat",
    summary:
      "Book a shared sauna at Löyly and let pauses beside the Baltic become as important as time on the bench.",
    field: "restore",
    place: "Helsinki",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    status: "public_guide",
    demo: false,
    ...guideImage("helsinki-loyly-public-sauna"),
    kernel:
      "Reserve a public sauna session and arrive ready to follow the shared-room rules. Warm up at a pace that suits you, then leave time to sit outside or rest between visits to the heat. A sea dip is optional and depends on conditions and your ability. There is no need to turn the visit into a test of endurance.",
    rootedness:
      "Löyly puts a public sauna and contemporary timber architecture on Helsinki's shoreline. The operator offers wood-heated and smoke-sauna facilities, while the city's listing situates the building in Hernesaari. A shared bench is a more direct entry into the practice than treating the building only as a design photograph.",
    shift:
      "From planning a sequence of things to see to allowing a repeated rhythm of warmth and rest.",
    humanReturn:
      "A pause can become a memory without needing a dramatic achievement attached to it.",
    responsibility:
      "Swimwear is compulsory in the mixed public saunas. Follow showering and seat-liner rules and respect privacy. Under-eighteens need a guardian. Discuss health concerns with an appropriate professional and follow staff guidance, without treating heat or cold water as medical treatment. The operator announces closure on 4 to 7 October 2026 and reopening at 4pm on 8 October. Recheck before travel.",
    evidence:
      "The public-sauna page gives two-hour sessions, shared-room rules and included equipment. The live information page supplies the dated maintenance closure, while MyHelsinki corroborates the venue context. EA has not inspected facilities, assessed health suitability or visited. The photograph shows the actual building, not its interior conditions.",
    duration:
      "A two-hour booked session. Allow changing time and recheck the October maintenance closure",
    participation:
      "Shared public sauna and rest. Sea swimming is optional, weather-dependent and not a supervised swimming lesson",
    access:
      "Reserve directly through Löyly's public-sauna page and check its current information page before travelling. No EA booking or partnership.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Löyly: public sauna",
          url: "https://www.loylyhelsinki.fi/en/public-sauna",
          note: "Primary session duration, mixed-sauna swimwear, age accompaniment, equipment and reservation route.",
        },
        {
          title: "Löyly: information",
          url: "https://www.loylyhelsinki.fi/en/info",
          note: "Current practical information, including the announced 4 to 7 October closure and 8 October reopening.",
        },
        {
          title: "MyHelsinki: Löyly",
          url: "https://www.myhelsinki.fi/fi/places/loyly-2/",
          note: "Official city context for the shoreline sauna and architecture. Not a replacement for current operator notices.",
        },
      ],
      "2026-10-03",
    ),
  },
  {
    id: "budapest-szechenyi-daytime-bathing",
    slug: "let-budapest-slow-to-the-pool",
    title: "Let Budapest slow to the pool",
    summary:
      "Give Széchenyi a daytime visit, with enough room to understand the bathing rules before moving between its pools.",
    field: "restore",
    place: "Budapest",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    status: "public_guide",
    demo: false,
    ...guideImage("budapest-szechenyi-daytime-bathing"),
    kernel:
      "Choose ordinary daytime bath admission and begin with the current pool information, changing arrangements and temperature signs. Settle into a suitable pool rather than trying to complete every room. Notice the architecture from water level and give the visit room to be uneventful. Party tickets and specialist services are different offers.",
    rootedness:
      "Széchenyi is a highly recognisable Budapest bathing complex. Recognition need not make the visit superficial: public rules, shared space and unhurried time can be the substance. This guide makes no claim that every person around you is local or that a famous bath represents every Hungarian bathing tradition.",
    shift:
      "From collecting a photograph of the yellow façade to spending time within the public place it encloses.",
    humanReturn:
      "The part you keep may be the hour in which nothing needed to happen next.",
    responsibility:
      "The current official FAQ excludes children under fourteen. P1 outdoor thermal pool is announced closed from 21 September to 2 October 2026, and P2 lap pool from 5 to 16 October. Check remaining services, accessibility, swimwear, towel and cap requirements directly. Follow posted limits and seek appropriate advice about health concerns. Respect bathers' privacy. The photograph is not a live pool-availability report.",
    evidence:
      "The bath's official FAQ and service pages publish admission rules and operating facilities. These support an ordinary public bathing visit, not an EA assessment of water, hygiene, accessibility or therapeutic benefit. EA has not visited and does not endorse medical claims associated with thermal bathing.",
    duration:
      "Choose the admission period that fits your day and confirm the changing and exit rules. Pool availability can change",
    participation:
      "Public daytime bathing within current age and health rules. Treatment, massage and evening parties are not included",
    access:
      "Use szechenyibath.hu, the official bath website, for tickets and current services. Check the admission product before paying. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Széchenyi Bath: FAQ",
        url: "https://www.szechenyibath.hu/faq",
        note: "Official current admission and visitor rules, including the under-fourteen exclusion.",
      },
      {
        title: "Széchenyi Bath: available services",
        url: "https://www.szechenyibath.hu/available-services",
        note: "Official operating-services reference. Recheck pool availability rather than treating the photograph as a live condition report.",
      },
      {
        title: "Széchenyi Bath",
        url: "https://www.szechenyibath.hu/",
        note: "Official operator and exact outdoor-pool photograph source, not a reseller.",
      },
    ]),
  },
  {
    id: "san-sebastian-la-perla-circuit",
    slug: "meet-la-concha-through-warm-seawater",
    title: "Meet La Concha through warm seawater",
    summary:
      "Step from San Sebastián's familiar bay into La Perla's public seawater circuit for a quieter interval between walks and meals.",
    field: "restore",
    place: "San Sebastián",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "san-sebastian",
    status: "public_guide",
    demo: false,
    ...guideImage("san-sebastian-la-perla-circuit"),
    kernel:
      "Book a circuit session rather than assuming restaurant or terrace access includes the pools. Follow the changing-room instructions, then choose the temperatures and water features that suit you. Keep part of the visit for stillness. You do not need to use every jet, sauna or room for the interval to feel complete.",
    rootedness:
      "La Perla occupies the La Concha waterfront and brings seawater into a managed indoor bathing setting. It offers another relationship with a bay usually encountered from the promenade or beach. This is a commercial public circuit, not wild swimming, a secluded retreat or a substitute for medical care.",
    shift:
      "From treating the sea only as a view to meeting water through temperature, movement and rest.",
    humanReturn:
      "A destination known for appetite can also be remembered through the interval you left between meals.",
    responsibility:
      "Confirm age rules, accessibility, health suitability, current facilities and session language if you need assistance. A swimming cap is required and changing time counts within the ticket period. Check towel, footwear and locker arrangements. Follow staff guidance and respect other bathers' privacy. No therapeutic outcome is claimed. The photograph shows the circuit, not current occupancy or an EA visit.",
    evidence:
      "La Perla's direct circuit and FAQ pages describe seawater facilities, two- or three-hour tickets and visitor requirements. The official gallery documents the interior. EA has not tested the facilities, assessed their accessibility or verified health benefits. Published wellness claims are not used as evidence of treatment efficacy.",
    duration:
      "Two or three hours depending on the selected ticket, including changing time. Confirm entry and exit before booking another activity",
    participation:
      "Public seawater-circuit admission. Massage, treatments, restaurant service and beach supervision are separate",
    access:
      "Reserve the circuit through La Perla's official site and review the FAQ before arrival. No EA booking, medical recommendation or partnership.",
    guideReview: review("public_admission", [
      {
        title: "La Perla: thalassotherapy circuit",
        url: "https://la-perla.net/en/thalassotherapy/",
        note: "Direct description of the seawater circuit and public reservation route. Medical claims are not adopted.",
      },
      {
        title: "La Perla: circuit FAQ",
        url: "https://la-perla.net/en/thalassotherapy/frequently-asked-questions-thalassotherapy/",
        note: "Ticket duration, changing time, swimming-cap and practical visitor requirements.",
      },
      {
        title: "La Perla: official gallery",
        url: "https://la-perla.net/en/thalassotherapy-gallery/",
        note: "Exact high-resolution circuit photograph source. Not evidence of current occupancy or service availability.",
      },
    ]),
  },
  {
    id: "lisbon-mesa-de-frades-fado",
    slug: "let-the-fado-room-fall-quiet",
    title: "Let the fado room fall quiet",
    summary:
      "Reserve dinner at Mesa de Frades in Alfama and let the change from conversation to listening become part of the evening.",
    field: "gather",
    place: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    status: "public_guide",
    demo: false,
    ...guideImage("lisbon-mesa-de-frades-fado"),
    kernel:
      "Book the venue's dinner-and-fado format and arrive for the time in your confirmation. Between sets, the room can be a restaurant. When singing begins, put conversation and your phone aside. Follow the phrasing even if you do not understand Portuguese, then ask about the song at an appropriate moment rather than interrupting it.",
    rootedness:
      "Visit Lisboa identifies Mesa de Frades as a fado room in a former Alfama chapel. Its tiled interior gives the listening a specific setting without making a ticket an invitation into private neighbourhood life. The programme changes, so come for the form and the room rather than a singer you have not confirmed.",
    shift:
      "From treating live music as accompaniment to a meal to allowing it to determine the room's attention.",
    humanReturn:
      "The silence before the next phrase may stay with you as clearly as the song.",
    responsibility:
      "Confirm the current set menu, full price, deposit, dietary requirements, access needs, minimum age and finishing time. Check whether explanations are available in your language. Recording and performer portraits require permission. This is a paid public venue, not a private ritual or guaranteed spontaneous gathering. The photograph shows the actual tiled dining room, not a promised table or EA attendance.",
    evidence:
      "Mesa de Frades publishes a reservable dinner format and fado sets. Visit Lisboa independently confirms the Alfama venue and former-chapel setting. Prices and artist descriptions are not carried over from older listings. EA has not dined, assessed a performance or verified a future line-up.",
    duration:
      "An evening shaped by dinner and successive fado sets. Confirm arrival, finish and return transport directly",
    participation:
      "Dinner guest and attentive listener. Performing, requests, recording and access to artists are not included",
    access:
      "Reserve through Mesa de Frades' official site and read the current dinner terms. No EA booking, commission or venue partnership.",
    guideReview: review("public_hospitality", [
      {
        title: "Mesa de Frades",
        url: "https://mesadefrades.pt/",
        note: "Current direct dinner reservation, set structure and tiled-room photograph. No future singer is guaranteed.",
      },
      {
        title: "Visit Lisboa: Mesa de Frades",
        url: "https://www.visitlisboa.com/pt-pt/locais/mesa-de-frades",
        note: "Official destination corroboration of the venue and former-chapel setting. Older price data is not adopted.",
      },
    ]),
  },
  {
    id: "buenos-aires-la-viruta-tango",
    slug: "learn-the-step-before-joining-the-floor",
    title: "Learn the step before joining the floor",
    summary:
      "Begin with a public tango class at La Viruta Tango AR in Palermo, then decide whether to stay and watch the evening unfold.",
    field: "gather",
    place: "Buenos Aires",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    status: "public_guide",
    demo: false,
    ...guideImage("buenos-aires-la-viruta-tango"),
    kernel:
      "Choose a beginner tango class on La Viruta Tango AR's current schedule and tell the teacher it is your first visit. Start with walking, timing and how to share space with another person. If the evening continues into a milonga, watch its flow before accepting a dance. Staying to listen is a complete choice too.",
    rootedness:
      "The public class offers a practical entry into a social dance setting in Palermo. The venue states that beginners do not need previous experience or a partner. That welcome is not permission to assume another dancer's availability, and one commercial room cannot represent the whole of Buenos Aires tango culture.",
    shift:
      "From seeing tango as a performance to understanding the attention required between two people on a shared floor.",
    humanReturn:
      "A small, considerate step can be a stronger memory than trying to imitate a stage routine.",
    responsibility:
      "Confirm the Tango AR programme at Armenia 1366, since similarly named venues and programmes exist. Check beginner level, teaching language, age rules, footwear, access and what admission includes. Respect invitations and refusals without explanation. Ask before filming dancers. The photograph depicts an operating dance floor, not a guaranteed crowd, band or EA visit.",
    evidence:
      "La Viruta Tango AR publishes classes open to beginners without a partner. Its current main page supplies the Palermo address and changing class and live-music programme. These are venue claims, not independent assessment of instruction, social atmosphere or safety. EA has not participated.",
    duration:
      "Choose a class from the current timetable. Staying for dancing or live music depends on that night's separate programme and admission terms",
    participation:
      "Beginner instruction followed, if available, by voluntary social dancing or observation. A dance partner is never owed",
    access:
      "Check the specific Tango AR class and admission directly through its official site. Confirm whether booking is required for your date. No EA booking or partnership.",
    guideReview: review("public_programme", [
      {
        title: "La Viruta Tango AR: tango classes",
        url: "https://lavirutatangoar.com/en/clases-de-tango-en-buenos-aires/",
        note: "Direct beginner class description, no-partner requirement and current timetable reference.",
      },
      {
        title: "La Viruta Tango AR",
        url: "https://lavirutatangoar.com/",
        note: "Exact venue identity, Palermo address, current programme and documentary dance-floor photograph.",
      },
    ]),
  },
  {
    id: "madrid-cardamomo-flamenco",
    slug: "listen-for-the-conversation-inside-flamenco",
    title: "Listen for the conversation inside flamenco",
    summary:
      "At a public Cardamomo performance in Madrid, follow the exchanges between voice, guitar, clapping and footwork rather than watching the dancer alone.",
    field: "gather",
    place: "Madrid",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "madrid",
    status: "public_guide",
    demo: false,
    ...guideImage("madrid-cardamomo-flamenco"),
    kernel:
      "Book a dated performance and settle in before the start. Give one passage to the singer, another to the guitar and another to the rhythm answered by the dancer. You do not need specialist vocabulary to notice an exchange. The aim is a more attentive first encounter, not a verdict on which performer is the most authentic.",
    rootedness:
      "Cardamomo is an established public tablao in Madrid's Barrio de las Letras. The venue's weekly programme makes it a place of changing performers, not one fixed show preserved for every visitor. Flamenco's presence here does not make it a uniquely Madrid tradition or every night an informal local gathering.",
    shift:
      "From watching a striking solo figure to hearing the relationships that make the performance possible.",
    humanReturn:
      "You may leave remembering an answer from the guitar as much as the final stamp of a heel.",
    responsibility:
      "Confirm the live bill, duration, seating, access needs, age policy and what your ticket includes. Meal packages are separate choices. Do not assume permission to record or use flash, and keep conversation outside the performance. The photograph shows a real Cardamomo stage, not the artist promised on your date or an EA visit.",
    evidence:
      "The official site publishes daily performances with a changing weekly artistic programme and direct tickets. Madrid's tourism office separately lists the venue in Barrio de las Letras. This supports a public live-music encounter, not artist endorsement or a comparative ranking of venues. EA has not attended or assessed a performance.",
    duration:
      "Choose the specific performance on the live schedule and confirm its length. Arrive before the published start",
    participation:
      "Seated public audience. No lesson, backstage access, artist meeting or participation on stage",
    access:
      "Reserve a dated show on Cardamomo's official site and review seat and meal options. No EA booking, commission or venue relationship.",
    guideReview: review("public_programme", [
      {
        title: "Cardamomo: live shows and schedule",
        url: "https://cardamomo.com/en/flamenco-show-in-madrid/",
        note: "Primary performance calendar, changing artistic programme and direct ticket route.",
      },
      {
        title: "Madrid Tourism: Cardamomo",
        url: "https://www.esmadrid.com/en/nightlife/cardamomo",
        note: "Official city corroboration of the tablao and Barrio de las Letras location, not a guarantee of a particular line-up.",
      },
      {
        title: "Cardamomo",
        url: "https://cardamomo.com/en/",
        note: "Official venue source for the documentary stage photograph and current programme.",
      },
    ]),
  },
];
