import React from "react";
import { Badge, BgImg, Button, SvgIcon } from "ui";

interface TripCardProps {
  name: string;
  description: string;
  price: string;
  facility: string[];
}

export const RoomCard = ({
  name,
  price,
  description,
  facility,
}: TripCardProps) => {
  return (
    <div className="flex overflow-hidden rounded-lg border border-gray-4">
      <div className="relative h-[225px] flex-1 bg-gray-5">
        <BgImg
          className="h-full w-full bg-cover bg-center"
          src="https://picsum.photos/500/500"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-body4 font-bold text-gray-9 line-clamp-2">{name}</p>
        <p className="mt-1 text-body6 text-gray-9">{description}</p>

        <div className="mt-2 grid flex-1 grid-cols-2">
          {facility.map((item) => (
            <div className="flex gap-2 text-body6 text-gray-6" key={item}>
              <SvgIcon
                icon="correct"
                mark
                className="h-[18px] w-[18px] bg-emerald-5"
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="mb-2 flex items-center gap-2">
          <p className="text-body-4 flex-1 font-semibold">ราคา</p>
          <p className="text-body4 font-semibold text-emerald-5">
            ฿ {price} / ต่อคน
          </p>
        </div>
        <Button color="primary" border="rounded" size="lg">
          จองเลย
        </Button>
      </div>
    </div>
  );
};
