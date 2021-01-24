import Head from "next/head";
import Link from "next/link";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { getAllPosts, Post } from "../lib/util";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Head>
        <title>Hi! I'm Chris 👋</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="max-w-prose mx-auto px-3 sm:px-6 lg:px-8 py-6">
        <div className="">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-10 mt-6">
            <span className="inline">Hi! I'm</span>{" "}
            <span className="text-indigo-600 inline">Chris 👋</span>
          </h1>
        </div>

        <p className="prose prose-indigo text-justify">
          I&rsquo;m a web developer, tech lead, and mechanical keyboard
          enthusiast. I&rsquo;m passionate about building new things; unraveling
          the hidden complexity within difficult problems; and striking the
          right balance between simplicity, elegance, and value to users. I love
          learning, and understanding complex domains. I am currently a Senior
          Lead Digital Weaver at <a href="https://coupa.com">Coupa</a>.
        </p>

        <section className="my-10">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl">Writing</h2>
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => {
              return (
                <li className="px-4 py-4 sm:px-0">
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
      </main>
      <footer className="mx-auto max-w-prose grid gap-4 grid-cols-3">
        <div className="flex justify-center">
          <a
            href="https://twitter.com/aergonaut"
            title="Twitter"
            className="text-gray-500 hover:text-gray-900"
          >
            <Twitter />
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/aergonaut"
            title="GitHub"
            className="text-gray-500 hover:text-gray-900"
          >
            <GitHub />
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://linkedin.com/in/chrisfung"
            title="LinkedIn"
            className="text-gray-500 hover:text-gray-900"
          >
            <Linkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
