"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ArrowUpRight,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FiverrBridge() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-[#070B14] relative overflow-hidden transition-colors duration-200">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-white dark:bg-gradient-to-b dark:from-[#0F1629] dark:to-[#0A0F1D] border border-slate-200 dark:border-slate-700/80 shadow-xl dark:shadow-2xl overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide">
                <ShieldCheck className="size-4" />
                <span>Verified Fiverr Partner & Top Rated Freelancer</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Lock className="size-3.5 text-blue-600 dark:text-cyan-400" />
                <span>100% Escrow Payment Protection</span>
              </div>
            </div>

            {/* Profile & Trust Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* Left: Avatar + Bio summary */}
              <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative size-20 sm:size-24 rounded-2xl overflow-hidden border-2 border-blue-400/40 dark:border-cyan-400/40 p-1 bg-slate-100 dark:bg-slate-900 shadow-lg shrink-0">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold">
                    <Image
                      src="/images/logo-icon.svg"
                      alt="Kamran Shekh"
                      width={64}
                      height={64}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                    <CheckCircle2 className="size-3 text-white" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Kamran Shekh
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-cyan-300 text-xs font-mono font-bold border border-blue-200 dark:border-transparent">
                      PRO
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    UI/UX Designer & Senior Full-Stack Next.js Developer
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-bold">
                      <Star className="size-4 fill-current" />
                      <span>5.0 (200+ Reviews)</span>
                    </div>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                      <Clock className="size-3.5 text-blue-600 dark:text-cyan-400" />
                      <span>Avg. Response &lt; 1 Hour</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Key Stats */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="text-center p-2">
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">On-Time Delivery</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">200+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Completed Orders</div>
                </div>
              </div>
            </div>

            {/* Core Pitch Copy */}
            <div className="mb-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-3">
                Ready to build something better?
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Let&apos;s turn your idea, redesign, or web application into a fast,
                polished digital experience. Order directly on Fiverr with milestones,
                transparent pricing, and escrow payment protection.
              </p>
            </div>

            {/* Guaranteed Deliverables Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="size-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>Milestone-based approvals</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="size-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>Direct daily video walkthroughs</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="size-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>100% Escrow security guarantee</span>
              </div>
            </div>

            {/* PRIMARY DOMINANT FIVERR CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <a
                href={SITE_CONFIG.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-fiverr w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-base font-bold text-white tracking-wide shadow-xl group"
              >
                <span>Hire me on Fiverr</span>
                <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <ArrowUpRight className="size-4 shrink-0" />
                </span>
              </a>

              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center sm:text-right">
                Orders handled safely via official Fiverr platform
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
