import React from "react";

const DividerWithText = ({ text }: { text: string }) => {
  return (
    <div className="w-full flex items-center">
      <div className="flex-grow border-t border-gray-400" />
      <span className="mx-4">{text}</span>
      <div className="flex-grow border-t border-gray-400" />
    </div>
  );
};

export default DividerWithText;
