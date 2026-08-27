"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { getCategory } from "@/config/categories";
import type { SearchIndexEntry } from "@/lib/content";

export function SearchModal({ searchIndex }: { searchIndex: SearchIndexEntry[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function closeModal() {
    setIsOpen(false);
    setQuery("");
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isShortcut) {
        event.preventDefault();
        setIsOpen((open) => {
          if (open) setQuery("");
          return !open;
        });
        return;
      }
      if (event.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery.length === 0) return [];

    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(normalizedQuery) ||
          entry.excerpt.toLowerCase().includes(normalizedQuery) ||
          entry.tags.some((tag) => tag.includes(normalizedQuery)),
      )
      .slice(0, 8);
  }, [query, searchIndex]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Zoeken (Ctrl+K)"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface hover:text-primary"
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-24 sm:pt-32">
          <button
            type="button"
            aria-label="Sluit zoeken"
            onClick={closeModal}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <Search className="h-5 w-5 shrink-0 text-ink-muted" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Zoek een artikel..."
                aria-label="Zoek een artikel"
                className="focus-ring w-full text-base text-ink placeholder:text-ink-muted/60"
              />
              <button
                type="button"
                onClick={closeModal}
                aria-label="Sluit zoeken"
                className="focus-ring inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-surface"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {query.trim().length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-ink-muted">
                  Typ om te zoeken in alle artikelen.
                </p>
              ) : results.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-ink-muted">
                  Geen artikelen gevonden voor &ldquo;{query}&rdquo;.
                </p>
              ) : (
                <ul>
                  {results.map((result) => (
                    <li key={result.slug}>
                      <Link
                        href={`/artikelen/${result.slug}`}
                        onClick={closeModal}
                        className="focus-ring block rounded-xl px-3 py-3 hover:bg-surface"
                      >
                        <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                          {getCategory(result.category).name}
                        </p>
                        <p className="mt-1 font-medium text-primary-strong">{result.title}</p>
                        <p className="mt-0.5 line-clamp-1 text-sm text-ink-muted">{result.excerpt}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
