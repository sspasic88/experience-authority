import Link from "next/link";
import { LayoutGrid, List, Search } from "lucide-react";
import { EmptyState, ExperienceCard, PageIntro } from "@/components/editorial";
import {
  fields,
  filterExperiences,
  statusLabels,
  territories,
  type Query,
} from "@/lib/catalog";
import { demoMode, getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return pageMetadata(
    "Compass",
    "Explore locally rooted experiences by place, field and access context. Experience first. Provider second.",
    "/explore",
    Object.keys(await searchParams).length > 0,
  );
}
export default async function Explore({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const raw = await searchParams;
  const query: Query = Object.fromEntries(
    ["q", "field", "place", "status", "view"].map((key) => [
      key,
      typeof raw[key] === "string" ? raw[key] : "",
    ]),
  );
  const allItems = getExperiences();
  const items = filterExperiences(allItems, query);
  function viewLink(view: string) {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    params.set("view", view);
    return `/explore?${params.toString()}`;
  }
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Find your way in" title="Compass.">
        <p>
          Start with a place, a curiosity, or a way you want to feel more
          connected.
        </p>
        {!demoMode && (
          <p className="compass-context">
            Our first public-source guides cover ordinary admission and publicly
            offered programmes. Each explains its evidence boundary.{" "}
            <Link href="/method">How we work ↗</Link>
          </p>
        )}
      </PageIntro>
      <form action="/explore" method="get">
        <div className="search-bar">
          <Search size={21} aria-hidden="true" />
          <label className="sr-only" htmlFor="selection-search">
            Search experiences
          </label>
          <input
            id="selection-search"
            type="search"
            name="q"
            defaultValue={query.q}
            placeholder="Try rowing, colour, or Reykjavík…"
            maxLength={200}
          />
          <button type="submit" className="button">
            Search <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="filter-panel">
          <div className="filter-row">
            <label>
              Field
              <select name="field" defaultValue={query.field}>
                <option value="">All 13 fields</option>
                {fields.map((f) => (
                  <option value={f.slug} key={f.slug}>
                    {f.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Place
              <select name="place" defaultValue={query.place}>
                <option value="">Every place</option>
                {territories
                  .filter((t) =>
                    allItems.some((item) => item.countrySlug === t.slug),
                  )
                  .map((t) => (
                    <option value={t.slug} key={t.slug}>
                      {t.name}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              Editorial status
              <select name="status" defaultValue={query.status}>
                <option value="">All statuses</option>
                {Object.entries(statusLabels)
                  .filter(([value]) =>
                    allItems.some((item) => item.status === value),
                  )
                  .map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
              </select>
            </label>
            <input
              type="hidden"
              name="view"
              value={query.view === "list" ? "list" : "grid"}
            />
            <button type="submit" className="button button-dark">
              Apply filters
            </button>
            <Link href="/explore" className="reset-link">
              Reset
            </Link>
          </div>
        </div>
      </form>
      <div className="results-line">
        <span>
          {items.length} {demoMode ? "demo " : ""}
          {items.length === 1 ? "story" : "stories"}
          {query.q && ` for “${query.q}”`}
        </span>
        <nav className="view-switch" aria-label="Results view">
          <Link
            href={viewLink("grid")}
            aria-label="Grid view"
            aria-current={query.view !== "list" ? "page" : undefined}
          >
            <LayoutGrid size={15} />
            Grid
          </Link>
          <Link
            href={viewLink("list")}
            aria-label="List view"
            aria-current={query.view === "list" ? "page" : undefined}
          >
            <List size={15} />
            List
          </Link>
        </nav>
      </div>
      {items.length ? (
        <div
          className={`experience-grid ${query.view === "list" ? "list-view" : ""}`}
        >
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <EmptyState title="No story in that direction yet.">
          <p>
            Try a different word or remove a filter. We keep the collection
            small until there is enough evidence to add a useful guide.
          </p>
          <Link href="/explore" className="button">
            Clear all filters <span aria-hidden="true">↗</span>
          </Link>
        </EmptyState>
      )}
    </div>
  );
}
