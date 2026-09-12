"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { discoveryProfiles } from "@/lib/experience-finder";
import { selectHomeStartingPoints } from "@/lib/home-starting-points";
import { trackEaEvent } from "@/lib/analytics";

type DiscoveryItem = {
  slug: string;
  title: string;
  place: string;
  country: string;
  field: string;
  summary: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

function searchText(item: DiscoveryItem) {
  return normalize(
    [
      item.title,
      item.place,
      item.country,
      item.field,
      item.summary,
      ...(discoveryProfiles[item.slug]?.keywords ?? []),
    ].join(" "),
  );
}

function relevance(item: DiscoveryItem, needle: string) {
  const text = searchText(item);
  const escape = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const words = needle.split(/\s+/).filter(Boolean);
  const exactWords = words.every((word) =>
    new RegExp(`(^|[^a-z0-9])${escape(word)}([^a-z0-9]|$)`, "i").test(text),
  );
  if (!exactWords && !text.includes(needle)) return 0;
  const identity = normalize(
    [item.title, item.place, item.country, item.field].join(" "),
  );
  if (identity === needle) return 50;
  if (
    new RegExp(`(^|[^a-z0-9])${escape(needle)}([^a-z0-9]|$)`, "i").test(
      identity,
    )
  )
    return 30;
  if (exactWords) return 20;
  return 5;
}

export function HomeDiscovery({ items }: { items: DiscoveryItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [startingPoints, setStartingPoints] = useState<DiscoveryItem[]>([]);
  useEffect(() => {
    setStartingPoints(selectHomeStartingPoints(items));
  }, [items]);
  const matches = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) return startingPoints;
    const ranked = items
      .map((item) => ({ item, score: relevance(item, needle) }))
      .filter(({ score }) => score > 0);
    const threshold = ranked.some(({ score }) => score >= 20) ? 20 : 1;
    return ranked
      .filter(({ score }) => score >= threshold)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item)
      .slice(0, 5);
  }, [items, query, startingPoints]);

  function openStartingPoints() {
    if (!query.trim() && !open)
      setStartingPoints(selectHomeStartingPoints(items));
    setOpen(true);
  }

  function moveActive(direction: 1 | -1) {
    if (!matches.length) return;
    setOpen(true);
    setActive((current) => {
      if (current < 0) return direction === 1 ? 0 : matches.length - 1;
      return (current + direction + matches.length) % matches.length;
    });
  }

  return (
    <div
      className="home-discovery"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false);
      }}
    >
      <p className="home-discovery-prompt">Where do you want to begin?</p>
      <form
        action="/explore"
        method="get"
        className="prototype-hero-search"
        role="search"
        onSubmit={() => trackEaEvent("home_search")}
      >
        <label className="sr-only" htmlFor="home-search">
          Search by place or experience
        </label>
        <Search size={20} aria-hidden="true" />
        <input
          id="home-search"
          name="q"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={openStartingPoints}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              moveActive(1);
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              moveActive(-1);
            }
            if (event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
              setActive(-1);
            }
            if (
              event.key === "Enter" &&
              open &&
              active >= 0 &&
              matches[active]
            ) {
              event.preventDefault();
              window.location.assign(`/experiences/${matches[active].slug}`);
            }
          }}
          role="combobox"
          aria-expanded={open}
          aria-controls="home-search-results"
          aria-activedescendant={
            open && active >= 0 ? `home-search-result-${active}` : undefined
          }
          aria-autocomplete="list"
          autoComplete="off"
          maxLength={200}
          placeholder="Try a city, a taste, a skill or a way to move"
        />
        <button type="submit" aria-label="Search all experiences">
          <ArrowRight size={22} aria-hidden="true" />
        </button>
      </form>

      {open && (
        <div className="home-search-results">
          <div className="home-search-results-head">
            <span>
              {query.trim() ? "Matching guides" : "Fresh starting points"}
            </span>
            <Link href={`/explore?q=${encodeURIComponent(query)}`}>
              Open Compass
            </Link>
          </div>
          <div
            id="home-search-results"
            className="home-search-options"
            role="listbox"
            aria-label={
              query.trim() ? "Matching guides" : "Fresh starting points"
            }
          >
            {matches.length ? (
              matches.map((item, index) => (
                <Link
                  id={`home-search-result-${index}`}
                  key={item.slug}
                  href={`/experiences/${item.slug}`}
                  role="option"
                  aria-selected={active === index}
                  className={active === index ? "is-active" : undefined}
                  onMouseEnter={() => setActive(index)}
                >
                  <MapPin size={16} aria-hidden="true" />
                  <span>
                    <strong>{item.place}</strong>
                    <small>{item.title}</small>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ))
            ) : (
              <div
                className="home-search-empty"
                role="option"
                aria-disabled="true"
                aria-selected="false"
              >
                <strong>No exact match yet.</strong>
                <span>
                  Search all guides or begin with a way you want to feel.
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <nav
        className="prototype-hero-interests"
        aria-label="Explore by what you feel like doing"
      >
        <span>I feel like</span>
        <Link href="/explore?interest=eat-drink">eating well</Link>
        <Link href="/explore?interest=make-learn">making something</Link>
        <Link href="/explore?interest=move-water">moving</Link>
        <Link href="/explore?interest=swim-reset">slowing down</Link>
        <Link href="/explore">seeing everything</Link>
      </nav>
    </div>
  );
}
