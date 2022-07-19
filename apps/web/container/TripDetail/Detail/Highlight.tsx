import React from "react";

import { HighlightItem } from "./HighlightItem";

export const Highlight = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 rounded-xl border border-gray-4 p-4 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-5">
      <HighlightItem available={true} title="เช่าอุปกรณ์" icon="equipment" />
      <HighlightItem available={true} title="ห้องน้ำส่วนตัว" icon="homeLine" />
      <HighlightItem
        available={true}
        title="ห้องน้ำส่วนตัว"
        icon="shoppingTrolley"
      />
      <HighlightItem available={false} title="ห้องน้ำส่วนตัว" icon="nitrox" />
      <HighlightItem available={true} title="ห้องน้ำส่วนตัว" icon="heart" />
    </div>
  );
};
