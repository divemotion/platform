import React from "react";
import tw from "twin.macro";
import { BoatCard } from "ui";

export const DetailConfirmStep = () => {
  return (
    <>
      <div className="mt-5 mb-5 rounded-xl bg-white p-4">
        <div className="rounded-xl border border-gray-4 p-4">
          <BoatCard
            name="อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ"
            organizer="Dive Eat Sleep Thailand"
            date="21-23 ตุลาคม 65  (5 วัน/4 คืน, 11 ไดฟ์)"
            boatName="MV Koon 9"
          />
          <hr className="my-2 mx-4 border-gray-3" />
          <div className="p-4">
            <p className="text-body4 font-semibold text-gray-9">
              รายละเอียดผู้ติดต่อ
            </p>
            <div className="mt-4 text-body5 text-gray-9">
              <div className="flex">
                <p className="flex-1">ชื่อ-นามสกุล</p>
                <p>นาย อิทธิภาสน์ รุ่งศรีรัตนโชติ</p>
              </div>
              <div className="flex">
                <p className="flex-1">เบอร์โทร</p>
                <p>0970060592</p>
              </div>
              <div className="flex">
                <p className="flex-1">อีเมล</p>
                <p>kungfu@divemotion.com</p>
              </div>
              <div className="flex">
                <p className="flex-1">หมายเหตุเพิ่มเติม</p>
                <p>เช่าอุปกรณ์ ทั้งหมด พร้อมเรียนดำน้ำ (Open water)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
