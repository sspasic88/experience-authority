import Link from "next/link";
import { notFound } from "next/navigation";
import { EmptyState, ExperienceCard, PageIntro } from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import { getEditorialPathway } from "@/lib/editorial-pathways";
import { pageMetadata, isDiscoverable } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const collection = getEditorialPathway(slug);
  if (!collection) notFound();
  return pageMetadata(
    collection.title,
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
  return (
    <div className="wrap page-section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/collections">Collections</Link>
        <span>/</span>
        <span>{collection.title}</span>
      </nav>
      <PageIntro eyebrow="An editorial thread" title={`${collection.title}.`}>
        <p>{collection.promise}</p>
        <p>{collection.intro}</p>
      </PageIntro>
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
        <div className="experience-grid">
          <h2 className="sr-only">Experiences in this collection</h2>
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
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
