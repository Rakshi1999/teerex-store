import React from "react";
import { twMerge } from "tailwind-merge";

export default function PrimaryButton({
  labelText,
  className,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={twMerge(
        "bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 hover:cursor-pointer transition-all",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {labelText}
    </button>
  );
}
