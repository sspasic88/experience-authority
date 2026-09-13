import type { GuideMedia } from "./media";

const official = {
  licenseName: "Official source image. Reuse rights not independently cleared",
  rightsBasis: "official_source",
  rightsCheckedOn: "2026-09-13",
} as const;
const records = [
  {
    guideId: "porto-clerigos-organ",
    src: "/images/guides/porto-clerigos-interior.jpg",
    alt: "Warm stone vaults, gilded details and rows of wooden seats inside Clérigos church in Porto.",
    title: "Clérigos church interior",
    photographer: "Luís Ferreira Alves / Clérigos",
    sourceUrl:
      "https://www.torredosclerigos.pt/en/clerigos-architectural-complex/",
    rationale:
      "A carefully balanced architectural photograph conveys the real listening space through its stone, light and height. It does not substitute an unrelated concert hall or claim to depict a performance.",
    depiction:
      "Clérigos identifies this church interior photograph by Luís Ferreira Alves. It shows the building, not an organ concert or a guaranteed seat view. Resized and converted from WebP for web delivery.",
  },
  {
    guideId: "porto-bolhao-market",
    src: "/images/guides/porto-bolhao-market.jpg",
    alt: "An elevated view across the covered stalls and open courtyard of Porto's Bolhão market, framed by pale stone arcades.",
    title: "Bolhão market courtyard",
    photographer: "Mercado do Bolhão. Individual photographer not named",
    sourceUrl: "https://mercadobolhao.pt/en/",
    rationale:
      "The symmetrical courtyard view places the working stalls in their specific architecture. Professional resolution and a coherent frame make it legible at both card and full-page scale.",
    depiction:
      "Official Mercado do Bolhão courtyard image in a source file uploaded in June 2026. It does not guarantee a stall layout, opening status or attendance at your visit. Resized for web delivery.",
  },
  {
    guideId: "kyoto-kunjyukan-incense",
    src: "/images/guides/kyoto-kunjyukan-incense.jpg",
    alt: "White hanging scent boxes and slender testers in Kunjyukan's bright Koh-labo gallery, with a forest mural behind them.",
    title: "Koh-labo fragrance gallery",
    photographer: "Shoyeido / Kunjyukan. Individual photographer not named",
    sourceUrl: "https://kunjyukan.jp/english/facilities/koh-labo.html",
    rationale:
      "The clean architectural frame shows the actual scent-box installation clearly. Its restrained white space and forest wall provide a distinctive photograph without implying a ceremony or workshop.",
    depiction:
      "Kunjyukan's official image of the Koh-labo permanent gallery. It depicts the sensory installation, not an EA visit, current occupancy or a private incense ceremony. Resized for web delivery.",
  },
  {
    guideId: "venice-huang-lampworking",
    src: "/images/guides/venice-huang-lampworking.jpg",
    alt: "Hands turn glass rods beside a bright blue flame while a green glass shape is worked at Huang Xiaozhe's bench.",
    title: "Glass lampworking at Huang Xiaozhe's atelier",
    photographer: "Huang Xiaozhe. Individual photographer not named",
    sourceUrl: "https://huangxiaozhe.com/workshop",
    rationale:
      "A sharp close view joins hand, flame and translucent material in one visually specific action. It shows the actual practice instead of generic glass souvenirs or an unrelated factory.",
    depiction:
      "An artist-published glassworking photograph from the public workshop page. The depicted shape is not a guaranteed beginner result. Resized for web delivery.",
  },
];
export const mediaBatch15: readonly GuideMedia[] = records.map(
  ({ rationale, ...record }) => ({
    ...official,
    ...record,
    licenseUrl: record.sourceUrl,
    visualReview: { outcome: "approved", checkedOn: "2026-09-13", rationale },
    depiction: `${record.depiction} Reuse rights have not been independently cleared.`,
  }),
);
