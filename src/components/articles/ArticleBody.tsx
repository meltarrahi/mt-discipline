import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { MDXComponents } from "mdx/types";
import { slugifyHeading } from "@/lib/toc";
import { ArticleCallout } from "@/components/articles/ArticleCallout";

function getPlainText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getPlainText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return getPlainText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function Heading({
  level,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { level: 2 | 3 | 4 }) {
  const Tag = `h${level}` as "h2" | "h3" | "h4";
  const id = level === 4 ? undefined : slugifyHeading(getPlainText(props.children));
  return <Tag id={id} {...props} />;
}

function BodyLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = props.href?.startsWith("http");
  return (
    <a {...props} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} />
  );
}

const components: MDXComponents = {
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  a: BodyLink,
  table: (props) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  Callout: ArticleCallout,
};

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="article-content max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
