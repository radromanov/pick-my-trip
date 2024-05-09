import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const HeaderItem = ({ text, href }: Props) => {
  return (
    <button>
      <Link href={href} className="h-full group transition duration-300">
        <span>{text}</span>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
      </Link>
    </button>
  );
};

export default HeaderItem;
