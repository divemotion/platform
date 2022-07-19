import React from "react";
import { SvgIcon } from "ui";

export const Pricing = () => {
  return (
    <div className="flex divide-x divide-gray-3">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <SvgIcon
            icon="checkCircle"
            mark
            className="h-5 w-5 bg-green-4 bg-contain bg-center"
          />
          <p>ราคารวม</p>
        </div>
        <div className="mt-2 text-body5 text-gray-9">
          <ul className="grid list-inside list-disc diveScreen:grid-cols-2">
            <li>ค่าดำน้ำ</li>
            <li>อาหารและเรื่องดื่ม</li>
            <li>รถรับส่งสนามบิน</li>
            <li>ประกันดำน้ำ</li>
            <li>เสื้อยืดสุดเก๋</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 pl-4">
        <div className="flex items-center gap-2">
          <SvgIcon
            icon="checkCircle"
            mark
            className="h-5 w-5 bg-red-4 bg-contain bg-center"
          />
          <p>ราคาไม่รวม</p>
        </div>
        <div className="mt-2 text-body5 text-gray-9">
          <ul className="grid list-inside list-disc diveScreen:grid-cols-2">
            <li>ค่าตั๋วเครื่องบิน</li>
            <li>ค่าเครื่องดื่มแอลกอฮอล์</li>
            <li>ค่าเช่าอุปกรณ์</li>
            <li>ค่าเข้าอุทยาน</li>
            <li>ค่าทิปไดฟ์หลีด</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
