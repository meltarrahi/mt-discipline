import { ExternalLink } from "lucide-react";
import type { Source } from "@/types";

export function Sources({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;

  return (
    <section aria-labelledby="bronnen-titel" className="border-t border-border pt-8">
      <h2 id="bronnen-titel" className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
        Bronnen
      </h2>
      <ul className="mt-4 space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm text-primary hover:text-accent"
            >
              {source.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
