import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

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
        <Navbar />
        <div className="mx-auto max-w-screen-lg p-3">
          <div className="p-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
