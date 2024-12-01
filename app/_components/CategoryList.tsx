import Link from "next/link";
import { Category } from "../(blog)/_types/Category";

export function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div className="border-b">
      {categories.map((category) => (
        <Link href={`/category/${category.id}`}>
          <div className="border-t py-2">{category.name}</div>
        </Link>
      ))}
    </div>
  );
}
