import React from "react";
import { Link, navigate } from "gatsby";
import Tags from "./Tags";

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

  //bg-gradient-to-r dark:from-gray-900 dark:to-black
  return (
    <article
      onClick={onClick}
      //style={{backgroundImage: "radial-gradient(black, transparent)"}}
      className={`
        bg-white shadow-md p-3 rounded-md
        border-black-100 border cursor-pointer
        dark:border-transparent
        dark:bg-opacity-5
        dark:bg-white
        flex flex-col
        gap-3

        ${props.className}
    `}
    >
      <div className="">
        <h3>
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
      <Tags tags={tags} className="mt-auto" />
    </article>
  );
}
