import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import PrimaryHeader from "./PrimaryHeader"
import SecondaryHeader from "./SecondaryHeader"

export default function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isRoot = location.pathname === rootPath

  return (
    <Container>
      <Global
        styles={css`
          :not(pre) > code[class*="language-"] {
            // this is to fix overflowing in mobile
            word-break: break-word;
          }
        `}
      />
      <header>
        {isRoot ? <PrimaryHeader title={title} /> : <SecondaryHeader />}
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, nosleepjavascript.com</footer>
    </Container>
  )
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(32)};
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
`
