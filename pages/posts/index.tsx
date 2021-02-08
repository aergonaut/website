import Head from "next/head";
import BlogPosts from "../../components/blog-posts";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { getAllPosts, Post } from "../../lib/util";

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Nav />
      <main className="max-w-prose mx-auto py-6">
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
