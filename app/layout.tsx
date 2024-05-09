import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/ui/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Footer from "./_components/ui/Footer";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pick-My-Trip",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={user} />

        <main
          className="flex flex-col justify-center items-center"
          style={{ height: `calc(100% - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)` }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
