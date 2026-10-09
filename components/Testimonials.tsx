"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_ROW_1, TESTIMONIALS_ROW_2, Testimonial } from "@/data/testimonials";
import { Star, ShieldCheck, MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-95 sm:w-110 shrink-0 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-850 transition-colors duration-300 flex flex-col justify-between shadow-1 relative group overflow-hidden"
    >
      {/* Subtle Ambient Card Sheen */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-slate-50/60 dark:from-white/3 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Rating and Verified Badge Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center text-amber-500 dark:text-amber-400">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 ml-1">
              {item.ratingScore}
            </span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/50 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs">
            <ShieldCheck className="size-3" />
            <span>{item.badge || "Verified Buyer"}</span>
          </div>
        </div>

        {/* Quote Body */}
        <blockquote className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-4 mb-6 font-normal">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author and Project Meta */}
      <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-10 rounded-full overflow-hidden bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0  ">
            {item.avatarUrl ? (
              <Image
                src={item.avatarUrl}
                alt={item.author}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            ) : (
              item.author.charAt(0)
            )}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">
              {item.author}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {item.role} · {item.location}
            </div>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-md bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 text-[11px] font-mono text-blue-600 dark:text-cyan-400 font-medium truncate max-w-36 shrink-0 shadow-2xs">
          {item.projectType}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-slate-925 relative overflow-hidden transition-colors duration-200" id="testimonials">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200/60 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-md inline-flex items-center justify-center gap-2 mb-6">
            <MessageSquareQuote className="size-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">Client Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Trusted by clients{" "}
            <span className="text-gradient-brand">worldwide.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Real feedback from verified enterprise teams, founders, and agency owners.
            Over 200+ five-star milestone deliveries.
          </p>
        </motion.div>
      </div>

      {/* Infinite Dual Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 relative select-none"
      >
        {/* Row 1: Left to Right */}
        <div className="flex w-max items-center animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] gap-6">
          {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map(
            (item, index) => (
              <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
            )
          )}
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-max items-center animate-[marquee-reverse_45s_linear_infinite] hover:[animation-play-state:paused] gap-6">
          {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map(
            (item, index) => (
              <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
            )
          )}
        </div>

        {/* Gradient edge faders */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-linear-to-r from-white dark:from-slate-925 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-linear-to-l from-white dark:from-slate-925 to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  );
}
