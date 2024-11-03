import React from "react";
import { twMerge } from "tailwind-merge";

export default function PrimaryButton({ labelText, className, onClick }) {
  return (
    <button className={twMerge("btn-primary", className)} onClick={onClick}>
      {labelText}
    </button>
  );
}
