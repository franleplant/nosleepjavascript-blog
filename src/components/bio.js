/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

const Bio = (props) => {

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fluid={props.author.profilepicture.childImageSharp.fluid}
        alt={props.author.id}
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
      <p>
        Written by <strong><a href={`https://twitter.com/${props.author.twitter}`}>{props.author.id}</a></strong>: {props.author.bio}
      </p>
    </div>
  )
}

export default Bio
