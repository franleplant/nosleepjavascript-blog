import React from "react";
import Image from "gatsby-image";
import { IGatsbyImageSharpFluidFragment } from "../../graphql-types";
import { IAuthor as IAuthorBase } from "../types";

interface IAuthor extends IAuthorBase {
  profilepicture: {
    childImageSharp: {
      fluid: IGatsbyImageSharpFluidFragment;
    };
  };
}

interface IProps {
  author: IAuthor;
  prefixText?: string;
}

export default function Bio(props: IProps) {
  const { author, prefixText = "Written by" } = props;

  const githubEl = (
    <a href={author.github} target="_blank" rel="noopener noreferrer">
      Github
    </a>
  );

  return (
    <div className="flex items-center gap-2 max-w-lg">
      <Image
        fluid={author.profilepicture.childImageSharp.fluid}
        alt={author.id}
        style={{
          minWidth: 75,
          height: 75,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        {`${prefixText} `}
        <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>:{" "}
        {author.bio} {githubEl}
      </p>
    </div>
  );
}
