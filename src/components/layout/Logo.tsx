import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

/**
 * Voorlopig typografisch woordmerk. Vervang later eenvoudig door een SVG-beeldmerk
 * door dit component te vervangen door een <Image src="/images/logo.svg" ... />.
 */
export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("focus-ring group flex flex-col leading-none", className)}
    >
      <span className="text-xl font-bold tracking-tight text-primary-strong sm:text-2xl">
        MT<span className="text-accent">-</span>Discipline
      </span>
      {showTagline ? (
        <span className="mt-1 text-xs font-medium text-ink-muted">
          Meer grip op je financiën
        </span>
      ) : null}
    </Link>
  );
}
