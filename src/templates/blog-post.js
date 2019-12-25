import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from '../components/Tags'
import { rhythm, scale } from "../utils/typography"
import getSetViewCount from "../dal/getSetPageView"

const isLocalhost = () => window.location.href.includes("localhost:8000")

export default function BlogPostTemplate(props) {
  const siteTitle = props.data.site.siteMetadata.title
  const post = props.data.markdownRemark
  const { frontmatter } = props.data.markdownRemark
  const { author, tags = [] } = frontmatter
  const { previous, next } = props.pageContext
  const { slug } = post.fields

  const [pageViewCount, setPageViewCount] = useState()

  useEffect(() => {
    async function fetchData() {
      const pageViewCount = await getSetViewCount(slug)
      setPageViewCount(pageViewCount)
    }

    // Do not bump page count if it's localhost
    if (!isLocalhost()) {
      fetchData()
    }
  }, [slug])

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {`${post.frontmatter.date} • ${post.fields.readingTime.text}`}
            <Tags tags={tags} />
          </p>
          {pageViewCount && <p>This post was viewed {pageViewCount} times</p>}
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <footer>
          <Bio author={author} />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
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
        author {
          id
          bio
          twitter
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
`
