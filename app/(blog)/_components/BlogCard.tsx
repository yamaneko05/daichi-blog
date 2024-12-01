import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "../_types/Blog";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

export function BlogCard({
  blog,
}: {
  blog: Blog & MicroCMSContentId & MicroCMSDate;
}) {
  return (
    <div className="shadow rounded overflow-hidden">
      <Link href={`/blogs/${blog.id}`}>
        <Image
          src={blog.eyecatch.url}
          width={blog.eyecatch.width}
          height={blog.eyecatch.height}
          alt="eyecatch"
          className="w-full"
        />
        <div className="p-3">
          <div className="mt-3 text-slate-500">
            {dayjs(blog.publishedAt).format("YYYY年MM月DD日")}
          </div>
          <div className="mt-2 font-bold">{blog.title}</div>
          <div className="mt-2">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              詳細を見る
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
