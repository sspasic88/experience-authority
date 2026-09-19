import { HomeDiscovery } from "./home-discovery";
import { HomeHeroMosaic, type HomeHeroStory } from "./home-hero-mosaic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PublicExperience } from "@/lib/catalog";
import { guideMediaFor, imageCreditText } from "@/lib/media";

export function HomeHero({
  items,
  heroEditions,
  initialHeroIndex,
}: {
  items: PublicExperience[];
  heroEditions: PublicExperience[][];
  initialHeroIndex: number;
}) {
  const mosaicEditions = heroEditions.flatMap((edition) => {
    const stories = edition.flatMap((item) => {
      const media = guideMediaFor(item.id);
      if (!item.image || !media) return [];
      return [
        {
          slug: item.slug,
          title: item.title,
          place: item.place,
          field: item.field,
          image: item.image,
          imageAlt: item.imageAlt,
          sourceUrl: media.sourceUrl,
          credit: imageCreditText(media),
        } satisfies HomeHeroStory,
      ];
    });
    return stories.length === 3 ? [stories] : [];
  });
  return (
    <>
      <section className="prototype-hero" aria-labelledby="home-title">
        <div className="prototype-hero-copy">
          <p className="eyebrow">Places. People. Ways in.</p>
          <h1 id="home-title">
            <span className="home-title-line">Experience</span>{" "}
            <span className="home-title-line">the world</span>{" "}
            <em>from within.</em>
          </h1>
          <p className="prototype-hero-lead">
            Remarkable local experiences, independently chosen and made
            practical.
          </p>
          <HomeDiscovery
            items={items.map(
              ({
                slug,
                title,
                place,
                country,
                field,
                summary,
                countrySlug,
                regionSlug,
              }) => ({
                slug,
                title,
                place,
                country,
                field,
                summary,
                countrySlug,
                regionSlug,
              }),
            )}
          />
        </div>
        <HomeHeroMosaic
          editions={mosaicEditions}
          initialIndex={initialHeroIndex}
        />
      </section>
      <nav
        className="prototype-edition-stats"
        aria-label="Continue from the Experience Authority cover"
      >
        {[
          ["Discover", "By place or curiosity", "/explore"],
          ["Trust", "Sources in every guide", "/method"],
          ["Plan", "Save and shape a journey", "/plan"],
          ["Return", "A new daily discovery", "/today"],
        ].map(([title, label, href]) => (
          <Link href={href} key={title}>
            <strong>{title}</strong>
            <span>{label}</span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        ))}
      </nav>
    </>
  );
}
