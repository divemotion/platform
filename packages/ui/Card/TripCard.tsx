import Image from "next/image";
import React from "react";

import { BgImg } from "../BgImg";

export const TripCard = () => {
  return (
    <div className="flex gap-3 rounded-lg border border-gray-4 overflow-hidden">
      <div className="w-[143px] bg-gray-5">
        <BgImg className="w-full h-full" src="https://picsum.photos/200/300" />
      </div>
      <div className="flex-1 py-2 pr-3">
        <p className="text-body4 font-bold text-gray-9">
          North Andaman - Koh Lipe (4-11D)
        </p>
        <p className="text-body7 text-gray-6 mt-2">
          The M/Y Aqua liveaboard in the Galapagos offers the choice of..
        </p>
        <div className="mt-3 flex flex-col gap-1">
          <p className="text-body7 text-gray-6">24 - 26 Jan 2021</p>
          <p className="text-body7 text-gray-6">Aqua Liveaboard</p>
          <p className="text-body7 text-gray-6">32,000 B</p>
        </div>
      </div>
    </div>
  );
};
