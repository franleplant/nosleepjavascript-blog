import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { IGatsbyImageSharpFluidFragment } from "../../graphql-types"
import { IAuthor as IAuthorBase } from "../types"

interface IAuthor extends IAuthorBase {
  profilepicture: {
    childImageSharp: {
      fluid: IGatsbyImageSharpFluidFragment
    }
  }
}

interface IProps {
  author: IAuthor
  prefixText?: string
}

export default function Bio(props: IProps) {
  const { author, prefixText = "Written by" } = props

  const githubEl = (
    <a href={author.github} target="_blank" rel="noopener noreferrer">
      Github
    </a>
  )

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
