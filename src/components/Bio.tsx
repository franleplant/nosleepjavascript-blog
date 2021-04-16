import React from "react";
import Image from "gatsby-image";
import {
  IGatsbyImageSharpFluidFragment,
  IAuthorFragmentFragment,
} from "../../graphql-types";

interface IAuthor extends IAuthorFragmentFragment {
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
    <div className="flex items-center max-w-lg border-t border-b py-5 border-gray-50 my-5 border-opacity-25">
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
      <p className="ml-2">
        {`${prefixText} `}
        <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>:{" "}
        {author.bio} {githubEl}
      </p>
    </div>
  );
}
