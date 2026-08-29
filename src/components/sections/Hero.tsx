import Link from "next/link";
import { ArrowRight, Banknote, Calculator, FileSpreadsheet, Landmark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const heroTopics = [
  { label: "Belastingen", icon: Landmark },
  { label: "Geld", icon: Banknote },
  { label: "Ondernemen", icon: Calculator },
  { label: "Administratie", icon: FileSpreadsheet },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-strong text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(184,134,47,0.35) 0%, rgba(184,134,47,0) 60%), radial-gradient(50% 50% at 0% 100%, rgba(18,54,43,0.6) 0%, rgba(18,54,43,0) 60%)",
        }}
      />
      <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            {siteConfig.brandName}
          </span>
          <p className="mt-5 text-sm font-semibold tracking-wide text-accent uppercase">
            Belastingen • Geld • Ondernemen • Administratie
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Meer grip op je financiën.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Praktische kennis over geld, belastingen, administratie en ondernemen — helder
            uitgelegd door {siteConfig.brandName}.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/artikelen" size="md">
              Lees de nieuwste artikelen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/#kennisgebieden" variant="secondary" size="md" className="border-white/30 text-white hover:border-white hover:bg-white/10">
              Ontdek de onderwerpen
            </Button>
          </div>

          <Link
            href="/over-mt-discipline#sociale-media"
            className="focus-ring mt-6 inline-block rounded-md text-sm font-medium text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            Volg {siteConfig.brandName}
          </Link>

          <p className="mt-10 text-sm text-white/60">
            Praktische uitleg. Zorgvuldige inzichten. Geen onnodige vaktaal.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
            <span className="text-lg font-bold tracking-tight text-white">
              MT<span className="text-accent">-</span>Discipline
            </span>
            <p className="mt-2 text-sm text-white/70">
              Praktische kennis, geordend per onderwerp.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {heroTopics.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <dt className="mt-3 text-sm font-semibold text-white">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
