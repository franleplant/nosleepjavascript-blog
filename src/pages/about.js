import React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

export default class About extends React.Component {
  render() {
    const { allAuthorYaml, site } = this.props.data
    const authors = allAuthorYaml.nodes

    return (
      <Layout location={this.props.location} title={site.siteMetadata.title}>
        <SEO title="About us" />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            >
              About us
            </h1>
          </header>
          <section>
        <p>
          We are two Software Developers with degrees in Engineering that love
          to talk about programming, tech culture and other random stuff.
        </p>

        <p>
          We have been working in the industry for more than 6 years, we have
          experience with a range of programming languages, programming
          techniques, filosophies and we are pationate about reflecting on these
          and more subjects and hopefully, in the process, we can help others
          improve and move their careers forward.
        </p>

        {authors.map(author => (
          <Bio author={author} key={author.id} prefixText="" />
        ))}
          </section>

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
          </footer>
        </article>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allAuthorYaml {
      nodes {
        bio
        id
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
`
