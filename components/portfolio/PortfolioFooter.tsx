"use client";

import React from "react";

export default function PortfolioFooter() {
  return (
    <footer className="py-12 bg-white dark:bg-[#050810] border-t border-slate-200 dark:border-slate-850 text-slate-500 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-900 dark:text-white mr-2">
              Kamran Shekh
            </span>
            <span>· UI/UX Designer &amp; Full-Stack Developer</span>
          </div>

          <div>
            © 2026 Kamran Shekh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
