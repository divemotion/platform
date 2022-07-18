import React from "react";

interface Props {
  children?: JSX.Element | string;
  className?: string;
}

export const TabMenu = ({ children, className }: Props) => {
  return (
    <div className="flex-1 border-b border-gray-4 py-2.5 text-center">
      {children}
    </div>
  );
};
