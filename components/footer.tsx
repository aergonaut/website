import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-prose grid gap-4 grid-cols-3 my-12">
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
  );
}
