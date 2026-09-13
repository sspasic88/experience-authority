"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { imageSource } from "@/lib/image-revisions";

export type HomeHeroStory = {
  slug: string;
  title: string;
  place: string;
  field: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  credit: string;
};

function HeroStory({
  item,
  primary = false,
}: {
  item: HomeHeroStory;
  primary?: boolean;
}) {
  const href = `/experiences/${item.slug}`;
  return (
    <figure className={primary ? "prototype-hero-place" : undefined}>
      <Link
        className="prototype-hero-image-link"
        href={href}
        aria-label={`Explore ${item.title} in ${item.place}`}
      />
      <Image
        src={imageSource(item.image)}
        alt={item.imageAlt}
        fill
        priority={primary}
        sizes={
          primary
            ? "(max-width: 700px) 110vw, (max-width: 1100px) 90vw, 65vw"
            : "(max-width: 700px) 65vw, 36vw"
        }
        className="editorial-photo"
      />
      <figcaption>
        <span className="eyebrow">
          {primary ? `Place / ${item.place}` : item.field}
        </span>
        <Link href={href}>{item.title}</Link>
      </figcaption>
      <a
        className="image-source-badge"
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Image: {item.credit}</span>
        <ArrowUpRight size={11} aria-hidden="true" />
        <span className="sr-only"> (opens source in a new tab)</span>
      </a>
    </figure>
  );
}

export function HomeHeroMosaic({
  editions,
  initialIndex,
}: {
  editions: HomeHeroStory[][];
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
