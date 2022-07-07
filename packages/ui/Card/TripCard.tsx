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
    <div className="flex gap-3 overflow-hidden rounded-lg border border-gray-4">
      <div className="h-[160px] w-[143px] bg-gray-5">
        <BgImg className="h-full w-full" src="https://picsum.photos/200/300" />
      </div>
      <div className="flex flex-1 flex-col justify-center py-2 pr-3">
        <div className="align-start">
          {available ? (
            <Badge color="success">ว่าง</Badge>
          ) : (
            <Badge color="error">เต็ม</Badge>
          )}
        </div>
        <p className="mt-1 text-body4 font-bold text-gray-9 line-clamp-2">
          {name}
        </p>

        <div className="mt-3 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" />
            <p className="text-body7 text-gray-6">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="waves" />
            <p className="text-body7 text-gray-6">{boat}</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="money" />
            <p className="text-body7 text-gray-6">{price} B</p>
          </div>
        </div>
      </div>
    </div>
  );
};
