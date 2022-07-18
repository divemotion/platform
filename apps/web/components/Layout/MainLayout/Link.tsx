import React from "react";
import tw from "twin.macro";
import { IconType, SvgIcon } from "ui";

interface Props {
  active?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  isScroll?: boolean;
  icon?: IconType;
  transparent?: boolean;
}

export const Link = ({
  active,
  children,
  isScroll,
  icon,
  transparent = false,
}: Props) => (
  <div
    css={[
      tw`text-body4 font-normal flex gap-2`,
      transparent ? tw`text-white` : tw`text-gray-9`,
      active && tw`font-semibold`,
      isScroll && transparent && tw`text-gray-9`,
      isScroll && active && tw`text-emerald-5`,
      !transparent && active && tw`text-emerald-5`,
    ]}
  >
    {icon && (
      <SvgIcon
        css={[
          tw`h-[22px] w-[22px]`,
          transparent ? tw`bg-white` : tw`bg-gray-9`,
          isScroll && transparent && tw`bg-gray-9`,
          isScroll && active && tw`bg-emerald-5`,
          !transparent && active && tw`bg-emerald-5`,
        ]}
        mark
        icon={icon}
      />
    )}
    {children}
  </div>
);
