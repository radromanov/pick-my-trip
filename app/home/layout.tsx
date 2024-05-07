import React from "react";
import Header from "../_components/ui/Header";
import Footer from "../_components/ui/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
