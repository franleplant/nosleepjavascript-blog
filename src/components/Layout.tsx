import React from "react";
import { WindowLocation } from "@reach/router";

import { IAuthorFragmentFragment } from "../../graphql-types";

import SEO from "./Seo";
import NavMenu from "./NavMenu";

interface IProps {
  children: Array<JSX.Element> | JSX.Element | string | null;
  location: WindowLocation;
  title?: string;
  description?: string;
  author?: IAuthorFragmentFragment;
}

export default function Layout(props: IProps) {
  const { location, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRoot = location.pathname === rootPath;

  return (
    <div>
      <SEO
        title={props.title}
        description={props.description}
        author={props.author}
      />
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
