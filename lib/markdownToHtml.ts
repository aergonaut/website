import remark from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import prism from "remark-prism";
import external from "remark-external-links";

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await remark()
    .use(gfm)
    .use(prism)
    .use(external)
    .use(html)
    .process(markdown);
  return result.toString();
}
