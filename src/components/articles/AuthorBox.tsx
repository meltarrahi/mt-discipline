import Image from "next/image";
import type { Author } from "@/types";

export function AuthorBox({ author }: { author: Author }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
      ) : null}
      <div>
        <p className="font-semibold text-primary-strong">{author.name}</p>
        <p className="text-sm text-ink-muted">{author.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{author.bio}</p>
      </div>
    </div>
  );
}
