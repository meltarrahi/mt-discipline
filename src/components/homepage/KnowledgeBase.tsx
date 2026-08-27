import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { glossaryEntries } from "@/data/glossary";

export function KnowledgeBase() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Basiskennis"
          title="Begin bij de basis"
          description="Korte, evergreen uitleg van financiële basisbegrippen — ideaal als je net begint."
        />

        <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {glossaryEntries.map((entry) => (
            <div key={entry.term}>
              <dt className="font-semibold text-primary-strong">
                {entry.articleSlug ? (
                  <Link href={`/artikelen/${entry.articleSlug}`} className="focus-ring rounded-md hover:text-accent">
                    {entry.term}
                  </Link>
                ) : (
                  entry.term
                )}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">{entry.definition}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
