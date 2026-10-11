"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 dark:bg-[#070B14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs dark:shadow-none"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Kamran Shekh Portfolio"
          >
            <div className="size-8 rounded-full overflow-hidden bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px] shrink-0">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-925 flex items-center justify-center p-1">
                <Image
                  src="/images/logo-icon.svg"
                  alt="Kamran Shekh"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                Kamran Shekh
              </span>
            </div>
          </a>

          {/* Right: Minimal Navigation Links & Theme Toggle */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="flex items-center gap-5 sm:gap-7 text-sm font-medium">
              <a
                href="#work"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                Selected Work
              </a>
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                About
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
