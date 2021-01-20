import Head from "next/head";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Home() {
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

        <div className="max-w-prose grid gap-4 grid-cols-3 my-10">
          <div className="flex justify-center">
            <a
              href="https://github.com/aergonaut"
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
              href="https://github.com/aergonaut"
              title="LinkedIn"
              className="text-gray-500 hover:text-gray-900"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
