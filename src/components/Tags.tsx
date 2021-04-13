import React from "react";

export interface IProps {
  tags: Array<string>;
  className?: string;
}

export default function Tags({ tags, className }: IProps) {
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {tags.map((tag) => (
        <Tag key={tag}>{`#${tag}`}</Tag>
      ))}
    </div>
  );
}

export interface ITagProps {
  children: JSX.Element | string;
}

export function Tag(props: ITagProps): JSX.Element {
  return (
    <span className="bg-yellow-600 dark:bg-pink-700 rounded px-2 text-xs cursor-pointer text-black dark:text-black">
      {props.children}
    </span>
  );
}
