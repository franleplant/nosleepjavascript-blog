import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import getSetViewCount from "../dal/getSetPageView"

const isLocalhost = window.location.href.includes("localhost:8000")

export default function BlogPostTemplate(props) {
  const siteTitle = props.data.site.siteMetadata.title
  const post = props.data.markdownRemark
  const { frontmatter } = props.data.markdownRemark
  const { author, tags = [] } = frontmatter
  const { previous, next } = props.pageContext
  const { slug } = post.fields

  //TODO remove
  console.log("This will run on every render, try clicking a subtitle", slug)

  const [pageViewCount, setPageViewCount] = useState()

  //TODO remove comments
  //This the newer way in which we can express side effects
  //with react, the callback will be called only when the second argument,
  //[slug] in this case, change
  useEffect(() => {
    //TODO remove
    console.log(
      "this will run only when the slug changes i.e. on a new real page view",
      slug
    )

    async function fetchData() {
      const pageViewCount = await getSetViewCount(slug)
      setPageViewCount(pageViewCount)
    }

    // Do not bump page count if it's localhost
    if (!isLocalhost) {
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
            {/*https://www.gatsbyjs.org/tutorial/part-two/#using-component-scoped-css*/}
            <div
              style={{
                marginTop: "10px",
                marginLeft: "-5px",
              }}
            >
              {tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    margin: "5px",
                    padding: "10px 5px",
                  }}
                >{`#${tag}`}</span>
              ))}
            </div>
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
