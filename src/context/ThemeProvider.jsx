import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#0f1117" : "#e6ebf4");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
