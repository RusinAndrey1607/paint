import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({
  onChange,
  className="",
  value = "",
  placeholder = "",
  type = "text",
  ...otherProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
      className={className + "input input-bordered w-full max-w-xs"}
      {...otherProps}
    />
  );
};

