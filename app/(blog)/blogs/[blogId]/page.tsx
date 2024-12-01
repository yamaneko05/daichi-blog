import { Blog } from "@/app/(blog)/_types/Blog";
import { client } from "@/app/_libs/microcms/client";
import dayjs from "dayjs";
import { LucideMoveLeft } from "lucide-react";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;

  const blog = await client.get<Blog & MicroCMSContentId & MicroCMSDate>({
    endpoint: "blogs",
    contentId: blogId,
  });

  return (
    <>
      <Link
        href="/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <LucideMoveLeft size={14} />
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
        <div className="mt-16 text-slate-500">
          {dayjs(blog.publishedAt).format("YYYY年MM月DD日")}
        </div>
        <div className="text-4xl font-bold mt-3">{blog.title}</div>
        <div
          className="mt-12 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
}
