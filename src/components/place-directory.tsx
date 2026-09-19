"use client";

import Link from "next/link";
import { Children, useState, type ReactNode } from "react";
import { Search } from "lucide-react";
import { normalizeSearch } from "@/lib/catalog";
import { finderUrl } from "@/lib/experience-finder";
export function PlaceDirectory({
  places,
  children,
}: {
  places: {
    slug: string;
    name: string;
    regions: { slug: string; name: string }[];
  }[];
  children: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const terms = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  const cards = Children.toArray(children);
  const matches = places
    .map((place, index) => ({ place, index }))
    .filter(({ place }) => {
      const haystack = normalizeSearch(
        [place.name, ...place.regions.map((region) => region.name)].join(" "),
      );
      return terms.every((term) => haystack.includes(term));
    });
  return (
    <div className="place-directory">
      <div className="place-directory-search" role="search">
        <Search size={21} aria-hidden="true" />
        <label className="sr-only" htmlFor="destination-search">
          Find a city, region or country
        </label>
        <input
          id="destination-search"
          type="search"
          maxLength={100}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a city, area or country"
        />
      </div>
      <p className="section-note" aria-live="polite">
        {matches.length}{" "}
        {matches.length === 1
          ? "country or territory"
          : "countries & territories"}
        {query && ` matching “${query}”`}.{" "}
        {query
          ? "Choose a city or area below to narrow your view."
          : "Begin with a familiar point of reference, then keep going for the less expected."}
      </p>
      {matches.length ? (
        <div className="place-card-grid">
          {matches.map(({ index }) => cards[index])}
        </div>
      ) : (
        <div className="finder-empty">
          <h2>We have not published a guide here yet.</h2>
          <p>
            Our coverage is growing place by place. Explore another destination
            or follow the experience that interests you.
          </p>
          <button
            type="button"
            className="button button-dark"
            onClick={() => setQuery("")}
          >
            See all destinations
          </button>
          <Link href={finderUrl({ q: query })}>
            Search Compass for “{query}” ↗
          </Link>
        </div>
      )}
    </div>
  );
}
