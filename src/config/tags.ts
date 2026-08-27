import type { Tag } from "@/types";

export const tags: Tag[] = [
  { slug: "inkomstenbelasting", label: "Inkomstenbelasting" },
  { slug: "box-3", label: "Box 3" },
  { slug: "aftrekposten", label: "Aftrekposten" },
  { slug: "sparen", label: "Sparen" },
  { slug: "beleggen", label: "Beleggen" },
  { slug: "financiele-buffer", label: "Financiële buffer" },
  { slug: "vermogensopbouw", label: "Vermogensopbouw" },
  { slug: "omzet-en-winst", label: "Omzet en winst" },
  { slug: "cashflow", label: "Cashflow" },
  { slug: "btw", label: "Btw" },
  { slug: "boekhouding", label: "Boekhouding" },
  { slug: "balans", label: "Balans" },
  { slug: "ai-en-automatisering", label: "AI en automatisering" },
  { slug: "ondernemingsvormen", label: "Ondernemingsvormen" },
];

export function getTag(slug: string): Tag | undefined {
  return tags.find((tag) => tag.slug === slug);
}
