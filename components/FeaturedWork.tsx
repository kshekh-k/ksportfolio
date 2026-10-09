"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
export default function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950  relative overflow-hidden transition-colors duration-200" id="work">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
        >
          <div className="max-w-2xl">
            <div className="bg-cyan-50 dark:bg-cyan-950/50 px-3.5 py-1.5 rounded-md inline-flex items-center justify-center gap-2 mb-6">               
              <FolderGit2 className="size-3.5 text-cyan-600" />
              <span className="text-cyan-600 text-sm font-semibold tracking-wide">Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
              Real projects. Measurable{" "}
              <span className="text-gradient-cyan">business results.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Every project below was crafted to solve a specific conversion,
              performance, or brand credibility problem. No filler templates.
            </p>
          </div>

          {/* <div className="hidden items-center">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="btn-primary-fiverr inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white tracking-wide shadow-md group"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div> */}
        </motion.div>

        {/* Projects List with Alternating Layouts */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 text-center p-8 sm:p-10 rounded-xl bg-white dark:bg-slate-850 shadow-1 dark:shadow-1 flex flex-col items-center justify-center gap-6"
        >
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">
              Have a custom project or specific tech stack?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              From quick UI/UX design polish to full-stack Next.js web applications, I
              turn complex product requirements into clean, high-performing reality.
            </p>
          </div>
{/* 
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="btn-primary-fiverr hidden items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white tracking-wide shadow-lg group"
          >
            <span>Discuss your project</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a> */}
       
      </motion.div>
       </div>
    </section>
  );
}
