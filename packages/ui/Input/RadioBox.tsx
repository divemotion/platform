import { Field, useField } from "formik";
import React from "react";
import tw from "twin.macro";

import { SvgIcon } from "../SvgIcon";

type RadioType = "checkbox" | "radio";

interface CheckBoxProps {
  type: RadioType;
  className?: string;
  label: string;
  name: string;
  disabled?: boolean;
  value: string | number | boolean;
}

export const RadioBox = ({
  className,
  type,
  name,
  disabled,
  label,
  value,
}: CheckBoxProps) => {
  const [field] = useField(name);

  const isCheck =
    type === "radio"
      ? field.value === value
      : (field.value.includes(value) as boolean);
  return (
    <label
      htmlFor={value.toString() + name}
      className="flex cursor-pointer items-center gap-3"
    >
      <Field
        id={value + name}
        type={type}
        name={name}
        checked={isCheck}
        className="hidden"
        disabled={disabled}
        value={value}
      />
      <div
        css={[
          tw`h-5 w-5 rounded-md border border-gray-4 flex items-center justify-center`,
          isCheck && tw`border-emerald-5 bg-emerald-1`,
        ]}
      >
        {isCheck && <SvgIcon icon="check" />}
      </div>
      <div>{label}</div>
    </label>
  );
};
