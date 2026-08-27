import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Article, ArticleFrontmatter, CategorySlug } from "@/types";
import { estimateReadingTime } from "@/lib/reading-time";
import { extractHeadings } from "@/lib/toc";

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

let cachedArticles: Article[] | null = null;

function readArticleFile(fileName: string): Article {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as ArticleFrontmatter;

  return {
    ...frontmatter,
    readingTime: estimateReadingTime(content),
    content,
    headings: extractHeadings(content),
  };
}

/** Leest en cachet alle artikelen uit content/articles, inclusief drafts en toekomstige publicaties. */
function readAllArticlesUnfiltered(): Article[] {
  if (cachedArticles) return cachedArticles;

  if (!fs.existsSync(CONTENT_DIR)) {
    cachedArticles = [];
    return cachedArticles;
  }

  const fileNames = fs.readdirSync(CONTENT_DIR).filter((name) => name.endsWith(".mdx"));
  cachedArticles = fileNames
    .map(readArticleFile)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return cachedArticles;
}

function isPubliclyVisible(article: Article): boolean {
  return article.status === "published" && new Date(article.publishedAt).getTime() <= Date.now();
}

/** Alle gepubliceerde artikelen, nieuwste eerst. Sluit drafts en toekomstige publicatiedata uit. */
export function getAllArticles(): Article[] {
  return readAllArticlesUnfiltered().filter(isPubliclyVisible);
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((article) => article.slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticlesByCategory(
  category: CategorySlug,
  opts: { limit?: number } = {},
): Article[] {
  const filtered = getAllArticles().filter((article) => article.category === category);
  return typeof opts.limit === "number" ? filtered.slice(0, opts.limit) : filtered;
}

export function getArticlesByTag(tagSlug: string): Article[] {
  return getAllArticles().filter((article) => article.tags.includes(tagSlug));
}

export function getFeaturedArticle(): Article | undefined {
  const articles = getAllArticles();
  return articles.find((article) => article.featured) ?? articles[0];
}

export function getLatestArticles(limit = 6): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getPopularArticles(limit = 5): Article[] {
  const articles = getAllArticles();
  const popular = articles.filter((article) => article.popular);
  const rest = articles.filter((article) => !article.popular);
  return [...popular, ...rest].slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const others = getAllArticles().filter((candidate) => candidate.slug !== article.slug);

  const scored = others.map((candidate) => {
    let score = 0;
    if (candidate.category === article.category) score += 2;
    score += candidate.tags.filter((tag) => article.tags.includes(tag)).length;
    return { candidate, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export type SearchIndexEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  tags: string[];
};

export function getSearchIndex(): SearchIndexEntry[] {
  return getAllArticles().map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    tags: article.tags,
  }));
}
