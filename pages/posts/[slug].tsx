import Head from "next/head";
import Link from "next/link";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPost } from "../../lib/util";

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
      <div className="max-w-prose mx-auto flex justify-between items-center mt-6">
        <div className="flex justify-start lg:w-0 lg:flex-1 space-x-5 items-center">
          <img src="/merlion.jpg" className="h-12 w-12 rounded-full block" />
          <div className="font-bold text-lg">
            <Link href="/">
              <a className="text-gray-900 hover:text-indigo-500 hover:underline">
                Chris Fung
              </a>
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900 hover:underline">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900 hover:underline">
              Blog
            </a>
          </Link>
        </nav>
      </div>
      <div className="max-w-prose mx-auto py-6">
        <h1 className="mt-6 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <main
          className="mt-6 max-w-prose prose prose-indigo prose-lg mx-auto py-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
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
