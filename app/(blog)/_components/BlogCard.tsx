import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { button } from "@/app/_variants/button";
import { LucideExternalLink } from "lucide-react";
import { badge } from "@/app/_variants/badge";
import { Blog } from "../_types/Blog";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="overflow-hidden rounded shadow">
      <Image
        src={blog.eyecatch.url}
        width={blog.eyecatch.width}
        height={blog.eyecatch.height}
        alt="eyecatch"
        className="aspect-video w-full object-cover"
      />
      <div className="p-3">
        <div className="mt-3 flex items-center gap-3">
          <div className="text-slate-500">
            {dayjs(blog.publishedAt).format("YYYY年MM月DD日")}
          </div>
          {blog.category && (
            <Link href={`/category/${blog.category.id}`}>
              <span className={badge()}>{blog.category.name}</span>
            </Link>
          )}
        </div>
        <div className="mt-2 font-bold">{blog.title}</div>
        <div className="mt-4">
          <Link
            href={`/blog/${blog.id}`}
            type="button"
            className={button({ theme: "blueGradient" })}
          >
            <LucideExternalLink size={16} />
            詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
