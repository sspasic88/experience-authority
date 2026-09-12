import Link from "next/link";
import { notFound } from "next/navigation";
import { EmptyState, ExperienceCard, PageIntro } from "@/components/editorial";
import { collections } from "@/lib/catalog";
import { getExperiences } from "@/lib/data";
import { pageMetadata, isDiscoverable } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();
  return pageMetadata(
    collection.title,
    collection.subtitle,
    `/collections/${collection.slug}`,
    !getExperiences().some(
      (item) => collection.fields.includes(item.field) && isDiscoverable(item),
    ),
  );
}
export default async function Collection({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();
  const items = getExperiences().filter((e) =>
    collection.fields.includes(e.field),
  );
  return (
    <div className="wrap page-section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/collections">Collections</Link>
        <span>/</span>
        <span>{collection.title}</span>
      </nav>
      <PageIntro eyebrow="An editorial thread" title={`${collection.title}.`}>
        <p>
          {collection.subtitle} Editorial connections, never a ranking of
          providers.
        </p>
      </PageIntro>
      {items.length ? (
        <div className="experience-grid">
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <EmptyState>
          <p>
            The collection will appear after its first experiences have been
            reviewed.
          </p>
        </EmptyState>
      )}
    </div>
  );
}
