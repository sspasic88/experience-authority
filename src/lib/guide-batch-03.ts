import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Recognisable ways into place, checked against the same public-guide gate. */
const guideBatch03Candidates: PublicExperience[] = [
  {
    id: "istanbul-hurrem-hammam",
    slug: "marble-steam-istanbul",
    title: "Marble, steam, Istanbul",
    summary:
      "Book a bathing ritual inside the Hürrem Sultan Hamam, where a 16th-century work by Mimar Sinan has returned to its original use.",
    field: "restore",
    place: "Istanbul",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    status: "public_guide",
    demo: false,
    ...guideImage("istanbul-hurrem-hammam"),
    kernel:
      "Choose one of the hammam's publicly offered bathing rituals and enter as a guest, not as a spectator. The shortest advertised option lasts 45 minutes and includes the core scrub and foam service. Longer formats add other treatments. This is a highly polished commercial interpretation of hammam practice, not a claim to represent every bathhouse in Istanbul.",
    rootedness:
      "Hürrem Sultan commissioned the bathhouse and Mimar Sinan designed it in 1556 beside Hagia Sophia. Istanbul Metropolitan Municipality's heritage record identifies the building as a protected work, while the operator documents its return to bathing use after restoration. The encounter matters because the architecture is not only viewed. Heat, water, marble and skilled work activate it again.",
    shift:
      "From photographing historic architecture to noticing how a building changes when its original function is restored.",
    humanReturn:
      "You may remember the city through temperature, sound and material rather than another skyline. The useful question is what the building allowed you to notice, not whether one visit made you an authority on hammam culture.",
    responsibility:
      "Read the current bathing guidance before booking. Confirm which section and treatment apply to you, and ask directly about mobility, health, skin sensitivity or other suitability concerns. Protect everyone’s privacy in bathing and changing areas. Follow the attendant's instructions and do not treat service as permission to photograph staff or other guests.",
    evidence:
      "The operator establishes the current public rituals, duration, booking route and separate sections. Istanbul Metropolitan Municipality supplies heritage context. EA has not attended, assessed treatment quality or independently verified the operator's cultural and restoration claims. The licensed photograph shows the actual restored interior in 2011, not a current session or an EA visit.",
    duration: "From 45 minutes. Confirm the ritual and arrival time",
    participation: "Attendant-led bathing, scrub and foam service",
    access:
      "Paid public programme by advance reservation. Use the official site to choose a current ritual and read its terms. EA does not book, sell or receive commission from the visit.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.hurremsultanhamami.com/en",
      sources: [
        {
          title: "Hürrem Sultan Hamam: rituals and reservation route",
          url: "https://www.hurremsultanhamami.com/en",
          note: "First-party description of the public rituals, duration, daily service and booking route. Prices and availability remain with the operator.",
        },
        {
          title:
            "Istanbul Metropolitan Municipality: Haseki Hürrem Sultan Hamamı",
          url: "https://kulturelmiras.ibb.istanbul/haseki-hurrem-sultan-hamami/",
          note: "Municipal cultural-heritage record for the building. It does not assess the present-day visitor service.",
        },
      ],
    },
  },
  {
    id: "xochimilco-kalmekak-chinampa",
    slug: "mexico-city-grown-on-water",
    title: "Mexico City, grown on water",
    summary:
      "Travel by small boat into Xochimilco's chinampa landscape for breakfast, field interpretation and a closer look at the work behind the city’s food.",
    field: "taste",
    place: "Xochimilco, Mexico City",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "xochimilco",
    status: "public_guide",
    demo: false,
    ...guideImage("xochimilco-kalmekak-chinampa"),
    kernel:
      "Kalmekak advertises a five-hour outing with transport from central Mexico City, an acalli boat journey, breakfast prepared with recently harvested produce, a guided chinampa visit and practical farming activities. Dawn departures run on named days, with a later production-zone format on Saturdays. Treat that schedule as a planning lead only. Confirm it on the operator's page before paying.",
    rootedness:
      "Xochimilco's canals and chinampas are not simply a colourful boat backdrop. The borough describes an active agricultural landscape built around productive plots and water routes. This programme shifts attention toward cultivation and the people who continue that work within the wider city.",
    shift:
      "From riding through Xochimilco to understanding that the landscape still grows food.",
    humanReturn:
      "A meal may feel different when you have just seen its distance from soil to table. Take home the questions that follow from that connection, especially who maintains the land and what respectful visitation asks of you.",
    responsibility:
      "Stay with the arranged route and follow the hosts around water, boats, tools and crops. Ask before touching plants or photographing people. Confirm weather arrangements, mobility requirements, food allergies and language before booking. The current page states a minimum group size and restrictive cancellation terms, so read the full conditions before paying.",
    evidence:
      "Kalmekak's programme page establishes the itinerary, public reservation route, days, duration, group threshold and language note. The Xochimilco borough supports the agricultural and canal context. EA has not attended or independently assessed the hosts, food, safety, labour conditions, ecological outcomes or claims of authenticity. The photograph shows a working boat beside a Xochimilco chinampa in 2015, not this operator's tour.",
    duration: "About five hours including the advertised return transport",
    participation: "Guided boat, breakfast and chinampa activities",
    access:
      "Publicly bookable paid programme with a stated minimum of five participants. English interpretation is listed on request. Check the current departure, price, inclusions and cancellation terms directly. EA does not arrange the booking.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.kalmekak.mx/recorridos",
      sources: [
        {
          title: "Kalmekak: agrotourism programme in Xochimilco",
          url: "https://www.kalmekak.mx/recorridos",
          note: "First-party itinerary, schedule, duration, group threshold, transport and reservation terms. Promotional quality and impact claims are not treated as EA findings.",
        },
        {
          title: "Xochimilco borough: tourism and the chinampa landscape",
          url: "https://www.xochimilco.cdmx.gob.mx/turismo-2/",
          note: "Local-government context for the canals, agricultural chinampas, public embarkation points and protected landscape. It does not validate Kalmekak.",
        },
      ],
    },
  },
  {
    id: "doolin-gus-oconnors-session",
    slug: "stay-for-the-session",
    title: "Stay for the session",
    summary:
      "Listen from inside the circle at Gus O'Connor's in Doolin, where traditional music is played without turning the room into a formal stage.",
    field: "gather",
    place: "Doolin",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "county-clare",
    status: "public_guide",
    demo: false,
    ...guideImage("doolin-gus-oconnors-session"),
    kernel:
      "Enter through the pub's ordinary public service and stay for a traditional music session. Gus O'Connor's currently advertises sessions every night from February through November and at weekends throughout the year. It describes an open, unamplified format without individual microphones. Attend first as a listener. A session is shaped by the musicians and the room, not delivered as an identical show on demand.",
    rootedness:
      "County Clare presents Doolin as a village known for traditional music sessions. Ireland's National Inventory describes the session as central to the living practice of traditional music, where listening, playing and audience response meet. One pub does not contain the whole tradition, but it offers a legible public way to encounter it in place.",
    shift:
      "From consuming a performance to noticing how music is carried between players, listeners and a room.",
    humanReturn:
      "You may leave remembering a tune whose name you never learned or the moment a room became quiet enough to hear one person begin. The value is in attention, not in collecting proof that you were there.",
    responsibility:
      "A pub is a workplace and a social room, not a visitor set. Keep conversation low while people play, leave sightlines open and ask before photographing or recording anyone. Do not assume that an open session means every visitor should join. Let the musicians decide the shape and pace. Buying alcohol is not required to listen.",
    evidence:
      "The pub's current page establishes the recurring public sessions and unamplified format. County Clare and Ireland's National Inventory provide place and practice context. EA has not attended, assessed the musicians or verified a particular night's line-up. The photograph is published on the pub's current music page and shows an actual session. It is not an EA visit.",
    duration: "Self-paced during the evening session and pub service",
    participation:
      "Public listening. Any musical participation is at the session's discretion",
    access:
      "Ordinary public hospitality with no EA-arranged access. Check the pub's current music and opening information before making a special journey. Capacity and the character of each session can change.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.gusoconnorsdoolin.com/traditional-irish-music",
      sources: [
        {
          title: "Gus O'Connor's: traditional Irish music sessions",
          url: "https://www.gusoconnorsdoolin.com/traditional-irish-music",
          note: "First-party current session frequency, open format, lack of individual microphones and public venue details. It does not guarantee a particular line-up.",
        },
        {
          title: "Ireland's National Inventory: Irish traditional music",
          url: "https://nationalinventoryich.ccs.gov.ie/irish-traditional-music/",
          note: "State cultural context for the session, oral transmission, musicians and audience. It does not review this pub or a particular performance.",
        },
        {
          title: "County Clare: Doolin",
          url: "https://www.clare.ie/places/?_location=north-clare&_type=all-towns-and-villages&filter=true",
          note: "Official county destination context identifying Doolin with traditional music sessions. It is not programme evidence for Gus O'Connor's.",
        },
      ],
    },
  },
];

export const guideBatch03 = guideBatch03Candidates;
