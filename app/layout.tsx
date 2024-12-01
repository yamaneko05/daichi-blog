import type { Metadata } from "next";
import "./globals.css";
import { Aside } from "./_components/Aside";

export const metadata: Metadata = {
  title: "Daichi Blog",
  description: "Next15, microCMSによって作成されたブログサイトです",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans">
        <div className="mx-auto flex max-w-[64rem]">
          <div className="flex-1 p-3">{children}</div>
          <Aside />
        </div>
      </body>
    </html>
  );
}
