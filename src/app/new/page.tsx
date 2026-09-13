import Link from "next/link";
import {
  ExperienceCard,
  PageIntro,
  SectionHeading,
} from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import { publishedReleases } from "@/lib/releases";
import { editionDate } from "@/lib/daily-discovery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "New guides",
  "The latest published Experience Authority guides, grouped by their actual release date. New ways into familiar places, with sources and practical access details.",
  "/new",
);
export default function NewGuides() {
  const releases = publishedReleases(getExperiences());
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
      {releases.map((release) => (
        <section className="release-section" key={release.date}>
          <SectionHeading
            eyebrow={`${release.guides.length} new guides`}
            title={editionDate(release.date)}
          />
          <div className="experience-grid">
            {release.guides.map((item) => (
              <ExperienceCard item={item} key={item.id} />
            ))}
          </div>
        </section>
      ))}
      <p className="section-note">
        This release log starts with the 12 September 2026 edition. Earlier
        guides remain in Compass. A source check is not counted as a new
        publication.
      </p>
      <Link href="/explore" className="text-link">
        Browse the complete guide ↗
      </Link>
    </div>
  );
}
