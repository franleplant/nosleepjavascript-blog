import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import color from "color";
import * as theme from "../utils/theme";

import PrimaryHeader from "./PrimaryHeader";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

interface IProps {
  children: any;
  location: any;
  title: any;
}

export default function Layout(props: IProps) {
  const { location, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRoot = location.pathname === rootPath;

  return (
    <div>
      <Helmet>
        <MailchimpScript />
      </Helmet>
      <GlobalStyles />

      {/*isRoot ? <PrimaryHeader /> : null*/}
      <div className="space-y-3">
        <div className="grid grid-cols-6 lg:grid-cols-8 gap-4">
          <section className="col-span-6 lg:col-span-3 xl:col-span-2">
            <NavMenu />
          </section>
          <main className="col-span-6 lg:col-span-5 2xl:col-span-5">
            {children}
          </main>
        </div>
      </div>
      {/*
        <Footer />
        */}
    </div>
  );
}

export function MailchimpScript() {
  return (
    <script
      // mailchimp
      id="mcjs"
    >
      {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c388336980630bd93629517cb/79c014026202565af1500f561.js");
          `}
    </script>
  );
}

export function GlobalStyles() {
  return (
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
  );
}
