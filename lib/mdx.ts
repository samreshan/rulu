import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type Collection = "work" | "thesis" | "notes";

export type WorkFrontmatter = {
  title: string;
  slug: string;
  role: string[];
  timeline: string;
  summary: string;
  logline: string;
  context: string;
  strategy: string;
  reflection: string;
  impact?: { label: string; value: string }[];
  cover: string;
  gallery?: { src: string; caption?: string }[];
  quote?: { text: string; author?: string };
  tags: string[];
};

export type EssayFrontmatter = {
  title: string;
  slug: string;
  summary?: string;
};

export async function getCollectionSlugs(collection: Collection) {
  const dir = path.join(CONTENT_ROOT, collection);
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function readFile(collection: Collection, slug: string) {
  const filePath = path.join(CONTENT_ROOT, collection, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { data, content };
}

export async function getWorkEntries() {
  const files = await getCollectionSlugs("work");
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = readFile("work", slug);
      return data as WorkFrontmatter;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getWorkBySlug(slug: string) {
  const { data, content } = readFile("work", slug);
  const mdx = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
    components: mdxComponents,
  });

  return {
    frontmatter: data as WorkFrontmatter,
    content: mdx.content,
  };
}

export async function getEssays(collection: Exclude<Collection, "work">) {
  const files = await getCollectionSlugs(collection);
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = readFile(collection, slug);
      return data as EssayFrontmatter;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getEssayBySlug(collection: Exclude<Collection, "work">, slug: string) {
  const { data, content } = readFile(collection, slug);
  const mdx = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
    components: mdxComponents,
  });

  return {
    frontmatter: data as EssayFrontmatter,
    content: mdx.content,
  };
}
