import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl">
        <Link href={"/home"}>Pick-My-Trip</Link>
      </h1>

      {children}
    </div>
  );
};

export default AuthLayout;
