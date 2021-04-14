import React from "react";
import { Global, css } from "@emotion/core";

import NavMenu from "./NavMenu";

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
      <GlobalStyles />

      <div className="space-y-3">
        <div className="grid grid-cols-6 lg:grid-cols-8 gap-4">
          <section className="col-span-6 lg:col-span-3 xl:col-span-2">
            <NavMenu isHome={isRoot} />
          </section>
          <main className="col-span-6 lg:col-span-5 2xl:col-span-5">
            {children}
          </main>
        </div>
      </div>
    </div>
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
      `}
    />
  );
}
