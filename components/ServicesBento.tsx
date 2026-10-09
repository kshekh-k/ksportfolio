"use client";

import React from "react";
import { SERVICES } from "@/data/services";
import {
  Layout,
  Code2,
  Layers,
  Sparkles,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const ICON_MAP = {
  Layout,
  Code2,
  Layers,
  Sparkles,
  Zap,
  Globe,
};

export default function ServicesBento() {
  return (
    <section className="py-24 lg:py-32 bg-slate-100 dark:bg-slate-950  relative overflow-hidden transition-colors duration-200" id="services">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
             <div className="bg-cyan-50 dark:bg-cyan-950/50 px-3.5 py-1.5 rounded-md inline-flex items-center justify-center gap-2 mb-6">
               <span className="text-cyan-600 text-sm font-semibold tracking-wide">Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
              Services engineered around{" "}
              <span className="text-gradient-brand">your business growth.</span>
            </h2>
          </div>

          {/* <div className="flex items-center">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors group"
            >
              <span>Discuss your requirements</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div> */}
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="max-w-full overflow-x-auto lg:overflow-visible pb-5 lg:pb-0">
          <div className="lg:grid lg:grid-cols-12 gap-6 items-stretch flex">
            {SERVICES.map((service, index) => {
              const IconComponent =
                ICON_MAP[service.icon as keyof typeof ICON_MAP] || Layout;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 35, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.65,
                    delay: (index % 4) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }}
                  className={`${service.bentoSpan} min-w-96 lg:min-w-[imherit] relative rounded-xl p-7 sm:p-8 bg-slate-50/80 dark:bg-slate-850 shadow-1 dark:shadow-1 transition-all duration-300 group flex flex-col justify-between`}
                >
                  {/* Background Subtle Gradient Highlight */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/4 via-transparent to-transparent pointer-events-none" />

                  <div>
                    {/* Top Bar: Number + Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                        {service.number} / SERVICE
                      </span>
                      <div className="size-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-xs group-hover:rotate-6">
                        <IconComponent className="size-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Tags & Micro Highlight */}
                  <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-400 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex items-center gap-1">
                      <span>Milestone Delivery</span>
                      <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
