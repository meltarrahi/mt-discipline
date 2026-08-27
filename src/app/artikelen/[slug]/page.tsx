import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { Sources } from "@/components/articles/Sources";
import { AuthorBox } from "@/components/articles/AuthorBox";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { ShareButtons } from "@/components/articles/ShareButtons";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { getArticleBySlug, getArticleSlugs, getRelatedArticles } from "@/lib/content";
import { getCategory } from "@/config/categories";
import { getAuthor } from "@/config/authors";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/artikelen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;
  const url = `${siteConfig.websiteUrl}/artikelen/${article.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/artikelen/${article.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [{ url: article.coverImage }],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/artikelen/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategory(article.category);
  const author = getAuthor(article.author);
  const relatedArticles = getRelatedArticles(article);
  const url = `${siteConfig.websiteUrl}/artikelen/${article.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      image: `${siteConfig.websiteUrl}${article.coverImage}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      author: { "@type": "Person", name: author.name },
      publisher: { "@type": "Organization", name: siteConfig.brandName },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.websiteUrl },
        { "@type": "ListItem", position: 2, name: "Artikelen", item: `${siteConfig.websiteUrl}/artikelen` },
        {
          "@type": "ListItem",
          position: 3,
          name: category.name,
          item: `${siteConfig.websiteUrl}/${category.slug}`,
        },
        { "@type": "ListItem", position: 4, name: article.title, item: url },
      ],
    },
  ];

  return (
    <>
      <ArticleHeader
        article={article}
        category={category}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Artikelen", href: "/artikelen" },
          { label: category.name, href: `/${category.slug}` },
          { label: article.title },
        ]}
      />

      <Container className="max-w-5xl py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <div className="hidden lg:block">
            <TableOfContents headings={article.headings} />
          </div>

          <div className="min-w-0">
            <div className="lg:hidden">
              <TableOfContents headings={article.headings} />
            </div>

            <ArticleBody content={article.content} />

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <ShareButtons url={url} title={article.title} />
            </div>

            <div className="mt-10 space-y-10">
              <Sources sources={article.sources ?? []} />
              <AuthorBox author={author} />

              <div className="rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-ink-muted">
                <p>{siteConfig.generalDisclaimer}</p>
                <p className="mt-3">
                  Lees de volledige{" "}
                  <Link href="/disclaimer" className="focus-ring text-primary underline underline-offset-2">
                    disclaimer
                  </Link>{" "}
                  voor meer informatie.
                </p>
              </div>

              <div className="rounded-3xl bg-primary-strong p-6 text-white sm:p-8">
                <p className="text-sm font-semibold tracking-wide text-accent uppercase">Nieuwsbrief</p>
                <h2 className="mt-2 text-2xl font-semibold">Word financieel slimmer</h2>
                <p className="mt-2 max-w-xl text-sm text-white/80">
                  Ontvang nieuwe artikelen en praktische financiële inzichten rechtstreeks in je inbox.
                </p>
                <div className="mt-6">
                  <NewsletterForm />
                </div>
              </div>

              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
