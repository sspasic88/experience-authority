import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/editorial";
import { demoMode, getTerritories, getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Places",
  "Find a way into experiences through their relationship to place and local knowledge.",
  "/places",
);
export default function Places() {
  const territories = getTerritories();
  const items = getExperiences();
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Closer to place" title="Somewhere becomes here.">
        <p>
          Start with the places in our current guides. Each is a specific way
          in, not a claim to cover an entire country.
        </p>
      </PageIntro>
      <div className="directory-grid">
        {territories.map((t, index) => (
          <Link
            href={`/places/${t.slug}`}
            className="directory-tile"
            key={t.slug}
          >
            <span className="eyebrow">
              Territory {String(index + 1).padStart(2, "0")}
            </span>
            <h2>
              {t.name}
              <ArrowUpRight size={25} />
            </h2>
            <p>{t.intro}</p>
            <small>
              {t.regions.map((region) => region.name).join(" · ")} /{" "}
              {items.filter((item) => item.countrySlug === t.slug).length}{" "}
              {demoMode ? "demo stories" : "guide(s)"}
            </small>
          </Link>
        ))}
      </div>
    </div>
  );
}
