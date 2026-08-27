"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SearchModal } from "@/components/search/SearchModal";
import { mainNavigation } from "@/config/navigation";
import type { SearchIndexEntry } from "@/lib/content";

export function Header({ searchIndex }: { searchIndex: SearchIndexEntry[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const firstLink = menuPanelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex items-center justify-between py-4">
        <Logo showFounder />

        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-md text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <SearchModal searchIndex={searchIndex} />
          <Button href="/#nieuwsbrief" size="sm">
            Nieuwsbrief
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <SearchModal searchIndex={searchIndex} />
          <button
            ref={menuButtonRef}
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-primary"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          ref={menuPanelRef}
          className="border-t border-border bg-paper lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            <nav aria-label="Mobiele navigatie">
              <ul className="flex flex-col gap-1">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="focus-ring block rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-surface hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              href="/#nieuwsbrief"
              className="mt-3 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Nieuwsbrief
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
