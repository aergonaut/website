import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_DIR);
}

export type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
};

export function getPost(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIR, `${realSlug}.md`);
  const fullContents = fs.readFileSync(fullPath);
  const { data, content } = matter(fullContents);

  const { title, date } = data;

  let post: Post = {
    title,
    date,
    content,
    slug: realSlug,
  };

  return post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPost(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
