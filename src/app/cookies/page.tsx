import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Lees welke cookies MT-Discipline gebruikt en waarom.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Juridisch"
      title="Cookies"
      intro="Deze pagina legt uit welke cookies MT-Discipline op dit moment gebruikt."
      updatedOn="5 augustus 2026"
    >
      <div className="rounded-2xl border border-accent/30 bg-accent-soft/30 p-5 text-sm text-primary-strong">
        <strong>Let op:</strong> deze pagina is een basisversie. Laat deze tekst juridisch
        controleren voordat analytics of andere cookies worden toegevoegd.
      </div>

      <div>
        <h2>Functionele cookies</h2>
        <p>
          MT-Discipline gebruikt op dit moment geen trackingcookies. Eventuele technische
          cookies die noodzakelijk zijn voor het functioneren van de website vereisen geen
          toestemming.
        </p>
      </div>

      <div>
        <h2>Analytische cookies</h2>
        <p>
          Er wordt op dit moment geen analytics gebruikt. Zodra privacyvriendelijke analytics
          wordt toegevoegd, wordt deze pagina bijgewerkt met informatie over de gebruikte tool,
          het doel en de bewaartermijn.
        </p>
      </div>

      <div>
        <h2>Cookies van derden</h2>
        <p>
          Bij het insluiten van content van derden (bijvoorbeeld video&apos;s of social media)
          kunnen cookies van die derde partijen worden geplaatst. Dit wordt hier aangevuld zodra
          dergelijke content wordt toegevoegd.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Vragen over deze cookiepagina kunnen worden gestuurd naar{" "}
          <a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
