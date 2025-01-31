import { LucideGithub } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Mainvisual() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src="/mainvisual.webp"
          alt="mainvisual"
          height={460}
          width={460}
          className="h-52 w-full rounded"
        />
      </div>
      <div className="mt-4 text-lg font-bold">Okumura Daichi</div>
      <div className="mt-1 leading-relaxed">
        2007年生まれの17歳です。高校一年生の途中で高校を中退してから1年半ほど業務でシステム開発をしながら個人開発をしています。
        現在の職場を12月末に退職することになりましたので、現在は求職中です。
        名古屋、東京で仕事を探しています。
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="https://github.com/yamaneko05"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded bg-gray-800 py-1 text-lg font-bold text-white"
        >
          <LucideGithub />
          GitHub
        </Link>
        <Link
          href="https://qiita.com/daichi2007"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded bg-green-500 py-1 text-lg font-bold text-white"
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
          className="flex items-center justify-center gap-2 rounded bg-sky-500 py-1 text-lg font-bold text-white"
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
