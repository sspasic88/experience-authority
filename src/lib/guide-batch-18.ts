import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-12",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-13",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch18: PublicExperience[] = [
  {
    id: "krakow-obwarzanek-workshop",
    slug: "twist-the-city-before-you-taste-it",
    title: "Twist the city before you taste it",
    summary:
      "Kraków's ring-shaped bread is everywhere. A one-hour public workshop slows it down to dough, hands and the sequence behind a familiar street snack.",
    field: "taste",
    place: "Kraków",
    country: "Poland",
    countrySlug: "poland",
    regionSlug: "krakow",
    status: "public_guide",
    demo: false,
    ...guideImage("krakow-obwarzanek-workshop"),
    kernel:
      "Book an individual workshop at the Living Museum of Obwarzanek. Listen for what separates obwarzanek krakowski from a generic ring of bread, then take a piece of dough and learn the twisting movement for yourself. The public format lasts about an hour and includes a film with English subtitles. Sessions are often conducted in Polish, so use the booking schedule to find an English option or confirm what language support will be available. If tasting matters, buy a normally produced obwarzanek separately. The museum's FAQ and its terms do not give consistent advice about eating the workshop piece.",
    rootedness:
      "Obwarzanek krakowski is protected as a geographical indication and is closely associated with Kraków's street life. The point of the workshop is not to turn a familiar snack into a monument. It is to reveal the order hidden inside something quickly bought and eaten: rolling, twisting, shaping and the production rules that distinguish it. Afterwards, the carts around the city become evidence of a living food habit rather than identical photo props.",
    shift:
      "From recognising Kraków's most visible bread to understanding one movement that gives it form.",
    humanReturn:
      "Buy one later from a street cart and notice what your hands now recognise. The useful souvenir is not a claim to mastery. It is a better question about how an everyday food is made and who keeps making it.",
    responsibility:
      "Follow the instructor's hygiene and handling directions. Confirm allergens before booking. The official information identifies wheat flour, sesame and animal fat containing milk protein. Ask about vegetarian requirements rather than assuming the dough suits them. Children must follow the museum's current supervision terms. Keep the worktable free of personal items and ask before photographing staff or other participants.",
    evidence:
      "The museum's current visitor page and FAQ describe a roughly one-hour interactive workshop, individual dough shaping, limited places and advance booking. They also differ on whether the object made during the workshop should be eaten. EA therefore does not tell visitors to eat it. The regional tourism page supports the public visitor format and local food context. EA has not attended a session, checked hygiene or assessed language support on a particular date.",
    duration: "About one hour",
    participation:
      "Hands-on dough shaping in a public museum workshop, with tasting planned separately",
    access:
      "Reserve through the museum's current booking calendar. Check the session language, age conditions, allergens and any access needs before paying. Places are limited and can sell out. The workshop is not a private lesson and does not include a wider food tour. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Living Museum of Obwarzanek: visit and booking information",
        url: "https://www.muzeumobwarzanka.com/cennik/?lang=en",
        note: "First-party description of the one-hour interactive format, individual dough shaping, limited capacity, booking route, language notes and declared allergens.",
      },
      {
        title: "Living Museum of Obwarzanek: visitor FAQ",
        url: "https://www.muzeumobwarzanka.com/faq/?lang=en",
        note: "First-party practical information on duration, participation, advance booking and the museum's statement about the workshop piece.",
      },
      {
        title: "Living Museum of Obwarzanek: current terms",
        url: "https://www.muzeumobwarzanka.com/terms-and-condition-of-obwarzanek-museum/?lang=en",
        note: "First-party terms state that the workshop object is not treated as edible under sanitary rules. EA preserves this conflict rather than choosing the more convenient claim.",
      },
      {
        title: "Visit Małopolska: Living Museum of Obwarzanek",
        url: "https://visitmalopolska.pl/en_GB/obiekt/-/poi/zywe-muzeum-obwarzanka-krakow",
        note: "Regional tourism listing supports the hands-on public format, English availability and the bread's protected geographical context.",
      },
    ]),
  },
  {
    id: "krakow-stained-glass-workshop",
    slug: "take-the-window-back-to-the-workbench",
    title: "Take the window back to the workbench",
    summary:
      "Inside Kraków's working stained-glass studio, a guided visit can continue into cutting, copper tape and soldering a small piece of your own.",
    field: "make",
    place: "Kraków",
    country: "Poland",
    countrySlug: "poland",
    regionSlug: "krakow",
    status: "public_guide",
    demo: false,
    ...guideImage("krakow-stained-glass-workshop"),
    kernel:
      "Choose the public tour-and-workshop format at muWi, not only the guided museum visit. Begin by following the stages of monumental stained glass through a studio that is still in use. Then make a small object under an artist's direction. The published workshop moves through cutting glass, applying copper tape and soldering. A shorter version uses two pieces and a standard version uses five. Both include the guided visit, materials, protective apron and glasses, and safe packing for the finished object. The result is modest by design. Its value is that a window stops looking like colour held together by magic.",
    rootedness:
      "The Żeleński workshop has operated on this site since 1902 in a building designed for stained-glass production. Kraków's city tourism service places it on the local craft trail and explains how the floors follow different stages of the work. The studio is associated with the Kraków school of stained glass and artists including Stanisław Wyspiański. The visitor workshop is an introduction beside that continuing practice, not entry into its professional lineage.",
    shift:
      "From looking through stained glass to noticing every line that has to hold the light in place.",
    humanReturn:
      "Carry the small piece home safely, then find one window in the city and study its joins. Your object is not evidence that you have learned the craft. It is a reason to see the craft more clearly.",
    responsibility:
      "The workshop uses glass, cutting tools and soldering equipment. Follow the artist's instructions and wear the supplied protective equipment. The published format is for adults and young people aged 13 or older. Confirm current age, pregnancy, ventilation, mobility and other safety conditions directly before booking. The historic route spans two floors and an independent regional listing reports no lift, so discuss access needs in advance. Do not touch professional work or enter active areas without the guide.",
    evidence:
      "The museum's current workshop page describes two public formats, their stages, English availability, group size, age threshold, duration and included protective equipment. Its visitor page confirms guided-only museum access. Kraków's official tourism service describes the continuously active studio and credits the source photography. EA has not taken the workshop, inspected tools, assessed ventilation or verified that artisans will be visible during every visit.",
    duration: "Two or three hours, depending on the workshop selected",
    participation:
      "Guided working-museum visit followed by making a small stained-glass object",
    access:
      "Book the specific tour-and-workshop ticket through the museum's calendar. Confirm English delivery, minimum participation, current price, accessibility and safety conditions. A standard guided admission is a different product and does not include making. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Stained Glass Museum: stained-glass workshops",
        url: "https://muzeumwitrazu.pl/warsztaty-witrazowe/",
        note: "First-party description of the public two- and three-hour formats, making stages, English availability, protective equipment, take-home object and age 13 threshold.",
      },
      {
        title: "Stained Glass Museum: plan your visit",
        url: "https://muzeumwitrazu.pl/plan-your-visit/",
        note: "First-party distinction between individual workshops and guided-only museum admission, with the current booking route and visit conditions.",
      },
      {
        title: "City of Kraków: muWi on the Kraków craft trail",
        url: "https://www.krakow.pl/instcbi/304371/inst/137607/2745/Muzeum-Witrazu-muWi.html",
        note: "Official city account of the working studio, building, production sequence and local artistic context. It also names Bartosz Cichoński in the image credit supplied by the organiser.",
      },
      {
        title: "Visit Małopolska: Stained Glass Workshop and Museum",
        url: "https://visitmalopolska.pl/en_GB/obiekt/-/poi/muzeum-witrazu-przy-kra-kow-skim-zakla-dzie-witra-zow-s-g-zelen-ski",
        note: "Regional visitor listing supports the living-workshop context and English service. Its accessibility detail is treated as a prompt to confirm, not an EA inspection.",
      },
    ]),
  },
  {
    id: "krakow-szopka-arrival",
    slug: "watch-a-city-arrive-in-miniature",
    title: "Watch a city arrive in miniature",
    summary:
      "On 3 December 2026, Kraków's szopka makers bring their intricate city-shaped constructions to the Main Market Square before a public procession.",
    field: "witness",
    place: "Kraków",
    country: "Poland",
    countrySlug: "poland",
    regionSlug: "krakow",
    status: "public_guide",
    demo: false,
    ...guideImage("krakow-szopka-arrival"),
    kernel:
      "Arrive at the Main Market Square during the museum's announced public display window on Thursday, 3 December 2026. From 10:00 to noon, makers place their szopki around the Adam Mickiewicz monument. Look for how towers, colour, scale and local architecture are reworked around the Nativity scene. At noon, the published programme moves in procession to Krzysztofory Palace. Remain a spectator and keep the route clear. The competition results and exhibition open on 6 December, which is a separate chance to look more slowly and compare completed works.",
    rootedness:
      "Kraków's szopka tradition developed into a distinctive form built from recognisable city architecture and transmitted through generations of makers. UNESCO lists the practice as intangible cultural heritage and describes the annual first-Thursday gathering as part of how it remains visible. The square is not merely a dramatic background. It is one of the places from which the miniature city borrows its visual language.",
    shift:
      "From seeing Kraków's towers as landmarks to seeing how makers carry those towers into a living annual tradition.",
    humanReturn:
      "Choose one architectural transformation you can name, then look for its source in the full-sized city. Spectatorship is enough. You do not need to claim insider access or turn the makers into a spectacle to be changed by the work.",
    responsibility:
      "This is a public competition arrival, not an invitation to handle entries, join the procession as a participant or approach a maker while they are carrying fragile work. Keep access routes open, follow museum and crowd directions and ask before photographing people at close range. Protect children from crowd pressure around the monument. Check the day's weather and current event notices before travelling.",
    evidence:
      "The Museum of Kraków's 2026 announcement gives the submission period, public placement window, noon procession, results date and exhibition dates. UNESCO supports the historical and transmission context. EA has not attended the 2026 event, assessed crowd management or verified that every submitted work will appear during the full public window. The photograph shows a maker arriving for the 2022 competition, not the 2026 event.",
    duration: "Public arrival from 10:00 to 12:00 on 3 December 2026",
    participation:
      "Public spectatorship followed by an optional museum exhibition on later dates",
    access:
      "The square gathering is announced as a public event on 3 December 2026. Recheck the Museum of Kraków notice before travelling for time, route, weather or access changes. The exhibition at Krzysztofory Palace opens on 6 December and runs under separate museum admission conditions. The currently published adult making series is full and is not offered here as visitor access. No EA booking or commission.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Museum of Kraków: 84th Kraków Szopka Competition 2026",
          url: "https://muzeumkrakowa.pl/aktualnosci/84-konkurs-szopek-krakowskich-2026",
          note: "First-party 2026 schedule for submission, the public 3 December gathering and procession, results and the exhibition through 28 February 2027.",
        },
        {
          title: "UNESCO: Nativity scene tradition in Kraków",
          url: "https://ich.unesco.org/en/RL/nativity-scene-szopka-tradition-in-krakow-01362?lang=en",
          note: "International heritage record for the tradition's form, annual first-Thursday presentation, intergenerational transmission and public visibility.",
        },
        {
          title: "Museum of Kraków: adult beginner master workshop",
          url: "https://muzeumkrakowa.pl/kalendarium/szopkarskie-warsztaty-mistrzowskie-dla-doroslych-poziom-podstawowy-2",
          note: "Current first-party page marks the small adult programme full and frames it for people who have entered or intend to enter the competition. It is evidence against presenting a casual visitor workshop.",
        },
      ],
      "2026-11-26",
    ),
  },
];
