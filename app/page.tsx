import BlogList from "./(blog)/_components/BlogList";
import { client } from "@/app/_libs/microcms/client";
import { Blog } from "./(blog)/_types/Blog";
import { Category } from "./(blog)/_types/Category";
import { CategoryList } from "./_components/CategoryList";
import Mainvisual from "./_components/Mainvisual";
import WorkList from "./_components/WorkList";

export default async function Home() {
  const { contents: blogs } = await client.getList<Blog>({
    endpoint: "blogs",
  });
  const { contents: categories } = await client.getList<Category>({
    endpoint: "categories",
  });

  return (
    <div className="mx-auto max-w-screen-md">
      <div className="border-b pb-8">
        <Mainvisual />
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">趣味</div>
        <div className="mt-2 flex flex-col gap-2">
          <div>料理 ラーメン 寿司</div>
          <div>地図を見ること 旅行 電車 原付バイク</div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">経歴</div>
        <div className="mt-2 flex flex-col gap-2">
          <div>2022 4 ~ 11 : 愛知県立松蔭高等学校 入学 ~ 中途退学</div>
          <div>2022 12 ~ 2023 6 : 飲食、コンビニ、倉庫などでアルバイト</div>
          <div>2023 6 ~ 2024 12 : 株式会社Cans 入社 ~ 退職</div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">技術スタック</div>
        <div className="mt-2 flex flex-col gap-2">
          <div>TypeScript React Nextjs : 1年 個人開発で主に使用</div>
          <div>PHP Laravel : 2年 実務でのシステム開発</div>
          <div>WordPress : 2年 実務でのWeb制作、個人でのサイト制作で使用</div>
          <div>
            HTML/CSS/JS : 3年 趣味でのサイト制作から実務でのコーディング
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">資格</div>
        <div className="mt-2 flex flex-col gap-2">
          <div>2021 8 : ITパスポート</div>
          <div>2022 11 : 高校卒業程度認定試験</div>
          <div>2023 4 : 実用英語技能検定 2級</div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">制作物</div>
        <div className="mt-2">
          <WorkList />
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">記事</div>
        <div className="mt-2">
          <BlogList blogs={blogs} />
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-bold">記事カテゴリー</div>
        <div className="mt-2">
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  );
}
