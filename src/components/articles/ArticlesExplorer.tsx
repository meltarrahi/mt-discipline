"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Article, CategorySlug } from "@/types";

const PAGE_SIZE = 9;
type SortOption = "nieuwste" | "populair";
type CategoryOption = { slug: CategorySlug; name: string };

export function ArticlesExplorer({
  articles,
  categories,
}: {
  articles: Article[];
  categories: CategoryOption[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("alle");
  const [sort, setSort] = useState<SortOption>("nieuwste");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    let result = articles.filter((article) => {
      const matchesCategory = activeCategory === "alle" || article.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery) ||
        article.tags.some((tag) => tag.includes(normalizedQuery));
      return matchesCategory && matchesQuery;
    });

    if (sort === "populair") {
      result = [...result].sort((a, b) => Number(b.popular) - Number(a.popular));
    }

    return result;
  }, [articles, activeCategory, query, sort]);

  const visibleArticles = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Zoek een artikel..."
            aria-label="Zoek een artikel"
            className="focus-ring w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted/60"
          />
        </div>

        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="artikelen-sort" className="text-ink-muted">
            Sorteer op
          </label>
          <select
            id="artikelen-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="focus-ring rounded-lg border border-border bg-white px-3 py-2 text-ink"
          >
            <option value="nieuwste">Nieuwste eerst</option>
            <option value="populair">Populair</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveCategory("alle");
            setVisibleCount(PAGE_SIZE);
          }}
          className={cn(
            "focus-ring rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
            activeCategory === "alle"
              ? "border-primary bg-primary text-white"
              : "border-border bg-white text-ink-muted hover:border-primary hover:text-primary",
          )}
        >
          Alle categorieën
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => {
              setActiveCategory(category.slug);
              setVisibleCount(PAGE_SIZE);
            }}
            className={cn(
              "focus-ring rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === category.slug
                ? "border-primary bg-primary text-white"
                : "border-border bg-white text-ink-muted hover:border-primary hover:text-primary",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {visibleArticles.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-ink-muted">Geen artikelen gevonden voor deze zoekopdracht.</p>
      )}

      {visibleCount < filtered.length ? (
        <div className="mt-10">
          <Button variant="secondary" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
            Meer artikelen laden
          </Button>
        </div>
      ) : null}
    </div>
  );
}
