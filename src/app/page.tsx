import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, LockKeyhole } from "lucide-react";
import {
  ExperienceCard,
  PathwayCard,
  SectionHeading,
} from "@/components/editorial";
import { fields, interests } from "@/lib/catalog";
import { editorialPathways } from "@/lib/editorial-pathways";
import { demoMode, getExperiences } from "@/lib/data";
import { StructuredData } from "@/components/structured-data";
import { HomeHero } from "@/components/home-hero";
import { PassportReturn } from "@/components/passport-return";
import {
  pageMetadata,
  SITE_DESCRIPTION,
  websiteStructuredData,
} from "@/lib/seo";

export const metadata = pageMetadata(
  "Experience Authority | Experience the world from within.",
  SITE_DESCRIPTION,
  "/",
);

export default function Home() {
  const experiences = getExperiences();
  const familiarWaysIn = [
    "a-morning-at-the-hawker-table",
    "step-into-the-dance",
    "a-city-in-the-water",
  ].flatMap((slug) => {
    const item = experiences.find((experience) => experience.slug === slug);
    return item ? [item] : [];
  });
  const startingPoints = familiarWaysIn.length
    ? familiarWaysIn
    : experiences.slice(0, 3);
  const newGuideSlugs = [
    "read-the-desert-at-ground-level",
    "kimchi-before-the-jar",
    "when-the-sap-starts-to-run",
    "the-pour-before-the-glass",
    "when-the-sky-moves-as-one",
    "the-tide-brings-the-horses",
  ];
  const newGuides = newGuideSlugs.flatMap((slug) => {
    const item = experiences.find((experience) => experience.slug === slug);
    return item ? [item] : [];
  });
  return (
    <>
      <StructuredData data={websiteStructuredData()} />
      <HomeHero />
      <section className="section wrap">
        <PassportReturn />
        <SectionHeading
          eyebrow="Start somewhere you know"
          title="A familiar place. A different way in."
          href="/explore"
          link="Explore Compass"
        />
        {startingPoints.length ? (
          <>
            <p className="section-note">
              {demoMode
                ? "Fictional concepts for interface testing, not selected experiences."
                : "Publicly offered experiences, explored through original guides with sources and clear access notes. Not yet locally validated EA selections."}
            </p>
            <div className="experience-grid">
              {startingPoints.map((item, index) => (
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
      <section className="desire-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Choose the kind of day"
            title="What do you feel like doing?"
            href="/explore"
            link="See every experience"
          />
          <div className="desire-grid">
            {interests.map((interest, index) => {
              const count = experiences.filter((item) =>
                interest.fields.includes(item.field),
              ).length;
              if (!count) return null;
              const lines: Record<string, string> = {
                "eat-drink": "Sit down hungry. Leave knowing more.",
                "make-learn":
                  "Put your hands to work and your assumptions aside.",
                "move-water": "Change the pace and learn through movement.",
                "explore-reflect": "Look longer at the place around you.",
                "swim-reset": "Make room for water, warmth and a slower hour.",
                "shared-rituals": "Enter public life with attention and care.",
              };
              return (
                <Link
                  key={interest.slug}
                  href={`/explore?interest=${interest.slug}`}
                  className="desire-card"
                >
                  <span className="eyebrow">
                    Direction {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{interest.name}</h3>
                  <p>{lines[interest.slug]}</p>
                  <small>
                    {count} {count === 1 ? "guide" : "guides"}{" "}
                    <ArrowUpRight size={15} />
                  </small>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {newGuides.length > 0 && (
        <section className="section wrap">
          <SectionHeading
            eyebrow="New to the guide"
            title="Fresh ways into the world."
            href="/explore"
            link="Browse all guides"
          />
          <p className="section-note">
            Recently researched public-source guides, each with a current access
            route, evidence boundary and credited photography.
          </p>
          <div className="experience-grid">
            {newGuides.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      )}
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
          {editorialPathways.slice(0, 3).map((pathway, index) => {
            const item = experiences.find(
              (experience) => experience.slug === pathway.guideSlugs[0],
            );
            return item ? (
              <PathwayCard
                key={pathway.slug}
                pathway={pathway}
                item={item}
                index={index}
              />
            ) : null;
          })}
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
              Our role is to help you understand the difference, with clear
              evidence, local knowledge and respect for the people who hold it.
            </p>
            <Link className="button button-paper" href="/method">
              How we make our selections <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <section className="home-plan-band">
        <div className="wrap home-plan-layout">
          <div>
            <p className="eyebrow">From discovery to departure</p>
            <h2>A good trip needs more than a list.</h2>
          </div>
          <div className="home-plan-steps">
            <p>
              Use EA to find a meaningful way in, understand the access
              boundary, keep your favourites and shape a private journey draft.
            </p>
            <ol>
              <li>
                <span>01</span> Find a guide
              </li>
              <li>
                <span>02</span> Check the sources
              </li>
              <li>
                <span>03</span> Save and compare
              </li>
              <li>
                <span>04</span> Build your journey
              </li>
            </ol>
            <Link className="button button-dark" href="/plan">
              Plan with EA <ArrowRight size={19} />
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
