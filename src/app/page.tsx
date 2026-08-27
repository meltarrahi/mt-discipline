import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { CategoryGrid } from "@/components/categories/CategoryGrid";
import { FeaturedArticle } from "@/components/homepage/FeaturedArticle";
import { ArticleGrid } from "@/components/homepage/ArticleGrid";
import { PopularArticles } from "@/components/homepage/PopularArticles";
import { KnowledgeBase } from "@/components/homepage/KnowledgeBase";
import { getFeaturedArticle, getLatestArticles, getPopularArticles } from "@/lib/content";

export default function HomePage() {
  const featuredArticle = getFeaturedArticle();
  const latestArticles = getLatestArticles(6).filter(
    (article) => article.slug !== featuredArticle?.slug,
  );
  const popularArticles = getPopularArticles(5);

  return (
    <>
      <Hero />
      {featuredArticle ? <FeaturedArticle article={featuredArticle} /> : null}
      <ArticleGrid articles={latestArticles} />
      <CategoryGrid />
      <MissionSection />
      <PopularArticles articles={popularArticles} />
      <KnowledgeBase />
      <NewsletterSection />
    </>
  );
}
