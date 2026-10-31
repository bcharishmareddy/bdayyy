import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Feather } from 'lucide-react';
import { content } from '../data/content';

export default function DiaryPage() {
  const { sections, sectionMeta } = content.ch5;
  const sectionKeys = Object.keys(sectionMeta);
  const [activeKey, setActiveKey] = useState(sectionKeys[0]);

  const currentMeta = sectionMeta[activeKey];
  const currentEntries = sections[activeKey] || [];

  return (
    <div className="max-w-3xl mx-auto w-full">
      {/* Diary Category Bookmark Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {sectionKeys.map((key) => {
          const isActive = activeKey === key;
          const count = (sections[key] || []).length;
          return (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-lavender text-midnight font-semibold shadow-star-glow scale-105'
                  : 'bg-midnight-deep/60 text-slate-300 hover:text-white hover:bg-midnight-deep border border-lavender/20'
              }`}
            >
              <span>{sectionMeta[key].title}</span>
              {count > 0 && (
                <span className="w-4 h-4 rounded-full bg-midnight/30 text-[10px] flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Open Notebook Leather & Paper Shell */}
      <div className="relative rounded-2xl bg-[#0c112e] p-4 sm:p-8 border-2 border-lavender/25 shadow-2xl">
        {/* Notebook Spine / Rings Decor */}
        <div className="absolute top-0 bottom-0 left-8 sm:left-12 w-[2px] bg-red-400/20 pointer-events-none" />

        {/* Ruled Paper Page */}
        <div className="relative ruled-paper rounded-xl p-6 sm:p-10 min-h-[380px] shadow-inner border border-lavender/10 flex flex-col justify-between">
          <div>
            {/* Header with Title and Feather icon */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-lavender/20">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-lavender" />
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {currentMeta.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-lavender-light/50 text-xs font-mono">
                <Feather className="w-3.5 h-3.5" />
                <span>Private Diary</span>
              </div>
            </div>

            {/* Content Entries or Gentle Placeholder */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentEntries.length > 0 ? (
                  <ul className="space-y-3 font-handwriting text-lg sm:text-2xl text-slate-100 leading-relaxed pl-6 sm:pl-8">
                    {currentEntries.map((entry, idx) => (
                      <li key={idx} className="list-disc marker:text-lavender">
                        {typeof entry === 'string' ? entry : entry.text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-12 sm:py-16 text-center max-w-md mx-auto space-y-3 pl-4">
                    <div className="w-10 h-10 rounded-full bg-lavender/10 border border-lavender/20 flex items-center justify-center mx-auto text-lavender-light/60">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <p className="font-handwriting text-xl sm:text-2xl text-slate-300">
                      "{currentMeta.placeholder}"
                    </p>
                    <p className="text-xs font-mono text-lavender-light/50 pt-2">
                      (To add entries, edit{' '}
                      <span className="text-lavender">src/data/content.js</span>{' '}
                      → ch5.sections.{activeKey})
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Diary Footer Line */}
          <div className="pt-6 mt-6 border-t border-lavender/15 flex justify-between items-center text-[11px] font-mono text-lavender-light/50">
            <span>Chapter 04 • Only We Understand</span>
            <span>Sarath & Me • 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
