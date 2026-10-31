import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { content } from '../data/content';

export default function Ch1Opening({ onStartStory }) {
  return (
    <section
      id="ch1"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto space-y-8"
      >
        {/* Luminous Star Node */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-lavender/10 border border-lavender/30 flex items-center justify-center shadow-star-glow">
            <Sparkles className="w-7 h-7 text-lavender animate-pulse" />
          </div>
          <div className="absolute -inset-2 rounded-full bg-lavender/25 blur-xl -z-10" />
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-lavender-light/70 block">
            Dedicated to {content.friendName}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            {content.ch1.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 font-normal max-w-lg mx-auto leading-relaxed pt-2">
            "{content.ch1.subtitle}"
          </p>
        </div>

        {/* Glowing Button to trigger transition to Chapter 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4"
        >
          <button
            onClick={onStartStory}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-lavender/20 via-midnight-surface to-lavender/30 border border-lavender/40 hover:border-lavender text-white font-medium text-base sm:text-lg tracking-wide transition-all duration-300 shadow-star-glow hover:shadow-star-glow-lg hover:scale-105 active:scale-95"
          >
            <span>{content.ch1.buttonText}</span>
            <Sparkles className="w-4 h-4 text-starlight-gold group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-lavender/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </button>
        </motion.div>

        {/* Quiet footnote */}
        <p className="text-[11px] font-mono text-lavender-light/40 tracking-widest uppercase pt-6">
          Friendship Began {content.friendshipStartDate} • Birthday {content.birthdayDate}
        </p>
      </motion.div>
    </section>
  );
}
