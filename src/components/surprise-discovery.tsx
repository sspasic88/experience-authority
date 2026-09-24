"use client";

import { Children, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Shuffle } from "lucide-react";
import { nextDiscovery, type DiscoveryChoice } from "@/lib/discovery-choices";
import { usePassport } from "./passport-provider";
import { ShareButton } from "./share-button";
import { trackEaEvent } from "@/lib/analytics";

export type SurpriseItem = DiscoveryChoice & {
  duration: string;
  participation: string;
  place: string;
  localHref: string;
};

export function SurpriseDiscovery({
  items,
  children,
}: {
  items: SurpriseItem[];
  children: ReactNode;
}) {
  const { data, ready } = usePassport();
  const [seen, setSeen] = useState<string[]>([]);
  const cards = Children.toArray(children);
  const current = items.find((item) => item.slug === seen.at(-1));

  function discover() {
    const next = nextDiscovery(items, seen, Object.keys(data.saved));
    if (!next) return;
    setSeen((previous) => {
      const exhausted = items.every((item) => previous.includes(item.slug));
      return exhausted ? [next.slug] : [...previous, next.slug];
    });
    trackEaEvent("discovery_surprise", { guide_id: next.id });
  }

  return (
    <section
      className={`surprise-discovery ${current ? "has-discovery" : ""}`}
      aria-label="An unexpected way in"
    >
      <div className="surprise-invitation">
        <p className="eyebrow">A little room for the unexpected</p>
        <h2>
          {current
            ? "Could this be your next story?"
            : "Find something you didn't know to look for."}
        </h2>
        <p>
          One photographed, source-checked guide at a time. Your filters still
          apply. Keep what catches your attention.
        </p>
        <button
          className="button button-dark"
          type="button"
          onClick={discover}
          disabled={
            !ready || !items.length || (items.length === 1 && Boolean(current))
          }
        >
          <Shuffle size={18} aria-hidden="true" />
          {current
            ? items.length === 1
              ? "The only match for these filters"
              : "Show me another"
            : "Find my first discovery"}
        </button>
        {!items.length && (
          <p role="status">
            No current photographed guide fits this combination. Loosen a filter
            or return to the full list.
          </p>
        )}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {current
          ? `${current.title}. ${current.place}.`
          : "Choose your first discovery."}
      </p>
      {current && (
        <div className="surprise-card">{cards[items.indexOf(current)]}</div>
      )}
      {current && (
        <div className="surprise-practical">
          <p className="eyebrow">Make room for it</p>
          <dl>
            <div>
              <dt>Time to allow</dt>
              <dd>{current.duration}</dd>
            </div>
            <div>
              <dt>Your part</dt>
              <dd>{current.participation}</dd>
            </div>
          </dl>
          <Link className="text-link" href={`/experiences/${current.slug}`}>
            Read the guide and access details{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="text-link" href={current.localHref}>
            Explore more in {current.place}{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <ShareButton
            key={current.slug}
            title={current.title}
            url={`https://experienceauthority.com/experiences/${current.slug}`}
            label="Send this discovery"
          />
        </div>
      )}
    </section>
  );
}
