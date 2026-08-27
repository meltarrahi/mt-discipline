import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/sections/ArticleCard";
import type { Article } from "@/types";

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Kennisbank"
            title="Nieuw op MT-Discipline"
            description="De nieuwste artikelen over belastingen, geld, ondernemen en administratie."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/artikelen" variant="secondary">
            Bekijk alle artikelen
          </Button>
        </div>
      </Container>
    </section>
  );
}
