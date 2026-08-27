import type { ReactNode } from "react";
import { AlertTriangle, BookOpen, CheckSquare, Info, Lightbulb, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalloutVariant =
  | "kort-uitgelegd"
  | "voorbeeld"
  | "let-op"
  | "praktische-tip"
  | "samengevat"
  | "definitie";

const variantMeta: Record<CalloutVariant, { label: string; icon: typeof Info }> = {
  "kort-uitgelegd": { label: "Kort uitgelegd", icon: Info },
  voorbeeld: { label: "Voorbeeld", icon: Lightbulb },
  "let-op": { label: "Let op", icon: AlertTriangle },
  "praktische-tip": { label: "Praktische tip", icon: CheckSquare },
  samengevat: { label: "Samengevat", icon: ListChecks },
  definitie: { label: "Definitie", icon: BookOpen },
};

function isCalloutVariant(value: string): value is CalloutVariant {
  return value in variantMeta;
}

export function ArticleCallout({
  variant,
  title,
  children,
}: {
  variant: string;
  title?: string;
  children: ReactNode;
}) {
  const meta = isCalloutVariant(variant) ? variantMeta[variant] : variantMeta["kort-uitgelegd"];
  const Icon = meta.icon;

  return (
    <div
      className={cn(
        "not-prose my-8 flex gap-4 rounded-2xl border border-border bg-surface p-5 sm:p-6",
        "border-l-4 border-l-accent",
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm font-semibold tracking-wide text-primary-strong uppercase">
          {title ?? meta.label}
        </p>
        <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </div>
    </div>
  );
}
