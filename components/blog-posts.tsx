import Link from "next/link";
import { Post } from "../lib/util";

export default function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="my-10">
      <h2 className="font-bold text-lg sm:text-xl lg:text-2xl">Blog</h2>
      <ul className="divide-y divide-gray-200">
        {posts.map((post, i) => {
          return (
            <li key={i} className="px-4 py-4 sm:px-0">
              <Link href={`/posts/${post.slug}`}>
                <a
                  className="hover:text-indigo-600 hover:underline"
                  title={post.title}
                >
                  {post.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
