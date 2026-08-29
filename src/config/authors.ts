import type { Author } from "@/types";

export const authors: Author[] = [
  {
    slug: "mohamed-el-tarrahi",
    name: "Redactie MT-Discipline",
    role: "Kennis- en contentplatform",
    bio: "MT-Discipline deelt begrijpelijke, praktische kennis over belastingen, geld, ondernemen en administratie.",
  },
];

export function getAuthor(slug: string): Author {
  const author = authors.find((item) => item.slug === slug);
  if (!author) {
    throw new Error(`Onbekende auteur: ${slug}`);
  }
  return author;
}
