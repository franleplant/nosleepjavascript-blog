import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default function SecondaryHeader(props) {
  const { title } = props
  return (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
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
    </h3>
  )
}
