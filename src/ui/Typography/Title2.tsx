import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title2({ className, text }) {
  return <h2 className={twMerge(" font-bold", className)}>{text}</h2>;
}
