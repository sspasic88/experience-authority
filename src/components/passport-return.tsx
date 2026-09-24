"use client";
import Link from "next/link";
import { usePassport } from "./passport-provider";

export function PassportReturn() {
  const { data, ready } = usePassport();
  const count = Object.keys(data.saved).length;
  return (
    <aside className="passport-return" aria-label="Your next step">
      <div>
        <p className="eyebrow">
          {ready && count ? "Pick up your thread" : "Your EA Passport"}
        </p>
        <h2>
          {ready && count
            ? `${count} ${count === 1 ? "discovery" : "discoveries"}. Your next chapter.`
            : "Found something worth going for?"}
        </h2>
        <p>
          {ready && count
            ? "Your saved experiences are waiting in this browser. Compare them, arrange your days, or share a plan with someone."
            : "Save your favourites, arrange them by day and share your plan. Private in this browser, with no account needed."}
        </p>
      </div>
      <div className="passport-return-links">
        <Link className="button button-dark" href="/plan">
          {ready && count ? "Continue my journey" : "Start a journey"} ↗
        </Link>
        {ready && count > 0 && (
          <Link className="text-link" href="/new">
            See what's new in your saved places ↗
          </Link>
        )}
      </div>
    </aside>
  );
}
