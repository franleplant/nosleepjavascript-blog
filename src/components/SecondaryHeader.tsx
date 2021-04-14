import React from "react";
import { Link } from "gatsby";

import logo from "../../content/assets/logo.svg";
import logoInverted from "../../content/assets/logo_inverted.svg";

export interface IProps {}

export default function PrimaryHeader(_props: IProps) {
  return (
    <header>
      <h1 className="max-w-md mx-auto h-16 md:h-40 w-56 md:w-full">
        <Link to={`/`} className="dark:hidden">
          <img src={logo} alt={"NoSleepJavascript Blog"} />
        </Link>
        <Link to={`/`} className="hidden dark:block">
          <img src={logoInverted} alt={"NoSleepJavascript Blog"} />
        </Link>
      </h1>
    </header>
  );
}
