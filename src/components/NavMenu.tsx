import React from "react";
import { Link } from "gatsby";
import PrimaryHeader from "./PrimaryHeader";
import NewsletterSubscribe from "./NewsletterSubscribe";
import { oneline } from "../utils/strTag";

export default function NavMenu(): JSX.Element {
  return (
    <div
      className={oneline`
        bg-gray-800
        z-50
        p-2
        md:p-4
        border-pink-700
        md:border-r
        flex
        flex-col
        items-center
        md:items-end
        lg:h-full
      `}
    >
      <div className="flex flex-col gap-2 md:gap-4 md:p-2 md:py-5 sticky top-4 w-full md:max-w-xs lg:h-screen ">
        <PrimaryHeader />
        <NewsletterSubscribe className="shadow border-pink-700 border-0 hidden md:block" />
        <div
          className={oneline`
          hidden
          md:flex
          flex-row items-center justify-center
          md:flex-col md:items-end
          gap-1
          md:mt-10
          `}
        >
          <Link
            to="about"
            className="leading-10 block p-3 text-white text-md hover:text-pink-600 text-right"
          >
            About
          </Link>
          <a
            href="about"
            className="leading-10 block p-3 text-white text-md hover:text-pink-600 text-right"
          >
            Contact
          </a>
        </div>

        <footer className="p-3 text-right text-white mt-auto hidden md:block">
          © {new Date().getFullYear()}, nosleepjavascript.com
        </footer>
      </div>
    </div>
  );
}
