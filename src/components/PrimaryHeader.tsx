import React from "react";
import { Link } from "gatsby";
import { useFranleplant } from "../dal/authors";

import logo from "../../content/assets/logo.svg";
import logoInverted from "../../content/assets/logo_inverted.svg";
import { oneline } from "../utils/strTag";

export interface IProps {
  isHome: boolean;
}

export default function PrimaryHeader(props: IProps) {
  const franleplant = useFranleplant();

  return (
    <header>
      <h1 className="max-w-md mx-auto h-28 md:h-40 w-56 md:w-full">
        <Link to={`/`} className="dark:hidden">
          <img src={logo} alt={"NoSleepJavascript Blog"} />
        </Link>
        <Link to={`/`} className="hidden dark:block">
          <img src={logoInverted} alt={"NoSleepJavascript Blog"} />
        </Link>
      </h1>

      <div
        className={oneline`
${props.isHome ? "" : "hidden md:block"}
        text-lg 
      `}
      >
        <p className="text-center">
          A blog by{" "}
          <a className="" href={`https://twitter.com/${franleplant.twitter}`}>
            {franleplant.id}
          </a>
        </p>
        <p className="text-center">
          I talk about Programming, Tech Culture and random stuff.
        </p>
      </div>
    </header>
  );
}
