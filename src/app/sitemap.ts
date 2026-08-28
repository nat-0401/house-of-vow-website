import type { MetadataRoute } from "next";
import { absoluteUrl, sitemapRoutes } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }));
}
