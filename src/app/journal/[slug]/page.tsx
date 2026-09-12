import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock3 } from "lucide-react";
import {
  ExperienceCard,
  ImageCredit,
  Photo,
  SectionHeading,
} from "@/components/editorial";
import { ShareButton } from "@/components/share-button";
import { StructuredData } from "@/components/structured-data";
import { getExperiences } from "@/lib/data";
import {
  getJournalArticle,
  getJournalArticles,
  journalArticleStructuredData,
} from "@/lib/journal";
import { canonicalUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getJournalArticles(getExperiences()).map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getJournalArticle((await params).slug, getExperiences());
  if (!article) notFound();

  const metadata = pageMetadata(
    article.title,
    article.summary,
    "/journal/" + encodeURIComponent(article.slug),
  );

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.publishedOn,
      modifiedTime: article.updatedOn,
      images: [
        { url: canonicalUrl(article.media.src), alt: article.media.alt },
      ],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      images: [
        { url: canonicalUrl(article.media.src), alt: article.media.alt },
      ],
    },
  };
}

const displayDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value + "T00:00:00Z"));

export default async function JournalArticlePage({ params }: Props) {
  const article = getJournalArticle((await params).slug, getExperiences());
  if (!article) notFound();

  const url = "https://experienceauthority.com/journal/" + article.slug;

  return (
    <div className="journal-article-page">
      <StructuredData data={journalArticleStructuredData(article)} />

      <div className="wrap journal-toolbar">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/journal">Journal</Link>
          <span>/</span>
          <span>{article.title}</span>
        </nav>
        <ShareButton
          title={article.title + " | Experience Authority"}
          text={article.summary}
          url={url}
          label="Share article"
        />
      </div>

      <header className="journal-article-hero">
        <figure className="journal-article-image">
          <Link
            className="journal-article-photo-link"
            href={"/experiences/" + article.leadGuide.slug}
            aria-label={"Open the guide " + article.leadGuide.title}
          >
            <Photo
              src={article.media.src}
              alt={article.media.alt}
              priority
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </Link>
          <ImageCredit media={article.media} />
        </figure>
        <div className="journal-article-heading">
          <p className="eyebrow">EA Journal / {article.eyebrow}</p>
          <h1>{article.title}</h1>
          <p className="journal-article-dek">{article.summary}</p>
          <div className="journal-article-byline">
            <span>Experience Authority</span>
            <time dateTime={article.publishedOn}>
              {displayDate(article.publishedOn)}
            </time>
            <span>
              <Clock3 size={15} aria-hidden="true" />
              {article.readingMinutes} min read
            </span>
          </div>
        </div>
      </header>

      <div className="wrap journal-reading-layout">
        <nav className="journal-on-page" aria-label="In this article">
          <p className="eyebrow">In this article</p>
          <ol>
            {article.sections.map((section, index) => (
              <li key={section.title}>
                <a href={"#section-" + (index + 1)}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="journal-prose">
          {article.sections.map((section, index) => (
            <section
              className="journal-prose-section"
              id={"section-" + (index + 1)}
              key={section.title}
            >
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <aside className="journal-decision" aria-labelledby="decision-title">
            <p className="eyebrow">Decision guide</p>
            <h2 id="decision-title">{article.decision.title}</h2>
            <p>{article.decision.intro}</p>
            <ol>
              {article.decision.questions.map((question, index) => (
                <li key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                </li>
              ))}
            </ol>
          </aside>

          <p className="journal-closing">{article.closing}</p>
          <div className="correction-inline">
            <strong>Something we should revisit?</strong>
            <Link
              className="text-link"
              href={`/corrections?page=${encodeURIComponent(`/journal/${article.slug}`)}`}
            >
              Suggest a correction <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <section className="journal-sources" aria-labelledby="sources-title">
            <p className="eyebrow">Source trail</p>
            <h2 id="sources-title">Evidence behind the examples</h2>
            <p>
              The article's practical advice is original EA editorial work.
              Concrete examples come only from active public guides and the
              existing sources below.
            </p>
            <ol>
              {article.sources.map((source) => (
                <li key={source.guideSlug + "-" + source.url}>
                  <p>
                    From{" "}
                    <Link href={"/experiences/" + source.guideSlug}>
                      {source.guideTitle}
                    </Link>
                  </p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title} <ArrowUpRight size={16} aria-hidden="true" />
                    <span className="sr-only"> (opens a new tab)</span>
                  </a>
                  <small>{source.note}</small>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </div>

      <section className="wrap journal-related">
        <SectionHeading
          eyebrow="Put the idea somewhere real"
          title="Guides used in this article."
          href="/explore"
          link="Explore Compass"
        />
        <div className="experience-grid">
          {article.guides.map((guide, index) => (
            <ExperienceCard key={guide.id} item={guide} index={index} />
          ))}
        </div>
      </section>

      <aside className="journal-next-band">
        <div className="wrap">
          <p className="eyebrow">Continue reading</p>
          <h2>A better journey can begin with one better question.</h2>
          <Link className="button button-paper" href="/journal">
            Back to Journal <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
