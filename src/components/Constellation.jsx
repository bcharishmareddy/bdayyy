import React from 'react';
import { motion } from 'framer-motion';

// Constellation star nodes for "Us"
export const constellationStars = [
  { id: 'feb', label: 'February 2026', x: 20, y: 70, size: 6 },
  { id: 'first', label: 'First Memory', x: 35, y: 40, size: 7 },
  { id: 'moments', label: 'Shared Moments', x: 50, y: 55, size: 6 },
  { id: 'truths', label: 'What You Mean', x: 68, y: 30, size: 8 },
  { id: 'diary', label: 'Only We Understand', x: 80, y: 65, size: 6 },
  { id: 'letter', label: 'The Letter', x: 55, y: 85, size: 7 },
  { id: 'us', label: 'Us', x: 48, y: 18, size: 10, isCore: true },
];

// Constellation line connections: [fromIndex, toIndex]
export const constellationEdges = [
  [0, 1], // Feb -> First Memory
  [1, 2], // First Memory -> Moments
  [2, 3], // Moments -> Truths
  [3, 6], // Truths -> Us
  [1, 6], // First Memory -> Us
  [2, 5], // Moments -> Letter
  [5, 4], // Letter -> Diary
  [4, 3], // Diary -> Truths
];

export default function Constellation({ isAnimated = true, className = '' }) {
  return (
    <div className={`relative w-full max-w-xl aspect-square mx-auto ${className}`}>
      {/* Background celestial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-lavender/15 via-midnight-surface/20 to-transparent blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(185,167,255,0.4)]"
      >
        {/* Constellation Connection Lines */}
        {constellationEdges.map(([fromIdx, toIdx], i) => {
          const from = constellationStars[fromIdx];
          const to = constellationStars[toIdx];

          return (
            <motion.line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.8"
              strokeDasharray="2 1"
              initial={isAnimated ? { pathLength: 0, opacity: 0 } : false}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{
                duration: 1.2,
                delay: i * 0.25,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Gradients */}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9CC9FF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#B9A7FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#F5A9C8" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Constellation Star Nodes */}
        {constellationStars.map((star, i) => (
          <g key={star.id}>
            {/* Pulsing halo */}
            <motion.circle
              cx={star.x}
              cy={star.y}
              r={star.size * 0.9}
              fill={star.isCore ? '#FFE3A8' : '#B9A7FF'}
              opacity="0.3"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{ transformOrigin: `${star.x}px ${star.y}px` }}
            />

            {/* Core star */}
            <motion.circle
              cx={star.x}
              cy={star.y}
              r={star.size * 0.4}
              fill={star.isCore ? '#FFFFFF' : '#E8ECF5'}
              stroke={star.isCore ? '#FFE3A8' : '#B9A7FF'}
              strokeWidth="0.6"
              initial={isAnimated ? { scale: 0 } : false}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
            />

            {/* Label */}
            <motion.text
              x={star.x}
              y={star.y + (star.y > 50 ? 5 : -4)}
              textAnchor="middle"
              className={`font-handwriting text-[3.8px] fill-slate-200 select-none ${
                star.isCore
                  ? 'font-serif text-[5.5px] font-bold fill-lavender-light drop-shadow'
                  : ''
              }`}
              initial={isAnimated ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
            >
              {star.label}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Constellation Name Plaque */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="font-serif text-2xl sm:text-3xl text-white tracking-widest uppercase border-b border-lavender/30 pb-1">
          Constellation: Us
        </span>
      </motion.div>
    </div>
  );
}

// Slim Floating Sidebar Constellation Progress Indicator
export function ConstellationIndicator({ activeChapter = 1, totalChapters = 9 }) {
  return (
    <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 p-2 rounded-full glass-card border border-lavender/15 backdrop-blur-md">
      {[...Array(totalChapters)].map((_, idx) => {
        const chapterNum = idx + 1;
        const isReached = activeChapter >= chapterNum;
        const isCurrent = activeChapter === chapterNum;

        return (
          <a
            key={chapterNum}
            href={`#ch${chapterNum}`}
            title={`Chapter ${chapterNum}`}
            className="group relative flex items-center justify-center py-1"
          >
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isCurrent
                  ? 'bg-lavender scale-125 shadow-star-glow'
                  : isReached
                  ? 'bg-lavender-light/70 shadow-sm'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
            {/* Subtle connecting line between dots */}
            {idx < totalChapters - 1 && (
              <div
                className={`absolute top-4 w-[1px] h-3 transition-colors duration-300 ${
                  activeChapter > chapterNum
                    ? 'bg-lavender/50'
                    : 'bg-white/10'
                }`}
              />
            )}
            {/* Tooltip on hover */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-[10px] font-mono px-2 py-0.5 rounded bg-midnight-deep/90 border border-lavender/20 text-white whitespace-nowrap">
              Ch {chapterNum}
            </span>
          </a>
        );
      })}
    </div>
  );
}
