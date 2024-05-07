import { FOOTER_HEIGHT } from "@/lib/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center" style={{ height: FOOTER_HEIGHT }}>
      Picnic, Honey LTD &copy;
    </footer>
  );
};

export default Footer;
