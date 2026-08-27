import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CategoryConfig } from "@/types";

export function CategoryCard({ category }: { category: CategoryConfig }) {
  const Icon = category.icon;

  return (
    <Link
      href={`/${category.slug}`}
      className="focus-ring flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-md hover:shadow-black/[0.06]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-primary-strong">{category.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{category.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.topics.slice(0, 5).map((topic) => (
          <li key={topic} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
            {topic}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Bekijk {category.name.toLowerCase()}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
