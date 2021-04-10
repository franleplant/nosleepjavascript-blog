import React from "react";
import { Link } from "gatsby";
import { useFranleplant } from "../dal/authors";

import logo from "../../content/assets/logo.svg";

export interface IProps {}

export default function PrimaryHeader(props: IProps) {
  const franleplant = useFranleplant();

  return (
    <header>
      <h1 className="max-w-md mx-auto">
        <Link to={`/`}>
          <img src={logo} alt={"NoSleepJavascript Blog"} />
        </Link>
      </h1>

      <div>
        <p className="text-center">
          A blog by{" "}
          <a href={`https://twitter.com/${franleplant.twitter}`}>
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
