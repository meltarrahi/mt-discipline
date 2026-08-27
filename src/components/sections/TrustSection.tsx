import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustPrinciples } from "@/data/trust";

export function TrustSection() {
  return (
    <section className="bg-surface py-20 sm:py-24" aria-labelledby="vertrouwen-titel">
      <Container>
        <SectionHeading title="Waar je op kunt rekenen" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustPrinciples.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-strong">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
