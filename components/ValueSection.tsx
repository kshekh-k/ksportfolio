"use client";

import React from "react";
import { AlertCircle, Gauge, Flame } from "lucide-react";
import { motion } from "framer-motion";

const PROBLEMS = [
  {
    number: "01",
    title: "Looks good, doesn't convert",
    problem:
      "Aesthetics without conversion architecture leave you with vanity visitors who admire your site but never click, buy, or reach out.",
    solution:
      "Engineered visual hierarchy and strategic CTA placement that guide visitors to clear actions.",
    icon: AlertCircle,
    color: "from-rose-500/10 to-transparent",
    accent: "text-rose-600 dark:text-rose-400",
  },
  {
    number: "02",
    title: "Slow or frustrating to use",
    problem:
      "Bloated templates, slow load times, and poor mobile responsiveness cause bounce rates as high as 70% before your pitch is even seen.",
    solution:
      "Clean Next.js architecture and optimized assets that achieve 95+ Core Web Vitals scores.",
    icon: Gauge,
    color: "from-amber-500/10 to-transparent",
    accent: "text-amber-600 dark:text-amber-400",
  },
  {
    number: "03",
    title: "Great vision, weak execution",
    problem:
      "Designs created in Figma lose quality when handed off to generic developers who lack design sensibility.",
    solution:
      "A single designer-developer partner who builds exactly what was designed down to the last pixel.",
    icon: Flame,
    color: "from-cyan-500/10 to-transparent",
    accent: "text-blue-600 dark:text-cyan-400",
  },
];

export default function ValueSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-24 relative overflow-hidden transition-colors duration-200" id="about">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-5 xl:mb-20"
        >
          <div className="bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200/60 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-md inline-flex items-center justify-center gap-2 mb-3 lg:mb-6">   
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">Problem vs. Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-6">
            Good design isn&apos;t enough. <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">It needs to work.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed hidden lg:block">
            Most websites fail because design and development happen in silos.
            I bridge that gap with a unified approach:{" "}
            <span className="text-slate-900 dark:text-white font-semibold">
              Design + Development + Conversion.
            </span>
          </p>
        </motion.div>

        {/* 3 Problems Cards Grid */}
        <div className="max-w-full overflow-x-auto lg:overflow-visible lg:p-0 p-6 on-hover-scroll px-2">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {PROBLEMS.map((item, index) => {
            const Icon = item.icon;
            const xInitial = index === 0 ? -30 : index === 2 ? 30 : 0;
            const yInitial = index === 1 ? 40 : 25;

            return (
              <div
                key={item.number}
                 
                className="relative rounded-xl p-5 sm:p-6 lg:p-8 bg-white dark:bg-slate-850 shadow-1 dark:shadow-none hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden min-w-64 sm:min-w-[inherit] gap-2"
              >
                {/* Subtle Ambient Corner Accent Glow */}
                <div
                  className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-linear-to-br ${item.color} blur-2xl pointer-events-none opacity-40 dark:opacity-20 transition-opacity duration-300 group-hover:opacity-70 dark:group-hover:opacity-35`}
                />

                <div className="relative z-10">
                  <div className="flex flex-row-reverse items-center justify-between mb-6">
                    <span className="text-lg font-mono font-bold text-slate-400 dark:text-slate-500">
                      {item.number}
                    </span>
                    
                    <div className="size-14 rounded-lg bg-linear-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center shrink-0  transition-transform duration-300">
                      <Icon className={`size-8`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-none md:mb-6">
                    {item.problem}
                  </p>
                </div>

                <div className="relative z-10 pt-3 md:pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mt-0.5">
                      Fix:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
</div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 lg:mt-12 p-6 sm:p-8 rounded-2xl bg-linear-to-r from-blue-50/80 via-slate-100/90 to-cyan-50/80 dark:from-blue-950/40 dark:via-slate-900/60 dark:to-cyan-950/40 border border-slate-200/80 dark:border-slate-800/80 shadow-1 dark:shadow-none flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-cyan-400 bg-white/90 dark:bg-cyan-950/60 px-3 py-1.5 rounded-md border border-slate-200 dark:border-cyan-800/50 shadow-xs">
              The Formula
            </span>
            <div className="text-base sm:text-lg text-slate-900 dark:text-white font-medium">
              Conversion Psychology <span className="text-blue-600 dark:text-cyan-400 font-bold">+</span> High-Fidelity UI <span className="text-blue-600 dark:text-cyan-400 font-bold">+</span> Scalable Code
            </div>
          </div>
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
            = Guaranteed Measurable Outcomes
          </div>
        </motion.div>
      </div>
    </section>
  );
}
