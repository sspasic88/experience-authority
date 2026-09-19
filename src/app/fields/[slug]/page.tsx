import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceCard, PageIntro } from "@/components/editorial";
import { fields } from "@/lib/catalog";
import { getExperiences } from "@/lib/data";
import { pageMetadata, isDiscoverable } from "@/lib/seo";
import { ProgressiveGrid } from "@/components/progressive-grid";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const field = fields.find((f) => f.slug === slug);
  if (
    !field ||
    !getExperiences().some(
      (item) => item.field === field.slug && isDiscoverable(item),
    )
  )
    notFound();
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
  if (!items.length) notFound();
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
      <ProgressiveGrid
        heading="Experiences in this field"
        surface={`field-${selected.slug}`}
        initialCount={12}
      >
        {items.map((item, index) => (
          <ExperienceCard item={item} index={index} key={item.id} />
        ))}
      </ProgressiveGrid>
    </div>
  );
}
