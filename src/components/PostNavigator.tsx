import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

export interface IPostLink {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

export interface IProps {
  previous?: IPostLink;
  next?: IPostLink;
}

export default function PostNavigator(props: IProps) {
  const { previous, next } = props;
  return (
    <Container className="gap-2">
      <NavItem to={previous?.fields.slug} rel="prev">
        ← {previous?.frontmatter.title}
      </NavItem>
      <NavItem to={next?.fields.slug} rel="next">
        {next?.frontmatter.title} →
      </NavItem>
    </Container>
  );
}

export interface INavItemProps {
  to?: string;
  rel: string;
  children: Array<JSX.Element> | JSX.Element | Array<string> | string;
}

export function NavItem(props: INavItemProps) {
  if (!props.to) {
    return null;
  }
  return (
    <LinkContainer className="rounded-md border-pink-600 border p-5">
      <Link to={props.to} rel={props.rel}>
        {props.children}
      </Link>
    </LinkContainer>
  );
}

const Container = styled.nav(`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`);

const LinkContainer = styled.div`
  @media (min-width: 800px) {
    width: 49%;
  }
`;
