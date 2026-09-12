import Link from "next/link";
import { Search } from "lucide-react";
import { Photo } from "./editorial";
import { collections, fields } from "@/lib/catalog";
import { getExperiences } from "@/lib/data";

export function HomeHero() {
  const items = getExperiences();
  const guideHref = (slug: string) =>
    items.some((item) => item.slug === slug)
      ? `/experiences/${slug}`
      : "/explore";
  const countries = new Set(
    items.map((item) => item.countrySlug).filter(Boolean),
  );
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
            Discover the ways places are lived—not simply visited. Find your way
            in through food, people, craft and the outdoors, with sources and
            practical context in every guide.
          </p>
          <form
            action="/explore"
            method="get"
            className="prototype-hero-search"
            role="search"
          >
            <label className="sr-only" htmlFor="home-search">
              Search experiences
            </label>
            <input
              id="home-search"
              name="q"
              type="search"
              maxLength={200}
              placeholder="Search a place, experience or way in…"
            />
            <button type="submit" aria-label="Search experiences">
              <Search size={23} aria-hidden="true" />
            </button>
          </form>
          <nav
            className="prototype-hero-interests"
            aria-label="Find your way by interest"
          >
            <Link href="/explore?interest=eat-drink">Eat & drink</Link>
            <Link href="/explore?interest=make-learn">Make</Link>
            <Link href="/explore?interest=move-water">Move</Link>
            <Link href="/explore?interest=swim-reset">Reset</Link>
            <Link href="/explore">
              All experiences <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
        <div className="prototype-hero-mosaic">
          <figure className="prototype-hero-place">
            <Photo
              src="/images/guides/leave-room-for-devotion.jpg"
              alt="Stone steps under tall trees on the Daimon-zaka pilgrimage path, photographed by Kieran."
              priority
              sizes="(max-width: 700px) 60vw, (max-width: 1100px) 48vw, 29vw"
            />
            <figcaption>
              <span className="eyebrow">Place / Kumano Kodo</span>
              <Link href={guideHref("leave-room-for-devotion")}>
                Every place has a way in.
              </Link>
              <Link
                className="prototype-photo-credit"
                href="/credits#media-kumano-daimon-zaka"
              >
                Photo: Kieran <span aria-hidden="true">↗</span>
              </Link>
            </figcaption>
          </figure>
          <div className="prototype-hero-sides">
            <aside className="prototype-principle">
              <p className="eyebrow">The EA principle</p>
              <p>
                Experience first.
                <br />
                Provider second.
              </p>
            </aside>
            <figure>
              <Photo
                src="/images/guides/mayer-pfarrplatz-courtyard.jpg"
                alt="Tables beneath the vines at Mayer am Pfarrplatz in Vienna, photographed by Geolina163."
                sizes="(max-width: 700px) 40vw, 20vw"
              />
              <figcaption>
                <span className="eyebrow">Taste</span>
                <Link href={guideHref("the-vineyard-at-the-table")}>
                  A place at the table.
                </Link>
                <Link
                  className="prototype-photo-credit"
                  href="/credits#media-vienna-heuriger"
                >
                  Photo: Geolina163 <span aria-hidden="true">↗</span>
                </Link>
              </figcaption>
            </figure>
            <figure>
              <Photo
                src="/images/pottery.jpg"
                alt="Hands shaping a clay vessel; illustrative craft photography by Alex Jones."
                sizes="(max-width: 700px) 40vw, 20vw"
              />
              <figcaption>
                <span className="eyebrow">Make</span>
                <Link href="/collections/knowledge-in-the-hands">
                  Knowledge held in the hand.
                </Link>
                <Link className="prototype-photo-credit" href="/credits">
                  Illustrative · Alex Jones <span aria-hidden="true">↗</span>
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <dl
        className="prototype-edition-stats"
        aria-label="Current editorial coverage"
      >
        <div>
          <dt>Public-source guides</dt>
          <dd>{items.length}</dd>
        </div>
        <div>
          <dt>Countries represented</dt>
          <dd>{countries.size}</dd>
        </div>
        <div>
          <dt>Experience fields</dt>
          <dd>{fields.length}</dd>
        </div>
        <div>
          <dt>Editorial collections</dt>
          <dd>{collections.length}</dd>
        </div>
      </dl>
    </>
  );
}
