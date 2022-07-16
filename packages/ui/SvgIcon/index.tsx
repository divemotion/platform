import Image from "next/image";
import React from "react";
import tw from "twin.macro";

import { BgImg } from "../BgImg";

// import CalendarSvg from "./assets/calendar.svg";
// const CalendarSvg = require("./assets/calendar.svg");

export type IconType =
  | "calendar"
  | "waves"
  | "money"
  | "logo"
  | "logoText"
  | "burgerMenu"
  | "xClose"
  | "ChevronDown"
  | "check"
  | "phone"
  | "mail"
  | "search";

interface IconProps {
  icon: IconType;
  className?: string;
  mark?: boolean;
}

type IconsResourceProps = {
  [key in IconType]: any;
};

const icons: IconsResourceProps = {
  calendar: require("./assets/calendar.svg"),
  waves: require("./assets/waves.svg"),
  money: require("./assets/money.svg"),
  logo: require("./assets/logo.svg"),
  logoText: require("./assets/logo-text.svg"),
  burgerMenu: require("./assets/burger-menu.svg"),
  xClose: require("./assets/x-close.svg"),
  ChevronDown: require("./assets/chevron-down.svg"),
  search: require("./assets/search.svg"),
  check: require("./assets/check.svg"),
  phone: require("./assets/phone.svg"),
  mail: require("./assets/mail.svg"),
};

export const SvgIcon = ({
  icon,
  className = "w-3.5 h-3.5",
  mark,
}: IconProps) => {
  return <BgImg src={icons[icon]} mark={mark} className={className} />;
};
