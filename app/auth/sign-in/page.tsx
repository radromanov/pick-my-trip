import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import DividerWithText from "@/app/_components/ui/DividerWithText";
import OAuthLink from "@/app/_components/OAuthLink";
import Button from "@/app/_components/ui/Button";

const SignInPage = () => {
  return (
    <>
      <form className="flex flex-col justify-center items-center gap-2">
        <label htmlFor="email">
          <input name="email" id="email" placeholder="john.doe@email.com" />
        </label>

        <Button text="Continue" variant="default" width={"full"} />
        <DividerWithText text="OR" />
      </form>

      <form className="flex flex-col w-full gap-2">
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
      </form>
    </>
  );
};

export default SignInPage;
