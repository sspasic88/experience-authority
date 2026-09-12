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
  const territories = getTerritories().sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const items = getExperiences();
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Closer to place" title="Somewhere becomes here.">
        <p>
          Start with the places in our current guides. Each is a specific way
          in, not a claim to cover an entire country.
        </p>
      </PageIntro>
      <PlaceDirectory places={territories}>
        {[...territories]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((t) => {
            const guides = items.filter((item) => item.countrySlug === t.slug);
            const lead = guides[0];
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
