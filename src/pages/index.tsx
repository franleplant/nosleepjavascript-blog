import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import { IBlogIndexQuery } from "../../graphql-types";
import PostCard from "../components/PostCard";

export interface IProps extends PageProps<IBlogIndexQuery> {}

export default function BlogIndex(props: IProps) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="space-y-3 p-3 lg:p-20">
        <SEO title="NoSleep Javascript blog by franleplant" />

        <div className="flex flex-wrap justify-center max-w-screen-xl -m-3">
          {posts.map(({ node }) => {
            const slug = node.fields.slug;
            const title = node.frontmatter.title || slug;
            const content = node.frontmatter.description || node.excerpt;
            const tags = node.frontmatter.tags;

            return (
              <PostCard
                key={slug}
                slug={slug}
                title={title}
                content={content}
                date={node.frontmatter.date}
                readingTime={node.fields.readingTime.text}
                authorId={node.frontmatter.author.id}
                tags={tags}
                className="w-96 m-3"
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
            tags
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
