# MT-Discipline

Kennis- en contentplatform van Mohamed el Tarrahi over belastingen, financiën, vermogensopbouw en AI. Gebouwd met Next.js (App Router), TypeScript en Tailwind CSS v4.

## Lokaal starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Productiebuild:

```bash
npm run build
npm run start
```

Lint en typecheck:

```bash
npm run lint
npx tsc --noEmit
```

## Projectstructuur

- `src/config/site.ts` — centrale merkgegevens: merknaam, positionering, tagline, e-mailadres, statements over de werkgever/afbakening.
- `src/config/navigation.ts` — hoofd-, footer- en juridische navigatie.
- `src/data/` — kennispijlers, voorbeeldartikelen, samenwerkingsvormen, FAQ, vertrouwensprincipes. Pas hier content aan zonder componenten te hoeven wijzigen.
- `src/components/layout/` — Header, MobileMenu-logica (in Header.tsx), Footer, Logo.
- `src/components/sections/` — alle homepage-secties.
- `src/components/forms/` — NewsletterForm en ContactForm (front-end validatie, nog geen backend-integratie).
- `src/components/legal/LegalLayout.tsx` — gedeelde layout voor privacy/disclaimer/algemene voorwaarden.
- `src/app/` — pagina's, `sitemap.ts`, `robots.ts`, `icon.tsx` (favicon) en `opengraph-image.tsx`.

## Nog te vervangen placeholders

| Wat | Waar | Opmerking |
|---|---|---|
| Zakelijk e-mailadres | `src/config/site.ts` → `businessEmail` | Nu `info@mt-discipline.nl` |
| Definitieve website-URL | `src/config/site.ts` → `websiteUrl` | Wordt gebruikt voor metadata, sitemap en canonical URLs |
| Portretfoto | `public/images/portrait-placeholder.svg` | Zie hieronder |
| Logo | `src/components/layout/Logo.tsx` | Nu een typografisch woordmerk |
| Favicon/OG-afbeelding | `src/app/icon.tsx`, `src/app/opengraph-image.tsx` | Nu automatisch gegenereerd in merkkleuren |
| Socialmedia-links | `src/config/site.ts` → `socialLinks` | Leeg `url` = link wordt niet getoond |
| Nieuwsbriefprovider | `src/components/forms/NewsletterForm.tsx` | Zie "Nieuwsbrief koppelen" |
| Contactformulierintegratie | `src/components/forms/ContactForm.tsx` | Zie "Contactformulier koppelen" |
| Juridische bedrijfsgegevens, bewaartermijnen | `src/app/privacy/page.tsx` | Gemarkeerd met een placeholder-notitie |
| Tarieven en definitieve voorwaarden | `src/app/algemene-voorwaarden/page.tsx` | Placeholderversie, laat juridisch controleren |
| Gratis download (checklist) | `src/components/sections/NewsletterSection.tsx` | Toont nu "Binnenkort beschikbaar" |
| Artikelen | `src/data/articles.ts` | Status staat op `"soon"` tot er echte artikelpagina's zijn |

### Portretfoto vervangen

1. Plaats de foto in `public/images/`, bijvoorbeeld `portrait.jpg` (aanbevolen beeldverhouding 4:5, zoals de huidige placeholder 480×600).
2. Vervang de `src="/images/portrait-placeholder.svg"` verwijzingen in `src/components/sections/Hero.tsx`, `src/components/sections/AboutFounderSection.tsx` en `src/app/over-mohamed/page.tsx`.

### Nieuwsbrief koppelen

In `src/components/forms/NewsletterForm.tsx` staat een `// TODO` in `handleSubmit`. Koppel daar een provider (bijvoorbeeld MailerLite, Brevo of Kit) of een eigen API-route. Bewaar API-keys in environment variables (`.env.local`, nooit committen) en roep de provider server-side aan (bijvoorbeeld via een Next.js Route Handler) zodat de key niet in de browser terechtkomt.

### Contactformulier koppelen

In `src/components/forms/ContactForm.tsx` staat een vergelijkbare `// TODO`. Koppel Resend, Formspree of een eigen API-route. Voeg server-side rate limiting en een spamfilter (bijvoorbeeld een honeypot-veld of hCaptcha) toe voordat het formulier publiek live gaat.

## Deployment (Vercel)

1. Push het project naar een Git-repository.
2. Importeer de repository in Vercel.
3. Stel environment variables in zodra er integraties zijn (nieuwsbrief, contactformulier).
4. Controleer de productiebuild (`npm run build`) lokaal voordat je deployt.
5. Koppel het definitieve domein en werk `websiteUrl` in `src/config/site.ts` bij.
6. Test de formulieren, metadata (`/`), sitemap (`/sitemap.xml`) en robots (`/robots.txt`) op de live omgeving.
7. Controleer de mobiele weergave en de juridische pagina's.

## Aanbevolen vervolgstappen

1. Eigen portretfoto toevoegen.
2. Socialmedia-links toevoegen.
3. Zakelijk e-mailadres en definitief domein instellen.
4. Nieuwsbriefprovider en contactformulier koppelen.
5. De eerste drie echte artikelen publiceren (en `status: "published"` zetten in `src/data/articles.ts`, plus artikelpagina's toevoegen onder `/kennis/[slug]`).
6. Privacyverklaring en algemene voorwaarden juridisch laten controleren.
7. Werkgeversbeleid van Habermehl rond externe publicaties laten checken.
8. Privacyvriendelijke analytics toevoegen indien gewenst.
9. Later een CMS of MDX-kennisbank koppelen voor de artikelen.
