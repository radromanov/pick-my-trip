import Link from "next/link";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-3xl">
        <Link href={"/"}>Pick-My-Trip</Link>
      </h1>

      {children}
    </>
  );
};

export default AuthLayout;
