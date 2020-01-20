import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default function PrimaryHeader(props) {
  const { title } = props
  return (
    <h1
      style={{
        ...scale(1.4),
        marginBottom: rhythm(1.5),
        marginTop: 0,
        textAlign: "center",
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )
}
