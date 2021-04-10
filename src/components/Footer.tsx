import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="p-3 text-center bg-yellow-600">
      © {new Date().getFullYear()}, nosleepjavascript.com
    </footer>
  );
}
