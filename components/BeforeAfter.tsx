"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="pt-24 lg:pt-32 bg-white dark:bg-slate-925 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
           <div className="bg-cyan-50 dark:bg-cyan-950/50 px-3.5 py-1.5 rounded-md inline-flex items-center justify-center gap-2 mb-6">
            <Sparkles className="size-3.5 text-cyan-600" />
            <span className="text-cyan-600 text-sm font-semibold tracking-wide">Visual Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            From outdated to <span className="text-gradient-brand">outstanding.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Drag the comparison slider below to see how a strategic redesign turns
            cluttered, low-converting layouts into modern, high-performing web apps.
          </p>
        </motion.div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-5xl mx-auto">
          {/* Metrics Comparison Pill Bar */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-rose-50/70 dark:bg-slate-900/80 flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="size-4 text-rose-600 dark:text-rose-400" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300">
                  Legacy Interface
                </span>
              </div>
              <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold">
                3.8s Load · 1.2% Conversion
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-emerald-50/70 dark:bg-slate-900/80 flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Modernized System
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                0.6s Load · 4.8% Conversion
              </span>
            </motion.div>
          </div>

          {/* Comparison Slider Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative rounded-2xl bg-slate-950 border border-slate-300 dark:border-slate-700/80 shadow-xl dark:shadow-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/8.5] select-none cursor-ew-resize group"
          >
            {/* AFTER Layer (Right / Full background) */}
            <div className="static inset-0 w-full h-full">
              <Image
                src="/images/mindorabykamya-after.webp"
                alt="After: High-converting Modern Interface"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-200/80 dark:bg-emerald-950/80 text-emerald-600 text-xs font-bold backdrop-blur-md z-10 flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>AFTER (Engineered For Growth)</span>
              </div>
            </div>

            {/* BEFORE Layer (Left / Clipped) */}
            <div  className="absolute inset-y-0 left-0 overflow-hidden bg-slate-900 border-r-2 border-cyan-400 z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative w-full h-full"
                style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
              >
                <Image
                  src="/images/mindorabykamya-before.webp"
                  alt="Before: Outdated Legacy Interface"
                  fill
                  className="object-cover object-top filter grayscale-60 contrast-90 brightness-90"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-rose-200/80 dark:bg-rose-800/80 text-rose-600 dark:text-rose-200 text-xs font-bold backdrop-blur-md z-20 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-rose-400" />
                  <span>BEFORE (Outdated & Friction Heavy)</span>
                </div>
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div className="absolute inset-0 flex justify-center items-center z-50">
            <div
              className="absolute inset-y-0 flex items-center justify-center -translate-x-1/2 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-0.5 absolute h-full bg-linear-to-b from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              <div className="size-9 relative rounded-full bg-linear-to-tr from-cyan-400 to-blue-600 text-white shadow-xl flex items-center justify-center transition-transform group-hover:scale-110">
                <MoveHorizontal className="size-4" />
              </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Tip: Drag or touch across the image to explore the side-by-side transformation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
