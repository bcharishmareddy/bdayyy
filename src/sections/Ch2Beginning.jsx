import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, BookOpen } from 'lucide-react';
import ChapterShell from '../components/ChapterShell';
import PhotoStar from '../components/PhotoStar';
import { content } from '../data/content';

export default function Ch2Beginning({ onOpenLightbox }) {
  const { chapterTag, title, subtitle, mainText, firstPhoto, storySlot } =
    content.ch2;

  return (
    <ChapterShell
      id="ch2"
      chapterNumber={1}
      chapterTag={chapterTag}
      title={title}
      subtitle={subtitle}
    >
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Core Heartfelt Opening Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="glass-card p-6 sm:p-10 rounded-2xl border border-lavender/25 shadow-glass text-center relative overflow-hidden"
        >
          {/* Subtle celestial starlight watermark */}
          <div className="absolute top-2 left-4 text-lavender/10 font-serif text-5xl pointer-events-none select-none">
            “
          </div>
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-slate-100 leading-relaxed max-w-3xl mx-auto">
            {mainText}
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-lavender-light/60 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-lavender" />
            <span>February 2026 — The Origin</span>
          </div>
        </motion.div>

        {/* First Memory Photo & Story Slot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* First Photo with PhotoStar / Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-md p-3.5 rounded-2xl glass-card border border-lavender/30 shadow-glass">
              <PhotoStar
                src={firstPhoto.src}
                alt={firstPhoto.alt}
                caption={firstPhoto.caption}
                date="February 2026"
                aspectRatio="aspect-[4/3]"
                className="rounded-xl overflow-hidden"
                onClick={() =>
                  onOpenLightbox &&
                  onOpenLightbox({
                    src: firstPhoto.src,
                    caption: firstPhoto.caption,
                    date: 'February 2026',
                    category: 'Special memories',
                  })
                }
              />
              <div className="mt-3 text-center">
                <p className="font-handwriting text-lg text-slate-200">
                  {firstPhoto.caption}
                </p>
                <span className="text-[10px] font-mono text-lavender-light/50 uppercase tracking-wider">
                  Tap to view full star
                </span>
              </div>
            </div>
          </motion.div>

          {/* Slot for How We Met Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-lavender/20 shadow-glass space-y-4">
              <div className="flex items-center gap-2.5 text-lavender">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-serif text-2xl text-white font-medium">
                  {storySlot.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {storySlot.description}
              </p>
              <div className="pt-2 text-[11px] font-mono text-lavender-light/50 border-t border-lavender/10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-starlight-gold" />
                <span>Customizable in src/data/content.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ChapterShell>
  );
}
