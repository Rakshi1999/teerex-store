import React from "react";
import { twMerge } from "tailwind-merge";

export default function CheckBox({ label, value, wrapperClassName, onChange }) {
  return (
    <div className={twMerge("flex items-center gap-x-2", wrapperClassName)}>
      <input
        type="checkbox"
        className="w-4 h-4 hover:cursor-pointer"
        value={value}
        onChange={onChange}
      />
      <label className="text-gray-600 font-medium">{label}</label>
    </div>
  );
}
