import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { categories } from "@/config/categories";
import { getAllArticles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.websiteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.websiteUrl}/artikelen`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.websiteUrl}/over-mt-discipline`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.websiteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.websiteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.websiteUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.websiteUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.websiteUrl}/algemene-voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteConfig.websiteUrl}/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${siteConfig.websiteUrl}/artikelen/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
