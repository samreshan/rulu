import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-semibold tracking-tight" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold mt-12 mb-6" {...props} />,
  h3: (props) => <h3 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
  p: (props) => <p className="text-lg leading-relaxed text-night/80" {...props} />,
  ul: (props) => <ul className="list-disc space-y-3 pl-6 text-lg text-night/80" {...props} />,
  ol: (props) => <ol className="list-decimal space-y-3 pl-6 text-lg text-night/80" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-night/10 pl-6 italic text-night/70"
      {...props}
    />
  ),
  img: (props: any) => {
    const { alt, width, height, ...rest } = props;
    const numericWidth = typeof width === "string" ? parseInt(width, 10) : width;
    const numericHeight = typeof height === "string" ? parseInt(height, 10) : height;

    return (
      <Image
        className="rounded-xl border border-night/10 shadow-lg"
        alt={alt ?? ""}
        width={numericWidth ?? 1600}
        height={numericHeight ?? 900}
        {...rest}
      />
    );
  },
};
