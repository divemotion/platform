import React, { TextareaHTMLAttributes } from "react";

export const TextArea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <div className="flex w-full gap-6">
      <textarea
        className="w-full rounded-lg border border-gray-4 p-4 outline-none"
        {...props}
      />
    </div>
  );
};
