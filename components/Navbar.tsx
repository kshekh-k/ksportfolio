"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs dark:shadow-lg dark:shadow-black/20 ${
          scrolled
            ? "py-2 bg-white/85 dark:bg-slate-925/85 backdrop-blur-md"
            : "py-2 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="Kamran Shekh Portfolio Home"
            >
              <Image src="/images/kshekh-logo.svg" alt="Logo" width={100} height={100} className="w-28 lg:w-40 h-auto" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-sm transition-colors">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Theme Toggle + Primary CTA + Mobile Menu Button */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Theme Switcher Toggle */}
              <ThemeToggle />

              {/* Primary Contact CTA */}
              {/* <motion.a
                href={`mailto:${SITE_CONFIG.email}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary-fiverr hidden items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold text-white tracking-wide group"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a> */}

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center size-10 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16.25 z-40 bg-white/95 dark:bg-slate-925/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-850/80 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* <div className="pt-3 border-t border-slate-200 dark:border-slate-800 hidden">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary-fiverr w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white tracking-wide"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="size-4 shrink-0" />
                </a>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
