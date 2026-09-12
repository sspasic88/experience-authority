/**
 * The publication record for every guide photograph. Keep this deliberately
 * separate from guide evidence: a photograph can set an editorial tone but
 * never proves that EA attended, assessed or endorses the named experience.
 */
export type GuideMedia = {
  guideId: string;
  src: string;
  alt: string;
  title: string;
  photographer: string;
  sourceUrl: string;
  licenseName: string;
  licenseUrl: string;
  rightsCheckedOn: string;
  depiction: string;
};

export const publicGuideMedia: readonly GuideMedia[] = [
  {
    guideId: "venice-voga",
    src: "/images/guides/venetian-standing-rowing.jpg",
    alt: "Four standing rowers practising Venetian rowing on the lagoon in evening light.",
    title: "Evening row 2",
    photographer: "Tony Hisgett",
    sourceUrl: "https://www.flickr.com/photos/hisgett/7263217180/",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Venetian standing rowing, photographed in Venice in 2012. Activity context, not a Row Venice lesson or an EA visit.",
  },
  {
    guideId: "luang-prabang-natural-dye",
    src: "/images/guides/laos-natural-dye-materials.jpg",
    alt: "Natural dye materials and coloured yarn samples arranged in baskets in Laos.",
    title: "P1070328 — Laos. Natural dyes for weaving.",
    photographer: "lin padgham",
    sourceUrl: "https://www.flickr.com/photos/linpadgham/8209020390/",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Natural dye materials photographed in Laos in 2012. Craft context; the source does not identify this as Ock Pop Tok's class or premises.",
  },
  {
    guideId: "reykjavik-sundholl",
    src: "/images/guides/sundholl-reykjavik-exterior.jpg",
    alt: "The white facade and entrance of Sundhöll Reykjavíkur swimming pool in Reykjavík.",
    title: "Sundhöll Reykjavíkur 1.jpg",
    photographer: "Akigka",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sundh%C3%B6ll_Reykjav%C3%ADkur_1.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "The actual Sundhöll Reykjavíkur building, photographed in 2022. Exterior view, not a photograph of the bathing experience or an EA visit.",
  },
  {
    guideId: "vienna-heuriger",
    src: "/images/guides/mayer-pfarrplatz-courtyard.jpg",
    alt: "Green tables beneath a grapevine canopy in the courtyard of Mayer am Pfarrplatz, Vienna.",
    title: "Heuriger Mayer am Pfarrplatz 3.jpg",
    photographer: "Geolina163",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Heuriger_Mayer_am_Pfarrplatz_3.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "The actual courtyard of Mayer am Pfarrplatz, photographed in 2025. It does not document an EA visit.",
  },
  {
    guideId: "grenada-belmont-cacao",
    src: "/images/guides/belmont-cocoa-drying.jpg",
    alt: "Cocoa beans spread across raised drying tables beneath a translucent roof in Grenada.",
    title: "DSC_0364 — Grenada Chocolate Company",
    photographer: "Tom Coady",
    sourceUrl: "https://www.flickr.com/photos/tomcoady/17060376307/",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Cocoa drying in Grenada, photographed in 2015 and tagged Belmont Estate by the photographer. The original caption is “Grenada Chocolate Company”. Historical process context, not a record of today's tour or an EA visit.",
  },
  {
    guideId: "tampere-rajaportti",
    src: "/images/guides/make-room-in-the-steam.jpg",
    alt: "Rajaportti Sauna in Tampere on a snowy day.",
    title: "Rajaportin sauna 2017-03-04 15.01.56.jpg",
    photographer: "Jkangasv",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Rajaportin_sauna_2017-03-04_15.01.56.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "A real exterior photograph of Rajaportti Sauna, taken in 2017. It does not document an EA visit or endorse Experience Authority.",
  },
  {
    guideId: "kumano-daimon-zaka",
    src: "/images/guides/leave-room-for-devotion.jpg",
    alt: "Stone steps leading through woodland on the Daimon-zaka pilgrim route.",
    title: "A set of steps leading up to a shrine in the woods",
    photographer: "Kieran",
    sourceUrl:
      "https://unsplash.com/photos/a-set-of-steps-leading-up-to-a-shrine-in-the-woods-8Dp5RmOWkvo",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "A real photograph of the Daimon-zaka pilgrim route. It does not document EA participation, worship or special access.",
  },
];

export function guideMediaFor(guideId: string) {
  return publicGuideMedia.find((media) => media.guideId === guideId);
}

export function guideImage(guideId: string) {
  const media = guideMediaFor(guideId);
  if (!media) throw new Error(`Missing media record for ${guideId}`);
  return { image: media.src, imageAlt: media.alt };
}
