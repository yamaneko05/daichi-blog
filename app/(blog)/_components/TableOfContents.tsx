import { Toc } from "@/app/_libs/renderToc";
import Link from "next/link";

export default function TableOfContents({ toc }: { toc: Toc[] }) {
  return (
    <>
      {toc.map((data) => (
        <Link key={data.id} href={`#${data.id}`} className="block py-1">
          {data.text}
        </Link>
      ))}
    </>
  );
}
