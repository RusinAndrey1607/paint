import React from "react";
import {Input} from "shared/ui/Input";
import {Label} from "shared/ui/Label";

type Props = {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const InputField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}: Props) => {
  return (
    <div className={`mb-4 ${className}`}>
      <Label text={label} htmlFor={id} />
      <Input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

