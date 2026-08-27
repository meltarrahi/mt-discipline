import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Lees hoe MT-Discipline omgaat met persoonsgegevens die via de website worden verzameld.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Juridisch"
      title="Privacyverklaring"
      intro="Deze privacyverklaring legt uit welke gegevens MT-Discipline verwerkt, waarom, en welke rechten je hebt."
      updatedOn="5 augustus 2026"
    >
      <div className="rounded-2xl border border-accent/30 bg-accent-soft/30 p-5 text-sm text-primary-strong">
        <strong>Let op:</strong> deze privacyverklaring is een basisversie met placeholders voor
        ontbrekende formele bedrijfsgegevens. Laat deze tekst juridisch controleren voordat de
        website definitief live gaat.
      </div>

      <div>
        <h2>Wie is verantwoordelijk</h2>
        <p>
          {siteConfig.brandName} is een kennis- en contentplatform van {siteConfig.founderName}.
          Voor vragen over deze privacyverklaring of over de verwerking van persoonsgegevens kun
          je contact opnemen via{" "}
          <a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a>.
        </p>
      </div>

      <div>
        <h2>Welke gegevens worden verwerkt</h2>
        <p>Via de website kunnen de volgende gegevens worden verzameld:</p>
        <ul>
          <li>Voornaam en e-mailadres bij inschrijving voor de nieuwsbrief.</li>
          <li>
            Naam, e-mailadres, eventueel organisatie, onderwerp en bericht bij het invullen van
            het contactformulier.
          </li>
          <li>
            Technische en analytische gegevens, zoals paginabezoeken, indien er analytics wordt
            gebruikt (zie hieronder).
          </li>
        </ul>
      </div>

      <div>
        <h2>Doel van de verwerking</h2>
        <p>Persoonsgegevens worden uitsluitend gebruikt om:</p>
        <ul>
          <li>de nieuwsbrief te verzenden aan wie zich daarvoor heeft ingeschreven;</li>
          <li>te reageren op contactverzoeken en samenwerkingsvoorstellen;</li>
          <li>de website te analyseren en te verbeteren, indien analytics wordt gebruikt.</li>
        </ul>
      </div>

      <div>
        <h2>Rechtsgrond</h2>
        <p>
          De verwerking is gebaseerd op toestemming (bijvoorbeeld bij nieuwsbriefinschrijving) of
          op het gerechtvaardigd belang om te reageren op een contactverzoek dat je zelf hebt
          ingediend.
        </p>
      </div>

      <div>
        <h2>Nieuwsbrief</h2>
        <p>
          Voor het verzenden van de nieuwsbrief kan gebruik worden gemaakt van een externe
          nieuwsbriefprovider (bijvoorbeeld MailerLite, Brevo of Kit). Zodra een provider actief
          is gekoppeld, wordt dat hier vermeld inclusief een link naar het privacybeleid van die
          provider. Uitschrijven kan op ieder moment via de link onderaan iedere nieuwsbrief.
        </p>
      </div>

      <div>
        <h2>Contactformulier</h2>
        <p>
          Gegevens uit het contactformulier worden gebruikt om te reageren op je bericht en
          worden niet gebruikt voor andere doeleinden. Zodra een verzendintegratie (bijvoorbeeld
          Resend of Formspree) actief is gekoppeld, wordt dat hier aangevuld.
        </p>
      </div>

      <div>
        <h2>Cookies en analytics</h2>
        <p>
          Op dit moment maakt de website geen gebruik van trackingcookies. Indien in de toekomst
          privacyvriendelijke analytics wordt toegevoegd, wordt deze verklaring bijgewerkt met
          informatie over de gebruikte tool en de bewaartermijn van de gegevens.
        </p>
      </div>

      <div>
        <h2>Bewaartermijn</h2>
        <p>
          Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze
          zijn verzameld. <em>[Placeholder: definitieve bewaartermijnen per gegevenscategorie
          toevoegen.]</em>
        </p>
      </div>

      <div>
        <h2>Beveiliging</h2>
        <p>
          Er worden passende technische en organisatorische maatregelen genomen om
          persoonsgegevens te beschermen tegen verlies of onrechtmatig gebruik.
        </p>
      </div>

      <div>
        <h2>Jouw rechten</h2>
        <p>Je hebt het recht om:</p>
        <ul>
          <li>je gegevens in te zien, te corrigeren of te laten verwijderen;</li>
          <li>je toestemming voor de verwerking in te trekken;</li>
          <li>bezwaar te maken tegen de verwerking van je gegevens;</li>
          <li>een klacht in te dienen bij de Autoriteit Persoonsgegevens.</li>
        </ul>
        <p>
          Neem voor het uitoefenen van deze rechten contact op via{" "}
          <a href={`mailto:${siteConfig.businessEmail}`}>{siteConfig.businessEmail}</a>.
        </p>
      </div>

      <div>
        <h2>Wijzigingen</h2>
        <p>
          Deze privacyverklaring kan worden aangepast. De datum bovenaan deze pagina geeft aan
          wanneer de verklaring voor het laatst is gewijzigd.
        </p>
      </div>
    </LegalLayout>
  );
}
