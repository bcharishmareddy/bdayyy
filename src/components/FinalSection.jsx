import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp, Star, Gift } from 'lucide-react';
import { content } from '../data/content';

export default function FinalSection({ onScrollToTop }) {
  const { final } = content;

  const wishes = [
    "May this new year bring you boundless happiness, peace of mind, and the sweetest smiles.",
    "May every dream and ambition you carry in your heart find its path to extraordinary success.",
    "May you always be surrounded by people who cherish your gentle soul and stand by you as faithfully as you stand by others.",
    "May you always remember how much you are appreciated, how much your presence matters, and how lucky we are to have you."
  ];

  return (
    <section id="final-wishes" className="relative min-h-screen py-32 sm:py-40 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center z-10 overflow-hidden">
      {/* Background radial starlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial-gradient from-galaxy-navy/50 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Emblem Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-galaxy-navy/80 border border-galaxy-border text-starlight-blue text-xs font-mono tracking-widest uppercase shadow-glow-soft">
          <Gift className="w-4 h-4 text-starlight-lavender animate-pulse" />
          <span>The Final Birthday Blessings & Wishes</span>
          <Gift className="w-4 h-4 text-starlight-lavender animate-pulse" />
        </div>

        {/* Emotional Unexpected Gift Lines */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="font-serif italic text-2xl sm:text-4xl text-slate-200 font-light leading-relaxed">
            "{final.line1}"
          </p>
          <p className="font-serif italic text-3xl sm:text-5xl text-starlight-blue text-glow-blue font-normal leading-relaxed">
            "{final.line2}"
          </p>
        </div>

        {/* Four Heartfelt Wishes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-4 text-left">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="galaxy-card p-6 sm:p-7 rounded-2xl border border-galaxy-border hover:border-starlight-blue/40 shadow-glass-card space-y-2.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-starlight-lavender text-xs font-mono">
                <Star className="w-3.5 h-3.5 fill-starlight-lavender/40" />
                <span>Wish 0{index + 1}</span>
              </div>
              <p className="font-serif text-slate-100 text-base sm:text-lg leading-relaxed">
                "{wish}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Grand Birthday Greeting */}
        <div className="pt-10 space-y-3">
          <h2 className="font-cursive text-4xl sm:text-6xl md:text-7xl text-starlight-lavender text-glow-lavender">
            Happyyyy Bdayyyyy
          </h2>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white text-glow-white uppercase">
            SARATHUUUUUUU! ❤️
          </h1>
          <p className="font-cursive text-2xl sm:text-3xl text-starlight-silver pt-2">
            Always by your side, through every chapter ahead.
          </p>
        </div>

        {/* Replay Button */}
        <div className="pt-8">
          <button
            onClick={onScrollToTop}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full galaxy-card border border-galaxy-border hover:border-starlight-blue text-starlight-silver hover:text-white text-sm font-mono tracking-wider transition-all duration-300 hover:scale-105 shadow-glow-soft"
          >
            <ArrowUp className="w-4 h-4 text-starlight-blue group-hover:-translate-y-1 transition-transform" />
            <span>Experience the story again from top</span>
          </button>
        </div>

        {/* Small Footer */}
        <div className="pt-14 border-t border-galaxy-border/30 text-xs font-mono text-starlight-silver/50 tracking-widest uppercase">
          {final.footer}
        </div>
      </motion.div>
    </section>
  );
}
