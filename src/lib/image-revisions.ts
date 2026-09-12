/** Content hashes keep replaced photographs consistent across responsive image caches.
 * The media test requires an update when an original file changes. */
export const imageRevisions: Record<string, string> = {
  "/images/guides/allgaeu-thalkirchdorf-viehscheid.jpg": "e6e94ce5b6b5",
  "/images/guides/asturias-trabanco-cider.jpg": "7eb6a32712b8",
  "/images/guides/barcelona-castells.jpg": "0f8d2400da31",
  "/images/guides/belmont-cocoa-drying.jpg": "df5c1445c281",
  "/images/guides/biarritz-basque-pelota.jpg": "710403b06701",
  "/images/guides/budapest-fono-tanchaz.jpg": "ea3a44199006",
  "/images/guides/cambridge-bell-ringing.jpg": "c2ff190aba24",
  "/images/guides/cape-town-bo-kaap-cooking.jpg": "c3d9930de293",
  "/images/guides/denmark-black-sun.jpg": "c7f2cc10cd14",
  "/images/guides/doha-coffee-ceremony.jpg": "4c05d65a8dba",
  "/images/guides/doolin-fiddlers.jpg": "ccd3f4cfedee",
  "/images/guides/edinburgh-public-ceilidh.jpg": "6bda8e6862be",
  "/images/guides/hanoi-water-puppetry.jpg": "887b531dcc26",
  "/images/guides/istanbul-hurrem-hammam-interior.jpg": "30d2ea25b0bb",
  "/images/guides/koyasan-temple-stay.jpg": "70f04fd32ede",
  "/images/guides/kyoto-backstreet-cycling.jpg": "18f6fdea6772",
  "/images/guides/kyoto-tea-preparation.jpg": "8bb18a5b9c9b",
  "/images/guides/kyoto-yuzen-stencil-workshop.jpg": "7f76102d68df",
  "/images/guides/laos-natural-dye-materials.jpg": "661fa185d6a8",
  "/images/guides/leave-room-for-devotion.jpg": "226872bfb84f",
  "/images/guides/lofoten-skrei-exhibition.jpg": "e6aedc9fa441",
  "/images/guides/loiza-copi-bomba.jpg": "5f78aeda0084",
  "/images/guides/make-room-in-the-steam.jpg": "47b0ca04c533",
  "/images/guides/malta-village-festa.jpg": "c6436d1b1346",
  "/images/guides/mayer-pfarrplatz-courtyard.jpg": "195d40cdc5d8",
  "/images/guides/namib-living-desert.jpg": "6c8ba6a29cf5",
  "/images/guides/oostduinkerke-horseback-shrimp.jpg": "7b45fadd309d",
  "/images/guides/oaxaca-mezcal-palenque.jpg": "40ecfa91d986",
  "/images/guides/porto-tile-painting.jpg": "7bb887535a2a",
  "/images/guides/quebec-sugar-shack.jpg": "27de6a7236ba",
  "/images/guides/rajaportti-winter.jpg": "a1435184afcf",
  "/images/guides/reykjavik-sundholl-pool.jpg": "7a32fc742a68",
  "/images/guides/salta-empanada-workshop.jpg": "7109eb869df2",
  "/images/guides/salta-pena-folklorica.jpg": "0eb9d837a94b",
  "/images/guides/sarajevo-bosnian-coffee.png": "1a8edc28a069",
  "/images/guides/seoul-kimchi-making.jpg": "5f7cd32a0a9e",
  "/images/guides/singapore-batik-tulis-workshop.jpg": "a1070b671804",
  "/images/guides/singapore-coney-island-walk.jpg": "7881a8d6b021",
  "/images/guides/singapore-hawker-culture.jpg": "a80a90499c1f",
  "/images/guides/sundholl-reykjavik-exterior.jpg": "de1994dddab3",
  "/images/guides/tsaghkunk-lavash-baking.jpg": "1346291ff555",
  "/images/guides/venetian-standing-rowing.jpg": "bdb4478211d7",
  "/images/guides/wadden-mudflat-walk.jpg": "f58f9ef1b155",
  "/images/guides/xochimilco-chinampa-trajinera.jpg": "1d11a4bcab55",
};

// A single manifest fingerprint fits Next's bounded localPatterns allowlist.
// Tests require it to change when any original is added or replaced.
export const imageEdition = "7295f1be04c3";

export function imageSource(src: string) {
  return imageRevisions[src] ? `${src}?v=${imageEdition}` : src;
}
