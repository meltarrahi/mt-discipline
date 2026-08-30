import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Lees de disclaimer van MT-Discipline over de aard en beperkingen van de gedeelde informatie.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Juridisch"
      title="Disclaimer"
      intro="Deze disclaimer legt uit hoe de informatie op MT-Discipline moet worden geïnterpreteerd."
      updatedOn="5 augustus 2026"
    >
      <div>
        <h2>Algemeen en educatief karakter</h2>
        <p>{siteConfig.generalDisclaimer}</p>
      </div>

      <div>
        <h2>Geen garantie op juistheid of volledigheid</h2>
        <p>
          Ondanks de zorgvuldigheid waarmee content op MT-Discipline wordt samengesteld, kan
          niet worden gegarandeerd dat alle informatie te allen tijde volledig, juist of actueel
          is. Wet- en regelgeving op het gebied van belastingen, financiën en boekhouding kan
          veranderen. Aan de inhoud van deze website kunnen geen rechten worden ontleend.
        </p>
      </div>

      <div>
        <h2>Externe links</h2>
        <p>
          MT-Discipline kan verwijzen naar websites of bronnen van derden. MT-Discipline heeft
          geen invloed op de inhoud van deze externe bronnen en is niet verantwoordelijk voor de
          juistheid of beschikbaarheid daarvan.
        </p>
      </div>

      <div>
        <h2>Aansprakelijkheid</h2>
        <p>
          MT-Discipline aanvaardt geen aansprakelijkheid voor
          schade die voortvloeit uit het gebruik van de informatie op deze website, tenzij sprake
          is van opzet of bewuste roekeloosheid.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Vragen over deze disclaimer kunnen worden gestuurd naar{" "}
          <a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
