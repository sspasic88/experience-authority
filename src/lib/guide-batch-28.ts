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

export const guideBatch28: PublicExperience[] = [
  {
    id: "kazanlak-public-rose-picking",
    slug: "meet-the-rose-before-the-perfume",
    title: "Meet the rose before the perfume",
    summary:
      "Reach a Rose Valley field in the cool of the morning and see how one celebrated scent begins with a flower, a narrow harvest window and many hands.",
    field: "work",
    place: "Kazanlak and Rose Valley",
    country: "Bulgaria",
    countrySlug: "bulgaria",
    regionSlug: "kazanlak",
    status: "public_guide",
    demo: false,
    ...guideImage("kazanlak-public-rose-picking"),
    kernel:
      "Choose only a rose-picking ritual listed in the current official Rose Festival programme. Arrive before the field becomes a festival image and notice what the early hour protects: cooler flowers, stronger aroma and a short working window. Follow the host's instructions if visitors are invited to pick. Hold the flower they indicate, place it where directed and leave the rest of the crop untouched. Then connect the handful of petals to the separate distilling demonstration published in the programme. The useful discovery is the distance between a rose on a label and the volume, timing and labour behind one small amount of oil.",
    rootedness:
      "Oil-bearing Rosa damascena has shaped work, trade and public identity around Kazanlak. The municipal festival turns that relationship into a shared calendar through field rituals, distilling demonstrations, exhibitions and a city parade. A staged public rozober is not the same as joining an ordinary commercial harvest, and a visitor's few picked flowers do not make them part of the agricultural workforce. Treat the announced ritual as an introduction to the system and the people presenting it, not as the whole story of the valley.",
    shift:
      "From recognising rose as decoration or fragrance to seeing a time-critical crop whose scent depends on weather, cultivation, early labour and distillation.",
    humanReturn:
      "The next bottle of rose oil may look less like a simple ingredient and more like a compressed field, morning and chain of decisions.",
    responsibility:
      "Use only the date, village and access route in the current municipal programme. The 2026 programme marked the field rituals as paid events and allowed programme changes. Do not enter another field, pick outside the hosted activity or treat a working crop as public scenery. Wear closed shoes suitable for uneven ground, bring sun protection and follow transport and meeting instructions. Ask before photographing a worker, performer or child. Do not confuse costumed festival interpretation with ordinary harvest clothing or claim that a brief visitor activity represents daily agricultural work.",
    evidence:
      "Kazanlak Municipality's official 2026 programme listed paid public rose-picking rituals in the fields near Yasenovo on 6 June and near Kazanlak on 7 June, plus public distilling demonstrations at the Ethnographic Complex and Rose Museum. Bulgaria's Ministry of Tourism describes the annual festival and its rose-picking and distilling rituals. These sources establish a recurring public format and the completed 2026 edition, not a future date, guaranteed crop conditions or entry to any unlisted field. EA has not attended the festival, assessed an organiser or verified the next edition.",
    duration:
      "One announced morning event. The next programme and meeting details are not yet confirmed",
    participation:
      "Hosted public festival ritual with picking only when and where the organiser directs",
    access:
      "Wait for the next official Rose Festival programme from Kazanlak Municipality and book only through the route it publishes. Recheck the exact village, meeting point, price, transport and change policy before travel. The cited 2026 dates have passed and are evidence of format, not current tickets. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Kazanlak Municipality: Rose Festival 2026 programme",
        url: "https://www.kazanlak.bg/programa-praznik-na-rozata-2026",
        note: "Official completed programme listing paid rose-picking rituals in Yasenovo and near Kazanlak, distilling demonstrations, venues and the organiser's change notice.",
      },
      {
        title: "Bulgaria Ministry of Tourism: Festival of the Roses",
        url: "https://www.tourism.government.bg/en/tourist-destinations/2800/5743",
        note: "National tourism context for the annual early-June festival, rose gathering, distilling ritual and Rose Museum. It does not provide the next live schedule.",
      },
      {
        title: "Wikimedia Commons: Rose-picking ritual in Rozovo",
        url: "https://commons.wikimedia.org/wiki/File:%D0%A0%D0%B8%D1%82%D1%83%D0%B0%D0%BB%D1%8A%D1%82_%D0%A0%D0%BE%D0%B7%D0%BE%D0%B1%D0%B5%D1%80_%D0%B2_%D1%81%D0%B5%D0%BB%D0%BE_%D0%A0%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE.JPG",
        note: "CC BY-SA photograph of an earlier public rose-picking ritual in Rozovo used for visual context, not evidence of a current event or conditions.",
      },
    ]),
  },
  {
    id: "siem-reap-sompoli-sbek-thom",
    slug: "let-the-shadows-move-after-angkor",
    title: "Let the shadows move after Angkor",
    summary:
      "Stay in Siem Reap after the stone temples close and watch large carved figures cross a field of light with dancers, narrators and a pin peat orchestra.",
    field: "witness",
    place: "Siem Reap",
    country: "Cambodia",
    countrySlug: "cambodia",
    regionSlug: "siem-reap",
    status: "public_guide",
    demo: false,
    ...guideImage("siem-reap-sompoli-sbek-thom"),
    kernel:
      "Confirm a current Sbek Thom performance directly with Sompoli Dthan, then arrive knowing that the screen is only one layer of the work. Watch how the carved leather figures hold detail against the light, how the performers move their full bodies with the panels and how narration and pin peat music carry the Reamker forward. Resist trying to decode every character at once. Choose one figure and follow the relationship between its still cutwork, the dancer's steps and the shadow that finally reaches the audience.",
    rootedness:
      "Cambodia's Ministry of Culture and UNESCO describe Sbek Thom as a sacred Khmer shadow theatre with large non-articulated leather panels, a Reamker repertoire, narrators and pin peat accompaniment. Wat Bo in Siem Reap is one of the communities associated with its continuation. Sompoli Dthan currently advertises Sbek Thom within a public restaurant performance. That commercial setting is a public way to witness the form, not permission to enter ceremonial practice, meet the makers or treat one shortened programme as the complete tradition.",
    shift:
      "From seeing a puppet as an object held behind a screen to recognising a coordinated performance of carving, dance, voice, music, light and inherited repertoire.",
    humanReturn:
      "Angkor's carved stories may feel less fixed after you have watched another Khmer narrative tradition make cut leather move through darkness.",
    responsibility:
      "Confirm the current performance date, start time, meal format, price, language support and accessibility directly with the venue before travel. A website statement is not a live timetable. Arrive before the performance begins and keep movement, screens and conversation from distracting performers or other guests. Follow all photography and recording rules. Do not use flash. Do not assume that the performers, backstage, puppets or making process are available for closer access. Describe what you actually witnessed without calling it a full ceremonial performance unless the organiser does.",
    evidence:
      "Sompoli Dthan currently states that its Siem Reap cultural restaurant offers Khmer Sbek Thom and small shadow-puppet performance with the Reamker story. The public page does not publish a detailed timetable, duration, price or maker encounter, so direct confirmation is essential. Cambodia's Ministry of Culture and UNESCO establish the form, materials, performance structure and ceremonial history. Cambodian Living Arts has also documented a large shadow-puppet performance at Wat Bo and Siem Reap's continuing arts context. EA has not attended Sompoli Dthan, assessed the performance or confirmed a particular night.",
    duration:
      "One evening performance with meal format. Confirm the current running time directly",
    participation:
      "Seated public spectatorship. No backstage, puppet handling or maker meeting is implied",
    access:
      "Use Sompoli Dthan's current website contact to confirm the performance and reserve directly. Obtain the date, arrival time, inclusions, price and cancellation terms in writing before planning the evening. No EA booking or commission.",
    guideReview: review("public_hospitality", [
      {
        title: "Sompoli Dthan: Khmer Sbek Thom and small shadow puppet",
        url: "https://sompolidthan.com/",
        note: "Current first-party statement that the Siem Reap venue offers a Khmer Sbek Thom shadow-puppet performance with Khmer cuisine and the Reamker story. A full timetable is not published.",
      },
      {
        title: "Cambodia Ministry of Culture and Fine Arts: Sbek Thom",
        url: "https://mcfa.gov.kh/world-heritage/khmer-shadow-theatre/",
        note: "Current national cultural record describing the form, Reamker repertoire, leather panels, performers, narrators, pin peat orchestra and communities including Wat Bo.",
      },
      {
        title: "UNESCO: Sbek Thom, Khmer shadow theatre",
        url: "https://ich.unesco.org/en/RL/sbek-thom-khmer-shadow-theatre-00108",
        note: "Primary heritage record for the form's history, ceremonial dimension, puppet construction, performance structure and safeguarding context.",
      },
      {
        title: "Cambodian Living Arts: 2025 cultural delegations",
        url: "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2025/02/Web-CLA-cultural-delegations-2025.pdf",
        note: "First-party arts document depicting a large shadow-puppet performance in Siem Reap and describing the relationship between carved leather figures, Reamker and the city's living arts context.",
      },
    ]),
  },
  {
    id: "serpa-museu-do-cante",
    slug: "hear-a-landscape-without-instruments",
    title: "Hear a landscape without instruments",
    summary:
      "Begin at Serpa's Museu do Cante, learn how a single voice opens the line and know what to listen for when an announced Alentejo chorus answers.",
    field: "witness",
    place: "Serpa, Alentejo",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "serpa",
    status: "public_guide",
    demo: false,
    ...guideImage("serpa-museu-do-cante"),
    kernel:
      "Start at Museu do Cante, where recordings and documentation can give the voices a structure before chance or a public calendar gives them a room. Listen for the ponto beginning alone, the alto entering above it and the group carrying the verse without instruments or a conductor. Ask the museum or local tourist office whether a public performance is announced during your stay. If one is, return to that same sequence in the live sound. The museum visit stands on its own. A spontaneous song in a tavern is never something a visitor should request, stage or expect.",
    rootedness:
      "Cante Alentejano belongs to towns and villages across Baixo Alentejo and is maintained by choral groups in formal and informal settings. Serpa led the UNESCO nomination and its museum serves as a place of documentation, interpretation and dialogue around the practice. The public route here combines ordinary museum access with a separately announced performance when available. It does not turn an informal social moment into visitor entertainment or suggest that one choir speaks for the entire region.",
    shift:
      "From hearing a powerful unaccompanied chorus as one sound to following the point, the answering alto and the larger group as distinct social roles.",
    humanReturn:
      "A landscape often sold through silence and open space may stay with you instead as a pattern of voices built by listening to one another.",
    responsibility:
      "Check the museum's current opening hours and any announced performance before travel. Do not enter a tavern or association expecting residents to sing for visitors, interrupt an informal gathering or record people without clear permission. At a public performance, follow the organiser's rules and keep phones and conversation from competing with unamplified voices. Avoid presenting cante as a quaint rural survival. Let the museum and named singers provide the history and language used for their own practice.",
    evidence:
      "Portugal's national tourism site directs visitors to Museu do Cante in Serpa and advises checking local tourist offices for planned performances while describing informal singing as spontaneous. Portugal's national culture portal documents the museum's interactive exhibition, archive, gallery, shop and auditorium. UNESCO describes the vocal structure, social settings and historical association with rural and mining communities. These sources support a museum-first public route and separately announced performances, not a guaranteed live chorus on an ordinary visit. EA has not visited the museum or assessed a performance.",
    duration:
      "Allow about one to two hours for the museum. Any live performance follows its own calendar",
    participation:
      "Independent museum listening followed, when announced, by public spectatorship",
    access:
      "Confirm Museu do Cante's current hours directly and ask the museum or Serpa tourist office about publicly announced performances during your dates. Do not build a journey around spontaneous singing. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Visit Portugal: O Cante Alentejano",
        url: "https://www.visitportugal.com/en/content/o-cante-alentejano-the-alentejo-singing",
        note: "National tourism context directing visitors to the Museu do Cante and local tourist offices for planned performances while clearly describing informal singing as spontaneous.",
      },
      {
        title: "Culture Portugal: Museu do Cante opens in Serpa",
        url: "https://culturaportugal.gov.pt/pt/saber/2021/08/museu-do-cante-abre-portas-em-serpa/",
        note: "National culture portal documenting the museum's interactive interpretation space, archive, gallery, shop and auditorium in Serpa.",
      },
      {
        title: "UNESCO: Cante Alentejano",
        url: "https://ich.unesco.org/en/RL/cante-alentejano-polyphonic-singing-from-alentejo-southern-portugal-01007",
        note: "Primary heritage record for the unaccompanied vocal structure, social contexts, themes, groups and intergenerational transmission.",
      },
      {
        title: "Wikimedia Commons: Cante Alentejano in Serpa",
        url: "https://commons.wikimedia.org/wiki/File:Cante_Alentejano_(patrim%C3%B3nio_imaterial_da_humanidade)_(48959051868).jpg",
        note: "Documented CC BY photograph of a Cante Alentejano group during public festivities in Serpa. It does not depict the museum or a current performance.",
      },
    ]),
  },
];
