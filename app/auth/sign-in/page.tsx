"use client";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaGoogle } from "react-icons/fa";
import DividerWithText from "@/app/_components/ui/DividerWithText";
import OAuthLink from "@/app/_components/OAuthLink";

const SignInPage = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-2">
        <label htmlFor="email">
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </label>
        <OAuthLink
          text="Continue with Email"
          connection_id={
            process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS!
          }
          login_hint={email}
          icon={<FaEnvelope />}
        />
      </form>

      <DividerWithText text="OR" />

      <form className="flex flex-col w-full gap-2">
        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE!}
          icon={<FaGoogle />}
          text="Sign in with Google"
        />

        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GITHUB!}
          icon={<FaGithub />}
          text="Sign in with Github"
        />
      </form>
    </>
  );
};

export default SignInPage;
