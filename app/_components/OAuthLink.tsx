"use client";

import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Button from "./ui/Button";

interface Props {
  icon: React.ReactNode;
  text: string;
  connection_id: string;
}

const OAuthLink = ({ icon, text, connection_id }: Props) => {
  return (
    <Button variant="secondary" className="font-normal">
      <LoginLink
        postLoginRedirectURL="/"
        className="flex items-center justify-center gap-2"
        authUrlParams={{ connection_id }}
      >
        {icon}
        {text}
      </LoginLink>
    </Button>
  );
};

export default OAuthLink;
