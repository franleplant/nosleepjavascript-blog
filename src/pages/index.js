import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import SharedBio from "../components/sharedBio"
import * as theme from "../utils/theme"

export default function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="NoSleep Javascript | All Posts" />

      <SharedBio authors={data.allAuthorYaml.nodes} />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
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
                  __html: node.frontmatter.description || node.excerpt,
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
  query {
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
      }
    }
  }
`
