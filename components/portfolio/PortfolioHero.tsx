"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-[#070B14] transition-colors duration-200"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/8 dark:bg-blue-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Copy Block */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-mono font-medium uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-4"
          >
            Portfolio & Selected Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.08] mb-4"
          >
            Kamran Shekh
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight mb-6"
          >
            UI/UX Designer &amp; Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mb-6"
          >
            Designing and building thoughtful digital experiences, from interface
            design and frontend architecture to complete, production-ready web
            applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 border-l-2 border-blue-600 dark:border-cyan-400 pl-3"
          >
            <span>12+ years creating digital products, websites, and web applications.</span>
          </motion.div>
        </div>

        {/* HERO VISUAL: Large Multi-Layered Portfolio Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          {/* Main Primary Browser Showcase */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden">
            {/* Minimal Window Header */}
            <div className="h-9 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Product Interfaces · React · Next.js · TypeScript
              </span>
              <div className="size-2.5" />
            </div>

            {/* Main Visual Image */}
            <div className="relative aspect-[16/9] sm:aspect-[16/8] bg-slate-950 overflow-hidden">
              <Image
                src="/images/hero-showcase.jpg"
                alt="Product Interface Design & Web Application Preview"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Overlapping Floating UI Card 1 (Bottom Left Preview) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.5 },
              x: { duration: 0.7, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-44 sm:w-64 rounded-xl bg-white/95 dark:bg-slate-850/95 border border-slate-200 dark:border-slate-700/80 shadow-2xl p-2.5 sm:p-3 backdrop-blur-md hidden sm:block cursor-pointer transition-shadow hover:shadow-cyan-500/10 hover:border-blue-500/40"
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-900 mb-2">
              <Image
                src="/images/tour.webp"
                alt="Tour & Travel Platform Preview"
                fill
                className="object-cover object-top"
                sizes="250px"
              />
            </div>
            <div className="text-[11px] font-semibold text-slate-900 dark:text-white truncate">
              Tour &amp; Travel Engine
            </div>
            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Next.js · Headless UI
            </div>
          </motion.div>

          {/* Overlapping Floating UI Card 2 (Top Right Preview) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.55 },
              x: { duration: 0.7, delay: 0.55 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 w-48 sm:w-64 rounded-xl bg-white/95 dark:bg-slate-850/95 border border-slate-200 dark:border-slate-700/80 shadow-2xl p-2.5 sm:p-3 backdrop-blur-md hidden md:block cursor-pointer transition-shadow hover:shadow-indigo-500/10 hover:border-cyan-500/40"
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-900 mb-2">
              <Image
                src="/images/kid-entertainment.png"
                alt="Kid Entertainment Application Preview"
                fill
                className="object-cover object-top"
                sizes="250px"
              />
            </div>
            <div className="text-[11px] font-semibold text-slate-900 dark:text-white truncate">
              Interactive Web App
            </div>
            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Statamic · Laravel · Tailwind
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
