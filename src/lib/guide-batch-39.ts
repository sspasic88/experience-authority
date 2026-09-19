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

export const guideBatch39: PublicExperience[] = [
  {
    id: "panauti-community-homestay",
    slug: "stay-where-the-town-knows-your-host",
    title: "Stay where the town knows your host",
    summary:
      "Let Panauti begin at a family table through a women-led homestay that pairs an overnight stay with everyday Newari hospitality.",
    field: "stay",
    place: "Panauti",
    country: "Nepal",
    countrySlug: "nepal",
    regionSlug: "kavrepalanchok",
    status: "public_guide",
    demo: false,
    ...guideImage("panauti-community-homestay"),
    kernel:
      "Reserve through Panauti Community Homestay and let the network assign the household. Arrive with time for tea, a home-cooked meal and the host's orientation before deciding what else belongs in the stay. If a cooking class or town walk is available, treat it as a hosted addition rather than a performance owed by every household.",
    rootedness:
      "The network describes a women-led programme operating in Panauti since 2012, with guests staying in individual family homes rather than one purpose-built hotel. That structure can make household work and local income more visible. It does not make a private home public property, establish equal benefit across every host or turn one family into a complete account of Newari life.",
    shift:
      "From using a town as a day-trip backdrop to letting one household shape the pace of arrival, meal and morning.",
    humanReturn:
      "The most durable memory may be the distance between a prepared guest room and the ordinary kitchen work that makes welcome possible.",
    responsibility:
      "Confirm the assigned home, room type, shared facilities, stairs, meals, allergies, language, transport, activities, host payment and cancellation terms before travel. Follow household rules and ask before photographing people, kitchens, bedrooms or religious objects. Do not expect alcohol, unrestricted access or personal disclosure. The image shows a Panauti host serving food in a programme photograph. It does not identify the household you may receive or prove an EA stay.",
    evidence:
      "Community Homestay Network currently publishes a Panauti stay with accommodation, meals, optional cooking and local activities, and describes its women-led history. The direct page supports a public booking route and an assigned host household. It does not independently verify conditions in every home, the division of revenue, accessibility, a specific activity on every date or EA attendance.",
    duration:
      "At least one night. Confirm check-in, meal timing, transport and any added activity directly before fixing the rest of the route",
    participation:
      "Household hospitality with meals and only the activities explicitly confirmed by the network and host. Friendship, ceremony and access beyond the booked stay are not implied",
    access:
      "Use the current Panauti Community Homestay page to request the stay and confirm the assigned household. No EA booking or commission. No host relationship is implied.",
    guideReview: review("public_hospitality", [
      {
        title: "Community Homestay Network: Panauti",
        url: "https://communityhomestay.com/homestays/panauti",
        note: "Current direct programme page describing the women-led network, host assignment, accommodation, meals, activities and guest requirements. It is also the exact photograph source.",
      },
      {
        title: "Community Homestay Network: how community homestays work",
        url: "https://communityhomestay.com/",
        note: "Operator context for the network model and direct booking route. It is not independent verification of every Panauti household.",
      },
    ]),
  },
  {
    id: "chinchero-cttc-weaving-demonstration",
    slug: "follow-the-colour-back-to-the-wool",
    title: "Follow the colour back to the wool",
    summary:
      "Watch Chinchero's weavers carry fibre through spinning, natural dye and backstrap loom at a centre run by the artisans themselves.",
    field: "work",
    place: "Chinchero",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "sacred-valley",
    status: "public_guide",
    demo: false,
    ...guideImage("chinchero-cttc-weaving-demonstration"),
    kernel:
      "Visit the Away Riqcharicheq association through the Center for Traditional Textiles of Cusco's published demonstration. Follow the sequence from raw fibre and drop spindle through dye, warp and backstrap loom before looking at finished textiles. Ask about one motif or material rather than collecting every explanation at once, and buy only when you understand who made the piece.",
    rootedness:
      "CTTC identifies the demonstration as part of an artisan-run weaving association in Chinchero and presents the process as living knowledge rather than a decorative add-on. A public demonstration can reveal sequence, skill and vocabulary. It cannot disclose every community meaning, make all designs freely reproducible or turn observation into mastery.",
    shift:
      "From seeing a bright textile as one object to recognising the chain of decisions that begins before the first coloured thread.",
    humanReturn:
      "A woven border may become less like ornament once you have seen how fibre, tension and memory have to agree.",
    responsibility:
      "Check the current day, hours, language, group size, contribution or purchase expectations and transport before leaving Cusco. Ask before photographing weavers or close pattern details. Do not copy, publish or commercialise a motif without permission and context. The photograph shows CTTC's real Chinchero demonstration, but not a guaranteed host, group or EA visit.",
    evidence:
      "CTTC currently publishes a daily weaving demonstration in Chinchero with directions and a process spanning spinning, natural dyeing and weaving. Peru's official tourism site provides wider place context. These sources support a public artisan-centred observation. They do not promise a hands-on lesson, identify the weaver for a future visit, verify income distribution or prove EA attendance.",
    duration:
      "Self-paced within the published 9am to 4pm window. Confirm current hours and allow time for the full process rather than a quick retail stop",
    participation:
      "Observation, questions and direct purchase when available. Loom use, dyeing, motif reproduction and private workshop access are not promised",
    access:
      "Use CTTC's current activity page and directions to reach the Chinchero association. Confirm group arrangements directly. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Center for Traditional Textiles of Cusco: weaving demonstration",
        url: "https://www.textilescusco.org/special-activity-detail/weaving-demostration/3",
        note: "Current direct page with the association, process, daily hours, directions and exact programme photograph.",
      },
      {
        title: "Peru Travel: discover Chinchero",
        url: "https://www.peru.travel/stories/discover-chinchero-the-most-picturesque-town-in-the-sacred-valley",
        note: "Official destination context for Chinchero and its textile culture. It is not the booking or access authority for the CTTC demonstration.",
      },
    ]),
  },
  {
    id: "niue-a5-plantation-uga-tour",
    slug: "meet-the-island-through-the-uga",
    title: "Meet the island through the uga",
    summary:
      "Enter Niue's forest with a local plantation guide and meet the coconut crab as habitat, food knowledge and a living boundary.",
    field: "nature",
    place: "Mutalau",
    country: "Niue",
    countrySlug: "niue",
    regionSlug: "north-niue",
    status: "public_guide",
    demo: false,
    ...guideImage("niue-a5-plantation-uga-tour"),
    kernel:
      "Book A5 Plantation and Uga Tour through its current public route. Follow the guide from cultivated plants toward the island interior, then meet the uga through its habitat and the host's account of how it is found. Let the animal remain more than a photograph. Ask how size, season and local practice influence what is observed or taken.",
    rootedness:
      "Niue Tourism presents uga as an iconic land animal with a place in food practice and island knowledge. A5 connects the crab to a working plantation and the forest behind it. A visitor encounter can open that relationship. It does not settle conservation questions, confer hunting authority or make handling necessary for a meaningful visit.",
    shift:
      "From treating a giant crab as an island curiosity to reading it through forest, cultivation and the choices that keep a population present.",
    humanReturn:
      "The scale of the uga may create the first surprise. The stronger memory should be the habitat and knowledge that make the encounter possible.",
    responsibility:
      "Confirm the current guide, departure point, transport, duration, weather, footwear, group size, price and whether any animal contact is proposed. Follow the guide's safety and wildlife decisions. Do not demand handling, baiting or capture, and do not post a precise sensitive location without the host's agreement. The photograph is an official Niue Tourism image of Tony presenting uga. It does not establish the animals, conditions or actions of a future tour or prove an EA visit.",
    evidence:
      "Niue Tourism currently publishes A5 as a two-hour plantation and uga tour from Mutalau with a direct booking route and scheduled departures. A separate official Niue Tourism story supplies the exact image and wider uga context. These sources support a public local-guided introduction. They do not independently assess animal welfare, harvesting pressure, conservation outcomes or EA attendance.",
    duration:
      "About two hours according to the current listing. Confirm the live departure and transport before crossing the island",
    participation:
      "Guide-led plantation and forest visit with observation and only the contact explicitly directed on the day. Hunting rights or independent wildlife access are not implied",
    access:
      "Use Niue Tourism's current A5 listing to confirm and book directly with the operator. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Niue Tourism: A5 Plantation and Uga Tour",
        url: "https://www.niueisland.com/all-tours/a5-tours",
        note: "Current official listing with duration, departures, contact route, plantation context and uga habitat visit.",
      },
      {
        title: "Niue Tourism: why Niue is a gem for unique holidays",
        url: "https://www.niueisland.com/discover-niue/blog/post/discover-why-niue-is-a-gem-for-unique-holidays-in-the-south-pacific",
        note: "Official island context and exact photograph source for Tony with uga. It does not depict every A5 departure or establish conservation performance.",
      },
    ]),
  },
  {
    id: "mindelo-le-metalo-live-music",
    slug: "let-the-room-introduce-mindelo",
    title: "Let the room introduce Mindelo",
    summary:
      "Choose a live-music room in Mindelo where the evening programme, local musicians and table set the city's tempo.",
    field: "gather",
    place: "Mindelo",
    country: "Cabo Verde",
    countrySlug: "cabo-verde",
    regionSlug: "sao-vicente",
    status: "public_guide",
    demo: false,
    ...guideImage("mindelo-le-metalo-live-music"),
    kernel:
      "Check Le Metalo's current programme before choosing the night, then arrive early enough for the room to form around the musicians. Order through the venue, keep conversation below the performance and let the actual bill decide what you hear. The point is not to demand morna from every stage. It is to meet Mindelo through a working live-music room whose genres and players can change.",
    rootedness:
      "Mindelo's musical identity includes morna but cannot be compressed into one expected sound. Le Metalo currently presents itself as a restaurant musical with recurring live performance. A public evening can place musicians, audience and hospitality in one frame. It cannot represent every São Vicente tradition, guarantee a particular genre or make a commercial venue an untouched local secret.",
    shift:
      "From arriving with a soundtrack already chosen to letting one night's musicians tell you what Mindelo sounds like now.",
    humanReturn:
      "A city may stay with you less through the song you expected than through the room that taught you when to listen.",
    responsibility:
      "Verify the current performer, genre, start time, reservation, cover, minimum spend, age conditions, accessibility and transport directly. Pay the venue's stated charges and ask before recording musicians or nearby guests. Do not label every Cape Verdean performance as morna. The photograph shows a real Le Metalo live performance, not a promised artist, genre, date or EA visit.",
    evidence:
      "Le Metalo's current site identifies a Mindelo music venue with live programming and published opening days. Its own photographs show operating performances. This supports a public evening built around the venue's live bill. It does not guarantee morna, a small acoustic format, a named musician, editorial independence from the venue or EA attendance.",
    duration:
      "An evening shaped by the live bill. Confirm the performance start and reserve enough time for dinner service and the full set",
    participation:
      "Public audience and restaurant guest. Performer access, requests, recording rights and participation are not implied",
    access:
      "Check Le Metalo's live programme and reserve directly if required. No EA booking or commission. No venue partnership is implied.",
    guideReview: review("public_hospitality", [
      {
        title: "Le Metalo Mindelo",
        url: "https://lemetalo.cv/",
        note: "Current direct venue site with location, opening pattern, live-music positioning and the exact performance photograph.",
      },
      {
        title: "Cabo Verde Tourism: Onda Morna Restaurante",
        url: "https://www.turismo.cv/pt_PT/tms/restauration/onda-morna-restaurante-919?default_island=1",
        note: "Official tourism-registry context for Mindelo's public music-and-hospitality landscape. It is not evidence for Le Metalo's nightly programme.",
      },
    ]),
  },
  {
    id: "wadi-rum-real-bedouin-camp",
    slug: "stay-until-the-desert-loses-its-colour",
    title: "Stay until the desert loses its colour",
    summary:
      "Remain in Wadi Rum beyond the day circuit at a Bedouin-run camp where sunset, dinner, darkness and morning belong to one stay.",
    field: "stay",
    place: "Wadi Rum",
    country: "Jordan",
    countrySlug: "jordan",
    regionSlug: "wadi-rum",
    status: "public_guide",
    demo: false,
    ...guideImage("wadi-rum-real-bedouin-camp"),
    kernel:
      "Choose the overnight stay published by Real Bedouin Experience and confirm the camp transfer before arrival. Let the transition do the work: rock colour receding, dinner shared on the operator's terms, artificial light lowered and morning returning detail to the valley. Do not build the night around a guaranteed Milky Way photograph or demand a staged version of hospitality.",
    rootedness:
      "Wadi Rum is a protected landscape and a lived Bedouin place, not an empty film set. The named camp offers a public overnight route with local transport, dinner and breakfast. A paid stay can support time in the landscape and hosted hospitality. It does not establish how every benefit is distributed, grant free movement across protected terrain or make one camp representative of all Bedouin life.",
    shift:
      "From crossing Wadi Rum as scenery to noticing how temperature, darkness and distance redraw the same rock after the vehicles stop.",
    humanReturn:
      "The desert may become most specific when colour disappears and your attention has to move from horizon to sound, temperature and sky.",
    responsibility:
      "Confirm the current camp, transfer point, room type, bathroom, meals, dietary needs, water, power, temperature, clothing, mobility, child policy, price and cancellation terms. Stay with agreed routes and minimise light and noise. Ask before photographing staff or other guests. The image shows the named camp's night sky, not guaranteed visibility, accommodation conditions or an EA stay.",
    evidence:
      "Real Bedouin Experience currently publishes an overnight camp with transfers, dinner, breakfast, tea and listed accommodation. Jordan Tourism provides protected-area planning context. These sources support a named public stay. They do not guarantee stars or weather, independently assess safety or benefit distribution, verify every amenity on every date or prove EA attendance.",
    duration:
      "One night, with the camp's transfer, dinner and breakfast sequence. Confirm arrival and departure times before connecting Aqaba, Petra or Amman travel",
    participation:
      "Hosted overnight stay and shared meals within the operator's published camp. Private ceremony, unrestricted desert access and cultural performance are not promised",
    access:
      "Use the operator's current overnight page to confirm and reserve the stay and transfer directly. No EA booking or commission.",
    guideReview: review("public_hospitality", [
      {
        title: "Real Bedouin Experience Tours and Camp: overnight stay",
        url: "https://www.wadirum-jordan.com/overnight-stay.html",
        note: "Current direct camp page with accommodation, transfers, dinner, breakfast, tea, price structure and the exact night photograph.",
      },
      {
        title: "Jordan Tourism Board: Wadi Rum",
        url: "https://international.visitjordan.com/wheretogo/wadi-rum?experienceId=10&tabId=99",
        note: "Official destination context for the protected landscape and visitor planning. It is not an independent review of the named camp.",
      },
    ]),
  },
];
