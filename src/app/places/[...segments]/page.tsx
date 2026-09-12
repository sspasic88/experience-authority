import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EmptyState,
  ExperienceCard,
  PageIntro,
  Photo,
  SectionHeading,
} from "@/components/editorial";
import { demoMode, getExperiences, getTerritories } from "@/lib/data";
import { pageMetadata, isDiscoverable } from "@/lib/seo";
type Props = { params: Promise<{ segments: string[] }> };
export async function generateMetadata({ params }: Props) {
  const segments = (await params).segments;
  const [country, region] = segments;
  const place = getTerritories().find((t) => t.slug === country);
  if (!place || segments.length > 2 || (region && region !== place.region))
    notFound();
  return pageMetadata(
    region ? place.regionName : place.name,
    place.intro,
    `/places/${segments.join("/")}`,
    !getExperiences().some(
      (item) =>
        item.countrySlug === country &&
        (!region || item.regionSlug === region) &&
        isDiscoverable(item),
    ),
  );
}
export default async function Place({ params }: Props) {
  const segments = (await params).segments;
  const [country, region] = segments;
  const place = getTerritories().find((t) => t.slug === country);
  if (!place || segments.length > 2 || (region && region !== place.region))
    notFound();
  const items = getExperiences().filter(
    (e) => e.countrySlug === place.slug && (!region || e.regionSlug === region),
  );
  return (
    <div className="wrap page-section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/places">Places</Link>
        <span>/</span>
        <Link href={`/places/${place.slug}`}>{place.name}</Link>
        {region && (
          <>
            <span>/</span>
            <span>{place.regionName}</span>
          </>
        )}
      </nav>
      <PageIntro
        eyebrow={
          demoMode ? "A research direction" : "A specific way into a place"
        }
        title={`${region ? place.regionName : place.name}.`}
      >
        <p>{place.intro}</p>
      </PageIntro>
      {place.image && (
        <>
          <div className="territory-banner">
            <Photo
              src={place.image}
              alt="Illustrative stock photograph for a research direction, not evidence of a local experience."
              priority
            />
          </div>
          <p className="section-note">
            Illustrative photography. See{" "}
            <Link href="/credits" className="reset-link">
              sources and actual photo locations
            </Link>
            .
          </p>
        </>
      )}
      {!region && (
        <nav className="region-links" aria-label="Regions">
          <Link href={`/places/${place.slug}/${place.region}`}>
            {place.regionName} ↗
          </Link>
        </nav>
      )}
      <SectionHeading
        eyebrow="Closer to place"
        title={demoMode ? "Stories taking shape." : "A way to be here."}
      />
      {items.length ? (
        <div className="experience-grid">
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <EmptyState>
          <p>No reviewed stories are published here yet.</p>
        </EmptyState>
      )}
    </div>
  );
}
