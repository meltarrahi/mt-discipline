import Image from "next/image";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/articles/Breadcrumbs";
import type { Article, CategoryConfig } from "@/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleHeader({
  article,
  category,
  breadcrumbs,
}: {
  article: Article;
  category: CategoryConfig;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <header className="border-b border-border bg-surface py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />

        <Badge className="mt-6">{category.name}</Badge>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-strong text-balance sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{article.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
          <span>Gepubliceerd op {formatDate(article.publishedAt)}</span>
          {article.updatedAt ? <span>Laatst bijgewerkt op {formatDate(article.updatedAt)}</span> : null}
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTime} leestijd
          </span>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            width={960}
            height={540}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </header>
  );
}
