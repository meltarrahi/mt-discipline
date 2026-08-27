import { FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection() {
  return (
    <section id="nieuwsbrief" className="bg-primary-strong py-20 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Nieuwsbrief</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ontvang begrijpelijke financiële inzichten in je inbox
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Schrijf je in voor praktische uitleg over belastingen, financiën, vermogensopbouw en
            AI. Geen dagelijkse verkooppraatjes, maar inhoud waarmee je beter geïnformeerde
            financiële keuzes kunt maken.
          </p>

          <div className="mt-8 max-w-xl rounded-2xl border border-white/15 bg-white/5 p-5">
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Gratis checklist: 10 financiële cijfers die iedere ondernemer moet begrijpen
                </p>
                <p className="mt-1 text-xs text-white/60">Binnenkort beschikbaar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}
