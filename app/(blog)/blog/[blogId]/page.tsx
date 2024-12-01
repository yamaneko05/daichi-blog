import { Blog } from "@/app/(blog)/_types/Blog";
import { client } from "@/app/_libs/microcms/client";
import { badge } from "@/app/_variants/badge";
import { button } from "@/app/_variants/button";
import dayjs from "dayjs";
import { LucideMoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;

  const blog = await client.get<Blog>({
    endpoint: "blogs",
    contentId: blogId,
  });

  return (
    <>
      <Link href="/" className={button({ theme: "blueGradient" })}>
        <LucideMoveLeft size={16} />
        記事一覧に戻る
      </Link>
      <div className="mt-4">
        <Image
          src={blog.eyecatch.url}
          width={blog.eyecatch.width}
          height={blog.eyecatch.height}
          alt="eyecatch"
          className="w-full"
        />
        <div className="mt-16 flex items-center gap-3">
          <div className="text-slate-500">
            {dayjs(blog.publishedAt).format("YYYY年MM月DD日")}
          </div>
          <span className={badge()}>{blog.category.name}</span>
        </div>
        <div className="mt-4 text-4xl font-bold">{blog.title}</div>
        <div
          className="prose mt-12 max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
}
