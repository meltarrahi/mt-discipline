import type { Metadata } from "next";
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
    "Maak kennis met MT-Discipline: het kennisplatform over belastingen, geld, ondernemen en administratie.",
  alternates: { canonical: "/over-mt-discipline" },
};

export default function OverMtDisciplinePage() {
  return (
    <>
      <section className="bg-primary-strong py-16 text-white sm:py-20">
        <Container className="max-w-3xl">
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
        </Container>
      </section>

      <AboutBrandSection />

      <section className="py-20 sm:py-24" aria-labelledby="achtergrond-titel">
        <Container className="max-w-3xl">
          <p
            id="achtergrond-titel"
            className="text-sm font-semibold tracking-wide text-accent uppercase"
          >
            Achtergrond
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary-strong sm:text-4xl">
            Fiscale en financiële expertise, begrijpelijk gemaakt
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              {siteConfig.brandName} deelt algemene educatieve content over belastingen, geld,
              ondernemen en administratie. Het doel is om financiële kennis toegankelijk te
              maken voor iedereen die betere keuzes wil maken.
            </p>
            <p>
              Financiële vooruitgang begint met begrip en discipline. Daarom vertaalt{" "}
              {siteConfig.brandName} complexe regels, cijfers en ontwikkelingen naar duidelijke
              en praktisch toepasbare informatie — via artikelen, video's en workshops.
            </p>
            <p>
              De content wordt gemaakt door een fiscalist die dit platform op persoonlijke titel
              voert, naast een dienstverband in loondienst. Via {siteConfig.brandName} worden
              geen persoonlijke fiscale, boekhoudkundige of administratieve diensten aangeboden.
              De content vertegenwoordigt niet noodzakelijk de standpunten van de werkgever.
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
