"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-9 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative size-9 sm:size-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="size-4.5 transition-transform duration-300 rotate-0 scale-100 text-slate-700" />
      ) : (
        <Sun className="size-4.5 transition-transform duration-300 -rotate-90 scale-100 text-amber-400" />
      )}
    </button>
  );
}
