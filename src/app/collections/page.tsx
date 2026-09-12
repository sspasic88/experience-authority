import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, Photo } from "@/components/editorial";
import { collections } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Collections",
  "Follow a thread between experiences. Editorial connections, not rankings or paid placements.",
  "/collections",
);
export default function Collections() {
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Connections, not checklists" title="Follow a thread.">
        <p>
          Small collections that bring experiences into conversation.
          Demonstration collections, with no paid placements.
        </p>
      </PageIntro>
      <div className="collection-grid">
        <h2 className="sr-only">Explore the collections</h2>
        {collections.map((c, i) => (
          <Link
            href={`/collections/${c.slug}`}
            className="collection-card"
            key={c.slug}
          >
            <div className="collection-image">
              <Photo
                src={c.image}
                alt="Illustrative photograph for an editorial theme, not documentation of the experiences."
              />
              <span>Collection {String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>
              {c.title}
              <ArrowUpRight size={23} />
            </h3>
            <p>{c.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
