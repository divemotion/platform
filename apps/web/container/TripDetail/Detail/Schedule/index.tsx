import React from "react";
import { SvgIcon } from "ui";

import { Day } from "./Day";

export const Schedule = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <SvgIcon
          icon="map"
          mark
          className="h-5 w-5 bg-emerald-5 bg-contain bg-center"
        />
        <p className="text-body3 font-semibold text-emerald-5">ตารางทริป</p>
      </div>
      <div className="mt-2 text-body5 text-gray-9">
        เส้นทาง: อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ • เครื่องบิน: สนามบินภูเก็ต
      </div>
      <Day schedule="schedule" />
      <Day />
      <Day />
    </div>
  );
};
