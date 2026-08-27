import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategory } from "@/config/categories";

const category = getCategory("belastingen");

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: { canonical: "/belastingen" },
};

export default function BelastingenPage() {
  return <CategoryPageTemplate category={category} />;
}
