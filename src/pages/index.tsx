import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { rhythm } from "../utils/typography"
import SharedBio from "../components/SharedBio"
import * as theme from "../utils/theme"

import { IBlogIndexQuery } from "../../graphql-types"

export interface IProps {
  data: IBlogIndexQuery
  location: any
}

export default function BlogIndex(props: IProps) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="NoSleep Javascript | All Posts" />

      <SharedBio authors={data.allAuthorYaml.nodes} />

      {posts.map(({ node }) => {
        const slug = node.fields.slug
        const title = node.frontmatter.title || slug
        const content = node.frontmatter.description || node.excerpt

        return (
          <article key={slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
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
        )
      })}
    </Layout>
  )
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
`
