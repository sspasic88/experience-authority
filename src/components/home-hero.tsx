import Link from "next/link";
import { Photo } from "./editorial";
import { HomeDiscovery } from "./home-discovery";
import type { PublicExperience } from "@/lib/catalog";
import { guideMediaFor } from "@/lib/media";

function HeroStory({
  item,
  primary = false,
}: {
  item: PublicExperience;
  primary?: boolean;
}) {
  const media = guideMediaFor(item.id);
  const href = `/experiences/${item.slug}`;
  const creditName = media?.photographer.split(". ")[0];
  return (
    <figure className={primary ? "prototype-hero-place" : undefined}>
      <Link
        className="prototype-hero-image-link"
        href={href}
        aria-label={`Explore ${item.title} in ${item.place}`}
      />
      {item.image && (
        <Photo
          src={item.image}
          alt={item.imageAlt}
          priority={primary}
          sizes={
            primary
              ? "(max-width: 700px) 60vw, (max-width: 1100px) 48vw, 29vw"
              : "(max-width: 700px) 40vw, 20vw"
          }
        />
      )}
      <figcaption>
        <span className="eyebrow">
          {primary ? `Place / ${item.place}` : item.field}
        </span>
        <Link href={href}>{item.title}</Link>
        {media && (
          <Link
            className="prototype-photo-credit"
            href={`/credits#media-${media.guideId}`}
          >
            Photo: {creditName} <span aria-hidden="true">↗</span>
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

export function HomeHero({
  items,
  heroGuides,
}: {
  items: PublicExperience[];
  heroGuides: PublicExperience[];
}) {
  const [main, upper, lower] = heroGuides;
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
        <div className="prototype-hero-mosaic">
          {main && <HeroStory item={main} primary />}
          <div className="prototype-hero-sides">
            {upper && <HeroStory item={upper} />}
            {lower && <HeroStory item={lower} />}
          </div>
        </div>
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
