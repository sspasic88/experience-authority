import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-13",
  reviewBy: "2026-12-12",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch23: PublicExperience[] = [
  {
    id: "cyprus-halloumi-heaven",
    slug: "make-halloumi-before-it-reaches-the-plate",
    title: "Make halloumi before it reaches the plate",
    summary:
      "Follow milk through curd, whey, folding and a village table on a full-day food route into the Troodos foothills.",
    field: "taste",
    place: "Troodos foothills",
    country: "Cyprus",
    countrySlug: "cyprus",
    regionSlug: "troodos-foothills",
    status: "public_guide",
    demo: false,
    ...guideImage("cyprus-halloumi-heaven"),
    kernel:
      "Choose the current Halloumi Heaven route only if a full day suits the journey. The central encounter follows halloumi and anari from milk and curd to shaping, folding and the table. Let the cheese-making hold the day together, then use the variable food stops to ask what belongs to this route, this season and this producer. The experience is more useful than a hunt for a single secret recipe. It reveals how texture, heat, whey, mint and timing meet before a familiar cheese reaches a plate.",
    rootedness:
      "Halloumi is one of Cyprus's most recognisable foods, but recognition can flatten the work behind it. Cyprus Taste Tours currently builds this public route around cheese-making in the Troodos foothills and adds a changing sequence of village food stops. That makes the experience a clear visitor route into production, not a claim that one host represents every Cypriot household or cheesemaker. EA has not verified the operator's cultural, sustainability or economic-impact claims and does not treat a commercial day tour as local validation.",
    shift:
      "From recognising halloumi by its finished texture to seeing the sequence and judgement required to make it.",
    humanReturn:
      "At the next cheese counter, ask how the curd was handled, what remained in the whey and why the finished texture suits the way it is served.",
    responsibility:
      "Confirm the exact route, pickup area, village, walking conditions and food stops before paying because the itinerary changes. Disclose dairy allergies, dietary needs and questions about animal rennet or cross-contact in advance. Some possible route stops may involve animal products or a farm setting. Ask the operator before booking if either matters to you. Follow all instructions around hot milk, whey, work surfaces and farm areas. Ask before photographing hosts, participants or production spaces.",
    evidence:
      "The operator's current Halloumi Heaven page describes a seven-to-eight-hour small-group food tour with hotel pickup in listed coastal areas, hands-on halloumi and anari making, brunch and three additional food stops that vary by route. Its live booking page provides the public reservation route and date-specific availability. These are first-party descriptions. EA has not taken the tour, tasted the food, inspected the kitchen or verified a particular village, producer, menu, vehicle, guide or date.",
    duration: "About 7 to 8 hours. Confirm the live itinerary",
    participation:
      "Hands-on cheese making, tasting and a hosted full-day food route",
    access:
      "Book only through the operator's current Halloumi Heaven schedule. Public pickup is currently described from Ayia Napa and Protaras, Larnaca, Limassol and Paphos, with a separate private-tour request route. Confirm the exact pickup, start time, inclusions, group size, dietary arrangements, cancellation terms and route before paying. The cheese session is part of a full-day tour, not a separately promised drop-in workshop. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Cyprus Taste Tours: Halloumi Heaven",
        url: "https://cyprustastetours.com/halloumi-heaven/",
        note: "First-party current tour length, pickup areas, small-group format, hands-on halloumi and anari making, brunch, variable food stops and route caveats.",
      },
      {
        title: "Cyprus Taste Tours: live Halloumi Heaven booking",
        url: "https://cyprustastetours.com/halloumi-heaven-book/",
        note: "The operator's public route to date-specific availability, booking terms and current price. EA does not reproduce a price that can change.",
      },
    ]),
  },
  {
    id: "vorumaa-mooska-farm-walk",
    slug: "read-a-smoke-sauna-before-the-heat",
    title: "Read a smoke sauna before the heat",
    summary:
      "Walk through three working smoke saunas at Mooska and learn what construction, fire, time and family use leave in the room.",
    field: "learn",
    place: "Võrumaa",
    country: "Estonia",
    countrySlug: "estonia",
    regionSlug: "vorumaa",
    status: "public_guide",
    demo: false,
    ...guideImage("vorumaa-mooska-farm-walk"),
    kernel:
      "Book the farm walk, not a bathing session, if your aim is to understand the smoke sauna before entering its ritual space. Mooska's current route introduces three saunas, two used for bathing and one used for smoking meat. Look at the roof, hearth, darkened timber, ventilation and the work required before anyone sits inside. Listen for the difference between building a sauna, heating it and using it. A tasting of traditionally smoked meat may close the visit, but the strongest connection is the one between fire, material and repeated family practice.",
    rootedness:
      "UNESCO inscribed the smoke sauna tradition in Võrumaa in 2014 and describes it as a body of practices that includes heating, bathing, sauna construction and meat smoking. Mooska is a family farm offering a bounded public introduction to that heritage. The visit can make parts of the tradition legible without turning a living family practice into a generic wellness product. EA does not claim access to a private bathing ritual, confirm that every sauna will be entered or treat one farm as the sole authority for Võrumaa.",
    shift:
      "From seeing a dark timber hut to recognising the preparation, knowledge and repeated care that make it a sauna.",
    humanReturn:
      "Before the next sauna or bathhouse, ask what had to happen before the room was ready and which rules protect the people who share it.",
    responsibility:
      "Prebook and confirm that you are choosing the farm walk. Do not assume it includes bathing, undressing, a private ritual or unrestricted entry to every building. Stay with the host, follow fire and farm boundaries and ask before touching tools, timber, stove surfaces or sauna objects. The listed tasting is traditionally smoked meat, so confirm the meat, ingredients, allergens and any dietary alternative in advance. Ask before photographing hosts, guests or interiors used by the family.",
    evidence:
      "Mooska's current farm page lists a prebooked walk of about one and a half hours that introduces three smoke saunas, their history, construction, heating, family traditions and meat smoking, followed by a smoked-meat tasting. Visit Estonia currently lists the same public visitor route. UNESCO supplies wider heritage context but does not assess this commercial visit. EA has not attended, entered the saunas, tasted the food or assessed safety, interpretation or access for a particular date.",
    duration: "About 1.5 hours. Prebooking required",
    participation:
      "Host-led farm walk and interpretation, with a listed meat tasting",
    access:
      "Request and confirm the farm walk directly with Mooska before travelling. Check the date, language, group format, exact meeting point, price, dietary details, weather arrangements, terrain and accessibility. Do not confuse this public introduction with the separately described smoke-sauna session. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Mooska Farm: smoke sauna farm walk",
        url: "https://mooska.eu/mooska-farm/",
        note: "First-party current description of the three-sauna farm walk, approximate duration, prebooking, interpretation themes and smoked-meat tasting.",
      },
      {
        title: "Visit Estonia: Mooska smoke sauna farm tour",
        url: "https://visitestonia.com/en/tour-in-mooska-smokesauna-farm-introducing-the%C2%A0heritage-of-the-smoke-sauna-tradition-in-vorumaa%C2%A0with-the%C2%A0degustation-of%C2%A0traditionally%C2%A0smoked%C2%A0meat",
        note: "Current destination listing for the public route, approximate duration, advance booking, visitor format and direct provider contact.",
      },
      {
        title: "UNESCO: smoke sauna tradition in Võrumaa",
        url: "https://ich.unesco.org/en/RL/smoke-sauna-tradition-in-voromaa-00951",
        note: "Heritage context for heating, bathing, construction, meat smoking and transmission in Võrumaa. It is not access or quality evidence for a particular farm visit.",
      },
    ]),
  },
  {
    id: "suchitoto-arte-anil-workshop",
    slug: "fold-a-pattern-into-the-blue",
    title: "Fold a pattern into the blue",
    summary:
      "Bind, fold and dye one piece at Arte Añil in Suchitoto, then open the cloth to see what your first decisions kept from the colour.",
    field: "make",
    place: "Suchitoto",
    country: "El Salvador",
    countrySlug: "el-salvador",
    regionSlug: "suchitoto",
    status: "public_guide",
    demo: false,
    ...guideImage("suchitoto-arte-anil-workshop"),
    kernel:
      "Reserve the one-hour public workshop and choose the scarf or T-shirt offered by the studio. Begin with the white cloth and decide where to fold, bind or resist the dye. The useful moment comes when the piece opens and the pattern reveals both intention and surprise. Ask what preparation happened before the dye bath and how the material is handled after it. One first object is enough. The point is to make the sequence visible, not to copy the confidence of a practiced dyer in an hour.",
    rootedness:
      "Indigo has a long and complicated history in El Salvador that no short visitor workshop can summarise. Arte Añil offers a specific public learning route in Suchitoto, led within the studio's own practice. That makes the workshop useful as a first encounter with material, resist and colour, not proof of mastery or permission to speak for a national tradition. EA does not repeat promotional claims about authenticity, community impact or sustainability without independent evidence.",
    shift:
      "From seeing indigo as a finished blue surface to understanding that pattern begins with the parts the dye cannot reach.",
    humanReturn:
      "When you next see a resist-dyed textile, look for the fold, tie or protected edge that had to exist before the colour appeared.",
    responsibility:
      "Reserve in advance and confirm the current session time, language and item choice. The studio says materials, gloves and an apron are provided and asks visitors not to bring personal garments for dyeing. Follow that boundary. Wear clothing and shoes that can tolerate an accidental mark. Follow instructions around the dye bath, wash hands when directed and tell the host about skin sensitivities or access needs before booking. Ask before photographing the instructor or other participants.",
    evidence:
      "Arte Añil's current booking page describes a one-hour, hands-on workshop in English or Spanish with materials, gloves and apron included, and a choice of a studio-provided scarf or T-shirt. It lists advance reservation and current daily session times. El Salvador's tourism site independently lists the studio as a visitor experience in Suchitoto. EA has not attended, handled the dyes, assessed instruction, verified a particular session or independently established the wider historical claims on the provider page.",
    duration: "About 1 hour. Confirm the current session time",
    participation: "Hands-on folding, binding and indigo dyeing",
    access:
      "Book in advance through Arte Añil's public workshop page. Confirm the date, 10 am or 3 pm session, language, current price, included textile, accessibility and cancellation terms before paying. Use only the scarf or T-shirt offered by the studio unless the host explicitly changes that policy. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Arte Añil: book an indigo workshop",
        url: "https://xn--arteail-8za.com/book-an-indigo-workshop",
        note: "First-party current duration, session times, languages, materials, included textile choice, advance-reservation rule and public booking route.",
      },
      {
        title: "El Salvador Travel: Arte Añil",
        url: "https://elsalvador.travel/experience/arte-anil/",
        note: "National tourism listing that places the workshop in Suchitoto and describes the visitor activity. It is not independent quality or impact assessment.",
      },
    ]),
  },
];
