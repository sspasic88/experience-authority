import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, LockKeyhole, MoveUpRight } from "lucide-react";
import { statusLabels, type PublicExperience } from "@/lib/catalog";
import { guideMediaFor } from "@/lib/media";
import { ExperienceActions } from "./passport-provider";

export function StatusBadge({
  status,
  demo = false,
}: {
  status: PublicExperience["status"];
  demo?: boolean;
}) {
  return (
    <span className={`status-badge status-${status}`}>
      {statusLabels[status]}
      {demo && <span className="status-demo"> · demo</span>}
    </span>
  );
}
/** Original typographic artwork, deliberately not documentary imagery. */
export function GuideArt({
  item,
}: {
  item: Pick<PublicExperience, "field" | "place" | "country">;
}) {
  return (
    <div className={`guide-art guide-art-${item.field}`} aria-hidden="true">
      <span className="guide-art-kicker">EA / FIELD NOTES</span>
      <span className="guide-art-place">
        {item.place}
        <span className="orange-period">.</span>
      </span>
      <span className="guide-art-mark" />
      <span className="guide-art-foot">
        <span>{item.field}</span>
        <span>{item.country}</span>
      </span>
    </div>
  );
}
export function Photo({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`editorial-photo ${className}`}
    />
  );
}
export function ExperienceCard({
  item,
  index = 0,
}: {
  item: PublicExperience;
  index?: number;
}) {
  const media =
    item.status === "public_guide" ? guideMediaFor(item.id) : undefined;
  return (
    <article className="experience-card">
      <div className={`card-image ${!item.image ? "card-no-image" : ""}`}>
        <Link
          className="card-photo-link"
          href={`/experiences/${item.slug}`}
          tabIndex={-1}
          aria-hidden="true"
        >
          {item.image ? (
            <Photo
              src={item.image}
              alt=""
              className={`photo-${item.id}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
          ) : item.status === "public_guide" ? (
            <GuideArt item={item} />
          ) : (
            <span className="protected-art">
              {item.status === "protected_visibility" ? (
                <LockKeyhole size={36} strokeWidth={1} />
              ) : (
                <span className="art-slash" />
              )}
              <span>
                {item.status === "protected_visibility"
                  ? "A boundary worth respecting."
                  : "A story taking shape."}
              </span>
            </span>
          )}
        </Link>
        {media && (
          <Link
            className="image-source-badge"
            href={`/credits#media-${media.guideId}`}
            aria-label={`Photo credit for ${item.title}`}
          >
            Photo credit <span aria-hidden="true">↗</span>
          </Link>
        )}
        {item.demo && <span className="image-demo">Illustrative · demo</span>}
        <ExperienceActions item={item} compact />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>{item.field}</span>
          <span>
            {item.place}
            {item.countrySlug && `, ${item.country}`}
          </span>
        </div>
        <h3>
          <Link href={`/experiences/${item.slug}`}>
            {item.title}
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
        </h3>
        <p>{item.summary}</p>
        <div className="card-bottom">
          <StatusBadge status={item.status} demo={item.demo} />
          <span className="card-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </article>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  href,
  link = "Explore all",
}: {
  eyebrow: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {link} <ArrowUpRight size={18} />
        </Link>
      )}
    </div>
  );
}
export function EmptyState({
  title = "Nothing here just yet.",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="empty-state">
      <MoveUpRight size={34} strokeWidth={1.2} />
      <h2>{title}</h2>
      {children}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <div className="page-intro-copy">{children}</div>}
    </div>
  );
}
