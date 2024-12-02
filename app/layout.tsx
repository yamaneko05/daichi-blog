import type { Metadata } from "next";
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
