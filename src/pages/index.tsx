import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import SharedBio from "../components/SharedBio";
import * as theme from "../utils/theme";

import { IBlogIndexQuery } from "../../graphql-types";
import NewsletterSubscribe from "../components/NewsletterSubscribe";

export interface IProps {
  data: IBlogIndexQuery;
  location: any;
}

export default function BlogIndex(props: IProps) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="space-y-2">
        <SEO title="NoSleep Javascript a blog by franleplant" />

        {/* TODO improve this 
      TODO move this to PrimaryHeader
        */}
        <SharedBio
          authors={data.allAuthorYaml.nodes.filter(
            (author) => author.id === "franleplant"
          )}
        />

        <NewsletterSubscribe />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {posts.map(({ node }) => {
            const slug = node.fields.slug;
            const title = node.frontmatter.title || slug;
            const content = node.frontmatter.description || node.excerpt;

            return (
              <article key={slug} className="shadow-md p-3">
                <header>
                  <h3>
                    <Link to={slug}>{title}</Link>
                  </h3>
                  <small>{`${node.frontmatter.date} • ${node.fields.readingTime.text}`}</small>
                  <small>
                    {` • by `}
                    <span
                      css={css`
                        color: ${theme.COLOR.SECONDARY};
                      `}
                    >
                      {node.frontmatter.author.id}
                    </span>
                  </small>
                </header>
                <section>
                  <p
                    css={css`
                      text-align: justify;
                    `}
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                </section>
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author {
              id
            }
          }
        }
      }
    }
    allAuthorYaml {
      nodes {
        bio
        id
        twitter
        github
      }
    }
  }
`;
