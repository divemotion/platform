import React from "react";
import { SvgIcon } from "ui/SvgIcon";

import SideBar from "@/components/BurgerMenu";

interface PageProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: PageProps) => {
  return (
    <div className="flex flex-col bg-gray-1">
      <div className="fixed z-[1] flex  w-full border-b border-gray-3 bg-white text-body4 font-bold  italic text-gray-9 shadow-sm">
        <SideBar />
        <div className="flex-1 py-3.5 px-[18px]">
          <div className="flex items-center justify-center gap-2">
            <SvgIcon className="h-5 w-5" icon="logo" />
            <SvgIcon className="h-[23px] w-[91px]" icon="logoText" />
          </div>
        </div>
        <SvgIcon
          className="invisible my-3.5 mx-[18px] h-5 w-5"
          icon="burgerMenu"
        />
      </div>

      <div className="pt-[52px]">
        <div>{children}</div>
      </div>
    </div>
  );
};
