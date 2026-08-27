import type { TocHeading } from "@/types";

/**
 * Zet een heading-tekst om in een URL-vriendelijke slug, inclusief omzetting
 * van Nederlandse diakrieten (ë, ï, ó, ...) naar leesbare ASCII-tekens.
 */
export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Haalt alle H2/H3-headings uit ruwe MDX-tekst voor de inhoudsopgave.
 * Wordt vóór het renderen van de MDX uitgevoerd op de brontekst.
 */
export function extractHeadings(mdxContent: string): TocHeading[] {
  const headingPattern = /^(##|###)\s+(.+)$/gm;
  const headings: TocHeading[] = [];
  const seenSlugs = new Map<string, number>();

  let match: RegExpExecArray | null;
  while ((match = headingPattern.exec(mdxContent)) !== null) {
    const depth = match[1].length === 2 ? 2 : 3;
    const text = match[2].trim();
    let slug = slugifyHeading(text);

    const count = seenSlugs.get(slug) ?? 0;
    seenSlugs.set(slug, count + 1);
    if (count > 0) {
      slug = `${slug}-${count}`;
    }

    headings.push({ depth, text, slug });
  }

  return headings;
}
