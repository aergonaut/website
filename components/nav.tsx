import Link from "next/link";

export default function Nav() {
  return (
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
            About
          </a>
        </Link>
        <Link href="/posts">
          <a className="text-base font-medium text-gray-500 hover:text-gray-900 hover:underline">
            Blog
          </a>
        </Link>
      </nav>
    </div>
  );
}
