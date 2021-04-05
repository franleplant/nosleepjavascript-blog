import React from "react";
import { Link } from "gatsby";

import logo from "../../content/assets/logo.svg";

export default function NavMenu() {
  return (
    <div className="sticky top-0 py-2 flex w-full bg-white z-50 px-2 xl:px-20 shadow items-center">
      <div className="w-32">
        <Link to={`/`}>
          <img src={logo} alt={"NoSleepJavascript Blog"} />
        </Link>
      </div>
      <div className="flex flex-row-reverse w-full items-center">
        <div className="">
          <Link to="about" className="">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
