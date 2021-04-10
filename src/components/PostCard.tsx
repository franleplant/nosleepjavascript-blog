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
    <article className="shadow-md p-3 rounded space-y-3 border-black-100 border">
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
