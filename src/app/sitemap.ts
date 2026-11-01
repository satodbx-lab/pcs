import type { MetadataRoute } from "next";
import { site, updates } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/about/pcs",
    "/about/profile",
    "/links",
    // お知らせが0件の間は noindex にしているため、サイトマップにも載せない
    ...(updates.length > 0 ? ["/news"] : []),
    "/contact",
    "/consultation/apply",
    "/privacy",
    "/legal",
    "/disclaimer",
  ];
  const now = new Date();
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" || path === "/consultation/apply" ? 0.8 : 0.5,
  }));
}
