import React from "react";

import { FaGithub, FaGoogle } from "react-icons/fa";

import DividerWithText from "@/app/_components/ui/DividerWithText";
import OAuthLink from "@/app/_components/OAuthLink";

const SignInPage = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-2">
      <label htmlFor="email">
        <input name="email" id="email" placeholder="john.doe@email.com" />
      </label>

      <button className="bg-violet-500 w-full">Continue</button>

      <DividerWithText text="OR" />

      <div className="flex flex-col w-full gap-2">
        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE!}
          icon={<FaGoogle />}
          text="Google"
        />

        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GITHUB!}
          icon={<FaGithub />}
          text="Github"
        />
      </div>
    </form>
  );
};

export default SignInPage;
