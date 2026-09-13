import { HomeDiscovery } from "./home-discovery";
import { HomeHeroMosaic, type HomeHeroStory } from "./home-hero-mosaic";
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
          <p className="eyebrow">A world of locally rooted experiences</p>
          <h1 id="home-title">
            Experience the
            <br />
            world{" "}
            <span>
              from
              <br />
              within.
            </span>
          </h1>
          <p className="prototype-hero-lead">
            Cook, make, move and discover what belongs here. Find an experience
            worth building a day around.
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
      <dl
        className="prototype-edition-stats"
        aria-label="What every Experience Authority guide gives you"
      >
        <div>
          <dt>Original guides</dt>
          <dd>Independent</dd>
        </div>
        <div>
          <dt>Sources you can check</dt>
          <dd>Traceable</dd>
        </div>
        <div>
          <dt>Access made clear</dt>
          <dd>Practical</dd>
        </div>
        <div>
          <dt>No paid prominence</dt>
          <dd>Editorial</dd>
        </div>
      </dl>
    </>
  );
}
