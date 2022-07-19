import React from "react";

import { Boat } from "./Boat";
import { Description } from "./Description";
import { Highlight } from "./Highlight";
import { Pricing } from "./Pricing";
import { Rooms } from "./Room";
import { Schedule } from "./Schedule";
import { TabMenu } from "./TabMenu";
import { Term } from "./Term";

export const Detail = () => {
  return (
    <div className="bg-white p-4 md:mb-6 md:rounded-xl md:shadow-sm">
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
      <hr className="my-6 border-gray-3" />
      <div>
        <Schedule />
      </div>
      <hr className="my-6 border-gray-3" />
      <div>
        <Rooms />
      </div>
      <hr className="my-6 border-gray-3" />
      <div>
        <Boat />
      </div>
      <hr className="my-6 border-gray-3" />
      <div>
        <Term />
      </div>
    </div>
  );
};
