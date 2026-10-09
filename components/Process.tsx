"use client";

import React from "react";
import { ArrowRight, Compass, Palette, Code, CheckCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    name: "Understand",
    description: "Align on target audience, business goals, and current conversion bottlenecks.",
    icon: Compass,
  },
  {
    number: "02",
    name: "Design",
    description: "High-fidelity Figma prototypes, modern UI systems, and frictionless user flows.",
    icon: Palette,
  },
  {
    number: "03",
    name: "Build",
    description: "Production Next.js code, responsive layout systems, and clean animations.",
    icon: Code,
  },
  {
    number: "04",
    name: "Refine",
    description: "Cross-device responsiveness QA, Core Web Vitals speed tuning, and polishing.",
    icon: CheckCheck,
  },
  {
    number: "05",
    name: "Launch",
    description: "Smooth deployment, analytics handoff, and escrow release on Fiverr.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#080C16] relative overflow-hidden transition-colors duration-200" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            A battle-tested process with{" "}
            <span className="text-gradient-brand">zero surprises.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Every step is structured around clear milestones, active communication,
            and escrow payment safety on Fiverr.
          </p>
        </div>

        {/* Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl p-6 bg-slate-50/90 dark:bg-[#0F1629] border border-slate-200 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/40 shadow-xs dark:shadow-none transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                      STEP {step.number}
                    </span>
                    <div className="size-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:border-blue-400 dark:group-hover:border-cyan-500/50 transition-colors shadow-2xs">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  {/* Step Name */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {step.name}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub-indicator */}
                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Milestone {idx + 1}</span>
                  {idx < 4 && (
                    <ArrowRight className="size-3 text-slate-400 dark:text-slate-400 hidden md:block" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
