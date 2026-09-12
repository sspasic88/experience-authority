import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, BookOpenCheck } from "lucide-react";
import {
  ExperienceCard,
  ImageCredit,
  PathwayCard,
  SectionHeading,
  Photo,
} from "@/components/editorial";
import { fields, interests, matchesInterest } from "@/lib/catalog";
import {
  curateHome,
  homeHeroRotationIndex,
  resolveHomeHeroEditions,
  selectHomeHero,
} from "@/lib/home-curation";
import { getJournalArticles } from "@/lib/journal";
import { guideMediaFor } from "@/lib/media";
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
  const activeFields = fields.filter((field) =>
    experiences.some((item) => item.field === field.slug),
  );
  const initialHeroIndex = homeHeroRotationIndex();
  const heroEditions = resolveHomeHeroEditions(experiences);
  const heroGuides = heroEditions.length
    ? heroEditions[initialHeroIndex % heroEditions.length]
    : selectHomeHero(experiences);
  const availableHeroEditions = heroEditions.length
    ? heroEditions
    : [heroGuides];
  const { startingPoints, newGuides, homePathways, usedImages } = curateHome(
    experiences,
    editorialPathways,
    heroGuides,
  );
  const journalCards = getJournalArticles(experiences)
    .flatMap((article) => {
      const guide = article.guides.find(
        (item) => item.image && !usedImages.has(item.image),
      );
      const media = guide && guideMediaFor(guide.id);
      if (!media) return [];
      usedImages.add(media.src);
      return [{ article, media }];
    })
    .slice(0, 3);
  return (
    <>
      <StructuredData data={websiteStructuredData()} />
      <HomeHero
        items={experiences}
        heroEditions={availableHeroEditions}
        initialHeroIndex={initialHeroIndex}
      />
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
                : "Start with a public experience you can plan around. Each guide explains what you do, what makes it belong here and where to check the details."}
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
                matchesInterest(item, interest),
              ).length;
              if (!count) return null;
              const lines: Record<string, string> = {
                "eat-drink": "Sit down hungry. Leave knowing more.",
                "make-learn":
                  "Put your hands to work and your assumptions aside.",
                "move-water": "Change the pace and learn through movement.",
                "explore-reflect": "Look longer at the place around you.",
                "swim-reset":
                  "Make room for water, warmth or a different kind of night.",
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
            New places to follow your appetite, try a skill or look a little
            closer. Open a guide for the story and the practical way in.
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
            <p className="eyebrow">
              {activeFields.length} fields in this edition
            </p>
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
            {activeFields.map((field, index) => (
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
          {homePathways.map(({ pathway, item }, index) => {
            return (
              <PathwayCard
                key={pathway.slug}
                pathway={pathway}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </section>
      {journalCards.length > 0 && (
        <section className="home-journal">
          <div className="wrap">
            <SectionHeading
              eyebrow="EA Journal"
              title="Take a better question with you."
              href="/journal"
              link="Read the Journal"
            />
            <div className="home-journal-grid">
              {journalCards.map(({ article, media }) => (
                <article className="home-journal-card" key={article.slug}>
                  <div className="place-card-image">
                    <Link
                      href={`/journal/${article.slug}`}
                      aria-label={`Read ${article.title}`}
                    >
                      <Photo
                        src={media.src}
                        alt={media.alt}
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    </Link>
                    <ImageCredit media={media} />
                  </div>
                  <p className="eyebrow">
                    {article.eyebrow} / {article.readingMinutes} min read
                  </p>
                  <h3>
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p>{article.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="method-band">
        <div className="wrap method-layout">
          <div>
            <p className="eyebrow">Our point of view</p>
            <h2>
              Worth remembering.
              <br />
              Worth understanding.
            </h2>
          </div>
          <div className="method-copy">
            <BookOpenCheck size={31} strokeWidth={1.2} />
            <p>
              The detail that makes an experience memorable is often the one a
              photograph cannot explain. Who holds the knowledge. Why this
              place. What changes when you take part.
            </p>
            <p>
              Our guides connect those questions to practical access, original
              writing and sources you can follow. You can see what each account
              is based on before deciding whether it belongs in your journey.
            </p>
            <Link className="button button-paper" href="/method">
              How we build a guide <ArrowUpRight size={19} />
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
              Find the experience worth planning around. Keep your favourites,
              compare the practical details and give each day a little room.
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
