import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b bg-white bg-opacity-75 backdrop-blur">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between p-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/telescope.png"
            alt="telescope"
            height={80}
            width={80}
            className="size-8"
          />
          <div className="">Okumura Daichi ポートフォリオサイト</div>
        </Link>
      </div>
    </nav>
  );
}
