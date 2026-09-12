import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Public programmes that cleared evidence, access and media review together. */
export const guideBatch08: PublicExperience[] = [
  {
    id: "allgaeu-thalkirchdorf-viehscheid",
    slug: "when-the-herds-come-down",
    title: "When the herds come down",
    summary:
      "Stand back as cattle and herders return from the high pastures for Thalkirchdorf's public Viehscheid, where a working handover becomes a village celebration.",
    field: "celebrate",
    place: "Thalkirchdorf, Allgäu",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "allgaeu",
    status: "public_guide",
    demo: false,
    ...guideImage("allgaeu-thalkirchdorf-viehscheid"),
    kernel:
      "Arrive before the first herd and watch from a public viewing point as cattle and herders move into Thalkirchdorf. The official 2026 listing names one date, Friday 18 September, with the festival site open from 09:00 into the evening. Treat the livestock return as working movement, not a backdrop to step into. The sound of bells may reach you before the procession does.",
    rootedness:
      "Oberstaufen Tourism describes the Viehscheid as the close of roughly 100 days spent with livestock on the mountain pastures. Herders bring the animals into the valley, owners receive them at the sorting ground and families and friends gather afterwards. Visitors can witness that return, but do not own its meaning or pace.",
    shift:
      "From seeing an Alpine festival as costume and spectacle to noticing the seasonal work, animals and reunions that make the gathering necessary.",
    humanReturn:
      "You may remember the bells differently once you have seen the people and livestock moving behind their sound. That is an editorial possibility, not a promise of cultural understanding.",
    responsibility:
      "Use the official event page and local traffic notices on the morning of the event. Arrive early enough that you do not push through a moving crowd. Keep clear of cattle, herders, fenced sorting areas and working access. Follow stewards and temporary road controls. Give people and animals room, and ask before making close photographs of identifiable participants.",
    evidence:
      "The Allgäu event page publishes the single 2026 date, listed hours, festival site, organiser and an estimate of around 750 cattle. Oberstaufen Tourism confirms the date and explains the seasonal return, public viewing points and the need to observe with distance. EA has not attended, checked crowd management or assessed the event. The photograph comes from Oberstaufen Tourism and depicts a 2019 cattle return, not the 2026 event or an EA visit.",
    duration:
      "A date-led public festival. The 2026 listing runs from 09:00 into the evening",
    participation:
      "Public observation of the cattle return, followed by a village festival",
    access:
      "One public date on 18 September 2026. Check official event and traffic notices before setting out. EA does not organise access or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-09-18",
      accessUrl:
        "https://www.allgaeu.de/veranstaltungen/viehscheid-thalkirchdorf",
      sources: [
        {
          title: "Allgäu: Viehscheid Thalkirchdorf 2026",
          url: "https://www.allgaeu.de/veranstaltungen/viehscheid-thalkirchdorf",
          note: "Official regional event listing for the single 18 September 2026 date, published hours, festival site, organiser and approximate herd count.",
        },
        {
          title: "Oberstaufen Tourism: where to watch the Viehscheid",
          url: "https://www.oberstaufen.de/abschied-vom-alpsommer-standorte-viehscheid",
          note: "Official destination context for the seasonal cattle return, the Thalkirchdorf date, public viewing points and the need to give people and animals space.",
        },
      ],
    },
  },
  {
    id: "cambridge-st-clements-bells",
    slug: "set-one-bell-in-motion",
    title: "Set one bell in motion",
    summary:
      "Enter a Cambridge ringing room for a one-hour public introduction, then try the rope that turns tuned church bells into a pattern made by a team.",
    field: "learn",
    place: "Cambridge",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "cambridge",
    status: "public_guide",
    demo: false,
    ...guideImage("cambridge-st-clements-bells"),
    kernel:
      "Book the weekday Ringing Experience at St Clement's through its public online route. The centre lists the visitor session from 14:00 to 15:00 every weekday afternoon. It introduces how English church bells are rung, explains change ringing and lets visitors try under guidance. One hour is an encounter with the movement and shared timing, not a claim to independent bell handling.",
    rootedness:
      "The Central Council of Church Bell Ringers traces change ringing to the full-wheel systems that gave ringers control over when each bell sounds. A band begins with rounds, then changes the order through called or learned sequences. The sound belongs to coordination across the room rather than one dramatic pull.",
    shift:
      "From hearing bells as background sound to understanding them as a physical pattern held by several people at once.",
    humanReturn:
      "You may walk back into Cambridge hearing timing, restraint and cooperation inside the next peal. That is an editorial possibility, not a promise that one session teaches the practice.",
    responsibility:
      "Use the centre's public booking page and confirm the current session before travel. Follow the instructor's position, grip and release directions exactly. Do not pull, step beneath or handle a rope without instruction. Ask the centre about stair access or other mobility needs before booking. Keep photography secondary and ask before including other visitors or ringers.",
    evidence:
      "St Clement's current site publishes a one-hour weekday visitor experience and an online booking link. The Central Council explains the mechanics and team structure of change ringing, but does not assess this centre or session. EA has not joined the programme or inspected the ringing room. The photograph shows experienced ringers at St Kentigern's Church in Crosthwaite, not St Clement's, a visitor session or an EA visit.",
    duration:
      "One hour. The current visitor session is listed from 14:00 to 15:00",
    participation:
      "Instructor-led public introduction with an opportunity to try bell handling",
    access:
      "Public weekday experience through the centre's online booking route, subject to the current calendar and terms. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://bells-of-st-clements.org.uk/",
      sources: [
        {
          title: "St Clement's Ringing Centre: public ringing experience",
          url: "https://bells-of-st-clements.org.uk/",
          note: "Current first-party visitor offer with location, weekday 14:00 to 15:00 timing, experience description and a public online booking link.",
        },
        {
          title: "Central Council of Church Bell Ringers: what is bell ringing",
          url: "https://cccbr.org.uk/bellringing/what-is-bell-ringing/",
          note: "Primary field-body explanation of full-circle change ringing, rounds, rows, methods and the practice as a coordinated team activity. It does not review the visitor programme.",
        },
      ],
    },
  },
  {
    id: "porto-vidra-tile-painting",
    slug: "paint-the-pattern-you-noticed",
    title: "Paint the pattern you noticed",
    summary:
      "Look again at Porto's tiled façades, then paint one ceramic tile in a guided workshop that begins with the city's repeated colours and forms.",
    field: "make",
    place: "Porto",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    status: "public_guide",
    demo: false,
    ...guideImage("porto-vidra-tile-painting"),
    kernel:
      "Reserve Oficina Vidra's Tile Painting Workshop through its published schedule. The two-hour session introduces some history and symbolism before each participant paints a tile from a choice of traditional city patterns. No drawing experience is required. The workshop page says fired tiles are collected the following day, so place the session early enough in your Porto stay to complete that step.",
    rootedness:
      "Visit Porto points to hand-painted azulejo exteriors at Carmo Church and Capela das Almas as part of the city's visible heritage. The workshop offers one bounded way to slow that looking down. Painting a supplied pattern can reveal decisions of line and repetition without turning a two-hour visitor session into authorship of Porto's ceramic tradition.",
    shift:
      "From collecting tiled façades as photographs to recognising the small repeated decisions that hold a larger surface together.",
    humanReturn:
      "You may notice the next wall more carefully because your hand has followed one of its visual rules. That is an editorial possibility, not a claim of craft mastery.",
    responsibility:
      "Read the current booking, cancellation and collection terms before paying. The workshop page states that tiles are normally collected the next day. Follow the studio's handling and firing instructions, disclose relevant access needs and ask before photographing staff or other participants. Credit patterns to the tradition and teaching context rather than presenting the session as an original invention.",
    evidence:
      "Oficina Vidra's current page publishes online scheduling, a two-hour duration, price, Porto address, guided format and next-day collection condition. Visit Porto documents hand-painted azulejo façades as a prominent part of the city's heritage, but does not assess this workshop. EA has not attended, inspected the studio or assessed the teaching. The photograph is published by Oficina Vidra and shows tile painting in its workshop context, not an EA visit or proof of a future session.",
    duration: "Two hours, plus collection of the fired tile the following day",
    participation:
      "Guided public workshop with one tile painted by each participant",
    access:
      "Public paid workshop through the studio's online schedule, subject to live availability and current collection terms. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://www.vidra.pt/en/workshops/azulejos",
      sources: [
        {
          title: "Oficina Vidra: Tile Painting Workshop",
          url: "https://www.vidra.pt/en/workshops/azulejos",
          note: "Current first-party schedule and booking route with duration, price, guided format, address, cancellation terms and next-day tile collection condition.",
        },
        {
          title: "Visit Porto: heritage attractions",
          url: "https://visitporto.travel/en-GB/attraction/heritage",
          note: "Official city destination context for hand-painted azulejo façades at Carmo Church and Capela das Almas. It does not validate or review the workshop.",
        },
      ],
    },
  },
  {
    id: "koyasan-instant-temple-stay",
    slug: "spend-the-night-in-a-temple-town",
    title: "Spend the night in a temple town",
    summary:
      "Choose one instant-bookable temple lodging through Koyasan's official association and let an overnight stay replace a quick visit with a slower arrival.",
    field: "stay",
    place: "Koyasan, Wakayama",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "koyasan",
    status: "public_guide",
    demo: false,
    ...guideImage("koyasan-instant-temple-stay"),
    kernel:
      "Begin with the Koyasan Shukubo Association's instant-booking page, not its separate request service. It currently names six temple lodgings with live availability and prices. Compare the exact room, meal, check-in, cancellation and house conditions for your dates before confirming. Each lodging and plan differs. Do not assume that a ceremony, meal or activity is included unless the chosen plan says so.",
    rootedness:
      "The Association describes Koyasan as an active monastic centre and lists temples that receive overnight guests. Staying through a public lodging plan places hospitality inside that continuing religious setting. It does not turn private practice into entertainment or give a guest automatic access to every ritual space.",
    shift:
      "From fitting Koyasan into a day trip to allowing the place's evening and morning rhythm to shape what you notice.",
    humanReturn:
      "A quieter timetable may stay with you longer than a checklist of monuments. That is an editorial possibility, not a promise of spiritual insight or personal transformation.",
    responsibility:
      "Use only the Association's instant-booking listings for this guide. Read the selected temple's current plan, age rules, meal details, shared-facility notes, check-in time and cancellation fee before paying. Follow house and religious-space rules without assuming that guest access extends beyond the booked plan. Keep voices and photography restrained, and never photograph worship or residents without explicit permission.",
    evidence:
      "The Koyasan Shukubo Association's current booking page identifies six temple lodgings available for instant online confirmation and separates them from request-only stays. Its official English site lists the wider network and describes Koyasan as an active monastic centre. EA has not stayed at, assessed or compared the listed temples. The photograph shows a guest room at Shojoshin-in in 2009. It is visual context only and does not depict one of the six current instant-booking plans or an EA visit.",
    duration: "One night or more, depending on the chosen public lodging plan",
    participation:
      "Independent overnight guest within the published conditions of one temple lodging",
    access:
      "Public instant-booking listings with live plan availability. This guide excludes the separate request service. EA does not book or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl:
        "https://koyasan-shukubo.net/en/static/shukubo_instantly_reservation",
      sources: [
        {
          title: "Koyasan Shukubo Association: instantly bookable temple stays",
          url: "https://koyasan-shukubo.net/en/static/shukubo_instantly_reservation",
          note: "Current official list of six temple lodgings with instant booking and live price and availability checks, clearly separated from the request service.",
        },
        {
          title: "Koyasan Shukubo Association: Koyasan and its lodging temples",
          url: "https://eng-shukubo.net/shukubo/",
          note: "Official association list confirming the network of temples that offer overnight lodging to guests. It does not establish the current contents of an individual plan.",
        },
        {
          title: "Koyasan Shukubo Association: about Koyasan",
          url: "https://eng-shukubo.net/about/index.html",
          note: "Official place context describing Koyasan as an active monastic centre and Shingon headquarters. It is institutional context, not an independent visitor review.",
        },
      ],
    },
  },
];
