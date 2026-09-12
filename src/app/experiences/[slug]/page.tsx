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
import { pageMetadata, isDiscoverable } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const item = getExperience((await params).slug);
  if (!item) notFound();
  const protectedStory = item.status === "protected_visibility";
  return pageMetadata(
    protectedStory ? "A protected story" : item.title,
    protectedStory
      ? "Some stories require limited visibility. No location, holder or access details are shared here."
      : item.summary,
    `/experiences/${encodeURIComponent(item.slug)}`,
    !isDiscoverable(item),
  );
}
export default async function Experience({ params }: Props) {
  const item = getExperience((await params).slug);
  if (!item) notFound();
  const related = getExperiences()
    .filter((e) => e.id !== item.id && e.status !== "protected_visibility")
    .slice(0, 3);
  return (
    <div className="wrap">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/explore">Compass</Link>
        <span>/</span>
        <Link href={`/fields/${item.field}`}>{item.field}</Link>
        <span>/</span>
        <span>{item.countrySlug ? item.country : "Protected story"}</span>
      </nav>
      <header className="experience-intro">
        <div>
          <StatusBadge status={item.status} demo={item.demo} />
          <h1>
            {item.title}
            <span className="orange-period">.</span>
          </h1>
          <p>{item.summary}</p>
        </div>
      </header>
      <div className="detail-media">
        {item.image ? (
          <Photo src={item.image} alt={item.imageAlt} priority sizes="100vw" />
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
      </div>
      <p className="detail-photo-credit">
        {item.image
          ? "Illustrative stock photography, not evidence of this experience. "
          : "Original EA typographic artwork. No venue or participant photograph is used. "}
        <Link href="/credits" className="reset-link">
          Image sources & credits
        </Link>
      </p>
      {item.demo ? (
        <div className="demo-callout">
          <strong>Design preview — fictional experience.</strong> Status labels
          demonstrate the interface, not real access. Do not plan a visit using
          this page.
        </div>
      ) : item.guideReview ? (
        <div className="guide-disclosure">
          <div>
            <strong>Public-source guide.</strong> Independent desk research, not
            an on-site review or a locally validated EA selection. No provider
            partnership is implied.
          </div>
          <a href="#sources" className="text-link">
            Sources & scope <span aria-hidden="true">↘</span>
          </a>
        </div>
      ) : null}
      <div className="detail-layout">
        <article>
          <section className="story-section">
            <p className="eyebrow">01 / The experience</p>
            <h2>What happens here.</h2>
            <p>{item.kernel}</p>
          </section>
          <section className="story-section">
            <p className="eyebrow">02 / Rootedness</p>
            <h2>Why here. Why these people.</h2>
            <p>{item.rootedness}</p>
          </section>
          <section className="story-section shift-section">
            <p className="eyebrow">03 / The shift</p>
            <p>{item.shift}</p>
          </section>
          <section className="story-section">
            <p className="eyebrow">04 / What you might take with you</p>
            <h2>A possible human return.</h2>
            <p>{item.humanReturn}</p>
          </section>
          <section className="story-section">
            <p className="eyebrow">05 / Responsible presence</p>
            <h2>Before you think about going.</h2>
            <p>{item.responsibility}</p>
          </section>
          <section className="story-section">
            <p className="eyebrow">06 / Evidence boundary</p>
            <h2>What we know. What we don’t.</h2>
            <p>{item.evidence}</p>
            {item.demo && (
              <p>
                No local reviewer, holder, source-based assessment or validation
                date has been assigned. A live entry requires all relevant
                checks before publication.
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
                . This date records a desk check, not a visit. Sources from the
                same organisation are not independent corroboration.
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
                An official public offer is not guaranteed availability. Please
                recheck before travelling.{" "}
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
  );
}
