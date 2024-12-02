import { load } from "cheerio";

export interface Toc {
  text: string;
  id: string;
}

export const renderToc = (body: string) => {
  const $ = load(body);
  const toc = $("h1, h2, h3")
    .toArray()
    .map((element) => ({
      text: $(element).text().substring(0, 155),
      id: $(element).attr("id")!,
    }));

  return toc;
};
