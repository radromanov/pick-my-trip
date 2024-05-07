import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NAV_HEIGHT } from "@/lib/constants";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pick-My-Trip",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav
            className="flex w-full justify-between items-center px-3"
            style={{ height: NAV_HEIGHT }}
          >
            <div className="flex items-center h-full">
              <p>
                <Link href="/">PMT Logo</Link>
              </p>
            </div>
            <div className="flex items-center h-full gap-4">
              <p>
                <Link href="/">Home</Link>
              </p>
              <p>
                <Link href="/">About</Link>
              </p>
              <button>Sign in</button>
              <button>Create account</button>
            </div>
          </nav>
        </header>
        {children}
        <footer>Picnic, Honey LTD &copy;</footer>
      </body>
    </html>
  );
}
