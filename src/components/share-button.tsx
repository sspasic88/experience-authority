"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export function ShareButton({
  title,
  text,
  url,
  label = "Share",
}: {
  title: string;
  text?: string;
  url?: string;
  label?: string;
}) {
  const [message, setMessage] = useState("");
  const [manual, setManual] = useState(false);
  const payload = [text, url].filter(Boolean).join("\n");
  async function share() {
    setManual(false);
    setMessage("");
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(payload);
      setMessage(
        "Copied. Paste it into a message to someone you’d like to go with.",
      );
    } catch {
      setManual(true);
      setMessage("Select and copy the text below to share it.");
    }
  }
  return (
    <div className="share-control">
      <button type="button" className="button button-outline" onClick={share}>
        <Share2 size={18} aria-hidden="true" />
        {label}
      </button>
      {message && (
        <p className="small-note" role="status">
          {message}
        </p>
      )}
      {manual && (
        <label className="share-fallback">
          Text to share
          <textarea
            readOnly
            value={payload}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
    </div>
  );
}
