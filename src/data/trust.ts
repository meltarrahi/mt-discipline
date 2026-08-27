import {
  BookOpenCheck,
  MessageCircleQuestion,
  ScaleIcon,
  ShieldCheck,
  Sparkle,
  Target,
} from "lucide-react";
import type { TrustPrinciple } from "@/types";

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Begrijpelijke uitleg",
    description: "Complexe onderwerpen worden teruggebracht tot duidelijke taal.",
    icon: BookOpenCheck,
  },
  {
    title: "Aandacht voor nuance",
    description: "Financiële en fiscale onderwerpen zijn zelden volledig zwart-wit.",
    icon: ScaleIcon,
  },
  {
    title: "Praktische toepasbaarheid",
    description: "Informatie wordt gekoppeld aan herkenbare situaties en beslissingen.",
    icon: Target,
  },
  {
    title: "Zorgvuldige omgang met informatie",
    description: "Feiten, onzekerheden en beperkingen worden duidelijk benoemd.",
    icon: ShieldCheck,
  },
  {
    title: "Heldere communicatie",
    description: "Geen onnodige vaktaal of onduidelijke beloftes.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Geen onrealistische claims",
    description: "Financiële vooruitgang vraagt om kennis, keuzes en consistentie.",
    icon: Sparkle,
  },
];
