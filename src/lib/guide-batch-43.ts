import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const checkedOn = "2026-09-27";
const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-20",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn,
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

/** Original desk guides. Each appears once in the 27 September daily allocation. */
export const guideBatch43: PublicExperience[] = [
  {
    id: "parma-san-pier-damiani",
    slug: "taste-the-age-of-a-parmigiano-wheel",
    title: "Taste the age of a Parmigiano wheel",
    summary:
      "See a working Parma dairy before comparing what time does to its cheese.",
    field: "taste",
    place: "San Prospero, near Parma",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "parma",
    ...common,
    ...guideImage("parma-san-pier-damiani"),
    kernel:
      "Book the morning Full Experience at San Pier Damiani. First follow the explanation of milk, curd and wheels through a working dairy. Then taste Parmigiano Reggiano at different ages, looking for changes in texture as well as flavour. The comparison means more after you have seen the scale and patience of production.",
    rootedness:
      "Parmigiano Reggiano is tied to a defined production area and method. The consortium lists San Pier Damiani as an active dairy with visits, production and a maturation warehouse. This is one dairy's invitation into the process, not a claim to represent every producer in Emilia-Romagna.",
    shift:
      "From treating a familiar grated ingredient as one flavour to noticing time in a wheel.",
    humanReturn:
      "The next piece of cheese may prompt a better question about its age and origin.",
    responsibility:
      "This is an observation and tasting visit, not hands-on cheesemaking. Milk allergies and dietary needs matter. The dairy asks wheelchair users to contact it before booking. Follow hygiene and photography instructions around work areas. Do not assume the optional meal or other visits are included, and confirm the language and exact start date before paying.",
    evidence:
      "The dairy publishes a two-hour morning visit with English and Italian options and an age-comparison tasting. The Parmigiano Reggiano consortium independently confirms the dairy's identity and public visits. Neither source is an EA quality review. EA has not attended or tasted the programme. The licensed contextual photograph depicts Parmigiano wheels in another cellar, not this dairy.",
    duration: "Around two hours from the confirmed 9am start",
    participation:
      "Guided observation and tasting, with no visitor cheesemaking",
    access:
      "Choose an available date directly with San Pier Damiani at Strada Gazzano 35/A, San Prospero. Check its non-refundable terms and transport from Parma. No EA booking or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "San Pier Damiani: Full Experience visit",
        url: "https://www.sanpierdamiani.com/en/product/visit/",
        note: "Direct programme, duration, languages, booking, tasting and access caveats.",
      },
      {
        title: "Parmigiano Reggiano: San Pier Damiani dairy",
        url: "https://www.parmigianoreggiano.com/dairies/latteria-sociale-san-pier-damiani",
        note: "Consortium listing confirming location, active production and public visits.",
      },
    ]),
  },
  {
    id: "bogota-catacion-plus",
    slug: "find-what-the-brewing-method-changes",
    title: "Find what the brewing method changes",
    summary:
      "Compare extraction at a Bogotá coffee session rather than relying on origin alone to explain a cup.",
    field: "taste",
    place: "Bogotá",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "bogota",
    ...common,
    ...guideImage("bogota-catacion-plus"),
    kernel:
      "Join Catación Pública's Catación Plus session and ask what changes between preparation methods. Watch water meet ground coffee, then compare the cups without rushing to call one the best. Bring the question back to the coffee you order later in the city.",
    rootedness:
      "Colombian coffee is often reduced to a story about where beans grow. This Bogotá session gives the visitor a more immediate variable: extraction. It is a business-led lesson, useful for noticing the method but not an independent ranking of Colombian producers.",
    shift:
      "From looking only for origin notes to recognising the work between bean and cup.",
    humanReturn:
      "A coffee menu can become a small invitation to ask how a cup was made.",
    responsibility:
      "Purchase does not automatically secure a session time. Confirm branch, date, teaching language, caffeine tolerance, allergens and any accessibility need before payment. This is neither farm access nor professional cupping certification. Do not claim that every displayed method or bean appears in every session.",
    evidence:
      "The operator advertises a one-hour extraction-focused format and requires scheduling after purchase. Its site identifies its Bogotá presence. These are operator claims, not independent assessment of instruction or coffee quality. EA has not attended or tasted the session.",
    duration: "One hour once a date has been confirmed",
    participation:
      "Guided coffee comparison. Specific brews depend on the confirmed session",
    access:
      "Select Bogotá on the official product page, then arrange the appointment with Catación Pública as instructed. Confirm the current branch and refund rules before purchase. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Catación Pública: Experiencia Catación Plus",
          url: "https://catacionpublica.co/products/experiencia-catacion-plus",
          note: "Programme, one-hour format, price and post-purchase scheduling instructions.",
        },
        {
          title: "Catación Pública",
          url: "https://catacionpublica.co/",
          note: "Current operator and locations context, separate from the product description.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "sydney-bush-tucker",
    slug: "taste-native-plants-with-a-first-nations-guide",
    title: "Taste native plants with a First Nations guide",
    summary:
      "Walk through Sydney's harbour garden with a guide who can introduce living food knowledge in its own context.",
    field: "taste",
    place: "Sydney",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    ...common,
    ...guideImage("sydney-bush-tucker"),
    kernel:
      "Reserve the tour-only Aboriginal Bush Tucker Tour at the Royal Botanic Garden. In Cadi Jam Ora, follow the guide's introduction to native plants and accept samples only as offered. Notice what a harbour landscape can reveal when food knowledge is explained by someone entitled to share it.",
    rootedness:
      "The Garden's First Nations programme puts plants, place and continuing knowledge together. It is a guided educational encounter, not permission to collect food or a substitute for relationships with Aboriginal communities beyond the tour.",
    shift:
      "From seeing a botanical garden as scenery to listening for food knowledge held in a place.",
    humanReturn:
      "The next native-ingredient menu may invite more careful questions about provenance and who is telling the story.",
    responsibility:
      "Follow the First Nations guide's lead on what may be repeated or photographed. Do not forage, touch or taste independently. Ask the organiser about ingredients, allergies, mobility, weather, children and the meeting point. The tour-only ticket is not the separate dining option and does not promise a particular guide or every sample.",
    evidence:
      "The Botanic Gardens describe the one-hour guided walk and samples. Its linked booking calendar lists future dates and distinguishes tour-only admission from an additional dining experience. Both establish advertised access, not an EA visit or cultural validation. EA has not attended or tasted the programme.",
    duration: "One hour on a confirmed tour date",
    participation:
      "Guided walk and offered samples. No independent foraging or included lunch",
    access:
      "Use the Garden's official programme page to choose the tour-only ticket and follow its meeting instructions. Check the live calendar before travelling. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Royal Botanic Garden Sydney: Aboriginal Bush Tucker Tour",
          url: "https://www.botanicgardens.org.au/whats-on/aboriginal-bush-tucker-tour",
          note: "Official tour scope, First Nations guide, garden setting and samples.",
        },
        {
          title: "Humanitix: Aboriginal Bush Tucker Tour and Experiences",
          url: "https://events.humanitix.com/aboriginal-bush-tucker-tour-and-experiences",
          note: "Linked public booking calendar and different ticket formats. Availability changes.",
        },
      ],
      "2026-10-15",
    ),
  },
  {
    id: "prague-pragl-hot-shop",
    slug: "give-molten-glass-your-first-breath",
    title: "Give molten glass your first breath",
    summary:
      "Try a short, supervised glassblowing session near Prague's Old Town Square.",
    field: "make",
    place: "Prague",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "prague",
    ...common,
    ...guideImage("prague-pragl-hot-shop"),
    kernel:
      "Book PRAGL's individual hot-shop session. With the glassmaker controlling the hot material, take your turn at the blowpipe and feel how a breath changes the form. Choose a small object you can collect after it cools. The pleasure is in the brief moment of working with heat, not in pretending to master a furnace.",
    rootedness:
      "Bohemian glass has a long public reputation. A city-centre working studio makes one part of that craft physically legible without claiming to replace a production visit elsewhere in Czechia.",
    shift:
      "From admiring glass as a finished object to noticing the timed collaboration that shapes it.",
    humanReturn:
      "A drinking glass may feel less inert after one careful breath at the bench.",
    responsibility:
      "The session is supervised and hot equipment remains under studio control. Follow the instructor's clothing, hair and safety directions. Recommended age begins at six, but confirm the suitability of a particular participant. The object cools overnight, so plan next-day collection or clarify shipping. This is not independent furnace use or the separate lampworking format.",
    evidence:
      "PRAGL lists the individual hot-shop activity, up-to-twenty-minute slot, current price and delayed collection. Prague City Tourism independently lists the studio and visitor activity. Neither source measures teaching quality. EA has not attended the session.",
    duration: "Up to twenty minutes per participant, plus next-day collection",
    participation: "Supervised glassblowing of a small object",
    access:
      "Reserve a hot-shop slot directly with PRAGL and confirm English instruction, collection and current safety terms. Its Old Town location is not a walk-in guarantee for a session. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "PRAGL: prices and reservations",
          url: "https://www.pragl.glass/cenik-a-rezervace",
          note: "Direct hot-shop format, duration, price, age guidance and collection terms.",
        },
        {
          title: "Prague City Tourism: PRAGL",
          url: "https://prague.eu/en/objevujte/pragl-prague-glass-experience/",
          note: "City tourism description and exact studio context.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "kanazawa-hakuichi-gold-leaf",
    slug: "place-gold-leaf-by-hand-in-kanazawa",
    title: "Place gold leaf by hand in Kanazawa",
    summary:
      "In a Higashi Chaya townhouse, learn why a thin sheet of gold makes even a small design feel precise.",
    field: "make",
    place: "Kanazawa",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kanazawa",
    ...common,
    ...guideImage("kanazawa-hakuichi-gold-leaf"),
    kernel:
      "Reserve Hakuichi's gold-leaf craft experience at Bikazari Asano in Higashi Chaya. Choose a small item and a stencil design, then apply the fragile leaf under staff guidance. Notice the tiny decision of where the surface should catch light before you take the object away.",
    rootedness:
      "Gold leaf is a material that helps identify Kanazawa, but a gilded souvenir shows little of the difficulty behind it. This public workshop introduces application in a traditional townhouse. It does not claim that a brief visitor session teaches gold-leaf manufacture or the full craft.",
    shift:
      "From seeing only a glittering finish to attending to the placement that makes it possible.",
    humanReturn:
      "A small gilded surface may remind you that delicacy can demand more control than force.",
    responsibility:
      "This is leaf application using a prepared item and masking design, not beating gold into leaf. Work slowly and follow handling instructions. Material, price and duration depend on the chosen item. The city listing says walk-ins may be possible while the operator's English page advises reservations for this branch, so reserve ahead. Ask about instruction language and children's suitability rather than assuming either.",
    evidence:
      "Kanazawa's official tourism guide details the Bikazari Asano programme, one-person minimum, location, 30 to 60 minute range and booking route. Hakuichi confirms its two branches and that Bikazari focuses on simple programmes. Their reservation wording differs, so this guide uses the safer advance-booking path. EA has not attended or judged the finished work.",
    duration: "About thirty to sixty minutes, depending on the selected item",
    participation: "Staff-guided leaf application. No gold-leaf manufacture",
    access:
      "Book the Bikazari Asano workshop at 1-8-3 Higashiyama, Kanazawa, using the official enquiry link. Confirm the item, price and language before committing. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Visit Kanazawa: Hakuichi gold-leaf craft experience",
          url: "https://visitkanazawa.jp/en/activities/detail_1688.html",
          note: "Current exact branch, programme, duration, price range and booking detail.",
        },
        {
          title: "Hakuichi: gold-leaf experience",
          url: "https://enkanazawa.hakuichi.co.jp/experience/",
          note: "Operator confirmation of the two branches and their different course emphases.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "hanoi-zo-calligraphy",
    slug: "let-a-brush-meet-do-paper",
    title: "Let a brush meet dó paper",
    summary:
      "Try Vietnamese calligraphy on handmade paper in a Hanoi workshop where the surface is part of the lesson.",
    field: "make",
    place: "Hanoi",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hanoi",
    ...common,
    ...guideImage("hanoi-zo-calligraphy"),
    kernel:
      "Request Zó Project's calligraphy workshop at its Trích Sài location. Begin with brush, ink and a sheet of dó paper. Practise pressure and spacing before trying your own word. Notice how the paper receives ink rather than treating it as a blank souvenir.",
    rootedness:
      "Zó Project works to keep Vietnamese handmade paper visible through objects and public workshops. Calligraphy lets a visitor meet the material directly. It is a contemporary lesson, not a reenactment of an imperial court or a papermaking class.",
    shift:
      "From looking at a written mark to feeling the brush and paper negotiate it.",
    humanReturn:
      "A sheet of paper can stop being background and become part of what a hand knows.",
    responsibility:
      "The page advertises a request to book, not instant confirmation. It lists two Hanoi locations and another in Hưng Yên, so specify 189 Trích Sài when enquiring and wait for the reply. Confirm instruction language, age, group size and access needs. No named teacher or exact resulting artwork is guaranteed.",
    evidence:
      "Zó Project's live calligraphy service page states the 90-minute format, materials, locations and request-to-book route. Its paper-story pages explain the organisation's material focus. These are provider sources and do not validate teaching quality. EA has not attended or made the work.",
    duration: "Ninety minutes on a confirmed workshop date",
    participation: "Guided brushwork on dó paper. No papermaking is included",
    access:
      "Use the Zó Project request form and specify 189 Trích Sài Street, Tây Hồ, Hanoi. Confirm availability and fee before arranging travel. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Zó Project: Calligraphy",
          url: "https://www.zoproject.com/service-page/calligraphy",
          note: "Direct session length, materials, booking route and location options.",
        },
        {
          title: "Zó Project: about the paper and its makers",
          url: "https://www.zoproject.com/about-us",
          note: "The organisation's description of handmade dó paper and its cultural context.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "copenhagen-copenhill-ski",
    slug: "learn-a-ski-turn-above-copenhagen",
    title: "Learn a ski turn above Copenhagen",
    summary:
      "Try a beginner slope on CopenHill's synthetic surface, with a city view that changes the usual ski setting.",
    field: "move",
    place: "Copenhagen",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    ...common,
    ...guideImage("copenhagen-copenhill-ski"),
    kernel:
      "Reserve suitable ski time at CopenHill and, if it is your first time, add an instructor. Begin on the lower green or blue section rather than the upper steep piste. Notice the feel of Neveplast beneath your skis and the city around you. The unusual material is the experience, not a claim that urban skiing is identical to snow.",
    rootedness:
      "CopenHill puts public recreation on a piece of Copenhagen infrastructure. A beginner lesson makes that design choice physical. It can be engaging without turning a waste-to-energy facility into an unqualified environmental success story.",
    shift:
      "From viewing city infrastructure at a distance to moving across one of its public surfaces.",
    humanReturn:
      "A roof may look more like a question about what else a city can make accessible.",
    responsibility:
      "Skiing is physically demanding and falls are possible. Confirm age, helmets, equipment rental, instruction, weather and insurance before paying. Lessons and rental are separate from slope access. The upper slope is red or black, not the beginner route. Neveplast needs silicone mats and can wear ski edges faster than snow. Follow on-site safety directions.",
    evidence:
      "CopenHill describes the synthetic surface, lower and upper piste grading, equipment rental and separately booked Snowminds instruction. Its visit guidance explains booking and preparation. These are operator sources, not an EA safety certification. EA has not skied or assessed the lesson.",
    duration:
      "Choose a live ski slot and separate lesson length that suits your ability",
    participation:
      "Beginner skiing with instruction if booked. No snow is involved",
    access:
      "Book ski time, rental and any instruction separately through CopenHill at Vindmøllevej 6. Confirm the current total cost and beginner availability. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "CopenHill: Skiing",
          url: "https://www.copenhill.dk/en/activities/ski-snowboard",
          note: "Synthetic slope, grades, rental and instructor options.",
        },
        {
          title: "CopenHill: Before your ski booking",
          url: "https://www.copenhill.dk/en/planl%C3%A6g%20dit%20bes%C3%B8g/for-din-ski-booking",
          note: "Operator's current preparation and booking guidance.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "madeira-balcoes-levada",
    slug: "follow-the-forest-water-to-balcoes",
    title: "Follow the forest water to Balcões",
    summary:
      "Walk a short Ribeiro Frio trail beside a levada and let the viewpoint arrive at the end.",
    field: "move",
    place: "Ribeiro Frio, Madeira",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "madeira",
    ...common,
    ...guideImage("madeira-balcoes-levada"),
    kernel:
      "Start the PR11 Vereda dos Balcões at Ribeiro Frio and follow the water channel through laurel forest. Save the distant mountain view for the end. On the way, notice the change in light and the small practical work of moving water across an island.",
    rootedness:
      "Madeira's levadas are managed water infrastructure as well as paths. This short public route introduces the relationship between forest, water and mountains without asking a visitor to attempt one of the island's exposed high-altitude trails.",
    shift:
      "From reaching a viewpoint to noticing the system that brings you toward it.",
    humanReturn:
      "A mountain photograph may carry the sound of water beside the path.",
    responsibility:
      "The official easy grade is not a guarantee of universal access, dry footing or clear visibility. Weather, maintenance and trail status can change quickly. Stay on the marked route, do not feed birds, keep back from edges and turn around when conditions deteriorate. Check the current fee and SIMplifica registration before setting out.",
    evidence:
      "Visit Madeira currently marks PR11 open and describes a 3 km return walk of about 90 minutes from Ribeiro Frio. The regional visitor system supplies the current access and payment route. Status and fees are time-sensitive. EA has not walked this route or checked conditions on site.",
    duration:
      "Around ninety minutes for a 3 km return, excluding travel and stops",
    participation: "Self-guided walk on the marked public route",
    access:
      "Check the official PR11 status and SIMplifica requirements immediately before travel, then start at ER103 in Ribeiro Frio. Do not substitute an outdated free-entry claim. No EA booking or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Visit Madeira: PR11 Vereda dos Balcões",
          url: "https://www.visitmadeira.com/en/what-to-do/nature-seekers/activities/hiking/pr-11-vereda-dos-balcoes/",
          note: "Official route, distance, current status, difficulty and visitor fee.",
        },
        {
          title: "SIMplifica Madeira",
          url: "https://simplifica.madeira.gov.pt/",
          note: "Regional public portal for current trail access and payment rules.",
        },
      ],
      "2026-10-15",
    ),
  },
  {
    id: "seville-guided-river-kayak",
    slug: "read-seville-from-paddle-height",
    title: "Read Seville from paddle height",
    summary:
      "Join a guided Guadalquivir paddle and see how the river arranges the city's landmarks.",
    field: "move",
    place: "Seville",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "seville",
    ...common,
    ...guideImage("seville-guided-river-kayak"),
    kernel:
      "Choose Kayak Sevilla's guided option, begin with the land briefing and paddle from the Jardín Americano launch. Let the Torre del Oro and Triana Bridge enter the view from water level. The more interesting question is why this city reads differently from the river that once connected it to the sea.",
    rootedness:
      "Seville's river is not just a line around a map. It shaped trade, movement and where the city faced outward. A guided paddle can bring that geography into the body without pretending that a short tour tells the whole history.",
    shift:
      "From photographing the Guadalquivir from a bridge to noticing the city's edges from the river.",
    humanReturn:
      "A riverside walk can become a different kind of map after you have paddled it.",
    responsibility:
      "Choose the guided kayak option rather than an unaccompanied rental. The operator's current pages differ on tour length, so confirm the exact slot, price, guide, language, age rules and cancellation terms before paying. Children have separate supervision requirements. A buoyancy aid does not make water activity risk-free. Check weather and water conditions, keep the safety briefing, and expect that you may get wet.",
    evidence:
      "Kayak Sevilla's current public booking page advertises a guided classic route, equipment and an online enquiry-to-payment flow. Its contact page supplies the launch area. The site's 90-minute and two-hour descriptions conflict, so this guide gives no fixed duration. EA has not paddled or assessed its safety. The licensed contextual river photograph is not identified as this operator's group.",
    duration:
      "Confirm the exact guided slot, currently described inconsistently as about 90 minutes or two hours",
    participation: "Guided kayak paddling after a land briefing",
    access:
      "Use the operator's current tour form and confirm the meeting point beside Pabellón de la Navegación in Jardín Americano. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Kayak Sevilla: guided city tour",
          url: "https://kayaksevilla.com/",
          note: "Current tour types, kayak option, booking sequence, equipment and language statement.",
        },
        {
          title: "Kayak Sevilla: contact and launch",
          url: "https://kayaksevilla.com/contacto/",
          note: "Current launch area and direct contact route for confirming the booked duration.",
        },
      ],
      "2026-10-20",
    ),
  },
  {
    id: "barcelona-sant-pau",
    slug: "read-care-in-sant-paus-courtyards",
    title: "Read care in Sant Pau's courtyards",
    summary:
      "Walk Barcelona's historic hospital pavilions and notice how light and gardens were built into the plan.",
    field: "learn",
    place: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    ...common,
    ...guideImage("barcelona-sant-pau"),
    kernel:
      "Take the self-guided route through the Recinte Modernista de Sant Pau. Move between the historic pavilions and gardens with the visitor map. Look at a window, a corridor and the distance between buildings as decisions about how a place of care might feel, not only as ornament.",
    rootedness:
      "Sant Pau holds part of Barcelona's healthcare and architectural history. The public route lets visitors meet a designed institution while present-day clinical care remains separate. Its beauty can be appreciated without making unproven claims that a particular detail improved patients' health.",
    shift:
      "From seeing an Art Nouveau facade to reading a whole site as a set of choices about care.",
    humanReturn:
      "Other civic buildings may start to reveal the values built into their paths and rooms.",
    responsibility:
      "This ticket is for the historic visitor site, not access to current patients or clinical spaces. Route and rooms may vary. Follow museum photography rules and check the current accessible itinerary, opening season and last admission. Children under sixteen need the required accompaniment. Do not promise that every part of a heritage complex is step-free.",
    evidence:
      "Sant Pau's official self-guided page describes a mapped visit of roughly 45 to 60 minutes. Its visit information gives practical access and seasonal hours. Both sources belong to the institution. EA has not visited or independently assessed the route.",
    duration:
      "Around forty-five to sixty minutes, with time to linger in the gardens",
    participation: "Self-guided heritage visit, not a hospital tour",
    access:
      "Buy the self-guided ticket through Sant Pau and enter at C. Sant Antoni Maria Claret 167. Check current spaces, hours and accessibility before travelling. No EA booking or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Sant Pau: self-guided visit",
          url: "https://santpaubarcelona.org/visita/visita-lliure/",
          note: "Official mapped visitor route, duration and ticket access.",
        },
        {
          title: "Sant Pau: prepare your visit",
          url: "https://santpaubarcelona.org/en/prepara-la-teva-visita/",
          note: "Opening, address and current visitor conditions, separate from the route description.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "porto-casa-da-musica-tour",
    slug: "follow-the-building-around-the-music",
    title: "Follow the building around the music",
    summary:
      "Tour Porto's Casa da Música to see how a concert hall is organised beyond its famous exterior.",
    field: "learn",
    place: "Porto",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    ...common,
    ...guideImage("porto-casa-da-musica-tour"),
    kernel:
      "Choose a guided Casa da Música tour. Move through the rooms available on that day's route and ask how circulation, sightlines and listening shaped the building. The view from outside is only the first question.",
    rootedness:
      "Casa da Música is a working venue, so a guided visit makes the relationship between architectural form and musical use easier to notice. Porto's tile and market traditions remain nearby, but this stop adds a contemporary civic voice rather than presenting the city only through older surfaces.",
    shift:
      "From recognising a striking silhouette to understanding a place built for people to hear together.",
    humanReturn:
      "A concert hall elsewhere may now invite you to ask what happens behind the visible stage.",
    responsibility:
      "The venue programme determines which rooms a tour can enter. A guided tour is not a concert, rehearsal, backstage encounter or promise of every auditorium. English sessions depend on the live booking calendar. The venue also offers a separate open-visit format, so do not confuse the two tickets. Confirm mobility needs and current access before purchase.",
    evidence:
      "Casa da Música publishes guided visits of about one hour, the current standard price and an English booking route. Its separate open-visit page makes the format distinction explicit. These are venue sources, not an EA visit or review of the guide. EA has not attended.",
    duration: "About one hour on a confirmed guided departure",
    participation: "Guide-led architecture visit. No performance is included",
    access:
      "Choose an English guided-tour slot directly through Casa da Música at Av. da Boavista 604-610. Check the room programme and current fee. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Casa da Música: guided tours",
          url: "https://casadamusica.com/en/a-casa/guided-tours/",
          note: "Direct duration, price, language and booking description.",
        },
        {
          title: "Casa da Música: open tours",
          url: "https://casadamusica.com/en/a-casa/open-tours/",
          note: "Separate open-visit format, preventing a false claim that every visit requires the same guide.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "london-soane-house",
    slug: "watch-a-small-house-change-shape",
    title: "Watch a small house change shape",
    summary:
      "Visit Sir John Soane's London house to notice how mirrors, light and movable pictures work in tight space.",
    field: "witness",
    place: "London",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    ...common,
    ...guideImage("london-soane-house"),
    kernel:
      "Enter the ordinary public route at Sir John Soane's Museum and let the house reveal itself slowly. Notice a mirror pulling light across a room, a narrow passage and the Picture Room's hinged panels if they are opened during your visit. Resist trying to name every object at once.",
    rootedness:
      "The museum preserves Soane's home and collection in the setting he designed. Its compact rooms make architecture feel like a sequence rather than a single facade. Ordinary admission is enough to encounter that idea without claiming access to the private apartments or the small Drawing Office.",
    shift:
      "From counting objects in a crowded museum to seeing how a house can choreograph attention.",
    humanReturn:
      "A room at home may start to feel larger or smaller because of where light falls.",
    responsibility:
      "Admission is free but capacity can close the door before the advertised last-entry time. Check opening days, step-free limitations and quietest visiting advice. Large luggage, touching, flash, video and tripods are restricted. Picture Room panels open at published times, not on demand. Private apartments and Drawing Office visits are separate limited tours.",
    evidence:
      "The museum's visitor page sets free ordinary admission, Wednesday to Sunday opening and key visitor rules. Its Drawing Office page describes that room as a separate limited-access experience. EA has not visited or verified the state of each room on a particular day. The licensed photograph depicts the museum but not a guaranteed panel opening.",
    duration: "Self-paced within current Wednesday to Sunday visitor hours",
    participation:
      "Ordinary free museum visit. Special rooms require separate access",
    access:
      "Go to 13 Lincoln's Inn Fields and check the museum's current visitor page before travel. Arrive early if capacity is a concern. No EA booking or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Sir John Soane's Museum: your visit",
          url: "https://www.soane.org/your-visit",
          note: "Current free-entry pattern, opening, capacity and visitor rules.",
        },
        {
          title: "Sir John Soane's Museum: Drawing Office",
          url: "https://www.soane.org/drawing-office",
          note: "Separate restricted room and tour context, preventing overstatement of ordinary access.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "hoi-an-quiet-teahouse",
    slug: "give-one-cup-the-room-it-deserves",
    title: "Give one cup the room it deserves",
    summary:
      "Order tea in a Hoi An house whose shared convention is quiet, then let the pace of service set your own.",
    field: "restore",
    place: "Hoi An",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hoi-an",
    ...common,
    ...guideImage("hoi-an-quiet-teahouse"),
    kernel:
      "Enter Reaching Out Teahouse for an ordinary tea service. Read the menu, use the simple written or gestural ordering system provided and give the cup your attention. The experience is not a prescribed meditation. It is a shared decision to leave the room quieter than the street outside.",
    rootedness:
      "The teahouse is a hospitality business in an old Hoi An house. Its Deaf and hard-of-hearing staff are professionals providing service, not a performance for visitors. The thoughtful communication format is part of how the place works, but the cup and conversation still belong to ordinary hospitality.",
    shift:
      "From using a cafe as a quick stop to noticing the care in how a shared room is kept.",
    humanReturn:
      "You may remember how much of a conversation can happen without raising your voice.",
    responsibility:
      "Follow the quiet convention and staff directions. Do not photograph people without consent, narrate staff as an attraction, or claim a health benefit from silence. Check the current menu, allergens, hours, accessibility and whether a group needs a reservation. The separately offered meditation workshop is not included in an ordinary tea order.",
    evidence:
      "Reaching Out describes its public teahouse, drinks, tasting sets and quiet environment. Its group-reservations page distinguishes ordinary service from planned group use. Both are operator sources, not an EA service assessment. EA has not visited or tasted the tea.",
    duration: "An unhurried self-paced tea stop",
    participation:
      "Order tea or another drink. No booked meditation or private service is implied",
    access:
      "Visit the public teahouse at 131 Trần Phú in Hoi An after checking its current hours. Contact the operator for group or access needs. No EA booking or partnership is implied.",
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Reaching Out: The Teahouse",
          url: "https://www.reachingoutvietnam.com/teahouse/the-teahouse/",
          note: "Operator description of tea service, quiet convention and setting.",
        },
        {
          title: "Reaching Out: group reservations",
          url: "https://reachingoutvietnam.com/teahouse/group-reservations/",
          note: "Separate arrangements for larger groups, distinct from an ordinary walk-in tea stop.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "sydney-maccallum-pool",
    slug: "swim-a-sydney-harbour-length",
    title: "Swim a Sydney harbour length",
    summary:
      "Take a small public swim at Cremorne Point, with ferries and the city beyond the timber deck.",
    field: "restore",
    place: "Cremorne Point, Sydney",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    ...common,
    ...guideImage("sydney-maccallum-pool"),
    kernel:
      "Walk the Cremorne Point foreshore to Maccallum Pool and check the gate before entering. Swim a short length, then sit on the timber deck long enough for ferries to cross the view. This is a modest way to meet the harbour from within the water rather than through another photograph.",
    rootedness:
      "A pool supplied by harbour water keeps the city and water in the same frame. Its weekly tide-dependent cleaning is part of the practical story, not an inconvenience to hide. The visit stands apart from Sydney's surf beaches and commercial aquatic centres.",
    shift:
      "From looking across Sydney Harbour to giving a small part of the day to its water.",
    humanReturn:
      "A harbour crossing may feel different after a slow swim beside it.",
    responsibility:
      "The council's open status is not a guarantee for your day. Its cleaning schedule includes closures and can change with tides and weather. Check the gate, current water-quality advice, access steps and your own swimming ability. Do not assume heated water, a lifeguard, showers or unattended-child supervision. Leave if the pool is closed or conditions are unsuitable.",
    evidence:
      "North Sydney Council currently marks the 33-metre pool open and publishes tide-dependent cleaning closures. Destination NSW separately identifies the public harbourside attraction. Neither source promises a safe swim on a future date. EA has not visited, tested water quality or supervised swimming.",
    duration:
      "A self-paced swim only when the pool is open and conditions suit",
    participation:
      "Independent public swim, with no instruction or supervision provided by EA",
    access:
      "Check the council's live closure notice, then approach on the Cremorne Point Walk. Verify admission and facilities locally before entering. No EA booking or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "North Sydney Council: Maccallum Pool",
          url: "https://www.northsydney.nsw.gov.au/directory-record/1523/maccallum-pool",
          note: "Current status, harbour-water description and detailed cleaning schedule.",
        },
        {
          title: "Destination NSW: Maccallum Pool",
          url: "https://www.sydney.com/destinations/sydney/sydney-north/mosman/attractions/maccallum-pool",
          note: "State tourism listing for the exact public pool and Cremorne Point setting.",
        },
      ],
      "2026-10-15",
    ),
  },
  {
    id: "marrakech-jardin-secret",
    slug: "follow-the-water-through-a-medina-garden",
    title: "Follow the water through a medina garden",
    summary:
      "Step into Le Jardin Secret and trace how shade, planted paths and water change the pace of Marrakech.",
    field: "restore",
    place: "Marrakech",
    country: "Morocco",
    countrySlug: "morocco",
    regionSlug: "marrakech",
    ...common,
    ...guideImage("marrakech-jardin-secret"),
    kernel:
      "Enter Le Jardin Secret from Rue Mouassine and let the water channel guide a slow loop through the planted courts. Notice where shade lands and how the path changes your speed. The garden can offer a pause without needing to claim silence or a personal transformation.",
    rootedness:
      "Within the medina, the restored garden makes a historical relationship between water, geometry and domestic space visible. A public visit can engage with those choices without pretending to enter a private house or participate in a religious ritual.",
    shift:
      "From seeking a quiet escape to noticing how a garden is designed to hold attention.",
    humanReturn:
      "The next courtyard may lead you to look for its source of water first.",
    responsibility:
      "This is ordinary paid garden admission, not private access. Noise, crowding and weather vary. The tower is a separate ticket and is not accessible to every visitor, while most garden areas have a more accessible route. Confirm current seasonal hours and entrance price on site. Do not assume the cafe or a guided tour is included.",
    evidence:
      "Le Jardin Secret's visitor information confirms the Rue Mouassine entrance, on-site ticket route, seasonal opening and separate tower admission. Its water page provides design context. These are institution sources, not an EA visit or independent restoration assessment. EA has not visited. The photograph is a separately licensed visitor image, not taken from the garden's restricted website gallery.",
    duration: "Self-paced during current garden opening hours",
    participation: "Independent garden visit, with tower and cafe separate",
    access:
      "Buy ordinary admission at 121 Rue Mouassine and check the current hours before travel. Resolve tower access separately if desired. No EA booking or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Le Jardin Secret: essential information",
          url: "https://www.lejardinsecretmarrakech.com/en/essential-information/",
          note: "Admission, address, hours and separate tower access.",
        },
        {
          title: "Le Jardin Secret: water",
          url: "https://www.lejardinsecretmarrakech.com/en/element/water/6/",
          note: "Institutional explanation of the garden's water design.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "valencia-water-tribunal",
    slug: "watch-valencia-settle-water-in-public",
    title: "Watch Valencia settle water in public",
    summary:
      "Stand by the cathedral on a Thursday and see a living irrigation court convene in the open.",
    field: "gather",
    place: "Valencia",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "valencia",
    ...common,
    ...guideImage("valencia-water-tribunal"),
    kernel:
      "Arrive before noon at the Cathedral's Apostles Door and stand where the public may observe the Tribunal de les Aigües. Watch how the sitting begins, who speaks and how quickly it can end. Let the experience direct your attention from the square toward the irrigation landscape beyond it.",
    rootedness:
      "The tribunal is a working civic institution connected to water distribution in Valencia's huerta, not a performance staged for tourists. UNESCO recognises it with Murcia's irrigators' tribunal as living intangible heritage. Its public form makes a practical local institution visible without granting outsiders a role in it.",
    shift:
      "From treating water as city scenery to seeing people organise its use in public.",
    humanReturn:
      "A channel beside a field may now look like a shared decision, not simply an engineering line.",
    responsibility:
      "Observe without interrupting participants, filming intrusive close-ups or expecting a dispute for your benefit. The session is normally Thursday at noon, but holidays can move it to Wednesday. No ticket, English narration, fixed duration or guaranteed case is offered for ordinary observation. Check the latest official notice before going.",
    evidence:
      "The tribunal states that anyone may observe the public sitting without a requested visit. UNESCO documents its civic and irrigation context. These sources establish the custom, not a guarantee that a particular case will be heard. EA has not attended or verified an individual future sitting.",
    duration:
      "Calendar-led and variable. Arrive before the usual Thursday noon sitting",
    participation:
      "Respectful public observation, not a staged tour or audience role",
    access:
      "Go to the Apostles Door of Valencia Cathedral after checking the tribunal's current holiday notice. Ordinary observation needs no paid booking. No EA partnership is implied.",
    guideReview: review(
      "public_observation",
      [
        {
          title: "Tribunal de les Aigües: public visits",
          url: "https://tribunaldelasaguas.org/visitas-al-tribunal/",
          note: "Public observation rules, normal time, place and holiday exception.",
        },
        {
          title: "UNESCO: Irrigators' tribunals",
          url: "https://ich.unesco.org/en/RL/irrigators-tribunals-of-the-spanish-mediterranean-coast-the-council-of-wise-men-of-the-plain-of-murcia-and-the-water-tribunal-of-the-plain-of-valencia-00171",
          note: "Independent heritage context for the continuing water courts.",
        },
      ],
      "2026-10-20",
    ),
  },
  {
    id: "paris-bal-blomet-jazz",
    slug: "hear-a-new-trio-in-an-old-paris-room",
    title: "Hear a new trio in an old Paris room",
    summary:
      "Choose a current Bal Blomet jazz night and let a neighbourhood venue connect its past to a live set.",
    field: "gather",
    place: "Paris",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    ...common,
    ...guideImage("paris-bal-blomet-jazz"),
    kernel:
      "Choose one current jazz event from Le Bal Blomet's agenda and book that night directly. Settle into the room before the first note, then listen to how the musicians answer one another. The October 2 and 3 Baptiste Trotignon Trio dates are examples on the current calendar, not a permanent promise.",
    rootedness:
      "Rue Blomet has a layered musical history, while the present venue programmes new concerts across several genres. The useful encounter is a live performance tonight, not a reenactment of any earlier era or a claim that the room never changed.",
    shift:
      "From collecting a famous address to listening to what musicians make together now.",
    humanReturn:
      "The set may leave a melody worth sharing with the person who would have enjoyed the room beside you.",
    responsibility:
      "Check the exact artist, date, ticket, seating, age policy and accessibility before paying. A jazz listing is not a promise of dancing, dinner or a particular atmosphere. The same trio on consecutive dates is one programme, not two distinct experiences. Respect performers and the venue's photography rules.",
    evidence:
      "The venue's live agenda lists current jazz events and direct event booking. Its history page supplies the place's longer context while making clear the contemporary programme is distinct. These are venue sources, not independent artistic assessment. EA has not attended or heard the current set. The licensed venue photograph predates this programme and depicts the room, not its booked artists.",
    duration: "Follow the chosen event's published start and end time",
    participation:
      "Ticketed live listening, with no meal or dance class included",
    access:
      "Book a current jazz event from the official Bal Blomet agenda at 33 Rue Blomet. Recheck the programme close to departure. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Le Bal Blomet: agenda",
          url: "https://www.balblomet.fr/agenda/",
          note: "Current date-specific concerts and direct event links.",
        },
        {
          title: "Le Bal Blomet: history",
          url: "https://www.balblomet.fr/histoire-bal-blomet/",
          note: "Venue context, kept distinct from claims about a current performance.",
        },
      ],
      "2026-10-15",
    ),
  },
  {
    id: "singapore-esplanade-concourse",
    slug: "leave-space-for-a-free-concourse-set",
    title: "Leave space for a free Concourse set",
    summary:
      "Let an Esplanade performance enter a Singapore evening without committing to a full concert ticket.",
    field: "gather",
    place: "Singapore",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    ...common,
    ...guideImage("singapore-esplanade-concourse"),
    kernel:
      "Check Esplanade's current free-performance calendar, choose a Concourse set and arrive in time to find a place. Listen to a live ensemble or performer in a shared public space, then follow the artist if the encounter makes you curious. The point is discovery without pretending every night sounds alike.",
    rootedness:
      "Esplanade uses its Concourse for free public performances as well as its ticketed halls. A short set can open a door to the varied musical life presented in Singapore. It is not a claim that every artist is local or that every programmed work is a traditional Singapore form.",
    shift:
      "From scheduling only headline attractions to leaving room for a live local discovery.",
    humanReturn:
      "An artist you did not know may become a reason to return to the calendar.",
    responsibility:
      "The performer, repertoire, duration, seat availability and age suitability change by date. The September 30 KotoKottoN set is a current example, not a daily programme or a guarantee of a free seat. Check the venue's individual event page and any content advisory before travel. Do not photograph performers against venue rules.",
    evidence:
      "Esplanade's What's On calendar publishes changing free events. Its KotoKottoN page lists a September 30 Concourse performance with specific times and a 30-minute duration. These sources establish an available example, not permanent daily access to that artist. EA has not attended or assessed the performance. The licensed documentary image shows an earlier Concourse set, not the future programme.",
    duration:
      "Calendar-led. The selected September 30 example runs about thirty minutes",
    participation:
      "Free public listening when a Concourse performance is scheduled",
    access:
      "Select a current free Concourse performance through Esplanade's official calendar and follow that event's entry directions. No EA ticketing or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Esplanade: What's On",
          url: "https://www.esplanade.com/whats-on",
          note: "Changing current calendar and free-performance discovery route.",
        },
        {
          title: "Esplanade: KotoKottoN",
          url: "https://www.esplanade.com/whats-on/festivals-and-series/crossing-borders/2026/kotokotton",
          note: "Dated example of free Concourse set, with time and duration. Recheck after the event.",
        },
      ],
      "2026-10-07",
    ),
  },
];
