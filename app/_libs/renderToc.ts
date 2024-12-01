import { load } from "cheerio";

export interface Toc {
  text: string;
  id: string;
}

export const renderToc = (body: string) => {
  const $ = load(body);
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    text: (data.children[0] as any).data,
    id: data.attribs.id,
  }));

  return toc;
};
