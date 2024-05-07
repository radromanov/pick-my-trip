import { HEADER_HEIGHT } from "@/lib/constants";
import React from "react";
import CustomLink from "./CustomLink";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav
        className="flex w-full justify-between items-center px-3"
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="flex items-center h-full">
          <CustomLink text="PMT Logo" to="/" />
        </div>
        <div className="flex items-center h-full gap-4">
          <CustomLink text="Home" to="/" />
          <CustomLink text="About" to="/" />
          <button>
            <Link href={"/auth/sign-in"}>Sign in</Link>
          </button>
          <button>
            <Link href={"/auth/sign-up"}>Create account</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
