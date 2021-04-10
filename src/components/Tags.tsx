import React from "react";

export interface IProps {
  tags: Array<string>;
}

export default function Tags({ tags }: IProps) {
  return (
    <div className="flex flex-wrap gap-1">
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
    <span className="bg-yellow-600 rounded px-2 text-xs cursor-pointer">
      {props.children}
    </span>
  );
}
