import React from "react";

type Props = {
  type: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
};

export const Button = ({ type, className, children }: Props) => {
  return (
    <button className={`btn ${className}`} type={type}>
      {children}
    </button>
  );
};

