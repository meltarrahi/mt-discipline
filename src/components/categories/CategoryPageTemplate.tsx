import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { getArticlesByCategory } from "@/lib/content";
import type { CategoryConfig } from "@/types";

export function CategoryPageTemplate({ category }: { category: CategoryConfig }) {
  const articles = getArticlesByCategory(category.slug);
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="bg-primary-strong py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Kennisgebied</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {category.heroDescription}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {category.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white"
              >
                {topic}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {featured ? (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Uitgelicht" title="Uitgelicht artikel" />
            <div className="mt-8 max-w-2xl">
              <ArticleCard article={featured} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Artikelen"
            title={`Alle artikelen over ${category.name.toLowerCase()}`}
          />
          {rest.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-ink-muted">
              Er verschijnen binnenkort meer artikelen binnen dit kennisgebied.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
