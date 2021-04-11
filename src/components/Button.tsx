import React from "react";

export interface IProps extends React.ButtonHTMLAttributes<unknown> {
  className?: string;
}

export default function Button({ className, ...props }: IProps): JSX.Element {
  return (
    <button
      className={`
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
    text-black
    font-bold
    ${className}
    `}
      {...props}
    />
  );
}
