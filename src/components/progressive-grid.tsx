"use client";

import { Children, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { trackEaEvent } from "@/lib/analytics";

export function ProgressiveGrid({
  children,
  heading,
  surface,
  initialCount = 9,
  step = 9,
}: {
  children: ReactNode;
  heading: string;
  surface: string;
  initialCount?: number;
  step?: number;
}) {
  const cards = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visible = cards.slice(0, visibleCount);

  return (
    <>
      <div className="experience-grid">
        <h2 className="sr-only">{heading}</h2>
        {visible}
      </div>
      {visible.length < cards.length && (
        <div className="progressive-grid-more">
          <p>
            Showing {visible.length} of {cards.length}
          </p>
          <button
            className="button button-outline"
            type="button"
            onClick={() => {
              const next = Math.min(visibleCount + step, cards.length);
              setVisibleCount(next);
              trackEaEvent("experience_grid_show_more", {
                surface,
                visible_count: next,
              });
            }}
          >
            Show more experiences <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
