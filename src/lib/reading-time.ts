const WORDS_PER_MINUTE = 180;

/**
 * Schat de leestijd van Nederlandse artikeltekst op basis van woordaantal.
 * MDX-syntax (headings, links, code) wordt eruit gefilterd zodat alleen
 * leesbare tekst wordt meegeteld.
 */
export function estimateReadingTime(mdxContent: string): string {
  const plainText = mdxContent
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_~-]/g, " ");

  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));

  return `${minutes} ${minutes === 1 ? "minuut" : "minuten"}`;
}
