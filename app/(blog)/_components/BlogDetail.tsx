import Image from "next/image";
import { Blog } from "../_types/Blog";
import dayjs from "dayjs";
import { badge } from "@/app/_variants/badge";

export default function BlogDetail({ blog }: { blog: Blog }) {
  return (
    <>
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
        {blog.category && <span className={badge()}>{blog.category.name}</span>}
      </div>
      <div className="mt-4 text-4xl font-bold">{blog.title}</div>
      <div
        className="prose mt-12 max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </>
  );
}
