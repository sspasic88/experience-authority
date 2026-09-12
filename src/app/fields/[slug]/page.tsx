import Link from "next/link";
import { notFound } from "next/navigation";
import { EmptyState, ExperienceCard, PageIntro } from "@/components/editorial";
import { fields } from "@/lib/catalog";
import { getExperiences } from "@/lib/data";
import { pageMetadata, isDiscoverable } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const field = fields.find((f) => f.slug === slug);
  if (!field) notFound();
  return pageMetadata(
    field.name,
    field.line,
    `/fields/${field.slug}`,
    !getExperiences().some(
      (item) => item.field === field.slug && isDiscoverable(item),
    ),
  );
}
export default async function Field({ params }: Props) {
  const { slug } = await params;
  const selected = fields.find((f) => f.slug === slug);
  if (!selected) notFound();
  const items = getExperiences().filter((item) => item.field === selected.slug);
  return (
    <div className="wrap page-section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/fields">Fields</Link>
        <span>/</span>
        <span>{selected.name}</span>
      </nav>
      <PageIntro eyebrow="A field of experience" title={`${selected.name}.`}>
        <p>{selected.line}</p>
      </PageIntro>
      {items.length ? (
        <div className="experience-grid">
          {items.map((item, index) => (
            <ExperienceCard item={item} index={index} key={item.id} />
          ))}
        </div>
      ) : (
        <EmptyState title="An open space for future stories.">
          <p>
            No guide is ready in this field yet. An empty space is better than
            an unsupported recommendation.
          </p>
          <Link href="/explore" className="button">
            Explore other fields <span aria-hidden="true">↗</span>
          </Link>
        </EmptyState>
      )}
    </div>
  );
}
