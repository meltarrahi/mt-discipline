import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Heb je een vraag, suggestie, zakelijke aanvraag of interesse in een samenwerking met MT-Discipline? Stuur gerust een bericht.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary-strong py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Contact</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Contact
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Heb je een vraag, suggestie, zakelijke aanvraag of interesse in een samenwerking?
            Stuur gerust een bericht.
          </p>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
