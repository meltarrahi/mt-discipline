import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArticlesExplorer } from "@/components/articles/ArticlesExplorer";
import { getAllArticles } from "@/lib/content";
import { categories } from "@/config/categories";

export const metadata: Metadata = {
  title: "Alle artikelen",
  description:
    "Praktische uitleg en verdieping over geld, belastingen, administratie en ondernemen.",
  alternates: { canonical: "/artikelen" },
};

export default function ArtikelenPage() {
  const articles = getAllArticles();
  const categoryOptions = categories.map(({ slug, name }) => ({ slug, name }));

  return (
    <>
      <section className="bg-primary-strong py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Kennisbank</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Alle artikelen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Praktische uitleg en verdieping over geld, belastingen, administratie en ondernemen.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ArticlesExplorer articles={articles} categories={categoryOptions} />
        </Container>
      </section>
    </>
  );
}
