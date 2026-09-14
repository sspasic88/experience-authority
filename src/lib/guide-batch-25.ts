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

export const guideBatch25: PublicExperience[] = [
  {
    id: "appenzell-show-dairy",
    slug: "follow-appenzeller-from-vat-to-cellar",
    title: "Follow Appenzeller from vat to cellar",
    summary:
      "Look down into daily cheese production in Stein, then follow milk, curd and ageing until a familiar wheel becomes a working system.",
    field: "work",
    place: "Stein, Appenzellerland",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "appenzellerland",
    status: "public_guide",
    demo: false,
    ...guideImage("appenzell-show-dairy"),
    kernel:
      "Arrive while cheese making is active and begin at the production gallery rather than the shop. Watch milk move through the vats, curd separate and the working floor change from one stage to the next. Continue through the self-guided exhibition and cellar view, using the included tasting only after you have traced what came before it. Production is normally visible daily until mid-afternoon, but the exact rhythm is real work rather than a performance and can vary.",
    rootedness:
      "The Appenzeller demonstration dairy in Stein presents one public route into a cheese closely associated with Appenzellerland. Its exhibition connects contemporary production with the regional landscape, milk and ageing, while the recipe for the herbal brine remains guarded. This is a visitor gallery above a functioning dairy. It is not a pasture visit, unrestricted factory access or proof that one facility represents every farmer and cheesemaker in the region.",
    shift:
      "From recognising a branded wheel to noticing the sequence of milk, temperature, curd, pressure, time and repeated work behind it.",
    humanReturn:
      "The next time cheese reaches the table, you may look for the production decisions hidden inside a texture you once treated as inevitable.",
    responsibility:
      "Check current opening hours, production times, tickets, language support and accessibility before travelling. Watch only from the public visitor route and never cross onto the production floor. Do not touch equipment or interrupt staff. Confirm ingredients and allergens before tasting. Ask before photographing identifiable workers or visitors, and supervise children closely along the elevated gallery and interactive exhibition.",
    evidence:
      "The Appenzeller demonstration dairy currently publishes year-round visitor hours, daily cheese making until 15:00 and a self-guided exhibition overlooking live production, with a cellar, tasting box and smartphone translations. Eastern Switzerland's destination platform independently lists the visitor attraction. These sources establish a public observation route, not farm access or an ordinary hands-on cheese session. EA has not visited, assessed the product or verified production activity on a particular day.",
    duration:
      "Self-paced visit. Arrive before 15:00 to improve the chance of seeing production",
    participation:
      "Self-guided exhibition, observation from the visitor gallery and the tasting included with admission",
    access:
      "Ordinary admission is available through the dairy's official visitor route. Check the current calendar and arrive while production is scheduled if the working floor is your priority. The separately advertised make-your-own-cheese offer is a prearranged group format and is not included in this guide. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Appenzeller Schaukäserei: official visitor site",
        url: "https://www.schaukaeserei.ch/en/",
        note: "Current first-party opening information and route to the demonstration dairy's visitor offers.",
      },
      {
        title: "Appenzeller Schaukäserei: self-guided experience exhibition",
        url: "https://www.schaukaeserei.ch/en/showdairy/experienceoffers/experience-exhibition/",
        note: "Current exhibition scope, view into live cheese production, cellar, tasting and available written translations.",
      },
      {
        title: "Eastern Switzerland: Appenzeller demonstration cheese dairy",
        url: "https://ostschweiz.ch/en/map/poi/appenzeller-r-demonstration-cheese-dairy--id--loc_s9t_ctbrvaur-ssja-eahd-jvst-eargijfvicjd.html",
        note: "Regional destination listing that independently locates and describes the public visitor attraction in Stein.",
      },
    ]),
  },
  {
    id: "ajman-dhow-yard",
    slug: "watch-a-dhow-take-shape-beside-the-creek",
    title: "Watch a dhow take shape beside the creek",
    summary:
      "Trade polished skylines for timber ribs, tools and unfinished hulls at a working boatyard on the north side of Ajman Creek.",
    field: "work",
    place: "Ajman Creek",
    country: "United Arab Emirates",
    countrySlug: "united-arab-emirates",
    regionSlug: "ajman",
    status: "public_guide",
    demo: false,
    ...guideImage("ajman-dhow-yard"),
    kernel:
      "Approach the dhow yard as a working place that can be observed, not an attraction arranged around your arrival. From the visitor-permitted edge, look for the boat's structure before its finished silhouette. Follow the curve from keel and timber ribs toward planking, sanding and fitting. Different builds may use wood, fibreglass and modern engines. What is visible depends on the work under way that day, and there may be no guide, exhibition sequence or active construction when you arrive.",
    rootedness:
      "Ajman's official visitor material places boat building beside the emirate's histories of fishing, pearling and Gulf trade, and identifies the creekside yard as an active construction centre. The value is not a claim that every contemporary vessel is made by unchanged methods. It is the chance to see traditional form, inherited skill and modern production occupy the same working landscape. Watching from a public area does not make the yard or its workers available for unrestricted access.",
    shift:
      "From seeing a dhow as a finished heritage symbol to reading the frame, materials and decisions required before a hull reaches water.",
    humanReturn:
      "A harbour may begin to look less like a line of boats and more like the final page of many hidden construction stories.",
    responsibility:
      "Confirm the current visitor approach with Ajman Tourism before making a special journey because the official page publishes no opening hours or managed tour. Remain only in clearly public or visitor-permitted areas. Do not enter sheds, climb onto hulls, cross barriers, handle tools or interrupt work. Keep clear of vehicles, lifting, power tools and loose materials. Ask before photographing workers at close range or identifiable faces. Heat can be severe, so plan conservatively and leave if the site is closed or conditions are unclear.",
    evidence:
      "Ajman Tourism currently identifies the Dhow Yard as a place where visitors can watch craftsmen work and gives its location beside Ajman Creek near Al Boom Marine. The department's history page provides the wider boat-building context. A 2014 report from The National documents one Ajman boatbuilder and supplies the credited photograph, but it does not prove today's personnel, access or activity. EA has not visited, entered the yard, spoken with builders or verified conditions on a particular day.",
    duration:
      "A brief observation stop. Current access and activity are not scheduled",
    participation:
      "Observation from a clearly public or visitor-permitted area only",
    access:
      "There is no EA-arranged visit and no published official tour or timetable. Use Ajman Tourism's location guidance, then confirm the current public approach and any restrictions before travelling. If staff, signs or barriers indicate that an area is private, stop there. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Visit Ajman: Dhow Yard",
        url: "https://visit-ajman.ae/en/destinations/ajman-city/dhow-yard",
        note: "Current official visitor description, creekside location and explicit statement that visitors can watch craftsmen at work. It lists no hours or formal tour.",
      },
      {
        title: "Visit Ajman: history of the emirate",
        url: "https://visit-ajman.ae/en/facts/history-of-the-emirate",
        note: "Official historical context for boat building, fishing, pearling and the skills associated with Ajman's shipyards.",
      },
      {
        title: "The National: Ajman boatmaker still cruising along at 85",
        url: "https://www.thenationalnews.com/uae/ajman-boatmaker-still-cruising-along-at-85-1.587652",
        note: "Dated reporting on an individual Ajman boatbuilder and source of the credited 2014 photograph. It is context and media evidence, not current access evidence.",
      },
    ]),
  },
];
