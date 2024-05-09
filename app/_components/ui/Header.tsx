"use client";

import { HEADER_HEIGHT } from "@/lib/constants";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import Link from "next/link";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";
import HeaderItem from "../HeaderItem";

interface Props {
  user: KindeUser | null;
}

const Header = ({ user }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header>
      <nav
        className="flex w-full justify-between items-center px-3 font-medium"
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="flex items-center h-full">
          <CustomLink text="PMT Logo" to="/" />
        </div>
        <ul className="flex h-full gap-4">
          <HeaderItem text="Home" href="/" />

          <HeaderItem text="About" href="/" />
          {user ? (
            <Image
              className="rounded-full cursor-pointer"
              width={36}
              height={36}
              src={user.picture || ""}
              alt="User profile picture"
            />
          ) : (
            <>
              <HeaderItem text="Sign in" href="/auth/sign-in" />
              <HeaderItem text="Sign up" href="/auth/sign-un" />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
