import React from "react";

import { Boat } from "./Boat";
import { Description } from "./Description";
import { Highlight } from "./Highlight";
import { Pricing } from "./Pricing";
import { Rooms } from "./Room";
import { Schedule } from "./Schedule";
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
      <div className="mt-6">
        <Description />
      </div>
      <div className="mt-6">
        <Pricing />
      </div>
      <div className="mt-6">
        <Schedule />
      </div>
      <div className="mt-6">
        <Rooms />
      </div>
      <div className="mt-6">
        <Boat />
      </div>
    </div>
  );
};
