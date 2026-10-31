import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart, Sparkles } from 'lucide-react';
import Constellation from '../components/Constellation';
import { content } from '../data/content';

export default function Ch9Final({ onReplayStory }) {
  const { title, subtitle, lines, closingWish, replayPrompt } = content.ch9;

  return (
    <section
      id="ch9"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden z-10"
    >
      <div className="max-w-3xl mx-auto space-y-12 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-lavender-light/70 block">
            The Constellation Is Complete
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            {title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-md mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* The Animated "Us" Constellation */}
        <Constellation isAnimated={true} />

        {/* Final Poetic Lines */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-6 pt-4 max-w-xl mx-auto"
        >
          {lines.map((line, idx) => (
            <p
              key={idx}
              className="font-serif italic text-xl sm:text-2xl text-slate-200 leading-relaxed font-light"
            >
              "{line}"
            </p>
          ))}

          {/* Closing Wish */}
          <div className="pt-6">
            <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-starlight-gold via-white to-starlight-pink drop-shadow-star-glow">
              {closingWish}
            </h3>
            <p className="font-handwriting text-2xl text-lavender-light mt-3">
              — {content.creatorLabel}
            </p>
          </div>

          {/* Replay Link */}
          <div className="pt-8">
            <button
              onClick={onReplayStory}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-lavender/25 hover:border-lavender text-slate-300 hover:text-white text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 hover:scale-105"
            >
              <RotateCcw className="w-3.5 h-3.5 text-lavender" />
              <span>{replayPrompt}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
