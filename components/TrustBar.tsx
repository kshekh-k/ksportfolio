"use client";

import React from "react";
import { CheckCircle2, Star, Award, Zap, Code, Shield } from "lucide-react";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  { icon: Award, text: "12+ Years Industry Experience" },
  { icon: CheckCircle2, text: "200+ Production Projects Delivered" },
  { icon: Star, text: "Top Rated Freelance Consultant" },
  { icon: Zap, text: "Sub-Second Core Web Vitals" },
  { icon: Code, text: "React 19 · Next.js 15 · TypeScript" },
  { icon: Shield, text: "Milestone-Based Project Delivery" },
  { icon: Star, text: "5.0 ★ Client Satisfaction Record" },
  { icon: Zap, text: "100% On-Time Delivery Guarantee" },
];

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-6 bg-slate-100/90 dark:bg-[#080D18] border-y border-slate-200 dark:border-slate-800/80 overflow-hidden select-none transition-colors duration-200"
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-100 dark:from-[#080D18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-100 dark:from-[#080D18] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Ticker */}
      <div className="flex w-max items-center animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] gap-10">
        {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 shrink-0"
            >
              <div className="p-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                <Icon className="size-3.5" />
              </div>
              <span className="tracking-wide">{item.text}</span>
              <span className="text-slate-300 dark:text-slate-700 ml-4 font-bold">·</span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
