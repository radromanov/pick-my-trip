"use client";
import OAuthLink from "@/app/_components/OAuthLink";
import Button from "@/app/_components/ui/Button";
import DividerWithText from "@/app/_components/ui/DividerWithText";
import Input from "@/app/_components/ui/Input";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form className="flex flex-col justify-center items-center gap-2 w-[272px]">
      <Input
        label="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <Input
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <Input label="Email" value={formData.email} onChange={handleChange} />

      <Button variant="default" width="full">
        Continue
      </Button>

      <DividerWithText text="OR" />

      <div className="flex flex-col w-full gap-2">
        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE!}
          icon={<FaGoogle />}
          text="Sign up with Google"
        />
        <OAuthLink
          connection_id={process.env.NEXT_PUBLIC_KINDE_CONNECTION_GITHUB!}
          icon={<FaGithub />}
          text="Sign up with Github"
        />
      </div>
    </form>
  );
};

export default SignUpPage;
