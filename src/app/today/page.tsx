import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Photo,
  ImageCredit,
  ExperienceCard,
  SectionHeading,
  PageIntro,
} from "@/components/editorial";
import { ExperienceActions } from "@/components/passport-provider";
import { ShareButton } from "@/components/share-button";
import { CityChapterSection } from "@/components/city-chapter";
import { getExperiences } from "@/lib/data";
import { availableDiscoveries, editionDate } from "@/lib/daily-discovery";
import { resolveCityChapters } from "@/lib/city-chapters";
import { connectedExperiences } from "@/lib/catalog";
import { guideMediaFor } from "@/lib/media";
import { pageMetadata, SITE_ORIGIN, canonicalUrl } from "@/lib/seo";

type Props = { searchParams: Promise<{ date?: string | string[] }> };
export async function generateMetadata({ searchParams }: Props) {
  const { date } = await searchParams;
  const editions = availableDiscoveries(getExperiences());
  const edition =
    date === undefined
      ? editions.at(-1)
      : editions.find((edition) => edition.date === date);
  const metadata = pageMetadata(
    "Daily discovery",
    "One experience, a different way to see it and a practical next step. Explore EA's dated editorial discoveries and keep the ideas worth travelling for.",
    "/today",
    Boolean(date),
  );
  if (!edition?.item.image) return metadata;
  return {
    ...metadata,
    title: "Daily discovery",
    description: `Today's discovery in ${edition.item.place}: ${edition.item.summary}`,
    openGraph: {
      ...metadata.openGraph,
      title: edition.title,
      description: `Today's discovery in ${edition.item.place}: ${edition.item.summary}`,
      images: [
        { url: canonicalUrl(edition.item.image), alt: edition.item.imageAlt },
      ],
    },
    twitter: {
      ...metadata.twitter,
      title: edition.title,
      description: `Today's discovery in ${edition.item.place}: ${edition.item.summary}`,
      images: [canonicalUrl(edition.item.image)],
    },
  };
}

export default async function Today({ searchParams }: Props) {
  const { date } = await searchParams;
  const items = getExperiences();
  const today = new Date().toISOString().slice(0, 10);
  const editions = availableDiscoveries(items, today);
  const current =
    date === undefined
      ? editions.at(-1)
      : editions.find((edition) => edition.date === date);
  if (!current) notFound();
  const { item } = current;
  const media = guideMediaFor(item.id)!;
  const chapter = resolveCityChapters(items).find((chapter) =>
    chapter.stops.some((stop) => stop.slug === item.slug),
  );
  const related = chapter ? [] : connectedExperiences(item, items, 3);
  const previous = editions
    .filter((edition) => edition.date !== current.date)
    .reverse();
  return (
    <div className="wrap page-section daily-page">
      <PageIntro
        eyebrow={`${current.date === today ? "Daily discovery" : "From the discovery archive"} / ${editionDate(current.date)}`}
        title={current.title}
      >
        <p>One experience. A different way to see it. A practical next step.</p>
      </PageIntro>
      <article className="daily-feature">
        <div className="daily-photo">
          <Link
            className="daily-photo-link"
            href={`/experiences/${item.slug}`}
            aria-label={`Read ${item.title}`}
          >
            <Photo src={item.image!} alt={item.imageAlt} priority />
          </Link>
          <ImageCredit media={media} />
        </div>
        <div className="daily-story">
          <p className="eyebrow">
            {item.place} / {item.country}
          </p>
          <p className="daily-angle">{current.angle}</p>
          <div className="daily-notice">
            <h2>One thing to notice</h2>
            <p>{current.notice}</p>
          </div>
          <Link className="text-link" href={`/experiences/${item.slug}`}>
            Read the guide and practical details ↗
          </Link>
          <ExperienceActions item={item} />
        </div>
      </article>
      <div className="daily-question">
        <p className="eyebrow">A question to take with you</p>
        <h2>{current.question}</h2>
        <ShareButton
          title={current.title}
          text={`${current.question} An EA discovery for ${editionDate(current.date)}.`}
          url={`${SITE_ORIGIN}/today?date=${current.date}`}
          label="Send to someone curious"
        />
      </div>
      {chapter && <CityChapterSection chapter={chapter} />}
      {related.length > 0 && (
        <section className="section">
          <SectionHeading
            eyebrow="Follow the curiosity"
            title="Where the idea leads next."
          />
          <div className="experience-grid">
            {related.map(({ item }) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
      <section className="discovery-archive" aria-labelledby="archive-title">
        <SectionHeading
          eyebrow="Keep the thread"
          title="The discoveries so far."
          href="/new"
          link="See genuinely new guides"
        />
        <p id="archive-title" className="section-note">
          Dated editorial angles on our published guides, not a claim of a new
          review every day. Editions change at midnight UTC. Earlier ideas
          remain here to revisit and share.
        </p>
        {previous.length ? (
          <div className="archive-links">
            {previous.map((edition) => (
              <Link key={edition.date} href={`/today?date=${edition.date}`}>
                <time dateTime={edition.date}>{editionDate(edition.date)}</time>
                <strong>{edition.title}</strong>
                <span>{edition.item.place} ↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="section-note">
            This is the first edition. The archive will grow as the next dated
            discoveries appear.
          </p>
        )}
        {current.date !== editions.at(-1)?.date && (
          <Link href="/today" className="text-link">
            Back to the latest discovery ↗
          </Link>
        )}
      </section>
    </div>
  );
}
