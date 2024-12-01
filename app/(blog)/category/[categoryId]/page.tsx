import { client } from "@/app/_libs/microcms/client";
import BlogList from "../../_components/BlogList";
import { Blog } from "../../_types/Blog";
import { Category } from "../../_types/Category";
import Link from "next/link";
import { LucideMoveLeft } from "lucide-react";
import { button } from "@/app/_variants/button";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const categoryId = (await params).categoryId;

  const { contents: blogs } = await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${categoryId}`,
    },
  });

  const category = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId: categoryId,
  });

  return (
    <>
      <div className="py-6 text-4xl font-bold">カテゴリー: {category.name}</div>
      <Link href="/" className={button({ theme: "blueGradient" })}>
        <LucideMoveLeft size={16} />
        記事一覧に戻る
      </Link>
      <div className="mt-4">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
