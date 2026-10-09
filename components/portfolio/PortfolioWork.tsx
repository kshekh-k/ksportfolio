"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ProjectCardLarge({ project }: { project: Project }) {
  const projectUrl = project.websiteUrl || project.liveUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-white dark:bg-[#0F1629] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300"
    >
      {/* Visual Window Mockup */}
      <div className="relative aspect-[16/10] sm:aspect-[16/8.5] bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative cursor-pointer"
            tabIndex={-1}
            aria-label={`Open live site for ${project.title}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </a>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        )}
      </div>

      {/* Meta & Description */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight mb-3">
            {projectUrl ? (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors inline-flex items-baseline gap-2 group/title"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="size-5 shrink-0 text-blue-600 dark:text-cyan-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech tags & Live Link */}
        <div className="flex flex-col md:items-end gap-3 shrink-0">
          <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline pt-1"
            >
              <span>View live website</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCardTwoColumn({ project, isLeft = false }: { project: Project; isLeft?: boolean }) {
  const projectUrl = project.websiteUrl || project.liveUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, x: isLeft ? -25 : 25 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: isLeft ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-white dark:bg-[#0F1629] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Visual Preview */}
        <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative cursor-pointer"
              tabIndex={-1}
              aria-label={`Open live site for ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </a>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          )}
        </div>

        {/* Details */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight mb-2.5">
            {projectUrl ? (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors inline-flex items-baseline gap-2 group/title"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="size-4 shrink-0 text-blue-600 dark:text-cyan-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline pt-4 shrink-0"
          >
            <span>Live site</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function PortfolioWork() {
  // 6 Curated projects
  const p1 = PROJECTS[0]; // Large featured
  const p2 = PROJECTS[1]; // Column A
  const p3 = PROJECTS[2]; // Column B
  const p4 = PROJECTS[3]; // Large visual
  const p5 = PROJECTS[4]; // Column C
  const p6 = PROJECTS[5]; // Column D

  return (
    <section id="work" className="py-24 sm:py-32 bg-white dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Crafted for clarity, speed, and real-world scale.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A selection of websites, products, and digital experiences I&apos;ve designed
            and developed across multi-device journey maps.
          </p>
        </motion.div>

        {/* Mixed Editorial Layout */}
        <div className="space-y-10 sm:space-y-12">
          {/* Project 1: Large Featured Showcase */}
          {p1 && <ProjectCardLarge project={p1} />}

          {/* Project 2 & 3: Two-Column Editorial Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {p2 && <ProjectCardTwoColumn project={p2} isLeft={true} />}
            {p3 && <ProjectCardTwoColumn project={p3} isLeft={false} />}
          </div>

          {/* Project 4: Large Showcase */}
          {p4 && <ProjectCardLarge project={p4} />}

          {/* Project 5 & 6: Two-Column Editorial Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {p5 && <ProjectCardTwoColumn project={p5} isLeft={true} />}
            {p6 && <ProjectCardTwoColumn project={p6} isLeft={false} />}
          </div>
        </div>
      </div>
    </section>
  );
}
