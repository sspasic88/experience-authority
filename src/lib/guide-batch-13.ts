import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Four atlas candidates and two city-depth guides, all narrowed to current public access. */
export const guideBatch13: PublicExperience[] = [
  {
    id: "busan-spa-land-jjimjilbang",
    slug: "spend-an-hour-between-the-hot-rooms",
    title: "Spend an hour between the hot rooms",
    summary:
      "Enter Busan through a contemporary jjimjilbang where bathing, heated rooms and unhurried shared time occupy the same public visit.",
    field: "restore",
    place: "Busan",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "busan",
    status: "public_guide",
    demo: false,
    ...guideImage("busan-spa-land-jjimjilbang"),
    kernel:
      "Use ordinary public admission to Spa Land Centum City, then read the venue's current rules before choosing how to spend your time. The official pages describe gender-separated bathing areas, heated rooms and shared rest spaces within a four-hour admission window. This is a large contemporary facility, not a claim to represent every Korean bathhouse. Begin with one circuit that suits you rather than trying to consume every room.",
    rootedness:
      "A jjimjilbang joins private preparation, shared facilities and time spent without urgency. At Spa Land, the scale and architecture are distinctly contemporary, but the useful cultural question remains practical. How do people make room for one another in a place where bathing and resting are ordinary public activities rather than a private hotel amenity? One commercial venue can open that question without answering it for a country.",
    shift:
      "From treating the spa as a list of facilities to noticing the etiquette that lets strangers share time and space.",
    humanReturn:
      "You may leave more attentive to the difference between using a facility and understanding how a public room works. That is an editorial possibility, not a health or wellbeing promise.",
    responsibility:
      "Read the current admission, age, same-sex guardian, luggage and bathing rules before arrival. Wash before entering pools, keep phones and cameras out of bathing and changing areas and follow staff direction throughout. Heat and water may not suit everyone. Make your own health decision and leave any room that feels wrong. EA does not assess medical suitability, hygiene or accessibility.",
    evidence:
      "Shinsegae currently publishes admission hours, prices, a four-hour limit and practical rules for Spa Land. Visit Busan separately lists the venue, public access, transport and accessibility information. EA has not visited or tested the facilities. The photograph is an official Visit Busan image of a rest room at Spa Land, not evidence of bathing conditions, a particular day or an EA assessment.",
    duration:
      "Up to four hours under the current admission terms. A shorter visit is possible",
    participation:
      "Self-directed public bathing and heated-room visit within the venue's current rules",
    access:
      "Public paid admission subject to current hours, age rules and capacity. Check the official venue page before travelling. EA does not sell admission or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl:
        "https://deptmapp.shinsegae.com/store/entertainment/centum-spaland.do",
      sources: [
        {
          title: "Shinsegae Centum City: Spa Land",
          url: "https://deptmapp.shinsegae.com/store/entertainment/centum-spaland.do",
          note: "Official venue page with current hours, admission prices, four-hour use limit, age conditions and practical rules. Details can change.",
        },
        {
          title: "Visit Busan: Spa Land Centum City",
          url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=1753",
          note: "Official destination listing with location, transport, public access and accessibility information. It is not an independent quality or safety review.",
        },
      ],
    },
  },
  {
    id: "kuopio-jatkankamppa-smoke-sauna",
    slug: "step-from-smoke-sauna-into-the-lake",
    title: "Step from smoke sauna into the lake",
    summary:
      "Reserve a Tuesday at Jätkänkämppä, where a large smoke sauna, Lake Kallavesi and a public traditional evening share one winter or summer rhythm.",
    field: "restore",
    place: "Kuopio",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "kuopio",
    status: "public_guide",
    demo: false,
    ...guideImage("kuopio-jatkankamppa-smoke-sauna"),
    kernel:
      "Book the current Tuesday Traditional Finnish Evening at Jätkänkämppä. The venue describes a smoke sauna, optional lake or winter swimming, a buffet and live accordion music within an evening of roughly four to five hours. Treat each element as optional except the rules that keep the shared setting workable. Confirm the date, timetable, meal and what to bring before fixing the rest of your Kuopio plans.",
    rootedness:
      "The lakeside log building and smoke sauna connect the visit to place through heat, water, season and a social evening rather than a generic spa menu. It is still a visitor-facing programme run by a resort. That boundary matters. The guide offers a public way to encounter one Kuopio sauna setting, not entry into private Finnish life or proof that one organised evening can stand for the wider tradition.",
    shift:
      "From chasing the shock of cold water to understanding the evening as a sequence of heat, pause, company and choice.",
    humanReturn:
      "You may remember the threshold between the dark sauna and the lake more clearly than any claim about endurance. That is an editorial possibility, not a health benefit or a test of courage.",
    responsibility:
      "Reserve through the venue and read its current bathing, changing, alcohol and swimming guidance. Lake and winter swimming are optional and require your own careful judgement. Never enter the water alone or against staff advice. Keep phones and cameras out of changing and sauna areas. Ask before photographing people outside. EA does not assess medical suitability, water safety or the evening's accessibility.",
    evidence:
      "Rauhalahti currently publishes Tuesday Traditional Finnish Evenings throughout the year, with smoke sauna, optional swimming, buffet, music and advance booking. EA has not attended, assessed the facilities or verified conditions on a particular Tuesday. The image is an official Rauhalahti promotional photograph outside the smoke sauna in winter. It is not proof of current snow, water conditions, staffing or an EA visit.",
    duration:
      "About four to five hours for the full Tuesday programme. Confirm the current timetable",
    participation:
      "Booked public evening with smoke sauna, optional swimming, food and live music",
    access:
      "Advance public booking through Rauhalahti, subject to current dates, capacity and terms. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl:
        "https://www.rauhalahti.fi/en/jatkankamppa/traditional-finnish-evenings/",
      sources: [
        {
          title: "Rauhalahti: Traditional Finnish Evenings",
          url: "https://www.rauhalahti.fi/en/jatkankamppa/traditional-finnish-evenings/",
          note: "Official current programme with Tuesday schedule, duration, smoke sauna, optional swimming, buffet, music and booking information.",
        },
        {
          title: "Rauhalahti: Jätkänkämppä lodge",
          url: "https://www.rauhalahti.fi/en/jatkankamppa/",
          note: "Official venue context for the lakeside log building and smoke sauna. It is not an independent assessment of cultural depth, safety or access.",
        },
      ],
    },
  },
  {
    id: "fez-clay-to-mosaic",
    slug: "cut-the-first-piece-of-a-pattern",
    title: "Cut the first piece of a pattern",
    summary:
      "Follow clay toward geometry in Fez through a short public introduction to pottery, painting and the careful cutting of zellige.",
    field: "make",
    place: "Fez",
    country: "Morocco",
    countrySlug: "morocco",
    regionSlug: "fez",
    status: "public_guide",
    demo: false,
    ...guideImage("fez-clay-to-mosaic"),
    kernel:
      "Book the public Clay to Mosaic artisan masterclass offered by Palais de Fès. Its current two-hour format introduces pottery shaping, painting and the cutting and assembly of zellige pieces. Arrive expecting a first encounter, not a compressed apprenticeship. Ask which stages you will actually perform, what has been prepared in advance and how the artisan wants sharp tools handled before touching anything.",
    rootedness:
      "Morocco's National Tourist Office identifies Fez as a centre of zellige and describes the craft as part of the country's architectural heritage. The pattern is made from separate decisions in clay, glaze, cutting and assembly. A short hotel-arranged workshop cannot transfer the depth of that knowledge, but it can make the precision and labour behind a familiar surface harder to overlook.",
    shift:
      "From seeing mosaic as decoration to meeting the repeated judgement held in each small piece.",
    humanReturn:
      "You may leave able to look at a wall more slowly and ask who cut, placed and carried its pattern. The session does not make a participant a zellige artisan.",
    responsibility:
      "Confirm exactly what the current session includes before paying. Follow the artisan's instructions around hammers, chisels, glaze and dust. Wear any protective equipment provided and keep hands away from another person's working area. Ask before photographing artisans or finished work. Do not claim a souvenir exercise as mastery of the craft or proof of fair labour conditions.",
    evidence:
      "Palais de Fès currently publishes a two-hour public masterclass for up to 15 people with a direct booking route and a stated sequence from pottery to zellige. Morocco's National Tourist Office provides separate destination context for Fez and the craft. EA has not attended, evaluated instruction or verified artisan benefit. The licensed photograph shows zellige artisans at a different Fez workshop in 2015, not this visitor programme or an EA visit.",
    duration: "Two hours according to the current programme page",
    participation:
      "Instructor-led public introduction to pottery, painting and zellige assembly",
    access:
      "Advance paid booking through Palais de Fès, subject to current availability and non-refundable terms. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.palais-de-fes.com/artisan-masterclass",
      sources: [
        {
          title: "Palais de Fès: Artisan Masterclass from Clay to Mosaic",
          url: "https://www.palais-de-fes.com/artisan-masterclass",
          note: "First-party description of the two-hour visitor programme, group size, price, activities and public booking route. It is not an independent assessment.",
        },
        {
          title: "Moroccan National Tourist Office: traditional craftsmanship",
          url: "https://www.visitmorocco.com/en/discover-morocco/traditional-craftsmanship-revisited",
          note: "Official destination context identifying Fez with zellige and placing the tilework within Moroccan architecture and craft. It is not access evidence for the class.",
        },
      ],
    },
  },
  {
    id: "montevideo-public-candombe-workshop",
    slug: "find-the-pulse-before-the-parade",
    title: "Find the pulse before the parade",
    summary:
      "Join a public Friday percussion workshop in Montevideo and meet candombe first as shared rhythm, listening and social space.",
    field: "learn",
    place: "Montevideo",
    country: "Uruguay",
    countrySlug: "uruguay",
    regionSlug: "montevideo",
    status: "public_guide",
    demo: false,
    ...guideImage("montevideo-public-candombe-workshop"),
    kernel:
      "The Municipality of Montevideo currently lists a free Friday percussion and candombe workshop at Parque de la Amistad through 30 October 2026. The listing says it is open without advance registration and is specifically designed for older people. If that profile fits you, arrive ready to listen before adding your own sound. If it does not, use the municipal listing to look for another current public event rather than assuming this group is yours to enter.",
    rootedness:
      "Candombe is not merely a parade sound waiting for a visitor. The municipal workshop describes rhythm as a way to support meeting, integration and social life. That emphasis is the useful way in. A public learning space can show how percussion depends on attention to other people, while the wider history and meaning of candombe remain far larger than one Friday session.",
    shift:
      "From consuming the impact of a drum line to noticing how a shared pulse is learned and held.",
    humanReturn:
      "You may leave hearing more structure inside the sound and with a clearer sense of when to follow rather than lead. That is an editorial possibility, not cultural fluency.",
    responsibility:
      "Respect the programme's older-adult focus and confirm that it is appropriate for you before attending. Follow the facilitator, keep volume and physical effort within instruction and leave room for regular participants. Ask before photographing or recording anyone. Do not use a workshop as permission to imitate ceremonial, neighbourhood or carnival contexts you have not been invited into.",
    evidence:
      "Montevideo's official events portal lists the free workshop, its older-adult profile, Friday dates, hours and open attendance through 30 October 2026. EA has not attended, spoken with facilitators or assessed whether the programme welcomes international visitors. The licensed photograph shows a candombe drum line during Las Llamadas in 2011. It does not depict the workshop, its participants or an EA visit.",
    duration: "Two hours on listed Fridays from 11:00 to 13:00",
    participation:
      "Facilitated public percussion workshop designed for older adults, with no advance registration listed",
    access:
      "Free on the published 2026 dates. The programme is aimed at older people, so confirm fit on the current municipal page before attending. EA does not organise access.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-10-30",
      accessUrl:
        "https://eventos.montevideo.gub.uy/evento/envejecimiento-activo/taller-de-percusion-y-candombe",
      sources: [
        {
          title: "Municipality of Montevideo: percussion and candombe workshop",
          url: "https://eventos.montevideo.gub.uy/evento/envejecimiento-activo/taller-de-percusion-y-candombe",
          note: "Current municipal listing with venue, Friday dates, hours, free access, older-adult profile and no-registration attendance. The programme ends in October 2026.",
        },
        {
          title: "Uruguay Ministry of Education and Culture: Candombe Vivo",
          url: "https://www.gub.uy/ministerio-educacion-cultura/comunicacion/calendario-actividades/7a-edicion-del-festival-candombe-vivo",
          note: "Government cultural context for candombe as a living Montevideo practice. The listed September festival has passed and is not used as current access evidence.",
        },
      ],
    },
  },
  {
    id: "istanbul-sehir-hatlari-ferry",
    slug: "let-the-ferry-redraw-istanbul",
    title: "Let the ferry redraw Istanbul",
    summary:
      "Take an ordinary Şehir Hatları ferry and let public transport turn the Bosphorus from a view into the line that holds the city together.",
    field: "move",
    place: "Istanbul",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    status: "public_guide",
    demo: false,
    ...guideImage("istanbul-sehir-hatlari-ferry"),
    kernel:
      "Choose one current Şehir Hatları urban ferry route that connects with a day you already have. A crossing between the European and Asian sides is enough. Check the timetable, pier and tariff on the day, arrive early and let the journey remain public transport rather than turning it into a private sightseeing performance. The city will supply the view, but the more useful subject is the network of commuters, piers and vessels that makes crossing water ordinary.",
    rootedness:
      "Şehir Hatları is owned by Istanbul Metropolitan Municipality and carries passengers across the Bosphorus, Golden Horn and wider city waters. Its history reaches back through the city's organised ferry services, while the current timetable keeps that inheritance functional. This is why an ordinary crossing can reveal more than a cruise. It is infrastructure people continue to depend on.",
    shift:
      "From looking at the Bosphorus as scenery to understanding water as one of Istanbul's working streets.",
    humanReturn:
      "You may leave with a mental map built from piers and crossings rather than districts divided by water. One ride cannot explain the city, but it can change how the rest of the route fits together.",
    responsibility:
      "Use the current official timetable and tariff, keep boarding areas clear and give priority seating and space to people who need it. Follow crew instructions and posted rules. Wind, crowding and route changes can alter the journey. Do not lean over rails, feed birds from the vessel or turn commuters into portrait subjects without agreement. EA does not operate, ticket or guarantee the service.",
    evidence:
      "Şehir Hatları currently publishes urban ferry timetables and identifies itself as an Istanbul Metropolitan Municipality company providing public sea transport. EA has not taken or assessed a current sailing. The licensed photograph shows a named Şehir Hatları passenger ferry on the Bosphorus at sunset. It does not promise that light, route, vessel, crowd level or an EA visit.",
    duration:
      "One current urban crossing. Duration varies by route, stops and operating conditions",
    participation: "Independent journey on an ordinary public passenger ferry",
    access:
      "Public transport subject to the current timetable, tariff, pier access and service changes. EA does not sell tickets or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://sehirhatlari.istanbul/en/timetables",
      sources: [
        {
          title: "Şehir Hatları: current timetables",
          url: "https://sehirhatlari.istanbul/en/timetables",
          note: "Official route and timetable finder for current inner-city, Bosphorus, Golden Horn and island services. Times and operations can change.",
        },
        {
          title: "Şehir Hatları: about the public ferry company",
          url: "https://sehirhatlari.istanbul/en/corporate/about-us-215",
          note: "Official company context for municipal ownership, public sea transport, piers, ferries and passenger scale. It is not an independent service review.",
        },
      ],
    },
  },
  {
    id: "mexico-city-muevete-en-bici",
    slug: "ride-the-avenue-when-the-cars-step-aside",
    title: "Ride the avenue when the cars step aside",
    summary:
      "Join Mexico City's Sunday ride on foot, bicycle or skates and meet Paseo de la Reforma as public space in motion.",
    field: "move",
    place: "Mexico City",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    status: "public_guide",
    demo: false,
    ...guideImage("mexico-city-muevete-en-bici"),
    kernel:
      "Check the current week's Muévete en Bici route, then join only the section and mode that suit you. The city currently describes a free Sunday corridor for bicycles, walking, running, skates and other non-motorised movement from 08:00 to 14:00, except on the last Sunday of the month. Do not assume the same route every week or build your plan around an unconfirmed bike loan. The experience begins with the current map.",
    rootedness:
      "Paseo de la Reforma is normally read through traffic, monuments and a long urban axis. On Sunday morning, movement reorganises the avenue. Thousands of individual journeys create a temporary public commons where a child learning to ride, a fast cyclist and a person walking all negotiate the same city surface. The value is not an empty street. It is seeing what the street can hold when its priorities change.",
    shift:
      "From moving past the city inside a vehicle to becoming responsible for your pace among many other people.",
    humanReturn:
      "You may remember Mexico City at the speed of a conversation, a pedal stroke or a pause beneath the trees. That is an editorial possibility, not a promise of quiet or an empty avenue.",
    responsibility:
      "Open the official route before departure because closures and extensions change. Use a safe, working bicycle if you ride, wear appropriate protection and follow marshals, signals and lane directions. Keep a predictable line, slow near children and crowded crossings and do not stop in the moving stream for photographs. Heat, altitude and crowd density matter. Choose a shorter section or walk when that is the better decision.",
    evidence:
      "Mexico City's mobility authority currently publishes the Sunday schedule, eligible forms of movement, weekly route and free activity context. EA has not joined, audited traffic management or tested bike access. The licensed photograph shows the actual Sunday ride on Paseo de la Reforma in March 2022. It does not prove the current route, crowd level, weather or an EA visit.",
    duration:
      "At your own pace within the current Sunday window, normally 08:00 to 14:00",
    participation:
      "Independent cycling, walking, running or skating on the published car-free route",
    access:
      "Free public route on most Sundays. Check the official weekly map and exceptions before leaving. Bicycle availability is not guaranteed. EA does not organise the ride.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl:
        "https://semovi.cdmx.gob.mx/tramites-y-servicios/mi-bici/muevete-en-bici",
      sources: [
        {
          title: "Mexico City Mobility Secretariat: Muévete en Bici",
          url: "https://semovi.cdmx.gob.mx/tramites-y-servicios/mi-bici/muevete-en-bici",
          note: "Official current schedule, weekly route link, eligible non-motorised modes and programme information. The route and exceptions must be checked again before use.",
        },
        {
          title: "Mexico City government: Sunday ride participation record",
          url: "https://www.jefaturadegobierno.cdmx.gob.mx/comunicacion/nota/paseo-dominical-muevete-en-bici-logra-record-de-asistencia-con-144-mil-486-visitantes-que-promueven-la-movilidad-sustentable",
          note: "Official city context for the scale and public-space purpose of the Sunday ride. It is historical context, not a current route or attendance guarantee.",
        },
      ],
    },
  },
];
