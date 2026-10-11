"use client";

import React from "react";
import { Check, ShieldCheck, Zap, Users2, LineChart, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const ADVANTAGES = [
  {
    number: "01",
    title: "Design + Development in One",
    description:
      "No lost-in-translation handoffs between disconnected design agencies and outsourced programmers. What is crafted in the prototype is identically engineered into production code.",
    icon: Code2,
    badge: "Zero Handoff Loss",
  },
  {
    number: "02",
    title: "Fast, Direct Communication",
    description:
      "Work directly with the person writing your code and shaping your design. No account managers, no bureaucratic delays, and direct daily progress updates with async demo videos.",
    icon: Zap,
    badge: "< 1 Hr Response Time",
  },
  {
    number: "03",
    title: "Business-Focused Thinking",
    description:
      "Every button layout, headline contrast, and navigation path is evaluated for one primary metric: Does it help turn your website visitors into paying inquiries and long-term customers?",
    icon: LineChart,
    badge: "Revenue-Driven UX",
  },
  {
    number: "04",
    title: "Production-Ready Delivery",
    description:
      "Clean, documented, TypeScript-strict Next.js architecture built to enterprise standards. No messy spaghetti code, no broken mobile viewports, and 100% Core Web Vitals optimization.",
    icon: ShieldCheck,
    badge: "Production Tested",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-8 sm:py-12 lg:py-24 bg-slate-50 dark:bg-[#070B14] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Users2 className="size-3.5" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            One partner from{" "}
            <span className="text-gradient-cyan">idea to launch.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminate agency bloat, unreturned emails, and broken promises. Get senior-level
            craftsmanship and reliable milestone deliveries backed by Fiverr Escrow.
          </p>
        </div>

        {/* 4 Value Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl p-8 bg-white dark:bg-[#0F1629] border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                      {adv.number} / ADVANTAGE
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[11px] font-semibold text-blue-700 dark:text-cyan-400">
                      {adv.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {adv.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Check className="size-4 shrink-0" />
                  <span>Verified 100% track record on Fiverr</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
