import React from "react";
import { Link, navigate } from "gatsby";
import Tags from "./Tags";
import { oneline } from "../utils/strTag";

// TODO better define this structure
export interface IProps {
  slug: string;
  title: string;
  content: string;
  authorId: string;
  date: string;
  readingTime: string;
  tags: Array<string>;
  className?: string;
}

export default function PostCard(props: IProps): JSX.Element {
  const { slug, title, content, authorId, date, readingTime, tags } = props;

  function onClick(_e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    navigate(slug);
  }

  return (
    <article
      onClick={onClick}
      className={oneline`
        bg-white shadow-md p-3 rounded-md
        border-black-100 border cursor-pointer
        dark:border-transparent
        dark:bg-opacity-5
        dark:bg-white
        flex flex-col
        space-y-3

        ${props.className}
    `}
    >
      <div className="">
        <h3 className="p-0 fuck">
          <Link to={slug}>{title}</Link>
        </h3>
        <div className="dark:text-white">
          <small>{`${date} • ${readingTime}`}</small>
          <small>
            {` • by `}
            <span className="font-bold text-pink-600 dark:text-yellow-600">
              {authorId}
            </span>
          </small>
        </div>
      </div>
      <section>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      <Tags tags={tags} className="!mt-auto pt-3" />
    </article>
  );
}
