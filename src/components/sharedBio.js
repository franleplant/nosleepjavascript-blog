import React from "react"
import { rhythm } from "../utils/typography"

export default function SharedBio(props) {
  const { authors = [] } = props

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        A blog by <MiniBio author={authors[0]} />
        {" and "}
        <MiniBio author={authors[1]} />
        {"."}
        <br />
        We talk about Programming, Tech Culture and random stuff.
      </p>
    </div>
  )
}

export function MiniBio({ author }) {
  return (
    <span>
      <strong>
        <a href={`https://twitter.com/${author.twitter}`}>{author.id}</a>
      </strong>
    </span>
  )
}
