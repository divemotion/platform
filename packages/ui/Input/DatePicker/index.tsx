import "react-datepicker/dist/react-datepicker.css";

import { placements } from "@popperjs/core/lib";
import th from "date-fns/locale/th";
import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import styled from "styled-components";
import tw from "twin.macro";

import { SvgIcon } from "../../SvgIcon";

registerLocale("th", th);

const InputComponent = styled.input(() => [
  tw`flex h-[42px] items-center rounded-lg border border-gray-4 outline-none  w-full placeholder-gray-5 text-body4 px-[14px]`,
]);

const Wrapper = styled.div`
  .react-datepicker__month-text {
    ${tw`p-4 w-auto! text-body3`}
  }
  .react-datepicker__month-container {
    ${tw`w-[345px]`}
  }
`;

export interface InputProps {
  type?: string;
  className?: string;
  showTimeSelect?: boolean;
  placeholder?: string;
  icon?: string;
  withPortal?: boolean;
  selectsRange?: boolean;
  value?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  enableClear?: boolean;
  onChange?: (e: Date | [Date | null, Date | null] | null) => void;
  onClear?: (value: Date | null) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  showMonthYearPicker?: boolean;
  showFullMonthYearPicker?: boolean;
  popperPlacement?: typeof placements[number];
}

export const DatePicker = ({
  className,
  placeholder,
  icon,
  enableClear = false,
  onChange,
  onBlur,
  value,
  startDate,
  endDate,
  onClear,
  onFocus,
  type = "text",
  name,
  showTimeSelect,
  withPortal,
  selectsRange,
  showMonthYearPicker,
  showFullMonthYearPicker,
  popperPlacement,
}: InputProps) => {
  return (
    <Wrapper className="relative w-full">
      <ReactDatePicker
        wrapperClassName="date_picker full-width"
        className="w-40"
        showTimeSelect={showTimeSelect}
        selected={value || startDate}
        startDate={startDate}
        endDate={endDate}
        dateFormat={showTimeSelect ? "dd MMM yyyy HH:mm น." : "dd MMM yyyy"}
        locale="th"
        onChange={(date: Date | [Date | null, Date | null] | null) =>
          onChange?.(date)
        }
        popperPlacement={popperPlacement as any}
        placeholderText={placeholder}
        withPortal={withPortal}
        selectsRange={selectsRange}
        showMonthYearPicker={showMonthYearPicker}
        showFullMonthYearPicker={showFullMonthYearPicker}
        customInput={
          <InputComponent
            name={name}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        }
      />
      <div className="absolute right-0 top-0 flex h-full items-center gap-2">
        {/* {enableClear && !!value && (
          <BgImg
            src={"/icons/cancel.svg"}
            className="w-18px bg-meaOrange right-0 top-0 cursor-pointer"
            mark
            onClick={() => onClear?.(value)}
          />
        )} */}
        {/* <BgImg
          src={"/icons/calendar_everyday.svg"}
          className="w-18px mr-15px bg-gray-70 top-0 cursor-pointer"
          mark
        /> */}
        <SvgIcon className="mr-[15px] h-4 w-4" icon="ChevronDown" />
      </div>
    </Wrapper>
  );
};
