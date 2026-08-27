import type { CollaborationType } from "@/types";

export function CollaborationCard({ collaboration }: { collaboration: CollaborationType }) {
  const Icon = collaboration.icon;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm shadow-black/[0.03]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-primary-strong">{collaboration.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{collaboration.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {collaboration.examples.map((example) => (
          <li
            key={example}
            className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-muted"
          >
            {example}
          </li>
        ))}
      </ul>
    </div>
  );
}
