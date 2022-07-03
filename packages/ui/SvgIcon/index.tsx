import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import tw from "twin.macro";

// import CalendarSvg from "./assets/calendar.svg";
// const CalendarSvg = require("./assets/calendar.svg");

type IconType = "calendar" | "waves" | "money";

interface IconProps {
  icon: IconType;
  className?: string;
}

type IconsResourceProps = {
  [key in IconType]: any;
};

const icons: IconsResourceProps = {
  calendar: require("./assets/calendar.svg"),
  waves: require("./assets/waves.svg"),
  money: require("./assets/money.svg"),
};

export const SvgIcon = ({ icon, className = "w-3.5 h-3.5" }: IconProps) => {
  return (
    <div className={className} css={[tw`relative`]}>
      <Image src={icons[icon]} alt="React Logo" layout="fill" />
    </div>
  );
};
