import { Category } from "../(blog)/_types/Category";
import { client } from "../_libs/microcms/client";
import { CategoryList } from "./CategoryList";

export async function Aside() {
  const { contents: categories } = await client.getList<Category>({
    endpoint: "categories",
  });

  return (
    <div className="sticky top-0 h-screen w-64 border-l p-3">
      <div className="text-xl font-bold">カテゴリー</div>
      <div className="mt-3">
        <CategoryList categories={categories} />
      </div>
    </div>
  );
}
