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
import {
  pageMetadata,
  isDiscoverable,
  collectionStructuredData,
} from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { destinationCoverage } from "@/lib/destinations";
import { DestinationBrowser } from "@/components/destination-browser";
type Props = { params: Promise<{ segments: string[] }> };
export async function generateMetadata({ params }: Props) {
  const segments = (await params).segments;
  const [country, region] = segments;
  const place = getTerritories().find((t) => t.slug === country);
  const selectedRegion = place?.regions.find((entry) => entry.slug === region);
  if (!place || segments.length > 2 || (region && !selectedRegion)) notFound();
  return pageMetadata(
    `${selectedRegion ? selectedRegion.name : place.name} experiences`,
    selectedRegion
      ? `Explore locally rooted experiences in ${selectedRegion.name}, with categories, original guides, sources and practical details to shape your visit.`
      : place.intro,
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
  const selectedRegion = place?.regions.find((entry) => entry.slug === region);
  if (!place || segments.length > 2 || (region && !selectedRegion)) notFound();
  const {
    local: items,
    categories,
    elsewhere,
  } = destinationCoverage(getExperiences(), country, region);
  return (
    <div className="wrap page-section">
      <StructuredData
        data={collectionStructuredData(
          `${selectedRegion?.name || place.name} experiences`,
          `/places/${segments.join("/")}`,
          items,
        )}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/places">Places</Link>
        <span>/</span>
        <Link href={`/places/${place.slug}`}>{place.name}</Link>
        {region && (
          <>
            <span>/</span>
            <span>{selectedRegion?.name}</span>
          </>
        )}
      </nav>
      <PageIntro
        eyebrow={
          demoMode ? "A research direction" : "A specific way into a place"
        }
        title={`${selectedRegion ? selectedRegion.name : place.name}.`}
      >
        <p>
          {selectedRegion
            ? `Explore ${selectedRegion.name} through ${items.length === 1 ? "a locally rooted experience" : "locally rooted experiences"}, with practical details and sources to help you plan.`
            : place.intro}
        </p>
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
          {place.regions.map((entry) => (
            <Link key={entry.slug} href={`/places/${place.slug}/${entry.slug}`}>
              {entry.name} ↗
            </Link>
          ))}
        </nav>
      )}
      <SectionHeading
        eyebrow="Closer to place"
        title={demoMode ? "Stories taking shape." : "Find your kind of day."}
      />
      {items.length ? (
        <DestinationBrowser
          key={segments.join("/")}
          items={items.map(({ slug, field }) => ({ slug, field }))}
          categories={categories}
          country={country}
          region={region}
        >
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </DestinationBrowser>
      ) : (
        <EmptyState>
          <p>No reviewed stories are published here yet.</p>
        </EmptyState>
      )}
      {items.length > 0 && categories.length < 3 && (
        <p className="destination-coverage-note">
          Our coverage here is still growing. These are the experiences we can
          currently support with a published guide, not a complete account of
          everything the destination offers.
        </p>
      )}
      {elsewhere.length > 0 && (
        <section className="destination-elsewhere">
          <SectionHeading
            eyebrow="If your journey goes further"
            title={`Elsewhere in ${place.name}.`}
            href={`/places/${country}`}
            link={`All ${place.name} experiences`}
          />
          <p className="section-note">
            Different places, not nearby recommendations. Check the distances
            and transport before combining them in one journey.
          </p>
          <div className="experience-grid">
            {elsewhere.slice(0, 3).map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
      {items.length > 0 && (
        <section className="place-essay" aria-labelledby="place-plan-title">
          <div>
            <p className="eyebrow">Build around one good reason</p>
            <h2 id="place-plan-title">
              Give {selectedRegion ? selectedRegion.name : place.name} room.
            </h2>
            <p>
              Choose the experience that makes you want to be here, then let the
              rest of the day support it. A little space before and after can
              turn an activity into the part of a journey you remember.
            </p>
            <Link className="text-link" href="/passport?view=plan">
              Make a private plan ↗
            </Link>
          </div>
          <ol>
            <li>
              <strong>Find your anchor</strong>
              <p>
                Read what you actually do, how you take part and the time the
                guide asks for. Save the one that fits your curiosity.
              </p>
            </li>
            <li>
              <strong>Let the place set the timing</strong>
              <p>
                Use the official information in the guide to confirm the current
                date, arrival point and reservation. Leave travel time outside
                the experience itself.
              </p>
            </li>
            <li>
              <strong>Keep an unplanned hour</strong>
              <p>
                Add your own meal, stay and transport notes in Passport. Share
                the draft with your companion while there is still room to
                change it.
              </p>
            </li>
          </ol>
        </section>
      )}
    </div>
  );
}
