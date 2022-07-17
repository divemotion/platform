import React, { useEffect, useState } from "react";
import Select, {
  ActionMeta,
  components,
  GroupBase,
  NoticeProps,
  OptionProps,
  Options,
  Props,
  SingleValue,
} from "react-select";
import tw from "twin.macro";

import { IconType, SvgIcon } from "../SvgIcon";

interface WrapperProps {
  disableRoundedLeft?: boolean;
  disableRoundedRight?: boolean;
}

const styles = {
  control: ({ disableRoundedLeft, disableRoundedRight }: WrapperProps) => ({
    ...tw`flex h-[42px] rounded-lg border! border-gray-4! focus:border-emerald-10 hover:border-emerald-10 outline-none! text-body4 px-[14px] w-full placeholder-gray-5 shadow-none! cursor-pointer`,
    ...(disableRoundedLeft && tw`rounded-l-none`),
    ...(disableRoundedRight && tw`rounded-r-none`),
  }),
};

interface OptionType {
  label: string;
  value: string | number;
  custom?: any;
}

export interface SearchSelectProps extends WrapperProps {
  customOption?: React.ComponentType<
    OptionProps<OptionType, false, GroupBase<OptionType>>
  >;
  className?: string;
  isDisabled?: boolean;
  options?: Options<OptionType>;
  defaultValue?: string;
  onChange?: (
    newValue: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => void;
  onClear?: (newValue: SingleValue<OptionType>) => void;
  placeholder?: string;
  icon?: IconType;
  noOptionsMessage?: string;
}

const initialValue = (options?: Options<OptionType>, defaultValue?: string) => {
  return defaultValue
    ? options?.find((item) => item.value === defaultValue)
    : undefined;
};

interface ValueContainerProps {
  children?: React.ReactNode;
  icon?: IconType;
}

const ValueContainer = ({ children, icon }: ValueContainerProps) => {
  return (
    <div className="flex flex-1 items-center gap-1">
      {icon && <SvgIcon icon={icon} mark className="h-4 w-4 bg-gray-6" />}
      <div className="relative box-border grid w-full flex-1 flex-wrap items-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const NoOptionsMessage = (
  props: NoticeProps<OptionType, false, GroupBase<OptionType>>,
  msg?: string
) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span className="">{msg || "No options"}</span>
    </components.NoOptionsMessage>
  );
};

export const SearchSelect = ({
  options,
  defaultValue,
  onChange,
  onClear,
  isDisabled,
  placeholder,
  disableRoundedLeft,
  disableRoundedRight,
  className,
  customOption,
  icon,
  noOptionsMessage,
}: SearchSelectProps) => {
  const [value, setValue] = useState<SingleValue<OptionType> | undefined>(
    undefined
  );
  useEffect(() => {
    if (defaultValue && options) setValue(initialValue(options, defaultValue));
  }, [defaultValue, options]);
  return (
    <div className={className}>
      <Select
        styles={{
          control: () =>
            styles.control({ disableRoundedRight, disableRoundedLeft }),
        }}
        value={value}
        onChange={(value, action) => {
          setValue(value);
          if (action.action === "clear") {
            onClear?.(value);
            return;
          }
          onChange?.(value, action);
        }}
        options={options}
        isDisabled={isDisabled}
        placeholder={placeholder || "โปรดเลือก..."}
        isClearable
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => (
            <SvgIcon className="h-4 w-4 bg-gray-10" mark icon="ChevronDown" />
          ),
          ValueContainer: ({ children }) => (
            <ValueContainer icon={icon}>{children}</ValueContainer>
          ),
          Option: customOption || components.Option,
          NoOptionsMessage: (props) =>
            NoOptionsMessage(props, noOptionsMessage),
        }}
      />
    </div>
  );
};

export default SearchSelect;
