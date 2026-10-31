import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { content } from '../data/content';

export default function Introduction() {
  const { introduction } = content;

  return (
    <section id="intro" className="relative py-28 sm:py-36 px-4 sm:px-6 z-10">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Subtle Section Star Emblem */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-galaxy-navy/60 border border-galaxy-border flex items-center justify-center text-starlight-blue shadow-glow-soft">
            <Star className="w-6 h-6 fill-starlight-blue/30 text-starlight-blue animate-pulse" />
          </div>
          <div className="w-[1px] h-10 bg-gradient-to-b from-starlight-blue/40 to-transparent my-2" />
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-silver/60">
            A quiet reflection
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            {introduction.heading}
          </h2>
        </motion.div>

        {/* Emotional Content Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="galaxy-card p-8 sm:p-12 rounded-3xl border border-galaxy-border shadow-glass-card space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-4 left-6 text-starlight-blue/10 font-serif text-6xl pointer-events-none select-none">
            “
          </div>

          {introduction.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={`text-base sm:text-xl text-slate-200 leading-relaxed font-light ${
                idx === 1
                  ? 'font-serif italic text-starlight-silver text-lg sm:text-2xl font-normal'
                  : ''
              }`}
            >
              {p}
            </p>
          ))}

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-starlight-blue/60 tracking-widest uppercase border-t border-galaxy-border/30">
            <Sparkles className="w-3.5 h-3.5 text-starlight-lavender" />
            <span>February 2026 — Present</span>
            <Sparkles className="w-3.5 h-3.5 text-starlight-lavender" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
