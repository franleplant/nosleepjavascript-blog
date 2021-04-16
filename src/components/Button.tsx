import React from "react";
import { oneline } from "../utils/strTag";

export interface IProps extends React.ButtonHTMLAttributes<unknown> {
  className?: string;
}

export default function Button({ className, ...props }: IProps): JSX.Element {
  return (
    <button
      className={oneline`
    appearance-none
    border-0
    border-transparent
    rounded
    p-2
    bg-pink-600
    focus:outline-none
    focus:ring-2
    focus:ring-pink-600
    focus:border-transparent
    shadow-lg
    text-white
    font-bold
    ${className}
    `}
      {...props}
    />
  );
}
