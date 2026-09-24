import Link from "next/link";
import { ExperienceCard, PageIntro } from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import { publishedReleases } from "@/lib/releases";
import { editionDate } from "@/lib/daily-discovery";
import { pageMetadata } from "@/lib/seo";
import { NewGuideBrowser } from "@/components/new-guide-browser";

const spotlightOrder = [
  "watch-rio-build-the-parade-before-carnaval",
  "let-the-delta-decide-the-route",
  "begin-haida-gwaii-with-haida-voices",
  "meet-the-wine-below-the-cellar-floor",
  "roast-the-cup-on-kilimanjaros-slopes",
  "stand-where-the-sound-system-does-the-talking",
  "let-the-lateen-sail-read-lamus-water",
  "climb-without-making-the-mountain-yours",
  "read-nubia-before-the-sail-opens",
];

function orderRelease<T extends { slug: string }>(guides: T[]) {
  const rank = new Map(spotlightOrder.map((slug, index) => [slug, index]));
  return [...guides].sort(
    (a, b) =>
      (rank.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
      (rank.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
  );
}

export const metadata = pageMetadata(
  "New guides",
  "The latest published Experience Authority guides, grouped by their actual release date. New ways into familiar places, with sources and practical access details.",
  "/new",
);
export default function NewGuides() {
  const experiences = getExperiences();
  const today = new Date().toISOString().slice(0, 10);
  const releases = publishedReleases(experiences, today);
  const entries = releases.flatMap((release) =>
    orderRelease(release.guides).map((item) => ({ item, date: release.date })),
  );
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Newly published" title="More to come back for.">
        <p>
          New guides, with their publication dates. For a fresh angle on an
          existing experience, visit{" "}
          <Link className="text-link" href="/today">
            Daily discovery ↗
          </Link>
        </p>
      </PageIntro>
      <NewGuideBrowser
        today={today}
        allPlaces={experiences.map(
          ({ id, slug, title, field, countrySlug, regionSlug }) => ({
            id,
            slug,
            title,
            field,
            countrySlug,
            regionSlug,
          }),
        )}
        items={entries.map(
          ({
            item: { id, slug, title, field, countrySlug, regionSlug, country },
            date,
          }) => ({
            id,
            slug,
            title,
            field,
            countrySlug,
            regionSlug,
            country,
            date,
            dateLabel: editionDate(date),
          }),
        )}
      >
        {entries.map(({ item }) => (
          <ExperienceCard item={item} key={item.id} />
        ))}
      </NewGuideBrowser>
      <p className="section-note">
        This release log starts with the 12 September 2026 edition. Earlier
        guides remain in Compass. A source check is not counted as a new
        publication.
      </p>
      <Link href="/explore" className="text-link">
        Browse all guides ↗
      </Link>
    </div>
  );
}
