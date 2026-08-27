import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks } from "@/config/site";
import { InstagramIcon, LinkedInIcon, TikTokIcon, YouTubeIcon } from "@/components/icons/SocialIcons";
import type { SocialPlatform } from "@/types";

const socialIcons: Record<SocialPlatform, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

export function SocialSection() {
  const activeSocialLinks = socialLinks.filter((link) => link.url);

  if (activeSocialLinks.length === 0) {
    return null;
  }

  return (
    <section id="sociale-media" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Sociale media"
          title="Volg de uitleg op jouw favoriete platform"
          description="Korte uitleg, praktische voorbeelden en actuele inzichten over belastingen, financiën, ondernemerschap en AI."
          className="mx-auto"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {activeSocialLinks.map((link) => {
            const Icon = socialIcons[link.platform];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
