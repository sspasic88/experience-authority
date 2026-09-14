/**
 * The publication record for every guide photograph. Keep this deliberately
 * separate from guide evidence: a photograph can set an editorial tone but
 * never proves that EA attended, assessed or endorses the named experience.
 */
import { mediaBatch14 } from "./media-batch-14";
import { mediaBatch15 } from "./media-batch-15";
import { mediaBatch16 } from "./media-batch-16";
import { mediaBatch17 } from "./media-batch-17";
import { mediaBatch18 } from "./media-batch-18";
import { mediaBatch19 } from "./media-batch-19";
import { mediaBatch20 } from "./media-batch-20";
import { mediaBatch21 } from "./media-batch-21";
import { mediaBatch22 } from "./media-batch-22";
import { mediaBatch23 } from "./media-batch-23";
import { mediaBatch24 } from "./media-batch-24";
import { mediaBatch25 } from "./media-batch-25";
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
  ...mediaBatch25,
  ...mediaBatch24,
  ...mediaBatch23,
  ...mediaBatch22,
  ...mediaBatch21,
  ...mediaBatch20,
  ...mediaBatch19,
  ...mediaBatch18,
  ...mediaBatch17,
  ...mediaBatch16,
  ...mediaBatch15,
  ...mediaBatch14,
  {
    guideId: "busan-spa-land-jjimjilbang",
    src: "/images/guides/busan-spa-land.jpg",
    alt: "Warm timber beams and stone walls frame an empty rest room with reclining seats at Spa Land in Busan.",
    title: "Spa Land Centum City rest room",
    photographer: "Visit Busan. Individual photographer not named",
    sourceUrl:
      "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=1753",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=1753",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The architectural frame is warm, quiet and precise at card scale. It shows a real shared rest space without intruding on bathing, changing or identifiable visitors.",
    },
    depiction:
      "A rest room at Spa Land Centum City, published by Visit Busan. It does not depict bathing areas, current occupancy, hygiene, accessibility or an EA visit. The source does not name an individual photographer. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "kuopio-jatkankamppa-smoke-sauna",
    src: "/images/guides/kuopio-smoke-sauna.webp",
    alt: "Two adults wrapped in grey towels sit outside a timber smoke sauna in bright winter snow near Kuopio.",
    title: "Winter outside Jätkänkämppä smoke sauna",
    photographer: "Rauhalahti. Individual photographer not named",
    sourceUrl: "https://www.rauhalahti.fi/en/jatkankamppa/",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.rauhalahti.fi/en/jatkankamppa/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Snow, bare timber, towels and the relaxed pause outside make the change of temperature tangible. The wide frame remains legible without showing an intimate bathing space.",
    },
    depiction:
      "An official Rauhalahti promotional photograph outside Jätkänkämppä smoke sauna in winter. It does not prove current snow, water conditions, the Tuesday programme or an EA visit. The source does not name the people or photographer. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "fez-clay-to-mosaic",
    src: "/images/guides/fez-zellige-workshop.jpg",
    alt: "Four zellige artisans cut coloured tile pieces by hand beside finished geometric mosaic panels in a Fez workshop.",
    title: "Zellige artisans at work in Fez",
    photographer: "Dan Lundberg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Zellige_factory-24116015119.jpg",
    licenseName: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The strong vertical frame holds tools, hands, fragments and finished pattern together. It makes the labour behind the surface visible without pretending to show the visitor class.",
    },
    depiction:
      "Zellige artisans at the Serghini Maitre Potier et Zellige Fassi factory in Fez, photographed on 18 November 2015. It does not depict the Palais de Fès visitor programme, its instructors or an EA visit. Resized for web delivery and available under CC BY-SA 2.0.",
  },
  {
    guideId: "montevideo-public-candombe-workshop",
    src: "/images/guides/montevideo-candombe.jpg",
    alt: "A candombe drum line in black, gold and orange moves through the night streets of Montevideo during Las Llamadas.",
    title: "Las Llamadas in Montevideo",
    photographer: "Jimmy Baikovicius",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Las_Llamadas_-_Carnaval_2011_-_110203-0690-jikatu.jpg",
    licenseName: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The diagonal drum line, close working hands and night street context carry real movement and collective timing. The depiction boundary keeps it separate from the smaller municipal workshop.",
    },
    depiction:
      "A candombe drum line during Las Llamadas in Montevideo in 2011. It does not depict the current municipal percussion workshop, its older-adult participants or an EA visit. Cropped responsively for layout and available under CC BY-SA 2.0.",
  },
  {
    guideId: "istanbul-sehir-hatlari-ferry",
    src: "/images/guides/istanbul-city-ferry.jpg",
    alt: "A white Şehir Hatları passenger ferry crosses the Bosphorus beneath a broad peach-coloured sunset sky.",
    title: "Istanbul ferry at sunset on the Bosphorus",
    photographer: "Tarik Kaan Muslu",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Istanbul_ferry_at_sunset_on_the_Bosphorus_-_Tarik_Kaan_Muslu.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The generous water and sky give the working ferry uncommon calm while the visible vessel and shoreline keep the image specific to Istanbul rather than generic cruise imagery.",
    },
    depiction:
      "A Şehir Hatları passenger ferry on the Bosphorus at sunset. It does not establish the current route, timetable, vessel, weather or an EA visit. Resized for web delivery and available under CC BY-SA 4.0.",
  },
  {
    guideId: "mexico-city-muevete-en-bici",
    src: "/images/guides/mexico-city-sunday-ride.jpg",
    alt: "Cyclists move along car-free Paseo de la Reforma toward the Angel of Independence on a bright Sunday morning.",
    title: "Paseo Dominical Muévete en Bici on Paseo de la Reforma",
    photographer: "B.jars",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Paseo_dominical_en_bici_en_Paseo_de_la_Reforma_01.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The rider-level perspective makes the public route immediately usable and keeps the Angel of Independence as a recognisable orientation point without reducing the experience to a landmark.",
    },
    depiction:
      "The Muévete en Bici Sunday ride on Paseo de la Reforma in Mexico City, photographed on 20 March 2022. It does not establish the current route, crowd, weather or an EA visit. Resized for web delivery and available under CC BY-SA 4.0.",
  },
  {
    guideId: "edinburgh-public-ceilidh",
    src: "/images/guides/edinburgh-public-ceilidh.jpg",
    alt: "Dancers join hands across the floor of an ornate Edinburgh hall during a crowded public ceilidh.",
    title: "Public ceilidh in Edinburgh",
    photographer: "HotScotch Ceilidh Band. Individual photographer not named",
    sourceUrl: "https://www.myceilidh.co.uk/hotscotchceilidhtickets",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.myceilidh.co.uk/hotscotchceilidhtickets",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The tall documentary frame keeps the whole social mechanism visible: linked hands, mixed experience levels, active floor and the civic scale of the hall.",
    },
    depiction:
      "A public ceilidh in Edinburgh, published by HotScotch Ceilidh Band. It is not proof of the line-up, access or conditions at any future date, and it is not an EA visit. The source does not name an individual photographer. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "malta-village-festa",
    src: "/images/guides/malta-village-festa.jpg",
    alt: "Ornate red, blue and gold festa banners frame an illuminated church dome above a narrow street in Birgu, Malta.",
    title: "Through the Window: dressing the streets for the festa",
    photographer: "Renata Apan",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Through_the_%22Window%22._The_story_behind_the_tradition_-_dressing_the_streets_for_the_festa.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The vertical view uses the decorations as a real street frame, with the illuminated dome beyond. It conveys place, preparation and evening atmosphere without collapsing the festa into fireworks alone.",
    },
    depiction:
      "Festa street decorations in Birgu, Malta, photographed on 28 August 2016. It does not depict a 2026 feast, a complete programme or an EA visit. The licensed source was resized for web delivery and remains available under CC BY-SA 4.0.",
  },
  {
    guideId: "oaxaca-mal-de-amor-mezcal",
    src: "/images/guides/oaxaca-mezcal-palenque.jpg",
    alt: "Steam rises from a broad copper vessel inside the working Mal de Amor mezcal palenque in Oaxaca.",
    title: "Steam and copper at Palenque Mal de Amor",
    photographer: "Mal de Amor. Individual photographer not named",
    sourceUrl: "https://www.maldeamor.com/",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.maldeamor.com/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Copper, vapour and a wet working surface give the process physical weight. The close frame avoids the generic agave-field shorthand and remains strong across wide and narrow crops.",
    },
    depiction:
      "A steaming copper process vessel at Palenque Mal de Amor, published in the operator's official gallery. It does not identify the exact production stage, worker or date, and is not proof of a future visit or an EA assessment. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "doha-embrace-coffee",
    src: "/images/guides/doha-coffee-ceremony.jpg",
    alt: "A Qatari woman speaks with a diverse visitor group in the bright courtyard of an old souq in Doha.",
    title: "Embrace Doha Cultural House",
    photographer: "Visit Qatar. Individual photographer not named",
    sourceUrl:
      "https://visitqatar.com/intl-en/things-to-do/art-culture/embrace-doha",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://visitqatar.com/intl-en/things-to-do/art-culture/embrace-doha",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The square editorial frame centres exchange rather than an isolated object, with clear host and visitor roles, a real place context and visible wheelchair inclusion.",
    },
    depiction:
      "An Embrace Doha group context published by Visit Qatar. It does not necessarily depict the Traditional Coffee Ceremony, its current host or an EA visit. The source does not name an individual photographer. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "salta-balderrama-pena",
    src: "/images/guides/salta-pena-folklorica.jpg",
    alt: "Three folk dancers with large drums perform in front of guitarists beneath a stormy sky in central Salta.",
    title: "Salta Ciudad de las Peñas",
    photographer: "Municipality of Salta. Individual photographer not named",
    sourceUrl:
      "https://prensa.municipalidadsalta.gob.ar/el-centro-vibro-al-ritmo-del-folclore-con-una-nueva-edicion-de-salta-ciudad-de-las-penas/",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://prensa.municipalidadsalta.gob.ar/el-centro-vibro-al-ritmo-del-folclore-con-una-nueva-edicion-de-salta-ciudad-de-las-penas/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The wide documentary frame keeps drums, dancers, musicians and the historic street together. It communicates the public force of Salta folklore without pretending to show a private or intimate venue moment.",
    },
    depiction:
      "A performance during the Municipality of Salta's public Salta Ciudad de las Peñas programme in January 2026. It provides city and performance context but does not depict Peña Boliche Balderrama, a current venue night or an EA visit. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "singapore-batik-tulis-workshop",
    src: "/images/guides/singapore-batik-tulis-workshop.jpg",
    alt: "A participant applies colour around the wax lines of a purple rose during a batik workshop in Singapore.",
    title: "Batik Tulis workshop in Singapore",
    photographer: "OZEL SG. Individual photographer not named",
    sourceUrl: "https://ozel.com.sg/pages/batik-tulis-workshop",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://ozel.com.sg/pages/batik-tulis-workshop",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The close vertical frame shows hands, colour and a wax-outlined cloth in active use. It communicates the actual making process more clearly than a posed group or a finished-product grid and remains legible in a tight crop.",
    },
    depiction:
      "A participant colouring a floral batik piece during a workshop, published in OZEL's official Batik Tulis Workshop gallery. The person and date are not identified. It is not an EA visit or an independent assessment of the session. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "singapore-coney-island-walk",
    src: "/images/guides/singapore-coney-island-walk.jpg",
    alt: "A pale gravel path runs between woodland and calm water on Singapore's Coney Island.",
    title: "Coney Island, Singapore",
    photographer: "LN9267",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Coney_Island_07-08-2025(10).jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The crisp 2025 landscape gives the route a clear forward line between shade and water. It is recognisably a walk rather than a generic wildlife close-up, includes no identifiable people and leaves enough quiet space for responsive editorial crops.",
    },
    depiction:
      "A path beside water on Coney Island in Singapore, photographed on 7 August 2025. It does not document the complete NParks route, a wildlife sighting or an EA visit. Cropped responsively for layout by Experience Authority.",
  },
  {
    guideId: "kyoto-marumasu-yuzen",
    src: "/images/guides/kyoto-yuzen-stencil-workshop.jpg",
    alt: "A warm-toned stencil is lifted above a blue, green and brown owl pattern during Yuzen dyeing.",
    title: "Kyoto Yuzen-dyed owl pattern",
    photographer: "Marumasu Nishimuraya, publishing source",
    sourceUrl: "https://www.marumasu-nishimuraya.co.jp/en/private",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.marumasu-nishimuraya.co.jp/en/private",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The close crop makes the stencil, reserved cloth and layered colour readable in a single tactile frame, with enough material detail to feel like process rather than product display.",
    },
    depiction:
      "A Yuzen-dyed owl pattern and stencil published by Marumasu Nishimuraya in the context of its workshop. It is not an EA visit or proof of a future session. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "kyoto-kctp-backstreet-cycling",
    src: "/images/guides/kyoto-backstreet-cycling.jpg",
    alt: "A woman in kimono guides a bicycle past wooden houses and potted plants on a sunlit Gion street.",
    title: "Gion, Kyoto, Japan",
    photographer: "dconvertini",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gion,_Kyoto,_Japan_(48928782333).jpg",
    licenseName: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Warm morning light, a real bicycle and the layered wood, plants and street surface make movement through Gion tangible without resorting to a generic landmark panorama.",
    },
    depiction:
      "A person guiding a bicycle along a street in Gion, Kyoto, on 24 May 2019. It does not depict the KCTP tour, a tour participant or an EA visit. The source image was resized for web delivery and remains available under CC BY-SA 2.0.",
  },
  {
    guideId: "cape-town-bo-kaap-cooking",
    src: "/images/guides/cape-town-bo-kaap-cooking.jpg",
    alt: "A cook lifts fresh chilli bites from a pot into a bowl with Cape Malay samoosas.",
    title: "Cape Malay snacks",
    photographer: "Go2africa",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cape_Malay_snacks.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The close cooking action, strong blue and warm food colour remain legible at card and hero scale without turning residents or the neighbourhood into spectacle.",
    },
    depiction:
      "Cape Malay chilli bites and samoosas being prepared in South Africa in 2014. The image is food and process context. It does not depict The Bo-Kaap Cooking Tour, Bo-Kaap, its host or an EA visit. Cropped responsively for layout by Experience Authority.",
  },
  {
    guideId: "salta-empanada-workshop",
    src: "/images/guides/salta-empanada-workshop.jpg",
    alt: "Freshly baked empanadas with hand-crimped edges rest on dark slate in front of a glowing brick oven.",
    title: "Make your own empanada workshop",
    photographer:
      "Tourism Office of the City of Salta. Individual photographer not named",
    sourceUrl:
      "https://www.saltaciudad.travel/posts/taller-gastronomico-como-hacer-tu-propia-empanada",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.saltaciudad.travel/posts/taller-gastronomico-como-hacer-tu-propia-empanada",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "A restrained low angle, visible hand-crimped edges and the heat of the brick oven make the dish feel made rather than styled as a generic restaurant plate.",
    },
    depiction:
      "Empanadas in front of a brick oven, published as the official image for Salta City Tourism's make-your-own-empanada workshop. The page does not identify the photographer or prove that the food pictured is from a current session. It is not an EA visit. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "sarajevo-bosnian-coffee",
    src: "/images/guides/sarajevo-bosnian-coffee.png",
    alt: "Two women share a relaxed table of Bosnian coffee and sweets in a stone courtyard in Sarajevo.",
    title: "Tour group enjoying Bosnian coffee in Sarajevo",
    photographer: "Cheyf. Individual photographer not named",
    sourceUrl: "https://cheyf.ba/products/sarajevo-city-tour-bosnian-coffee",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://cheyf.ba/products/sarajevo-city-tour-bosnian-coffee",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The vertical documentary frame catches an unforced laugh, a close table and the courtyard texture, making the social pause more important than a product close-up.",
    },
    depiction:
      "A Cheyf tour group sharing Bosnian coffee and sweets in Sarajevo, as identified by the operator's page. It is an official operator image, not an EA visit or an independent assessment of the cafe or tour. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "loiza-copi-bomba",
    src: "/images/guides/loiza-copi-bomba.jpg",
    alt: "A young bomba dancer raises one hand beside drummers and a gathered crowd in a bright Loíza courtyard.",
    title: "Bomba in Loíza",
    photographer: "Discover Puerto Rico. Individual photographer not named",
    sourceUrl: "https://www.discoverpuertorico.com/regions/east/loiza",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.discoverpuertorico.com/regions/east/loiza",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The wider original keeps the dancer, barrel drums and surrounding community in one place-specific frame, with strong colour and no artificial staging by EA.",
    },
    depiction:
      "Bomba at El Batey de los Hermanos Ayala in Loíza, published by Discover Puerto Rico. It does not depict a COPI class, a named instructor or an EA visit. The source page does not identify the photographer. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "biarritz-basque-pelota-initiation",
    src: "/images/guides/biarritz-basque-pelota.jpg",
    alt: "A pelota player swings a wooden pala towards the ball against a pale fronton wall, captured with motion blur.",
    title: "Pelotari",
    photographer: "arquitextonica",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pelotari.jpg",
    licenseName: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The vertical black-and-white action frame makes the swing, ball and hard fronton surface immediately legible while the motion blur keeps the image physical rather than instructional.",
    },
    depiction:
      "A pelota player photographed in a fronton in La Rioja, Spain, in 2007. It does not depict Biarritz, the listed beginner programme or an EA visit. The source image was resized for web delivery and remains available under CC BY-SA 2.0.",
  },
  {
    guideId: "hanoi-thang-long-water-puppetry",
    src: "/images/guides/hanoi-water-puppetry.jpg",
    alt: "Bright lacquered figures move across the water stage during a Thang Long water puppet performance in Hanoi.",
    title: "Water Puppet Show",
    photographer: "Steven C. Price",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Water-Puppet-Show.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The exact theatre context, reflective water, lacquered figures and flare of stage fire create a vivid editorial image while keeping the performance itself central.",
    },
    depiction:
      "A Thang Long Water Puppet Theatre performance photographed in Hanoi on 18 December 2002. It does not depict the current programme or an EA visit. The source image was resized for web delivery and remains available under CC BY-SA 4.0.",
  },
  {
    guideId: "allgaeu-thalkirchdorf-viehscheid",
    src: "/images/guides/allgaeu-thalkirchdorf-viehscheid.jpg",
    alt: "Brown cattle follow herders along a sunlit forest track during the Thalkirchdorf Viehscheid.",
    title: "Viehscheid Thalkirchdorf, 2019",
    photographer: "Oberstaufen Tourismus, Moritz Sonntag",
    sourceUrl:
      "https://www.allgaeu.de/veranstaltungen/viehscheid-thalkirchdorf",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.allgaeu.de/veranstaltungen/viehscheid-thalkirchdorf",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Warm backlight, a clear working procession and the enveloping forest give the seasonal movement scale without turning the herders into costume detail.",
    },
    depiction:
      "Cattle and herders moving along a forest track in the 2019 Thalkirchdorf Viehscheid context, photographed by Moritz Sonntag and published by Oberstaufen Tourismus. It is not the 2026 event, an EA visit or proof of current conditions. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "cambridge-st-clements-bells",
    src: "/images/guides/cambridge-bell-ringing.jpg",
    alt: "A group of bell ringers work different ropes in a timber-lined church ringing room seen from above.",
    title: "Bell ringing at Crosthwaite, Keswick",
    photographer: "Dougsim",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Bell_ringing_at_Crosthwaite,_Keswick.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The overhead view connects ten bodies, separate ropes and shared timing in one architectural frame, making coordination immediately legible.",
    },
    depiction:
      "Carlisle Diocesan Guild bell ringers at St Kentigern's Church, Crosthwaite, during their 2017 annual meeting. It does not depict St Clement's, a visitor session or an EA visit. The source image was resized for web delivery and remains available under CC BY-SA 4.0.",
  },
  {
    guideId: "porto-vidra-tile-painting",
    src: "/images/guides/porto-tile-painting.jpg",
    alt: "A participant paints a small blue pattern onto a square ceramic tile at Oficina Vidra in Porto.",
    title: "Tile painting workshop",
    photographer: "Oficina Vidra, publishing source",
    sourceUrl: "https://www.vidra.pt/en/workshops/azulejos",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.vidra.pt/en/workshops/azulejos",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The brush, hand, blue pigment and repeated motifs hold the making action in crisp focus while the bright worktable avoids nostalgic craft styling.",
    },
    depiction:
      "A participant painting a ceramic tile in an image published on Oficina Vidra's workshop page. The page does not name an individual photographer. It is official provider imagery, not an EA visit or proof of future availability. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "koyasan-instant-temple-stay",
    src: "/images/guides/koyasan-temple-stay.jpg",
    alt: "Parted shoji screens reveal a small green garden beyond a quiet tatami room at a Koyasan temple lodging.",
    title: "Our room at Shojoshin-in on Koyasan",
    photographer: "Andrea Schaffer",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Our_room_at_Shojoshin-in_on_Koyasan_(3810919254).jpg",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The symmetrical screens, threshold and garden create a restrained sense of arrival with enough lived detail to keep the room from becoming a generic interior.",
    },
    depiction:
      "A guest room at Shojoshin-in on Koyasan, photographed in 2009. It is visual context only and does not depict one of the six current instant-booking plans, current room condition or an EA visit. The source image was resized for web delivery under CC BY 2.0.",
  },
  {
    guideId: "seoul-kimchikan-making",
    src: "/images/guides/seoul-kimchi-making.jpg",
    alt: "Visitors in aprons prepare cabbage kimchi together around a long table inside Museum Kimchikan in Seoul.",
    title: "Kimchi cooking class at Museum Kimchikan",
    photographer: "Museum Kimchikan",
    sourceUrl:
      "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=189628",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=189628",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "A lively, well-lit teaching room keeps the shared making action, ingredients and visitor format clear within one frame.",
    },
    depiction:
      "A visitor kimchi-making class at Museum Kimchikan, published by VisitKorea and credited on the page to Museum Kimchikan. It is not an EA visit or proof that the same class format is currently available. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "namib-living-desert-tour",
    src: "/images/guides/namib-living-desert.jpg",
    alt: "A Namaqua chameleon opens its mouth in a defensive display on pale ground beneath the wide Namib sky.",
    title: "Namaqua chameleon in the Namib",
    photographer: "Yathin S Krishnappa",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Chamaeleo_namaquensis_(Namib-Naukluft,_2011).jpg",
    licenseName: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The low viewpoint, vast open background and immediate animal behaviour create a memorable frame without pretending to document the tour.",
    },
    depiction:
      "A wild Namaqua chameleon photographed in the Namib in 2011 after it was approached for removal from road C14. It is not an animal seen on a Living Desert Adventures tour, an EA visit or a guaranteed sighting. Cropped responsively for layout by Experience Authority.",
  },
  {
    guideId: "quebec-outaouais-sugar-shack",
    src: "/images/guides/quebec-sugar-shack.jpg",
    alt: "Hot maple syrup runs from three metal spouts onto packed snow during maple season in Québec.",
    title: "Cabane à sucre",
    photographer: "Pierre-Arnaud KOPP",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Cabane_%C3%A0_sucre_!_(8260523097).jpg",
    licenseName: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The tight vertical composition makes the hot syrup, cold snow and hand of the maker instantly legible without relying on rustic decoration.",
    },
    depiction:
      "Maple taffy being poured on snow in Québec in 2011. The photograph is seasonal context and does not depict a named Outaouais venue, the current programme or an EA visit. Cropped responsively for layout by Experience Authority.",
  },
  {
    guideId: "asturias-trabanco-cider",
    src: "/images/guides/asturias-trabanco-cider.jpg",
    alt: "A cider maker catches a long stream of Asturian cider in a tilted glass while visitors watch among wooden barrels.",
    title: "Cider pouring during a Trabanco visit",
    photographer: "JFK Imagen Social, Sidra Trabanco",
    sourceUrl: "https://www.sidratrabanco.com/sidra-turismo",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.sidratrabanco.com/sidra-turismo",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The narrow stream, caught glass and timber barrels make the learned physical action visible while keeping the visit itself in frame.",
    },
    depiction:
      "Cider pouring during a Trabanco visitor programme, published by Sidra Trabanco with an embedded copyright credit to JFK Imagen Social. It is an official operator image, not an EA visit or proof of the current group format. Reuse rights have not been independently cleared.",
  },
  {
    guideId: "oostduinkerke-horseback-shrimp",
    src: "/images/guides/oostduinkerke-horseback-shrimp.jpg",
    alt: "Three Oostduinkerke shrimp fishers in yellow rainwear ride basket-carrying horses through the North Sea shallows.",
    title: "The shrimp fishers of Oostduinkerke",
    photographer: "Dirk van Hove, Visit Flanders",
    sourceUrl:
      "https://www.visitflanders.com/en/stories/flanders-immaterial-cultural-heritage-always-impressive",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.visitflanders.com/en/stories/flanders-immaterial-cultural-heritage-always-impressive",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The clear lateral composition keeps the working group, horses and water equally legible without isolating one person as spectacle.",
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
    sourceUrl:
      "https://eng.nationalparkvadehavet.dk/experience-the-wadden-sea/animal-and-bird-life/black-sun",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://eng.nationalparkvadehavet.dk/experience-the-wadden-sea/animal-and-bird-life/black-sun",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The wide, low horizon leaves the flock as the dominant moving form while retaining the wetland that makes the phenomenon possible.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.visitwadden.nl/en/visit/wadlopen",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The high viewpoint, open horizon and human scale make the temporary seabed legible without turning the walkers into spectacle.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.museumnord.no/en/our-venues/skrei/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Dark spatial depth, controlled blue light and the upright boat forms create a precise contemporary frame for the fishing story.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://castellersdebarcelona.cat/actualitat/actuacions",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "The vertical composition makes mutual reliance immediately visible, with the team rather than a cityscape carrying the entire frame.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://www.nea.gov.sg/our-services/hawker-management/programmes-and-grants/hawker-culture",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Generous human scale, crisp documentary detail and a full view of shared dining make the setting immediately legible.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.fono.hu/?lang=hu&page=zenehaz",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "A dynamic overhead composition links the musicians, the room and the moving floor without reducing anyone to spectacle.",
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
      rationale:
        "Architectural precision, restrained palette and strong vertical composition.",
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
      rationale:
        "Exceptional dawn light, clear local watercraft and a focused human scale.",
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
      rationale:
        "Controlled light, visible steam and a close view of skilled preparation.",
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
      rationale:
        "A dramatic shaft of daylight turns a real working room into a memorable scene.",
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
      rationale:
        "Quiet evening light, a clean horizon and the rowing movement held at human scale.",
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
      rationale:
        "Tactile detail, deliberate depth of field and a restrained material palette.",
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
      rationale:
        "Lush overhead canopy, bold place-specific colour and a strong vertical frame.",
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
      rationale:
        "A rigorous central perspective makes the cacao process immediately legible.",
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
      rationale:
        "Layered depth, rain-dark stone and subdued forest light create a strong sense of entry.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl:
      "https://visittampere.fi/en/destination/rajaportti-sauna-oldest-public-sauna-in-finland/",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Snow, warm windows and the visible cooling courtyard make the public ritual legible at a glance.",
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
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://reykjavik.is/en/sundholl-reykjavik-pool",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Clear geometry, bright water and everyday bathers present the civic pool without spectacle.",
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
    sourceUrl: "https://www.gusoconnorsdoolin.com/traditional-irish-music",
    licenseName:
      "Official source image. Reuse rights not independently cleared",
    licenseUrl: "https://www.gusoconnorsdoolin.com/traditional-irish-music",
    rightsBasis: "official_source",
    rightsCheckedOn: "2026-09-12",
    visualReview: {
      outcome: "approved",
      checkedOn: "2026-09-12",
      rationale:
        "Intimate framing, warm natural light and concentrated musicians convey listening rather than performance spectacle.",
    },
    depiction:
      "A fiddle session at the actual pub, published on Gus O'Connor's current music page. The page does not name an individual photographer. It is not an EA visit or a guarantee of a particular line-up. Reuse rights have not been independently cleared.",
  },
];

export function guideMediaFor(guideId: string) {
  return publicGuideMedia.find((media) => media.guideId === guideId);
}

export function imageCreditText(
  media: Pick<GuideMedia, "photographer" | "sourceUrl">,
) {
  const creator = media.photographer
    .replace(". Individual photographer not named", "")
    .replace(", publishing source", "");
  const publication = media.sourceUrl.includes("commons.wikimedia.org")
    ? "Wikimedia Commons"
    : media.sourceUrl.includes("unsplash.com")
      ? "Unsplash"
      : "";
  return publication ? `${creator} / ${publication}` : creator;
}

export function guideImage(guideId: string) {
  const media = guideMediaFor(guideId);
  if (!media) throw new Error(`Missing media record for ${guideId}`);
  return { image: media.src, imageAlt: media.alt };
}
