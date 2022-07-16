import React from "react";
import tw from "twin.macro";
import { IconType, SvgIcon } from "ui";

interface Props {
  active?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  isScroll?: boolean;
  icon?: IconType;
}

export const Link = ({ active, children, isScroll, icon }: Props) => (
  <div
    css={[
      tw`text-body4 font-normal text-white flex gap-2`,
      active && tw`font-semibold`,
      isScroll && tw`text-gray-9`,
      isScroll && active && tw`text-emerald-5`,
    ]}
  >
    {icon && (
      <SvgIcon
        css={[
          tw`h-[22px] w-[22px]`,
          isScroll && tw`bg-gray-9`,
          !isScroll && tw`bg-white`,
          isScroll && active && tw`bg-emerald-5`,
        ]}
        mark
        icon={icon}
      />
    )}
    {children}
  </div>
);
