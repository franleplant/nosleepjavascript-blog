import React from "react";
import { Link } from "gatsby";

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

  return (
    <article className="shadow-md p-3">
      <header>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <small>{`${date} • ${readingTime}`}</small>
        <small>
          {` • by `}
          <span>{authorId}</span>
        </small>
      </header>
      <section>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </article>
  );
}
