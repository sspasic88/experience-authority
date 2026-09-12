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
    src: "/images/guides/venice-through-an-oar.jpg",
    alt: "A gondola moving through a narrow canal in Venice.",
    title: "Gondola navigating a narrow canal in Venice",
    photographer: "VFP Fineart",
    sourceUrl:
      "https://unsplash.com/photos/gondola-navigating-a-narrow-canal-in-venice-DSeV8SCZBHs",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Illustrative view of Venice only. It does not depict a Row Venice lesson or document EA participation.",
  },
  {
    guideId: "luang-prabang-natural-dye",
    src: "/images/guides/colour-before-cloth.jpg",
    alt: "A traditional loom used for weaving in Laos.",
    title: "A close up of a weaving machine with long white hair",
    photographer: "Marco J Haenssgen",
    sourceUrl:
      "https://unsplash.com/photos/a-close-up-of-a-weaving-machine-with-long-white-hair-MDXwphHlpww",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Illustrative Lao weaving context only. It does not depict Ock Pop Tok's class or document EA participation.",
  },
  {
    guideId: "reykjavik-sundholl",
    src: "/images/guides/a-city-in-the-water.jpg",
    alt: "An outdoor pool looking towards mountains in Iceland.",
    title: "A pool with a view of a mountain range",
    photographer: "Bernd 📷 Dittrich",
    sourceUrl:
      "https://unsplash.com/photos/a-pool-with-a-view-of-a-mountain-range-7NKwh-4Xxxs",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Illustrative Icelandic water culture only. The photograph is in Húsavík, not Sundhöll Reykjavík, and does not document EA participation.",
  },
  {
    guideId: "vienna-heuriger",
    src: "/images/guides/the-vineyard-at-the-table.jpg",
    alt: "Rows of grapevines in a Vienna vineyard under a blue sky.",
    title: "Green grass field under blue sky during daytime",
    photographer: "Olga Mandel",
    sourceUrl:
      "https://unsplash.com/photos/green-grass-field-under-blue-sky-during-daytime-8xBn1atw8ew",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Illustrative Vienna vineyard view only. It does not depict Mayer am Pfarrplatz or document EA participation.",
  },
  {
    guideId: "grenada-belmont-cacao",
    src: "/images/guides/before-the-chocolate-bar.jpg",
    alt: "A cacao fruit growing on a tree.",
    title: "A fruit growing on a tree",
    photographer: "Andres Medina",
    sourceUrl: "https://unsplash.com/photos/fxqHlaNuYgM",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsCheckedOn: "2026-09-12",
    depiction:
      "Illustrative cacao context only. The photograph was made in Ecuador, not Belmont Estate, Grenada, and does not document EA participation.",
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
