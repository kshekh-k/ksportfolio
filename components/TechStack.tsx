"use client";

import React from "react";
import { Cpu, Terminal, Database, Sparkles, Layout } from "lucide-react";
import { motion } from "framer-motion";

const TECH_CATEGORIES = [
  {
    category: "Frontend",
    icon: Layout,
    accent: "text-blue-600 dark:text-cyan-400",
    skills: ["React 19", "Next.js 15+", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & APIs",
    icon: Terminal,
    accent: "text-blue-600 dark:text-blue-400",
    skills: ["Node.js", "Laravel", "Python", "REST APIs", "Edge Functions"],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    accent: "text-sky-600 dark:text-sky-400",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Vercel"],
  },
  {
    category: "CMS & Platforms",
    icon: Cpu,
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: ["WordPress", "ACF Pro", "Statamic", "Shopify", "Headless CMS"],
  },
  {
    category: "Design & Systems",
    icon: Sparkles,
    accent: "text-indigo-600 dark:text-indigo-400",
    skills: ["Figma", "Design Tokens", "Wireframing", "Adobe XD", "Design Systems"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 lg:py-28 bg-slate-50 dark:bg-[#070B14] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <span>Core Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Curated, modern{" "}
            <span className="text-gradient-cyan">technology stack.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            I choose fast, maintainable, production-tested tools that guarantee
            long-term scalability without technical debt.
          </p>
        </div>

        {/* Tech Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-cyan-400">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-950 dark:hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
