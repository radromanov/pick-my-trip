"use client";

import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

interface Props {
  icon: React.ReactNode;
  text: string;
  connection_id: string;
}

const OAuthLink = ({ icon, text, connection_id }: Props) => {
  return (
    <LoginLink
      postLoginRedirectURL="/"
      className="flex items-center justify-center gap-2"
      authUrlParams={{ connection_id }}
    >
      {icon}
      {text}
    </LoginLink>
  );
};

export default OAuthLink;
