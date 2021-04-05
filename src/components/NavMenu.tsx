import React from "react";
import { Link } from "gatsby";

import logo from "../../content/assets/logo.svg";

export default function NavMenu() {
  return (
    <div className="sticky top-0 py-1 flex w-full bg-white z-50 px-2 xl:px-20 shadow items-center">
      <div className="w-32">
        <Link to={`/`}>
          <img
            src={logo}
            alt={"NoSleepJavascript Blog"}
            className="transform transition delay-300 duration-300 ease-in-out hover:scale-125"
          />
        </Link>
      </div>
      <div className="flex flex-row-reverse w-full items-center">
        <div className="">
          <Link to="about" className="leading-10 block p-3">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
