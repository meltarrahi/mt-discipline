import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Neem contact op"
            description="Heb je een vraag, suggestie, zakelijke aanvraag of interesse in een samenwerking? Stuur gerust een bericht met een korte toelichting."
          />

          <a
            href={`mailto:${siteConfig.businessEmail}`}
            className="focus-ring mt-6 inline-flex items-center gap-2.5 rounded-md text-sm font-medium text-primary hover:text-accent"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.businessEmail}
          </a>

          <p className="mt-2 text-sm text-ink-muted">Regio: {siteConfig.region}</p>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm shadow-black/[0.03] sm:p-8">
          <ContactForm />

          <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-ink-muted">
            Let op: via {siteConfig.brandName} worden geen persoonlijke fiscale,
            boekhoudkundige of administratieve diensten aangeboden. {siteConfig.employerStatement}
          </p>
        </div>
      </Container>
    </section>
  );
}
