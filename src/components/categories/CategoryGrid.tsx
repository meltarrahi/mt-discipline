import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { categories } from "@/config/categories";

export function CategoryGrid() {
  return (
    <section id="kennisgebieden" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Kennisgebieden"
          title="Waar wil je meer over weten?"
          description="Van belastingen en geld tot ondernemen en administratie: MT-Discipline brengt complexe onderwerpen terug tot heldere inzichten die je kunt toepassen."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
