import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { content } from '../data/content';

export default function HeroSection({ onExploreClick }) {
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 z-10 overflow-hidden">
      {/* Soft celestial radial backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-radial-gradient from-[#A9C9FF]/12 via-[#C8B9FF]/6 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
      >
        {/* Occasion & Dedication Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-galaxy-navy/60 border border-galaxy-border backdrop-blur-md shadow-glow-soft"
        >
          <Sparkles className="w-3.5 h-3.5 text-starlight-blue animate-pulse" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-silver/90">
            {hero.date} • Dedicated to {hero.dedicatedTo}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-starlight-lavender animate-pulse" />
        </motion.div>

        {/* PRIMARY GREETING */}
        <div className="space-y-1 sm:space-y-2">
          {/* "Happyyyy Bdayyyyy" in exquisite handwritten cursive */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="font-cursive text-4xl sm:text-6xl md:text-7xl text-starlight-lavender text-glow-lavender tracking-wide"
          >
            {hero.greetingTop}
          </motion.h2>

          {/* SARATHUUUU! — Perfectly fitted, grand & professional */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white text-glow-white leading-tight uppercase px-2 select-none"
          >
            {hero.name}
          </motion.h1>
        </div>

        {/* Subtitle: "A Chapter I Never Expected" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-starlight-blue text-glow-blue font-normal"
        >
          "{hero.subtitle}"
        </motion.p>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-slate-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4"
        >
          {hero.supportingLine}
        </motion.p>

        {/* Today is all about youuuuu! */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="pt-2 text-starlight-lavender font-cursive text-2xl sm:text-3xl tracking-wider"
        >
          {hero.highlightTag}
        </motion.div>

        {/* Animated Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="pt-6"
        >
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-galaxy-navy via-galaxy-deep to-galaxy-navy border border-galaxy-border hover:border-starlight-blue text-white font-medium text-base sm:text-lg tracking-wide transition-all duration-300 shadow-glow-soft hover:shadow-glow-lg hover:scale-105 active:scale-95"
          >
            <span>{hero.ctaButton}</span>
            <Heart className="w-4 h-4 text-starlight-lavender fill-starlight-lavender group-hover:scale-125 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-starlight-blue/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
