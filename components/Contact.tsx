"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight, Send, CheckCircle2, MessageSquare, Mail } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$1k - $3k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#080C16] relative overflow-hidden transition-colors duration-200" id="contact">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Fiverr Callout (Primary conversion) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4">
              <MessageSquare className="size-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-6">
              Have a project <br />
              <span className="text-gradient-cyan">in mind?</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              For the fastest turnaround, secure milestone escrow, and verified order tracking,
              I recommend connecting directly via Fiverr.
            </p>

            {/* DOMINANT PRIMARY CTA */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0F1629] border border-blue-200 dark:border-blue-500/30 w-full mb-8 shadow-sm dark:shadow-xl">
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Fastest Response & Escrow Protection:
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
                Send a project message on Fiverr to get a custom quote within 60 minutes.
              </p>
              <a
                href={SITE_CONFIG.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-fiverr w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-bold text-white tracking-wide shadow-md group"
              >
                <span>Hire me on Fiverr</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <Mail className="size-4 text-blue-600 dark:text-cyan-400" />
              <span>Or email directly:</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white underline underline-offset-4"
              >
                {SITE_CONFIG.email}
              </a>
            </div> */}
          </div>

          {/* Right Column: Secondary Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-slate-50/90 dark:bg-[#0F1629] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Or send a brief message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8">
                Prefer email? Fill out this quick form and I&apos;ll reply within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-center">
                  <CheckCircle2 className="size-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Message Received!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                    Thank you for reaching out. I will review your requirements and
                    get back to you shortly. For immediate response, feel free to
                    ping on Fiverr.
                  </p>
                  <a
                    href={SITE_CONFIG.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-fiverr inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white"
                  >
                    <span>Message on Fiverr instead</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2 uppercase">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-colors shadow-2xs"
                    >
                      <option value="Under $1,000">Under $1,000 (Quick Fix / Audit)</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000 (Core Website / Landing)</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000 (Full-Stack Next.js App)</option>
                      <option value="$5,000+">$5,000+ (Custom Enterprise Product)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2 uppercase">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe what you need built or redesigned..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 transition-colors resize-none shadow-2xs"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="btn-secondary-link w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide cursor-pointer"
                    >
                      <Send className="size-4" />
                      <span>Send Message</span>
                    </button>

                    <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                      No spam. NDA protected on request.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
