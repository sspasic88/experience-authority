import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageCredit, PageIntro, Photo } from "@/components/editorial";
import { guideMediaFor } from "@/lib/media";
import { demoMode, getTerritories, getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PlaceDirectory } from "@/components/place-directory";
export const metadata = pageMetadata(
  "Places",
  "Find a way into experiences through their relationship to place and local knowledge.",
  "/places",
);
export default function Places() {
  const items = getExperiences();
  const familiarFirst = [
    "Japan",
    "Italy",
    "Portugal",
    "Spain",
    "France",
    "United Kingdom",
    "Mexico",
    "Singapore",
    "South Korea",
    "Türkiye",
    "United States",
    "Austria",
    "Iceland",
    "Croatia",
    "Greece",
    "Netherlands",
    "Indonesia",
    "Morocco",
    "Vietnam",
    "Argentina",
  ];
  const destinationRank = new Map(
    familiarFirst.map((name, index) => [name, index]),
  );
  const preferredLeadSlugs: Record<string, string> = {
    japan: "a-bowl-of-attention",
    italy: "venice-through-an-oar",
    portugal: "taste-what-time-does-to-port",
    spain: "the-pour-before-the-glass",
    france: "play-the-wall-in-biarritz",
    "united-kingdom": "ask-the-market-where-london-came-from",
    mexico: "follow-the-agave-into-the-still",
    singapore: "a-morning-at-the-hawker-table",
    "south-korea": "kimchi-before-the-jar",
    turkiye: "marble-steam-istanbul",
    "united-states": "read-monument-valley-beyond-the-scenic-drive",
    croatia: "let-the-dog-read-the-forest",
    greece: "follow-mastiha-back-to-the-tree",
    indonesia: "follow-balis-water-before-the-rice",
    morocco: "cut-the-first-piece-of-a-pattern",
    vietnam: "watch-a-stage-made-of-water",
    argentina: "stay-while-the-zamba-circles-back",
  };
  const guideCount = (slug: string) =>
    items.filter((item) => item.countrySlug === slug).length;
  const territories = getTerritories().sort((a, b) => {
    const rankA = destinationRank.get(a.name);
    const rankB = destinationRank.get(b.name);
    if (rankA !== undefined || rankB !== undefined) {
      return (
        (rankA ?? Number.MAX_SAFE_INTEGER) - (rankB ?? Number.MAX_SAFE_INTEGER)
      );
    }
    const coverage = guideCount(b.slug) - guideCount(a.slug);
    return coverage || a.name.localeCompare(b.name);
  });
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Closer to place" title="Somewhere becomes here.">
        <p>
          Start with the places in our current guides. Each is a specific way
          in, not a claim to cover an entire country.
        </p>
      </PageIntro>
      <PlaceDirectory places={territories}>
        {territories.map((t) => {
          const guides = items.filter((item) => item.countrySlug === t.slug);
          const lead =
            guides.find((guide) => guide.slug === preferredLeadSlugs[t.slug]) ||
            guides[0];
          const media = lead && guideMediaFor(lead.id);
          return (
            <article className="place-card" key={t.slug}>
              {media && (
                <div className="place-card-image">
                  <Link
                    href={`/places/${t.slug}`}
                    aria-label={`Explore ${t.name}`}
                  >
                    <Photo
                      src={media.src}
                      alt={media.alt}
                      sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </Link>
                  <ImageCredit media={media} />
                </div>
              )}
              <h2>
                <Link href={`/places/${t.slug}`}>
                  {t.name}
                  <ArrowUpRight size={23} aria-hidden="true" />
                </Link>
              </h2>
              <p>{t.intro}</p>
              <small>
                {guides.length}{" "}
                {demoMode
                  ? "demo stories"
                  : guides.length === 1
                    ? "guide"
                    : "guides"}
              </small>
              <nav
                className="place-area-links"
                aria-label={`Cities and areas in ${t.name}`}
              >
                {t.regions.map((region) => (
                  <Link
                    key={region.slug}
                    href={`/places/${t.slug}/${region.slug}`}
                  >
                    {region.name} ↗
                  </Link>
                ))}
              </nav>
            </article>
          );
        })}
      </PlaceDirectory>
    </div>
  );
}
