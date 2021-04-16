import React from "react";
import useScript from "../hooks/useScript";

export interface IProps {
  className?: string;
}

export default function Patreon(props: IProps): JSX.Element {
  useScript("https://c6.patreon.com/becomePatronButton.bundle.js");
  return (
    <a
      href="https://www.patreon.com/bePatron?u=44509257"
      data-patreon-widget-type="become-patron-button"
      className={props.className}
    >
      Become a Patron!
    </a>
  );
}
