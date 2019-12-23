/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

export default function Bio(props) {
  const { author = {}, prefixText = "Written by" } = props

  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        marginBottom: rhythm(2.5),
      }}
    >
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
      <p style={{ margin: 0 }}>
        {`${prefixText} `}
        <strong>
          <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>
        </strong>
        : {author.bio}
      </p>
    </div>
  )
}
