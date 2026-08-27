"use client";

import { useState } from "react";
import { Check, Link2, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/SocialIcons";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const mailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Klembord niet beschikbaar; geen actie nodig.
    }
  }

  return (
    <div className="flex items-center gap-2" aria-label="Deel dit artikel">
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Deel op LinkedIn"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
      >
        <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href={mailHref}
        aria-label="Deel via e-mail"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Kopieer link"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
      >
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
