import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import color from "color";
import * as theme from "../utils/theme";

import PrimaryHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import NavMenu from "./NavMenu";

interface IProps {
  children: any;
  location: any;
  title: any;
}

export default function Layout(props: IProps) {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRoot = location.pathname === rootPath;

  return (
    <Container>
      <Helmet>
        <script
          // mailchimp
          id="mcjs"
        >
          {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c388336980630bd93629517cb/79c014026202565af1500f561.js");
          `}
        </script>
      </Helmet>
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
          /*

          button,
          input[type="submit"] {
            background-color: ${theme.COLOR.SECONDARY} !important;
            border: 0;
          }

          button,input[type=submit]: hover {
            background-color: ${theme.COLOR.SECONDARY} !important;
          }

          button,
          input {
            user-select: none;
            padding: 4px 10px;
            border: 1px solid #ccc;
            outline: 0 !important;
            border-radius: 4px;
            box-sizing: boder-box;
            user-select: none;
          }

          input:focus {
            border: 1px solid ${theme.COLOR.SECONDARY} !important;
            box-shadow: 0px 0px 2px ${theme.COLOR.SECONDARY}DE;
          }

          blockquote {
            margin-top: 40px;
            margin-bottom: 40px;
            border-left: 6px solid ${theme.COLOR.PRIMARY};
            background: ${color(theme.COLOR.PRIMARY).alpha(0.1).string()};
            padding-top: 20px;
            padding-bottom: 20px;
            color: rgba(0, 0, 0, 0.8);
          }
          */
        `}
      />
      <NavMenu />
      <div className="container mx-auto md:max-w-5xl p-2">
        <header>
          {isRoot ? <PrimaryHeader title={title} /> : <SecondaryHeader />}
        </header>
        <main>{children}</main>
      </div>
      <footer>© {new Date().getFullYear()}, nosleepjavascript.com</footer>
    </Container>
  );
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
