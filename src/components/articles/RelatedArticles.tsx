import { ArticleCard } from "@/components/sections/ArticleCard";
import type { Article } from "@/types";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="verder-lezen-titel" className="border-t border-border pt-8">
      <h2 id="verder-lezen-titel" className="text-xl font-semibold text-primary-strong">
        Lees verder
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
