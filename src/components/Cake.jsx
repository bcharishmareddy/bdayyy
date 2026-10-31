import React from 'react';
import { motion } from 'framer-motion';

export default function Cake({ candlesLit = false }) {
  const candles = [-36, -18, 0, 18, 36];

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none">
      {/* Ambient glow around cake when lit */}
      <motion.div
        animate={{
          opacity: candlesLit ? 0.7 : 0,
          scale: candlesLit ? 1.15 : 0.8,
        }}
        transition={{ duration: 1.2 }}
        className="absolute -inset-8 rounded-full bg-amber-400/15 blur-3xl pointer-events-none -z-10"
      />

      {/* Candles Tier */}
      <div className="relative flex justify-center items-end h-16 w-44 mb-[-2px] z-20">
        {candles.map((offset, i) => (
          <div
            key={i}
            style={{ transform: `translateX(${offset}px)` }}
            className="absolute bottom-0 flex flex-col items-center"
          >
            {/* Candle Flame */}
            <motion.div
              initial={false}
              animate={{
                opacity: candlesLit ? 1 : 0,
                scale: candlesLit ? [0.95, 1.1, 0.95] : 0,
                y: candlesLit ? 0 : 4,
              }}
              transition={{
                duration: 0.6,
                repeat: candlesLit ? Infinity : 0,
                repeatDelay: 0.1 * i,
              }}
              className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white shadow-candle-glow animate-flame origin-bottom mb-0.5"
            />

            {/* Candle Wick */}
            <div className="w-[1.5px] h-2 bg-slate-400 mb-[-1px]" />

            {/* Candle Body */}
            <div className="w-2.5 h-10 rounded-t-sm bg-gradient-to-r from-lavender-light via-white to-lavender-dim border-x border-lavender/40 shadow-sm" />
          </div>
        ))}
      </div>

      {/* Cake Top Tier */}
      <div className="relative w-44 h-16 rounded-t-2xl bg-gradient-to-b from-[#1C245C] to-[#141B4D] border-t-2 border-x-2 border-lavender/30 flex items-center justify-center shadow-lg z-10">
        {/* Frosting Scallops */}
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-3 rounded-b-full bg-lavender/25 border-b border-lavender/30"
            />
          ))}
        </div>
        {/* Subtle decorative gold starlight pearls */}
        <div className="flex gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-starlight-gold/80 shadow-star-glow" />
          <span className="w-1.5 h-1.5 rounded-full bg-starlight-pink/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-starlight-blue/80" />
        </div>
      </div>

      {/* Cake Middle Tier */}
      <div className="relative w-56 h-18 rounded-t-xl bg-gradient-to-b from-[#161D52] to-[#0E143B] border-t-2 border-x-2 border-lavender/25 flex items-center justify-center shadow-xl z-0">
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-3 rounded-b-full bg-lavender/20 border-b border-lavender/30"
            />
          ))}
        </div>
        <p className="font-serif italic text-lavender-light/60 text-sm tracking-widest uppercase">
          ✦ Sarath ✦
        </p>
      </div>

      {/* Cake Base Stand */}
      <div className="w-64 h-3.5 rounded-full bg-gradient-to-r from-lavender/30 via-lavender/60 to-lavender/30 border border-lavender/40 shadow-glass" />
      <div className="w-32 h-2 rounded-b bg-lavender/20 mx-auto" />
    </div>
  );
}
