import React from "react";
import { oneline } from "../utils/strTag";

export interface IProps {
  className?: string;
  children: Array<JSX.Element> | JSX.Element | string | null;
}

export default function PaperContainer(props: IProps): JSX.Element {
  return (
    <div
      className={oneline`
        lg:max-w-4xl m-auto lg:my-20 p-3 md:p-10 dark:bg-white dark:bg-opacity-5 rounded-md
        ${props.className}
      `}
    >
      <>{props.children}</>
    </div>
  );
}
