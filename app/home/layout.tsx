import React from "react";
import Header from "../_components/ui/Header";
import Footer from "../_components/ui/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.properties?.usr_city || !user.properties.usr_postcode) {
    // TODO ask user if they want to setup their profile information now
    return redirect("/setup");
  }

  return (
    <>
      <Header user={user} />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
