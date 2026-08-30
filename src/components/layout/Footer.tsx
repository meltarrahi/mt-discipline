import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { categoryNavigation, legalNavigation, platformNavigation } from "@/config/navigation";
import { siteConfig, socialLinks } from "@/config/site";
import { currentYear } from "@/lib/utils";
import { InstagramIcon, LinkedInIcon, TikTokIcon, YouTubeIcon } from "@/components/icons/SocialIcons";

const socialIcons = {
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const;

export function Footer() {
  const activeSocialLinks = socialLinks.filter((link) => link.url);

  return (
    <footer className="border-t border-border bg-primary-strong text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <span className="text-xl font-bold tracking-tight text-white">
            MT<span className="text-accent">-</span>Discipline
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            {siteConfig.tagline}
            <br />
            {siteConfig.secondaryTagline}
          </p>

          {activeSocialLinks.length > 0 ? (
            <ul className="mt-6 flex items-center gap-4">
              {activeSocialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white/60 uppercase">
            Onderwerpen
          </h2>
          <ul className="mt-4 space-y-2.5">
            {categoryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-md text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white/60 uppercase">
            Platform
          </h2>
          <ul className="mt-4 space-y-2.5">
            {platformNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-md text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white/60 uppercase">
            Juridisch
          </h2>
          <ul className="mt-4 space-y-2.5">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-md text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-3 py-6 text-center text-xs text-white/60">
          <p>© {currentYear()} {siteConfig.brandName}. Alle rechten voorbehouden.</p>
        </Container>
      </div>
    </footer>
  );
}
