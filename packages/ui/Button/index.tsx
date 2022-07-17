import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonStyleProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  color?:
    | "default"
    | "primary"
    | "information"
    | "warning"
    | "danger"
    | "success";
  variant?: "outline" | "solid";
  disabled?: boolean;
  border?: "rounded" | "default";
  fullWidth?: boolean;
  className?: string;
}

interface ButtonProps extends ButtonStyleProps {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonWrapper = styled.button<ButtonStyleProps>(
  ({ color, variant, border, size, disabled, fullWidth }) => [
    // default style
    tw`text-white hover:shadow-md cursor-pointer`,
    // fullWidth options
    fullWidth && tw`w-full`,
    // default style
    color === "default" &&
      disabled === false &&
      variant === "solid" &&
      tw`bg-gray-9 hover:bg-gray-10`,
    color === "default" &&
      disabled === false &&
      variant === "outline" &&
      tw`border border-gray-9 text-gray-9`,
    color === "default" &&
      disabled === true &&
      variant === "solid" &&
      tw`bg-gray-2 text-gray-4 cursor-auto`,
    color === "default" &&
      disabled === true &&
      variant === "outline" &&
      tw`border border-gray-5 text-gray-5 cursor-auto`,
    // color style solid disabled

    color === "primary" &&
      disabled === false &&
      variant === "solid" &&
      tw`bg-emerald-5 hover:bg-emerald-6`,
    color === "primary" &&
      disabled === false &&
      variant === "outline" &&
      tw`border border-emerald-4 text-emerald-4`,
    color === "primary" &&
      disabled === true &&
      variant === "solid" &&
      tw`bg-emerald-2 text-white cursor-auto`,
    color === "primary" &&
      disabled === true &&
      variant === "outline" &&
      tw`border border-emerald-3 bg-emerald-1 text-emerald-3 cursor-auto`,
    // variant style

    // border style
    border === "default" && tw`rounded-lg`,
    border === "rounded" && tw`rounded-full`,
    // size style
    size === "sm" && tw`px-5 py-[5px] text-body3`,
    size === "md" && tw`px-[22px] py-2 text-body3`,
    size === "lg" && tw`px-6 py-2 text-body2`,
    size === "xl" && tw`px-[26px] py-2.5 text-body1`,
    size === "xxl" && tw`px-7 py-[13px] text-body1`,
  ]
);

export const Button = ({
  children,
  size = "sm",
  color = "default",
  variant = "solid",
  border = "default",
  disabled = false,
  fullWidth = false,
  className,
  onClick,
}: ButtonProps) => (
  <ButtonWrapper
    onClick={onClick}
    className={className}
    size={size}
    color={color}
    variant={variant}
    border={border}
    disabled={disabled}
    fullWidth={fullWidth}
  >
    {children}
  </ButtonWrapper>
);
