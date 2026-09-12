"use client";
import { useRef, useState, type FormEvent } from "react";
import { correctionMessage, correctionTopics } from "@/lib/corrections";
import { publisher } from "@/lib/publisher";

export function CorrectionForm({
  initialPage = "",
  initialTitle = "",
}: {
  initialPage?: string;
  initialTitle?: string;
}) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [manualCopy, setManualCopy] = useState("");
  function message() {
    if (!form.current?.reportValidity()) return null;
    const data = new FormData(form.current);
    return correctionMessage({
      page: String(data.get("page") || ""),
      title: initialTitle,
      topic: String(data.get("topic") || ""),
      context: String(data.get("context") || ""),
      source: String(data.get("source") || ""),
    });
  }
  function openEmail(event: FormEvent) {
    event.preventDefault();
    const draft = message();
    if (!draft) return;
    if (draft.href.length > 7000) {
      setManualCopy(draft.text);
      setStatus(
        "This report is too long for some email apps. Copy the message below and email it to us. Nothing has been sent yet.",
      );
      return;
    }
    window.location.href = draft.href;
    setStatus(
      "Your email app should open with the report ready. Review it and press Send there. If nothing opens, use Copy message below. Nothing is sent by this website.",
    );
  }
  async function copy() {
    const draft = message();
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setStatus(
        `Message copied. Paste it into an email to ${publisher.email} and send it from there.`,
      );
    } catch {
      setManualCopy(draft.text);
      setStatus(
        "Select and copy the message below, then paste it into your email. Nothing has been sent yet.",
      );
    }
  }
  return (
    <form
      ref={form}
      className="draft-form correction-form"
      onSubmit={openEmail}
      onChange={() => {
        setStatus("");
        setManualCopy("");
      }}
    >
      {initialTitle && (
        <p className="correction-context">
          <span>About this guide</span>
          <strong>{initialTitle}</strong>
        </p>
      )}
      <label>
        Page to review
        <input
          name="page"
          type="url"
          required
          maxLength={300}
          defaultValue={initialPage}
          placeholder="https://experienceauthority.com/…"
          autoComplete="off"
        />
      </label>
      <label>
        What needs attention?
        <select name="topic" required defaultValue="">
          <option value="" disabled>
            Choose a topic
          </option>
          {correctionTopics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label>
        Your correction or concern
        <textarea
          name="context"
          required
          minLength={10}
          maxLength={2400}
          placeholder="Tell us what is wrong and what you believe should change. You do not need to know the replacement answer to flag a problem."
          aria-describedby="correction-privacy"
        />
      </label>
      <label>
        Supporting public source{" "}
        <span className="optional-label">Optional</span>
        <input
          name="source"
          type="url"
          maxLength={1000}
          placeholder="https://…"
        />
      </label>
      <p id="correction-privacy" className="small-note">
        Please do not include private locations, personal information about
        other people or restricted cultural knowledge. Your text stays in this
        page until you copy it or open your email app.
      </p>
      <div className="correction-actions">
        <button className="button button-dark" type="submit">
          Open email draft <span aria-hidden="true">↗</span>
        </button>
        <button className="button" type="button" onClick={copy}>
          Copy message
        </button>
      </div>
      <p className="small-note">
        Your draft is addressed to{" "}
        <a href={`mailto:${publisher.email}`}>{publisher.email}</a>. No account
        is needed, and you choose when to send it.
      </p>
      {status && (
        <p className="draft-status" role="status">
          {status}
        </p>
      )}
      {manualCopy && (
        <label>
          Message to copy
          <textarea
            readOnly
            value={manualCopy}
            rows={12}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
      <aside className="correction-process">
        <h2>What happens next</h2>
        <p>
          Reports go to the EA editorial inbox. We check the relevant sources
          before changing a guide. Reporting a concern does not automatically
          edit a page or publish your message. For a photograph or rights
          concern, identify the image and the reason it needs attention.
        </p>
      </aside>
    </form>
  );
}
