import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daichi Blog",
  description: "Next15, microCMSによって作成されたブログサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans">
        <main className="max-w-[50rem] mx-auto px-3">{children}</main>
      </body>
    </html>
  );
}
