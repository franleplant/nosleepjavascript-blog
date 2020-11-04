import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { INotFoundPageQuery } from "../../graphql-types";

export interface IProps {
  location: any;
  data: INotFoundPageQuery;
}

export default function NotFoundPage(props: IProps) {
  const { data } = props;
  const siteTitle = data?.site?.siteMetadata?.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
