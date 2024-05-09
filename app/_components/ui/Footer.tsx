import { FOOTER_HEIGHT } from "@/lib/constants";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex justify-center font-medium"
      style={{ height: FOOTER_HEIGHT }}
    >
      Picnic, Honey LTD &copy; 2024
    </footer>
  );
};

export default Footer;
