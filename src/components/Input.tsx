import React from "react";
import c from "classnames";

export interface IProps extends React.InputHTMLAttributes<unknown> {
  className?: string;
}

export default function Input({ className, ...props }: IProps): JSX.Element {
  const defaultClassNames = [
    "appearance-none",
    "border-0",
    "border-transparent",
    "rounded",
    "p-2",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-pink-600",
    "focus:border-transparent",
    "shadow-lg",
  ];
  return <input className={c(...defaultClassNames, className)} {...props} />;
}
