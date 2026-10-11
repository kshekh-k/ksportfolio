"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  Sparkles,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] py-20 lg:pt-32 lg:pb-20 overflow-hidden flex flex-col justify-center bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Grid Pattern Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#0284C7 1px, transparent 1px), linear-gradient(90deg, #0284C7 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column: Value Prop, Headline, CTAs, Credibility */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-cyan-50 dark:bg-cyan-950/50 px-3.5 py-1.5 rounded-md hidden lg:inline-flex items-center justify-center gap-2 mb-6"
            >
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
              </span>
              <span className="text-cyan-600 text-sm font-semibold tracking-wide">
                Available for select projects · Top Rated Designer & Developer
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-3 md:mb-6"
            >
              Websites that turn{" "}
              <span className="text-gradient-brand">Attention</span> into{" "}
              <span className="text-gradient-cyan">Action.</span>
            </motion.h1>

            {/* Supporting Positioning Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mb-8"
            >
              UI/UX Designer & Full-Stack Developer with 15+ years of experience
              engineering fast, high-converting digital products, Next.js web
              apps, and bespoke brand platforms.
            </motion.p>

            {/* CTAs Row */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6 lg:mb-12"
            >
              {/* Visually Secondary Action */}
              <motion.a
                href="#work"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-fiverr inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-base font-semibold text-white tracking-wide shadow-xl group cursor-pointer"
              >
                <span>Explore selected work</span>
                <span className="bg-white/20 rounded-full animate-bounce p-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <ArrowDown className="size-4 shrink-0" />
                </span>
              </motion.a>
            </motion.div>

            {/* Credibility Micro-Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-3 lg:pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full grid grid-cols-3 gap-4 sm:gap-6"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  200+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Projects Delivered
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight flex items-center gap-1">
                  <span>5.0</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star preview-icon size-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                   
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Top Rated Freelancer
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Digital Workspace Visual */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="relative w-full  transition-transform duration-300"
            >
              {/* Main Browser Window Mockup */}
              <div className="relative rounded-xl bg-slate-200 dark:bg-slate-850 shadow-1 dark:shadow-1 overflow-hidden backdrop-blur-xl">
                {/* Browser Title Bar */}
                <div className="h-10 bg-slate-200 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-rose-500/80" />
                    <span className="size-2.5 rounded-full bg-amber-500/80" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-slate-950/60  text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                    <span className="text-blue-600 dark:text-cyan-400">https://</span>
                    <span>kshekh.com/dashboard</span>
                  </div>
                  <div className="size-2.5" />
                </div>

                {/* Primary Showcase Image */}
                <div className="relative bg-slate-950 overflow-hidden group">
                  <Image
                    src="/images/project-2.webp"
                    alt="Digital Product & Web Development Showcase"
                    width={800}
                    height={550}
                    priority
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Bottom Workspace Control Bar */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400  ">
                      <Code2 className="size-4" />
                    </div>
                    <div className="text-xs">
                      <div className="text-slate-900 dark:text-white font-semibold">Production Ready</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Next.js 15 · TypeScript</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Score 99/100</span>
                  </div>
                </div>
              </div>

              {/* Floating UI Widget 1: Conversion Lift Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 },
                  x: { duration: 0.6, delay: 0.4 },
                  scale: { duration: 0.6, delay: 0.4 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-6 -left-6 sm:-left-10 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-3.5 rounded-md shadow-1 z-20 items-center gap-3 hidden sm:flex cursor-pointer transition-all hover:shadow-2xl hover:border-emerald-500/40"
              >
                <div className="size-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Conversion Lift</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">+42% Avg. Inquiries</div>
                </div>
              </motion.div>

              {/* Floating UI Widget 2: Verified Delivery Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 },
                  x: { duration: 0.6, delay: 0.5 },
                  scale: { duration: 0.6, delay: 0.5 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-3.5 rounded-md shadow-1 z-20 flex items-center gap-3 cursor-pointer transition-all hover:shadow-2xl hover:border-blue-500/40"
              >
                <div className="size-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Verified Delivery</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    100% On-Time · 5.0 ★ Quality
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
