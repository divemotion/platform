import React from "react";
import tw from "twin.macro";
import { SvgIcon } from "ui";

interface Props {
  step: number;
}

export const Step = ({ step }: Props) => {
  return (
    <div className="relative flex rounded-xl bg-white pt-6 shadow-none md:p-4 md:shadow-sm">
      <div className="flex w-28 flex-1 flex-col items-center">
        <div className="relative z-10 bg-white">
          <SvgIcon
            icon="circle"
            mark
            css={[step >= 1 ? tw`bg-emerald-5` : tw`bg-gray-5`]}
            className="h-6 w-6 "
          />
        </div>
        <p
          css={[step >= 1 ? tw`text-gray-9 font-semibold` : tw`text-gray-5`]}
          className="mt-2 text-body4"
        >
          เลือกห้อง
        </p>
      </div>
      <div className="flex w-28 flex-1 flex-col items-center">
        <div className="relative z-10 bg-white">
          <SvgIcon
            icon="circle"
            mark
            css={[step >= 2 ? tw`bg-emerald-5` : tw`bg-gray-5`]}
            className="h-6 w-6"
          />
        </div>
        <p
          css={[step >= 2 ? tw`text-gray-9 font-semibold` : tw`text-gray-5`]}
          className="mt-2 text-body4"
        >
          ข้อมูลลูกค้า
        </p>
      </div>
      <div className="relative flex w-28 flex-1 flex-col items-center">
        <div className="relative z-10 bg-white">
          <SvgIcon
            icon="circle"
            mark
            css={[step === 3 ? tw`bg-emerald-5` : tw`bg-gray-5`]}
            className="h-6 w-6"
          />
        </div>
        <p
          css={[step === 3 ? tw`text-gray-9 font-semibold` : tw`text-gray-5`]}
          className="mt-2 text-body4"
        >
          ยืนยันการจอง
        </p>
        {/* <SvgIcon icon="line" className="h-px w-full" /> */}
        {/* <div className="absolute top-3 right-[50%] w-[200%] border border-dashed border-gray-3" /> */}
      </div>
      <SvgIcon
        icon="line"
        className="absolute left-[16.66%] top-9 h-px w-2/3 !bg-repeat-x md:top-7"
      />
      {step > 1 && (
        <div className="absolute left-[16.66%] top-9 h-px w-2/6 border-b border-emerald-5 !bg-repeat-x md:top-7" />
      )}
      {step > 2 && (
        <div className="absolute left-[16.66%] top-9 h-px w-2/3 border-b border-emerald-5 !bg-repeat-x md:top-7" />
      )}
    </div>
  );
};
