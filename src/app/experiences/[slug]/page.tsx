import Link from "next/link";
import { notFound } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { ExperienceActions } from "@/components/passport-provider";
import {
  ExperienceCard,
  GuideArt,
  Photo,
  SectionHeading,
  StatusBadge,
} from "@/components/editorial";
import { getExperience, getExperiences } from "@/lib/data";
import { guideMediaFor } from "@/lib/media";
import { PhotoViewer } from "@/components/photo-viewer";
import { ShareButton } from "@/components/share-button";
import { StructuredData } from "@/components/structured-data";
import { relatedExperiences } from "@/lib/catalog";
import {
  pageMetadata,
  isDiscoverable,
  canonicalUrl,
  guideStructuredData,
} from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const item = getExperience((await params).slug);
  if (!item) notFound();
  const protectedStory = item.status === "protected_visibility";
  const metadata = pageMetadata(
    protectedStory ? "A protected story" : `${item.title} | ${item.place}`,
    protectedStory
      ? "Some stories require limited visibility. No location, holder or access details are shared here."
      : item.summary,
    `/experiences/${encodeURIComponent(item.slug)}`,
    !isDiscoverable(item),
  );
  const media = !protectedStory && guideMediaFor(item.id);
  if (!media) return metadata;
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [{ url: canonicalUrl(media.src), alt: media.alt }],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image" as const,
      images: [{ url: canonicalUrl(media.src), alt: media.alt }],
    },
  };
}
export default async function Experience({ params }: Props) {
  const item = getExperience((await params).slug);
  if (!item) notFound();
  const media = guideMediaFor(item.id);
  const related = relatedExperiences(item, getExperiences());
  const structuredData = guideStructuredData(item);
  return (
    <div className="experience-page">
      {structuredData && <StructuredData data={structuredData} />}
      <div className="detail-toolbar wrap">
        <nav aria-label="Breadcrumb">
          <Link href="/explore">← Back to Compass</Link>
        </nav>
        <div className="detail-toolbar-actions">
          <ShareButton
            title={`${item.title} | Experience Authority`}
            text={item.summary}
            url={`https://experienceauthority.com/experiences/${item.slug}`}
          />
          <ExperienceActions item={item} compact />
        </div>
      </div>
      <section
        className="prototype-detail-hero"
        aria-labelledby="experience-title"
      >
        <figure className="prototype-detail-photo">
          {item.image ? (
            <Photo
              src={item.image}
              alt={item.imageAlt}
              priority
              className={`photo-${item.id}`}
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          ) : item.status === "public_guide" ? (
            <GuideArt item={item} />
          ) : (
            <div className="protected-art">
              <LockKeyhole size={55} strokeWidth={1} />
              <span>
                {item.status === "protected_visibility"
                  ? "Visibility is not an invitation."
                  : "An experience concept. Not a verified listing."}
              </span>
            </div>
          )}
          {media && <PhotoViewer media={media} />}
          {media && (
            <figcaption>
              <Link href={`/credits#media-${media.guideId}`}>
                Photo: {media.photographer} · Source & licence{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </figcaption>
          )}
        </figure>
        <header className="prototype-detail-copy">
          <div className="prototype-detail-kicker">
            <Link href={`/fields/${item.field}`}>{item.field}</Link>
            <span aria-hidden="true">/</span>
            <span>{item.countrySlug ? item.country : "Protected story"}</span>
          </div>
          <h1 id="experience-title">{item.title}</h1>
          <p className="prototype-detail-summary">{item.summary}</p>
          <dl className="prototype-detail-facts">
            <div>
              <dt>Place</dt>
              <dd>
                {item.place}
                {item.countrySlug && `, ${item.country}`}
              </dd>
            </div>
            <div>
              <dt>EA edition</dt>
              <dd>
                <StatusBadge status={item.status} demo={item.demo} />
              </dd>
            </div>
            <div className="prototype-detail-time">
              <dt>Time needed</dt>
              <dd>{item.duration}</dd>
            </div>
          </dl>
          {item.guideReview && (
            <div className="detail-start-actions">
              <a
                className="button button-dark"
                href={item.guideReview.accessUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan your visit <span aria-hidden="true">↗</span>
                <span className="sr-only">
                  {" "}
                  . Official website (opens a new tab)
                </span>
              </a>
              <a className="text-link" href="#before-you-go">
                Good to know ↓
              </a>
              <span className="small-note">
                Check current details with the host. Booking is not handled by
                EA.
              </span>
            </div>
          )}
        </header>
      </section>
      <div className="wrap">
        <p className="detail-photo-credit">
          {media ? (
            <>
              {media.depiction}{" "}
              <Link
                href={`/credits#media-${media.guideId}`}
                className="reset-link"
              >
                Image source & credit
              </Link>
            </>
          ) : item.image ? (
            <>
              Illustrative stock photography, not evidence of this experience.{" "}
              <Link href="/credits" className="reset-link">
                Image sources & credits
              </Link>
            </>
          ) : (
            <>
              Original EA typographic artwork. No venue or participant
              photograph is used.{" "}
              <Link href="/credits" className="reset-link">
                Image sources & credits
              </Link>
            </>
          )}
        </p>
        {item.demo ? (
          <div className="demo-callout">
            <strong>Design preview. Fictional experience.</strong> Status
            labels demonstrate the interface, not real access. Do not plan a
            visit using this page.
          </div>
        ) : item.guideReview ? (
          <aside className="guide-disclosure" aria-labelledby="guide-provenance">
            <div className="guide-disclosure-intro">
              <span className="guide-disclosure-slash" aria-hidden="true" />
              <div className="guide-disclosure-copy">
                <p id="guide-provenance" className="guide-disclosure-label">
                  Editorial provenance
                </p>
                <p>
                  <strong>Independent public-source guide.</strong> EA has
                  reviewed public information, not visited, locally validated
                  or partnered with the provider.
                </p>
              </div>
            </div>
            <a href="#sources" className="text-link">
              Read sources & scope <span aria-hidden="true">↘</span>
            </a>
          </aside>
        ) : null}
        <nav className="guide-section-nav" aria-label="In this guide">
          <a href="#the-experience">The experience</a>
          <a href="#why-here">Why here</a>
          <a href="#before-you-go">Before you go</a>
          {item.guideReview && <a href="#sources">Sources & scope</a>}
        </nav>
        <div className="detail-layout">
          <article>
            <section className="story-section" id="the-experience">
              <p className="eyebrow">01 / The experience</p>
              <h2>What happens here.</h2>
              <p>{item.kernel}</p>
            </section>
            <section className="story-section" id="why-here">
              <p className="eyebrow">02 / Rootedness</p>
              <h2>What makes it belong here.</h2>
              <p>{item.rootedness}</p>
            </section>
            <section className="story-section shift-section">
              <p className="eyebrow">03 / The shift</p>
              <p>{item.shift}</p>
            </section>
            <section className="story-section">
              <p className="eyebrow">04 / What you might take with you</p>
              <h2>What might stay with you.</h2>
              <p>{item.humanReturn}</p>
            </section>
            <section className="story-section">
              <p className="eyebrow" id="before-you-go">
                05 / Responsible presence
              </p>
              <h2>Before you think about going.</h2>
              <p>{item.responsibility}</p>
            </section>
            <section className="story-section">
              <p className="eyebrow">06 / Evidence boundary</p>
              <h2>What we know. What we don’t.</h2>
              <p>{item.evidence}</p>
              {item.demo && (
                <p>
                  No local reviewer, holder, source-based assessment or
                  validation date has been assigned. A live entry requires all
                  relevant checks before publication.
                </p>
              )}
            </section>
            {item.guideReview && (
              <section className="story-section source-section" id="sources">
                <p className="eyebrow">07 / Source notes</p>
                <h2>Read what this guide rests on.</h2>
                <p>
                  Public sources checked{" "}
                  <time dateTime={item.guideReview.checkedOn}>
                    {new Intl.DateTimeFormat("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(item.guideReview.checkedOn))}
                  </time>
                  . This date records a desk check, not a visit. Sources from
                  the same organisation are not independent corroboration.
                </p>
                <ol className="source-list">
                  {item.guideReview.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title} <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens a new tab)</span>
                      </a>
                      <p>{source.note}</p>
                    </li>
                  ))}
                </ol>
                <p className="small-note">
                  An official public offer is not guaranteed availability.
                  Please recheck before travelling.{" "}
                  <Link href="/method" className="text-link">
                    Our method ↗
                  </Link>
                </p>
              </section>
            )}
          </article>
          <aside className="fact-panel">
            <h2>At a glance.</h2>
            <dl>
              <dt>Field</dt>
              <dd>
                <Link href={`/fields/${item.field}`}>
                  {item.field.charAt(0).toUpperCase() + item.field.slice(1)}
                </Link>
              </dd>
              <dt>Place</dt>
              <dd>
                {item.place}
                {item.countrySlug && `, ${item.country}`}
              </dd>
              <dt>Time needed</dt>
              <dd>{item.duration}</dd>
              <dt>Participation</dt>
              <dd>{item.participation}</dd>
              <dt>Access</dt>
              <dd>
                {item.guideReview
                  ? {
                      public_programme: "Publicly offered programme",
                      public_admission: "Public admission",
                      public_hospitality: "Public dining",
                    }[item.guideReview.scope]
                  : "No access offered"}
              </dd>
            </dl>
            <ExperienceActions item={item} />
            <Link className="text-link" href="/passport?view=plan">
              Build your journey in Passport ↗
            </Link>
            <p>{item.access}</p>
            {item.guideReview && (
              <a
                className="button official-access"
                href={item.guideReview.accessUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official access information <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens a new tab)</span>
              </a>
            )}
            <Link
              className="text-link"
              href={`/corrections?experience=${item.slug}`}
            >
              Help us get this right <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
        <section className="section">
          <SectionHeading
            eyebrow="Another way in"
            title="Keep your curiosity moving."
            href="/explore"
          />{" "}
          <div className="experience-grid">
            {related.map((entry, index) => (
              <ExperienceCard key={entry.id} item={entry} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
