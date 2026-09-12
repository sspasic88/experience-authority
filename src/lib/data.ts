import "server-only";
import {
  territories,
  regionsForCountry,
  type PublicExperience,
} from "./catalog";
import { isDemoEnabled, toPublicExperience } from "./publication";
import { publicGuides } from "./public-guides";

export const demoMode = isDemoEnabled(process.env);
const evidence =
  "Fictional concept for interface testing. No local verification, holder consent, availability or editorial selection is claimed. Photographs are illustrative stock images, not evidence of this experience.";
type Seed = Pick<
  PublicExperience,
  | "slug"
  | "title"
  | "summary"
  | "field"
  | "place"
  | "country"
  | "countrySlug"
  | "regionSlug"
  | "status"
  | "image"
  | "imageAlt"
  | "shift"
>;
const seeds: Seed[] = [
  {
    slug: "learning-the-language-of-clay",
    title: "Learning the language of clay",
    summary:
      "An imagined encounter with a material, a maker and the knowledge held in a pair of hands.",
    field: "make",
    place: "Alentejo",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "alentejo",
    status: "selected_context_required",
    image: "/images/pottery.jpg",
    imageAlt:
      "Illustrative photograph of a potter shaping clay. It does not show this demo experience.",
    shift:
      "From seeing a finished object to understanding the decisions held inside it.",
  },
  {
    slug: "before-the-harbour-wakes",
    title: "Before the harbour wakes",
    summary:
      "A concept about listening to the working rhythms of a coast, beyond the postcard.",
    field: "work",
    place: "Dalmatia",
    country: "Croatia",
    countrySlug: "croatia",
    regionSlug: "dalmatia",
    status: "selected_context_required",
    image: "/images/harbour.jpg",
    imageAlt:
      "Illustrative photograph of a boat in Korčula harbour. No visit is offered.",
    shift: "From a harbour as a view to a harbour as a place of everyday work.",
  },
  {
    slug: "what-the-season-brings",
    title: "What the season brings",
    summary:
      "A demonstration story about understanding food through the questions asked at a market.",
    field: "taste",
    place: "Emilia-Romagna",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "emilia-romagna",
    status: "selected_open",
    image: "/images/market.jpg",
    imageAlt:
      "Illustrative produce photograph taken at Pike Place Market, Seattle. It does not show the named territory.",
    shift:
      "From choosing an ingredient to noticing a season, a landscape and someone’s work.",
  },
  {
    slug: "a-different-kind-of-quiet",
    title: "A different kind of quiet",
    summary:
      "A concept for practising attention in a green space, without promising transformation.",
    field: "restore",
    place: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    status: "selected_open",
    image: "/images/forest.jpg",
    imageAlt:
      "Illustrative photograph of the Meiji Shrine forest. It does not show a verified activity.",
    shift:
      "From passing through a green space to noticing how it changes your pace.",
  },
  {
    slug: "reading-a-living-landscape",
    title: "Reading a living landscape",
    summary:
      "An imagined introduction to noticing small signs of life and human care in a landscape.",
    field: "nature",
    place: "Julian Alps",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "julian-alps",
    status: "selected_context_required",
    image: null,
    imageAlt: "",
    shift: "From scenery to a living system, with limits as well as beauty.",
  },
  {
    slug: "a-table-without-a-script",
    title: "A table without a script",
    summary:
      "A fictional shared-table concept that puts consent and reciprocity before access.",
    field: "gather",
    place: "Emilia-Romagna",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "emilia-romagna",
    status: "paused",
    image: "/images/market.jpg",
    imageAlt:
      "Illustrative market produce from Seattle. It does not show a hosted meal.",
    shift: "From being served to being present with others.",
  },
  {
    slug: "learning-to-look-again",
    title: "Learning to look again",
    summary:
      "A demonstration of learning through close observation, questions and patient repetition.",
    field: "learn",
    place: "Alentejo",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "alentejo",
    status: "selected_context_required",
    image: "/images/pottery.jpg",
    imageAlt:
      "Illustrative pottery photograph, unrelated to a verified workshop.",
    shift:
      "From looking for an answer to learning how to ask a better question.",
  },
  {
    slug: "some-stories-need-distance",
    title: "Some stories need distance",
    summary:
      "An example of how a story can remain visible without turning it into an invitation.",
    field: "witness",
    place: "Location withheld",
    country: "Not disclosed",
    countrySlug: "",
    regionSlug: "",
    status: "protected_visibility",
    image: null,
    imageAlt: "",
    shift: "From assuming access to understanding the value of a boundary.",
  },
];

function makeDemo(seed: Seed): PublicExperience {
  return {
    ...seed,
    id: seed.slug,
    demo: true,
    evidence,
    duration: "Not verified",
    participation:
      seed.status === "protected_visibility"
        ? "No access offered"
        : "Not yet assessed",
    kernel: seed.summary,
    rootedness:
      "A published entry must explain why this experience belongs to its place and whose knowledge makes it possible. This demonstration has not passed that review.",
    humanReturn:
      "A possibility, not a promise: a more attentive relationship with the people, practices and places you encounter.",
    responsibility:
      seed.status === "protected_visibility"
        ? "No directions, contact details or access requests are provided. Respect the boundary. Do not try to identify or locate the people behind a protected story."
        : "Do not use this demo to plan a visit. Real access requires current information, consent and an understanding of local expectations.",
    access:
      seed.status === "paused"
        ? "This example illustrates paused access. No booking or contact is available."
        : "This is a design demonstration. No visit, booking, contact or availability is offered.",
  };
}
export function getExperiences(): PublicExperience[] {
  return (demoMode ? seeds.map(makeDemo) : publicGuides).flatMap((p) => {
    const dto = toPublicExperience({
      id: p.id,
      status: p.status,
      publicCopy: p,
      protectedPublicCopy: p.status === "protected_visibility" ? p : undefined,
    });
    return dto ? [dto] : [];
  });
}
export function getExperience(slug: string) {
  return getExperiences().find((p) => p.slug === slug);
}
export function getTerritories() {
  const items = getExperiences();
  return territories
    .filter((t) => items.some((item) => item.countrySlug === t.slug))
    .map((t) =>
      demoMode && t.slug === "italy"
        ? {
            ...t,
            region: "emilia-romagna",
            regionName: "Emilia-Romagna",
            intro:
              "Food knowledge and shared tables: a fictional research direction.",
          }
        : demoMode && t.slug === "japan"
          ? {
              ...t,
              region: "tokyo",
              regionName: "Tokyo",
              intro:
                "A starting point for looking more closely at quiet spaces and everyday attention.",
              image: "/images/forest.jpg",
            }
          : t,
    )
    .map((t) => ({ ...t, regions: regionsForCountry(t.slug, items) }));
}
