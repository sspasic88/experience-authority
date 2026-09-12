import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

/** Familiar public occasions that passed the same desk-guide gate as every other guide. */
export const guideBatch05: PublicExperience[] = [
  {
    id: "barcelona-castells-merce",
    slug: "the-weight-of-the-tower",
    title: "The weight of the tower",
    summary:
      "Watch a listed castells performance in Barcelona, where a human tower is made in public by people who know the work.",
    field: "witness",
    place: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    status: "public_guide",
    demo: false,
    ...guideImage("barcelona-castells-merce"),
    kernel:
      "Choose a public performance from the Coordinadora de Colles Castelleres de Catalunya calendar and use the listing for its place and time. Barcelona’s September calendar includes the local Mercè diada at Plaça Sant Jaume, but any particular event can change or be cancelled. Arrive early enough to stand beyond the working space. Let the group’s own rhythm determine how close you go, where you stand and when you photograph.",
    rootedness:
      "UNESCO describes castells as a tradition passed between generations through the colles that build them. The tower is not a backdrop for an individual visitor’s bravery or a metaphor that belongs to anyone who sees it once. Its force comes from coordination, training, care and the people who take responsibility for each level.",
    shift:
      "From chasing a dramatic image to noticing how many people make one visible moment possible.",
    humanReturn:
      "You may leave with a clearer sense that public spectacle can still be work shared by a community. That is an editorial possibility, not a promised effect or a claim to understanding the practice.",
    responsibility:
      "Follow barriers, steward directions and any local event guidance. Do not enter the pinya, block routes or use a drone. Photograph thoughtfully and keep children, performers and other spectators out of a forced frame. If the gathering is busy, choose a quieter viewing position rather than pressing toward the centre. Confirm weather, time, accessibility and any crowd arrangements directly before going.",
    evidence:
      "The Coordinadora’s public calendar currently lists Barcelona castells performances, including the 2026 Mercè diada, with location and time information. UNESCO provides practice-level context. EA has not attended a performance, assessed crowd conditions, verified a specific team or determined whether a visitor can participate. The photograph is published by Castellers de Barcelona and shows their 2024 competition appearance. It is visual context, not an EA visit or a promise of a current line-up.",
    duration:
      "Event-specific. Check the current calendar entry for the announced time and local arrangements",
    participation:
      "Public witnessing only. Joining a colla or its working space is not implied",
    access:
      "Public programme subject to the organiser’s current listing and on-site direction. Use the castells calendar before travel. EA does not sell tickets, arrange access or receive commission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-09-12",
      reviewBy: "2026-12-11",
      accessUrl: "https://castellscat.cat/en/schedule?a=2026&m=09&p=189",
      sources: [
        {
          title: "Coordinadora de Colles Castelleres de Catalunya: public schedule",
          url: "https://castellscat.cat/en/schedule?a=2026&m=09&p=189",
          note: "Current September 2026 calendar listing public Barcelona performances, including times, locations and participating colles. It remains the visitor’s source for changes or cancellation.",
        },
        {
          title: "UNESCO: Human towers",
          url: "https://ich.unesco.org/en/RL/human-towers-00364",
          note: "Practice-level context on castells as living intangible heritage transmitted through local groups. It does not validate a particular event or visitor access.",
        },
      ],
    },
  },
];
