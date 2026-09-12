"use client";

import { Children, useState, type ReactNode } from "react";
import { interests, matchesInterest, type Field } from "@/lib/catalog";
import { finderUrl } from "@/lib/experience-finder";

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
  const cards = Children.toArray(children);
  const interest = interests.find((entry) => entry.slug === selected);
  const visible = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !interest || matchesInterest(item, interest));
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
      <p className="destination-result" aria-live="polite" aria-atomic="true">
        {visible.length} {visible.length === 1 ? "experience" : "experiences"}
        {interest ? ` for ${interest.name.toLowerCase()}` : " to explore here"}.
        Save the ones you want to build a day around.
      </p>
      <div className="experience-grid">
        {visible.map(({ index }) => cards[index])}
      </div>
    </div>
  );
}
