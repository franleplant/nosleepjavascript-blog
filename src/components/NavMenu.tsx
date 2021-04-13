import React from "react";
import { Link } from "gatsby";
import PrimaryHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import NewsletterSubscribe from "./NewsletterSubscribe";
import { oneline } from "../utils/strTag";

export interface IProps {
  isHome: boolean;
}

export default function NavMenu(props: IProps): JSX.Element {
  return (
    <div
      className={oneline`
        z-50
        p-2
        lg:px-2
        lg:py-0
        border-pink-700
        lg:border-r
        flex
        flex-col
        items-center
        lg:items-end
        lg:h-full
      `}
    >
      <div className="flex flex-col gap-2 lg:gap-4 lg:py-6 lg:pt-16 lg:px-3 sticky top-0 w-full md:max-w-xs lg:h-screen ">
        {props.isHome ? <PrimaryHeader /> : <SecondaryHeader />}
        <NewsletterSubscribe
          className={oneline`
          shadow border-pink-700 border-0 md:block
          ${props.isHome ? "" : "hidden"}
        `}
        />
        <div
          className={oneline`
          ${props.isHome ? "flex" : "hidden"}
          md:flex
          flex-row items-center justify-center
          lg:flex-col lg:items-end
          gap-1
          lg:mt-10
          `}
        >
          <Link
            to="about"
            className="leading-10 p-3 dark:text-white text-md hover:text-pink-600 md:text-right"
          >
            About
          </Link>
          <a
            href="about"
            className="leading-10 p-3 dark:text-white text-md hover:text-pink-600 md:text-right"
          >
            Contact
          </a>
        </div>

        <footer className="p-3 text-center lg:text-right dark:text-white mt-auto hidden md:block">
          © {new Date().getFullYear()}, nosleepjavascript.com
        </footer>
      </div>
    </div>
  );
}
