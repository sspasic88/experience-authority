import Link from "next/link";
import { ExperienceCard, PageIntro } from "@/components/editorial";
import { CompassBrowser } from "@/components/compass-browser";
import { getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { orderExperienceDirectory } from "@/lib/home-curation";
import type { FinderQuery } from "@/lib/experience-finder";
import { canSurprise } from "@/lib/discovery-choices";
import { guideMediaFor } from "@/lib/media";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
export async function generateMetadata({ searchParams }: Props) {
  return pageMetadata(
    "Compass",
    "Find locally rooted experiences by place, curiosity, participation and the time you have. Original guides with sources and practical ways in.",
    "/explore",
    Object.keys(await searchParams).length > 0,
  );
}
export default async function Explore({ searchParams }: Props) {
  const raw = await searchParams;
  const query: FinderQuery = Object.fromEntries(
    [
      "q",
      "field",
      "interest",
      "place",
      "region",
      "mode",
      "time",
      "view",
      "surprise",
    ].map((key) => [
      key,
      typeof raw[key] === "string" ? raw[key].slice(0, 200) : "",
    ]),
  );
  const items = orderExperienceDirectory(getExperiences());
  return (
    <div className="wrap page-section compass-page">
      <PageIntro eyebrow="Find your way in" title="Compass.">
        <p>
          A morning to yourself. A skill you have never tried. A place you want
          to understand. Start with what moves you.
        </p>
        <p className="compass-context">
          Every guide brings together a place, a way to take part and the
          details to plan around it. <Link href="/method">How we work ↗</Link>
        </p>
      </PageIntro>
      <CompassBrowser
        initialQuery={query}
        surpriseItems={items
          .filter((item) =>
            canSurprise(
              item,
              guideMediaFor(item.id)?.visualReview?.outcome === "approved",
            ),
          )
          .map(
            ({
              id,
              slug,
              title,
              field,
              countrySlug,
              regionSlug,
              place,
              duration,
              participation,
            }) => ({
              id,
              slug,
              title,
              field,
              countrySlug,
              regionSlug,
              place,
              duration,
              participation,
              localHref: `/places/${countrySlug}/${regionSlug}`,
            }),
          )}
        items={items.map(
          ({
            slug,
            title,
            summary,
            place,
            country,
            countrySlug,
            regionSlug,
            field,
          }) => ({
            slug,
            title,
            summary,
            place,
            country,
            countrySlug,
            regionSlug,
            field,
          }),
        )}
      >
        {items.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </CompassBrowser>
    </div>
  );
}
