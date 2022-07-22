import React from "react";
import tw from "twin.macro";
import { SvgIcon } from "ui";

interface Props {
  light?: boolean;
}

export const FullLogo = ({ light = false }: Props) => {
  console.log("light", light);
  return (
    <div id="logo">
      <SvgIcon
        css={[
          tw`h-[32px] w-[134px] bg-emerald-5`,
          !light && tw`bg-emerald-5`,
          light && tw`bg-white`,
        ]}
        mark
        icon="fullLogo"
      />
    </div>
  );
};
