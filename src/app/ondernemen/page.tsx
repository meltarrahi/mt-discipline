import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategory } from "@/config/categories";

const category = getCategory("ondernemen");

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: { canonical: "/ondernemen" },
};

export default function OndernemenPage() {
  return <CategoryPageTemplate category={category} />;
}
