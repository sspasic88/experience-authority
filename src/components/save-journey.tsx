"use client";

import Link from "next/link";
import { Bookmark, Check } from "lucide-react";
import { usePassport } from "./passport-provider";

export function SaveJourney({ ids }: { ids: string[] }) {
  const { data, ready, saveMany } = usePassport();
  const complete = ready && ids.every((id) => Boolean(data.saved[id]));
  return (
    <div className="journey-actions">
      <button
        type="button"
        className="button"
        disabled={!ready || complete}
        onClick={() => saveMany(ids)}
      >
        {complete ? (
          <Check size={17} aria-hidden="true" />
        ) : (
          <Bookmark size={17} aria-hidden="true" />
        )}
        {complete
          ? "All saved to Passport"
          : `Save these ${ids.length} experiences`}
      </button>
      {complete && (
        <Link className="text-link" href="/plan">
          Arrange your days ↗
        </Link>
      )}
      <small>
        Private on this device. Your existing saves and plans stay unchanged.
      </small>
    </div>
  );
}
