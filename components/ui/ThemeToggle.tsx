"use client";

import { useState, useEffect } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof document !== "undefined") {
    const t = document.documentElement.getAttribute("data-theme");
    if (t === "dark" || t === "light") return t;
  }
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative w-9 h-5 rounded-full border border-border bg-surface transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-muted transition-transform duration-200 ${
          theme === "dark" ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
