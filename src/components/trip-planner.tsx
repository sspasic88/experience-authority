"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePassport } from "./passport-provider";
import { ShareButton } from "./share-button";
import type { PublicExperience } from "@/lib/catalog";
import {
  emptyTrip,
  sanitizeTrip,
  tripText,
  tripStages,
  type TripStage,
  type Trip,
} from "@/lib/trip";
import { trackEaEvent } from "@/lib/analytics";

const storageKey = "ea:trip:v1";
export function TripPlanner({ items }: { items: PublicExperience[] }) {
  const { data } = usePassport();
  const [trip, setTrip] = useState<Trip>(emptyTrip);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [includeNotes, setIncludeNotes] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  useEffect(() => {
    const ids = items.map((item) => item.id);
    try {
      setTrip(
        sanitizeTrip(
          JSON.parse(localStorage.getItem(storageKey) || "null"),
          ids,
        ),
      );
    } catch {
      setMessage(
        "Storage is unavailable. Your plan can only last for this session. Download a copy before leaving.",
      );
    }
    setReady(true);
    function sync(event: StorageEvent) {
      if (event.key !== storageKey && event.key !== null) return;
      try {
        setTrip(sanitizeTrip(JSON.parse(event.newValue || "null"), ids));
      } catch {
        /* malformed external storage is ignored */
      }
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [items]);
  function update(next: Trip) {
    setTrip(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setMessage("Plan saved in this browser.");
    } catch {
      setMessage(
        "Could not save on this device. Download a copy before leaving.",
      );
    }
  }
  function download() {
    const href = URL.createObjectURL(
      new Blob([tripText(trip, items, true)], {
        type: "text/plain;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = href;
    link.download = "my-ea-journey.txt";
    link.click();
    trackEaEvent("journey_export", { method: "text_download" });
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  }
  const available = items.filter(
    (item) =>
      data.saved[item.id] &&
      !trip.entries.some((entry) => entry.id === item.id),
  );
  const countries = new Set(
    trip.entries.flatMap(
      (entry) => items.find((item) => item.id === entry.id)?.countrySlug || [],
    ),
  );
  if (!ready) return <p role="status">Opening your journey…</p>;
  return (
    <section className="trip-planner" aria-labelledby="trip-title">
      <div className="trip-intro">
        <p className="eyebrow">From curiosity to a plan</p>
        <h2 id="trip-title">Make a little room for the extraordinary.</h2>
        <p>
          Arrange experiences by day. Keep travel and stay notes beside them.
          Come back when your plans take shape.
        </p>
        <p className="small-note">
          One private draft in this browser. No account or cloud sync. Nothing
          here is a booking or an automatically checked itinerary.
        </p>
      </div>
      <label className="trip-name">
        Journey name
        <input
          maxLength={80}
          value={trip.name}
          onChange={(event) => update({ ...trip, name: event.target.value })}
        />
      </label>
      {available.length > 0 ? (
        <label className="trip-add">
          Add a saved experience
          <select
            value=""
            onChange={(event) => {
              if (event.target.value) {
                trackEaEvent("journey_add_guide", {
                  guide_id: event.target.value,
                });
                update({
                  ...trip,
                  entries: [
                    ...trip.entries,
                    { id: event.target.value, day: 1, note: "" },
                  ],
                });
              }
            }}
          >
            <option value="">Choose from your Passport…</option>
            {available.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title} · {item.place}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <p>
          {trip.entries.length
            ? "All your saved experiences are in this plan."
            : "Start by saving an experience to your Passport."}{" "}
          <Link className="reset-link" href="/explore">
            Find another way in ↗
          </Link>
        </p>
      )}
      {countries.size > 1 && (
        <p className="trip-caution">
          Your ideas span more than one country or territory. Allow for travel
          days. This planner does not calculate connections or check whether the
          route is feasible.
        </p>
      )}
      <ol className="trip-entries">
        {[...trip.entries]
          .sort((a, b) => a.day - b.day)
          .map((entry) => {
            const item = items.find((item) => item.id === entry.id);
            if (!item) return null;
            return (
              <li key={entry.id} className="trip-entry">
                <label className="trip-day">
                  Day
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={entry.day}
                    aria-label={`Day for ${item.title}`}
                    onChange={(event) => {
                      const day = Number(event.target.value);
                      if (Number.isInteger(day) && day >= 1 && day <= 60)
                        update({
                          ...trip,
                          entries: trip.entries.map((e) =>
                            e.id === entry.id ? { ...e, day } : e,
                          ),
                        });
                    }}
                  />
                </label>
                <div className="trip-entry-body">
                  <p className="eyebrow">
                    {item.place} / {item.country}
                  </p>
                  <h3>
                    <Link href={`/experiences/${item.slug}`}>
                      {item.title} ↗
                    </Link>
                  </h3>
                  <p>{item.duration}</p>
                  <p>{item.participation}</p>
                  <div className="trip-planning-state">
                    <label>
                      My planning status
                      <select
                        aria-label={`Planning status for ${item.title}`}
                        value={entry.stage || "idea"}
                        onChange={(event) =>
                          update({
                            ...trip,
                            entries: trip.entries.map((e) =>
                              e.id === entry.id
                                ? {
                                    ...e,
                                    stage: event.target.value as TripStage,
                                  }
                                : e,
                            ),
                          })
                        }
                      >
                        {Object.entries(tripStages).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  {item.guideReview && (
                    <a
                      className="text-link"
                      href={item.guideReview.accessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check details & booking with the host ↗
                      <span className="sr-only"> (opens a new tab)</span>
                    </a>
                  )}
                  <label>
                    My note
                    <textarea
                      maxLength={600}
                      value={entry.note}
                      placeholder="Preferred time, a question to ask, something to remember…"
                      onChange={(event) =>
                        update({
                          ...trip,
                          entries: trip.entries.map((e) =>
                            e.id === entry.id
                              ? { ...e, note: event.target.value }
                              : e,
                          ),
                        })
                      }
                    />
                  </label>
                  <button
                    className="text-link"
                    type="button"
                    aria-label={`Remove ${item.title} from plan`}
                    onClick={() =>
                      update({
                        ...trip,
                        entries: trip.entries.filter((e) => e.id !== entry.id),
                      })
                    }
                  >
                    Remove from plan
                  </button>
                </div>
              </li>
            );
          })}
      </ol>
      <label className="trip-logistics">
        Travel & stay notes
        <textarea
          maxLength={2000}
          value={trip.logistics}
          placeholder="Your transport, accommodation ideas and time between experiences. Avoid payment details, passport numbers or booking codes."
          onChange={(event) =>
            update({ ...trip, logistics: event.target.value })
          }
        />
      </label>
      <div className="trip-export">
        <button type="button" className="button button-dark" onClick={download}>
          Download my plan ↓
        </button>
        <button
          type="button"
          className="button button-paper"
          onClick={() => {
            trackEaEvent("journey_export", { method: "print" });
            window.print();
          }}
        >
          Print or save as PDF ↗
        </button>
        <ShareButton
          title="A journey through Experience Authority"
          text={tripText(trip, items, includeNotes)}
          label="Share this plan"
        />
        <label className="trip-share-notes">
          <input
            type="checkbox"
            checked={includeNotes}
            onChange={(event) => setIncludeNotes(event.target.checked)}
          />
          Include my journey name, planning status and private notes when
          sharing
        </label>
        <p className="small-note">
          Sharing sends a text copy, not a public editable page. Download
          includes your notes. Sharing excludes them unless you choose
          otherwise.
        </p>
      </div>
      <div className="trip-reset">
        {confirmReset ? (
          <div>
            <p>
              Clear this journey and its notes from this browser? Your saved
              Passport guides will stay. Download a copy first if you want to
              keep this draft.
            </p>
            <div className="trip-reset-actions">
              <button
                type="button"
                className="button button-dark"
                onClick={() => {
                  update({ ...emptyTrip, entries: [] });
                  setConfirmReset(false);
                }}
              >
                Clear this journey
              </button>
              <button
                type="button"
                className="text-link"
                onClick={() => setConfirmReset(false)}
              >
                Keep my journey
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="text-link"
            onClick={() => setConfirmReset(true)}
          >
            Start a fresh journey
          </button>
        )}
      </div>
      <p className="small-note" role="status">
        {message ||
          "Your plan stays on this device. Download a copy to keep it elsewhere."}
      </p>
      <pre className="trip-print-copy">{tripText(trip, items, true)}</pre>
    </section>
  );
}
