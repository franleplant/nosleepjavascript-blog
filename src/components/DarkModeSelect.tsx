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

  function onDarkModeChange(newDarkMode: boolean): void {
    setDarkMode((_darkMode) => {
      localStorage.theme = newDarkMode ? "dark" : "light";
      return newDarkMode;
    });
  }

  return (
    <div
      className={oneline`
      flex items-center justify-items-center justify-center
      ${props.className}
    `}
    >
      <Button onClick={() => onDarkModeChange(true)} active={darkMode}>
        🌛
      </Button>
      <Button onClick={() => onDarkModeChange(false)} active={!darkMode}>
        🌞
      </Button>
    </div>
  );
}

export interface IButtonProps {
  active?: boolean;
  onClick: () => void;
  children: JSX.Element | string;
  className?: string;
}

export function Button(props: IButtonProps): JSX.Element {
  return (
    <button
      className={oneline`
        mx-3
        p-3 text-xl w-10 h-10 flex items-center justify-items-center justify-center rounded-full
        outline-none
        focus:outline-none
        border
        border-pink-700
        dark:border-white
        ${!props.active ? "opacity-30" : ""}
        hover:opacity-100
        ${props.className}
      `}
      onClick={() => props.onClick()}
    >
      <div>{props.children}</div>
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
