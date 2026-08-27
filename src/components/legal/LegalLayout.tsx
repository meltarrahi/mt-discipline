import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  updatedOn?: string;
  children: ReactNode;
};

export function LegalLayout({ eyebrow, title, intro, updatedOn, children }: LegalLayoutProps) {
  return (
    <>
      <section className="bg-primary-strong py-14 text-white sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {intro ? <p className="mt-4 text-white/85">{intro}</p> : null}
          {updatedOn ? <p className="mt-4 text-sm text-white/60">Laatst gewijzigd: {updatedOn}</p> : null}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="legal-content space-y-8 text-base leading-relaxed text-ink-muted">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
