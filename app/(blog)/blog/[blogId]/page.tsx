import { Blog } from "@/app/(blog)/_types/Blog";
import { client } from "@/app/_libs/microcms/client";
import { button } from "@/app/_variants/button";
import { LucideMoveLeft } from "lucide-react";
import Link from "next/link";
import { renderToc } from "@/app/_libs/renderToc";
import { Aside } from "../../../_components/Aside";
import BlogDetail from "../../_components/BlogDetail";
import TableOfContents from "../../_components/TableOfContents";

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

  const toc = renderToc(blog.content);

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <Link href="/" className={button({ theme: "blueGradient" })}>
          <LucideMoveLeft size={16} />
          記事一覧に戻る
        </Link>
        <div className="mt-4">
          <BlogDetail blog={blog} />
        </div>
      </div>
      <Aside>
        <div className="text-xl font-bold">目次</div>
        <div className="mt-3">
          <TableOfContents toc={toc} />
        </div>
      </Aside>
    </div>
  );
}
