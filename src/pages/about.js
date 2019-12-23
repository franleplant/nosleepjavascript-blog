import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class About extends React.Component {
  render() {
    const { allAuthorYaml } = this.props.data

    return (
      <Layout location={this.props.location} title={"About us"}>
        <SEO title="About us" />

        <p>
          We are two Software Developers with degrees in Engineering that
          love to talk about programming, tech culture and other random stuff.
        </p>

        <p>
          We have been working in the industry for more than 6 years, we
          have experience with a range of programming languages, programming techniques,
          filosophies and we are pationate about reflecting on these and more subjects
          and hopefully, in the process, we can help others improve and move their
          careers forward.
        </p>

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
      }
    }
  }
`
