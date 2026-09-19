import Link from "next/link";
import { fields } from "@/lib/catalog";
import { chapterHref, type resolveCityChapters } from "@/lib/city-chapters";
import { guideMediaFor } from "@/lib/media";
import { SITE_ORIGIN } from "@/lib/seo";
import { ImageCredit, Photo } from "./editorial";
import { SaveJourney } from "./save-journey";
import { ShareButton } from "./share-button";

export function CityChapterSection({
  chapter,
  excludePhotoSlug,
}: {
  chapter: ReturnType<typeof resolveCityChapters>[number];
  excludePhotoSlug?: string;
}) {
  return (
    <section
      className="city-chapter"
      id={chapter.slug}
      aria-labelledby={`${chapter.slug}-title`}
    >
      <div className="chapter-intro">
        <p className="eyebrow">Put the place together / {chapter.name}</p>
        <h2 id={`${chapter.slug}-title`}>{chapter.title}</h2>
        <p>{chapter.intro}</p>
        <p className="chapter-pace">{chapter.pace}</p>
      </div>
      <ol className="chapter-stops">
        {chapter.stops.map(({ item, moment, why }, index) => {
          const media = guideMediaFor(item.id);
          const showPhoto = media && item.slug !== excludePhotoSlug;
          return (
            <li key={item.id}>
              {showPhoto && (
                <div className="chapter-stop-photo">
                  <Link
                    href={`/experiences/${item.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Photo
                      src={media.src}
                      alt=""
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 38vw"
                    />
                  </Link>
                  <ImageCredit media={media} />
                </div>
              )}
              <span className="chapter-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow">
                {fields.find((field) => field.slug === item.field)?.name}
              </p>
              <h3>
                <Link href={`/experiences/${item.slug}`}>{item.title} ↗</Link>
              </h3>
              <p className="chapter-moment">{moment}</p>
              <p>{why}</p>
            </li>
          );
        })}
      </ol>
      <div className="chapter-planning">
        <h3>Make it work for your dates</h3>
        <p>{chapter.planning}</p>
      </div>
      <div className="chapter-footer">
        <SaveJourney ids={chapter.stops.map((stop) => stop.item.id)} />
        <ShareButton
          title={`${chapter.name} with Experience Authority`}
          text={chapter.title}
          url={`${SITE_ORIGIN}${chapterHref(chapter)}`}
          label="Send this idea"
        />
      </div>
      <p className="chapter-boundary">
        An EA planning idea built from our public-source guides. Not a packaged
        itinerary, live schedule or combined booking.
      </p>
    </section>
  );
}
