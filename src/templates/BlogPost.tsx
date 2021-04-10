import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";

import { IBlogPostBySlugQuery } from "../../graphql-types";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Tags from "../components/Tags";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import SeoFooter from "../components/SeoFooter";
import BuyMeCoffee from "../components/BuyMeCoffee";
import Patreon from "../components/Patreon";
import PostNavigator from "../components/PostNavigator";

interface IProps {
  data: IBlogPostBySlugQuery;
  location: any;
  pageContext: {
    slug: string;
    previous?: any;
    next?: any;
  };
}

export default function BlogPostTemplate(props: IProps) {
  const { previous, next } = props.pageContext;
  const siteTitle = props.data.site.siteMetadata.title;
  const post = props.data.markdownRemark;
  const {
    title,
    description,
    author,
    tags = [],
    seoFooter = "",
  } = post.frontmatter;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={title}
        description={`${description || post.excerpt}\nBy ${author.id}`}
        author={author}
      />

      <div className="lg:max-w-2xl m-auto my-5">
        <article className="space-y-5">
          <header className="pb-3">
            <h1> {post.frontmatter?.title} </h1>
            <div className="py-3">
              {`${post.frontmatter.date} • ${post.fields.readingTime.text}`}
            </div>
            <Tags tags={tags} />
          </header>

          <section
            className="space-y-5"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <NewsletterSubscribe />

          <hr css={css``} />

          <footer>
            <Bio author={author} />

            <div
              css={css`
                margin-top: -20px;
                margin-bottom: 20px;
              `}
            >
              <div>
                <BuyMeCoffee />
              </div>
              <div>
                <Patreon />
              </div>
            </div>
          </footer>
        </article>

        <PostNavigator previous={previous} next={next} />

        <SeoFooter data={Array.isArray(seoFooter) ? seoFooter : [seoFooter]} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
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
        seoFooter
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
`;
