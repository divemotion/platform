import React from "react";
import { NumberInput, RoomCard, SvgIcon } from "ui";

export const DetailRoomStep = () => {
  return (
    <>
      <div className="mt-5 mb-5 rounded-xl bg-white p-4">
        <div className="flex items-center gap-2">
          <SvgIcon
            icon="map"
            mark
            className="h-5 w-5 bg-emerald-5 bg-contain bg-center"
          />
          <p className="text-body3 font-semibold text-emerald-5">
            รูปแบบห้องพักบนเรือ
          </p>
        </div>
        <div className="mt-6 space-y-8">
          <RoomCard
            name="ห้องนอนดีลักซ์ ไซท์คิง (King Bed)"
            description="ขนาด: 3.5 x 4 ตร.ม.  •  2 ที่นอน"
            price="28000"
            facility={[
              "ห้องน้ำส่วนตัว",
              "ผ้าเช็ดตัว",
              "เครื่องทำน้ำอุ่น",
              "แชมพูยาสระผม",
              "แอร์",
              "ที่เป่าผม",
            ]}
            showButton={false}
            customUi={
              <div className="flex">
                <NumberInput />
              </div>
            }
          />
          <RoomCard
            name="ห้องนอนดีลักซ์ ไซท์คิง (King Bed)"
            description="ขนาด: 3.5 x 4 ตร.ม.  •  2 ที่นอน"
            price="28000"
            facility={[
              "ห้องน้ำส่วนตัว",
              "ผ้าเช็ดตัว",
              "เครื่องทำน้ำอุ่น",
              "แชมพูยาสระผม",
              "แอร์",
              "ที่เป่าผม",
            ]}
            showButton={false}
            customUi={
              <div className="flex">
                <NumberInput />
              </div>
            }
          />
          <RoomCard
            name="ห้องนอนดีลักซ์ ไซท์คิง (King Bed)"
            description="ขนาด: 3.5 x 4 ตร.ม.  •  2 ที่นอน"
            price="28000"
            facility={[
              "ห้องน้ำส่วนตัว",
              "ผ้าเช็ดตัว",
              "เครื่องทำน้ำอุ่น",
              "แชมพูยาสระผม",
              "แอร์",
              "ที่เป่าผม",
            ]}
            showButton={false}
            customUi={
              <div className="flex">
                <NumberInput />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};
