import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { rhythm } from "../../utils/typography";
import { IGatsbyImageSharpFixedFragment } from "../../../graphql-types";
import { IAuthor as IAuthorBase } from "../../types";
import { COLOR } from "../../utils/theme";

interface IAuthor extends IAuthorBase {
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
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            borderRadius: "50%",
            width: "200px",
          }}
        />
      </div>
      <Name>{author.id}</Name>
      <div>
        <Github url={author.github} /> | <Twitter handle={author.twitter} />
      </div>
      <About>{author.bio}</About>
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
  margin-bottom: ${rhythm(2.5)};
  width: 400px;
  padding: 50px;
`;

const Name = styled.div`
  color: ${COLOR.SECONDARY};
  font-weight: bold;
`;

const About = styled.p`
  text-align: center;
`;
