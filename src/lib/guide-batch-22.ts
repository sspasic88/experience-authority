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

export const guideBatch22: PublicExperience[] = [
  {
    id: "new-york-bagelup-class",
    slug: "make-the-bagel-before-new-york-serves-it",
    title: "Make the bagel before New York serves it",
    summary:
      "Roll, boil and bake the city's most familiar ring, then take home the technique instead of another ranking.",
    field: "taste",
    place: "New York City",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    status: "public_guide",
    demo: false,
    ...guideImage("new-york-bagelup-class"),
    kernel:
      "Choose one of BagelUp's scheduled public weekend classes and follow the whole transformation. Work the dough, shape the ring, boil it and bake it before the meal. The current public description says participants make at least six bagels and leave with a recipe. Use the class to notice the decisions hidden inside a food that can look inevitable once it reaches the counter. The aim is not to settle who makes New York's best bagel. It is to understand what texture, shape and boiling ask of one another.",
    rootedness:
      "The New York bagel carries immigrant, labour and commercial histories that a single visitor class cannot contain. BagelUp presents its programme as an introduction to the city's bagel culture and craft, created by the team behind New York BagelFest. That makes it a legible public route into a recognisable food, not authority over every bakery or community that shaped it. EA has not verified the company's broader promotional claims or treated a commercial class as access to a working neighbourhood bakery.",
    shift:
      "From ordering a New York reference to recognising the sequence that gives it structure.",
    humanReturn:
      "At the next bagel counter, ask one precise question about fermentation, boiling or bake instead of asking for a universal winner.",
    responsibility:
      "Confirm the live class date, venue, duration, language, age guidance and group format before paying. Disclose allergies and dietary needs in advance, especially gluten, sesame, dairy, egg and other seeds. A shared class cannot guarantee protection from cross-contact. Follow instructions around hot water, ovens and work surfaces. Tie back loose hair, keep personal items clear of preparation space and ask before photographing instructors or participants.",
    evidence:
      "BagelUp's current site describes regularly scheduled public weekend classes in which participants roll, boil and bake their own bagels, eat a meal and leave with at least six bagels and a recipe. It also gives the company's account of its connection to New York BagelFest and its founding. These are first-party descriptions. EA has not attended, assessed instruction, inspected the venue or verified a particular date, instructor, ingredient list or cross-contact control.",
    duration: "Confirm the current session length when choosing a live date",
    participation: "Hands-on bagel making, baking and a shared meal",
    access:
      "Use BagelUp's public class schedule and its live booking route. Check the exact location because the main site describes the format but does not establish one permanent public-class address. Confirm price, inclusions, cancellation terms, age guidance and dietary arrangements before paying. Private experiences are a different offer. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "BagelUp: public classes and current format",
        url: "https://www.bagelup.com/",
        note: "First-party description of weekend public classes, hands-on rolling, boiling and baking, the meal, take-home bagels and the current booking route.",
      },
      {
        title: "BagelUp: company and bagel-culture context",
        url: "https://www.bagelup.com/story",
        note: "The company's own account of its founders, New York BagelFest and the visitor programme. It is useful for provenance, not independent quality assessment.",
      },
    ]),
  },
  {
    id: "new-york-brooklyn-seltzer-museum",
    slug: "follow-the-fizz-through-a-working-factory",
    title: "Follow the fizz through a working factory",
    summary:
      "Enter an active Brooklyn seltzer works where returnable glass siphons, century-old machinery and a small museum share the production floor.",
    field: "work",
    place: "New York City",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    status: "public_guide",
    demo: false,
    ...guideImage("new-york-brooklyn-seltzer-museum"),
    kernel:
      "Book a public Museum and Factory Tour at the Brooklyn Seltzer Museum in Cypress Hills. Begin with the heavy glass siphon, then trace what has to happen before it returns full. Look for washing, filling, pressurising, testing, repair and delivery as parts of one system. The museum sits inside Gomberg Seltzer Works, so the machinery is not simply an industrial backdrop. Ask which pieces still work, which have changed and what a reusable bottle demands from producer and customer. Taste only within the format offered on the day.",
    rootedness:
      "Seltzer is both a drink and a delivery practice with a particular New York social history. The museum describes itself as North America's only seltzer museum and factory tour and connects its displays to an active family seltzer works. EA does not independently certify that superlative, the age of every machine or the completeness of the story. The value lies in a public encounter with production, repair and return that still occupies the same room as interpretation.",
    shift:
      "From treating carbonation as a button on a machine to seeing the bottles, pressure, maintenance and routes that keep a local system alive.",
    humanReturn:
      "Look at the next returnable container as infrastructure. Ask who cleans it, who repairs it and what has to happen before it comes back.",
    responsibility:
      "This is an active works with machinery, tools, pressurised vessels and working staff. Stay with the tour, respect every marked boundary and never touch equipment or siphons unless invited. Keep children close. Confirm accessibility and the current bathroom notice before booking if either affects the visit. Ask before photographing people or production details. If tasting is offered, disclose allergies and dietary needs and do not assume an egg cream contains egg or that its name establishes the ingredients used that day.",
    evidence:
      "The museum's current visit page states that admission is by ticket during limited hours, usually Friday at 1 pm, and that the museum is inside an active seltzer works. It lists current public pricing, accessibility details and an 80-minute public tour on the home page. The museum's about page connects the Museum and Factory Tour to Brooklyn Seltzer Boys and Gomberg Seltzer Works. These are first-party descriptions. EA has not taken the tour, inspected the machinery or verified availability for a particular Friday.",
    duration: "About 80 minutes for the listed public tour",
    participation:
      "Guided museum and working-factory visit with any tasting controlled by the host",
    access:
      "Book only a date shown on the museum's live public schedule. Current availability is listed for most Fridays at 1 pm, with occasional additional times and weekends. The museum is at 474 Hemlock Street in Cypress Hills, not central Brooklyn. Confirm the date, price, arrival instructions, accessibility, bathroom status and cancellation terms before travel. Private and self-guided dates are separate offers. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Brooklyn Seltzer Museum: plan your visit",
        url: "https://brooklynseltzermuseum.org/plan-your-visit/",
        note: "First-party current hours, public admission, ticket-only access, active-works setting, accessibility notice, address and booking route.",
      },
      {
        title: "Brooklyn Seltzer Museum: current tour overview",
        url: "https://brooklynseltzermuseum.org/",
        note: "First-party listing of the public Museum and Factory Tour, typical Friday timing, stated 80-minute duration and current public pricing.",
      },
      {
        title: "Brooklyn Seltzer Museum: about the works",
        url: "https://brooklynseltzermuseum.org/about-us/",
        note: "The museum's account of its relationship with Brooklyn Seltzer Boys and Gomberg Seltzer Works, and of the production, science and cultural scope of the tour.",
      },
    ]),
  },
  {
    id: "new-york-ellis-island-hard-hat",
    slug: "open-the-other-side-of-ellis-island",
    title: "Open the other side of Ellis Island",
    summary:
      "Cross from the familiar immigration museum into the unrestored hospital complex, where care, exclusion, preservation and JR's archival figures occupy the same rooms.",
    field: "witness",
    place: "New York City",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    status: "public_guide",
    demo: false,
    ...guideImage("new-york-ellis-island-hard-hat"),
    kernel:
      "Take Save Ellis Island's 90-minute Hard Hat Tour only after allowing enough time for ferry security and arrival. The guided route enters selected buildings on the island's south side, including wards and service spaces that ordinary admission does not open. Let the hospital complicate the better-known arrival story. Medical care, inspection, detention, exclusion and hope were present together. JR's Unframed installation places enlarged archival images inside the unrestored rooms, but the people represented should remain more important than the dramatic decay.",
    rootedness:
      "Save Ellis Island is the National Park Service partner responsible for stabilising and preserving the 29 unrestored buildings on the south side. It opened selected hospital spaces to public tours in 2014. The complex treated people who arrived with medical conditions, while immigration decisions still shaped whether they could enter the United States. EA does not turn that history into a ghost story, promise access beyond the escorted route or use the hard hat as adventure branding. The experience matters because a protected public programme opens a difficult part of a familiar site with interpretation.",
    shift:
      "From seeing Ellis Island only as an arrival hall to confronting the systems of care and exclusion on its other side.",
    humanReturn:
      "When a landmark tells a national story, ask which rooms and people sit outside its most repeated image.",
    responsibility:
      "The current tour requires closed-toe shoes and a hard hat supplied on site. It covers about 1.5 miles, includes uneven surfaces and stairs, and is not accessible to wheelchairs, walkers or powered scooters under the published FAQ. Minimum age is 10. Stay with the guide at all times and never enter closed spaces independently. Dress for unheated and uncooled interiors, keep distance from fragile surfaces and follow all photography instructions. Treat the medical and migration histories with care. Avoid staged poses that turn former wards or the people represented in archival images into scenery.",
    evidence:
      "Save Ellis Island's current tour page lists six daily 90-minute tours, a public ticket route, a separate ferry requirement and minimum age of 10. Its FAQ describes the escorted route, closed-toe footwear, hard hats, uneven surfaces, stairs and significant mobility barriers. The organisation identifies itself as the National Park Service partner for the south-side buildings. These are first-party descriptions. EA has not taken the tour, assessed interpretation or safety, or verified ferry and tour capacity for a specific date.",
    duration:
      "90 minutes on site, plus ferry travel, security and waiting time",
    participation:
      "Escorted walking tour through selected unrestored hospital buildings",
    access:
      "Buy the Hard Hat Tour through Save Ellis Island's current ticket route and purchase the required Statue City Cruises ferry ticket separately. The operator currently recommends the 9 am ferry and asks guests to reach the island at least 30 minutes before the tour. Confirm the live schedule, ferry departure, security allowance, footwear, age rule and mobility requirements before paying. Ordinary Ellis Island admission does not include south-side access. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Save Ellis Island: current Hard Hat Tour",
        url: "https://saveellisisland.org/tour/",
        note: "First-party current tour length, daily schedule, public ticket route, separate ferry requirement, minimum age and description of the hospital complex.",
      },
      {
        title: "Save Ellis Island: Hard Hat Tour FAQ",
        url: "https://saveellisisland.org/tour/faq/",
        note: "First-party route, footwear, hard-hat, distance, stairs, mobility, weather, language, escort and arrival constraints for planning the visit.",
      },
      {
        title: "Save Ellis Island: organisation and preservation role",
        url: "https://saveellisisland.org/about/",
        note: "First-party account of the organisation's National Park Service partnership, the 2014 public opening and the preservation purpose supported by the tours.",
      },
    ]),
  },
];
