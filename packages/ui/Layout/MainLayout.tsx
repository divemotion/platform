import React from "react";

interface PageProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: PageProps) => {
  return (
    <div className="bg-gray-1">
      <div className="text-body4 text-gray-9 font-bold py-3.5 text-center border-b border-gray-2  italic px-[18px] mb-4">
        Divemotion
      </div>
      <div className="container mx-auto px-[18px]">
        <div>{children}</div>
      </div>
    </div>
  );
};
