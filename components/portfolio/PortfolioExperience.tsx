"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    value: "12+ Years",
    label: "Professional Experience",
    sub: "Creating digital products and web systems",
  },
  {
    value: "200+",
    label: "Projects Delivered",
    sub: "Spanning startups to enterprise platforms",
  },
  {
    value: "Design + Dev",
    label: "End-to-End Execution",
    sub: "From Figma prototypes to production code",
  },
  {
    value: "Modern Web",
    label: "Core Stack",
    sub: "React · Next.js · TypeScript · Tailwind CSS",
  },
];

export default function PortfolioExperience() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-925 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col p-4 -m-4 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-default"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
