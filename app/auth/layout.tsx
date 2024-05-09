import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/home");
  }

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
