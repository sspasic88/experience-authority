import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/editorial";
import { fields } from "@/lib/catalog";
import { demoMode, getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Fields of experience",
  "Thirteen ways to participate in the world, from making and tasting to learning and paying attention.",
  "/fields",
);
export default function Fields() {
  const items = getExperiences();
  const activeFields = fields.filter((field) =>
    items.some((item) => item.field === field.slug),
  );
  const futureFields = fields.filter(
    (field) => !items.some((item) => item.field === field.slug),
  );
  return (
    <div className="wrap page-section">
      <PageIntro
        eyebrow="13 ways of being there"
        title="Follow your curiosity."
      >
        <p>
          {activeFields.length} ways into the current edition. Thirteen fields
          in the full EA lens. These are not categories of tourism, but ways of
          participating in the world.
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
      {futureFields.length > 0 && (
        <section
          className="future-fields"
          aria-labelledby="future-fields-title"
        >
          <div className="field-group-heading">
            <p className="eyebrow">What we are still looking for</p>
            <h2 id="future-fields-title">
              Open territory, held to the same standard.
            </h2>
            <p>
              These fields remain part of the EA lens. We will open them when a
              guide has a clear public route, enough evidence and photography we
              can credit honestly.
            </p>
          </div>
          <div className="future-field-grid">
            {futureFields.map((field) => (
              <article key={field.slug}>
                <span className="eyebrow">Future field</span>
                <h3>{field.name}</h3>
                <p>{field.line}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
