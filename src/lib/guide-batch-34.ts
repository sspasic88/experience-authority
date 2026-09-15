import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-15",
  reviewBy: "2026-12-14",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch34: PublicExperience[] = [
  {
    id: "sinj-alka-museum-and-race",
    slug: "read-the-ring-before-the-horse-runs",
    title: "Read the ring before the horse runs",
    summary:
      "Begin inside the Museum of the Sinjska Alka, then let the town explain why one small iron ring still holds an entire annual contest.",
    field: "witness",
    place: "Sinj",
    country: "Croatia",
    countrySlug: "croatia",
    regionSlug: "sinj",
    status: "public_guide",
    demo: false,
    ...guideImage("sinj-alka-museum-and-race"),
    kernel:
      "Start with the year-round museum, where uniforms, lances, archives and the three-part target make the contest legible before a horse enters the course. Then walk the public racecourse through town and notice the compressed geometry of the attempt. The rider has three tilts at full gallop, and the smallest central opening carries the highest score. A live Alka belongs only to the next officially announced public programme. The dependable experience today is the museum and town route, not a promise of race-day admission.",
    rootedness:
      "UNESCO describes the Sinjska Alka as an annual eighteenth-century knights' tournament sustained through local families, material care, rules, public gathering and collective memory in Sinj and Cetinska Krajina. The museum makes that continuity visible without turning the living event into a costume show arranged for visitors. The race remains a local institution with eligibility, roles and obligations that a spectator does not acquire by attending.",
    shift:
      "From seeing a rider aim at a ring to recognising the rules, preparation, objects and town-wide work that make one brief gallop possible.",
    humanReturn:
      "The next public tradition may look different when you ask what happens during the rest of the year to make its most visible day possible.",
    responsibility:
      "Use the museum's current opening information and confirm admission directly. The 2026 Alka has already taken place. Do not plan a live visit until the next official date, ticket route and spectator guidance are published. Stay outside the course and working areas, follow crowd instructions and never approach horses or participants. Ask before photographing identifiable people away from the public event. The photograph shows an Alka horseman in August 2009. It does not establish the next programme, ticket, participant or viewing position.",
    evidence:
      "The Alka Society currently publishes the museum address and opening pattern and identifies 9 August 2026 as the completed 311th Alka. UNESCO documents the tournament's annual form, rules, local participation and inscription in 2010. Wikimedia Commons records L. Carević's exact 2009 photograph under CC0. These sources support a museum-first public guide and conditional future spectatorship. They do not support visitor participation, backstage access, a future ticket or EA attendance.",
    duration:
      "Allow two to three hours for the museum and a careful walk through central Sinj. Treat a future live event as a separate day with separate planning",
    participation:
      "Year-round museum admission and public town walk. Live spectatorship only after the next official programme is published. No contest or horse access",
    access:
      "Use the Alka Society's museum information for the dependable route. Return to its official programme before planning a live edition. Do not rely on the completed 2026 date as future access. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Alka Society: Museum and visitor information",
        url: "https://alka.hr/en/museum/",
        note: "Current official page publishing the Alka Museum's address and opening pattern. The page also carries unrelated template content, so only the identified museum fields are used.",
      },
      {
        title: "UNESCO: Sinjska Alka, a knights' tournament in Sinj",
        url: "https://ich.unesco.org/en/RL/sinjska-alka-a-knights-tournament-in-sinj-00357",
        note: "Primary heritage record describing the annual contest, three tilts, local eligibility, material care and community role. It does not publish future visitor access.",
      },
      {
        title: "Wikimedia Commons: Alka horseman",
        url: "https://commons.wikimedia.org/wiki/File:Alka_-_Horseman.jpg",
        note: "Image record identifying L. Carević's 9 August 2009 photograph and its CC0 public-domain dedication.",
      },
    ]),
  },
  {
    id: "semonkong-basotho-pony",
    slug: "let-the-pony-read-the-mountain",
    title: "Let the pony read the mountain",
    summary:
      "Leave Semonkong on a sure-footed Basotho pony and learn why distance in Lesotho is measured by terrain, not by a line on the map.",
    field: "move",
    place: "Semonkong",
    country: "Lesotho",
    countrySlug: "lesotho",
    regionSlug: "semonkong",
    status: "public_guide",
    demo: false,
    ...guideImage("semonkong-basotho-pony"),
    kernel:
      "Book the named short ride from Semonkong Lodge and choose the one to five-hour format that matches your real riding ability. A guide leads the route through the mountain terrain toward the Maletsunyane Falls viewpoint. Let the pony's footing and the guide's decisions set the pace. The animal is not transport placed beneath a scenic itinerary. It is the skilled relationship through which the path becomes possible. This guide stops before the more demanding overnight expedition.",
    rootedness:
      "Lesotho Tourism places pony trekking at the centre of a mountain route between Malealea and Semonkong. Semonkong Lodge says it hires horses and guides from the local community for its treks. That is a provider claim worth asking about, not an independent EA impact assessment. Basotho ponies remain part of movement through steep, rocky country. A visitor ride can make that practical intelligence visible without claiming ownership of the wider culture or treating villages as scenery supplied with the booking.",
    shift:
      "From riding toward a viewpoint to noticing how animal, guide, weather and terrain negotiate every metre of the route.",
    humanReturn:
      "A mountain journey may feel more complete when you remember the trained decisions that made movement possible, not only the view at the end.",
    responsibility:
      "Confirm the exact ride, group size, rider limits, weather plan and animal-welfare practice before booking. State your experience honestly. A helmet is compulsory and supplied, while open shoes are not allowed. Wear long trousers and suitable closed footwear. Follow the guide, keep a safe distance between animals and accept any decision to shorten or cancel the route. Do not photograph residents closely or enter homes and side paths without invitation. The photograph is a Semonkong Lodge programme image. It does not guarantee the pictured river crossing, route, guide, horse or present conditions.",
    evidence:
      "Semonkong Lodge currently publishes guided one to five-hour Basotho pony treks from the lodge, a route toward the Maletsunyane viewpoint, helmet and footwear rules and a direct booking path. Lesotho Tourism documents pony trekking as the defining movement of its central mountain route. The lodge states that it works with local horses and guides, but EA has not audited that arrangement or animal welfare. These sources support a named guided ride, not a guaranteed gallop, village access, overnight stay or EA attendance.",
    duration:
      "Choose a one to five-hour day ride. Allow separate time for arrival because mountain road distances take longer than the kilometre count suggests",
    participation:
      "Guide-led pony ride from a named public operator. This guide does not include overnight village accommodation, independent riding or guaranteed speed",
    access:
      "Use Semonkong Lodge's current pony-trekking page and direct booking route. Confirm the ride, price, rider requirements, equipment and weather policy before payment. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Semonkong Lodge: Pony Trekking in Lesotho",
        url: "https://www.semonkonglodge.com/day-pony-treks/",
        note: "Current named programme with guided one to five-hour routes, Maletsunyane viewpoint, price starting point, helmet rule, footwear guidance and booking route.",
      },
      {
        title: "Visit Lesotho: Central Pony Trek and Hiking",
        url: "https://www.visitlesotho.org.ls/place-to-visit/central-pony-trek-hiking",
        note: "National tourism route connecting pony travel, the mountain landscape, Malealea, Semonkong and Maletsunyane Falls. It does not verify a specific operator's current inventory.",
      },
      {
        title: "Semonkong Lodge: directions and road conditions",
        url: "https://www.semonkonglodge.com/contact/directions/",
        note: "Current practical approach information, realistic driving times and a warning not to cross the final river bridge when flooded.",
      },
    ]),
  },
  {
    id: "tortuguero-guided-turtle-watch",
    slug: "wait-until-the-turtle-is-ready",
    title: "Wait until the turtle is ready",
    summary:
      "Enter Tortuguero's night system with an authorised guide, then wait away from the beach until a trained spotter says observation can begin.",
    field: "nature",
    place: "Tortuguero",
    country: "Costa Rica",
    countrySlug: "costa-rica",
    regionSlug: "tortuguero",
    status: "public_guide",
    demo: false,
    ...guideImage("tortuguero-guided-turtle-watch"),
    kernel:
      "Begin at the Sea Turtle Conservancy visitor centre during the day, then arrange a paid green-turtle watch through a qualified local guide once in Tortuguero. The national park's system keeps visitors at waiting bases while trained turtle spotters alone detect females coming ashore. A group approaches only when nesting has reached a stage that can be observed with less disturbance. The waiting is not a delay before the experience. It is the experience's most important rule.",
    rootedness:
      "Tortuguero protects one of the Western Hemisphere's most important green-turtle nesting beaches. The current visitor system joins park controls, trained local spotters and guides rather than allowing people to spread across the beach with lights. Sea Turtle Conservancy has worked in Tortuguero since the twentieth century and documents both research and local outreach. A visitor watch is not a scientific patrol, conservation volunteering or permission to handle an animal.",
    shift:
      "From expecting wildlife on demand to understanding that the animal's timing and protection decide whether observation happens at all.",
    humanReturn:
      "Another wildlife encounter may become easier to judge when waiting, distance and the possibility of seeing nothing count as signs of a responsible system.",
    responsibility:
      "Use a qualified local guide and follow the national park's current turtle-watch system. Confirm the nesting season, time slot, clothing, walking distance and mobility fit locally. No flash, phone light, torch, noise, touching or movement ahead of the guide. Never approach a turtle before the spotter releases the group, block her route or seek hatchlings independently. A sighting is never guaranteed. The long-exposure photograph shows a turtle crawl on Tortuguero beach at night. It does not show the visitor group, normal naked-eye brightness or a promised encounter.",
    evidence:
      "Costa Rica's conservation authority currently states that trained turtle spotters are the only people who detect emerging turtles, while visitors wait at bases until observation is appropriate. Sea Turtle Conservancy publishes an open visitor centre, two paid nightly watch windows and guidance to register through a Tortuguero guide or company. It also credits Ben Hicks for the exact night-beach photograph. These sources support regulated public observation, not an open beach walk, a research role, animal handling or EA attendance.",
    duration:
      "The published watch windows are 8 to 10 pm and 10 pm to midnight. Add a daytime visitor-centre stop and confirm all current timings locally",
    participation:
      "Authorised guided wildlife observation from a controlled waiting system. No research work, beach patrol, turtle handling or guaranteed sighting",
    access:
      "Visit the Sea Turtle Conservancy centre for context, then arrange the watch through a qualified Tortuguero guide or company. Confirm the park's current rules and season after arrival. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "SINAC: Tortuguero National Park",
        url: "https://www.sinac.go.cr/EN-US/ac/acto/pnt/Pages/default.aspx",
        note: "Current national-park page describing the trained spotter and waiting-base system, nesting season uncertainty and restricted night access to the beach.",
      },
      {
        title: "Sea Turtle Conservancy: Community Outreach in Tortuguero",
        url: "https://conserveturtles.org/program-activity/community-outreach-tortuguero/",
        note: "Current visitor-centre hours, local watch registration route, two paid night windows and context on guide and spotter training.",
      },
      {
        title: "Sea Turtle Conservancy: Green Turtles in Tortuguero",
        url: "https://conserveturtles.org/program-activity/green-turtles-in-tortuguero/",
        note: "Current nesting and research context and the source page crediting Ben Hicks for the exact night beach and turtle-crawl photograph.",
      },
    ]),
  },
  {
    id: "aswan-nubian-museum-felucca",
    slug: "read-nubia-before-the-sail-opens",
    title: "Read Nubia before the sail opens",
    summary:
      "Begin in Aswan's Nubian Museum, then step onto a felucca and let the Nile reconnect the collection with the landscape outside.",
    field: "move",
    place: "Aswan",
    country: "Egypt",
    countrySlug: "egypt",
    regionSlug: "aswan",
    status: "public_guide",
    demo: false,
    ...guideImage("aswan-nubian-museum-felucca"),
    kernel:
      "Give the museum the first half of the sequence. Its galleries and garden connect Nubian history, material culture, architecture and the international campaign that moved monuments ahead of rising Lake Nasser. Then arrange a short felucca sail from Aswan's public riverfront with a clearly named skipper and agreed route. From the water, read islands, granite and settlement as parts of a river geography rather than a scenic backdrop. A meal, home visit or personal story belongs only to a separate, explicitly offered host relationship.",
    rootedness:
      "The Nubian Museum was created after the UNESCO-supported salvage campaign and presents the geographical, social and cultural history of Nubia through artefacts, reconstructed environments and a water garden. Egypt's official visitor material places Nubian communities on Elephantine Island and along the Nile, while its tourism guide identifies the felucca as an ordinary way to move through Aswan's river landscape. Pairing the two does not turn a sail into cultural interpretation. It simply prevents the river and the museum from being treated as unrelated attractions.",
    shift:
      "From a beautiful sail on a famous river to a journey shaped by displacement, continuity, island life and the landscape the museum helps you read.",
    humanReturn:
      "A museum elsewhere may become the beginning of a route, not the indoor obligation completed before the supposedly real place starts outside.",
    responsibility:
      "Check the museum's current ticket, opening and photography rules. For the sail, agree the boat, skipper, duration, destination, total price and return point before boarding. Use a life jacket when supplied and do not pressure the skipper to sail in unsuitable wind or darkness. Treat homes, village lanes and meals as separate access that requires a named public offer. Ask before photographing people. The photograph shows feluccas on the Nile at Aswan in May 2007. It does not identify today's skipper, vessel, route, safety equipment or river conditions.",
    evidence:
      "Egypt's Ministry of Tourism and Antiquities currently publishes the Nubian Museum's daily public opening, ticket information, collections, reconstructed house and river garden. Experience Egypt places Nubian culture in Aswan and recommends the museum, while the official Egypt tourism guide identifies felucca movement in the city. Wikimedia Commons records Vyacheslav Argenberg's exact Aswan photograph under CC BY 4.0. These sources support a self-shaped museum-and-sail day, not a combined ticket, hosted meal, home access or EA attendance.",
    duration:
      "Allow two to three hours for the museum and garden, then agree a separate short sail that leaves enough daylight and return margin",
    participation:
      "Independent museum admission followed by a separately arranged passenger sail. No combined programme, household hospitality or cultural interpretation is promised",
    access:
      "Use the ministry page for the museum, then arrange a felucca separately from Aswan's public riverfront or through a trusted local travel contact. Agree every practical term before boarding. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Egypt Ministry of Tourism and Antiquities: Nubia Museum",
        url: "https://egymonuments.gov.eg/en/museums/nubia-museum/",
        note: "Current official museum page with public hours, ticket information, collections, visitor rules and the garden's relationship with the Nile and Nubian village form.",
      },
      {
        title: "Experience Egypt: Nubian Culture",
        url: "https://www.experienceegypt.eg/en/Attraction-Details/209/nubian-culture",
        note: "Official national visitor context locating Nubian communities in Aswan and recommending the museum. The broad hospitality language is not treated as guaranteed access.",
      },
      {
        title: "Wikimedia Commons: Feluccas on the Nile at Aswan",
        url: "https://commons.wikimedia.org/wiki/File:Nile_River,_Feluccas,_Aswan,_Egypt.jpg",
        note: "Image record identifying Vyacheslav Argenberg's May 2007 Aswan photograph and documenting its Creative Commons Attribution 4.0 licence.",
      },
    ]),
  },
  {
    id: "san-marino-crossbow-quarry",
    slug: "watch-one-bolt-cross-the-republic",
    title: "Watch one bolt cross the republic",
    summary:
      "Stand above San Marino's Crossbowmen's Quarry and watch precision, civic identity and an old weapon meet in one public contest.",
    field: "witness",
    place: "Città di San Marino",
    country: "San Marino",
    countrySlug: "san-marino",
    regionSlug: "historic-centre",
    status: "public_guide",
    demo: false,
    ...guideImage("san-marino-crossbow-quarry"),
    kernel:
      "Use the Cava dei Balestrieri as the fixed point, then wait for San Marino's official calendar to turn it into an arena. The completed 2026 Championship Final offered free public spectatorship without booking. A separate 2026 festival included supervised public crossbow sessions, but that programme has also passed. For the next edition, verify whether the public role is watching or trying. Do not carry one year's participation offer into another year's calendar.",
    rootedness:
      "San Marino's tourism authority connects the crossbow federation with civic tournaments in the republic's historic centre. The quarry itself was opened for stone used in restoration work before becoming a competition ground. The present contest is an organised modern continuity with ceremony, district representation and skill. It should not be inflated into proof that every staged medieval element is ancient or that a visitor becomes part of the tradition by taking one supervised shot.",
    shift:
      "From treating the old town as a fortified view to seeing one civic space become a measured field of concentration, ceremony and public attention.",
    humanReturn:
      "A small country's public calendar may become more revealing when you follow one institution across place, rule and recurring civic use.",
    responsibility:
      "The cited 2026 events have ended. Use only the next programme published by the San Marino Tourism Board or Crossbowmen Federation. Confirm date, admission, capacity and whether any participation is explicitly offered. Remain behind barriers, follow weapon-safety instructions and never handle equipment without the responsible instructor. Expect steep streets, stone surfaces, heat and crowds in the historic centre. The photograph is a close official event image. It does not establish the next edition, public participation, viewing position or EA attendance.",
    evidence:
      "Visit San Marino's completed 11 July 2026 Championship Final page documents a free public night contest at the Cava dei Balestrieri with no booking required. Its completed San Marino Antiqua programme separately documents supervised public crossbow experiences on 25 and 26 July 2026. The authority's accessibility guide describes the quarry and the annual federation tradition. These sources establish a strong repeatable public format, but not a future date or automatic visitor participation.",
    duration:
      "A public tournament usually occupies an evening or part of a festival day. Confirm the next programme before shaping the rest of the historic-centre visit",
    participation:
      "Public spectatorship when officially scheduled. A supervised try is included only when the current event programme states it. No independent weapon access",
    access:
      "Monitor Visit San Marino's official calendar and verify the organiser, venue, price and visitor role for the next edition. The completed 2026 pages are context, not live inventory. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Visit San Marino: 2026 Championship Final",
        url: "https://www.visitsanmarino.com/pub2/VisitSM/en/evento/20260711-Finale-campionato-sammarinese-Tiro-Balestra.html",
        note: "Official record of the completed free night tournament at the Crossbowmen's Quarry, including organiser, time, venue and no-booking public access.",
      },
      {
        title: "Visit San Marino: San Marino Antiqua 2026",
        url: "https://www.visitsanmarino.com/pub1/VisitSM/en/evento/20260724-San-Marino-Antiqua.html",
        note: "Official record of the completed festival, including supervised public crossbow experiences. It does not establish the next edition.",
      },
      {
        title: "Visit San Marino: Hospitality without barriers",
        url: "https://www.visitsanmarino.com/pub2/VisitSM/en/dam/jcr:9200fb69-6b83-40a3-bbce-507ad1eb602c/San%20Marino%20Hospitality%20without%20barriers_REV_dg%20-%20Pubb.pdf",
        note: "Official destination guide identifying the quarry's earlier stone-extraction purpose and the federation's annual public-tournament context.",
      },
    ]),
  },
];
