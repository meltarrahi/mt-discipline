import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategory } from "@/config/categories";

const category = getCategory("administratie");

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: { canonical: "/administratie" },
};

export default function AdministratiePage() {
  return <CategoryPageTemplate category={category} />;
}
