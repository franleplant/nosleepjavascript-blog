import React from "react";
import { Link, navigate } from "gatsby";

export interface IProps {
  slug: string;
  title: string;
  content: string;
  authorId: string;
  date: string;
  readingTime: string;
}

export default function PostCard(props: IProps): JSX.Element {
  const { slug, title, content, authorId, date, readingTime } = props;

  function onClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    navigate(slug);
  }

  return (
    <article
      onClick={onClick}
      className="bg-white shadow-md p-3 rounded-md space-y-3 border-black-100 border cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 hover:z-50"
    >
      <div>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <div>
          <small>{`${date} • ${readingTime}`}</small>
          <small>
            {` • by `}
            <span className="font-bold text-pink-600">{authorId}</span>
          </small>
        </div>
      </div>
      <section>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </article>
  );
}
