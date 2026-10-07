import type { MetadataRoute } from "next";
import { servicePages, site } from "./site";

// Required for `output: "export"`: generate sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((page) => ({
      url: `${site.url}${page.href}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
