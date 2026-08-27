import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getCategory } from "@/config/categories";
import type { Article } from "@/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export function FeaturedArticle({ article }: { article: Article }) {
  const category = getCategory(article.category);

  return (
    <section className="py-16 sm:py-20" aria-labelledby="uitgelicht-titel">
      <Container>
        <p id="uitgelicht-titel" className="text-sm font-semibold tracking-wide text-accent uppercase">
          Uitgelicht
        </p>

        <Link
          href={`/artikelen/${article.slug}`}
          className="focus-ring mt-6 grid gap-8 overflow-hidden rounded-3xl border border-border bg-white shadow-sm shadow-black/[0.04] lg:grid-cols-2 lg:items-stretch"
        >
          <div className="aspect-[16/9] w-full overflow-hidden bg-surface lg:aspect-auto">
            <Image
              src={article.coverImage}
              alt={article.coverImageAlt}
              width={960}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <Badge>{category.name}</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-strong text-balance sm:text-3xl">
              {article.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{article.excerpt}</p>

            <div className="mt-6 flex items-center gap-4 text-sm text-ink-muted">
              <span>{formatDate(article.publishedAt)}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readingTime}
              </span>
            </div>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Lees het artikel
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}
