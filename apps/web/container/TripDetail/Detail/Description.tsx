import React from "react";
import { SvgIcon } from "ui";

export const Description = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <SvgIcon
          icon="annotationInfo"
          mark
          className="h-[18px] w-[18px] bg-emerald-5 bg-contain bg-center"
        />
        <p className="text-body3 font-semibold text-emerald-5">
          รายละเอียดทริป
        </p>
      </div>
      <div className="mt-2 text-body5 text-gray-9">
        สิ่งอำนวยความสะดวกบนเรือ เช่น รถเก๋งพร้อมระบบเสียงของ Bose
        ห้องน้ำในตัวในห้องนอนทุกห้อง พื้นที่นันทนาการที่กว้างขวาง
        รวมถึงจากุซซี่บนดาดฟ้าของเรือ\nและแพลตฟอร์มลิฟต์ไฮดรอลิกอันเป็นเอกลักษณ์ของเราที่จะให้บริการคุณอย่างราบรื่นสู่ทะเลสีฟ้าใต้น้ำเพื่อให้ทุกคนลงน้ำโดยไม่ต้องใช้ความพยายามใด
        ๆ
      </div>
    </div>
  );
};
