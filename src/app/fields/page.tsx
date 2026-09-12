import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/editorial";
import { fields } from "@/lib/catalog";
import { demoMode, getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Fields of experience",
  "Explore the fields of experience that already contain complete, sourced public guides.",
  "/fields",
);
export default function Fields() {
  const items = getExperiences();
  const activeFields = fields.filter((field) =>
    items.some((item) => item.field === field.slug),
  );
  return (
    <div className="wrap page-section fields-page">
      <PageIntro eyebrow="Ways of being there" title="Follow your curiosity.">
        <p>
          {activeFields.length} active fields in the current edition. Every one
          opens to complete guides, practical access information and sources.
        </p>
      </PageIntro>
      <div className="field-group-heading">
        <p className="eyebrow">Explore now</p>
        <p>
          Each active field already has at least one complete public-source
          guide.
        </p>
      </div>
      <div className="directory-grid">
        {activeFields.map((field, index) => {
          const fieldItems = items.filter((item) => item.field === field.slug);
          const samplePlaces = fieldItems
            .slice(0, 3)
            .map((item) => item.place)
            .join(" · ");
          return (
            <Link
              href={`/fields/${field.slug}`}
              className="directory-tile"
              key={field.slug}
            >
              <span className="eyebrow">
                Field {String(index + 1).padStart(2, "0")}
              </span>
              <h2>
                {field.name}
                <ArrowUpRight size={25} />
              </h2>
              <p>{field.line}</p>
              <small>
                {fieldItems.length}{" "}
                {demoMode
                  ? "demo stories"
                  : fieldItems.length === 1
                    ? "guide"
                    : "guides"}
                {samplePlaces && ` / ${samplePlaces}`}
              </small>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
