import BlogList from "./(blog)/_components/BlogList";
import { client } from "@/app/_libs/microcms/client";
import { Blog } from "./(blog)/_types/Blog";
import { Aside } from "./_components/Aside";
import { Category } from "./(blog)/_types/Category";
import { CategoryList } from "./_components/CategoryList";

export default async function Home() {
  const { contents: blogs } = await client.getList<Blog>({
    endpoint: "blogs",
  });
  const { contents: categories } = await client.getList<Category>({
    endpoint: "categories",
  });

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="py-6 text-4xl font-bold">Daichi Blog</div>
        <BlogList blogs={blogs} />
      </div>
      <Aside>
        <div className="text-xl font-bold">カテゴリー</div>
        <div className="mt-3">
          <CategoryList categories={categories} />
        </div>
      </Aside>
    </div>
  );
}
