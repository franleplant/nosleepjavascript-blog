import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import logo from "../assets/logo.svg"

export default function SecondaryHeader(props) {
  return (
    <H3>
      <Link to={`/`}>
        <img src={logo} alt="NoSleep Javascript" />
      </Link>
    </H3>
  )
}

const H3 = styled.h3`
  margin: 0;
  & img {
    max-width: 25%;
    margin: 0;
  }
`
