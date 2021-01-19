import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto sm:px-6 lg:px-8 py-6">
        <div className="">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-10 mt-6">
            <span className="block xl:inline">Hi! I'm</span>{" "}
            <span className="block text-indigo-600 xl:inline">Chris 👋</span>
          </h1>
        </div>

        <p className="prose prose-indigo">
          I&rsquo;m a web developer, passionate about building new things;
          unraveling the hidden complexity within difficult problems; and
          striking the right balance between simplicity, elegance, and value to
          users. I love learning, and understanding complex domains. I am
          currently a Senior Lead Digital Weaver at Coupa.
        </p>
      </main>
    </div>
  );
}
