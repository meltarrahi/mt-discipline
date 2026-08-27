import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/collaborations";

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="werkwijze-titel">
      <Container>
        <SectionHeading title="Van idee naar praktische samenwerking" />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.step} className="relative pl-14">
              <span className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold text-primary-strong">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm text-ink-muted">
          De exacte aanpak is afhankelijk van het onderwerp, de doelgroep en de vorm van de
          samenwerking.
        </p>
      </Container>
    </section>
  );
}
