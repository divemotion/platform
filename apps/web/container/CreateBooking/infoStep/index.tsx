import React from "react";
import { BoatCard } from "ui";

import { Step } from "../Step";
import { SummerySection } from "../summery";
import { DetailInfoStep } from "./detail";

interface Props {
  step: number;
}

export const InfoStep = ({ step }: Props) => {
  return (
    <div className="container mx-auto mb-20 max-w-screen-diveScreen gap-6 md:mt-14 md:grid md:grid-cols-5  md:px-4 lg:grid-cols-3 diveScreen:px-0">
      <div className="md:col-span-3 lg:col-span-2">
        <Step step={2} />
        <div>
          <DetailInfoStep />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <SummerySection step={step} />
      </div>
    </div>
  );
};
