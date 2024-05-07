import Link from "next/link";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
  link?: string;
  to: string;
  linkIsColored?: boolean;
}

const CustomLink = ({ text, link, to, linkIsColored, ...props }: Props) => {
  return (
    <p {...props}>
      {link && <span>{text}</span>}{" "}
      <Link href={to} className={linkIsColored ? "text-violet-400" : ""}>
        {link ? link : text}
      </Link>
    </p>
  );
};

export default CustomLink;
