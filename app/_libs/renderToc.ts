import { load } from "cheerio";

export interface Toc {
  text: string;
  id: string;
}

export const renderToc = (body: string) => {
  const $ = load(body);
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data) => ({
    text: data.children[0].data,
    id: data.attribs.id,
  }));

  return toc;
};
