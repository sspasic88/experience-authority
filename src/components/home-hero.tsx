import Link from "next/link";
import { Photo } from "./editorial";
import { getExperiences } from "@/lib/data";
import { HomeDiscovery } from "./home-discovery";

export function HomeHero() {
  const items = getExperiences();
  const guideHref = (slug: string) =>
    items.some((item) => item.slug === slug)
      ? `/experiences/${slug}`
      : "/explore";
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
            Discover the ways places are lived, not simply visited. Find your way
            in through food, people, craft and the outdoors, with sources and
            practical context in every guide.
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
          <figure className="prototype-hero-place">
            <Link
              className="prototype-hero-image-link"
              href={guideHref("marble-steam-istanbul")}
              aria-label="Explore Hürrem Sultan Hamam in Istanbul"
            />
            <Photo
              src="/images/guides/istanbul-hurrem-hammam-interior.jpg"
              alt="White marble interior of Istanbul's Hürrem Sultan Hamam, photographed by Satayman."
              priority
              sizes="(max-width: 700px) 60vw, (max-width: 1100px) 48vw, 29vw"
            />
            <figcaption>
              <span className="eyebrow">Place / Istanbul</span>
              <Link href={guideHref("marble-steam-istanbul")}>
                Marble, steam, Istanbul.
              </Link>
              <Link
                className="prototype-photo-credit"
                href="/credits#media-istanbul-hurrem-hammam"
              >
                Photo: Satayman <span aria-hidden="true">↗</span>
              </Link>
            </figcaption>
          </figure>
          <div className="prototype-hero-sides">
            <figure>
              <Link
                className="prototype-hero-image-link"
                href={guideHref("venice-through-an-oar")}
                aria-label="Explore Venetian rowing in Venice"
              />
              <Photo
                src="/images/guides/venetian-standing-rowing.jpg"
                alt="Standing rowers moving a traditional boat across the Venetian lagoon, photographed by Tony Hisgett."
                sizes="(max-width: 700px) 40vw, 20vw"
              />
              <figcaption>
                <span className="eyebrow">Move</span>
                <Link href={guideHref("venice-through-an-oar")}>
                  Learn the movement behind the view.
                </Link>
                <Link
                  className="prototype-photo-credit"
                  href="/credits#media-venice-voga"
                >
                  Photo: Tony Hisgett <span aria-hidden="true">↗</span>
                </Link>
              </figcaption>
            </figure>
            <figure>
              <Link
                className="prototype-hero-image-link"
                href={guideHref("a-bowl-of-attention")}
                aria-label="Explore a tea session in Kyoto"
              />
              <Photo
                src="/images/guides/kyoto-tea-preparation.jpg"
                alt="A tea host beside a steaming kettle in Japan, photographed by Rod Long."
                sizes="(max-width: 700px) 40vw, 20vw"
              />
              <figcaption>
                <span className="eyebrow">Taste</span>
                <Link href={guideHref("a-bowl-of-attention")}>
                  A bowl of attention.
                </Link>
                <Link
                  className="prototype-photo-credit"
                  href="/credits#media-kyoto-camellia-tea"
                >
                  Photo: Rod Long <span aria-hidden="true">↗</span>
                </Link>
              </figcaption>
            </figure>
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
