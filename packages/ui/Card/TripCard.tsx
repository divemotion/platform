import React from "react";
import { Badge, BgImg, SvgIcon } from "ui";

interface TripCardProps {
  name: string;
  description: string;
  boat: string;
  price: string;
  available: boolean;
  date: string;
}

export const TripCard = ({
  name,
  boat,
  price,
  available,
  date,
}: TripCardProps) => {
  return (
    <div className="flex h-[370px] flex-col overflow-hidden rounded-lg border border-gray-4">
      <div className="relative h-[225px] bg-gray-5">
        <BgImg
          className="h-full w-full bg-cover bg-center"
          src="https://picsum.photos/500/500"
        />
        <div className="absolute top-0 left-2 rounded-b-lg bg-white p-1">
          <BgImg className="h-8 w-8" src="/images/mock/org1.png" />
        </div>
        {/* <div className="absolute right-2 top-2 flex">
          <Badge color="error">15% off</Badge>
        </div> */}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-body4 font-bold text-gray-9 line-clamp-2">{name}</p>

        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" />
            <p className="text-body7 text-gray-6">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="waves" />
            <p className="text-body7 text-gray-6">{boat}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-body-4 flex-1 font-semibold">ราคา</p>
          <p className="text-body4 font-semibold text-emerald-5">
            ฿ {price} / ต่อคน
          </p>
        </div>
      </div>
    </div>
  );
};
