import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CollaborationCard } from "@/components/sections/CollaborationCard";
import { collaborationTypes } from "@/data/collaborations";

export function CollaborationSection() {
  return (
    <section id="samenwerken" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Samenwerken"
          title="Samenwerken met MT-Discipline"
          description="MT-Discipline staat open voor inhoudelijke samenwerkingen die bijdragen aan financiële geletterdheid, ondernemerschap en het verantwoord inzetten van AI."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {collaborationTypes.map((collaboration) => (
            <CollaborationCard key={collaboration.slug} collaboration={collaboration} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/contact">Bespreek een samenwerking</Button>
        </div>
      </Container>
    </section>
  );
}
