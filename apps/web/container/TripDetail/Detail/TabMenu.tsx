import React from "react";

interface Props {
  children?: JSX.Element | string;
  className?: string;
}

export const TabMenu = ({ children, className }: Props) => {
  return (
    <div className="box-border flex cursor-pointer justify-center whitespace-nowrap border-b-2 border-white  py-2.5 px-4 text-center hover:border-emerald-5 md:flex-1 md:px-0">
      {children}
    </div>
  );
};
