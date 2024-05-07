import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/lib/constants";
import React from "react";

const Home = () => {
  return (
    <main
      className="flex flex-col justify-center items-center"
      style={{ height: `calc(100% - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)` }}
    >
      <h1 className="text-5xl">
        Pick-My-<span className="text-violet-400">Trip</span>
      </h1>
    </main>
  );
};

export default Home;
