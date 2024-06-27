import React from "react";

type Props = {
  htmlFor: string;
  text: string;
};

export const Label = ({ text, htmlFor }: Props) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};

