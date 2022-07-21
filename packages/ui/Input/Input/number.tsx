import React, { useState } from "react";

import { SvgIcon } from "../../SvgIcon";

export const NumberInput = () => {
  const [value, setValue] = useState("0");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = /^$|^[0-9]+$/;
    const newValue = e.target.value;
    if (reg.test(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <div className="flex w-full gap-6">
      <div>
        <div
          onClick={() => setValue((Number(value) - 1).toString())}
          className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-gray-4 bg-white hover:border-gray-5 hover:shadow-sm"
        >
          <SvgIcon icon="minus" mark className="h-5 w-5 bg-gray-10" />
        </div>
      </div>
      <input
        type="number"
        className="h-[44px] w-full rounded-full border border-gray-4 px-4 text-center"
        onChange={onChange}
        value={value}
        min="0"
      />
      <div>
        <div
          onClick={() => setValue((Number(value) + 1).toString())}
          className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-gray-4 bg-white hover:border-gray-5 hover:shadow-sm"
        >
          <SvgIcon icon="plus" mark className="h-5 w-5 bg-gray-10" />
        </div>
      </div>
    </div>
  );
};
