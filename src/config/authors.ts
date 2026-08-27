import type { Author } from "@/types";

export const authors: Author[] = [
  {
    slug: "mohamed-el-tarrahi",
    name: "Mohamed el Tarrahi",
    role: "Fiscalist en oprichter van MT-Discipline",
    bio: "Mohamed werkt in loondienst als fiscalist bij Habermehl en deelt via MT-Discipline op persoonlijke titel begrijpelijke kennis over belastingen, geld, ondernemen en administratie.",
    avatar: "/images/portrait-placeholder.svg",
  },
];

export function getAuthor(slug: string): Author {
  const author = authors.find((item) => item.slug === slug);
  if (!author) {
    throw new Error(`Onbekende auteur: ${slug}`);
  }
  return author;
}
