import { LucideGithub } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Mainvisual() {
  return (
    <>
      <Image
        src="/mainvisual.webp"
        alt="mainvisual"
        height={460}
        width={460}
        className="col-span-2 h-56 w-full rounded"
      />
      <div className="mt-4">
        <div className="text-xl font-bold">Okumura Daichi</div>
        <div className="mt-1 leading-loose">
          2007年生まれの17歳です。高校一年生の途中で高校を中退してから1年半ほど業務でシステム開発をしながら個人開発をしています。
          現在の職場を12月末に退職することになりましたので、現在は求職中です。
          名古屋、東京で仕事を探しています。
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Link
          href="https://github.com/yamaneko05"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded bg-gray-800 px-6 py-1 text-lg font-bold text-white sm:justify-start"
        >
          <LucideGithub />
          GitHub
        </Link>
        <Link
          href="https://qiita.com/daichi2007"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded bg-green-500 px-6 py-1 text-lg font-bold text-white sm:justify-start"
        >
          <Image
            src="/qiita-white-icon.png"
            alt="qiita"
            height={300}
            width={300}
            className="size-6"
          />
          Qiita
        </Link>
        <Link
          href="https://www.wantedly.com/id/daichi_okumura_d"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded bg-sky-500 px-6 py-1 text-lg font-bold text-white sm:justify-start"
        >
          <Image
            src="/Wantedly_Mark_Wht.png"
            alt="wontedly"
            height={300}
            width={300}
            className="size-6"
          />
          Wantedly
        </Link>
      </div>
    </>
  );
}
