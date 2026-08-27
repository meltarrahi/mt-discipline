import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, socialLinks } from "@/config/site";
import { getSearchIndex } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: "MT-Discipline | Meer grip op je financiën",
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Praktische kennis over geld, belastingen, administratie en ondernemen — helder uitgelegd door MT-Discipline.",
  keywords: [
    "MT-Discipline",
    "Mohamed el Tarrahi",
    "financiële kennis",
    "financiële educatie",
    "belastingen uitgelegd",
    "financiën begrijpelijk uitgelegd",
    "financieel slimmer worden",
    "financiële geletterdheid",
    "boekhouding uitgelegd",
    "cashflow begrijpen",
    "vermogensopbouw",
    "ondernemen en administratie",
  ],
  authors: [{ name: siteConfig.founderName }],
  creator: siteConfig.founderName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.websiteUrl,
    siteName: siteConfig.brandName,
    title: "MT-Discipline | Meer grip op je financiën",
    description:
      "Praktische kennis over geld, belastingen, administratie en ondernemen — helder uitgelegd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MT-Discipline | Meer grip op je financiën",
    description:
      "Praktische kennis over geld, belastingen, administratie en ondernemen — helder uitgelegd.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const activeSocialLinks = socialLinks.filter((link) => link.url).map((link) => link.url);
  const searchIndex = getSearchIndex();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.brandName,
      url: siteConfig.websiteUrl,
      description: siteConfig.brandPositioning,
      inLanguage: "nl-NL",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.websiteUrl,
      founder: {
        "@type": "Person",
        name: siteConfig.founderName,
      },
      ...(activeSocialLinks.length > 0 ? { sameAs: activeSocialLinks } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.founderName,
      url: siteConfig.websiteUrl,
      jobTitle: "Fiscalist en financieel educator",
      description:
        "Oprichter van MT-Discipline en fiscalist in loondienst bij Habermehl. Deelt op persoonlijke titel educatieve content over belastingen, geld, ondernemen en administratie.",
      ...(activeSocialLinks.length > 0 ? { sameAs: activeSocialLinks } : {}),
    },
  ];

  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a href="#hoofdinhoud" className="skip-link">
          Ga naar de hoofdinhoud
        </a>
        <Header searchIndex={searchIndex} />
        <main id="hoofdinhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
