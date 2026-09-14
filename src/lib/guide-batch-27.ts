import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-14",
  reviewBy: "2026-12-13",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch27: PublicExperience[] = [
  {
    id: "hong-kong-glocal-mahjong",
    slug: "learn-hong-kong-one-hand-at-a-time",
    title: "Learn Hong Kong one hand at a time",
    summary:
      "Take a seat at a four-sided table in Central and let tiles, etiquette and one practice game turn a familiar city into a shared system of decisions.",
    field: "play",
    place: "Central",
    country: "Hong Kong",
    countrySlug: "hong-kong",
    regionSlug: "central",
    status: "public_guide",
    demo: false,
    ...guideImage("hong-kong-glocal-mahjong"),
    kernel:
      "Book Glocal Mahjong's public Cantonese Mahjong basics class and arrive ready to learn the table before trying to win it. Begin with the tile families and the shape of a complete hand. Let the instructor set the local scoring, order of play and etiquette, then use the practice round to notice how four private decisions continually change one shared problem. The electronic table handles the shuffle. Your attention belongs on what another player's discard makes newly possible.",
    rootedness:
      "Mahjong is played in many forms across regions, families and social settings. This class teaches a stated Cantonese ruleset in Hong Kong and presents the game as strategy, skill, luck and social play. It is a useful public introduction, not entry to a neighbourhood club, family table or licensed mahjong school. One instructor's scoring explanation should not be treated as the only Hong Kong variation or as authority over how every group plays.",
    shift:
      "From seeing mahjong tiles as a graphic symbol of Hong Kong to reading the table as a moving conversation in which attention, memory and etiquette matter as much as the hand in front of you.",
    humanReturn:
      "A game you once passed as background sound may start to look like a compact social world, built and rebuilt by four people every few seconds.",
    responsibility:
      "Use the class as a non-gambling introduction. Confirm the current price, language, participant count, age rule, time and extreme-weather policy before booking. Do not photograph or record another participant without asking. Let the instructor explain the rules used at this table and avoid correcting them with a version learned elsewhere. If children attend, an adult should confirm suitability and remain responsible for them. The class does not confer access to commercial mahjong premises or private games elsewhere in the city.",
    evidence:
      "Glocal Mahjong currently publishes a two-hour Cantonese Mahjong basics class at its PMQ location in Central for two to four participants, with English, Cantonese or Mandarin delivery, daily advance-booking windows and a route for solo visitors to join scheduled classes. The listed curriculum covers tile recognition, winning a game, etiquette, scoring and guided practice on an electronic table. The provider's own language about Hong Kong culture is promotional context, not independent evidence that one commercial class represents every local tradition. EA has not attended the class, assessed the teaching or verified a particular session.",
    duration: "Two hours, with advance booking and early arrival requested",
    participation:
      "Instructor-led beginner lesson followed by guided practice at an electronic mahjong table",
    access:
      "Book the current Mahjong 101 class or one advertised scheduled-class place directly with Glocal Mahjong. Confirm the participant option before payment. The published venue is S405, PMQ, Central. No EA booking, ranking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Glocal Mahjong: Cantonese Mahjong basics class",
        url: "https://www.glocalmahjong.com/products/mahjong-101-class-for-beginners",
        note: "First-party public class page with the current curriculum, two-hour duration, venue, participant options, languages, age rule, cancellation terms and advance-booking route.",
      },
      {
        title: "Glocal Mahjong: upcoming Mahjong 101 classes",
        url: "https://www.glocalmahjong.com/products/mahjong-101-class-for-beginners-public-class",
        note: "Provider route for solo visitors and small parties to check currently scheduled shared-class places rather than purchasing a private format.",
      },
    ]),
  },
  {
    id: "skopje-mata-filigree",
    slug: "draw-with-silver-in-skopjes-old-bazaar",
    title: "Draw with silver in Skopje's Old Bazaar",
    summary:
      "Give two days to the wire, frame and patient fitting behind Balkan filigree, with a small beginner group and a piece of your own taking shape.",
    field: "make",
    place: "Old Skopje Bazaar",
    country: "North Macedonia",
    countrySlug: "north-macedonia",
    regionSlug: "skopje",
    status: "public_guide",
    demo: false,
    ...guideImage("skopje-mata-filigree"),
    kernel:
      "Arrange MATA's Silver Weekend and treat the first hours as an exercise in line rather than jewellery shopping. Learn how a frame contains the design, how fine wire is bent and fitted, and which steps the teacher keeps under direct control. Build one small project at the pace the material allows. The useful achievement is not a flawless ornament. It is recognising how many decisions sit inside a surface that can look weightless from the other side of a shop window.",
    rootedness:
      "The workshop is placed at the ARTiZAN Centre in the Old Skopje Bazaar or in an artisan studio, depending on the group and teacher. MATA describes the programme as traditional filigree training for beginners with small groups and individual attention. That public format connects a visitor to technique without claiming that one weekend transmits a whole Balkan tradition or makes the participant an artisan. The exact teacher, studio and design remain part of the confirmed session.",
    shift:
      "From admiring silver filigree as finished decoration to seeing it as disciplined drawing in metal, where structure, repetition, heat and a steady hand have to agree.",
    humanReturn:
      "The next intricate object may prompt you to look for the supporting frame and sequence of labour before calling the result delicate.",
    responsibility:
      "Arrange the workshop well in advance because timing depends on a formed group and teacher availability. Confirm the current price, currency, exact venue, language, project scope, cancellation terms and whether any silver or finished work carries an additional cost. Follow every instruction around wire, soldering, heat, sharp tools and ventilation. Wear closed shoes, tie back hair if requested and disclose any relevant access need. Photograph the teacher, studio and work only with permission. Do not copy a protected design or present a beginner piece as traditional artisan work.",
    evidence:
      "MATA currently lists Silver Weekend as a beginner filigree workshop over two days at four hours per day, for groups of four to six, with materials included and a small-project outcome. The same page lists an eight-day basic course that goes further into frame structure, wire setting, soldering and finishing. These details support a substantial public introduction, but timing depends on a group and available teacher. The website does not name the instructor or guarantee the ARTiZAN Centre for every date. EA has not taken the workshop, assessed its safety or verified a formed group.",
    duration:
      "Two days, four hours per day, when a group and teacher are available",
    participation:
      "Small-group beginner filigree workshop with tools, wire and project steps directed by the teacher",
    access:
      "Use the booking contact published inside MATA's Silver Weekend listing and obtain written confirmation of the date, teacher, venue, language, price and inclusions before planning around it. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "MATA: filigree workshops",
        url: "https://matacraft.org.mk/en/workshops/",
        note: "First-party workshop listing for Silver Weekend and the longer basic filigree course, including level, group size, duration, venue options, materials, booking contact and cancellation conditions.",
      },
      {
        title: "Wikimedia Commons: Macedonian filigree photograph",
        url: "https://commons.wikimedia.org/wiki/File:Filigranski_nakit_01.JPG",
        note: "Documented CC BY-SA photograph of Macedonian filigree used to show the technique's visual intricacy. It does not depict MATA, a teacher or the current workshop.",
      },
    ]),
  },
  {
    id: "bulukumba-pinisi-building",
    slug: "read-a-ship-before-the-sails-arrive",
    title: "Read a ship before the sails arrive",
    summary:
      "Stand at a public edge of Bulukumba's working coast and read the ribs, planks and inherited decisions inside a vessel before the finished silhouette hides them.",
    field: "work",
    place: "Bonto Bahari, Bulukumba",
    country: "Indonesia",
    countrySlug: "indonesia",
    regionSlug: "bulukumba",
    status: "public_guide",
    demo: false,
    ...guideImage("bulukumba-pinisi-building"),
    kernel:
      "Use Bulukumba's official visitor listing to locate the wider boatbuilding coast across Ara, Tana Lemo, Darubiah and Lembanna. Begin only from a clearly public approach. Look for one unfinished hull and read it from structure outward: the curve of the planks, the later ribs, temporary supports and the changing relationship between timber and sea. If a worker or local guide invites a closer explanation, follow their boundary. If not, let careful observation be enough. Pinisi names the rig and sail system, so resist using it as a loose label for every wooden hull you see.",
    rootedness:
      "UNESCO locates the main boatbuilding centres in Tana Beru, Bira and Batu Licin and describes the knowledge as part of community identity, livelihood and intergenerational transmission. Bulukumba's tourism office presents the Bonto Bahari coast as a visitor destination where ships are actively assembled. A public listing does not make every yard, person, technique or ritual available. The work belongs to living businesses and knowledge holders, not to a visitor's camera or an abstract heritage label.",
    shift:
      "From recognising a romantic sailing silhouette to seeing the unfinished vessel as a working archive of geometry, material judgment, cooperation and knowledge carried between generations.",
    humanReturn:
      "The next boat may invite you to ask how its structure was decided, who still knows how to build it and which parts of that knowledge were never meant for a passing visitor.",
    responsibility:
      "Treat every yard as an active workplace and potentially private property. Stay on the public edge unless a responsible person explicitly invites you farther. Never climb a hull, cross supports, touch tools or timber, interrupt work or position yourself beneath suspended material. Ask before photographing any person, close technique or ritual. Do not record spoken formulas, restricted knowledge or ceremonial activity. Heat, uneven ground, sharp material, machinery and tides may affect access. The official 24-hour field on the tourism page is not a promise that work, staff or safe visitor access exist at any hour. Visit in daylight and confirm locally through the public tourism information route where possible.",
    evidence:
      "Bulukumba's tourism department currently lists the boatbuilding area across four Bonto Bahari villages as a visitor site where ships can be observed under construction. It provides no booking method, package or reliable staffed hours, so this guide supports careful public observation only. UNESCO documents the centres, transmission and community significance of the boatbuilding knowledge. Indonesia's Ministry of Tourism clarifies that pinisi refers to the rig and sail arrangement and lists the 2026 Pinisi Festival for 15 to 17 October as a separate time-limited public route. None of these sources establishes unrestricted yard entry, guaranteed worker interaction or access to ritual knowledge. EA has not visited the coast or verified conditions on a particular day.",
    duration:
      "Self-paced public observation in daylight. Working activity and safe proximity are not guaranteed",
    participation:
      "Careful observation from a public approach, with any closer interaction controlled by the people working there",
    access:
      "Start with the current Bulukumba tourism-department visitor listing and its mapped Bonto Bahari area. Do not treat the displayed 24-hour field as an invitation to arrive at night or enter a yard. The national tourism page separately lists the free Pinisi Festival for 15 to 17 October 2026. Recheck both sources before travel. No EA booking, access arrangement or commission.",
    guideReview: review("public_observation", [
      {
        title: "Bulukumba Tourism Department: Pinisi boatbuilding site",
        url: "https://disparpora.bulukumbakab.go.id/en/portofolio/situs-pembuatan-perahu-pinisi/",
        note: "Current local-government visitor listing locating the working boatbuilding coast across Ara, Tana Lemo, Darubiah and Lembanna. No booking method, package or staffed programme is published.",
      },
      {
        title: "UNESCO: Pinisi, art of boatbuilding in South Sulawesi",
        url: "https://ich.unesco.org/en/RL/pinisi-art-of-boatbuilding-in-south-sulawesi-01197",
        note: "Primary heritage record for the main centres, community significance, knowledge transmission and safeguarding context.",
      },
      {
        title: "Indonesia Travel: Pinisi maritime heritage",
        url: "https://www.indonesia.travel/gb/en/travel-ideas/marine/pinisi",
        note: "Current national-tourism explanation distinguishing the pinisi rig and sail system from a generic boat type and locating the tradition in Konjo-speaking Bulukumba communities.",
      },
      {
        title: "Indonesia Travel: Pinisi Festival 2026",
        url: "https://www.indonesia.travel/id/en/events/event-detail/festival-pinisi-2026",
        note: "Current official listing for the separate free public festival in Bulukumba from 15 to 17 October 2026. Its activities and dates must be rechecked before use.",
      },
    ]),
  },
];
