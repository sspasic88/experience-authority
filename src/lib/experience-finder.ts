import {
  interests,
  matchesInterest,
  normalizeSearch,
  type Field,
} from "./catalog";

import { discoveryProfiles } from "./discovery-profiles";
export {
  discoveryProfiles,
  participationModes,
  timeFits,
} from "./discovery-profiles";
export type { DiscoveryProfile } from "./discovery-profiles";

export type FinderItem = {
  slug: string;
  title: string;
  summary: string;
  place: string;
  country: string;
  countrySlug: string;
  regionSlug?: string;
  field: Field;
};
export type FinderQuery = {
  q?: string;
  interest?: string;
  place?: string;
  region?: string;
  field?: string;
  mode?: string;
  time?: string;
  view?: string;
  surprise?: string;
};
export function matchesFinder(item: FinderItem, query: FinderQuery) {
  const profile = discoveryProfiles[item.slug];
  const interest = interests.find((entry) => entry.slug === query.interest);
  const haystack = normalizeSearch(
    [
      item.title,
      item.summary,
      item.place,
      item.country,
      item.field,
      ...(profile?.keywords ?? []),
    ].join(" "),
  );
  const terms = normalizeSearch((query.q ?? "").trim())
    .split(/\s+/)
    .filter(Boolean);
  return (
    terms.every((term) => haystack.includes(term)) &&
    (!interest || matchesInterest(item, interest)) &&
    (!query.place || item.countrySlug === query.place) &&
    (!query.region || item.regionSlug === query.region) &&
    (!query.field || item.field === query.field) &&
    (!query.mode ||
      Boolean(profile?.modes.some((mode) => mode === query.mode))) &&
    (!query.time || profile?.time === query.time)
  );
}

export function finderUrl(query: FinderQuery) {
  const params = new URLSearchParams();
  for (const key of [
    "q",
    "interest",
    "place",
    "region",
    "field",
    "mode",
    "time",
    "view",
    "surprise",
  ] as const) {
    const value = query[key]?.trim();
    if (value && !(key === "view" && value === "grid")) params.set(key, value);
  }
  return `/explore${params.size ? `?${params}` : ""}`;
}
