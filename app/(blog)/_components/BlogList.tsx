import { client } from "@/app/_libs/microcms/client";
import { Blog } from "../_types/Blog";
import { BlogCard } from "./BlogCard";

export default async function BlogList() {
  const { contents: blogs } = await client.getList<Blog>({
    endpoint: "blogs",
  });

  return (
    <div className="grid grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
