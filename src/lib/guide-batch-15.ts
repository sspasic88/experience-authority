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
const common = { status: "public_guide", demo: false } as const;

/** Destination-depth additions, not blanket approvals of the preliminary atlas. */
export const guideBatch15: PublicExperience[] = [
  {
    ...common,
    id: "porto-clerigos-organ",
    slug: "hear-the-church-before-you-climb",
    title: "Hear the church before you climb",
    summary:
      "Porto's Clérigos is more than a view from a tower. Sit inside for the midday pipe-organ programme and let the building become an instrument.",
    field: "witness",
    place: "Porto",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    ...guideImage("porto-clerigos-organ"),
    kernel:
      "Check the Clérigos programme for its daily noon pipe-organ concert, then arrive with enough time to settle before the music begins. The published format lasts about thirty minutes. Listen first to a single phrase, then to the way it lingers in the church. You do not need to identify a composer to notice the room changing the sound. Treat the tower climb and the concert as separate plans, with their own access arrangements.",
    rootedness:
      "Clérigos describes two eighteenth-century Iberian organs in its church, restored to working condition in 2014. Its architectural account connects these instruments to the building rather than treating music as an incidental visitor attraction. The shift in attention is small but consequential: the church you were going to photograph is also a space designed to be heard.",
    shift:
      "From measuring a landmark by its view to recognising it by its sound.",
    humanReturn:
      "Keep one detail from the listening, perhaps the silence after a phrase or the difference between a full passage and a single line. It is a more particular memory than another photograph of a skyline.",
    responsibility:
      "This is a church as well as a public visitor destination. Observe worship, staff instructions and quiet during the programme. Confirm current concert access, seating and step-free arrangements directly. Do not assume a tower ticket includes every activity. Ask about recording rules and keep phones silent.",
    evidence:
      "The official concert page states a daily noon programme of around thirty minutes. Its month-specific programme heading may lag behind the standing description, so confirm the current listing before travelling for a performance. The complex page provides the organ and building history. EA has not attended. The photograph depicts the church interior, not a concert or a promised seat view.",
    duration: "Around thirty minutes for the concert, plus arrival time",
    participation: "Seated listening at a publicly advertised organ programme",
    access:
      "Confirm the date and concert entry terms with Clérigos. The official tower and museum offer is not a substitute for checking music access. EA does not sell tickets or receive commission.",
    guideReview: review("public_programme", [
      {
        title: "Clérigos: daily pipe-organ concerts",
        url: "https://www.torredosclerigos.pt/en/agenda/daily-pipe-organ-concerts/",
        note: "First-party standing description of the noon concert and approximate duration. Check the current programme because the page also carries a month-specific heading.",
      },
      {
        title: "Clérigos: the architectural complex",
        url: "https://www.torredosclerigos.pt/en/clerigos-architectural-complex/",
        note: "Official account of the church and its twin Iberian organs, restoration and daily use. Also identifies the interior photograph and photographer.",
      },
    ]),
  },
  {
    ...common,
    id: "porto-bolhao-market",
    slug: "let-the-market-write-your-menu",
    title: "Let the market write your menu",
    summary:
      "At Porto's Bolhão market, follow an ingredient from the fresh stalls to the preserved shelf. A better lunch can begin with one good question.",
    field: "taste",
    place: "Porto",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    ...guideImage("porto-bolhao-market"),
    kernel:
      "Visit during the market's published trading hours and begin with a slow circuit before buying. Choose one thread, such as fish and conservas, or cheese and something to eat with it. The merchant directory lets you find actual stalls rather than arrive with a generic food checklist. Make a small purchase and, when the seller has time and you share a language, ask how they would serve it. Tasting is only part of the visit when a trader actually offers it.",
    rootedness:
      "Bolhão brings food shopping, specialist traders and restaurants into the same Porto market building. Its directory includes fresh produce, cheese, preserved foods and practical trades such as knife sharpening. That mixture matters more than a claim that every product is local or traditional. Look for the distinctions on labels and in conversations rather than assuming that a market address guarantees provenance.",
    shift:
      "From collecting things to eat to noticing the decisions behind a meal.",
    humanReturn:
      "Leave with a serving idea you could use again. A tin, a cheese or a piece of fruit becomes more memorable when it carries a specific suggestion rather than just the name of a destination.",
    responsibility:
      "This is a working market, not a free tasting circuit. Pay for what you choose, avoid blocking stalls and ask before photographing people. Confirm ingredients and allergens with individual traders. Respect the difference between market and restaurant hours. The market lists lifts, but check the route and facilities you need before visiting.",
    evidence:
      "The official market website, merchant directory and visitor FAQ establish public access, stall categories and separate market and restaurant hours. EA's ingredient-led walk is an editorial suggestion, not a guided product sold by Bolhão. EA has not inspected stalls, tasted products or verified a seller's sourcing. The photograph shows the market courtyard, not a guaranteed stall arrangement or level of trade.",
    duration: "Allow an unhurried hour. Add time if you sit down to eat",
    participation: "Independent market browsing, shopping and optional eating",
    access:
      "The published market schedule is Monday to Friday 08:00–20:00 and Saturday 08:00–18:00, closed Sundays and public holidays. Recheck before visiting. Restaurants have separate arrangements. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title: "Mercado do Bolhão: visitor information",
        url: "https://mercadobolhao.pt/en/faqs/",
        note: "Official market opening hours, Sunday and holiday closures, restaurant distinction and information about entrances and lifts.",
      },
      {
        title: "Mercado do Bolhão: merchants",
        url: "https://mercadobolhao.pt/en/merchants/",
        note: "First-party directory of traders and stall categories, used to support an independent ingredient-led visit rather than promise tastings or local provenance.",
      },
      {
        title: "Mercado do Bolhão",
        url: "https://mercadobolhao.pt/en/",
        note: "Official market overview and publishing source for the courtyard photograph. Current events are separate from ordinary trading access.",
      },
    ]),
  },
  {
    ...common,
    id: "kyoto-kunjyukan-incense",
    slug: "find-a-place-through-its-scent",
    title: "Find a place through its scent",
    summary:
      "Step into Shoyeido's Kunjyukan in Kyoto and compare incense with your nose before reaching for a name. A quiet gallery opens a different kind of map.",
    field: "learn",
    place: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    ...guideImage("kyoto-kunjyukan-incense"),
    kernel:
      "Begin in Koh-labo, the permanent fragrance exhibition at Kunjyukan. Follow the instructions at the hanging Koh-boxes and scent testers, giving yourself a pause between impressions. Compare two scents before reading every label. Then use the raw-material and making displays to connect what you noticed with an ingredient or process. This is an independent gallery visit, not an incense ceremony, a factory tour or a hands-on making class.",
    rootedness:
      "Shoyeido's Kyoto facility presents incense through materials, manufacture and ways of sensing it. A large sandalwood log, models and the forest imagery make the route from plant to finished fragrance more tangible. It is also a maker's own account of its field, with the commercial perspective that implies. Use the exhibition to become more curious, not to turn one company's presentation into a complete history of Japanese incense.",
    shift:
      "From describing a city only through what you saw to remembering something you recognised with your eyes closed.",
    humanReturn:
      "Try writing three ordinary words for a scent before looking at its description. The gap between your own association and the label is part of the interest. No purchase or specialist vocabulary is required.",
    responsibility:
      "Consider fragrance sensitivity before entering and step away if you feel uncomfortable. Follow the gallery's instructions rather than touching or opening displays freely. Ask before photographing visitors. Public exhibition access does not include entry to production spaces, and separate events may require advance booking.",
    evidence:
      "Kunjyukan's official pages describe Koh-labo as a free permanent sensory exhibition and distinguish it from other facilities and programmes. They document the hanging scent boxes, testers and material displays. EA has not visited, assessed accessibility or measured fragrance exposure. The official interior photograph shows the gallery, not a private ceremony or a promised empty room.",
    duration:
      "Allow around thirty to forty-five minutes for a self-guided visit",
    participation: "Self-guided scent comparison and material displays",
    access:
      "Check Kunjyukan's current opening calendar before visiting. Koh-labo is described as free admission. Factory tours and organised programmes are separate and may need reservations. EA does not handle bookings or receive commission.",
    guideReview: review("public_admission", [
      {
        title: "Kunjyukan: Koh-labo",
        url: "https://kunjyukan.jp/english/facilities/koh-labo.html",
        note: "First-party description of free permanent access, scent boxes, testers, raw materials and manufacturing displays, with photographs of the actual gallery.",
      },
      {
        title: "Kunjyukan: visitor information and calendar",
        url: "https://www.kunjyukan.jp/english/",
        note: "Official opening information and current events. Used to distinguish general exhibition access from scheduled programmes and closures.",
      },
    ]),
  },
  {
    ...common,
    id: "venice-huang-lampworking",
    slug: "draw-a-small-shape-in-flame",
    title: "Draw a small shape in flame",
    summary:
      "In a small Castello atelier, try glass lampworking with Venice-based artist Huang Xiaozhe. The interesting part is the moment a solid rod begins to move.",
    field: "make",
    place: "Venice",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "venice",
    ...guideImage("venice-huang-lampworking"),
    kernel:
      "Book the artist's two-hour beginner experience and confirm the meeting point in Castello. The public offer is for one or two guests and introduces shaping glass at the flame with guidance. Pay attention to the relationship between heat, turning and the weight of the softening material. Ask which small object is realistic for your session and when it can be collected after cooling. More elaborate techniques belong to the longer courses, not automatically to this introduction.",
    rootedness:
      "Huang Xiaozhe describes a contemporary practice in Venice working with glass jewellery and objects. This is a resident artist's atelier in Castello, not a factory visit on Murano and not a claim of inherited Venetian family lineage. That distinction makes the encounter more interesting: a familiar city's craft landscape is still being worked on by people with different routes into it.",
    shift:
      "From admiring a glass object to recognising how much attention its smallest curve can require.",
    humanReturn:
      "Whether your first shape is neat or uneven, you have a new way to look at a shop window. You can ask how something was made and remember the physical decisions behind an answer.",
    responsibility:
      "Open flame and hot glass require direct supervision. Follow the artist's safety, clothing and eye-protection instructions and confirm age, mobility and other participation requirements before paying. Do not touch cooling work or imitate the process without proper training and equipment. Ask before filming instruction or other participants.",
    evidence:
      "The artist's official workshop page advertises a two-hour beginner format for up to two guests, with materials and tools included. The about page identifies the Venice-based practice and describes lampworking and cooling. EA has not attended or assessed instruction. The photograph shows the artist's published glassworking process, not a promise of the object a beginner will make.",
    duration:
      "About two hours, with finished-piece cooling and collection to confirm",
    participation:
      "Supervised introductory glass lampworking in a small atelier",
    access:
      "Book directly through the artist's public workshop page. Confirm language, current price, Castello meeting point, cooling time and collection or shipping terms before arranging the rest of your day. EA receives no commission.",
    guideReview: review("public_programme", [
      {
        title: "Huang Xiaozhe: Venice glass workshops",
        url: "https://huangxiaozhe.com/workshop",
        note: "First-party public offer for the two-hour beginner experience, participant limit, inclusions and reservation route. Longer course techniques are not promised for the introductory session.",
      },
      {
        title: "Huang Xiaozhe: the artist and process",
        url: "https://huangxiaozhe.com/about",
        note: "Artist's account of a Venice-based glass practice, materials, shaping and cooling. Used as first-party context, not independent assessment of teaching.",
      },
    ]),
  },
];
