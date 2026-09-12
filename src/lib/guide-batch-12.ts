import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Five recognisable, public-access guides selected from the 200-candidate atlas. */
export const guideBatch12: PublicExperience[] = [
  {
    id: "edinburgh-public-ceilidh",
    slug: "let-the-caller-start-the-dance",
    title: "Let the caller start the dance",
    summary:
      "Join a public Edinburgh ceilidh where the music is live, the room moves together and the next dance begins with an explanation.",
    field: "gather",
    place: "Edinburgh",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    status: "public_guide",
    demo: false,
    ...guideImage("edinburgh-public-ceilidh"),
    kernel:
      "Choose a currently ticketed public ceilidh in Edinburgh. HotScotch lists forthcoming 2026 dates at Assembly Roxy, Summerhall and Ratho Church Hall, while Ghillie Dhu publishes a separate Burly Ceilidh Club date. Read the event page for the exact band, venue, age conditions and ticket terms. A caller normally explains the next dance, so arriving without a partner or a catalogue of steps need not keep you at the edge of the room.",
    rootedness:
      "A ceilidh becomes legible through shared timing. Fiddle, accordion or another live line sets the pace, the caller turns a named dance into a sequence the room can follow and each set depends on people adjusting to one another. The useful experience is not a staged lesson in Scottish identity. It is taking part in a public social dance on the terms of that particular night.",
    shift:
      "From watching a room as an audience to finding your place inside a pattern held by other people.",
    humanReturn:
      "You may leave with one tune, one repeated figure and a more generous idea of what a beginner can contribute to a shared evening. That is an editorial possibility, not a promise that every event feels the same.",
    responsibility:
      "Book only through the current event route and check venue, age and accessibility information before buying. Listen to the caller, change pace when a set becomes crowded and make room for people who are learning. Ask before photographing identifiable dancers. A public ticket is permission to attend, not permission to treat the room or its traditions as costume.",
    evidence:
      "HotScotch currently publishes four ticketed public ceilidhs in and around Edinburgh for November and December 2026. Ghillie Dhu separately lists a public Burly Ceilidh Club date. EA has not attended these events, assessed the callers or verified the experience of a particular night. The photograph was published by HotScotch and depicts an Edinburgh ceilidh, not proof of any future date or an EA visit.",
    duration:
      "An evening event. Use the chosen ticket page for start, finish and admission details",
    participation:
      "Public social dancing with live music and a caller. Beginners can follow the event's instruction",
    access:
      "Advance public ticket subject to the organiser's current terms and capacity. EA does not sell tickets or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-11-20",
      accessUrl: "https://www.myceilidh.co.uk/hotscotchceilidhtickets",
      sources: [
        {
          title: "HotScotch Ceilidh Band: tickets for public ceilidhs",
          url: "https://www.myceilidh.co.uk/hotscotchceilidhtickets",
          note: "First-party list of public 2026 ceilidh dates, Edinburgh-area venues and direct ticket routes. Dates and terms can change.",
        },
        {
          title: "Ghillie Dhu: what's on",
          url: "https://ghillie-dhu.co.uk/whats-on/",
          note: "Current venue calendar with a separate Burly Ceilidh Club listing and public event details.",
        },
      ],
    },
  },
  {
    id: "malta-village-festa",
    slug: "follow-the-festa-through-the-streets",
    title: "Follow the festa through the streets",
    summary:
      "Choose one Maltese village festa, then let decorated streets, band music and the parish calendar shape the evening.",
    field: "celebrate",
    place: "Malta and Gozo",
    country: "Malta",
    countrySlug: "malta",
    regionSlug: "malta-and-gozo",
    status: "public_guide",
    demo: false,
    ...guideImage("malta-village-festa"),
    kernel:
      "Start with one named feast on the current Archdiocese or Visit Malta calendar. Confirm its date and local programme close to arrival, then follow only the public street and church events that are open that day. A festa is not one attraction moved from village to village. Decorations, band clubs, procession, fireworks and food appear in different combinations around a particular parish celebration.",
    rootedness:
      "UNESCO describes the Maltese village festa as an annual community celebration rooted in parish life across Malta and Gozo. Preparation extends beyond the main day and involves volunteers, artisans, band associations and religious participants. For a visitor, the responsible scale is one place and one calendar, with attention to what the community is marking rather than a chase for the loudest display.",
    shift:
      "From treating fireworks and decoration as spectacle to noticing the year of work and the local relationships behind one feast day.",
    humanReturn:
      "You may remember the route between band club, church and square more clearly than any single display. That is an editorial possibility, not a claim of joining the community that prepared it.",
    responsibility:
      "Verify the programme locally because church, street and fireworks timings can differ. Keep processional routes clear, dress and behave appropriately inside churches and follow barriers or police instructions. Do not use flash during worship or photograph people at close range without agreement. Leave space for residents, reduce waste and avoid moving between several villages merely to collect displays.",
    evidence:
      "UNESCO documents the practice, its parish basis and the roles of community participants. The Archdiocese of Malta publishes a dated 2026 feast calendar, and Visit Malta lists public village-feast events. EA has not attended, assessed crowd management or confirmed every local programme. The licensed photograph shows festa street decorations in Birgu in 2016, not a 2026 event or an EA visit.",
    duration:
      "One evening or feast day within a longer local programme. Confirm the current schedule",
    participation:
      "Public attendance in streets and at events explicitly open to visitors",
    access:
      "Public calendar events subject to local changes, crowd controls and church rules. No special access is implied. EA does not organise attendance.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-10-04",
      accessUrl: "https://www.visitmalta.com/en/events-in-malta-and-gozo/",
      sources: [
        {
          title: "Visit Malta: events in Malta and Gozo",
          url: "https://www.visitmalta.com/en/events-in-malta-and-gozo/",
          note: "Official destination calendar with current public village-feast listings. Each event page and local programme should be rechecked before travel.",
        },
        {
          title: "Archdiocese of Malta: feasts in Malta and Gozo in 2026",
          url: "https://church.mt/feasts-in-malta-and-gozo-in-2026/",
          note: "Current dated parish feast calendar for Malta and Gozo, useful for selecting one place and confirming the religious context.",
        },
        {
          title: "UNESCO: Maltese village festa",
          url: "https://ich.unesco.org/en/RL/maltese-village-festa-an-annual-community-celebration-01871",
          note: "Cultural context for the annual community practice, preparation, procession, bands, fireworks and food. It is not a live access calendar.",
        },
      ],
    },
  },
  {
    id: "oaxaca-mal-de-amor-mezcal",
    slug: "follow-the-agave-into-the-still",
    title: "Follow the agave into the still",
    summary:
      "Enter a working palenque in Santiago Matatlán and follow mezcal from cooked agave through milling, fermentation and copper.",
    field: "taste",
    place: "Oaxaca",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "oaxaca",
    status: "public_guide",
    demo: false,
    ...guideImage("oaxaca-mal-de-amor-mezcal"),
    kernel:
      "Reserve Mal de Amor's public El Arte del Mezcal visit at its palenque in Santiago Matatlán. The operator currently describes a free 40-minute introduction and publishes longer tours and tastings separately. Begin with the production sequence rather than the number of samples. Ask what is in process that day, since cooking, fermenting and distilling do not happen on a visitor's timetable.",
    rootedness:
      "Oaxaca's official mezcal route places Santiago Matatlán among towns where visitors can encounter palenques and mezcal outlets. At the palenque, the operator describes agave cultivation, underground cooking, stone milling, natural fermentation and copper distillation. This guide uses that publicly offered route to make a familiar drink legible as agricultural and production work.",
    shift:
      "From reading mezcal as flavour in a glass to following the time, heat and labour that begin in the field.",
    humanReturn:
      "You may leave asking better questions about species, maturity, fuel, batches and the people behind a bottle. Tasting is optional, and a short visit does not make anyone an authority on mezcal.",
    responsibility:
      "Use the ordinary reservation route and confirm what the chosen format includes. Stay with staff around ovens, mills, fermentation vessels and stills. Do not touch equipment or enter working areas without instruction. Ask before photographing workers. Alcohol is for adults only. Do not drive after drinking, and choose a non-alcoholic visit if that is right for you.",
    evidence:
      "Mal de Amor currently publishes the named 40-minute palenque visit, location and reservation route, plus separate longer experiences and tastings. Oaxaca's official tourism site provides destination context for Santiago Matatlán and the mezcal route. EA has not visited, assessed production practices or independently evaluated the operator. The photograph is an official Mal de Amor image of steam rising from its copper process, not an EA visit or proof of activity on a future date.",
    duration:
      "40 minutes for the named introduction. Longer formats are separate and should not be assumed",
    participation:
      "Guided public palenque visit focused on the mezcal production process",
    access:
      "Public reservation through Mal de Amor, subject to current availability and terms. EA does not book, sell or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.maldeamor.com/",
      sources: [
        {
          title: "Mal de Amor: palenque and public experiences",
          url: "https://www.maldeamor.com/",
          note: "Current first-party description of El Arte del Mezcal, duration, location, reservation route and the operator's stated production sequence.",
        },
        {
          title: "Oaxaca Tourism: Ruta del Mezcal",
          url: "https://www.oaxaca.travel/index.php/es/sitios-de-interes-es/rutas-tursiticas-es/ruta-del-mezcal",
          note: "Official state tourism context locating Santiago Matatlán within the mezcal route and identifying palenques as a visitor-facing part of the town.",
        },
      ],
    },
  },
  {
    id: "doha-embrace-coffee",
    slug: "read-the-language-of-the-coffee-cup",
    title: "Read the language of the coffee cup",
    summary:
      "Prepare and share qahwa at Embrace Doha, then learn how a cup moves through the etiquette of a Qatari majlis.",
    field: "gather",
    place: "Doha",
    country: "Qatar",
    countrySlug: "qatar",
    regionSlug: "doha",
    status: "public_guide",
    demo: false,
    ...guideImage("doha-embrace-coffee"),
    kernel:
      "Book Embrace Doha's public Traditional Coffee Ceremony at its cultural house in Souq Al Wakrah. The current one-hour programme connects preparation, ingredients and trade routes with the rules of serving and receiving qahwa in a majlis setting. Treat the session as a hosted introduction. It is not entry into a private family majlis or permission to generalise one host's explanation to every household.",
    rootedness:
      "Visit Qatar identifies Embrace Doha as an independent women-run cultural house that hosts conversations and workshops for non-locals. Coffee here is not reduced to a tasting. The cup becomes a way to ask how welcome is signalled, how a guest responds and how hospitality carries information without a long explanation.",
    shift:
      "From drinking Arabic coffee as a local flavour to noticing the social language held in its preparation, serving and return.",
    humanReturn:
      "You may become more attentive to the small signals that make hospitality work across difference. That is an editorial possibility, not a promise of cultural fluency after one session.",
    responsibility:
      "Book through the current Embrace Doha page and state any access or dietary needs before the session. Follow the host's guidance on dress, seating, serving and photography. Ask before photographing people. Do not present the cultural-house setting as a private home, and do not claim etiquette learned in one session as universal or complete.",
    evidence:
      "Embrace Doha currently describes a one-hour Traditional Coffee Ceremony at its cultural house and provides a public booking route. Visit Qatar independently confirms the women-run venue, Souq Al Wakrah location, majlis context, coffee focus and wheelchair access information. EA has not joined or assessed the session. The photograph is published by Visit Qatar and shows an Embrace Doha group setting, not necessarily the coffee ceremony or an EA visit.",
    duration: "One hour according to the current programme page",
    participation:
      "Hosted public cultural-house session with coffee preparation, tasting and majlis etiquette",
    access:
      "Advance public booking through Embrace Doha, subject to its current calendar, terms and capacity. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl:
        "https://embracedoha.com/services/cultural-experiences/coffee-ceremony",
      sources: [
        {
          title: "Embrace Doha: Traditional Coffee Ceremony",
          url: "https://embracedoha.com/services/cultural-experiences/coffee-ceremony",
          note: "Current first-party programme with one-hour duration, Souq Al Wakrah location, session content and public booking route.",
        },
        {
          title: "Visit Qatar: Embrace Doha Cultural House",
          url: "https://visitqatar.com/intl-en/things-to-do/art-culture/embrace-doha",
          note: "Official destination listing for the women-run cultural house, majlis and coffee context, address, public access and accessibility information.",
        },
      ],
    },
  },
  {
    id: "salta-balderrama-pena",
    slug: "stay-while-the-zamba-circles-back",
    title: "Stay while the zamba circles back",
    summary:
      "Spend an evening at a Salta peña where live folk music, dance and regional food share the same room.",
    field: "gather",
    place: "Salta",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "salta",
    status: "public_guide",
    demo: false,
    ...guideImage("salta-balderrama-pena"),
    kernel:
      "Choose an ordinary public evening at Peña Boliche Balderrama and confirm the current programme directly before going. Salta City Tourism says the venue opens nightly with live folklore and regional food. The provincial tourism page frames a peña as a public evening of guitars, charangos, drums, singing and dance, usually around three hours. Arrive for the room, not only a headline act.",
    rootedness:
      "Salta's tourism sources place peñas within the city's living folk-music culture and identify Balderrama as a longstanding venue connected with poets, composers and performers. The same room can hold listening, eating, applause and sometimes dancing. This guide does not claim that a hospitality venue represents every form of Salteño folklore.",
    shift:
      "From treating folk music as a stage genre to noticing how an evening is held by audience, table, rhythm and return.",
    humanReturn:
      "A refrain may stay with you because you heard it inside the pace of a whole evening. That is an editorial possibility, not a guarantee of intimacy or spontaneous participation.",
    responsibility:
      "Confirm the night's programme, reservation terms, accessibility and dining arrangements. Listen before joining any dancing and take cues from the room. Keep conversation low during quiet songs. Ask before photographing performers or other guests, and do not block sightlines with a phone. Food or alcohol is not required for attentive participation.",
    evidence:
      "Salta City Tourism publishes Balderrama's address, nightly public entertainment and regional food offer. The provincial tourism page describes peñas as public, approximately three-hour experiences shaped by live music and dance. EA has not attended, assessed the programme or verified a particular night's artists. The photograph comes from a 2026 municipal public folklore event and provides Salta performance context. It does not depict Balderrama or an EA visit.",
    duration:
      "About three hours as a planning reference. Confirm the chosen night's schedule",
    participation:
      "Public live-music and dining evening, with dancing only where the room and programme invite it",
    access:
      "Ordinary public hospitality subject to the venue's current programme and capacity. Confirm directly before travel. EA does not reserve or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://saltaciudad.travel/posts/pena-boliche-balderrama",
      sources: [
        {
          title: "Salta City Tourism: Peña Boliche Balderrama",
          url: "https://saltaciudad.travel/posts/pena-boliche-balderrama",
          note: "Official city listing with venue address, nightly public entertainment, regional food and historical framing.",
        },
        {
          title: "Salta Province Tourism: peñas",
          url: "https://experiencias.turismosalta.gov.ar/penas/",
          note: "Official provincial description of public peñas, instruments, music and dance, indicative three-hour duration and Balderrama within the local venue landscape.",
        },
      ],
    },
  },
];
