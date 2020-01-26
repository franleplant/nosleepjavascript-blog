/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

export default function Bio(props) {
  const { author = {}, prefixText = "Written by" } = props
  console.log("author", author)

  let githubEl
  if (author.github) {
    githubEl = (
      <a href={author.github} target="_blank">
        Github
      </a>
    )
  }

  return (
    <Container>
      <Image
        fluid={author.profilepicture.childImageSharp.fluid}
        alt={author.id}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p
        css={css`
          margin: 0;
        `}
      >
        {`${prefixText} `}
        <strong>
          <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>
        </strong>
        : {author.bio} {githubEl}
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(2.5)};
`
