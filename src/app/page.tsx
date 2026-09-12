import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, LockKeyhole } from "lucide-react";
import { ExperienceCard, Photo, SectionHeading } from "@/components/editorial";
import { collections, fields } from "@/lib/catalog";
import { demoMode, getExperiences } from "@/lib/data";
import { StructuredData } from "@/components/structured-data";
import {
  pageMetadata,
  SITE_DESCRIPTION,
  websiteStructuredData,
} from "@/lib/seo";

export const metadata = pageMetadata(
  "Experience Authority — Experience the world from within.",
  SITE_DESCRIPTION,
  "/",
);

export default function Home() {
  const experiences = getExperiences();
  return (
    <>
      <StructuredData data={websiteStructuredData()} />
      <section className="home-hero wrap">
        <div className="hero-copy">
          <div className="hero-topline">
            <span className="eyebrow">An independent selection</span>
            <span className="edition">First edition / Field notes</span>
          </div>
          <h1>
            Experience
            <br />
            the world
            <br />
            <span className="hero-last-line">
              from within<span className="orange-period">.</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <span className="hero-slash" aria-hidden="true" />
            <div className="hero-invitation">
              <p>
                <span>Not just somewhere to go.</span>
                <span className="hero-invitation-emphasis">
                  A different way to be there.
                </span>
              </p>
              <Link href="/explore" className="button hero-cta">
                Find your way <ArrowUpRight size={20} />
              </Link>
            </div>
            <span className="hero-waypoint" aria-hidden="true">
              <i /> Start closer
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            src="/images/pottery.jpg"
            alt="Illustrative photograph of hands shaping a clay vessel, by Alex Jones."
            priority
          />
          <span className="hero-image-label">The knowledge in our hands</span>
          <div className="hero-stamp">
            <Compass size={27} strokeWidth={1.2} />
            <span>
              Closer to place.
              <br />
              Closer to people.
            </span>
          </div>
          <div className="hero-caption">
            <span>01 / MAKE</span>
            <span>Illustrative photograph · Alex Jones</span>
          </div>
        </div>
      </section>
      <div className="principle-strip wrap">
        <span>A global selection of locally rooted experiences.</span>
        <span>
          Experience first. Provider second.{" "}
          <span className="small-slash" aria-hidden="true">
            /
          </span>
        </span>
      </div>
      <section className="section wrap">
        <SectionHeading
          eyebrow="A starting point"
          title="Less passing through. More being there."
          href="/explore"
          link="Explore Compass"
        />
        {experiences.length ? (
          <>
            <p className="section-note">
              {demoMode
                ? "Fictional concepts for interface testing, not selected experiences."
                : "Publicly offered experiences, explored through original guides with sources and clear access notes. Not yet locally validated EA selections."}
            </p>
            <div className="experience-grid">
              {experiences.slice(0, 3).map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="launch-note">
            <h3>Good stories take time.</h3>
            <p>
              Our first experiences are being researched. Nothing will be listed
              as selected before its evidence, local context and access have
              been reviewed.
            </p>
            <Link className="text-link" href="/method">
              Read our method <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </section>
      <section className="fields-section">
        <div className="wrap fields-layout">
          <div>
            <p className="eyebrow">13 fields of experience</p>
            <h2>
              What will
              <br />
              you open
              <br />
              yourself to?
            </h2>
            <p>
              Start with a curiosity.
              <br />
              See where it takes you.
            </p>
            <Link className="text-link" href="/fields">
              Find your field <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="field-cloud">
            {fields.map((field, index) => (
              <Link href={`/fields/${field.slug}`} key={field.slug}>
                <span className="field-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {field.name}
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          eyebrow="A different direction"
          title="Follow a thread."
          href="/collections"
          link="All collections"
        />
        <div className="collection-grid">
          {collections.map((collection, i) => (
            <Link
              className="collection-card"
              href={`/collections/${collection.slug}`}
              key={collection.slug}
            >
              <div className="collection-image">
                <Photo
                  src={collection.image}
                  alt="Illustrative photograph for an editorial theme, not documentation of the experiences."
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <span>Collection {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>
                {collection.title}
                <ArrowUpRight size={22} aria-hidden="true" />
              </h3>
              <p>{collection.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="method-band">
        <div className="wrap method-layout">
          <div>
            <p className="eyebrow">Our point of view</p>
            <h2>
              Worth experiencing.
              <br />
              Not always
              <br />
              <span>open to everyone.</span>
            </h2>
          </div>
          <div className="method-copy">
            <LockKeyhole size={31} strokeWidth={1.2} />
            <p>
              Some experiences need context. Some need permission. And some are
              worth protecting from attention altogether.
            </p>
            <p>
              Our role is to help you understand the difference — with clear
              evidence, local knowledge and respect for the people who hold it.
            </p>
            <Link className="button button-paper" href="/method">
              How we make our selections <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <section className="passport-promo wrap">
        <div className="passport-motif" aria-hidden="true">
          <span className="motif-slash" />
          <span>
            EA /<br />
            PASSPORT
          </span>
          <Compass size={44} strokeWidth={1} />
        </div>
        <div>
          <p className="eyebrow">Your own way through</p>
          <h2>
            Keep what
            <br />
            stays with you.
          </h2>
          <p>
            A place for your curiosities, future journeys and the experiences
            you want to return to.
          </p>
          <Link className="text-link" href="/passport">
            Start your Passport <ArrowRight size={20} />
          </Link>
          <span className="small-note">
            Saved only on this device. No account needed.
          </span>
        </div>
      </section>
    </>
  );
}
