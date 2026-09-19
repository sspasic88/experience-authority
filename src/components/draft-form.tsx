"use client";
import { useState, type FormEvent } from "react";
export function DraftForm({
  correction = false,
  initialExperience = "",
}: {
  correction?: boolean;
  initialExperience?: string;
}) {
  const [status, setStatus] = useState("");
  function download(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `${correction ? "CORRECTION" : "EXPERIENCE SUGGESTION"} | UNSENT DRAFT\n\nExperience: ${data.get("experience")}\n\nPublic context:\n${data.get("context")}\n\nPublic source: ${data.get("source")}\n\nThis draft was created locally. It has not been sent to Experience Authority.`;
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = correction
      ? "ea-correction-draft.txt"
      : "ea-suggestion-draft.txt";
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus(
      "Your draft has been downloaded. It has not been submitted or sent to anyone.",
    );
  }
  return (
    <form className="draft-form" onSubmit={download}>
      <div className="demo-callout">
        <strong>Local draft only.</strong> Submissions are not connected yet.
        This form downloads a text file to your device. Do not include private
        locations, contact information or culturally restricted knowledge.
      </div>
      <label>
        Experience or public page
        <input
          name="experience"
          required
          maxLength={180}
          defaultValue={initialExperience}
          placeholder={
            correction
              ? "The guide or page you want to correct"
              : "A short working title"
          }
        />
      </label>
      <label>
        {correction
          ? "What needs attention?"
          : "Why is it rooted in this place?"}
        <textarea
          name="context"
          required
          maxLength={4000}
          placeholder="Share only information that is appropriate to make public."
        />
      </label>
      <label>
        Public source, if available
        <input
          name="source"
          type="url"
          maxLength={1000}
          placeholder="https://…"
        />
      </label>
      <button type="submit" className="button button-dark">
        Download unsent draft <span aria-hidden="true">↓</span>
      </button>
      {status && (
        <p className="draft-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
