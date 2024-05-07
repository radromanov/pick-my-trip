"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CustomLink from "../_components/ui/CustomLink";
import { setAuthMessage } from "@/lib/helpers";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { link, linkIsColored, text, to } = setAuthMessage(path)!;

  return (
    <main className="h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl">
        <Link href={"/home"}>Pick-My-Trip</Link>
      </h1>

      {children}

      <CustomLink
        text={text}
        link={link}
        to={to}
        linkIsColored={linkIsColored}
      />
    </main>
  );
};

export default AuthLayout;
