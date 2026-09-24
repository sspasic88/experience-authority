import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ExperienceCard,
  ImageCredit,
  PathwayCard,
  SectionHeading,
  Photo,
} from "@/components/editorial";
import { interests, matchesInterest } from "@/lib/catalog";
import {
  curateHome,
  homeHeroRotationIndex,
  resolveHomeHeroEditions,
  selectHomeHero,
} from "@/lib/home-curation";
import { getJournalArticles } from "@/lib/journal";
import { guideMediaFor } from "@/lib/media";
import { editorialPathways } from "@/lib/editorial-pathways";
import { getExperiences } from "@/lib/data";
import { StructuredData } from "@/components/structured-data";
import { HomeHero } from "@/components/home-hero";
import { PassportReturn } from "@/components/passport-return";
import { currentDiscovery, editionDate } from "@/lib/daily-discovery";
import { chapterHref, resolveCityChapters } from "@/lib/city-chapters";
import { publishedReleases } from "@/lib/releases";
import { withinPublicationWeek } from "@/lib/discovery-choices";
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
  const discovery = currentDiscovery(experiences);
  const chapters = resolveCityChapters(experiences);
  const day = Math.floor(Date.now() / 86400000);
  const today = new Date().toISOString().slice(0, 10);
  const weekCount = publishedReleases(experiences, today)
    .filter((release) => withinPublicationWeek(release.date, today))
    .reduce((sum, release) => sum + release.guides.length, 0);
  const chapterOffset = (day * 4) % Math.max(chapters.length, 1);
  const featuredChapters = [
    ...chapters.slice(chapterOffset),
    ...chapters.slice(0, chapterOffset),
  ];
  const initialHeroIndex = homeHeroRotationIndex();
  const editions = resolveHomeHeroEditions(experiences);
  const availableHeroEditions = editions.length
    ? editions
    : [selectHomeHero(experiences)];
  const hero =
    availableHeroEditions[initialHeroIndex % availableHeroEditions.length];
  const coverImages = new Set(
    availableHeroEditions.flat().map((item) => item.image),
  );
  const featuredChapterCards = featuredChapters
    .flatMap((chapter) => {
      const stop = chapter.stops.find(({ item }) =>
        Boolean(
          item.image && !coverImages.has(item.image) && guideMediaFor(item.id),
        ),
      );
      const media = stop && guideMediaFor(stop.item.id);
      if (media) coverImages.add(media.src);
      return stop && media ? [{ chapter, media }] : [];
    })
    .slice(0, 4);
  const { newGuides, homePathways, usedImages } = curateHome(
    experiences,
    editorialPathways,
    hero,
    today,
    featuredChapterCards.map(({ media }) => media.src),
  );
  const journal = getJournalArticles(experiences).flatMap((article) => {
    const guide = article.guides.find(
      (item) => item.image && !usedImages.has(item.image),
    );
    const media = guide && guideMediaFor(guide.id);
    return media ? [{ article, media }] : [];
  })[0];
  const lines: Record<string, string> = {
    "eat-drink": "Markets, shared tables and the stories behind a taste.",
    "make-learn": "Cook, try a craft or learn a practical skill.",
    "move-water": "Row, ride, dance or take a different route.",
    "explore-reflect": "Nature, working places and unexpected interiors.",
    "swim-reset": "A swim, a warm room or a slower stay.",
    "shared-rituals": "Music, celebrations and moments shared locally.",
  };
  return (
    <div className="home-edition">
      <StructuredData data={websiteStructuredData()} />
      <HomeHero
        items={experiences}
        heroEditions={availableHeroEditions}
        initialHeroIndex={initialHeroIndex}
      />
      {discovery && (
        <div className="wrap home-today">
          <Link className="daily-invitation" href="/today">
            <span>
              <span className="eyebrow">
                {discovery.date === new Date().toISOString().slice(0, 10)
                  ? "Today's discovery"
                  : "Latest discovery"}
              </span>
              <time dateTime={discovery.date}>
                {editionDate(discovery.date)}
              </time>
            </span>
            <strong>{discovery.title}</strong>
            <span className="daily-invitation-place">
              {discovery.item.place}{" "}
              <ArrowUpRight size={22} aria-hidden="true" />
            </span>
          </Link>
        </div>
      )}
      {featuredChapterCards.length > 0 && (
        <section className="section wrap home-destinations">
          <SectionHeading
            eyebrow="Start with a place"
            title="Where are you going?"
            href="/places"
            link="All destinations"
          />
          <p className="section-note">
            Find a familiar starting point and a less expected next step. Save
            the experiences that belong in your stay.
          </p>
          <div className="home-destination-grid">
            {featuredChapterCards.map(({ chapter, media }) => {
              const href = chapterHref(chapter).split("#")[0];
              return (
                <article className="home-destination-card" key={chapter.slug}>
                  <Link
                    className="home-destination-photo"
                    href={href}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Photo
                      src={media.src}
                      alt=""
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    />
                  </Link>
                  <div className="home-destination-copy">
                    <span className="eyebrow">
                      {chapter.stops.length} experiences
                    </span>
                    <h3>
                      <Link href={href}>{chapter.name}</Link>
                    </h3>
                    <Link className="home-destination-cta" href={href}>
                      Explore the place
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                  <ImageCredit media={media} />
                </article>
              );
            })}
          </div>
        </section>
      )}
      <section className="home-interests">
        <div className="wrap">
          <SectionHeading
            eyebrow="Or start with a curiosity"
            title="What do you feel like doing?"
            href="/explore"
            link="Open Compass"
          />
          <div className="home-interest-grid">
            {interests.map((interest) => {
              const count = experiences.filter((item) =>
                matchesInterest(item, interest),
              ).length;
              return (
                count > 0 && (
                  <Link
                    href={`/explore?interest=${interest.slug}`}
                    key={interest.slug}
                  >
                    <div>
                      <h3>{interest.name}</h3>
                      <p>{lines[interest.slug]}</p>
                    </div>
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </Link>
                )
              );
            })}
          </div>
        </div>
      </section>
      {newGuides.length > 0 && (
        <section className="section wrap">
          <SectionHeading
            eyebrow={
              weekCount
                ? `${weekCount} new guides in the past 7 days`
                : "Recently published"
            }
            title="Something you hadn't thought of."
            href="/new"
            link="All new guides"
          />
          <div className="experience-grid">
            {newGuides.slice(0, 3).map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      )}
      {homePathways.length > 0 && (
        <section className="section wrap home-collections">
          <SectionHeading
            eyebrow="EA collections"
            title="Follow what interests you."
            href="/collections"
            link="All collections"
          />
          <div className="collection-grid">
            {homePathways.map(({ pathway, item }, index) => (
              <PathwayCard
                key={pathway.slug}
                pathway={pathway}
                item={item}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
      {journal && (
        <section className="section wrap">
          <article className="home-journal-feature">
            <div className="place-card-image">
              <Link
                href={`/journal/${journal.article.slug}`}
                aria-label={`Read ${journal.article.title}`}
              >
                <Photo
                  src={journal.media.src}
                  alt={journal.media.alt}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </Link>
              <ImageCredit media={journal.media} />
            </div>
            <div>
              <p className="eyebrow">
                From the Journal / {journal.article.readingMinutes} min read
              </p>
              <h2>
                <Link href={`/journal/${journal.article.slug}`}>
                  {journal.article.title}
                </Link>
              </h2>
              <p>{journal.article.summary}</p>
              <Link
                className="text-link"
                href={`/journal/${journal.article.slug}`}
              >
                Read the story <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </section>
      )}
      <section className="section wrap home-keep">
        <PassportReturn />
        <p className="home-method-note">
          Independent public-source guides. Practical access notes and linked
          sources in every guide. <Link href="/method">Our method ↗</Link>
        </p>
      </section>
    </div>
  );
}
