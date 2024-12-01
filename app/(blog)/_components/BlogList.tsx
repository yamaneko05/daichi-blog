import { Blog } from "../_types/Blog";
import { BlogCard } from "./BlogCard";

export default async function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
