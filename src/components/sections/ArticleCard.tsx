import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getCategory } from "@/config/categories";
import type { Article } from "@/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm shadow-black/[0.03]">
      <Link href={`/artikelen/${article.slug}`} className="focus-ring block">
        <div className="aspect-[16/9] w-full overflow-hidden bg-surface">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            width={640}
            height={360}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Badge>{category.name}</Badge>

        <h3 className="mt-4 text-lg font-semibold text-primary-strong">
          <Link href={`/artikelen/${article.slug}`} className="focus-ring rounded-md">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="flex flex-col text-xs text-ink-muted">
            <span>{formatDate(article.publishedAt)}</span>
            <span className="mt-0.5 inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readingTime}
            </span>
          </span>

          <Link
            href={`/artikelen/${article.slug}`}
            className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary hover:text-accent"
          >
            Lees verder
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
