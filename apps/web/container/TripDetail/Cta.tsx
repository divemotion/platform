import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import { Button, SvgIcon } from "ui";

export const CTA = () => {
  const buttonEl = useRef<HTMLDivElement | null>(null);
  const [isShowCta, setIsShowCta] = useState(false);
  const handleScroll = () => {
    const ctaOffset =
      (buttonEl.current?.offsetTop || 0) +
      (buttonEl.current?.offsetHeight || 0);
    if (buttonEl && window.pageYOffset > ctaOffset) {
      setIsShowCta(true);
      return;
    }
    setIsShowCta(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white p-4 shadow-sm md:mb-4 md:rounded-xl">
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
        <div ref={buttonEl} className="mt-6">
          <Button color="primary" border="rounded" fullWidth size="lg">
            จองเลย
          </Button>
        </div>
      </div>
      {/* mobile CTA */}
      <div
        css={[isShowCta ? tw`bottom-0` : tw`bottom-[-60px]`]}
        className="fixed left-0 z-10 block w-full border-t border-gray-3 bg-white px-4 py-3 shadow-md transition-all md:hidden"
      >
        <Button color="primary" border="rounded" fullWidth size="sm">
          จองเลย
        </Button>
      </div>
    </div>
  );
};
