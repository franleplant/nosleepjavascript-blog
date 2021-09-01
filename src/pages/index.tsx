import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import { IBlogIndexQuery } from "../../graphql-types";
import PostCard from "../components/PostCard";
import PaperContainer from "../components/PaperContainer";
import Tags from "../components/Tags";
import Bio from "../components/Bio";
import PostNavigator from "../components/PostNavigator";

export interface IProps extends PageProps<IBlogIndexQuery> {}

export default function BlogIndex(props: IProps) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const firstPost = posts[0]?.node;
  const firstPostContent = posts[0]?.node.frontmatter;
  const { title, date, author, tags = [] } = firstPostContent;

  const previousPost = posts[1]?.node;

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

      <PaperContainer>
        <article className="space-y-5">
          <Tags tags={tags} />
          <header className="pb-3">
            <h1> {title} </h1>
            <div className="py-3 text-sm text-gray-700 dark:text-light_white">
              {`${date} • ${firstPost.fields.readingTime.text}`}
            </div>
            <Bio author={author} />
          </header>

          <section
            className="space-y-5 nsj-post-content"
            dangerouslySetInnerHTML={{ __html: firstPost.html }}
          />
        </article>

        <div className="py-4">
          <PostNavigator previous={previousPost} />
        </div>
      </PaperContainer>
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
          html
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
            author {
              id
              bio
              twitter
              github
              profilepicture {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
