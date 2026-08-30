import type { SocialLink } from "@/types";

/**
 * Centrale site-configuratie. Pas hier merk-, contact- en socialmediagegevens aan
 * zodra de definitieve gegevens beschikbaar zijn (zie README voor de volledige lijst).
 */
export const siteConfig = {
  brandName: "MT-Discipline",
  websiteUrl: "https://www.mt-discipline.nl",
  // Placeholder: vervang door het definitieve zakelijke e-mailadres.
  businessEmail: "info@mt-discipline.nl",
  region: "Nederland",
  positioning:
    "Ik help mensen meer grip te krijgen op hun financiën door complexe onderwerpen over geld, belastingen, administratie en ondernemen eenvoudig uit te leggen.",
  brandPositioning:
    "MT-Discipline helpt mensen meer grip te krijgen op hun financiën door complexe onderwerpen over geld, belastingen, administratie en ondernemen eenvoudig uit te leggen.",
  tagline: "Meer grip op je financiën.",
  secondaryTagline: "Kennis. Overzicht. Discipline.",
  mission:
    "Financiële kennis toegankelijk maken, zodat mensen betere financiële vragen kunnen stellen, weloverwogen keuzes kunnen maken en meer grip krijgen op hun financiële toekomst.",
  generalDisclaimer:
    "De informatie op MT-Discipline is uitsluitend algemeen en educatief van aard. De inhoud vormt geen persoonlijk fiscaal, juridisch, financieel, boekhoudkundig of beleggingsadvies en houdt geen rekening met individuele feiten en omstandigheden. Wet- en regelgeving kan veranderen. Laat belangrijke beslissingen waar nodig beoordelen door een bevoegde deskundige.",
} as const;

/**
 * Socialmedia-links. Laat url leeg totdat het profiel bestaat — de link wordt
 * dan automatisch niet getoond (zie components/sections/SocialSection.tsx).
 */
export const socialLinks: SocialLink[] = [
  { platform: "linkedin", label: "LinkedIn", url: "" },
  { platform: "tiktok", label: "TikTok", url: "" },
  { platform: "youtube", label: "YouTube", url: "" },
  { platform: "instagram", label: "Instagram", url: "" },
];
