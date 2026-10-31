import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { content } from '../data/content';

export default function BirthdayCelebration() {
  const { celebration } = content;
  const [hasWished, setHasWished] = useState(false);
  const [isWishing, setIsWishing] = useState(false);
  const [showBlastEffect, setShowBlastEffect] = useState(false);

  // BLASTING CELEBRATION FUNCTION
  const triggerBlastingCelebration = () => {
    setIsWishing(true);
    setShowBlastEffect(true);

    // Multi-color & Metallic Celebration Palette
    const colors = ['#A9C9FF', '#C8B9FF', '#FFE3A8', '#FF6B8B', '#00F0FF', '#FFFFFF', '#FFD700'];

    // 1. Immediate Center Starburst
    confetti({
      particleCount: 160,
      spread: 120,
      origin: { y: 0.6 },
      colors,
      startVelocity: 45,
      gravity: 0.8,
      scalar: 1.2,
    });

    // 2. High-intensity Multi-Cannon Continuous Fireworks (6 seconds duration)
    const duration = 6500;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 40 * (timeLeft / duration);

      // Left blast
      confetti({
        particleCount: Math.floor(particleCount * 0.7),
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.75 },
        colors,
        startVelocity: 55,
      });

      // Right blast
      confetti({
        particleCount: Math.floor(particleCount * 0.7),
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.75 },
        colors,
        startVelocity: 55,
      });

      // Sky fireworks burst at random coordinates
      confetti({
        particleCount: 30,
        spread: 90,
        origin: {
          x: Math.random() * 0.6 + 0.2,
          y: Math.random() * 0.4 + 0.2,
        },
        colors,
        startVelocity: 35,
        gravity: 0.9,
      });
    }, 280);

    // Light up candles & set status
    setTimeout(() => {
      setHasWished(true);
      setIsWishing(false);
    }, 1200);

    setTimeout(() => {
      setShowBlastEffect(false);
    }, 7000);
  };

  return (
    <section id="celebration" className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-12 z-10 text-center overflow-hidden">
      {/* Visual Shockwave Flash when wishing */}
      <AnimatePresence>
        {showBlastEffect && (
          <motion.div
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-gradient-to-r from-starlight-blue/30 via-starlight-lavender/40 to-white/30 pointer-events-none z-50"
          />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-galaxy-navy/80 border border-galaxy-border text-starlight-blue text-xs font-mono tracking-widest uppercase shadow-glow-soft">
            <PartyPopper className="w-4 h-4 text-starlight-lavender animate-bounce" />
            <span>Today, The Universe Celebrates You</span>
            <PartyPopper className="w-4 h-4 text-starlight-lavender animate-bounce" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white text-glow-white uppercase">
            {celebration.birthdayTitle}
          </h2>

          <p className="text-slate-300 text-base sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            {celebration.subtitle}
          </p>
        </motion.div>

        {/* Animated Celebration Birthday Cake */}
        <div className="flex justify-center py-4">
          <BlastingCake candlesLit={hasWished} isBlasting={showBlastEffect} />
        </div>

        {/* Interactive BLASTING Make a Wish Button */}
        <div className="flex flex-col items-center">
          {!hasWished ? (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={triggerBlastingCelebration}
              disabled={isWishing}
              className="group relative inline-flex items-center gap-3.5 px-10 py-5 rounded-full bg-gradient-to-r from-[#0F2366] via-[#1A338F] to-[#0F2366] border-2 border-starlight-blue hover:border-white text-white font-semibold text-lg sm:text-xl tracking-wider shadow-glow-soft hover:shadow-glow-lg transition-all duration-300"
            >
              <Sparkles className="w-6 h-6 text-starlight-blue animate-spin-slow group-hover:rotate-90 transition-transform" />
              <span>{isWishing ? 'BLASTING CELEBRATION! 🎆' : 'Make a Wish 🎂✨'}</span>
              <div className="absolute inset-0 rounded-full bg-starlight-blue/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="galaxy-card p-8 sm:p-12 rounded-3xl border-2 border-starlight-blue/60 shadow-glow-lg max-w-2xl mx-auto space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-galaxy-navy border border-galaxy-border text-starlight-lavender text-xs font-mono shadow-glow-soft">
                <Heart className="w-4 h-4 fill-starlight-lavender text-starlight-lavender" />
                <span>WISH SENT TO THE STARS ✨</span>
              </div>
              <p className="font-serif italic text-2xl sm:text-4xl text-white font-medium leading-snug">
                "{celebration.wishGrantedMessage}"
              </p>
              <p className="font-cursive text-2xl sm:text-3xl text-starlight-lavender pt-2">
                May all your wishes turn into reality, Sarathuu! ❤️
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// Sophisticated Celestial Blasting Cake
function BlastingCake({ candlesLit = false, isBlasting = false }) {
  const candleOffsets = [-36, -18, 0, 18, 36];

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-8">
      {/* Background radial blast aura */}
      <motion.div
        animate={{
          opacity: candlesLit ? [0.6, 1, 0.6] : 0.2,
          scale: candlesLit ? [1, 1.25, 1] : 0.8,
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -inset-10 rounded-full bg-starlight-blue/20 blur-3xl pointer-events-none -z-10"
      />

      {/* Candles Tier */}
      <div className="relative flex justify-center items-end h-16 w-48 mb-[-2px] z-20">
        {candleOffsets.map((offset, i) => (
          <div
            key={i}
            style={{ transform: `translateX(${offset}px)` }}
            className="absolute bottom-0 flex flex-col items-center"
          >
            {/* Candle Flame with glowing flicker */}
            <motion.div
              initial={false}
              animate={{
                opacity: candlesLit ? 1 : 0.25,
                scale: candlesLit ? (isBlasting ? [1.2, 1.6, 1.2] : [0.95, 1.15, 0.95]) : 0.5,
              }}
              transition={{
                duration: 0.5,
                repeat: candlesLit ? Infinity : 0,
                repeatDelay: 0.08 * i,
              }}
              className={`w-4 h-7 rounded-full bg-gradient-to-t from-starlight-blue via-starlight-lavender to-white animate-flame origin-bottom mb-0.5 ${
                candlesLit ? 'shadow-glow-star drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]' : ''
              }`}
            />

            {/* Candle Wick */}
            <div className="w-[1.5px] h-2 bg-slate-400 mb-[-1px]" />

            {/* Candle Body */}
            <div className="w-2.5 h-11 rounded-t-sm bg-gradient-to-r from-starlight-lavender via-white to-starlight-blue border-x border-galaxy-border shadow-sm" />
          </div>
        ))}
      </div>

      {/* Top Tier */}
      <div className="relative w-48 h-18 rounded-t-2xl bg-gradient-to-b from-galaxy-navy to-galaxy-deep border-t-2 border-x-2 border-starlight-blue/50 flex items-center justify-center shadow-lg z-10">
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-3.5 rounded-b-full bg-starlight-blue/30 border-b border-starlight-blue/40"
            />
          ))}
        </div>
        <span className="font-serif italic text-starlight-silver font-semibold text-xs tracking-widest uppercase">
          ✦ Nov 1, 2026 ✦
        </span>
      </div>

      {/* Middle Tier */}
      <div className="relative w-64 h-20 rounded-t-xl bg-gradient-to-b from-[#091538] to-[#040B1E] border-t-2 border-x-2 border-starlight-lavender/50 flex items-center justify-center shadow-2xl z-0">
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-3.5 rounded-b-full bg-starlight-lavender/25 border-b border-starlight-lavender/40"
            />
          ))}
        </div>
        <p className="font-serif italic text-starlight-lavender text-base tracking-widest uppercase font-bold text-glow-lavender">
          SARATHUU
        </p>
      </div>

      {/* Base Stand with Glow */}
      <div className="w-72 h-4 rounded-full bg-gradient-to-r from-starlight-blue/40 via-starlight-lavender/60 to-starlight-blue/40 border border-galaxy-border shadow-glow-soft" />
    </div>
  );
}
