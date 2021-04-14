import React, { useEffect, useState } from "react";
import { oneline } from "../utils/strTag";

export interface IProps {
  className?: string;
}

export default function DarkModeSelect(props: IProps): JSX.Element {
  const [darkMode, setDarkMode] = useState(isDark());
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className={oneline`
        p-3 text-xl w-10 h-10 flex items-center justify-items-center justify-center rounded-full
        outline-none
        focus:outline-none
        border
        border-pink-700
        dark:border-white
        ${props.className}
      `}
      onClick={() => {
        setDarkMode((darkMode) => {
          const newDarkMode = !darkMode;
          localStorage.theme = newDarkMode ? "dark" : "light";
          return newDarkMode;
        });

        // Whenever the user explicitly chooses to respect the OS preference
        //localStorage.removeItem('theme')
      }}
    >
      <div>{darkMode ? "🌛" : "🌞"}</div>
    </button>
  );
}

// It is dark if it is explicitly set as dark
// or if the OS prefference is to dark
export function isDark(): boolean {
  // Check if SSR
  if (typeof window === "undefined") {
    return true;
  }

  if ("theme" in localStorage) {
    return localStorage.theme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
