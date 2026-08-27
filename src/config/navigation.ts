import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Artikelen", href: "/artikelen" },
  { label: "Belastingen", href: "/belastingen" },
  { label: "Geld", href: "/geld" },
  { label: "Ondernemen", href: "/ondernemen" },
  { label: "Administratie", href: "/administratie" },
  { label: "Over MT-Discipline", href: "/over-mt-discipline" },
];

export const categoryNavigation: NavigationItem[] = [
  { label: "Belastingen", href: "/belastingen" },
  { label: "Geld", href: "/geld" },
  { label: "Ondernemen", href: "/ondernemen" },
  { label: "Administratie", href: "/administratie" },
];

export const platformNavigation: NavigationItem[] = [
  { label: "Artikelen", href: "/artikelen" },
  { label: "Over MT-Discipline", href: "/over-mt-discipline" },
  { label: "Contact", href: "/contact" },
  { label: "Nieuwsbrief", href: "/#nieuwsbrief" },
];

export const legalNavigation: NavigationItem[] = [
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Disclaimer", href: "/disclaimer" },
];
