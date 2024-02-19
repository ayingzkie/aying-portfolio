import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";
import Header from "./components/Header";

// React slick csss
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John's Portfolio",
  description: "A Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="m-auto min-h-screen pb-4">{children}</main>
      </body>
    </html>
  );
}
