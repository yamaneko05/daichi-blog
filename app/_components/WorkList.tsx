import { LucideArrowUpLeftFromSquare } from "lucide-react";
import Image from "next/image";

interface Work {
  title: string;
  image?: {
    src: string;
    height: number;
    width: number;
  };
  description: string;
  stacks: string[];
  link: {
    title?: string;
    url: string;
  };
}

const works: Work[] = [
  {
    title: "Todo日記",
    image: {
      src: "/works/todo-nikki.png",
      height: 1800,
      width: 1800,
    },
    description:
      "普段から一般的なメモアプリを使って毎日のTODOリストや日記を管理していました。そこで、日付でグループ分けされるこの2つの情報をもっと効率的に管理できるサービスがほしいと思い、このサービスを開発するのに至りました。",
    stacks: ["Nextjs", "zustand", "prisma"],
    link: {
      title: "Qiita",
      url: "https://qiita.com/daichi2007/items/ef9859130a5e41cf8230",
    },
  },
  {
    title: "imageable",
    image: {
      src: "/works/imageable.png",
      height: 630,
      width: 1200,
    },
    description:
      "今回は初めてNext.jsを使ったWebサービスを公開しました。Next.jsのモダンな機能をたくさん使った実装になっていますので、それらの実装や開発した経験について紹介します。",
    stacks: ["Nextjs", "prisma", "supabase"],
    link: {
      title: "Qiita",
      url: "https://qiita.com/daichi2007/items/52373c8cd95943963f50",
    },
  },
  {
    title: "daichi blog (当サイト)",
    image: undefined,
    description: "Next15, microCMSによって作成されたブログサイトです",
    stacks: ["Nextjs", "microCMS"],
    link: {
      title: undefined,
      url: "https://daichi-blog.vercel.app/",
    },
  },
  {
    title: "あいフェス",
    image: {
      src: "/works/aifes.png",
      height: 2370,
      width: 1778,
    },
    description:
      "愛知県内の文化祭の開催情報をまとめるサイトを作りました。100校ほどの情報を掲載し、2万回以上のPVを獲得しました、Goggle Ads審査に合格し広告を掲載しましたが、収益化には至ることができませんでした。",
    stacks: ["WordPress"],
    link: {
      title: "Instagram",
      url: "https://www.instagram.com/aifes_2023/",
    },
  },
];

export default function WorkList() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12">
      {works.map((work, i) => (
        <div key={i}>
          {work.image ? (
            <Image
              src={work.image.src}
              alt={work.title}
              height={work.image.height}
              width={work.image.width}
              className="h-56 object-cover"
            />
          ) : (
            <div className="flex h-56 items-center justify-center bg-gray-100">
              No Image
            </div>
          )}
          <div className="mt-2 text-lg font-bold">{work.title}</div>
          <div className="mt-1 leading-relaxed">{work.description}</div>
          <div className="mt-2 flex gap-2">
            {work.stacks.map((stack, i) => (
              <div
                key={i}
                className="rounded bg-indigo-300 px-2 text-sm text-white"
              >
                {stack}
              </div>
            ))}
          </div>
          <a
            href={work.link.url}
            target="_blank"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded bg-gray-100 py-2 hover:outline"
          >
            <LucideArrowUpLeftFromSquare size={18} />
            {work.link.title ?? "関連リンク"}
          </a>
        </div>
      ))}
    </div>
  );
}
