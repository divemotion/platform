import React from "react";
import { BoatCard } from "ui";

import { Step } from "../Step";
import { DetailConfirmStep } from "./detail";
import { SummeryRoomStep } from "./summery";

export const ConfirmStep = () => {
  return (
    <div className="container mx-auto max-w-screen-diveScreen gap-6 md:mt-14 md:grid md:grid-cols-5  md:px-4 lg:grid-cols-3 diveScreen:px-0">
      <div className="md:col-span-3 lg:col-span-2">
        <Step step={3} />
        <div>
          <DetailConfirmStep />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <SummeryRoomStep />
      </div>
    </div>
  );
};
