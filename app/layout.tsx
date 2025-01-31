import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const title = "Daichi Blog";
const description = "Next15, microCMSによって作成されたブログサイトです";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Navbar />
        <div className="mx-auto max-w-screen-lg p-3">{children}</div>
      </body>
    </html>
  );
}
