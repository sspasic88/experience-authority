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
      <dl
        className="prototype-edition-stats"
        aria-label="What every Experience Authority guide gives you"
      >
        <div>
          <dt>By place or curiosity</dt>
          <dd>Discover</dd>
        </div>
        <div>
          <dt>Sources in every guide</dt>
          <dd>Trust</dd>
        </div>
        <div>
          <dt>Save and shape a journey</dt>
          <dd>Plan</dd>
        </div>
        <div>
          <dt>A new daily discovery</dt>
          <dd>Return</dd>
        </div>
      </dl>
    </>
  );
}
