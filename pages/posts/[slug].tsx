import Head from "next/head";
import Link from "next/link";
import readingTime from "reading-time";
import markdownToHtml from "../../lib/markdownToHtml";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { getAllPosts, getPost } from "../../lib/util";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function Post({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@1.23.0/themes/prism-tomorrow.css"
        />
      </Head>
      <Nav />
      <div className="max-w-prose mx-auto py-6">
        <h1 className="my-6 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <div className="text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
          {post.readingTime}
        </div>
        <main
          className="mt-6 max-w-prose prose prose-indigo prose-lg mx-auto py-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="text-right mt-6">{`Posted on ${post.date}`}</div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  const content = await markdownToHtml(post.content);
  const stats = readingTime(content);

  return {
    props: {
      post: {
        ...post,
        content,
        readingTime: stats.text,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
