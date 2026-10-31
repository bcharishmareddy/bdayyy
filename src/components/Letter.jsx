import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Letter({ onFoldBack }) {
  const { letterGreeting, letterParagraphs, letterClosing, letterSignature } =
    content.ch7;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-2xl mx-auto w-full letter-sheet rounded-2xl p-6 sm:p-12 text-slate-100 shadow-2xl border border-lavender/30"
    >
      {/* Subtle paper grain & celestial watermark */}
      <div className="absolute top-6 right-6 text-lavender/10 font-serif text-6xl select-none pointer-events-none">
        ✧
      </div>

      <div className="space-y-6 text-left">
        {/* Salutation */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-handwriting text-2xl sm:text-3xl font-semibold text-lavender-light"
        >
          {letterGreeting}
        </motion.p>

        {/* Letter Paragraphs, revealing gently line by line */}
        <div className="space-y-5">
          {letterParagraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + index * 0.2,
                ease: 'easeOut',
              }}
              className="font-handwriting text-xl sm:text-2xl text-slate-200 leading-relaxed tracking-wide"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Closing & Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.4 + letterParagraphs.length * 0.2,
          }}
          className="pt-6 border-t border-lavender/20 mt-8 space-y-1"
        >
          <p className="font-handwriting text-xl sm:text-2xl text-slate-300">
            {letterClosing}
          </p>
          <p className="font-handwriting text-2xl sm:text-3xl font-semibold text-lavender">
            {letterSignature}
          </p>
        </motion.div>
      </div>

      {/* Button to re-fold if wanted */}
      {onFoldBack && (
        <div className="mt-8 text-center">
          <button
            onClick={onFoldBack}
            className="text-xs font-mono text-lavender-light/60 hover:text-lavender transition-colors py-1 px-3 rounded-full border border-lavender/20 hover:border-lavender/40"
          >
            ← Close letter
          </button>
        </div>
      )}
    </motion.div>
  );
}
