import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import SharedBio from "../components/SharedBio";
import * as theme from "../utils/theme";

import { IBlogIndexQuery } from "../../graphql-types";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import PostCard from "../components/PostCard";

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
              <PostCard
                key={slug}
                slug={slug}
                title={title}
                content={content}
                date={node.frontmatter.date}
                readingTime={node.fields.readingTime.text}
                authorId={node.frontmatter.author.id}
              />
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
