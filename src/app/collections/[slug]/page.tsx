import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EmptyState,
  ExperienceCard,
  ImageCredit,
  PageIntro,
  Photo,
} from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import { getEditorialPathway } from "@/lib/editorial-pathways";
import {
  pageMetadata,
  isDiscoverable,
  collectionStructuredData,
} from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { ShareButton } from "@/components/share-button";
import { guideMediaFor } from "@/lib/media";
import { ProgressiveGrid } from "@/components/progressive-grid";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const collection = getEditorialPathway(slug);
  if (!collection) notFound();
  return pageMetadata(
    `${collection.title} | EA collection`,
    collection.promise,
    `/collections/${collection.slug}`,
    !getExperiences().some(
      (item) =>
        collection.guideSlugs.some((guideSlug) => guideSlug === item.slug) &&
        isDiscoverable(item),
    ),
  );
}
export default async function Collection({ params }: Props) {
  const { slug } = await params;
  const collection = getEditorialPathway(slug);
  if (!collection) notFound();
  const allItems = getExperiences();
  const items = collection.guideSlugs.flatMap((guideSlug) => {
    const item = allItems.find((experience) => experience.slug === guideSlug);
    return item ? [item] : [];
  });
  const lead = items.find(
    (item) => item.image && Boolean(guideMediaFor(item.id)),
  );
  const leadMedia = lead ? guideMediaFor(lead.id) : undefined;
  return (
    <div className="wrap page-section">
      <StructuredData
        data={collectionStructuredData(
          collection.title,
          `/collections/${collection.slug}`,
          items,
        )}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/collections">Collections</Link>
        <span>/</span>
        <span>{collection.title}</span>
      </nav>
      <div className="collection-detail-hero">
        <PageIntro eyebrow="An editorial thread" title={`${collection.title}.`}>
          <p>{collection.promise}</p>
        </PageIntro>
        {lead && leadMedia && (
          <figure className="collection-detail-cover">
            <Link
              href={`/experiences/${lead.slug}`}
              aria-label={`Open ${lead.title}`}
            >
              <Photo
                src={leadMedia.src}
                alt={leadMedia.alt}
                priority
                sizes="(max-width: 850px) 100vw, 44vw"
              />
            </Link>
            <ImageCredit media={leadMedia} />
          </figure>
        )}
      </div>
      <details className="collection-editorial-intro">
        <summary>Why these experiences belong together</summary>
        <p>{collection.intro}</p>
      </details>
      <div className="collection-share-row">
        <ShareButton
          title={collection.title}
          text={collection.promise}
          url={`https://experienceauthority.com/collections/${collection.slug}`}
          label="Share this collection"
        />
      </div>
      <aside className="pathway-use" aria-label="How to use this pathway">
        <div>
          <p className="eyebrow">How to use this pathway</p>
          <p>{collection.visitorUse}</p>
        </div>
        <div>
          <p className="eyebrow">Keep the thread going</p>
          <p>{collection.returnAndShare}</p>
        </div>
      </aside>
      {items.length ? (
        <ProgressiveGrid
          heading="Experiences in this collection"
          surface={`collection-${collection.slug}`}
        >
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </ProgressiveGrid>
      ) : (
        <EmptyState>
          <p>
            The pathway will appear after its first experiences have been
            reviewed.
          </p>
        </EmptyState>
      )}
    </div>
  );
}
