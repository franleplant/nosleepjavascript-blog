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
      <article className="lg:max-w-4xl space-y-5 m-auto lg:my-20 p-3 md:p-10 dark:bg-white dark:bg-opacity-5 rounded-md">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </article>
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
