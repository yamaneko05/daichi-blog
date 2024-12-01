import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Category } from "./Category";

export interface Blog extends MicroCMSContentId, MicroCMSDate {
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: Category;
}
