import React from "react";
import { graphql, PageProps } from "gatsby";

import { IBlogPostBySlugQuery } from "../../graphql-types";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import Tags from "../components/Tags";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import SeoFooter from "../components/SeoFooter";
import BuyMeCoffee from "../components/BuyMeCoffee";
import Patreon from "../components/Patreon";
import PostNavigator from "../components/PostNavigator";
import PaperContainer from "../components/PaperContainer";

export interface IPostLink {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

export interface IPageContext {
  slug: string;
  previous?: IPostLink;
  next?: IPostLink;
}

interface IProps extends PageProps<IBlogPostBySlugQuery, IPageContext> {}

export default function BlogPostTemplate(props: IProps) {
  const { previous, next } = props.pageContext;
  const post = props.data.markdownRemark;
  const {
    title,
    description,
    author,
    tags = [],
    seoFooter = "",
  } = post.frontmatter;

  return (
    <Layout
      location={props.location}
      title={title}
      description={`${description || post.excerpt}\nBy ${author.id}`}
      author={author}
    >
      <PaperContainer>
        <article className="space-y-5">
          <Tags tags={tags} />
          <header className="pb-3">
            <h1> {post.frontmatter?.title} </h1>
            <div className="py-3 text-sm text-gray-700 dark:text-gray-50">
              {`${post.frontmatter.date} • ${post.fields.readingTime.text}`}
            </div>
            <Bio author={author} />
          </header>

          <section
            className="space-y-5 nsj-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <section className="flex items-center -m-1">
            <BuyMeCoffee className="m-1" />
            <div className="m-1">
              <Patreon />
            </div>
          </section>
          <NewsletterSubscribe bounce={true} />
        </article>

        <div className="py-4">
          <PostNavigator previous={previous} next={next} />
        </div>

        <SeoFooter data={Array.isArray(seoFooter) ? seoFooter : [seoFooter]} />
      </PaperContainer>
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
