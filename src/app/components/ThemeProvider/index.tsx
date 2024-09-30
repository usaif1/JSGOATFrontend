"use client";

import { useState, useLayoutEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeLoaded, setThemeLoaded] = useState(false);

  /**
   * Function to check and apply the theme from localStorage or system preference
   */
  const applyTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const theme = savedTheme || (prefersDark ? "dark" : "light");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Only update localStorage if it's not already set
    if (savedTheme !== theme) {
      localStorage.setItem("theme", theme);
    }

    setThemeLoaded(true); // Mark the theme as loaded
  };

  /**
   * using useLayoutEffect instead of useEffect to block UI from rendering till theme is set
   * for better understanding, read useEffect vs useLayoutEffect
   */
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      applyTheme();
    }
  }, []);

  // Avoid rendering until theme is loaded
  if (!themeLoaded) {
    return null;
  }

  return <>{children}</>;
};

export default ThemeProvider;
