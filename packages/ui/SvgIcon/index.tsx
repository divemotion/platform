import React from "react";

import { BgImg } from "../BgImg";

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
  | "share"
  | "filter"
  | "sort"
  | "equipment"
  | "correct"
  | "wrong"
  | "homeLine"
  | "shoppingTrolley"
  | "nitrox"
  | "heart"
  | "annotationInfo"
  | "xCircle"
  | "checkCircle"
  | "map"
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
  sort: require("./assets/sort.svg"),
  filter: require("./assets/filter.svg"),
  share: require("./assets/share.svg"),
  equipment: require("./assets/equipment.svg"),
  correct: require("./assets/correct.svg"),
  wrong: require("./assets/wrong.svg"),
  homeLine: require("./assets/home-line.svg"),
  shoppingTrolley: require("./assets/shopping-trolley.svg"),
  nitrox: require("./assets/nitrox.svg"),
  heart: require("./assets/heart.svg"),
  annotationInfo: require("./assets/annotation-info.svg"),
  xCircle: require("./assets/x-circle.svg"),
  checkCircle: require("./assets/check-circle.svg"),
  map: require("./assets/map.svg"),
};

export const SvgIcon = ({
  icon,
  className = "w-3.5 h-3.5",
  mark,
}: IconProps) => {
  return <BgImg src={icons[icon]} mark={mark} className={className} />;
};
