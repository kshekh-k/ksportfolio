"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Heart, CheckCircle2, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-200">
      {/* Background radial dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-137.5 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 dark:from-blue-600/20 dark:via-cyan-500/15 dark:to-indigo-600/20 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-10 sm:p-16 lg:p-20 bg-linear-to-b from-white via-slate-50 to-slate-100 dark:from-[#0F1629] dark:via-[#0B1020] dark:to-[#080C16] border border-blue-200 dark:border-cyan-500/30 shadow-2xl text-center flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500 dark:via-cyan-400 to-transparent" />

          {/* Upliner Pill */}
          <div className="bg-cyan-50 dark:bg-cyan-950/50 px-3.5 py-1.5 rounded-md inline-flex items-center justify-center gap-2 mb-6">               
            <Heart className="size-3.5 text-rose-500 fill-rose-500" />
            <span className="text-cyan-600 text-sm font-semibold tracking-wide">Thank You For Visiting</span>
          </div>

          {/* Large Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
            Thank you for exploring <br />
            <span className="text-gradient-brand">my portfolio.</span>
          </h2>

          {/* Supporting Line */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
            Whether you&apos;re looking to collaborate on a new digital product,
            redesign an existing experience, or simply stopped by to see my work — I truly appreciate your time.
          </p>

          {/* Action: Say Hello Button */}
          <div className="flex items-center justify-center mb-10 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-md text-base sm:text-lg font-bold text-white tracking-wide shadow-xl group transition-all bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500"
            >
              <Eye className="size-5 shrink-0" />
              <span>Explore selected work</span>
              <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Appreciation / Trust Guarantees Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-cyan-600 dark:text-cyan-400" />
              <span>Always open for select collaborations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
              <span>5.0 ★ Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="size-4 text-rose-500 fill-rose-500/20" />
              <span>Crafted with passion & precision</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
