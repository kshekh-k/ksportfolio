"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, AlertCircle, Wrench, Trophy } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const projectUrl = project.websiteUrl || project.liveUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="relative rounded-xl bg-white dark:bg-slate-850 overflow-hidden shadow-1 dark:shadow-1 group hover:border-slate-300 dark:hover:border-slate-700/90 transition-all duration-300"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Project Visual Preview (Browser / Frame) */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -35 : 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-7 ${
            isEven ? "lg:order-1" : "lg:order-2"
          } relative`}
        >
          <div className="relative rounded-xl shadow-xl overflow-hidden group/frame">
            {/* Top Mac-style dot bar */}
            <div className="h-9 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>
              {projectUrl ? (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800/80 max-w-56 truncate"
                  title={`Open ${projectUrl}`}
                >
                  <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <span className="truncate">
                    {projectUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                  <ArrowUpRight className="size-3 shrink-0 opacity-70" />
                </a>
              ) : (
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-50">
                  {project.category}
                </span>
              )}
              <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 font-semibold">
                {project.year}
              </span>
            </div>

            {/* Project Image */}
            <div className="relative aspect-8/5 bg-slate-950 overflow-hidden">
              {projectUrl ? (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group/frame-link cursor-pointer"
                  tabIndex={-1}
                  aria-label={`Open live site for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={560}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame-link:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                </a>
              ) : (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={560}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Editorial Content & Story Format */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 35 : -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-5 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } flex flex-col justify-between`}
        >
          <div>
            {/* Category Upliner */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-cyan-400">
                0{index + 1} / {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
              {projectUrl ? (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-2 group/title"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="size-5 shrink-0 inline-block text-blue-600 dark:text-cyan-400 opacity-80 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                project.title
              )}
            </h3>

            {/* Overview Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Three-Stage Story Format: Challenge -> Work -> Result */}
            <div className="space-y-3.5 mb-8 p-4 rounded-md bg-slate-100 dark:bg-slate-900/80">
              {/* The Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-2.5"
              >
                <AlertCircle className="size-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300 mr-1.5 uppercase tracking-wide">
                    The Challenge:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">{project.challenge}</span>
                </div>
              </motion.div>

              {/* The Work */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-2.5"
              >
                <Wrench className="size-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300 mr-1.5 uppercase tracking-wide">
                    The Work:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">{project.work}</span>
                </div>
              </motion.div>

              {/* The Result */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-2.5"
              >
                <Trophy className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 mr-1.5 uppercase tracking-wide">
                    The Result:
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{project.result}</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer: Tech Stack Tags & Action Link */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 dark:border-slate-800">
              {projectUrl ? (
                <motion.a
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-fiverr inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold text-white tracking-wide shadow-md group/btn"
                >
                  <span>View Live Site</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </motion.a>
              ) : (
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  Case Study
                </span>
              )}

              <span className="text-xs font-mono text-slate-400">
                Production Verified
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
