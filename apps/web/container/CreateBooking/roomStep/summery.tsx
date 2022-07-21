import React from "react";
import { Button, SvgIcon } from "ui";

export const SummeryRoomStep = () => {
  return (
    <>
      <div className="mt-6 hidden rounded-xl bg-white p-4 shadow-sm md:block">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-6 border-b border-gray-3 pb-4">
            <p className="col-span-3 text-body5 text-gray-9">
              ห้องนอนดีลักซ์ ไซท์คิง (King Bed)
            </p>
            <p className="col-span-1 text-body5 text-gray-9">x2</p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 14,000 / คน</p>
          </div>
          <div className="grid grid-cols-6 border-b border-gray-3 pb-4">
            <p className="col-span-3 text-body5 text-gray-9">
              ห้องนอนดีลักซ์ ไซท์คิง (King Bed)
            </p>
            <p className="col-span-1 text-body5 text-gray-9">x2</p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 14,000 / คน</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-body4 font-semibold">
          <p className="text-gray-9">ราคารวม</p>
          <p className="text-emerald-5">฿ 2,8000</p>
        </div>
      </div>
      <div>
        <div className="fixed bottom-0 left-0 mt-4 flex w-full gap-4 border-t border-gray-4 bg-white p-4 md:relative md:border-none md:bg-transparent md:p-0">
          <Button
            className="hidden md:block md:flex-1"
            border="rounded"
            color="secondary"
            size="lg"
          >
            <p className="text-body4">ย้อนกลับ</p>
          </Button>
          <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-4 md:hidden md:flex-1">
            <SvgIcon icon="chevronLeft" mark className="h-5 w-5 bg-gray-10" />
          </div>
          <Button className="flex-1" border="rounded" color="primary" size="lg">
            <div className="flex items-center justify-center gap-2">
              <p className="text-body4">ถัดไป</p>
              <SvgIcon
                icon="arrowNarrowRight"
                mark
                className="h-5 w-5 bg-white"
              />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};
