import React from "react";
import { Button, SvgIcon } from "ui";

export const CTA = () => {
  return (
    <div className="mb-4 rounded-xl bg-white p-4">
      <div className="flex-1">
        <p className="text-body4 font-semibold line-clamp-2">
          อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ
        </p>
        <div className="flex gap-1 text-body5">
          <p className="text-gray-6">จัดโดย</p>
          <p className="text-emerald-5">Dive Eat Sleep Thailand</p>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" className="h-4 w-4" />
            <p className="text-body6 text-gray-9">
              21-23 ตุลาคม 65 (5 วัน / 4 คืน, 11 ไดฟ์)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" className="h-4 w-4" />
            <p className="text-body6 text-gray-9">MV Koon 9</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" className="h-4 w-4" />
            <p className="flex-1 text-body6 text-gray-9">
              ห้อง ดีลักซ์ ไซท์คิง
            </p>
            <p className="text-body6 text-emerald-5">฿ 12,000 / คน</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" className="invisible h-4 w-4" />
            <p className="flex-1 text-body6 text-gray-9">
              ห้อง ดีลักซ์ ไซท์คิง
            </p>
            <p className="text-body6 text-emerald-5">฿ 12,000 / คน</p>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon="calendar" className="invisible h-4 w-4" />
            <p className="flex-1 text-body6 text-gray-9">
              ห้อง ดีลักซ์ ไซท์คิง
            </p>
            <p className="text-body6 text-emerald-5">฿ 12,000 / คน</p>
          </div>
        </div>
        <div className="mt-6">
          <Button color="primary" border="rounded" fullWidth size="lg">
            จองเลย
          </Button>
        </div>
      </div>
    </div>
  );
};
