"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
export default function FeaturedWork() {
  return (
    <section className="py-8 sm:py-12 lg:py-24 relative overflow-hidden transition-colors duration-200" id="work">
      

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-5 xl:mb-10"
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

         
       </div>
    </section>
  );
}
