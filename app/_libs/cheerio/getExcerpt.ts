import { load } from "cheerio";

export const getExcerpt = (body: string) => {
  const $ = load(body);
  const elements = $("h1, h2, h3, p");
  const excerpt = elements.text();

  return excerpt;
};
