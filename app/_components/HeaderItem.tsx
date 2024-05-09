import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const HeaderItem = ({ text, href }: Props) => {
  return (
    <li className="relative h-full group transition duration-300">
      <Link href={href} className="flex text-center items-center h-full ">
        <span>{text}</span>
      </Link>
      <span className="flex -mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
    </li>
  );
};

export default HeaderItem;
