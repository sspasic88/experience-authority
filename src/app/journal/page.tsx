import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { PageIntro, Photo } from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import { getJournalArticles } from "@/lib/journal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Journal",
  "Practical ideas for choosing fewer experiences, entering them well and building a journey that leaves room for place.",
  "/journal",
);

const displayDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value + "T00:00:00Z"));

export default function JournalPage() {
  const articles = getJournalArticles(getExperiences());

  return (
    <div className="journal-page page-section">
      <header className="wrap journal-index-header">
        <PageIntro eyebrow="EA Journal" title="Travel with a better question.">
          <p>
            Practical editorial notes for turning inspiration into a considered
            day, a clearer choice and a more respectful way of arriving.
          </p>
        </PageIntro>
        <aside className="journal-index-note">
          <BookOpen size={25} strokeWidth={1.4} aria-hidden="true" />
          <p>
            Written from the current EA public-guide edition. Every concrete
            example links back to its guide and source trail.
          </p>
        </aside>
      </header>

      <section className="wrap" aria-labelledby="journal-stories">
        <div className="journal-index-rule">
          <h2 id="journal-stories">Ways to plan with more intention</h2>
          <span>{articles.length} original articles</span>
        </div>
        <div className="journal-grid">
          {articles.map((article, index) => (
            <article
              className={
                "journal-card" + (index === 0 ? " journal-card-featured" : "")
              }
              key={article.slug}
            >
              <div className="journal-card-media">
                <Link
                  className="journal-card-photo"
                  href={"/journal/" + article.slug}
                  aria-label={"Read " + article.title}
                >
                  <Photo
                    src={article.media.src}
                    alt={article.media.alt}
                    priority={index < 2}
                    sizes={
                      index === 0
                        ? "(max-width: 760px) 100vw, 66vw"
                        : "(max-width: 760px) 100vw, 33vw"
                    }
                  />
                </Link>
                <Link
                  className="image-source-badge"
                  href={"/credits#media-" + article.media.guideId}
                  aria-label={"Photo credit for " + article.title}
                >
                  Photo credit <span aria-hidden="true">↗</span>
                </Link>
                <span className="journal-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="journal-card-copy">
                <p className="journal-card-meta">
                  <span>{article.eyebrow}</span>
                  <span>{article.readingMinutes} min read</span>
                </p>
                <h2>
                  <Link href={"/journal/" + article.slug}>
                    {article.title}
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </Link>
                </h2>
                <p>{article.summary}</p>
                <footer>
                  <time dateTime={article.publishedOn}>
                    {displayDate(article.publishedOn)}
                  </time>
                  <span>{article.guides.length} guide examples</span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="journal-index-close">
        <div className="wrap">
          <p className="eyebrow">Keep looking</p>
          <h2>Ideas become useful when they meet a real place.</h2>
          <Link className="button button-paper" href="/explore">
            Open Compass <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
