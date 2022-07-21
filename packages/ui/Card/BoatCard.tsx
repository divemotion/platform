import React from "react";
import { Badge, BgImg, Button, SvgIcon } from "ui";

interface BoatCardProps {
  name: string;
  organizer: string;
  boatName: string;
  date: string;
}

export const BoatCard = ({
  name,
  boatName,
  date,
  organizer,
}: BoatCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white">
      <div className="relative flex-1 bg-gray-5">
        <BgImg
          className="h-[225px] w-full bg-cover bg-center"
          src="https://picsum.photos/500/500"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-body4 font-bold text-gray-9 line-clamp-2">{name}</p>
        <div className="flex gap-1">
          <p className="mt-1 text-body5 text-gray-6">hosted by</p>
          <p className="mt-1 text-body5 text-emerald-5">{organizer}</p>
        </div>
        <div className="mt-2 flex gap-2">
          <SvgIcon icon="calendar" mark className="h-5 w-5 bg-gray-7" />
          <p className="text-body5 text-gray-9">{date}</p>
        </div>
        <div className="mt-2 flex gap-2">
          <SvgIcon icon="boat" mark className="h-5 w-5 bg-gray-7" />
          <p className="text-body5 text-gray-9">{boatName}</p>
        </div>
      </div>
    </div>
  );
};
