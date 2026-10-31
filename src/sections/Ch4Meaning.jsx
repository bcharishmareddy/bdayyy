import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { content } from '../data/content';

export default function Ch4Meaning() {
  const { chapterTag, title, subtitle, sentences } = content.ch4;

  return (
    <section id="ch4" className="relative py-24 px-4 sm:px-6 z-10">
      {/* Chapter Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
        <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-lavender-light/70 px-3 py-0.5 rounded-full bg-lavender/10 border border-lavender/20 inline-block mb-3">
          {chapterTag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
          {title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-light mt-3 max-w-lg mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Sentences Presented ONE AT A TIME, each taking roughly a full viewport */}
      <div className="space-y-32 sm:space-y-48 max-w-3xl mx-auto">
        {sentences.map((sentence, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[50vh] flex flex-col items-center justify-center text-center p-6 sm:p-12 rounded-3xl glass-card border border-lavender/25 shadow-glass relative overflow-hidden group"
          >
            {/* Illuminated Chapter Star for this specific truth */}
            <div className="mb-6 relative">
              <div className="w-10 h-10 rounded-full bg-lavender/15 border border-lavender/30 flex items-center justify-center text-lavender shadow-star-glow group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-5 h-5 text-starlight-gold" />
              </div>
              <div className="absolute -inset-3 rounded-full bg-lavender/20 blur-lg pointer-events-none -z-10" />
            </div>

            {/* Sentence Number Badge */}
            <span className="text-[11px] font-mono tracking-widest text-lavender-light/50 uppercase mb-4">
              Truth 0{index + 1} of 05
            </span>

            {/* Sentence Content */}
            <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-white font-normal leading-snug max-w-2xl mx-auto">
              "{sentence}"
            </p>

            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-lavender-light/40">
              <Heart className="w-3.5 h-3.5 text-starlight-pink/60 fill-starlight-pink/40" />
              <span>For Sarath</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
