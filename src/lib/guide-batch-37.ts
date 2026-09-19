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

export const guideBatch37: PublicExperience[] = [
  {
    id: "sejnane-sidi-mechreg-pottery",
    slug: "let-the-clay-keep-the-fingerprints",
    title: "Let the clay keep the fingerprints",
    summary:
      "Shape Sejnane clay with a local potter, then read the marks, firing and knowledge that make the vessel belong to more than a shelf.",
    field: "make",
    place: "Sejnane",
    country: "Tunisia",
    countrySlug: "tunisia",
    regionSlug: "bizerte",
    status: "public_guide",
    demo: false,
    ...guideImage("sejnane-sidi-mechreg-pottery"),
    kernel:
      "Book the pottery workshop currently published by Eco-Rand Sidi Mechreg. A woman potter introduces the clay, hand-building and painted motifs before you shape a small piece of your own. Keep the first attempt modest. The useful sequence begins before decoration, with local material prepared by hand, and ends with the host deciding what can be fired, kept or left to dry.",
    rootedness:
      "UNESCO identifies the pottery skills of Sejnane's women as knowledge transmitted within families, from clay preparation and shaping to firing and ornament. The public workshop creates a bounded visitor introduction. It does not transfer ownership of motifs, make every woman in Sejnane a tourism provider or reduce a living income practice to rustic styling.",
    shift:
      "From buying a patterned pot to recognising the hands, material decisions and transmission carried by its surface.",
    humanReturn:
      "A simple vessel may stay memorable because its irregularities reveal where another person's knowledge met your first attempt.",
    responsibility:
      "Reserve directly and confirm the named host, language, duration, transport, price, firing and collection arrangement. Follow the potter's lead on which motifs a visitor may use. Do not copy designs for sale or photograph people without asking. The image shows pottery at the named rural venue, not every workshop step, the maker assigned to a future session or an EA visit.",
    evidence:
      "Eco-Rand Sidi Mechreg currently publishes a pottery workshop led by local women, including clay preparation, shaping and traditional decoration. UNESCO documents the skills and their transmission. Together they support a public hands-on introduction at one named venue. They do not establish daily availability, a particular teacher, unrestricted design use, local validation by EA or an EA visit.",
    duration:
      "Confirm the current workshop length and whether drying or firing requires later collection before arranging onward travel",
    participation:
      "Host-directed first piece using the venue's materials and boundaries. No mastery, production access or design ownership is implied",
    access:
      "Reserve the pottery workshop directly with Eco-Rand Sidi Mechreg. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Eco-Rand Sidi Mechreg: pottery workshop",
        url: "https://ecorandsidimechreg.com/activites/atelier-de-poterie/",
        note: "Current venue page describing the local-women-led workshop, clay preparation, hand shaping and motifs. It is also the exact photograph source.",
      },
      {
        title: "UNESCO: pottery skills of the women of Sejnane",
        url: "https://ich.unesco.org/en/RL/pottery-skills-of-the-women-of-sejnane-01406",
        note: "Heritage context for the materials, techniques and transmission. It is not a visitor-access source.",
      },
    ]),
  },
  {
    id: "nukualofa-ancient-tonga-ngatu",
    slug: "meet-the-cloth-before-it-becomes-a-gift",
    title: "Meet the cloth before it becomes a gift",
    summary:
      "Begin ngatu with bark, paste and pattern in a published Tongatapu class that keeps the host, not the visitor, at the centre.",
    field: "make",
    place: "Nukuʻalofa",
    country: "Tonga",
    countrySlug: "tonga",
    regionSlug: "tongatapu",
    status: "public_guide",
    demo: false,
    ...guideImage("nukualofa-ancient-tonga-ngatu"),
    kernel:
      "Choose the dedicated ngatu class currently identified by Tonga Tourism through Ancient Tonga. Ask the host to begin with the material and sequence before you touch a tool. Notice how barkcloth, natural colour and repeated pattern become social work rather than a decorative shortcut. Complete only the step offered to visitors and let the host name what the finished cloth means in Tongan life.",
    rootedness:
      "Tonga Tourism describes ngatu as barkcloth made through preparation, beating, joining and decoration, with uses in ceremony, exchange and everyday life. A public class can introduce part of that chain. It cannot reproduce the collective labour, kinship and occasion carried by a full cloth, and it does not make every pattern available for copying.",
    shift:
      "From seeing tapa as a patterned textile to understanding ngatu as material, work, exchange and relationship.",
    humanReturn:
      "A small guided action can make the scale and social life of a complete cloth much harder to overlook.",
    responsibility:
      "Confirm the current class, teacher, group size, language, transport, materials, price and visitor task directly. Ask before photographing people, patterns or unfinished work. Do not reproduce designs commercially. The photograph shows ngatu work published by Tonga Tourism, not the named class, a guaranteed teacher or an EA visit.",
    evidence:
      "Tonga Tourism currently identifies dedicated ngatu and weaving classes through Ancient Tonga and separately explains the barkcloth process and cultural role. These sources support a bookable public introduction. They do not establish the exact task on a future date, payment distribution, permission to reproduce motifs, independent assessment or EA attendance.",
    duration:
      "Confirm the class length and transport directly. Leave time for explanation rather than treating the activity as a quick craft stop",
    participation:
      "Host-defined introductory making step. No complete cloth, private circle, ceremonial role or unrestricted motif use is promised",
    access:
      "Use Tonga Tourism's current handicrafts page to identify and confirm the Ancient Tonga class directly. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Tonga Tourism: authentic handicrafts",
        url: "https://www.tongatourism.travel/discover/people-and-culture/authentic-handicrafts",
        note: "Official visitor page identifying dedicated ngatu and weaving classes through Ancient Tonga. It is also the photograph source.",
      },
      {
        title: "Tonga Tourism: tapa making and weaving",
        url: "https://www.tongatourism.travel/discover/people-and-culture/tapa-making-and-weaving",
        note: "Official context for material preparation, decoration and cultural use. It does not guarantee class content.",
      },
    ]),
  },
  {
    id: "sarajevo-sevdah-art-house",
    slug: "enter-sevdah-through-the-room-that-remembers-it",
    title: "Enter sevdah through the room that remembers it",
    summary:
      "Start with voices, records and lives inside Sarajevo's Sevdah Art House before searching the city's current music calendar.",
    field: "learn",
    place: "Sarajevo",
    country: "Bosnia and Herzegovina",
    countrySlug: "bosnia-and-herzegovina",
    regionSlug: "sarajevo",
    status: "public_guide",
    demo: false,
    ...guideImage("sarajevo-sevdah-art-house"),
    kernel:
      "Enter the Sevdah Art House in Velike Daire as an introduction, not a substitute for hearing a current performer. Move through the permanent exhibition slowly enough to connect recorded voices, instruments, biographies and the urban history of sevdalinka. Only after that context should a current public programme determine whether live music belongs in the same visit.",
    rootedness:
      "Sevdalinka is an urban song tradition carried by performers, listeners, recordings and changing interpretations. The museum gives those relationships names and evidence. It cannot make one display the final authority on every regional style, and ordinary admission does not imply access to rehearsals, artists or an unannounced performance.",
    shift:
      "From asking where to hear a romantic song to recognising the people, cities and recordings that keep sevdalinka in motion.",
    humanReturn:
      "A later performance may land differently when the voice arrives with history rather than as anonymous atmosphere.",
    responsibility:
      "Check the current opening hours, ticket, accessibility and exhibition language before arrival. Keep museum admission separate from any live programme. Never assume that a musician will be present. Follow photography rules and do not record music without permission. The photograph shows the Velike Daire courtyard, not the exhibition interior, a performance or an EA visit.",
    evidence:
      "Sarajevo Navigator's current listing describes the permanent Sevdah Art House exhibition and publishes opening hours. Its Velike Daire page locates the museum within the historic courtyard complex. This supports ordinary museum admission and contextual learning. It does not support the original intimate live-performance promise, a particular performer or EA attendance.",
    duration:
      "Allow about an hour for the exhibition, then check a separate current calendar if live music matters to the day",
    participation:
      "Self-paced museum visit using the exhibition's recordings, objects and biographies. No live performance or artist access is included",
    access:
      "Use the current Sevdah Art House listing and confirm holiday hours before travelling. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Sarajevo Navigator: Sevdah Art House",
        url: "https://www.sarajevonavigator.ba/en/text/119",
        note: "Current visitor listing for the permanent exhibition and opening hours, updated in June 2026.",
      },
      {
        title: "Sarajevo Navigator: Velike Daire",
        url: "https://www.sarajevonavigator.ba/en/place/1269",
        note: "Place context for the courtyard complex housing the museum. It is the exact photograph source.",
      },
    ]),
  },
  {
    id: "prizren-filigree-workshop",
    slug: "watch-silver-become-a-line",
    title: "Watch silver become a line",
    summary:
      "Stand at a working Prizren bench and follow filigree from drawn wire to one patient junction at a time.",
    field: "work",
    place: "Prizren",
    country: "Kosovo",
    countrySlug: "kosovo",
    regionSlug: "prizren",
    status: "public_guide",
    demo: false,
    ...guideImage("prizren-filigree-workshop"),
    kernel:
      "Use Autostrada Biennale's Filigree Workshop as a public observation point. Begin at the bench, not the display case. Look for wire being drawn, curled, fitted and soldered into a structure that only later reads as ornament. Let the makers decide when conversation is welcome and keep clear of tools, flame and production flow.",
    rootedness:
      "The workshop operates as a place of making, training and everyday exchange in Prizren. Its value is not only the survival of a recognisable motif. It also lies in who can learn, work and earn through the practice now. Public visibility does not turn a working bench into an open class or give visitors the right to interrupt production.",
    shift:
      "From admiring intricate silver to seeing how repetition, heat and hand pressure build its precision.",
    humanReturn:
      "Jewellery can feel less like surface decoration once your eye knows how many tiny joins hold one line in place.",
    responsibility:
      "Check current opening and visitor conditions before going. Observe from the area offered to visitors, ask before starting a conversation and never touch tools or work in progress. Photography requires permission. The photograph shows the actual workshop and bench, but not current staffing, access conditions or an EA visit.",
    evidence:
      "Autostrada Biennale currently presents the Filigree Workshop as a place where visitors can observe production and everyday conversations. Filigrani's training page gives useful context on continuing craft education. These sources support public observation only. They do not establish a hands-on visitor workshop, guaranteed maker availability, independent quality assessment or EA attendance.",
    duration:
      "A short observation whose useful length depends on whether work is underway. Confirm before crossing Prizren for it",
    participation:
      "Careful observation at a working bench. No making step, tool use, private instruction or production access is promised",
    access:
      "Check the current Filigree Workshop information through Autostrada Biennale before arrival. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Autostrada Biennale: Filigree Workshop",
        url: "https://autostradabiennale.org/venues/filigree-workshop/",
        note: "Current venue page supporting visitor observation of production and everyday workshop life. It is also the exact photograph source.",
      },
      {
        title: "Filigrani Prizren: filigree beyond craft",
        url: "https://filigrani-pz.com/en/filigree-beyond-craft",
        note: "Local training and continuity context. It is not proof of a tourist class or ordinary access to every workspace.",
      },
    ]),
  },
  {
    id: "torshavn-public-chain-dance",
    slug: "let-the-ballad-move-the-circle",
    title: "Let the ballad move the circle",
    summary:
      "Use one current public Faroese chain-dance listing to enter the ballad with humility, timing and both feet on the floor.",
    field: "gather",
    place: "Tórshavn",
    country: "Faroe Islands",
    countrySlug: "faroe-islands",
    regionSlug: "torshavn",
    status: "public_guide",
    demo: false,
    ...guideImage("torshavn-public-chain-dance"),
    kernel:
      "Begin with a chain-dance event that remains visible on Visit Faroe Islands' current calendar. The listing reviewed for this guide is at the Nordic House on 9 October 2026. Confirm it again before travel. Listen for the lead singer and refrain, watch how joined hands carry the step, then enter only when the host makes participation clear.",
    rootedness:
      "The Faroese chain dance joins movement to long sung ballads in Faroese. The words, lead and collective response matter as much as the step. A beginner-friendly public event can offer an opening, but translation cannot replace the language and a visitor should not perform certainty they do not have.",
    shift:
      "From treating dance as a sequence to recognising the ballad, leader and circle as one shared form.",
    humanReturn:
      "The refrain may remain after the footwork because belonging to the rhythm begins with listening.",
    responsibility:
      "Confirm the exact event, date, venue, ticket, language and newcomer guidance on the current calendar. Do not assume recurrence after 9 October 2026. Join only when invited, keep the circle's pace and ask before filming. The photograph comes from an earlier official beginner event, not the October listing or an EA visit.",
    evidence:
      "Visit Faroe Islands currently lists a public Faroese chain dance at the Nordic House on 9 October 2026. An earlier official beginner-event page supplies the exact contextual photograph and shows that newcomer-oriented formats have existed. These sources support the dated public listing only. They do not guarantee recurrence, admission, language support or EA attendance.",
    duration:
      "Calendar-led. Confirm the published start, finish and arrival guidance for the specific event",
    participation:
      "Public cultural programme with participation only as directed by the host. No private association access or performance role is implied",
    access:
      "Use the live Visit Faroe Islands event calendar and confirm the Nordic House listing before travel. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Visit Faroe Islands: current events",
        url: "https://visitfaroeislands.com/en/whatson/events",
        note: "Current official calendar carrying the 9 October 2026 Nordic House chain-dance listing when checked. Future recurrence is not assumed.",
      },
      {
        title: "Visit Faroe Islands: chain dance for beginners",
        url: "https://visitfaroeislands.com/en/whatson/events/event/faroese-chain-dance-for-beginners",
        note: "Earlier official event context and exact photograph source. Its old Tuesday schedule is not presented as current access.",
      },
    ]),
  },
  {
    id: "mahe-cap-lazare-moutya",
    slug: "hear-the-drum-after-sunset",
    title: "Hear the drum after sunset",
    summary:
      "Meet moutya through a dated public evening at Cap Lazare, with the fire, drum and history kept in the same frame.",
    field: "witness",
    place: "Baie Lazare",
    country: "Seychelles",
    countrySlug: "seychelles",
    regionSlug: "mahe",
    status: "public_guide",
    demo: false,
    ...guideImage("mahe-cap-lazare-moutya"),
    kernel:
      "Choose the Moutya Night currently listed at Cap Lazare Nature Reserve and confirm a specific operating date. Arrive for the explanation as well as the performance. Let the heated drum, call, movement and Creole language stay connected to the history named by the hosts rather than flattening the evening into a resort dance show.",
    rootedness:
      "UNESCO describes moutya as a drum, dance and song tradition rooted in the lives and resistance of enslaved people in Seychelles. A commercial public evening can make the form visible, but the venue is not automatically the cultural authority and one performance cannot contain the tradition's full social meaning.",
    shift:
      "From watching an island performance to hearing how rhythm can carry memory, language and refusal.",
    humanReturn:
      "The beat becomes harder to consume as background once the history beneath the drum is allowed to remain audible.",
    responsibility:
      "Confirm the current date, performers, historical interpretation, transport, food, accessibility and photography rules directly. Treat the performance as work. Do not interrupt, imitate or record closely without permission. The photograph shows a moutya presentation at Cap Lazare, but not a guaranteed cast, exact date or EA visit.",
    evidence:
      "Seychelles' official tourism platform currently lists Moutya Night at Cap Lazare through 24 December 2026 with a performance, demonstration and food elements. UNESCO supplies cultural context. These sources support a dated public programme, not independent cultural validation, performer names, payment terms, an unchanged format or EA attendance.",
    duration:
      "An evening programme. Confirm the exact start, finish and return transport before booking",
    participation:
      "Public performance and demonstration. Any audience participation remains entirely host-led",
    access:
      "Use the official Seychelles listing to confirm and book the current Moutya Night directly. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Tourism Seychelles: Moutya Night at Cap Lazare",
        url: "https://seychelles.com/listingdetails/68babb9cde95197abe60a4e4",
        note: "Official current listing with the date range, venue and programme outline.",
      },
      {
        title: "UNESCO: Moutya",
        url: "https://ich.unesco.org/en/RL/moutya-01690",
        note: "Cultural and historical context. It does not validate the commercial event.",
      },
      {
        title: "Petit Futé: Cap Lazare",
        url: "https://www.petitfute.co.uk/v62050-baie-lazare/c1165-restaurants/c1029-cuisine-regionale/2027833-cap-lazare-nature-reserve-restaurant.html",
        note: "Exact photograph source for the performance image. Reuse rights are not independently cleared.",
      },
    ]),
  },
  {
    id: "barbados-public-road-tennis",
    slug: "hear-the-wooden-racket-crack",
    title: "Hear the wooden racket crack",
    summary:
      "Find road tennis in Barbados through a current public court or event, then let the low net and wooden racket reset the game you thought you knew.",
    field: "play",
    place: "Barbados",
    country: "Barbados",
    countrySlug: "barbados",
    regionSlug: "island-wide",
    status: "public_guide",
    demo: false,
    ...guideImage("barbados-public-road-tennis"),
    kernel:
      "Use Visit Barbados' road-tennis guide to understand the court, wooden racket and local rules, then identify a current public match or an unoccupied community court where play is clearly permitted. Watch first. The compact court makes pace, reaction and sound legible quickly, but a visitor does not gain priority over regular players simply by arriving curious.",
    rootedness:
      "Road tennis developed in Barbados as an accessible local game shaped by available streets, surfaces, wood and social competition. Its authority lives with the players and communities who continue it. Public visibility is not a promise of a free lesson, borrowed equipment or entry into a club programme.",
    shift:
      "From importing the assumptions of lawn tennis to noticing how Barbados rebuilt the game around its own space and materials.",
    humanReturn:
      "A familiar sport becomes new again when one low net and a wooden racket reveal how inventive play can be.",
    responsibility:
      "Check a current public event or court condition before travelling. Do not enter an active court, interrupt a match or ask children to perform for photographs. Bring your own suitable equipment only where casual play is allowed. Ask local players about rules without assuming they owe a lesson. The photograph shows real road tennis published by Visit Barbados, not a guaranteed location, coach or EA visit.",
    evidence:
      "Visit Barbados currently explains the game, equipment, scoring and places where road tennis may be encountered. It does not publish a dependable beginner class, named coach or booking route. This guide therefore supports observation and self-directed play only where current local conditions allow it. It does not claim a lesson, equipment, court priority or EA attendance.",
    duration:
      "Flexible for observation or casual play. A tournament or organised event follows its own current schedule",
    participation:
      "Public observation and self-directed play only where a court is available and local use permits it. No lesson is promised",
    access:
      "Start with Visit Barbados, then confirm a current public event or suitable court locally. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Visit Barbados: the Bajan game of road tennis",
        url: "https://www.visitbarbados.org/the-bajan-game-of-road-tennis",
        note: "Official destination context for the game, rules, equipment and possible public encounters. It is also the exact photograph source.",
      },
      {
        title: "Commonwealth Sport: Barbados' homegrown sport",
        url: "https://www.commonwealthsport.com/news/road-tennis-barbados-homegrown-sport",
        note: "Sporting-body context on the game's Barbadian development and equipment. It does not provide a visitor lesson or current court access.",
      },
    ]),
  },
  {
    id: "nassau-educulture-junkanoo",
    slug: "follow-cardboard-toward-bay-street",
    title: "Follow cardboard toward Bay Street",
    summary:
      "Begin Junkanoo at Educulture in Nassau, where cardboard, fringe, rhythm and parade history can be read before the rush begins.",
    field: "learn",
    place: "Nassau",
    country: "The Bahamas",
    countrySlug: "the-bahamas",
    regionSlug: "new-providence",
    status: "public_guide",
    demo: false,
    ...guideImage("nassau-educulture-junkanoo"),
    kernel:
      "Use Educulture's museum tour as the public alternative to entering an active Junkanoo shack. Follow the route from history and instruments to costume construction. Look closely at how cardboard, crepe paper and fringe accumulate into volume and movement. If the current programme includes a music or making demonstration, let the host define the visitor's part.",
    rootedness:
      "Junkanoo is made through group organisation, design secrecy, months of labour, rhythm and public competition. A museum founded by a Junkanoo practitioner can explain that system without exposing an active group's working space. The visitor is entering an interpretive institution, not a shack during costume-building season.",
    shift:
      "From seeing a parade as a burst of colour to recognising the planning, materials, sound and collective work built into it.",
    humanReturn:
      "A future costume may look less like spectacle when your eye can follow it back to cardboard, hands and decisions.",
    responsibility:
      "Confirm opening, tour time, weekend appointment, accessibility, demonstration and photography rules directly. Do not present the museum as permission to enter a group's active shack or copy protected designs. The image shows Junkanoo performers published by Educulture, not the museum tour itself, a current group or an EA visit.",
    evidence:
      "The Bahamas' official visitor listing currently describes Educulture's museum, audiovisual history, music interaction and costume-making displays, with weekday hours and weekend appointments. Educulture separately publishes museum tours and workshops. This supports a public museum introduction, not access to an active shack, a guaranteed workshop or EA attendance.",
    duration:
      "Confirm the current tour duration and any demonstration time directly, especially for weekend visits",
    participation:
      "Museum interpretation with interactive elements as currently offered. No active shack access, parade role or unrestricted design use is included",
    access:
      "Use the official Bahamas listing and confirm the museum tour directly with Educulture. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "The Bahamas: Educulture Bahamas",
        url: "https://www.bahamas.com/plan-your-trip/things-to-do/educulture-bahamas-ltd",
        note: "Official current visitor listing for the museum, displays, interactive elements, hours and weekend appointment boundary.",
      },
      {
        title: "Educulture Bahamas: services",
        url: "https://educulturebahamas.com/services/",
        note: "Provider page for museum tours, presentations and workshops. Exact content still requires direct confirmation.",
      },
      {
        title: "Educulture Bahamas",
        url: "https://educulturebahamas.com/",
        note: "Exact source for the Junkanoo performance photograph used as cultural context rather than a museum-interior claim.",
      },
    ]),
  },
  {
    id: "heeia-fishpond-community-workday",
    slug: "move-the-stone-that-holds-the-water",
    title: "Move the stone that holds the water",
    summary:
      "Join a published Heʻeia workday only after Paepae o Heʻeia has made the task, capacity and purpose clear.",
    field: "contribute",
    place: "Heʻeia",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "oahu",
    status: "public_guide",
    demo: false,
    ...guideImage("heeia-fishpond-community-workday"),
    kernel:
      "Register for one of Paepae o Heʻeia's public community workdays and arrive ready for the task assigned, not the task imagined. Work can involve moving rock or coral, removing invasive vegetation or supporting restoration around the fishpond wall. The organisation sets the capacity, safety briefing and learning boundary. The visitor contributes labour within that structure.",
    rootedness:
      "Heʻeia is an 88-acre loko iʻa restored and cared for by a Native Hawaiian organisation. The fishpond links aquaculture, engineering, food systems and stewardship. A public workday is an invitation into chosen labour, not access to every layer of knowledge, ceremony or decision-making around the place.",
    shift:
      "From admiring a historic fishpond to feeling the weight and coordination required to keep its wall working.",
    humanReturn:
      "Care becomes less abstract when a place asks for effort, attention and obedience to the people already responsible for it.",
    responsibility:
      "Register in advance and follow the published age, footwear, clothing, water, weather and health guidance. Workdays can be physically demanding. Do not attend if the task is unsuitable for you. Follow staff direction, stay out of restricted areas and ask before photographing participants or cultural practice. The image shows a real community workday, but not a future task, available place or EA visit.",
    evidence:
      "Paepae o Heʻeia currently publishes community workdays on the second and fourth Saturdays of most months, with advance registration, age limits, timing, equipment and task expectations. Its fishpond and mission pages supply organisation-led context. These sources support a public volunteer programme. They do not guarantee a place, task, weather, cultural access, outcome or EA attendance.",
    duration:
      "The published workday runs from 8:30 to 12:00. Registration and arrival instructions must be followed exactly",
    participation:
      "Organisation-directed restoration work for registered participants aged 12 and over. Tasks vary and can be strenuous",
    access:
      "Register through Paepae o Heʻeia when a public workday place is available. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Paepae o Heʻeia: volunteer workdays",
        url: "https://paepaeoheeia.org/volunteer/",
        note: "Current organisation page with schedule pattern, registration, age boundary, timing, task examples and preparation. It is also the exact photograph source.",
      },
      {
        title: "Paepae o Heʻeia: the fishpond",
        url: "https://paepaeoheeia.org/the-fishpond/",
        note: "Organisation-led context on Heʻeia, its wall, water system and restoration.",
      },
      {
        title: "Paepae o Heʻeia: about",
        url: "https://paepaeoheeia.org/about-us/",
        note: "The Native Hawaiian organisation's own mission and stewardship context.",
      },
    ]),
  },
  {
    id: "moldova-seasonal-grape-harvest",
    slug: "choose-the-harvest-before-the-cellar",
    title: "Choose the harvest before the cellar",
    summary:
      "Time a Moldovan winery visit for picking and pressing, then confirm the exact October task before building a trip around it.",
    field: "taste",
    place: "Ștefan Vodă",
    country: "Moldova",
    countrySlug: "moldova",
    regionSlug: "stefan-voda",
    status: "public_guide",
    demo: false,
    ...guideImage("moldova-seasonal-grape-harvest"),
    kernel:
      "Use Moldova Travel's current wine guide to identify a harvest-format visit, then confirm it directly with the winery for the year you travel. The guide specifically says October visitors at Et Cetera can pick grapes and crush them by foot. Treat that as a seasonal possibility requiring confirmation, not standing inventory. Begin among the vines before the tasting room makes the work invisible.",
    rootedness:
      "Moldovan wine tourism spans family estates, small producers and large cellars across distinct regions. A visitor harvest can reveal one piece of that system without pretending to be ordinary vineyard labour or a village household invitation. The winery decides the crop, timing, hygiene, safety and part offered to guests.",
    shift:
      "From beginning with a finished glass to noticing the seasonal decisions and physical work that make it possible.",
    humanReturn:
      "Wine may become more specific when weather, fruit and the date of picking remain attached to what is poured.",
    responsibility:
      "Contact the winery before booking travel and confirm that the harvest activity is operating on your exact date, plus price, language, footwear, transport, food and alcohol-free options. Harvest timing changes with weather and fruit. Never enter production or vineyard areas without instruction. The image shows a separate harvest event at Hill and Valley near Chișinău, not Et Cetera, a future programme or an EA visit.",
    evidence:
      "Moldova Travel's current wine guide states that October visitors at Et Cetera can participate in grape picking and foot crushing, and warns that winery visits require advance reservation. Its separate 2025 overview documents a public harvest event at Hill and Valley and supplies the contextual photograph. These sources support seasonal investigation and direct confirmation. They do not guarantee 2026 inventory, a meal, a fixed date, independent quality assessment or EA attendance.",
    duration:
      "Seasonal and host-defined. Confirm the date and full duration directly before arranging transport",
    participation:
      "Winery-directed picking and pressing only when explicitly confirmed for the current harvest. No production work or village meal is assumed",
    access:
      "Start with Moldova Travel's winery guide, then reserve and reconfirm the exact seasonal programme directly. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Moldova Travel: wine of Moldova",
        url: "https://moldova.travel/en/wine-of-moldova/",
        note: "Official tourism guide identifying Et Cetera's October picking and foot-crushing possibility and the need to reserve winery visits.",
      },
      {
        title: "Moldova Travel: why visit Moldova in 2025",
        url: "https://moldova.travel/en/why-visit-moldova-in-2024/",
        note: "Official article documenting a harvest event at Hill and Valley. It is the exact photograph source, not proof of Et Cetera's current programme.",
      },
    ]),
  },
];
