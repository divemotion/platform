import React from "react";

import { Highlight } from "./Highlight";
import { TabMenu } from "./TabMenu";

export const Detail = () => {
  return (
    <div className="rounded-xl bg-white p-4">
      <div id="trip-menu" className="flex">
        <TabMenu>ข้อมูลทริป</TabMenu>
        <TabMenu>ห้องพัก</TabMenu>
        <TabMenu>ข้อมูลเรือ</TabMenu>
        <TabMenu>เงื่อนไข/วิธีการจอง</TabMenu>
      </div>
      <div className="mt-6">
        <Highlight />
      </div>
    </div>
  );
};
