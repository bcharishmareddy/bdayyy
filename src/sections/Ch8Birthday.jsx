import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ChapterShell from '../components/ChapterShell';
import Cake from '../components/Cake';
import WishButton from '../components/WishButton';
import { content } from '../data/content';

export default function Ch8Birthday({ onWishGranted, hasWished }) {
  const { chapterTag, title, subtitle, bannerHeading } = content.ch8;
  const [candlesLit, setCandlesLit] = useState(hasWished);

  const handleWishComplete = () => {
    setCandlesLit(true);
    if (onWishGranted) {
      onWishGranted();
    }
  };

  return (
    <ChapterShell
      id="ch8"
      chapterNumber={7}
      chapterTag={chapterTag}
      title={title}
      subtitle={subtitle}
    >
      <div className="flex flex-col items-center justify-center space-y-8 max-w-3xl mx-auto text-center">
        {/* Glowing Birthday Banner Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-center gap-2 text-starlight-gold">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">
              November 1, 2026
            </span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-starlight-gold via-white to-lavender drop-shadow-[0_0_25px_rgba(185,167,255,0.4)]">
            {bannerHeading}
          </h3>
        </motion.div>

        {/* Elegant Animated Birthday Cake */}
        <Cake candlesLit={candlesLit} />

        {/* Interactive Wish Button and Confetti Trigger */}
        <WishButton
          hasWished={candlesLit}
          onWishComplete={handleWishComplete}
        />
      </div>
    </ChapterShell>
  );
}
