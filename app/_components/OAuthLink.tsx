"use client";

import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Button from "./ui/Button";

interface Props {
  icon?: React.ReactNode;
  text: string;
  connection_id: string;
  login_hint?: string;
  variant?: "default" | "secondary" | "warning";
  action: "login" | "register";
}

const OAuthLink = ({
  variant = "secondary",
  action,
  icon,
  text,
  connection_id,
  login_hint,
}: Props) => {
  return (
    <Button variant={variant} width="full" className="font-medium">
      {action === "login" ? (
        <LoginLink
          postLoginRedirectURL="/"
          className="flex items-center justify-center gap-2"
          authUrlParams={{ connection_id, login_hint: login_hint || "" }}
        >
          {icon} {text}
        </LoginLink>
      ) : (
        <RegisterLink
          className="flex items-center justify-center gap-2"
          authUrlParams={{ connection_id }}
        >
          {icon} {text}
        </RegisterLink>
      )}
    </Button>
  );
};

export default OAuthLink;
