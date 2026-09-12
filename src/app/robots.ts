import type { MetadataRoute } from "next";
import { canonicalUrl, indexingEnabled } from "@/lib/seo";
import { TRAINING_ROBOTS } from "@/lib/security";
export const dynamic = "force-dynamic";
export default function robots(): MetadataRoute.Robots {
  // Let normal search crawlers read noindex. robots.txt alone does not prevent indexing.
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: TRAINING_ROBOTS, disallow: "/" },
    ],
    ...(indexingEnabled() ? { sitemap: canonicalUrl("/sitemap.xml") } : {}),
  };
}
