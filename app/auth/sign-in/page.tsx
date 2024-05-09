"use client";
import React from "react";

import { FaGithub } from "react-icons/fa";

import DividerWithText from "@/app/_components/ui/DividerWithText";
import OAuthLink from "@/app/_components/OAuthLink";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-2">
        <label htmlFor="email">
          <input name="email" id="email" placeholder="john.doe@email.com" />
        </label>

        <button className="bg-violet-500 w-full">Continue</button>

        <DividerWithText text="OR" />
      </form>

      <div className="flex flex-col w-full gap-2">
        {/* <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE!}
          icon={<FaGoogle />}
          text="Google"
        /> */}

        <form
          action={async () => {
            const url =
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/api/auth"
                : "https://pickmytrip.vercel.app/api/auth";
            const response = await fetch(url);
            const data = await response.json();

            return router.push(data.url);
          }}
        >
          <button type="submit">Google</button>
        </form>
        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GITHUB!}
          icon={<FaGithub />}
          text="Github"
        />
      </div>
    </>
  );
};

export default SignInPage;
