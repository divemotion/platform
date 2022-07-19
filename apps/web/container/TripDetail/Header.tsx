import React from "react";
import { SvgIcon } from "ui";

export const Header = () => {
  return (
    <div className="container mx-auto mt-8 flex max-w-screen-diveScreen items-center gap-2 p-4 diveScreen:p-0">
      <div className="flex-1">
        <p className="text-body1 font-semibold line-clamp-2">
          อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ
        </p>
        <div className="flex gap-1 text-body4">
          <p className="text-gray-6">จัดโดย</p>
          <p className="text-emerald-5">Dive Eat Sleep Thailand</p>
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-4 bg-white px-4 py-2.5">
        <p className="text-body5 text-gray-8">แชร์</p>
        <SvgIcon mark className="h-4 w-4 bg-gray-10" icon="share" />
      </div>
    </div>
  );
};
