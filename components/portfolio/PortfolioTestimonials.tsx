"use client";

import React from "react";
import { motion } from "framer-motion";

const FEEDBACK = [
  {
    quote:
      "I had the pleasure of working with Kamran on the front-end development for our dashboard, which we plan to integrate into our app. His expertise, attention to detail, and commitment to delivering high-quality work exceeded my expectations. Outstanding communication throughout.",
    author: "Martin Snyder",
    role: "Product Lead",
  },
  {
    quote:
      "Kamran turned our complex design specifications into a fast, pixel-perfect web application ahead of schedule. Truly high-caliber craftsmanship, attention to micro-states, and clean engineering.",
    author: "Alex Morgan",
    role: "Founder & CEO",
  },
  {
    quote:
      "The website redesign directly boosted our user engagement and usability. The code is clean, well-structured, blazingly fast, and effortless for our team to maintain.",
    author: "Sarah Jenkins",
    role: "Head of Growth",
  },
];

export default function PortfolioTestimonials() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Trusted by teams building modern digital products.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEEDBACK.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="p-7 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl dark:shadow-none hover:border-blue-500/40 dark:hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300 cursor-default"
            >
              <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-sm font-bold text-slate-950 dark:text-white">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
