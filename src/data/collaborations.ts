import { Mic, PenTool, Workflow } from "lucide-react";
import type { CollaborationType, ProcessStep } from "@/types";

export const collaborationTypes: CollaborationType[] = [
  {
    slug: "content-en-media",
    title: "Content en media",
    description:
      "Samenwerkingen rond begrijpelijke en betrouwbare content over belastingen, financiën, ondernemerschap en AI.",
    examples: [
      "Artikelen",
      "Video's",
      "Podcasts",
      "Interviews",
      "Gastbijdragen",
      "Scripts",
      "Socialmediacontent",
      "Redactionele samenwerkingen",
      "Media-optredens",
    ],
    icon: Mic,
  },
  {
    slug: "workshops-en-educatie",
    title: "Workshops en educatie",
    description:
      "Praktische sessies waarin complexe onderwerpen toegankelijk en toepasbaar worden gemaakt.",
    examples: [
      "Financiële basiskennis",
      "Financiële cijfers begrijpen",
      "Belastingen in hoofdlijnen",
      "Financiële geletterdheid",
      "AI voor professionals",
      "AI voor ondernemers",
      "Verantwoord gebruik van AI",
      "Contentcreatie met AI",
      "Persoonlijke productiviteit",
    ],
    icon: PenTool,
  },
  {
    slug: "ai-en-contentstrategie",
    title: "AI en contentstrategie",
    description:
      "Samenwerkingen gericht op het praktisch inzetten van AI voor kennisdeling, content, productiviteit en eenvoudige werkprocessen.",
    examples: [
      "AI-workflows",
      "Contentprocessen",
      "Promptontwikkeling",
      "Kennismanagement",
      "Informatieverwerking",
      "Educatieve content",
      "Praktische automatisering",
      "AI-ondersteunde research",
      "Structuur voor contentproductie",
    ],
    icon: Workflow,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Kennismaken",
    description: "We bespreken het onderwerp, de doelgroep en het gewenste resultaat.",
  },
  {
    step: "2",
    title: "Uitwerken",
    description: "MT-Discipline vertaalt het onderwerp naar een duidelijke inhoudelijke en praktische aanpak.",
  },
  {
    step: "3",
    title: "Creëren en toepassen",
    description:
      "De samenwerking wordt uitgewerkt in content, een workshop, een AI-workflow of een ander passend educatief format.",
  },
];
