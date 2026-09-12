"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { PublicExperience } from "@/lib/catalog";
import { guideMediaFor } from "@/lib/media";
import { ImageCredit, Photo } from "./editorial";

function HeroStory({
  item,
  primary = false,
}: {
  item: PublicExperience;
  primary?: boolean;
}) {
  const media = guideMediaFor(item.id);
  const href = `/experiences/${item.slug}`;
  return (
    <figure className={primary ? "prototype-hero-place" : undefined}>
      <Link
        className="prototype-hero-image-link"
        href={href}
        aria-label={`Explore ${item.title} in ${item.place}`}
      />
      {item.image && (
        <Photo
          src={item.image}
          alt={item.imageAlt}
          priority={primary}
          sizes={
            primary
              ? "(max-width: 700px) 60vw, (max-width: 1100px) 48vw, 29vw"
              : "(max-width: 700px) 40vw, 20vw"
          }
        />
      )}
      <figcaption>
        <span className="eyebrow">
          {primary ? `Place / ${item.place}` : item.field}
        </span>
        <Link href={href}>{item.title}</Link>
      </figcaption>
      {media && <ImageCredit media={media} />}
    </figure>
  );
}

export function HomeHeroMosaic({
  editions,
  initialIndex,
}: {
  editions: PublicExperience[][];
  initialIndex: number;
}) {
  const [index, setIndex] = useState(
    editions.length ? initialIndex % editions.length : 0,
  );
  const [main, upper, lower] = editions[index] || [];

  function move(direction: -1 | 1) {
    if (editions.length < 2) return;
    setIndex(
      (current) => (current + direction + editions.length) % editions.length,
    );
  }

  return (
    <div className="prototype-hero-rotator">
      <div className="prototype-hero-mosaic" key={index}>
        {main && <HeroStory item={main} primary />}
        <div className="prototype-hero-sides">
          {upper && <HeroStory item={upper} />}
          {lower && <HeroStory item={lower} />}
        </div>
      </div>
      {editions.length > 1 && (
        <div className="prototype-hero-controls">
          <span aria-live="polite">
            Ways in {String(index + 1).padStart(2, "0")} /{" "}
            {String(editions.length).padStart(2, "0")}
          </span>
          <button onClick={() => move(-1)} aria-label="Previous ways in">
            <ArrowLeft size={15} aria-hidden="true" />
          </button>
          <button onClick={() => move(1)} aria-label="Next ways in">
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
