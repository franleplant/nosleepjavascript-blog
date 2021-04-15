import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import {
  IGatsbyImageSharpFixedFragment,
  IAuthorFragmentFragment,
} from "../../../graphql-types";

interface IAuthor extends IAuthorFragmentFragment {
  profilepicture: {
    childImageSharp: {
      fixed: IGatsbyImageSharpFixedFragment;
    };
  };
}

interface IProps {
  author: IAuthor;
}

export default function Bio(props: IProps) {
  const { author } = props;

  return (
    <Container>
      <div>
        <Image
          fixed={author.profilepicture.childImageSharp.fixed}
          alt={author.id}
          style={{
            marginBottom: 0,
            borderRadius: "50%",
            width: "200px",
          }}
        />
      </div>
      <div className="font-bold text-pink-600 dark:text-yellow-600">
        {author.id}
      </div>
      <div>
        <Github url={author.github} /> | <Twitter handle={author.twitter} />
      </div>
    </Container>
  );
}

function Github({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      github
    </a>
  );
}

function Twitter({ handle }: { handle: string }) {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      twitter
    </a>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
`;
