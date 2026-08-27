import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AboutBrandSection } from "@/components/sections/AboutBrandSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Over MT-Discipline",
  description:
    "Maak kennis met MT-Discipline en oprichter Mohamed el Tarrahi: het kennisplatform over belastingen, geld, ondernemen en administratie.",
  alternates: { canonical: "/over-mt-discipline" },
};

export default function OverMtDisciplinePage() {
  return (
    <>
      <section className="bg-primary-strong py-16 text-white sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-white/15 shadow-xl shadow-black/20 lg:mx-0">
            <Image
              src="/images/portrait-placeholder.svg"
              alt="Portretplaceholder van Mohamed el Tarrahi"
              width={480}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Over MT-Discipline
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {siteConfig.brandName}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Financiële vooruitgang begint niet alleen bij inkomen, maar bij kennis, overzicht,
              planning en consistente keuzes.
            </p>
          </div>
        </Container>
      </section>

      <AboutBrandSection />

      <section className="py-20 sm:py-24" aria-labelledby="oprichter-titel">
        <Container className="max-w-3xl">
          <p id="oprichter-titel" className="text-sm font-semibold tracking-wide text-accent uppercase">
            De oprichter
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary-strong sm:text-4xl">
            {siteConfig.founderName}
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              {siteConfig.founderName} is de oprichter en contentmaker achter{" "}
              {siteConfig.brandName}. Hij werkt in loondienst als fiscalist bij Habermehl en
              houdt zich vanuit die functie bezig met fiscale vraagstukken.
            </p>
            <p>
              Via {siteConfig.brandName} deelt hij op persoonlijke titel algemene educatieve
              content over belastingen, geld, ondernemen en administratie. Zijn doel is om
              financiële kennis toegankelijk te maken voor iedereen die betere keuzes wil maken.
            </p>
            <p>
              Hij gelooft dat financiële vooruitgang begint met begrip en discipline. Daarom
              vertaalt hij complexe regels, cijfers en ontwikkelingen naar duidelijke en
              praktisch toepasbare informatie — via artikelen, video&apos;s en workshops.
            </p>
            <p>
              Zijn fiscale werkzaamheden verricht Mohamed uitsluitend vanuit zijn functie bij
              Habermehl. Via {siteConfig.brandName} biedt hij geen persoonlijke fiscale,
              boekhoudkundige of administratieve diensten aan. {siteConfig.personalTitleStatement}
            </p>
          </div>
        </Container>
      </section>

      <CollaborationSection />
      <ProcessSection />
      <TrustSection />
      <SocialSection />
      <FAQSection />
    </>
  );
}
