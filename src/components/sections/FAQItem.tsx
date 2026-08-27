import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

export function FAQItem({ item }: { item: FaqItem }) {
  return (
    <details className="group border-b border-border py-5 first:pt-0 last:border-b-0">
      <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-left text-base font-medium text-primary-strong marker:content-none">
        {item.question}
        <ChevronDown
          className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{item.answer}</p>
    </details>
  );
}
