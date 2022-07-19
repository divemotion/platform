import React from "react";
import { BgImg, SvgIcon } from "ui";

export const Boat = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <SvgIcon
          icon="map"
          mark
          className="h-5 w-5 bg-emerald-5 bg-contain bg-center"
        />
        <p className="text-body3 font-semibold text-emerald-5">ข้อมูลเรือ</p>
      </div>
      <div className="mt-6 space-y-6">
        <BgImg
          src="/images/boat.jpg"
          className="rounded-xl bg-cover bg-center pt-[40%]"
        />
        <p className="text-body4 font-semibold text-gray-9">MV Koon 9</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" className="h-5 w-5" />
            <p className="text-body5 text-gray-6">สร้าง 2009</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="waves" className="h-5 w-5" />
            <p className="text-body5 text-gray-6">รองรับนักดำน้ำ 120 คน</p>
          </div>
        </div>
        <p className="mt-4 text-body5 text-gray-9">
          เรืคุณนายลำแรกเรือไม้จมปี 2553
          อยากต่อลำใหม่ใช้วิ่งต่างประเทศได้เลยใช้เรือเหล็กเริ่มต่อตามมาตรฐานเรืออินเตอร์ของปี
          2562 เรือลีฟอะบอร์ดที่ดีที่สุดพร้อมห้องน้ำในตัว จากุซซี่โต๊ะอาบแดด
          และแท่นยกไฮดรอลิก“ Tapana Catamaran พร้อมให้บริการสำหรับนักดำน้ำทุกคน
          ด้วยระบบความสุขและความปลอดภัย สิ่งอำนวยความสะดวกบนเรือ เช่น
          รถเก๋งพร้อมระบบเสียงของ Bose ห้องน้ำในตัวในห้องนอนทุกห้อง
          พื้นที่นันทนาการที่กว้างขวาง
          รวมถึงจากุซซี่บนดาดฟ้าของเรือ\nและแพลตฟอร์มลิฟต์ไฮดรอลิกอันเป็นเอกลักษณ์ของเราที่จะให้บริการคุณอย่างราบรื่นสู่ทะเลสีฟ้าใต้น้ำเพื่อให้ทุกคนลงน้ำโดยไม่ต้องใช้ความพยายามใด
          ๆ
        </p>
      </div>
      <div className="mt-6">
        <p className="text-body4 font-semibold text-gray-9">ความปลอดภัย</p>
        <div className="mt-2 grid grid-cols-4">
          {[
            "ยาสามัญ",
            "เสื้อชูชีพ",
            "เรือบก",
            "ถังออกซิเจน",
            "พลุขอความช่วยเหลือ",
          ].map((item) => (
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
      </div>
      <div className="mt-6">
        <p className="text-body5 font-semibold text-gray-9">
          สิ่งอำนวยความสะดวก
        </p>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {[
            "Wi-Fi ฟรี",
            "ห้องน้ำส่วนตัว",
            "เรือบก",
            "ถังออกซิเจน",
            "พลุขอความช่วยเหลือ",
            "Wi-Fi ฟรี",
            "ห้องน้ำส่วนตัว",
            "เรือบก",
            "ถังออกซิเจน",
            "พลุขอความช่วยเหลือ",
          ].map((item) => (
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
      </div>
    </div>
  );
};
