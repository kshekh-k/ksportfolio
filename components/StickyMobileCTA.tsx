"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past initial hero (300px)
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-50 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white/95 dark:bg-[#080C16]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/80 p-2.5 rounded-2xl shadow-xl dark:shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col pl-2">
          <span className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
            Ready to collaborate?
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
            5.0 ★ Fiverr Top Rated
          </span>
        </div>

        <a
          href={SITE_CONFIG.fiverrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-fiverr inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 tracking-wide shadow-md"
        >
          <span>Hire me on Fiverr</span>
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
