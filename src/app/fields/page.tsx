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
  return (
    <div className="wrap page-section">
      <PageIntro
        eyebrow="13 ways of being there"
        title="Follow your curiosity."
      >
        <p>Not categories of tourism. Ways of participating in the world.</p>
      </PageIntro>
      <div className="directory-grid">
        {fields.map((field, index) => (
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
              {items.filter((item) => item.field === field.slug).length}{" "}
              {demoMode ? "demo stories" : "guides"}
            </small>
          </Link>
        ))}
      </div>
    </div>
  );
}
