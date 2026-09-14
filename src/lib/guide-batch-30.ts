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

export const guideBatch30: PublicExperience[] = [
  {
    id: "tirana-evening-xhiro",
    slug: "let-the-city-take-its-evening-walk",
    title: "Let the city take its evening walk",
    summary:
      "Join Tirana at the hour when heat softens, pavements fill and an ordinary walk becomes a way of keeping the city socially connected.",
    field: "gather",
    place: "Tirana",
    country: "Albania",
    countrySlug: "albania",
    regionSlug: "tirana",
    status: "public_guide",
    demo: false,
    ...guideImage("tirana-evening-xhiro"),
    kernel:
      "Choose one public evening route and walk it slowly enough to fall into its pace. Tirana's municipal mobility guide identifies pedestrian Embassy Row as a street that becomes a xhiro promenade in the evening. The lakeside path at Grand Park offers a longer, more open alternative. Begin after the day's heat eases, keep your destination loose and notice greetings, pauses, benches and repeated turns. The point is not to complete an itinerary. It is to understand how walking can hold a social hour together without a ticket, host or staged encounter.",
    rootedness:
      "Xhiro, from the Italian giro, is a widely recognised Albanian evening practice of going out to walk, meet and be seen. Its form varies between towns, generations and streets. Tirana's rapid growth has changed where people gather, and no single boulevard represents the whole practice. A visitor can join the movement through ordinary public conduct while remembering that residents are using their own city, not performing a custom for an audience.",
    shift:
      "From crossing the centre between attractions to noticing that the shared pace of an ordinary pavement may be one of the city's most revealing forms.",
    humanReturn:
      "An evening walk at home may begin to look less like leftover time and more like simple public infrastructure for seeing people regularly.",
    responsibility:
      "Use lit public paths, check current local conditions and keep valuables and road crossings in mind. Summer heat can make a later start more sensible. Do not photograph identifiable people without permission, block the flow for content or narrate ordinary residents as an attraction. Join at a respectful pace and leave space for families, runners, cyclists and people using the route for everyday travel. The municipal guide documents one route, not a fixed daily ceremony or guaranteed crowd.",
    evidence:
      "Tirana Municipality's published sustainable mobility guide explicitly describes Embassy Row becoming an evening promenade where citizens take xhiro. Albania's national tourism site independently describes Tirana's public centre, Blloku and Grand Park. MDR's locally reported feature follows the practice at the lakeside path and credits the photograph used here. These sources support an ordinary self-guided public walk and its social context. They do not establish a fixed start time, route, crowd level or EA observation of the current evening.",
    duration:
      "Walk for thirty minutes or stay longer. The useful timing follows weather, light and ordinary local activity",
    participation:
      "Self-guided use of public streets and paths. No tour, resident interaction or photography permission is implied",
    access:
      "Use Tirana Municipality's mobility guide for the documented Embassy Row route, or choose the public lakeside path at Grand Park. Check weather, lighting and local access on the day. No booking, fee or EA commission.",
    guideReview: review("public_observation", [
      {
        title: "Tirana Municipality: Strolling Tirana mobility guide",
        url: "https://tirana.al/uploads/files/Strolling-Tirana-A-sustainable-Mobility-Guide-for-Tirana-2021-08.pdf",
        note: "Municipal guide documenting pedestrian Embassy Row and its evening use as a xhiro promenade, with a mapped public route through the city.",
      },
      {
        title: "Albanian National Tourism Agency: Tirana",
        url: "https://akt.gov.al/en/cities/tirane/",
        note: "Current national tourism overview of the capital and its public centre, Blloku and Grand Park context. It does not establish a fixed xhiro route.",
      },
      {
        title: "MDR: Albania's evening xhiro",
        url: "https://www.mdr.de/nachrichten/welt/osteuropa/land-leute/albanien-xhiro-spaziergang-tradition-120.html",
        note: "Locally reported account of contemporary xhiro in Tirana, including the lakeside path and the credited Ilir Tsouko photograph used by this guide.",
      },
    ]),
  },
  {
    id: "echternach-hopping-procession",
    slug: "watch-a-town-move-in-prayer",
    title: "Watch a town move in prayer",
    summary:
      "Meet Echternach's hopping procession first through its documentation centre, then return on Whit Tuesday only when the public date and viewing arrangements are confirmed.",
    field: "witness",
    place: "Echternach",
    country: "Luxembourg",
    countrySlug: "luxembourg",
    regionSlug: "echternach",
    status: "public_guide",
    demo: false,
    ...guideImage("echternach-hopping-procession"),
    kernel:
      "Begin inside the Information and Documentation Centre by the Basilica of Saint Willibrord. Use its maps, photographs, films and devotional objects to learn why the movement belongs to pilgrimage rather than spectacle. If an official Whit Tuesday edition is announced, watch from the public edge of the route and follow organiser instructions. Notice how rows, white handkerchiefs, repeated music and small lateral steps organise thousands of individual bodies. Spectatorship is the dependable visitor role. Joining the procession is never presented here as an open tourist activity.",
    rootedness:
      "The procession is connected to devotion to Saint Willibrord and to pilgrimage routes that converge on Echternach. UNESCO records its annual transmission through religious and civic organisations, schools, families and music groups. The regional tourism office describes the movement as embodied prayer and places preservation of its distinct form above novelty. The documentation centre provides a year-round way to meet that context without requiring the live event to become available or performative for visitors.",
    shift:
      "From treating an unusual step as the entire story to seeing how music, faith, route, clothing and repeated coordination carry a pilgrimage through the town.",
    humanReturn:
      "A procession elsewhere may prompt better questions about who is moving, why they are moving and what a spectator is being trusted to witness.",
    responsibility:
      "Check the official event page before travel because the next date is not yet published there. Keep worship, prayer and access to the basilica ahead of photography. Do not enter a row, copy the step inside the route or obstruct participants for a better angle. Follow barriers, steward instructions and any restrictions on recording. Dress and behave for a religious setting. The documentation centre is closed during Mass and published opening hours can change, so confirm them before arrival.",
    evidence:
      "Mullerthal's regional tourism office currently publishes the year-round documentation centre, its content, contact details, accessibility and changing hours. Its event page confirms public spectators and the Whit Tuesday pattern but currently labels the next date as coming soon. UNESCO documents the procession's meaning, transmission and organisation. This evidence supports the centre now and conditional public witnessing after an official date is released. It does not authorise participation, reserve a viewing position or prove EA attendance.",
    duration:
      "Allow about one hour for the documentation centre. A live procession requires a separately confirmed date and a longer morning",
    participation:
      "Public documentation-centre visit and respectful spectatorship only. Participation in the procession is not implied",
    access:
      "Check the Documentation Centre's current hours and the regional event page separately. Build no live-event plan until the official date, route and visitor guidance are published. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Mullerthal: Documentation Centre about the Hopping Procession",
        url: "https://www.mullerthal.lu/place/documentation-centre-about-the-dancing-procession-echternach",
        note: "Current regional tourism listing with the centre's exhibits, address, accessibility, contact details and date-specific opening hours.",
      },
      {
        title: "Mullerthal: Echternach Hopping Procession",
        url: "https://www.mullerthal.lu/unesco/echternach-hopping-procession",
        note: "Official regional context for Whit Tuesday, pilgrims, spectators, embodied prayer and the documentation centre. The next event date is currently marked as coming soon.",
      },
      {
        title: "UNESCO: Hopping procession of Echternach",
        url: "https://ich.unesco.org/en/RL/hopping-procession-of-echternach-00392",
        note: "Primary heritage record describing the pilgrimage, ritual sequence, transmission, music, participant organisation and annual pattern.",
      },
    ]),
  },
];
