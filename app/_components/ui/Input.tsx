import { capitalize } from "@/lib/helpers";
import React, { useState } from "react";

function generateInputId(words: string[]) {
  return words.map((word, i) => (i !== 0 ? capitalize(word) : word)).join("");
}

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

/**
 * @param label Either pass in 1 word or, if more than 1 word, make sure they are space delimited (e.g. "Confirm Password")
 */
const Input = ({ label, placeholder, value, onChange, ...props }: Props) => {
  const words = label.toLowerCase().split(" ");

  const text = words.map((word) => capitalize(word)).join(" ");
  const inputId = generateInputId(words);

  return (
    <label className="flex flex-col" htmlFor={inputId}>
      <span>{text}</span>
      <input
        onChange={onChange}
        onMouseEnter={(e) => {}}
        value={value}
        name={inputId}
        id={inputId}
        className={`rounded-md px-2 py-1 outline outline-blue-600 outline-offset-2 hover:bg-slate-100/50 focus:bg-slate-100/50`}
        {...props}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
