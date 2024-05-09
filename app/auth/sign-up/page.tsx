import OAuthLink from "@/app/_components/OAuthLink";
import DividerWithText from "@/app/_components/ui/DividerWithText";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = async () => {
  return (
    <form className="flex flex-col justify-center items-center gap-2 w-[248px]">
      <label htmlFor="firstName">
        <input name="firstName" id="firstName" placeholder="John" />
      </label>

      <label htmlFor="lastName">
        <input name="lastName" id="lastName" placeholder="Doe" />
      </label>

      <label htmlFor="email">
        <input name="email" id="email" placeholder="john.doe@email.com" />
      </label>

      <button className="bg-black text-white font-medium w-full">
        Continue
      </button>

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

export default SignUpPage;
