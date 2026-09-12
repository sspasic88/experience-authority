"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Expand, X } from "lucide-react";
import type { GuideMedia } from "@/lib/media";

/** A native modal keeps keyboard focus inside the photograph, not behind it. */
export function PhotoViewer({ media }: { media: GuideMedia }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="photo-expand"
        aria-label={`Enlarge photograph: ${media.alt}`}
        aria-haspopup="dialog"
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
      >
        <span>
          <Expand size={18} aria-hidden="true" /> View photo
        </span>
      </button>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-labelledby={`${id}-title`}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="photo-dialog-content">
          <div className="photo-dialog-bar">
            <h2 id={`${id}-title`}>A closer look</h2>
            <button
              type="button"
              className="icon-button"
              onClick={close}
              aria-label="Close photograph"
              autoFocus
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          {open && (
            <div className="photo-dialog-image">
              <Image
                src={media.src}
                alt={media.alt}
                fill
                sizes="(max-width: 700px) 95vw, 85vw"
              />
            </div>
          )}
          <div className="photo-dialog-caption">
            <p>{media.depiction}</p>
            <p>
              Photo:{" "}
              <a
                href={media.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {media.photographer}
                <span className="sr-only">
                  {" "}
                  — original source (opens a new tab)
                </span>
              </a>
              {" · "}
              <a
                href={media.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {media.licenseName}
                <span className="sr-only"> (opens a new tab)</span>
              </a>
              {" · "}Resized for the web. No AI-generated imagery.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
