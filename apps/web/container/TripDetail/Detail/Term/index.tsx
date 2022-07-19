import React from "react";
import { BgImg, SvgIcon } from "ui";

export const Term = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <SvgIcon
          icon="map"
          mark
          className="h-5 w-5 bg-emerald-5 bg-contain bg-center"
        />
        <p className="text-body3 font-semibold text-emerald-5">
          เงื่อนไขและวิธีการจอง
        </p>
      </div>
      <div className="mt-6">
        <p className="text-body4 font-semibold text-gray-9">เงื่อนไข</p>
        <ul className="mt-1 list-outside list-disc space-y-2 pl-4 text-body5">
          <li>
            การจองจะถือว่าสมบูรณ์
            เมื่อทางบริษัทได้รับชำระเงินตามที่ระบุไว้ทั้งหมดจากท่านแล้ว
          </li>
          <li>
            บริษัทถือว่าผู้เข้าร่วมทุกท่านจะต้องมีใบอนุญาตการดำน้ำแล้วเท่านั้น
            ในกรณีที่ท่านไม่มีใบอนุญาตแล้วผู้จัดทริปไม่อนุญาตให้ดำน้ำท่านจะไม่สามารถขอคืนเงินได้ทุกประการ
          </li>
          <li>
            เมื่อท่านได้ทำการชำระเงินแล้วโปรดเก็บหลักฐานการชำระเงินไว้เป็นเอกสารสำคัญ
          </li>
          <li>
            เมื่อชำระเงินแล้ว ท่านไม่สามารถยกเลิกการจองและขอคืนเงินได้
            ทั้งนี้ทางบริษัทอาจพิจารณาเป็นรายกรณี
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <p className="text-body4 font-semibold text-gray-9">วิธีการจอง</p>
        <ul className="mt-1 list-outside list-decimal space-y-2 pl-4 text-body5">
          <li>รอการยืนยันและติดต่อกลับจากฝ่ายลูกค้าสัมพันธ์</li>
          <li>ใส่รายละเอียดผู้เข้าร่วมทริป</li>
          <li>ชำระค่าบริการ พร้อมส่งสลิปหลักฐานการโอนเงิน</li>
          <li>รับอีเมลยืนยันการจอง</li>
        </ul>
      </div>
      <div className="mt-6">
        <p className="text-body4 font-semibold text-gray-9">
          การมัดจำและชำระเงิน
        </p>
        <ul className="mt-1 list-outside list-disc space-y-2 pl-4 text-body5">
          <li>
            ท่านสามารถชำระค่าบริการโดยผ่าน QR PromptPay
            หรือโอนเงินเข้าธนาคารของบริษัทเท่านั้น
          </li>
          <li>
            ทางเรายังไม่รองรับการชำระเงินผ่านบัตรเครดิต และการชำระเงินมัดจำ
            หรือเป็นงวด ๆ
          </li>
        </ul>
      </div>
    </div>
  );
};
