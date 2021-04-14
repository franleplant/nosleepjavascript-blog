import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { INotFoundPageQuery } from "../../graphql-types";
import PaperContainer from "../components/PaperContainer";

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
      <PaperContainer className="space-y-5">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </PaperContainer>
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
