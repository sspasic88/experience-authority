"use client";

import { Children, useState, type ReactNode } from "react";
import Link from "next/link";
import { interests, matchesInterest } from "@/lib/catalog";
import {
  areaKey,
  savedAreas,
  withinPublicationWeek,
  type DiscoveryChoice,
} from "@/lib/discovery-choices";
import { usePassport } from "./passport-provider";
import { ProgressiveGrid } from "./progressive-grid";

type ReleaseItem = DiscoveryChoice & {
  date: string;
  dateLabel: string;
  country: string;
};

export function NewGuideBrowser({
  items,
  allPlaces,
  today,
  children,
}: {
  items: ReleaseItem[];
  allPlaces: DiscoveryChoice[];
  today: string;
  children: ReactNode;
}) {
  const { data, ready } = usePassport();
  const [period, setPeriod] = useState("");
  const [interest, setInterest] = useState("");
  const [country, setCountry] = useState("");
  const [personal, setPersonal] = useState(false);
  const cards = Children.toArray(children);
  const saved = Object.keys(data.saved);
  const areas = savedAreas(allPlaces, saved);
  const weekCount = items.filter((item) =>
    withinPublicationWeek(item.date, today),
  ).length;
  const inSavedPlaces = items.filter(
    (item) =>
      withinPublicationWeek(item.date, today) &&
      areas.has(areaKey(item) || "") &&
      !saved.includes(item.id),
  );
  const selectedInterest = interests.find((entry) => entry.slug === interest);
  const visible = items
    .map((item, index) => ({ item, index }))
    .filter(
      ({ item }) =>
        (!period || withinPublicationWeek(item.date, today)) &&
        (!selectedInterest || matchesInterest(item, selectedInterest)) &&
        (!country || item.countrySlug === country) &&
        (!personal ||
          (areas.has(areaKey(item) || "") && !saved.includes(item.id))),
    );
  const dates = [...new Set(visible.map(({ item }) => item.date))];
  const countries = [
    ...new Map(items.map((item) => [item.countrySlug, item.country])).entries(),
  ].sort((a, b) => a[1].localeCompare(b[1]));
  function reset() {
    setPeriod("");
    setInterest("");
    setCountry("");
    setPersonal(false);
  }

  return (
    <div className="new-guide-browser">
      <div className="new-guide-tools">
        <div className="new-guide-summary">
          <p>
            <strong>{weekCount}</strong>{" "}
            {weekCount === 1 ? "new guide" : "new guides"} in the past 7 days
          </p>
          <Link className="text-link" href="/today">
            One discovery for today ↗
          </Link>
        </div>
        <details className="new-filter-disclosure">
          <summary>
            Refine by date, interest or place
            {period || interest || country ? " · filters active" : ""}
          </summary>
          <div className="local-planning-filters new-guide-filters">
            <label>
              Published
              <select
                value={period}
                onChange={(event) => setPeriod(event.target.value)}
              >
                <option value="">All publication dates</option>
                <option value="week">Past 7 days</option>
              </select>
            </label>
            <label>
              What interests you
              <select
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
              >
                <option value="">All interests</option>
                {interests
                  .filter((entry) =>
                    items.some((item) => matchesInterest(item, entry)),
                  )
                  .map((entry) => (
                    <option value={entry.slug} key={entry.slug}>
                      {entry.name}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              Country or territory
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option value="">Anywhere</option>
                {countries.map(([slug, name]) => (
                  <option value={slug} key={slug}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </details>
        <div className="new-personal">
          {ready && areas.size > 0 ? (
            <>
              <button
                type="button"
                className="button button-outline"
                aria-pressed={personal}
                onClick={() => {
                  setPersonal(!personal);
                  setCountry("");
                  setInterest("");
                  setPeriod(!personal ? "week" : "");
                }}
              >
                {personal
                  ? "Show all places again"
                  : `New in my saved places (${inSavedPlaces.length})`}
              </button>
              <p>
                Same cities and areas, not whole countries. Already saved guides
                are excluded. Private in this browser.
              </p>
            </>
          ) : (
            <p>
              Save an experience to Passport to find new guides in the same city
              or area here. No account needed.
            </p>
          )}
        </div>
      </div>
      <p className="destination-result" role="status">
        {visible.length}{" "}
        {visible.length === 1 ? "guide matches" : "guides match"} your choices.
      </p>
      {!visible.length && (
        <div className="finder-empty">
          <h2>
            {personal
              ? "Nothing new for these saved places yet."
              : "No new guide fits this combination yet."}
          </h2>
          <p>
            Your saved experiences are unchanged. Explore another place or widen
            the publication dates.
          </p>
          <button type="button" className="button button-dark" onClick={reset}>
            See all published guides
          </button>
        </div>
      )}
      {dates.map((date) => {
        const group = visible.filter(({ item }) => item.date === date);
        return (
          <section className="release-section" key={date}>
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {group.length} {group.length === 1 ? "guide" : "guides"}
                  {interest || country || personal
                    ? " in this view"
                    : " published"}
                </p>
                <h2>
                  <time dateTime={date}>{group[0].item.dateLabel}</time>
                </h2>
              </div>
            </div>
            <ProgressiveGrid
              key={`${date}:${period}:${interest}:${country}:${personal}`}
              heading={`Guides published ${group[0].item.dateLabel}`}
              surface={`new-guides-${date}`}
            >
              {group.map(({ index }) => cards[index])}
            </ProgressiveGrid>
          </section>
        );
      })}
    </div>
  );
}
