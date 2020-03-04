import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import PrimaryHeader from "./PrimaryHeader"
import SecondaryHeader from "./SecondaryHeader"

interface IProps {
  children: any
  location: any
  title: any
}

export default function Layout(props: IProps) {
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

          .code-block-title {
            margin-bottom: -0.6rem;
            padding: 0.5em 1em;
            font-family: Consolas, "Andale Mono WT", "Andale Mono",
              "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
              "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L",
              Monaco, "Courier New", Courier, monospace;

            background-color: black;
            color: white;
            z-index: 0;

            border-top-left-radius: 0.3em;
            border-top-right-radius: 0.3em;
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
