"use client";

import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Button from "./ui/Button";

interface Props {
  icon?: React.ReactNode;
  text: string;
  connection_id: string;
  login_hint?: string;
}

const OAuthLink = ({ icon, text, connection_id, login_hint }: Props) => {
  return (
    <Button variant="default" width="full" height={32} className="font-medium">
      <LoginLink
        postLoginRedirectURL="/"
        className="flex items-center justify-center gap-2"
        authUrlParams={{ connection_id, login_hint: login_hint || "" }}
      >
        {icon}
        {text}
      </LoginLink>
    </Button>
  );
};

export default OAuthLink;
