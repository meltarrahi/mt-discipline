import { BookOpen, Repeat, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const brandValues = [
  {
    title: "Kennis",
    description: "Financiële informatie toegankelijk en begrijpelijk maken.",
    icon: BookOpen,
  },
  {
    title: "Discipline",
    description: "Kennis consequent vertalen naar betere financiële gewoontes en keuzes.",
    icon: Repeat,
  },
  {
    title: "Vooruitgang",
    description: "Financiën en technologie gebruiken om duurzaam vooruit te komen.",
    icon: TrendingUp,
  },
];

export function AboutBrandSection() {
  return (
    <section id="over-mt-discipline" className="bg-surface py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <SectionHeading eyebrow="Over het platform" title="Over MT-Discipline" />

        <div>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              {siteConfig.brandName} is een kennis- en contentplatform dat complexe onderwerpen
              over belastingen, financiën, vermogensopbouw en AI begrijpelijk maakt. Het doel is
              om mensen te helpen beter geïnformeerde financiële keuzes te maken door kennis,
              inzicht en praktische toepassing met elkaar te verbinden.
            </p>
            <p>
              De content wordt ontwikkeld vanuit fiscale en financiële expertise, en vertaalt
              regels, cijfers en technologische ontwikkelingen naar begrijpelijke informatie.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {brandValues.map(({ title, description, icon: Icon }) => (
              <div key={title}>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <dt className="mt-3 font-semibold text-primary-strong">{title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm text-ink-muted">{siteConfig.scopeStatement}</p>
        </div>
      </Container>
    </section>
  );
}
