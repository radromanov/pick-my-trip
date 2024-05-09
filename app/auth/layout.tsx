"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl">
        <Link href={"/home"}>Pick-My-Trip</Link>
      </h1>

      {children}
    </main>
  );
};

export default AuthLayout;
