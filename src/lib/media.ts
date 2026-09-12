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
  rightsBasis: "documented_license" | "official_source";
  rightsCheckedOn: string;
  visualReview: {
    outcome: "approved";
    checkedOn: string;
    rationale: string;
  };
  depiction: string;
};

export const publicGuideMedia: readonly GuideMedia[] = [
  {
    guideId: "oostduinkerke-horseback-shrimp",
    src: "/images/guides/oostduinkerke-horseback-shrimp.jpg",
    alt: "Three Oostduinkerke shrimp fishers in yellow rainwear ride basket-carrying horses through the North Sea shallows.",
    title: "The shrimp fishers of Oostduinkerke",
    photographer: "Dirk van Hove, Visit Flanders",
    sourceUrl: "https://www.visitflanders.com/en/stories/flanders-immaterial-cultural-heritage-always-impressive",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.visitflanders.com/en/stories/flanders-immaterial-cultural-heritage-always-impressive",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "The clear lateral composition keeps the working group, horses and water equally legible without isolating one person as spectacle.",
    },
    depiction:
      "Oostduinkerke shrimp fishers at work in the North Sea, photographed by Dirk van Hove and published by Visit Flanders. It is official regional context, not an EA visit or evidence of a particular demonstration date. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "denmark-black-sun-wadden",
    src: "/images/guides/denmark-black-sun.jpg",
    alt: "A vast murmuration of starlings bends across a pale evening sky above the wetland horizon of Denmark's Wadden Sea.",
    title: "Black Sun in the Tønder marsh",
    photographer: "Sandra Prudencio, National Park Vadehavet",
    sourceUrl: "https://eng.nationalparkvadehavet.dk/experience-the-wadden-sea/animal-and-bird-life/black-sun",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://eng.nationalparkvadehavet.dk/experience-the-wadden-sea/animal-and-bird-life/black-sun",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "The wide, low horizon leaves the flock as the dominant moving form while retaining the wetland that makes the phenomenon possible.",
    },
    depiction:
      "Black Sun in the Tønder marsh, photographed by Sandra Prudencio and published by National Park Vadehavet. The photograph depicts the natural phenomenon, not a specific Wadden Sea Centre tour or an EA visit. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "wadden-guided-mudflat-walk",
    src: "/images/guides/wadden-mudflat-walk.jpg",
    alt: "Small groups cross the reflective seabed of the Dutch Wadden Sea at low tide beneath a wide horizon.",
    title: "Mudflat walking on the Wadden Sea",
    photographer: "Visit Wadden, source credit CTOALA_20190827_071",
    sourceUrl: "https://www.visitwadden.nl/en/visit/wadlopen",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.visitwadden.nl/en/visit/wadlopen",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "The high viewpoint, open horizon and human scale make the temporary seabed legible without turning the walkers into spectacle.",
    },
    depiction:
      "Mudflat walkers on the exposed Dutch Wadden seabed, published by Visit Wadden with the source credit CTOALA_20190827_071. The page does not identify a named photographer. It is regional context, not an EA visit or evidence of a specific excursion. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "lofoten-skrei-museum",
    src: "/images/guides/lofoten-skrei-exhibition.jpg",
    alt: "Visitors move through the dark, blue-lit Otolith exhibition between three upright wooden boat forms at SKREI in Lofoten.",
    title: "SKREI main exhibition at The Otolith",
    photographer: "Kjell Ove Storvik, Museum Nord",
    sourceUrl: "https://www.museumnord.no/en/our-venues/skrei/",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.museumnord.no/en/our-venues/skrei/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Dark spatial depth, controlled blue light and the upright boat forms create a precise contemporary frame for the fishing story.",
    },
    depiction:
      "The Otolith main exhibition at SKREI in Kabelvåg, published by Museum Nord and credited to Kjell Ove Storvik. It is an official museum image, not an EA visit or proof of current exhibition condition. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "barcelona-castells-merce",
    src: "/images/guides/barcelona-castells.jpg",
    alt: "A Castellers de Barcelona tower rises above a packed arena, held by a broad base of red-shirted members.",
    title: "Castellers de Barcelona at the 2024 Concurs de Castells",
    photographer: "Castellers de Barcelona",
    sourceUrl: "https://castellersdebarcelona.cat/actualitat/actuacions",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://castellersdebarcelona.cat/actualitat/actuacions",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "The vertical composition makes mutual reliance immediately visible, with the team rather than a cityscape carrying the entire frame.",
    },
    depiction:
      "Castellers de Barcelona at the 2024 Concurs de Castells, published by the colla on its performances page. The page does not identify an individual photographer. It is official team imagery, not an EA visit or a record of the current Mercè programme. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "singapore-hawker-morning",
    src: "/images/guides/singapore-hawker-culture.jpg",
    alt: "Four diners share food at a bright Singapore hawker centre, with stalls and communal tables behind them.",
    title: "Hawker Culture",
    photographer: "National Environment Agency, Singapore",
    sourceUrl:
      "https://www.nea.gov.sg/our-services/hawker-management/programmes-and-grants/hawker-culture",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.nea.gov.sg/our-services/hawker-management/programmes-and-grants/hawker-culture",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Generous human scale, crisp documentary detail and a full view of shared dining make the setting immediately legible.",
    },
    depiction:
      "Diners at a Singapore hawker centre in an image published by the National Environment Agency. The page does not name an individual photographer or centre. It is place context only, not an EA visit or a recommendation of a named stall. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "budapest-fono-tanchaz",
    src: "/images/guides/budapest-fono-tanchaz.jpg",
    alt: "Musicians perform beside a busy dance floor at Fonó Budapest Music Hall, where people dance in warm evening light.",
    title: "Fonó dance gathering",
    photographer: "Fonó Budai Zeneház",
    sourceUrl: "https://www.fono.hu/?lang=hu&page=zenehaz",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.fono.hu/?lang=hu&page=zenehaz",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "A dynamic overhead composition links the musicians, the room and the moving floor without reducing anyone to spectacle.",
    },
    depiction:
      "A dance gathering at Fonó Budapest Music Hall, published by the venue. The page does not name an individual photographer. It is an official venue image, not an EA visit or a guarantee of a current programme. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "istanbul-hurrem-hammam",
    src: "/images/guides/istanbul-hurrem-hammam-interior.jpg",
    alt: "White marble bathing room beneath a high domed ceiling inside Istanbul's Hürrem Sultan Hamam.",
    title: "Hurrem Sultan Hamam, Roxelana Bath Interior",
    photographer: "Satayman",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Hurrem_Sultan_Hamam,_Roxelana_Bath_Interior.jpg",
    licenseName: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Architectural precision, restrained palette and strong vertical composition.",
    },
    depiction:
      "The restored interior of the actual Hürrem Sultan Hamam, photographed in 2011. It does not document a current bathing session or an EA visit.",
  },
  {
    guideId: "xochimilco-kalmekak-chinampa",
    src: "/images/guides/xochimilco-chinampa-trajinera.jpg",
    alt: "A boatman poles a traditional Xochimilco boat through golden mist at sunrise.",
    title: "Man on a Boat on a Foggy Morning in Mexico",
    photographer: "Fausto Hernández",
    sourceUrl:
      "https://www.pexels.com/photo/man-on-a-boat-on-a-foggy-morning-in-mexico-11491777/",
    licenseName: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Exceptional dawn light, clear local watercraft and a focused human scale.",
    },
    depiction:
      "A traditional passenger boat on the Xochimilco canals at dawn. Place and watercraft context only. It is not a Kalmekak tour, a chinampa activity or an EA visit.",
  },
  {
    guideId: "kyoto-camellia-tea",
    src: "/images/guides/kyoto-tea-preparation.jpg",
    alt: "A tea host works beside a steaming iron kettle in a softly lit Japanese room.",
    title: "Woman prepares traditional tea in a serene setting",
    photographer: "Rod Long",
    sourceUrl:
      "https://unsplash.com/photos/woman-prepares-traditional-tea-in-a-serene-setting--Sc01q9zBbw",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Controlled light, visible steam and a close view of skilled preparation.",
    },
    depiction:
      "Traditional tea preparation photographed in Japan. Cultural context only. The source does not identify the host or room as Camellia Flower Teahouse in Kyoto. Not an EA visit.",
  },
  {
    guideId: "tsaghkunk-lavash",
    src: "/images/guides/tsaghkunk-lavash-baking.jpg",
    alt: "Lavash dough being rolled beside a floor-set tonir oven inside Tsaghkunk’s Glkhatun, beneath a shaft of daylight.",
    title: "Lavash baking",
    photographer: "AlexanderChatik",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lavash_baking.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "A dramatic shaft of daylight turns a real working room into a memorable scene.",
    },
    depiction:
      "Lavash preparation at Tsaghkunk Restaurant & Glkhatun, identified by the photographer and taken in 2022. A historical view of the actual location, not proof of today’s programme or an EA visit.",
  },
  {
    guideId: "venice-voga",
    src: "/images/guides/venetian-standing-rowing.jpg",
    alt: "Four standing rowers practising Venetian rowing on the lagoon in evening light.",
    title: "Evening row 2",
    photographer: "Tony Hisgett",
    sourceUrl: "https://www.flickr.com/photos/hisgett/7263217180/",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Quiet evening light, a clean horizon and the rowing movement held at human scale.",
    },
    depiction:
      "Venetian standing rowing, photographed in Venice in 2012. Activity context, not a Row Venice lesson or an EA visit.",
  },
  {
    guideId: "luang-prabang-natural-dye",
    src: "/images/guides/laos-natural-dye-materials.jpg",
    alt: "Fine white silk threads fall through a traditional wooden loom in Laos.",
    title: "A close up of a weaving machine with long white hair",
    photographer: "Marco J Haenssgen",
    sourceUrl:
      "https://unsplash.com/photos/a-close-up-of-a-weaving-machine-with-long-white-hair-MDXwphHlpww",
    licenseName: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Tactile detail, deliberate depth of field and a restrained material palette.",
    },
    depiction:
      "A traditional loom photographed in Laos. Textile context only. It does not depict natural dyeing, Ock Pop Tok's class or its premises.",
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
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Lush overhead canopy, bold place-specific colour and a strong vertical frame.",
    },
    depiction:
      "The actual courtyard of Mayer am Pfarrplatz, photographed in 2025. It does not document an EA visit.",
  },
  {
    guideId: "grenada-belmont-cacao",
    src: "/images/guides/belmont-cocoa-drying.jpg",
    alt: "Cocoa beans spread across raised drying tables beneath a translucent roof in Grenada.",
    title: "DSC_0364, Grenada Chocolate Company",
    photographer: "Tom Coady",
    sourceUrl: "https://www.flickr.com/photos/tomcoady/17060376307/",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "A rigorous central perspective makes the cacao process immediately legible.",
    },
    depiction:
      "Cocoa drying in Grenada, photographed in 2015 and tagged Belmont Estate by the photographer. The original caption is “Grenada Chocolate Company”. Historical process context, not a record of today's tour or an EA visit.",
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
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Layered depth, rain-dark stone and subdued forest light create a strong sense of entry.",
    },
    depiction:
      "A real photograph of the Daimon-zaka pilgrim route. It does not document EA participation, worship or special access.",
  },
  {
    guideId: "tampere-rajaportti",
    src: "/images/guides/rajaportti-winter.jpg",
    alt: "Rajaportti Sauna glows beside a snowy Tampere street while bathers cool in the courtyard at night.",
    title: "Rajaportti sauna, outside overview in winter",
    photographer: "Alexander Lembke",
    sourceUrl:
      "https://visittampere.fi/en/destination/rajaportti-sauna-oldest-public-sauna-in-finland/",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://visittampere.fi/en/destination/rajaportti-sauna-oldest-public-sauna-in-finland/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Snow, warm windows and the visible cooling courtyard make the public ritual legible at a glance.",
    },
    depiction:
      "The actual Rajaportti Sauna and cooling courtyard in winter. Visit Tampere identifies Alexander Lembke as the photographer. It is an official destination image, not an EA visit. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "reykjavik-sundholl",
    src: "/images/guides/reykjavik-sundholl-pool.jpg",
    alt: "Outdoor swimming lanes and hot pools at Sundhöll Reykjavík beneath the evening sun.",
    title: "Overview of the lower outdoor area at Sundhöll",
    photographer: "City of Reykjavík",
    sourceUrl: "https://reykjavik.is/en/sundholl-reykjavik-pool",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://reykjavik.is/en/sundholl-reykjavik-pool",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Clear geometry, bright water and everyday bathers present the civic pool without spectacle.",
    },
    depiction:
      "The actual outdoor area of Sundhöll Reykjavík Pool, published by the City of Reykjavík. The page does not name an individual photographer. It is not an EA visit. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "doolin-gus-oconnors-session",
    src: "/images/guides/doolin-fiddlers.jpg",
    alt: "Two fiddle players concentrate beside a candle during a traditional music session at Gus O'Connor's in Doolin.",
    title: "Fiddle session at Gus O'Connor's Pub",
    photographer: "Gus O'Connor's Pub",
    sourceUrl:
      "https://www.gusoconnorsdoolin.com/traditional-irish-music",
    licenseName: "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.gusoconnorsdoolin.com/traditional-irish-music",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale: "Intimate framing, warm natural light and concentrated musicians convey listening rather than performance spectacle.",
    },
    depiction:
      "A fiddle session at the actual pub, published on Gus O'Connor's current music page. The page does not name an individual photographer. It is not an EA visit or a guarantee of a particular line-up. Reuse rights have not been independently cleared.",
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
