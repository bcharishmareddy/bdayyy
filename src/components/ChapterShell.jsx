import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ChapterShell({
  id,
  chapterNumber,
  chapterTag,
  title,
  subtitle,
  children,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden z-10 ${className}`}
    >
      {/* Chapter Star & Beam Indicator */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <motion.div
            animate={{
              scale: inView ? [1, 1.25, 1] : 0.8,
              boxShadow: inView
                ? '0 0 25px rgba(185, 167, 255, 0.9)'
                : '0 0 5px rgba(185, 167, 255, 0.2)',
            }}
            transition={{ duration: 1.5, repeat: inView ? Infinity : 0, repeatDelay: 3 }}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-700 ${
              inView
                ? 'bg-lavender border-white shadow-star-glow'
                : 'bg-midnight-deep border-lavender/30 opacity-60'
            }`}
          />
          {inView && (
            <div className="absolute -inset-2 rounded-full bg-lavender/30 blur-md pointer-events-none" />
          )}
        </div>

        {/* Thin connecting starlight beam */}
        <div className="w-[1px] h-8 bg-gradient-to-b from-lavender/40 to-transparent my-1" />

        {/* Chapter Tag Badge */}
        {chapterTag && (
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-lavender-light/70 px-3 py-0.5 rounded-full bg-lavender/10 border border-lavender/20 mt-1">
            {chapterTag}
          </span>
        )}
      </div>

      {/* Chapter Title & Subtitle Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base font-light mt-3 max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Chapter Body Content */}
      <div className="w-full max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
