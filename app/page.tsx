import BlogList from "./(blog)/_components/BlogList";
import { client } from "@/app/_libs/microcms/client";
import { Blog } from "./(blog)/_types/Blog";

export default async function Home() {
  const { contents: blogs } = await client.getList<Blog>({
    endpoint: "blogs",
  });

  return (
    <>
      <div className="py-6 text-4xl font-bold">Daichi Blog</div>
      <BlogList blogs={blogs} />
    </>
  );
}
