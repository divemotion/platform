import React from "react";
import { Input, SvgIcon, TextArea } from "ui";

export const DetailInfoStep = () => {
  return (
    <>
      <div className="mt-5 mb-5 rounded-xl bg-white p-4">
        <div className="flex items-center gap-2">
          <SvgIcon
            icon="userCircle"
            mark
            className="h-5 w-5 bg-emerald-5 bg-contain bg-center"
          />
          <p className="text-body3 font-semibold text-emerald-5">
            รายละเอียดผู้เข้าพัก
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div>
            <div className="mb-1.5 flex items-center gap-1 text-body5">
              <p className="text-gray-8">ชื่อ-นามสกุล</p>
              <p className="text-red-4">*</p>
            </div>
            <Input placeholder="ชื่อ-นามสกุล" />
          </div>
          <div>
            <div className="mb-1.5 flex items-center gap-1 text-body5">
              <p className="text-gray-8">โทรศัพท์</p>
              <p className="text-red-4">*</p>
            </div>
            <Input placeholder="โทรศัพท์" />
          </div>
          <div>
            <div className="mb-1.5 flex items-center gap-1 text-body5">
              <p className="text-gray-8">อีเมล</p>
              <p className="text-red-4">*</p>
            </div>
            <Input placeholder="อีเมล" />
          </div>
          <div>
            <div className="mb-1.5 flex items-center gap-1 text-body5">
              <p className="text-gray-8">หมายเหตุเพิ่มเติม</p>
            </div>
            <TextArea placeholder="หมายเหตุเพิ่มเติม" rows={4} />
          </div>
        </div>
      </div>
    </>
  );
};
