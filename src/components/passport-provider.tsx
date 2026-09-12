"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { Bookmark, Check, Columns3, X } from "lucide-react";
import {
  emptyPassport,
  sanitizePassport,
  type PassportData,
  type PassportStage,
} from "@/lib/passport";
import type { PublicExperience } from "@/lib/catalog";

const key = "ea:passport:v1";
type Context = {
  data: PassportData;
  ready: boolean;
  message: string;
  setStage: (id: string, stage?: PassportStage) => void;
  toggleCompare: (id: string) => void;
  clearCompare: () => void;
};
const PassportContext = createContext<Context | null>(null);
export function usePassport() {
  const context = useContext(PassportContext);
  if (!context) throw new Error("PassportProvider missing");
  return context;
}
export function PassportProvider({
  ids,
  children,
}: {
  ids: string[];
  children: ReactNode;
}) {
  const [data, setData] = useState<PassportData>(emptyPassport);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      setData(
        sanitizePassport(JSON.parse(localStorage.getItem(key) || "null"), ids),
      );
    } catch {
      setMessage(
        "Local storage is unavailable. Your changes will last for this session only.",
      );
    }
    setReady(true);
    const onStorage = (event: StorageEvent) => {
      if (event.key !== key) return;
      try {
        setData(sanitizePassport(JSON.parse(event.newValue || "null"), ids));
      } catch {
        /* Ignore malformed data from another tab. */
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [ids]);
  function persist(next: PassportData) {
    setData(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      setMessage(
        "Local storage is unavailable. Your changes will last for this session only.",
      );
    }
  }
  function setStage(id: string, stage?: PassportStage) {
    if (!ids.includes(id)) return;
    const saved = { ...data.saved };
    if (stage) saved[id] = stage;
    else delete saved[id];
    setMessage(
      stage
        ? "Saved to your Passport on this device."
        : "Removed from your Passport.",
    );
    persist({ ...data, saved });
  }
  function toggleCompare(id: string) {
    if (!ids.includes(id)) return;
    if (!data.compare.includes(id) && data.compare.length >= 3) {
      setMessage(
        "You can compare up to 3 experiences. Remove one before adding another.",
      );
      return;
    }
    const compare = data.compare.includes(id)
      ? data.compare.filter((x) => x !== id)
      : [...data.compare, id];
    setMessage(
      `${compare.length} ${compare.length === 1 ? "experience" : "experiences"} in your comparison.`,
    );
    persist({ ...data, compare });
  }
  return (
    <PassportContext.Provider
      value={{
        data,
        ready,
        message,
        setStage,
        toggleCompare,
        clearCompare: () => persist({ ...data, compare: [] }),
      }}
    >
      {children}
      <div className="sr-only" role="status" aria-live="polite">
        {message}
      </div>
      {data.compare.length > 0 && (
        <aside className="compare-tray" aria-label="Your comparison">
          <span>
            <Columns3 size={18} aria-hidden="true" />{" "}
            <strong>{data.compare.length} / 3</strong>
            <span className="tray-label"> to compare</span>
          </span>
          <Link href="/passport?view=compare" className="button button-small">
            Compare <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="icon-button"
            aria-label="Clear comparison"
            onClick={() => persist({ ...data, compare: [] })}
          >
            <X size={18} />
          </button>
        </aside>
      )}
    </PassportContext.Provider>
  );
}
export function ExperienceActions({
  item,
  compact = false,
}: {
  item: Pick<PublicExperience, "id" | "title">;
  compact?: boolean;
}) {
  const { data, ready, setStage, toggleCompare } = usePassport();
  const saved = Boolean(data.saved[item.id]);
  const compared = data.compare.includes(item.id);
  return (
    <div className={compact ? "card-actions" : "experience-actions"}>
      <button
        disabled={!ready}
        className={compact ? "icon-button save-button" : "button button-dark"}
        aria-pressed={saved}
        aria-label={`${saved ? "Unsave" : "Save"} ${item.title}`}
        onClick={() => setStage(item.id, saved ? undefined : "saved")}
      >
        <Bookmark
          size={18}
          fill={saved ? "currentColor" : "none"}
          aria-hidden="true"
        />
        {!compact && (saved ? "Saved to Passport" : "Save to Passport")}
      </button>
      {!compact && (
        <button
          disabled={!ready}
          className="button button-outline"
          aria-pressed={compared}
          onClick={() => toggleCompare(item.id)}
        >
          {compared ? <Check size={18} /> : <Columns3 size={18} />}{" "}
          {compared ? "In comparison" : "Compare"}
        </button>
      )}
    </div>
  );
}
