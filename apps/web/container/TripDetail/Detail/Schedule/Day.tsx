import React from "react";
import { SvgIcon } from "ui";

interface Props {
  schedule?: string;
}

export const Day = ({ schedule }: Props) => {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <p className="text-body4 font-semibold text-gray-9">
          วันที่ 1 (04 มิถุนายน 65)
        </p>
      </div>
      <div className="mt-1 text-body5 text-gray-9">
        เดินทางโดยเครื่องบินลงที่ สนามบินภูเก็ต ก่อน 20:00 น. รอที่ประตูทางออก
        A12
      </div>
      {schedule && (
        <div className="mt-4 rounded-xl border border-gray-4 p-4 text-body5 text-gray-9">
          20.30 - 21:30 รถตู้ไปรับที่สนามบินเดินทางมาท่าเรือ
          <br />
          20.30 - 21:30 ขึ้นดองกี้จากท่าเรือเพื่อมาขึ้นเรือ MV Koon 9
          <br />
          20.30 - 21:30 พี่ต้าและคุณครูกล่าวต้อนรับแนะนทีม และเรือ
        </div>
      )}
    </div>
  );
};
