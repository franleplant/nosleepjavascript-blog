import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import typography from "../utils/typography"

import logo from "../assets/logo.svg"

export default function PrimaryHeader(props) {
  const { title } = props
  return (
    <h1
      css={css`
        padding: 0 ${typography.rhythm(5)};
        border: 0;
      `}
    >
      <Link to={`/`}>
        <img src={logo} alt={title} />
      </Link>
    </h1>
  )
}
