import { HomeDiscovery } from "./home-discovery";
import { HomeHeroMosaic } from "./home-hero-mosaic";
import type { PublicExperience } from "@/lib/catalog";

export function HomeHero({
  items,
  heroEditions,
  initialHeroIndex,
}: {
  items: PublicExperience[];
  heroEditions: PublicExperience[][];
  initialHeroIndex: number;
}) {
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
            Discover the ways places are lived, not simply visited. Find your
            way in through food, people, craft and the outdoors, with sources
            and practical context in every guide.
          </p>
          <HomeDiscovery
            items={items.map(
              ({ slug, title, place, country, field, summary }) => ({
                slug,
                title,
                place,
                country,
                field,
                summary,
              }),
            )}
          />
        </div>
        <HomeHeroMosaic
          editions={heroEditions}
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
