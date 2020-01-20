import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import PrimaryHeader from './PrimaryHeader'
import SecondaryHeader from './SecondaryHeader'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(2 / 4)}`,
        }}
      >
        <header>{isRoot ? <PrimaryHeader title={title}/> : <SecondaryHeader  title={title}/>}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, nosleepjavascript.com</footer>
      </div>
    )
  }
}

export default Layout
