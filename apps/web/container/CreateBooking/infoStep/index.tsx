import React from "react";
import { BoatCard } from "ui";

import { Step } from "../Step";
import { DetailInfoStep } from "./detail";
import { SummeryRoomStep } from "./summery";

export const InfoStep = () => {
  return (
    <div className="container mx-auto max-w-screen-diveScreen gap-6 md:mt-14 md:grid md:grid-cols-5  md:px-4 lg:grid-cols-3 diveScreen:px-0">
      <div className="md:col-span-3 lg:col-span-2">
        <Step step={2} />
        <div>
          <DetailInfoStep />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <BoatCard
          name="อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ"
          organizer="Dive Eat Sleep Thailand"
          date="21-23 ตุลาคม 65  (5 วัน/4 คืน, 11 ไดฟ์)"
          boatName="MV Koon 9"
        />
        <SummeryRoomStep />
      </div>
    </div>
  );
};
