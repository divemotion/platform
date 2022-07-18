import React from "react";
import { IconType, SvgIcon } from "ui";

interface Props {
  available: boolean;
  title: string;
  icon: IconType;
}

export const HighlightItem = ({ available, icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <SvgIcon
        icon={icon}
        mark
        className="h-6 w-6 bg-gray-10 bg-contain bg-center"
      />
      <p>{title}</p>
      <div className="flex h-6 w-6 items-center justify-center">
        {available ? (
          <SvgIcon
            icon="correct"
            mark
            className="h-[13px] w-[18px] bg-green-4 bg-contain bg-center"
          />
        ) : (
          <SvgIcon
            icon="wrong"
            mark
            className="h-[14px] w-[14px] bg-red-4 bg-contain bg-center"
          />
        )}
      </div>
    </div>
  );
};
