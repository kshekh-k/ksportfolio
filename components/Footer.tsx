"use client";

import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#050810] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-24 md:pb-16 text-slate-600 dark:text-slate-400 relative transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-slate-200 dark:border-slate-850">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              className="flex items-center gap-3 mb-4 group"
              aria-label="Kamran Shekh Home"
            >
              <div className="size-9 rounded-full bg-linear-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px] shrink-0">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-925 flex items-center justify-center p-1.5 transition-colors">
                  <Image
                    src="/images/logo-icon.svg"
                    alt="Kshekh Icon"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                KSHEKH
              </span>
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-6">
              Senior UI/UX Designer & Full-Stack Web Developer. Designing and building
              high-converting web applications with modern Next.js and Tailwind CSS.
            </p>

             
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary Action / Contact Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Have an upcoming project, redesign, or product idea? Let&apos;s build
              something exceptional together.
            </p>

           
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © 2026 Kamran Shekh (kshekh.com). All rights reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}
