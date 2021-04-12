import React from "react";
import { Link } from "gatsby";
import { useFranleplant } from "../dal/authors";

import logo from "../../content/assets/logo.svg";
import logoInverted from "../../content/assets/logo_inverted.svg";

export interface IProps {}

export default function PrimaryHeader(props: IProps) {
  const franleplant = useFranleplant();

  return (
    <header>
      <h1 className="max-w-md mx-auto h-16 md:h-40 w-56 md:w-full">
        <Link to={`/`}>
          {/*
          <img src={logo} alt={"NoSleepJavascript Blog"} />
          */}
          <img src={logoInverted} alt={"NoSleepJavascript Blog"} />
        </Link>
      </h1>

      <div className="text-lg hidden md:block">
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
