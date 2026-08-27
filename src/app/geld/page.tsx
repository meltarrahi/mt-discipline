import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategory } from "@/config/categories";

const category = getCategory("geld");

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: { canonical: "/geld" },
};

export default function GeldPage() {
  return <CategoryPageTemplate category={category} />;
}
