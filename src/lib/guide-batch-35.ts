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

export const guideBatch35: PublicExperience[] = [
  {
    id: "materuni-migombani-coffee",
    slug: "roast-the-cup-on-kilimanjaros-slopes",
    title: "Roast the cup on Kilimanjaro's slopes",
    summary:
      "Follow Arabica from plant to pan in Materuni, then grind, brew and taste the cup where the work began.",
    field: "make",
    place: "Materuni",
    country: "Tanzania",
    countrySlug: "tanzania",
    regionSlug: "kilimanjaro-region",
    status: "public_guide",
    demo: false,
    ...guideImage("materuni-migombani-coffee"),
    kernel:
      "Choose the named Migombani Coffee Experience and keep the sequence centred on coffee. The public programme says visitors can take part in harvesting, roasting and brewing Arabica, with storytelling and songs around the work. Ask what is in season before arrival because a ripe cherry cannot be scheduled for a photograph. Stay with the process long enough for the finished drink to carry the memory of heat, rhythm and repeated handwork.",
    rootedness:
      "Materuni sits in Kilimanjaro Region near Moshi, within a landscape of coffee and banana cultivation associated with Chagga life. The Tanzania Association of Tour Operators lists a Materuni community-based tourism enterprise offering coffee experiences, meals and wider village activities. That is the organisation's and operator's account, not an independent EA audit of ownership, benefit or representation. This guide selects one bounded public coffee programme and does not turn the village into an attraction included with the cup.",
    shift:
      "From ordering coffee by origin to meeting the small decisions and physical work that make one local cup possible.",
    humanReturn:
      "The next coffee menu may read differently when a place name brings back a plant, a pan, a shared rhythm and the people doing the work.",
    responsibility:
      "Confirm the exact meeting point, start time, price, language, group size, seasonal activity and food or allergy details directly. Follow the host's instructions around plants, fire and tools. Do not enter fields, homes or working areas beyond the agreed programme. Ask before photographing any person, household space or work process. The photograph is published by Materuni Village Heritage and shows a visitor stirring a pan over an open fire with two other people present. It does not identify them, establish today's sequence or prove EA attendance or community benefit.",
    evidence:
      "Materuni Village Heritage currently publishes the Migombani programme, direct contact and payment routes and a bean-to-cup sequence that includes harvesting, roasting and brewing. TATO independently lists a Materuni enterprise in the named location and includes a coffee experience among its services, but repeats the enterprise's own impact claims. These sources support a bookable public coffee activity. They do not verify every seasonal step, a private home visit, unrestricted photography, local benefit or EA attendance.",
    duration:
      "Confirm the current coffee-only duration directly. Keep additional waterfall, meal, village or transfer arrangements separate unless they are explicitly included",
    participation:
      "Host-led coffee process with the exact hands-on steps determined by season and instruction. No farm work, household access or cultural role is implied",
    access:
      "Use Materuni Village Heritage's current programme and direct contact route. Confirm the coffee-only scope and practical terms before payment. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Materuni Village Heritage: Migombani Coffee Experience",
        url: "https://www.materuni.org/migombani-coffee-experience",
        note: "Current provider page with the bean-to-cup sequence, named activities, direct contact, payment route and the exact source photograph. Wider cultural and sustainability claims remain provider claims.",
      },
      {
        title:
          "Tanzania Association of Tour Operators: Materuni Village Experience",
        url: "https://tatotz.org/portfolio/materuni-village-experience/",
        note: "Current trade-association listing locating the enterprise in Materuni, Kilimanjaro Region and naming its coffee experience among several services. It does not independently audit visitor quality or benefit.",
      },
    ]),
  },
  {
    id: "baku-public-mugham",
    slug: "listen-for-the-turn-inside-mugham",
    title: "Listen for the turn inside mugham",
    summary:
      "Choose a public mugham performance in Baku and listen for the moment voice, tar and kamancha reshape the same musical path.",
    field: "witness",
    place: "Baku",
    country: "Azerbaijan",
    countrySlug: "azerbaijan",
    regionSlug: "baku",
    status: "public_guide",
    demo: false,
    ...guideImage("baku-public-mugham"),
    kernel:
      "Begin with Azerbaijan Tourism Board's introduction to the seven principal mugham modes and the relationship between singer and accompanying instruments. Then choose only a specifically listed public performance. On the source-check date, the board's calendar includes a ticketed Mugham programme in Baku on 23 September 2026 with a khananda singer, tar and kamancha. A different date may bring a different ensemble, venue and form. The useful continuity is attentive listening, not pretending that one concert completes the tradition.",
    rootedness:
      "Azerbaijani mugham is an improvised modal tradition carried through vocal and instrumental performance. The International Mugham Center in Baku is a dedicated performance venue, and the tourism board describes concerts and mugham nights there as periodic rather than continuous inventory. The current September listing is at Show Gallery, not at the centre. Keeping those locations separate matters. The city offers a living performance ecology, not one permanent show staged on demand.",
    shift:
      "From hearing unfamiliar ornament as decoration to following how performers hold, vary and answer a musical path in real time.",
    humanReturn:
      "Another concert may become more absorbing when you listen for negotiation between performers instead of waiting only for a recognisable melody.",
    responsibility:
      "Use a current event listing and ticket page, not an old calendar result. Confirm venue, time, language, age guidance, seating and arrival requirements before payment. The cited 23 September 2026 programme is one current option and must not be treated as a recurring schedule. Keep phones dark and silent, follow the venue's recording rules and do not describe a performance you did not attend. The photograph shows Malik Mansurov's Azerbaijani mugham quartet performing in Budapest in 2017. It does not show Baku, the cited concert, its listed performers or EA attendance.",
    evidence:
      "Azerbaijan Tourism Board currently describes the International Mugham Center, the main mugham modes and periodic public performances. Its separate event calendar publishes a ticketed Baku concert for 23 September 2026 with a singer, tar and kamancha and a direct ticket route. Wikimedia Commons documents Elekes Andor's exact 2017 performance photograph under CC BY-SA 4.0. These sources support a current public listening route, not continuous daily programming, English interpretation, a fixed ensemble or EA attendance.",
    duration:
      "Use the running time and arrival instruction on the exact event ticket. Do not infer one performance's duration from another listing",
    participation:
      "Ticketed public listening. No backstage access, performer meeting, lesson, recording permission or interpretation in English is implied",
    access:
      "Start with the tourism board's mugham introduction, then select a current official event and ticket route. Recheck the venue carefully because programmes move. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title:
          "Azerbaijan Tourism Board: Azerbaijani mugham sanctuary of music",
        url: "https://azerbaijan.travel/azerbaijani-mugham-sanctuary-of-music",
        note: "Current official visitor introduction to mugham, its principal modes, the International Mugham Center and periodic performance format. It is not a live timetable.",
      },
      {
        title: "Azerbaijan Tourism Board: Mugam, Azerbaijan Music",
        url: "https://azerbaijan.travel/new-event-calendar/mugam-azerbaijan-music",
        note: "Current dated listing for a 23 September 2026 public concert at Show Gallery, with named instruments, singer, age guidance and direct ticket route. It does not establish later performances.",
      },
      {
        title: "Wikimedia Commons: Malik Mansurov Mugam Quartet",
        url: "https://commons.wikimedia.org/wiki/File:Malik_Mansurov_Mugam_Quartet_(Azerbaijan)_(2).jpg",
        note: "Image record identifying Elekes Andor's 2017 photograph of the Azerbaijani ensemble performing in Budapest and documenting its CC BY-SA 4.0 licence.",
      },
    ]),
  },
  {
    id: "trinidad-steelpan-making-tour",
    slug: "hear-a-drum-become-an-instrument",
    title: "Hear a drum become an instrument",
    summary:
      "Enter a Trinidad steelpan workshop, watch metal become tuned notes and finish with your own first careful strikes.",
    field: "learn",
    place: "Port of Spain",
    country: "Trinidad and Tobago",
    countrySlug: "trinidad-and-tobago",
    regionSlug: "port-of-spain",
    status: "public_guide",
    demo: false,
    ...guideImage("trinidad-steelpan-making-tour"),
    kernel:
      "Choose the two-hour Steelpan Making Tour currently listed by Tourism Trinidad. The programme enters a factory, follows the making and tuning process and ends with an introduction to playing. Watch how a surface shaped by repeated force becomes an ordered field of notes. The first sound you make matters less than recognising the skilled ear and hand required before any pan can answer clearly.",
    rootedness:
      "Steelpan originated in Trinidad and Tobago and remains inseparable from the country's musical and social life. A factory visit can make one part of that history tangible through material, tuning and play. It is not the same as entering a panyard during rehearsal season, and it does not grant access to a steelband's working rehearsal. This is therefore a public making tour related to the original candidate, not a substitute presented as identical.",
    shift:
      "From seeing a bright metal drum to understanding the measured shaping, tuning and listening behind a full musical instrument.",
    humanReturn:
      "The next steelband may sound different when every note brings back the maker who had to find its exact place in metal first.",
    responsibility:
      "Book through the current operator route and confirm the workshop, transport boundary, price, language, protective equipment and whether any making step is observation only. Follow instructions around metalworking tools and loud tuning work. Use hearing protection when advised and never touch a pan, tool or unfinished surface without invitation. Ask before photographing makers or working areas. The photograph shows a steelpan maker working on an instrument. Its source does not name the person, photographer or date. It does not prove the exact factory, the current tour sequence or EA attendance.",
    evidence:
      "Tourism Trinidad currently lists Island Buddy's weekday two-hour factory visit, making and tuning observation, introductory playing and return transport from Port of Spain hotels. The separate photograph source depicts a maker working directly on a steelpan but does not document the official listing's exact factory. These sources support a public workshop tour and playing introduction. They do not support rehearsal access, visitor metalwork, a named maker or EA attendance.",
    duration:
      "The current listing states two hours and a weekday morning window. Confirm pickup and return time separately before planning the rest of the day",
    participation:
      "Guided factory observation followed by a basic playing introduction. No visitor metalworking, panyard rehearsal or band participation is promised",
    access:
      "Use Tourism Trinidad's current listing and its named operator contact. Confirm the exact factory and transport boundary before payment. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Tourism Trinidad: Steelpan Making Tour in Trinidad",
        url: "https://visittrinidad.tt/things-to-do/tours/steelpan-making-tour-in-trinidad/",
        note: "Current destination-authority listing naming the operator, weekday window, two-hour duration, factory process, tuning observation, playing introduction and transport boundary.",
      },
      {
        title:
          "VisitTrinidad.com: Private Steelpan Making Tour in Port of Spain",
        url: "https://visittrinidad.com/trinidad-and-tobago/things-to-do/island-sightseeing/private-steelpan-making-tour-in-port-of-spain",
        note: "Commercial listing used only as the direct source for the exact workshop photograph. It is not treated as Tourism Trinidad or as independent evidence of the selected operator.",
      },
    ]),
  },
  {
    id: "el-alto-public-architecture-route",
    slug: "read-the-ballroom-above-the-shop",
    title: "Read the ballroom above the shop",
    summary:
      "Look up across El Alto and see commerce, celebration and a rooftop home assembled into one unmistakable city facade.",
    field: "witness",
    place: "El Alto",
    country: "Bolivia",
    countrySlug: "bolivia",
    regionSlug: "el-alto",
    status: "public_guide",
    demo: false,
    ...guideImage("el-alto-public-architecture-route"),
    kernel:
      "Use El Alto municipality's architecture site to identify a compact daylight group of buildings, then keep the dependable route on public streets. Read each facade vertically. Commercial space occupies the ground, event halls rise above it and a house-like volume can crown the roof. The municipal site also provides videos and some virtual views. Use those to understand an interior before assuming the door on the street is visitor access.",
    rootedness:
      "El Alto's municipality publicly promotes these buildings under the term cholets, while architecture writing also uses neo-Andean. The forms are associated with Aymara entrepreneurship, event culture and architects including Freddy Mamani, but no single label or architect describes every building. They are active mixed-use properties, not a museum district. Looking from the street can reveal a distinctive urban language without treating private ballrooms, businesses or homes as open exhibits.",
    shift:
      "From reading colour as surface spectacle to recognising the stacked programme of work, gathering and private life inside the facade.",
    humanReturn:
      "A loud building may become easier to take seriously when you ask what it does, who commissioned it and how each floor participates in the city.",
    responsibility:
      "Plan the route in daylight, check current local transport and safety advice and use a reputable named local guide if you want interpretation or a wider circuit. Remain on public streets unless a building publishes current admission. Never follow a group through a door, photograph an event through windows or imply that a municipal feature page grants interior access. Ask before photographing identifiable people or businesses closely. The photograph shows one neo-Andean building in El Alto in 2014. It does not identify a current tour, public interior, architect or EA visit.",
    evidence:
      "El Alto municipality currently features named buildings including Condominios Wiphala, Diosa Temis and Centinel Prime and states that tourism operators develop architecture routes in the city. It does not publish one complete official itinerary or grant access to the interiors. Wikimedia Commons documents Grullab's exact 2014 El Alto photograph under CC BY-SA 3.0. These sources support a careful public-street observation route, not private entry, architectural attribution for every building or EA attendance.",
    duration:
      "Allow about two hours for one compact daylight cluster, with extra time for traffic and altitude. Do not build a scattered route from online pins alone",
    participation:
      "Public-street architecture observation and optional municipal virtual material. No event-hall, business, rooftop-home or resident access is included",
    access:
      "Use the municipality's current building pages as orientation. Confirm a compact route with the tourism office or a reputable named local guide before setting out. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "El Alto municipal tourism unit: Edificios Cholets",
        url: "https://cholets.elalto.gob.bo/",
        note: "Current municipal architecture portal with named buildings, public videos and statements that operators develop city routes. It does not confer interior access or publish one complete official itinerary.",
      },
      {
        title: "Wikimedia Commons: Cholet1",
        url: "https://commons.wikimedia.org/wiki/File:Cholet1.jpg",
        note: "Image record identifying Grullab's photograph of neo-Andean architecture in El Alto in 2014 and documenting its CC BY-SA 3.0 licence.",
      },
    ]),
  },
  {
    id: "perast-museum-and-fasinada",
    slug: "read-the-island-one-stone-at-a-time",
    title: "Read the island one stone at a time",
    summary:
      "Begin in Perast's town museum, then face Our Lady of the Rocks and understand why boats still carry stones into the bay each July.",
    field: "witness",
    place: "Perast",
    country: "Montenegro",
    countrySlug: "montenegro",
    regionSlug: "perast",
    status: "public_guide",
    demo: false,
    ...guideImage("perast-museum-and-fasinada"),
    kernel:
      "Start with the public Museum of the Town of Perast and give the town's maritime history a physical address before walking the waterfront. From the shore, place Our Lady of the Rocks between the palaces, bell tower and working bay. Montenegro's tourism authority records Fašinada on 22 July at sunset, when a tied convoy carries stones toward the island. The 2026 edition has passed. The dependable route now is museum and waterfront, with future observation included only after the next official programme is published.",
    rootedness:
      "Fašinada is a Perast maritime and religious custom tied to the continued making of the island of Our Lady of the Rocks. The official description is explicit that recognised local roles occupy the boats while women greet from shore. A visitor therefore has a meaningful public role as an attentive observer, not an automatic place in the procession. Beginning in the town museum keeps the visible boats connected to Perast's maritime history without claiming that the museum interprets every part of the living custom.",
    shift:
      "From seeing a picturesque island to recognising a place whose physical edge is renewed through an annual local obligation.",
    humanReturn:
      "Another perfect coastal view may become more interesting when you ask which repeated acts keep its shape, memory and public meaning alive.",
    responsibility:
      "Check the museum's current hours, price and closures before travel. Photography inside requires special approval, so keep the camera away unless permission is explicit. The cited Fašinada took place on 22 July 2026. Do not plan the next edition until Kotor or Montenegro tourism publishes a new date and public guidance. Observe from a lawful public position, keep landing places clear and do not seek a place in participating boats. The photograph shows Perast bay, the bell tower, Our Lady of the Rocks and boats. It does not identify the stone-carrying procession, its participants, date or EA attendance.",
    evidence:
      "Kotor Museums currently publishes public admission, seasonal hours, closures and a photography restriction for the Perast museum. Montenegro's national tourism authority documents the completed 22 July 2026 Fašinada, its stone-filled tied boats, sunset departure and locally defined participants, and credits the exact photograph to LTO Kotor. These sources support a museum-first route and conditional future shore observation. They do not support visitor participation, a future programme, boat access or EA attendance.",
    duration:
      "Allow two to three hours for the museum and waterfront. Treat a future Fašinada evening as a separate calendar visit with its own access check",
    participation:
      "Year-round museum admission and public waterfront observation. Future event spectatorship only after official publication. No procession or boat place",
    access:
      "Use Kotor Museums for the dependable visit and return to official Kotor or Montenegro tourism channels before planning a live Fašinada. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Kotor Museums: admission fees and opening hours",
        url: "https://muzejikotor.me/en/admission-fees-and-renting/",
        note: "Current official page publishing Perast Museum admission, seasonal opening, closures and the requirement for special approval before taking photographs.",
      },
      {
        title: "Montenegro National Tourism Organisation: Fašinada",
        url: "https://www.montenegro.travel/en/explore-montenegro/events-in-montenegro/79-fasinada",
        note: "Official record of the completed 22 July 2026 event, its stone-carrying boat sequence, sunset timing, local participant roles and LTO Kotor image credit. It does not establish the next programme.",
      },
    ]),
  },
];
