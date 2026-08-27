import { Banknote, Briefcase, Calculator, PiggyBank } from "lucide-react";
import type { CategoryConfig } from "@/types";

/**
 * De vier vaste categorieën van MT-Discipline. Vervangt de oude knowledge-pillars
 * (die "AI" als aparte pijler bevatten) — AI is nu een tag binnen deze categorieën.
 */
export const categories: CategoryConfig[] = [
  {
    slug: "belastingen",
    name: "Belastingen",
    description:
      "Begrijp hoe belastingregels in hoofdlijnen werken, welke begrippen belangrijk zijn en welke ontwikkelingen relevant zijn voor particulieren en ondernemers.",
    heroDescription:
      "Van inkomstenbelasting tot box 3: praktische uitleg over belastingregels, zonder onnodig jargon.",
    seoTitle: "Belastingen uitgelegd",
    seoDescription:
      "Praktische en begrijpelijke uitleg over inkomstenbelasting, box 1, box 2, box 3, aftrekposten en fiscale actualiteit.",
    topics: [
      "Inkomstenbelasting",
      "Box 1",
      "Box 2",
      "Box 3",
      "Aftrekposten",
      "Fiscale actualiteit",
    ],
    icon: Banknote,
  },
  {
    slug: "geld",
    name: "Geld",
    description:
      "Ontdek algemene principes rond sparen, beleggen, schulden en financiële planning, zodat je bewustere financiële keuzes kunt maken.",
    heroDescription:
      "Praktische kennis over sparen, beleggen, financiële buffers en vermogensopbouw op de lange termijn.",
    seoTitle: "Geld: sparen, beleggen en financiële planning",
    seoDescription:
      "Begrijpelijke uitleg over sparen, beleggen, schulden, financiële buffers, vermogen en financiële planning.",
    topics: [
      "Sparen",
      "Beleggen",
      "Schulden",
      "Financiële buffer",
      "Vermogen",
      "Financiële planning",
    ],
    icon: PiggyBank,
  },
  {
    slug: "ondernemen",
    name: "Ondernemen",
    description:
      "Leer hoe omzet, winst, cashflow en ondernemingsvormen samenhangen, zodat je financiële cijfers beter kunt beoordelen.",
    heroDescription:
      "Financiële kennis voor ondernemers: van omzet en winst tot cashflow en ondernemingsvormen.",
    seoTitle: "Ondernemen: financiën voor ondernemers",
    seoDescription:
      "Praktische uitleg over omzet, winst, cashflow, ondernemingsvormen en zakelijke financiën voor ondernemers.",
    topics: [
      "Omzet",
      "Winst",
      "Cashflow",
      "Ondernemingsvormen",
      "Zakelijke financiën",
    ],
    icon: Briefcase,
  },
  {
    slug: "administratie",
    name: "Administratie",
    description:
      "Begrijp hoe boekhouding, facturen, btw en jaarrekeningbegrippen in elkaar zitten, zodat je administratieve keuzes beter kunt beoordelen.",
    heroDescription:
      "Overzicht en begrip van boekhouding, btw, facturen en de belangrijkste jaarrekeningbegrippen.",
    seoTitle: "Administratie en boekhouding uitgelegd",
    seoDescription:
      "Begrijpelijke uitleg over boekhouding, facturen, btw, financiële administratie en jaarrekeningbegrippen.",
    topics: [
      "Boekhouding",
      "Facturen",
      "Btw",
      "Financiële administratie",
      "Jaarrekeningbegrippen",
    ],
    icon: Calculator,
  },
];

export function getCategory(slug: CategoryConfig["slug"]): CategoryConfig {
  const category = categories.find((item) => item.slug === slug);
  if (!category) {
    throw new Error(`Onbekende categorie: ${slug}`);
  }
  return category;
}
