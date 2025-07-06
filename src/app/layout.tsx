import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "../components/providers";

export const metadata: Metadata = {
  title: "MusicGPT",
  description: "MusicGPT",
  icons: {
    icon: "/musicgpt.png",
    shortcut: "/musicgpt.png",
    apple: "/musicgpt.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>
        <header
          id="top"
          className={`w-full fixed top-0 z-50 bg-greys-900 flex items-center justify-between px-6 py-4 backdrop-blur-md`}
        >
          <Link href="#top" className="flex items-center gap-3">
            <Image
              src="/musicgpt.png"
              alt="MusicGPT Logo"
              className="w-8 h-8 rounded shadow-md"
              width={32}
              height={32}
            />
            <span className="text-xl text-white tracking-tight font-medium select-none">
              MusicGPT
            </span>
          </Link>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
