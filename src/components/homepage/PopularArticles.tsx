import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCategory } from "@/config/categories";
import type { Article } from "@/types";

export function PopularArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Populair" title="Veel gelezen" />

        <ol className="mt-10 divide-y divide-border border-t border-border">
          {articles.map((article, index) => {
            const category = getCategory(article.category);
            return (
              <li key={article.slug}>
                <Link
                  href={`/artikelen/${article.slug}`}
                  className="focus-ring group flex items-center gap-5 py-5"
                >
                  <span className="text-2xl font-bold text-border tabular-nums group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      {category.name}
                    </p>
                    <p className="mt-1 font-semibold text-primary-strong">{article.title}</p>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
