import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { fireWarmConfetti } from './Confetti';
import { content } from '../data/content';

export default function WishButton({ onWishComplete, hasWished }) {
  const [isWishing, setIsWishing] = useState(false);
  const [showShootingStar, setShowShootingStar] = useState(false);

  const handleMakeWish = () => {
    if (hasWished || isWishing) return;

    setIsWishing(true);
    setShowShootingStar(true);

    // Shooting star arcs across sky for 1.5s
    setTimeout(() => {
      setShowShootingStar(false);
      // Fire 4s confetti
      fireWarmConfetti();

      // Trigger completion callback to light candles & complete constellation
      if (onWishComplete) {
        onWishComplete();
      }
      setIsWishing(false);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* 1.5s Arc Shooting Star Overlay */}
      <AnimatePresence>
        {showShootingStar && (
          <motion.div
            initial={{ x: '-20vw', y: '-10vh', opacity: 0, scale: 0.5 }}
            animate={{
              x: '110vw',
              y: '70vh',
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 1, 0.4],
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-32 h-[3px] bg-gradient-to-r from-transparent via-lavender to-white shadow-star-glow-lg rotate-12 pointer-events-none z-50"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-star-glow" />
          </motion.div>
        )}
      </AnimatePresence>

      {!hasWished ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMakeWish}
          disabled={isWishing}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-lavender/30 via-midnight-surface to-lavender/30 border-2 border-lavender/50 text-white font-medium text-lg tracking-wide shadow-star-glow hover:shadow-star-glow-lg transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 text-starlight-gold animate-spin-slow group-hover:rotate-45 transition-transform" />
          <span>{isWishing ? 'A wish is crossing the sky...' : content.ch8.wishPrompt}</span>
          <div className="absolute inset-0 rounded-full bg-lavender/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lavender/15 border border-lavender/30 text-white font-medium text-sm shadow-star-glow">
            <Heart className="w-4 h-4 text-starlight-pink fill-starlight-pink" />
            <span>{content.ch8.wishedText}</span>
          </div>
          <p className="font-serif italic text-xl sm:text-2xl text-slate-200 max-w-lg mx-auto pt-2">
            "{content.ch8.finalBanner}"
          </p>
        </motion.div>
      )}
    </div>
  );
}
