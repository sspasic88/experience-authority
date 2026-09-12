import type { PublicExperience } from "./catalog";

export type TripEntry = { id: string; day: number; note: string };
export type Trip = { name: string; logistics: string; entries: TripEntry[] };
export const emptyTrip: Trip = {
  name: "My next journey",
  logistics: "",
  entries: [],
};

export function sanitizeTrip(value: unknown, allowedIds: string[]): Trip {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { ...emptyTrip, entries: [] };
  const input = value as Record<string, unknown>;
  const allowed = new Set(allowedIds);
  const seen = new Set<string>();
  const entries: TripEntry[] = [];
  if (Array.isArray(input.entries))
    for (const item of input.entries.slice(0, 100)) {
      if (
        !item ||
        typeof item !== "object" ||
        typeof item.id !== "string" ||
        !allowed.has(item.id) ||
        seen.has(item.id)
      )
        continue;
      seen.add(item.id);
      entries.push({
        id: item.id,
        day:
          Number.isInteger(item.day) && item.day >= 1 && item.day <= 60
            ? item.day
            : 1,
        note: typeof item.note === "string" ? item.note.slice(0, 600) : "",
      });
    }
  return {
    name:
      typeof input.name === "string" ? input.name.slice(0, 80) : emptyTrip.name,
    logistics:
      typeof input.logistics === "string" ? input.logistics.slice(0, 2000) : "",
    entries,
  };
}

/** Sharing omits free-text names and notes unless the visitor explicitly includes them. */
export function tripText(
  trip: Trip,
  items: PublicExperience[],
  includeNotes = false,
) {
  const lines = [
    includeNotes
      ? trip.name || "My EA journey"
      : "A journey through Experience Authority",
    "A personal draft, not confirmed reservations. Check opening, travel time and availability with each host.",
    "",
  ];
  for (const entry of [...trip.entries].sort((a, b) => a.day - b.day)) {
    const item = items.find((item) => item.id === entry.id);
    if (!item) continue;
    lines.push(
      `Day ${entry.day} | ${item.title}`,
      `${item.place}, ${item.country} · ${item.duration}`,
      `https://experienceauthority.com/experiences/${item.slug}`,
    );
    if (includeNotes && entry.note) lines.push(`My note: ${entry.note}`);
    lines.push("");
  }
  if (includeNotes && trip.logistics)
    lines.push("My travel and stay notes", trip.logistics, "");
  lines.push(
    "Discover your own way in: https://experienceauthority.com/explore",
  );
  return lines.join("\n");
}
