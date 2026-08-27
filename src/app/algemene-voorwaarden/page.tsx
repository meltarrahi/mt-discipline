import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van MT-Discipline voor contentopdrachten, workshops, trainingen en educatieve samenwerkingen.",
  alternates: { canonical: "/algemene-voorwaarden" },
  robots: { index: true, follow: true },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <LegalLayout
      eyebrow="Juridisch"
      title="Algemene voorwaarden"
      intro="Deze algemene voorwaarden zijn van toepassing op samenwerkingen rond content, workshops, trainingen, AI en educatieve producten van MT-Discipline."
      updatedOn="5 augustus 2026"
    >
      <div className="rounded-2xl border border-accent/30 bg-accent-soft/30 p-5 text-sm text-primary-strong">
        <strong>Let op:</strong> dit is een placeholderversie. Laat deze algemene voorwaarden
        juridisch controleren voordat ze definitief worden gebruikt.
      </div>

      <div>
        <h2>1. Toepasselijkheid</h2>
        <p>
          Deze voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten
          tussen {siteConfig.brandName} ({siteConfig.founderName}) en een opdrachtgever, voor
          zover deze betrekking hebben op content, media, workshops, trainingen,
          AI-samenwerkingen, digitale producten of educatieve samenwerkingen.
        </p>
      </div>

      <div>
        <h2>2. Offertes</h2>
        <p>
          Offertes van {siteConfig.brandName} zijn vrijblijvend en gelden, tenzij anders vermeld,
          voor de in de offerte genoemde termijn. Een overeenkomst komt pas tot stand na
          schriftelijke (of digitale) bevestiging door beide partijen.
        </p>
      </div>

      <div>
        <h2>3. Opdrachten</h2>
        <p>
          Een opdracht omvat de specifieke content-, workshop-, training- of
          AI-gerelateerde werkzaamheden zoals overeengekomen. Wijzigingen in de opdracht worden
          in onderling overleg vastgelegd.
        </p>
      </div>

      <div>
        <h2>4. Uitvoering</h2>
        <p>
          {siteConfig.brandName} spant zich in om de opdracht naar beste inzicht en vermogen uit
          te voeren. De exacte aanpak is afhankelijk van het onderwerp, de doelgroep en de vorm
          van de samenwerking.
        </p>
      </div>

      <div>
        <h2>5. Verantwoordelijkheden van de opdrachtgever</h2>
        <p>
          De opdrachtgever levert tijdig de benodigde informatie, feedback en (indien van
          toepassing) toegang tot materialen die nodig zijn voor een goede uitvoering van de
          opdracht.
        </p>
      </div>

      <div>
        <h2>6. Tarieven</h2>
        <p>
          Tarieven worden voorafgaand aan een opdracht overeengekomen en vastgelegd in een
          offerte of overeenkomst. <em>[Placeholder: definitieve tariefstructuur toevoegen.]</em>
        </p>
      </div>

      <div>
        <h2>7. Betaling</h2>
        <p>
          Betaling vindt plaats binnen de overeengekomen betaaltermijn na factuurdatum, tenzij
          schriftelijk anders is afgesproken.
        </p>
      </div>

      <div>
        <h2>8. Annulering</h2>
        <p>
          Annuleringsvoorwaarden worden per opdracht overeengekomen. Bij annulering kort voor de
          uitvoering kunnen reeds gemaakte kosten en gereserveerde tijd in rekening worden
          gebracht.
        </p>
      </div>

      <div>
        <h2>9. Intellectueel eigendom</h2>
        <p>
          Tenzij anders overeengekomen, blijft het intellectueel eigendom van door{" "}
          {siteConfig.brandName} ontwikkelde content, materialen en concepten berusten bij{" "}
          {siteConfig.founderName}, totdat volledige betaling heeft plaatsgevonden en gebruiksrechten
          expliciet zijn overgedragen.
        </p>
      </div>

      <div>
        <h2>10. Gebruik van content</h2>
        <p>
          Gebruiksrechten van geleverde content worden per opdracht vastgelegd, inclusief de
          reikwijdte (bijvoorbeeld eenmalig gebruik, herpublicatie of exclusiviteit).
        </p>
      </div>

      <div>
        <h2>11. Vertrouwelijkheid</h2>
        <p>
          Beide partijen behandelen vertrouwelijke informatie die in het kader van de
          samenwerking wordt gedeeld, zorgvuldig en delen deze niet met derden zonder
          toestemming.
        </p>
      </div>

      <div>
        <h2>12. Aansprakelijkheid</h2>
        <p>
          {siteConfig.brandName} is niet aansprakelijk voor indirecte schade of gevolgschade.
          Aansprakelijkheid is te allen tijde beperkt tot het bedrag dat voor de betreffende
          opdracht in rekening is gebracht, tenzij sprake is van opzet of bewuste roekeloosheid.
        </p>
      </div>

      <div>
        <h2>13. Overmacht</h2>
        <p>
          In geval van overmacht kan de uitvoering van een opdracht worden opgeschort. Partijen
          overleggen in dat geval over een passende oplossing.
        </p>
      </div>

      <div>
        <h2>14. Beëindiging</h2>
        <p>
          Een overeenkomst kan door beide partijen worden beëindigd volgens de voorwaarden die
          bij de betreffende opdracht zijn overeengekomen.
        </p>
      </div>

      <div>
        <h2>15. Toepasselijk recht</h2>
        <p>Op deze voorwaarden is Nederlands recht van toepassing.</p>
      </div>

      <div>
        <h2>16. Klachten</h2>
        <p>
          Klachten over de uitvoering van een opdracht kunnen worden gemeld via{" "}
          <a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a>. Er wordt
          gestreefd naar een passende oplossing in onderling overleg.
        </p>
      </div>

      <div>
        <h2>17. Contact</h2>
        <p>
          Voor vragen over deze algemene voorwaarden kun je contact opnemen via{" "}
          <a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
