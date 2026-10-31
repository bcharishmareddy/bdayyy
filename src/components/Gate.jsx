import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Lock } from 'lucide-react';
import Countdown from './Countdown';
import { content } from '../data/content';

export default function Gate({ countdown, isUnlocked, isPreview, onOpenStory }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center z-10">
      {/* Discreet preview badge if tester accessed via ?preview=1 */}
      {isPreview && (
        <div className="fixed top-4 right-4 text-xs font-mono px-3 py-1 rounded-full bg-lavender/10 border border-lavender/30 text-lavender-light flex items-center gap-1.5 backdrop-blur-md z-50">
          <Sparkles className="w-3.5 h-3.5 text-starlight-gold" />
          <span>Preview Mode (?preview=1)</span>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto space-y-6"
      >
        {/* Soft glowing celestial emblem */}
        <div className="relative inline-flex items-center justify-center mb-2">
          <div className="w-16 h-16 rounded-full bg-lavender/10 border border-lavender/30 flex items-center justify-center shadow-star-glow">
            {isUnlocked ? (
              <Sparkles className="w-8 h-8 text-lavender animate-pulse" />
            ) : (
              <Lock className="w-7 h-7 text-lavender/80" />
            )}
          </div>
          <div className="absolute -inset-1 rounded-full bg-lavender/20 blur-xl -z-10" />
        </div>

        {/* Quiet celestial title */}
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
          {content.ch1.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-md mx-auto leading-relaxed">
          {isUnlocked ? content.ch1.subtitle : content.ch1.gateWaitingText}
        </p>

        {/* Live Countdown if locked */}
        {!isUnlocked && (
          <div className="pt-2">
            <Countdown countdown={countdown} />
            <p className="text-xs text-lavender-light/60 tracking-wider uppercase mt-4 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Unlocks November 1, 2026 at Midnight (IST)</span>
            </p>
          </div>
        )}

        {/* Unlock Action Button */}
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6"
          >
            <button
              onClick={onOpenStory}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-lavender/30 to-midnight-surface/80 border border-lavender/40 hover:border-lavender text-white font-medium text-base tracking-wide transition-all duration-300 shadow-star-glow hover:shadow-star-glow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{content.ch1.buttonText}</span>
              <Sparkles className="w-4 h-4 text-starlight-gold group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-lavender/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
