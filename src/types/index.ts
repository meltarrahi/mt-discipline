import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialPlatform = "linkedin" | "tiktok" | "youtube" | "instagram";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  url: string;
};

export type CollaborationType = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TrustPrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactSubject =
  | "Algemene vraag"
  | "Content"
  | "Media"
  | "Samenwerking"
  | "Zakelijke aanvraag"
  | "Anders";

/**
 * De vier vaste hoofdcategorieën van MT-Discipline. AI is bewust geen eigen
 * categorie, maar een tag (zie tags.ts) die binnen elke categorie kan voorkomen.
 */
export type CategorySlug = "belastingen" | "geld" | "ondernemen" | "administratie";

export type CategoryConfig = {
  slug: CategorySlug;
  name: string;
  description: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  topics: string[];
  icon: LucideIcon;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
};

export type Tag = {
  slug: string;
  label: string;
};

export type Source = {
  label: string;
  url: string;
};

export type SocialContent = {
  linkedin?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  x?: string;
};

export type TocHeading = {
  depth: 2 | 3;
  text: string;
  slug: string;
};

export type ArticleStatus = "draft" | "published";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  category: CategorySlug;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  status: ArticleStatus;
  featured?: boolean;
  popular?: boolean;
  coverImage: string;
  coverImageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  sources?: Source[];
  /** Alleen gebruikt om distributie voor te bereiden, wordt nooit aan bezoekers getoond. */
  socialContent?: SocialContent;
};

export type Article = ArticleFrontmatter & {
  readingTime: string;
  content: string;
  headings: TocHeading[];
};

export type GlossaryEntry = {
  term: string;
  definition: string;
  articleSlug?: string;
};
