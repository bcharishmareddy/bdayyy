import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChapterShell from '../components/ChapterShell';
import PhotoStar from '../components/PhotoStar';
import { content } from '../data/content';

export default function Ch3Moments({ onOpenLightbox }) {
  const { chapterTag, title, subtitle, categories, photos } = content.ch3;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <ChapterShell
      id="ch3"
      chapterNumber={2}
      chapterTag={chapterTag}
      title={title}
      subtitle={subtitle}
    >
      <div className="space-y-10 max-w-5xl mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-lavender text-midnight font-semibold shadow-star-glow scale-105'
                    : 'bg-midnight-deep/60 text-slate-300 hover:text-white hover:bg-midnight-deep border border-lavender/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Staggered Photo Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id || index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="glass-card p-3 rounded-xl border border-lavender/20 hover:border-lavender/40 transition-all duration-300 hover:-translate-y-1 shadow-glass">
                  <PhotoStar
                    src={photo.src}
                    alt={photo.caption}
                    caption={photo.caption}
                    date={photo.date}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-lg overflow-hidden"
                    onClick={() => onOpenLightbox && onOpenLightbox(photo, photos)}
                  />
                  <div className="mt-3 px-1">
                    <p className="font-handwriting text-base sm:text-lg text-slate-100 line-clamp-2 leading-snug">
                      {photo.caption}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-mono text-lavender-light/50 mt-1">
                      <span>{photo.category}</span>
                      {photo.date && <span>{photo.date}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </ChapterShell>
  );
}
