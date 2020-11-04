import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { IAuthor } from "../types";

export interface IProps {
  authors: Array<IAuthor>;
}

// TODO improve
export default function SharedBio(props: IProps) {
  const { authors = [] } = props;

  return (
    <Container>
      <p>
        A blog by <MiniBio author={authors[0]} />
      </p>
      <p>I talk about Programming, Tech Culture and random stuff.</p>
      <p>
        <Link to="about">About</Link>
      </p>
    </Container>
  );
}

export function MiniBio({ author }: { author: IAuthor }) {
  return (
    <span>
      <strong>
        <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>
      </strong>
    </span>
  );
}

const Container = styled.div`
  text-align: center;

  & > p {
    margin: 0;
  }
`;
