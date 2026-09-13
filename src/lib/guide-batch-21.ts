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

export const guideBatch21: PublicExperience[] = [
  {
    id: "rome-pastificio-faini-class",
    slug: "make-pasta-until-the-sauce-makes-sense",
    title: "Make pasta until the sauce makes sense",
    summary:
      "Take Rome's most recognisable food back to flour, water, eggs and the movement that gives each shape a reason.",
    field: "taste",
    place: "Rome",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "rome",
    status: "public_guide",
    demo: false,
    ...guideImage("rome-pastificio-faini-class"),
    kernel:
      "Choose Pastificio Faini's full three-hour pasta experience, then work through the sequence rather than rushing towards the meal. The current public description covers egg dough, rolling by hand, several filled and cut shapes, safe cutting, classic fillings and sauces. Pay attention to why one thickness, edge or filling belongs with another. Lunch or dinner follows with the pasta made during the lesson. The value is not a claim that one class teaches all of Roman cooking. It is the moment a famous plate becomes a set of decisions you can recognise later.",
    rootedness:
      "Fresh pasta is one of the most relatable ways into Italy, but a visitor class can easily become a photograph of flour and a recipe card. This format is tied to Emanuele Faini's former fresh-pasta laboratory in San Lorenzo and is presented as a method developed from that working practice. EA does not call every shape Roman, certify the school's quality or treat a commercial class as domestic access. The public programme is useful because it stays close to technique and gives participants enough time to make more than one form.",
    shift:
      "From ordering a famous pasta to seeing how dough, shape, filling and sauce have to answer one another.",
    humanReturn:
      "At the next trattoria, ask why that sauce is paired with that shape. A useful answer matters more than collecting another list of dishes.",
    responsibility:
      "Confirm the exact class, address, language, ingredients and group size before paying because the school lists more than one format and location. Disclose allergies and dietary needs in advance, especially gluten, egg, dairy, alcohol and nuts. Follow every instruction around knives, hot water, stoves and shared work surfaces. Do not assume an alternative ingredient makes the kitchen safe from cross-contact. Ask before photographing teachers or other participants and keep personal jewellery and loose clothing clear of food preparation.",
    evidence:
      "Pastificio Faini's current English pages describe a three-hour public class with hand rolling, multiple pasta shapes, fillings, sauces, a shared meal, Italian, English and French delivery, and two named Rome locations. The school also publishes its own account of Emanuele Faini and the method's development from a fresh-pasta laboratory. These are first-party descriptions. EA has not taken the class, inspected either kitchen, assessed instruction or verified a specific date, teacher, menu or cross-contact control.",
    duration: "About three hours for the full pasta experience",
    participation:
      "Hands-on pasta making followed by the meal prepared in the class",
    access:
      "Use Pastificio Faini's current courses page to choose the full public experience and its live booking route. Confirm whether the session is at Via dei Latini or Via dei Sabelli, along with its date, price, language, menu, age guidance and dietary arrangements before paying. A video, tasting or shorter format is not the same class. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Pastificio Faini: current pasta experiences",
        url: "https://pastificiofaini.com/",
        note: "First-party overview of the professional-lab and historic-kitchen formats, three-hour method, pasta shapes, sauces, meal and stated language options.",
      },
      {
        title: "Pastificio Faini: courses and booking route",
        url: "https://pastificiofaini.com/?page_id=3519",
        note: "First-party course selection and booking hand-off. Live dates, prices, address and exact inclusions must be confirmed there before payment.",
      },
      {
        title: "Pastificio Faini: about the school",
        url: "https://pastificiofaini.com/?page_id=3505",
        note: "The school's own account of Emanuele Faini, the former pasta laboratory and development of the visitor method. It is not independent quality assessment.",
      },
    ]),
  },
  {
    id: "rome-appia-antica-cycle",
    slug: "ride-the-road-rome-built-to-leave-it",
    title: "Ride the road Rome built to leave it",
    summary:
      "Trade the monumental centre for a bicycle, ancient paving and the long line that once carried Rome towards the south.",
    field: "move",
    place: "Rome",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "rome",
    status: "public_guide",
    demo: false,
    ...guideImage("rome-appia-antica-cycle"),
    kernel:
      "Start at the Appia Antica information centre at Via Appia Antica 58/60, where the regional park lists bicycle rental, maps and guided options. Ask staff which surface and distance suit the day, the bicycle and your confidence. Then use one bounded section of the ancient road as a way to read movement. Original paving, later road surfaces, tombs, villas and open landscape show that the Appia was infrastructure before it became an image of Rome. Stop often enough to notice how route, engineering and distance shaped what the city could reach.",
    rootedness:
      "The Via Appia began in 312 BCE and grew from a strategic road towards Capua into a route connecting Rome with southern Italy. The Rome section remains a lived landscape with archaeology, roads, farms, homes and protected green space. UNESCO inscribed the wider Via Appia serial property in 2024. Heritage status does not turn every kilometre into a traffic-free cycle path or guarantee that ancient stones are comfortable to ride. This guide stays with the park's public information and rental service, and treats the route as shared infrastructure rather than an outdoor theme park.",
    shift:
      "From looking at Roman remains as isolated monuments to moving along the system that connected them.",
    humanReturn:
      "On the way back into the centre, notice which modern road, rail line or cycle route still decides what feels near and what feels far.",
    responsibility:
      "Confirm current park notices, weather, rental condition and the recommended route before departure. Ancient paving can be rough, slippery and difficult for an ordinary city bicycle. Some sections carry local vehicles or cross live roads. Wear a correctly fitted helmet, ride within your ability, dismount where needed and keep speed low around walkers, animals and monuments. Carry water and sun protection, stay on permitted routes and never ride on archaeological remains or closed ground. Heat, rain, daylight and a return journey should determine distance, not a target on a map.",
    evidence:
      "The Appia Antica archaeological park's current visitor page recommends arrival by bicycle and documents rental through the regional park information point. The service-centre page lists bicycle hire, maps and public guided options, while the park's road page describes the preserved Rome section. UNESCO documents the inscription and historical role of the wider Via Appia. EA has not ridden the route, inspected a rental bicycle, assessed traffic or surface conditions, or chosen a safe distance for any visitor.",
    duration:
      "Choose a short section or a half-day after checking conditions and the return",
    participation:
      "Independent cycling or a currently offered guided ride on the public route",
    access:
      "Begin with the official park information and service-centre pages. Bicycle rental is listed at Via Appia Antica 58/60, with seasonal opening hours and guided options that require a separate current check. Confirm identification, deposit, equipment, route, price and return time directly with the service before committing. Entry to individual archaeological sites may require a separate ticket. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Appia Antica Archaeological Park: visitor information",
        url: "https://www.parcoarcheologicoappiaantica.it/il-parco/informazioni-del-parco/",
        note: "Official current arrival, park map, bicycle rental, ticket, accessibility, food, animal and live closure information for planning the public visit.",
      },
      {
        title: "Appia Antica service centre",
        url: "https://www.parcoarcheologicoappiaantica.it/luoghi/via-appia-antica/centro-servizi-appia-antica/",
        note: "Official listing of the information point, seasonal hours, bicycle hire and public guided options on foot, by bicycle and electric minicar.",
      },
      {
        title: "Appia Antica Archaeological Park: Via Appia Antica",
        url: "https://www.parcoarcheologicoappiaantica.it/luoghi/via-appia-antica/",
        note: "Official description of the surviving road, its Rome alignment, public map and the monuments visible along the preserved section.",
      },
      {
        title: "UNESCO World Heritage Centre: Via Appia. Regina Viarum",
        url: "https://whc.unesco.org/en/list/1708",
        note: "Primary heritage record for the 2024 inscription, the road's construction from 312 BCE and its long role in movement, engineering and exchange.",
      },
    ]),
  },
  {
    id: "rome-centrale-montemartini",
    slug: "put-the-gods-back-among-the-machines",
    title: "Put the gods back among the machines",
    summary:
      "Meet ancient sculpture inside Rome's first public power station, where marble, turbines and diesel engines refuse to stay in separate histories.",
    field: "witness",
    place: "Rome",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "rome",
    status: "public_guide",
    demo: false,
    ...guideImage("rome-centrale-montemartini"),
    kernel:
      "Visit Centrale Montemartini with two parallel questions. What did the ancient object once belong to, and what did the machine once make possible? Move between the classical collection and the preserved turbines, boilers and diesel engines without treating the industrial setting as decoration. The former plant became an exhibition space when works from the Capitoline Museums needed a temporary home in 1997. The encounter proved strong enough to become permanent. Give the building, labels and sightlines time to explain why Rome's ancient and modern infrastructures now share one room.",
    rootedness:
      "Centrale Montemartini opened in 1912 as Rome's first public electricity-generating plant. It later became the second exhibition centre of the Capitoline Museums, holding sculpture and mosaics found during the city's late nineteenth and early twentieth-century expansion. That combination makes the museum more than an unusual backdrop. Ancient objects, municipal power and the modern excavation of Rome all meet in a former working plant on Via Ostiense. EA does not present the display as untouched industrial archaeology or claim that every machine remains operable.",
    shift:
      "From seeing ancient Rome and industrial Rome as separate eras to noticing how one city keeps rebuilding the other.",
    humanReturn:
      "Choose one machine and one ancient object before leaving. Ask what system each belonged to, then look for the modern system that now holds them together.",
    responsibility:
      "Use the public museum route and follow all barriers, photography rules and staff instructions. Do not touch machinery, sculptures or mosaics. Confirm current notices, lift availability, seating, sensory conditions and step-free access before travel if these affect the visit. The industrial scale can involve hard surfaces, changing acoustics and large objects overhead. Keep children close and do not use a dramatic photograph as a reason to cross a barrier or block another visitor's route.",
    evidence:
      "The current museum pages document public opening hours, tickets, the building's 1912 power-station history, its conversion to a museum and the main collection. Rome's Musei in Comune portal explains that the station held turbines, boilers and diesel engines, and that the collection includes classical works from excavations across Rome. EA has not visited, assessed interpretation, verified every room's current access or confirmed conditions for a particular date.",
    duration: "Allow about one and a half to two hours at your own pace",
    participation:
      "Self-guided public museum visit, with occasional separate activities listed by the museum",
    access:
      "Check the museum's practical-information and notices pages before travel. Current public hours are listed from Tuesday to Sunday, with last admission one hour before closing. Buy the relevant dated ticket through the museum's official route or at the ticket office under its current terms. Temporary exhibitions can change the ticket and visitor flow. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Centrale Montemartini: practical information",
        url: "https://centralemontemartini.org/en/informazioni_pratiche/orari_e_indirizzi",
        note: "Official current address, opening hours, closure days, last admission, visitor-service links and instruction to check live notices.",
      },
      {
        title: "Centrale Montemartini: tickets",
        url: "https://centralemontemartini.org/en/informazioni_pratiche/biglietti",
        note: "Official current public ticket routes, purchase conditions and changing exhibition inclusions. Prices should be checked again for the chosen date.",
      },
      {
        title: "Musei in Comune: the power plant",
        url: "https://www.museiincomuneroma.it/en/infopage/power-plant",
        note: "Rome's municipal museum account of the 1912 generating plant, its machinery, decommissioning and later conversion into an exhibition space.",
      },
      {
        title: "Musei in Comune: Centrale Montemartini",
        url: "https://www.museiincomuneroma.it/en/centrale-montemartini",
        note: "Official collection and museum overview, including the relationship between classical sculpture, archaeological excavation and the industrial building.",
      },
    ]),
  },
];
