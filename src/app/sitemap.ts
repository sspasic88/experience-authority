import type { MetadataRoute } from "next";
import { getExperiences } from "@/lib/data";
import { sitemapEntries } from "@/lib/discovery";
export const dynamic = "force-dynamic";
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(getExperiences());
}
