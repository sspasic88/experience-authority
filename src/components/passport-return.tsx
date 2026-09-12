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
          {ready && count
            ? "Pick up your thread"
            : "A journey starts with a curiosity"}
        </p>
        <h2>
          {ready && count
            ? `${count} ${count === 1 ? "discovery" : "discoveries"}. Your next chapter.`
            : "Find it. Keep it. Make it a journey."}
        </h2>
        <p>
          {ready && count
            ? "Your saved experiences are waiting in this browser. Compare them, arrange your days, or share a plan with someone."
            : "Save guides, arrange them by day, add travel notes, then download or share your plan. No account needed."}
        </p>
      </div>
      <Link
        className="button button-dark"
        href={ready && count ? "/passport?view=plan" : "/passport"}
      >
        {ready && count ? "Continue my journey" : "Start a journey"} ↗
      </Link>
    </aside>
  );
}
