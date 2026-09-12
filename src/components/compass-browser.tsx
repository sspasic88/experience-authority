"use client";

import { Children, useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Search, LayoutGrid, List, ArrowRight, X } from "lucide-react";
import { interests, matchesInterest } from "@/lib/catalog";
import {
  matchesFinder,
  finderUrl,
  timeFits,
  participationModes,
  type FinderItem,
  type FinderQuery,
} from "@/lib/experience-finder";

export function CompassBrowser({
  items,
  initialQuery,
  children,
}: {
  items: FinderItem[];
  initialQuery: FinderQuery;
  children: ReactNode;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);
  useEffect(() => {
    const restore = () => {
      const params = new URLSearchParams(window.location.search);
      setQuery(
        Object.fromEntries(
          [
            "q",
            "interest",
            "place",
            "region",
            "field",
            "mode",
            "time",
            "view",
          ].map((key) => [key, params.get(key) || ""]),
        ),
      );
    };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  const cards = Children.toArray(children);
  const matches = useMemo(
    () =>
      items
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => matchesFinder(item, query)),
    [items, query],
  );
  const places = [
    ...new Map(items.map((item) => [item.countrySlug, item.country])).entries(),
  ].sort((a, b) => a[1].localeCompare(b[1]));
  const areas = [
    ...new Map(
      items
        .filter((item) => item.countrySlug === query.place && item.regionSlug)
        .map((item) => [item.regionSlug!, item.place]),
    ).entries(),
  ].sort((a, b) => a[1].localeCompare(b[1]));
  const activeInterests = interests.filter((interest) =>
    items.some((item) => matchesInterest(item, interest)),
  );
  const hasFilters = [
    query.q,
    query.interest,
    query.place,
    query.region,
    query.field,
    query.mode,
    query.time,
  ].some(Boolean);
  function change(next: FinderQuery, replace = false) {
    setQuery(next);
    // Keep typed text out of the back stack while preserving deliberate filter changes.
    if (replace) window.history.replaceState(null, "", finderUrl(next));
    else window.history.pushState(null, "", finderUrl(next));
  }
  return (
    <div className="compass-browser">
      <nav className="interest-shortcuts" aria-label="Explore by interest">
        <a
          href={finderUrl({ ...query, interest: "", field: "" })}
          aria-current={!query.interest ? "page" : undefined}
          onClick={(event) => {
            event.preventDefault();
            change({ ...query, interest: "", field: "" });
          }}
        >
          All experiences
        </a>
        {activeInterests.map((interest) => (
          <a
            key={interest.slug}
            href={finderUrl({ ...query, interest: interest.slug, field: "" })}
            aria-current={query.interest === interest.slug ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              change({ ...query, interest: interest.slug, field: "" });
            }}
          >
            {interest.name}
          </a>
        ))}
      </nav>
      <form
        action="/explore"
        method="get"
        className="finder-form"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          document.getElementById("compass-results")?.focus();
        }}
      >
        <div className="search-bar">
          <Search size={21} aria-hidden="true" />
          <label className="sr-only" htmlFor="selection-search">
            Search experiences
          </label>
          <input
            id="selection-search"
            name="q"
            type="search"
            value={query.q || ""}
            maxLength={200}
            placeholder="A place, a taste, a skill. Try Kyoto tea or live music."
            onChange={(event) =>
              change({ ...query, q: event.target.value }, true)
            }
          />
          <button type="submit" className="button">
            Find my way <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
        <input type="hidden" name="interest" value={query.interest || ""} />
        <input type="hidden" name="field" value={query.field || ""} />
        <div className="finder-filters">
          <label>
            Country or territory
            <select
              name="place"
              value={query.place || ""}
              onChange={(event) =>
                change({ ...query, place: event.target.value, region: "" })
              }
            >
              <option value="">Anywhere</option>
              {places.map(([slug, name]) => (
                <option key={slug} value={slug}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            City or area
            <select
              name="region"
              value={query.region || ""}
              disabled={!query.place}
              onChange={(event) =>
                change({ ...query, region: event.target.value })
              }
            >
              <option value="">
                {query.place ? "Every area here" : "Choose a country first"}
              </option>
              {areas.map(([slug, name]) => (
                <option key={slug} value={slug}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            How do you want to be there?
            <select
              name="mode"
              value={query.mode || ""}
              onChange={(event) =>
                change({ ...query, mode: event.target.value })
              }
            >
              <option value="">Open to anything</option>
              {participationModes.map((mode) => (
                <option key={mode.value} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Room in your day?
            <select
              name="time"
              value={query.time || ""}
              onChange={(event) =>
                change({ ...query, time: event.target.value })
              }
            >
              <option value="">Any rhythm</option>
              {timeFits.map((fit) => (
                <option key={fit.value} value={fit.value}>
                  {fit.label}
                </option>
              ))}
            </select>
          </label>
          {hasFilters && (
            <a
              className="reset-link finder-reset"
              href="/explore"
              onClick={(event) => {
                event.preventDefault();
                change({ view: query.view });
              }}
            >
              <X size={14} /> Clear filters
            </a>
          )}
        </div>
        <p className="finder-helper">
          {hydrated ? "Results update as you explore. " : "Search to explore. "}
          Time is a planning guide. Check the full visit details before booking.
        </p>
      </form>
      <div className="results-line" id="compass-results" tabIndex={-1}>
        <span aria-live="polite" aria-atomic="true">
          {matches.length} {matches.length === 1 ? "way" : "ways"} in
          {query.q && ` for “${query.q}”`}
        </span>
        <nav className="view-switch" aria-label="Results view">
          {(["grid", "list"] as const).map((view) => (
            <a
              key={view}
              href={finderUrl({ ...query, view })}
              aria-label={`${view === "grid" ? "Grid" : "List"} view`}
              aria-current={
                (query.view === "list" ? "list" : "grid") === view
                  ? "page"
                  : undefined
              }
              onClick={(event) => {
                event.preventDefault();
                change({ ...query, view });
              }}
            >
              {view === "grid" ? <LayoutGrid size={15} /> : <List size={15} />}
              {view === "grid" ? "Grid" : "List"}
            </a>
          ))}
        </nav>
      </div>
      {matches.length ? (
        <div
          className={`experience-grid ${query.view === "list" ? "list-view" : ""}`}
        >
          <h2 className="sr-only">Experiences in this direction</h2>
          {matches.map(({ index }) => cards[index])}
        </div>
      ) : (
        <div className="finder-empty">
          <p className="eyebrow">A little room to change direction</p>
          <h2>No guide fits that combination yet.</h2>
          <p>
            Keep the curiosity. Loosen one detail, or start with a different way
            of spending the day.
          </p>
          <button
            className="button button-dark"
            type="button"
            onClick={() => change({ view: query.view })}
          >
            Show all experiences <ArrowRight size={18} />
          </button>
          <Link href="/collections">Or follow an editorial thread ↗</Link>
        </div>
      )}
    </div>
  );
}
