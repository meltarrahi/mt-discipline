import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocHeading } from "@/types";

function TocList({ headings }: { headings: TocHeading[] }) {
  return (
    <ul className="space-y-2.5 text-sm">
      {headings.map((heading) => (
        <li key={heading.slug} className={cn(heading.depth === 3 && "pl-4")}>
          <a
            href={`#${heading.slug}`}
            className="focus-ring block rounded-md text-ink-muted hover:text-primary"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length === 0) return null;

  return (
    <>
      <details className="not-prose mb-8 rounded-2xl border border-border bg-surface p-4 lg:hidden">
        <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-primary-strong marker:content-none">
          Inhoudsopgave
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="mt-4">
          <TocList headings={headings} />
        </div>
      </details>

      <nav
        aria-label="Inhoudsopgave"
        className="not-prose sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border bg-surface p-5 lg:block"
      >
        <p className="text-sm font-semibold tracking-wide text-primary-strong uppercase">
          Inhoudsopgave
        </p>
        <div className="mt-4">
          <TocList headings={headings} />
        </div>
      </nav>
    </>
  );
}
