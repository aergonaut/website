import Head from "next/head";
import Link from "next/link";
import { GitHub, Linkedin, Twitter } from "react-feather";
import BlogPosts from "../components/blog-posts";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { getAllPosts, Post } from "../lib/util";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Head>
        <title>Hi! I'm Chris 👋</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Nav />
      <main className="max-w-prose mx-auto py-6">
        <div className="">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-10 mt-6">
            <span className="inline">Hi! I'm</span>{" "}
            <span className="text-indigo-600 inline">Chris 👋</span>
          </h1>
        </div>

        <div className="prose prose-indigo text-justify">
          <p>
            I&rsquo;m a web developer, tech lead, and mechanical keyboard
            enthusiast. I&rsquo;m passionate about building new things;
            unraveling the hidden complexity within difficult problems; and
            striking the right balance between simplicity, elegance, and value
            to users. I love learning, and understanding complex domains.
          </p>
          <p>
            I am currently a Senior Lead Digital Weaver at{" "}
            <a href="https://coupa.com">Coupa</a>.
          </p>
        </div>

        <BlogPosts posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
