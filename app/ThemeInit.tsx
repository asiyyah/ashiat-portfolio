"use client";

import { useEffect } from "react";

export default function ThemeInit() {
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const applySystemTheme = (matches: boolean) => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") return;

      const theme = matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
    };

    const handleSystemChange = (event: MediaQueryListEvent) => {
      applySystemTheme(event.matches);
    };

    applySystemTheme(systemTheme.matches);
    systemTheme.addEventListener("change", handleSystemChange);

    return () => systemTheme.removeEventListener("change", handleSystemChange);
  }, []);

  return null;
}
