import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { IconType, SvgIcon } from "../SvgIcon";

interface ButtonStyleProps {
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "information"
    | "error"
    | "success"
    | "warning";

  icon?: IconType;
}

interface ButtonProps extends ButtonStyleProps {
  children?: JSX.Element | JSX.Element[] | string;
}

const ButtonWrapper = styled.button<ButtonStyleProps>(
  ({ color, size, icon }) => [
    // default style
    tw`rounded-full`,
    //custom style
    size === "sm" && tw`px-2 py-0.5 text-body7`,
    size === "md" && tw`px-2.5 py-0.5 text-body5`,
    size === "lg" && tw`px-3 py-1 text-body5`,
    color === "default" && tw`bg-gray-2 text-gray-8`,
    color === "primary" && tw`bg-emerald-1 text-emerald-7`,
    color === "information" && tw`bg-blue-2 text-blue-5`,
    color === "error" && tw`bg-red-2 text-red-5`,
    color === "success" && tw`bg-green-2 text-green-5`,
    color === "warning" && tw`bg-yellow-2 text-yellow-4`,
  ]
);

export const Badge = ({
  children,
  size = "sm",
  color = "default",
  icon,
}: ButtonProps) => (
  <ButtonWrapper size={size} color={color} icon={icon}>
    {children}
  </ButtonWrapper>
);
