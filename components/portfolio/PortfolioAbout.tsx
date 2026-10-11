"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERTISE_AREAS = [
  "UI/UX Design",
  "Frontend Architecture",
  "Web Applications",
  "Product Interfaces",
  "Responsive Web",
  "Design Systems",
];

export default function PortfolioAbout() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#070B14] transition-colors duration-200 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: About Copy (2 short paragraphs) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="text-xs font-mono font-medium uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
              About
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-6">
              Bridging the gap between thoughtful interface design and robust code.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am an independent UI/UX designer and full-stack web developer with
                over 12 years of hands-on experience building digital products for
                startups, growing businesses, and established teams worldwide.
              </p>
              <p>
                Working fluidly across both design and engineering eliminates the friction
                of traditional handoffs. I take products from initial concept and
                wireframing through to clean, high-performance production code that is
                maintainable and built to scale.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Compact Expertise List */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 bg-white dark:bg-slate-850 p-7 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Core Expertise
            </div>

            <ul className="space-y-3">
              {EXPERTISE_AREAS.map((area, idx) => (
                <motion.li
                  key={area}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.06 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-200 cursor-default group"
                >
                  <span className="size-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 group-hover:scale-150 transition-transform duration-200" />
                  <span className="group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">{area}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
