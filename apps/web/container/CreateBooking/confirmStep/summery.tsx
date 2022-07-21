import React from "react";
import { Button, SvgIcon } from "ui";

export const SummeryRoomStep = () => {
  return (
    <>
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <p className="mb-4 text-body4 font-semibold text-gray-9">
          สรุปการชำระเงิน
        </p>
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

        <div className="mt-4 flex flex-col gap-1">
          <div className="flex">
            <p className="col-span-3 flex-1 text-body5 text-gray-9">รวม</p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 2,800 / คน</p>
          </div>
          <div className="flex">
            <p className="col-span-3 flex-1 text-body5 text-gray-9">ส่วนลด</p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 2,000 / คน</p>
          </div>
          <div className="flex">
            <p className="col-span-3 flex-1 text-body5 text-gray-9">
              ภาษีมูลค่าเพิ่ม
            </p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 0</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between text-body4 font-semibold">
          <p className="text-gray-9">ราคารวม</p>
          <p className="text-emerald-5">฿ 2,8000</p>
        </div>
        <p className="mt-4 text-body7 text-gray-7">
          หมายเหตุ:
          ท่านยังไม่ต้องชำระเงินในขั้นตอนนี้จนกว่าจะมีเจ้าหน้าที่ยืนยันอีกครั้ง
        </p>
      </div>
      <div className="mt-4 mb-4 flex gap-4">
        <Button className="flex-1" border="rounded" color="secondary" size="lg">
          <p className="text-body4">ย้อนกลับ</p>
        </Button>
        <Button className="flex-1" border="rounded" color="primary" size="lg">
          <div className="flex items-center justify-center gap-2">
            <p className="text-body4">จองทริปดำน้ำ</p>
          </div>
        </Button>
      </div>
    </>
  );
};
