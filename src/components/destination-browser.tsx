"use client";

import { Children, useState, type ReactNode } from "react";
import { interests, matchesInterest, type Field } from "@/lib/catalog";
import {
  finderUrl,
  discoveryProfiles,
  timeFits,
  participationModes,
} from "@/lib/experience-finder";

type Item = { slug: string; field: Field };
export function DestinationBrowser({
  items,
  categories,
  country,
  region,
  children,
}: {
  items: Item[];
  categories: { slug: string; name: string; count: number }[];
  country: string;
  region?: string;
  children: ReactNode;
}) {
  const [selected, setSelected] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("");
  const cards = Children.toArray(children);
  const interest = interests.find((entry) => entry.slug === selected);
  const visible = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => {
      const profile = discoveryProfiles[item.slug];
      return (
        (!interest || matchesInterest(item, interest)) &&
        (!time || profile?.time === time) &&
        (!mode || profile?.modes.some((value) => value === mode))
      );
    });
  const availableTimes = timeFits.filter((fit) =>
    items.some((item) => discoveryProfiles[item.slug]?.time === fit.value),
  );
  const availableModes = participationModes.filter((fit) =>
    items.some((item) =>
      discoveryProfiles[item.slug]?.modes.some((value) => value === fit.value),
    ),
  );
  return (
    <div className="destination-browser" id="local-guides">
      <nav
        className="destination-categories"
        aria-label="Experiences here by interest"
      >
        <a
          href={finderUrl({ place: country, region })}
          aria-current={!selected ? "true" : undefined}
          onClick={(event) => {
            event.preventDefault();
            setSelected("");
          }}
        >
          All experiences <span>{items.length}</span>
        </a>
        {categories.map((category) => (
          <a
            key={category.slug}
            href={finderUrl({
              place: country,
              region,
              interest: category.slug,
            })}
            aria-current={selected === category.slug ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              setSelected(category.slug);
            }}
          >
            {category.name}
            <span>{category.count}</span>
          </a>
        ))}
      </nav>
      {items.length > 1 && (
        <div className="local-planning-filters">
          <label>
            Time for an experience
            <select
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              <option value="">Any amount of time</option>
              {availableTimes.map((fit) => (
                <option value={fit.value} key={fit.value}>
                  {fit.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            How you take part
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value)}
            >
              <option value="">Open to anything</option>
              {availableModes.map((fit) => (
                <option value={fit.value} key={fit.value}>
                  {fit.label}
                </option>
              ))}
            </select>
          </label>
          <p>
            Time describes the experience, not travel between stops. Check dates
            and access in each guide.
          </p>
        </div>
      )}
      <p className="destination-result" aria-live="polite" aria-atomic="true">
        {visible.length} {visible.length === 1 ? "experience" : "experiences"}
        {interest ? ` for ${interest.name.toLowerCase()}` : " to explore here"}.
        Save the ones you want to build a day around.
      </p>
      {visible.length ? (
        <div className="experience-grid">
          {visible.map(({ index }) => cards[index])}
        </div>
      ) : (
        <div className="finder-empty">
          <h3>No published guide here fits all three choices yet.</h3>
          <p>
            Keep this destination and try a different rhythm or way to take
            part.
          </p>
          <button
            className="button button-outline"
            type="button"
            onClick={() => {
              setSelected("");
              setTime("");
              setMode("");
            }}
          >
            Show all experiences here
          </button>
        </div>
      )}
    </div>
  );
}
