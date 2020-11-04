import React from "react";
import useScript from "../hooks/useScript";

export default function Patreon() {
  useScript("https://c6.patreon.com/becomePatronButton.bundle.js");
  return (
    <a
      href="https://www.patreon.com/bePatron?u=44509257"
      data-patreon-widget-type="become-patron-button"
    >
      Become a Patron!
    </a>
  );
}
