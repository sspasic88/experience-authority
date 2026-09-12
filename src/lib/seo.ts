import type { Metadata } from "next";
import type { PublicExperience } from "./catalog";
import { canPublishGuide } from "./publication";

export const SITE_ORIGIN = "https://experienceauthority.com";
export const SITE_NAME = "Experience Authority";
export const SITE_DESCRIPTION =
  "A global selection of locally rooted experiences. Experience first. Provider second.";
type Environment = Record<string, string | undefined>;

/** Explicit release switches. Preview hosts, demo builds and missing settings fail closed. */
export function indexingEnabled(env: Environment = process.env): boolean {
  return (
    env.NODE_ENV === "production" &&
    env.EA_SITE_URL === SITE_ORIGIN &&
    env.EA_LAUNCH_READY === "true" &&
    env.EA_INDEXING_ENABLED === "true" &&
    env.EA_DEMO_MODE !== "true" &&
    (!env.VERCEL_ENV || env.VERCEL_ENV === "production") &&
    (!env.VERCEL || env.VERCEL_ENV === "production")
  );
}

/** Never derive public URLs from incoming Host, query parameters or editorial URLs. */
export function canonicalUrl(path: string): string {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    /[\\\u0000-\u0020]/.test(path)
  ) {
    throw new Error("Canonical paths must be local absolute paths");
  }
  const url = new URL(path, SITE_ORIGIN);
  if (url.origin !== SITE_ORIGIN) throw new Error("Invalid canonical origin");
  url.search = "";
  url.hash = "";
  return url.href;
}

export function isDiscoverable(item: PublicExperience): boolean {
  return (
    !item.demo &&
    (["selected_open", "selected_context_required"].includes(item.status) ||
      canPublishGuide(item))
  );
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  noindex = false,
): Metadata {
  const index = indexingEnabled() && !noindex;
  const url = canonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index, follow: index },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: "en_US",
      images: [
        {
          url: canonicalUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [canonicalUrl("/opengraph-image")],
    },
  };
}

/** Prevent data from terminating an application/ld+json script element. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(
    /[<>&\u2028\u2029]/g,
    (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

export function websiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: canonicalUrl("/icon.svg"),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        name: SITE_NAME,
        url: SITE_ORIGIN,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
    ],
  };
}
