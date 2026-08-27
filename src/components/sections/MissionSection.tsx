import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export function MissionSection() {
  return (
    <section id="missie" className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <SectionHeading
          eyebrow="Missie"
          title="Financiële kennis zou voor iedereen toegankelijk moeten zijn."
        />

        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Veel mensen nemen belangrijke financiële beslissingen zonder precies te begrijpen
            hoe belastingen, cashflow, vermogen of nieuwe technologieën werken. Dat is niet
            vreemd: financiële informatie wordt vaak onnodig ingewikkeld gemaakt.
          </p>
          <p>
            {siteConfig.brandName} wil daar verandering in brengen. Door fiscale, financiële en
            technologische onderwerpen helder uit te leggen, helpt het platform mensen om
            betere vragen te stellen, bewustere keuzes te maken en meer grip te krijgen op hun
            financiële toekomst.
          </p>
          <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg font-medium text-primary-strong italic">
            “Mijn doel is niet alleen om antwoorden te geven, maar om mensen te helpen begrijpen
            waarom een financieel antwoord klopt.”
            <footer className="mt-3 text-sm font-normal text-ink-muted not-italic">
              — {siteConfig.founderName}
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
