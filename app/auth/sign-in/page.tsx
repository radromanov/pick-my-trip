"use client";
import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import DividerWithText from "@/app/_components/ui/DividerWithText";
import OAuthLink from "@/app/_components/OAuthLink";
import Input from "@/app/_components/ui/Input";

const SignInPage = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-2">
        <Input
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <OAuthLink
          action="login"
          variant="default"
          text="Continue"
          connection_id={
            process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS!
          }
          login_hint={email}
        />
      </form>

      <DividerWithText text="OR" />

      <form className="flex flex-col w-full gap-2">
        <OAuthLink
          action="login"
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE!}
          icon={<FaGoogle />}
          text="Sign in with Google"
        />

        <OAuthLink
          action="login"
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GITHUB!}
          icon={<FaGithub />}
          text="Sign in with Github"
        />
      </form>
    </>
  );
};

export default SignInPage;
