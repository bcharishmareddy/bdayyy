import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Sparkles, ZoomIn, Calendar } from 'lucide-react';
import memories from '../data/memories';

export default function MemoryGallery({ onOpenLightbox }) {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-blue/70 px-3 py-1 rounded-full bg-galaxy-navy/60 border border-galaxy-border inline-block">
            Photographs & Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            A Few Moments Worth Keeping.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Every picture holds a quiet memory of our friendship
          </p>
        </motion.div>

        {/* Gallery Grid (Polaroid Inspired & Floating Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {memories.map((photo, index) => (
            <PhotoCard
              key={photo.id || index}
              photo={photo}
              index={index}
              allPhotos={memories}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoCard({ photo, index, allPhotos, onOpenLightbox }) {
  const [hasError, setHasError] = useState(false);
  const filename = photo.src ? photo.src.split('/').pop() : 'photo.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      whileHover={{ scale: 1.04, y: -6, zIndex: 20 }}
      style={{ transform: `rotate(${photo.rotation || 0}deg)` }}
      onClick={() => onOpenLightbox && onOpenLightbox(photo, allPhotos)}
      className="group relative p-3 pb-5 rounded-2xl galaxy-card border border-galaxy-border hover:border-starlight-blue/60 transition-all duration-300 shadow-glass-card hover:shadow-glow-soft cursor-pointer"
    >
      {/* Tape on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 rounded-sm bg-white/15 border border-white/25 backdrop-blur-sm -rotate-1 z-20 pointer-events-none" />

      {/* Photo Frame */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-galaxy-dark border border-galaxy-border/50">
        {!photo.src || hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-galaxy-deep/40 group-hover:bg-galaxy-deep/60 transition-colors">
            <div className="w-9 h-9 rounded-full bg-starlight-blue/10 border border-starlight-blue/20 flex items-center justify-center text-starlight-blue mb-2">
              <Image className="w-4 h-4 opacity-75" />
            </div>
            <p className="text-xs font-medium text-slate-200">Your photo goes here</p>
            <p className="text-[10px] font-mono text-starlight-silver/50 truncate max-w-[140px] mt-0.5">
              {filename}
            </p>
            <span className="text-[9px] font-mono text-starlight-blue/40 mt-1.5 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>/public/images/memories/</span>
            </span>
          </div>
        ) : (
          <img
            src={photo.src}
            alt={photo.caption || 'Memory with Sarath'}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Hover zoom icon badge */}
        <div className="absolute inset-0 bg-galaxy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white backdrop-blur-md">
            <ZoomIn className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Caption & Date Footer */}
      <div className="mt-3 text-center px-1 space-y-1">
        <p className="font-cursive text-xl sm:text-2xl text-slate-100 leading-snug">
          {photo.caption}
        </p>
        <div className="flex items-center justify-between text-[10px] font-mono text-starlight-silver/50 px-1 pt-1 border-t border-galaxy-border/20">
          <span className="px-1.5 py-0.5 rounded bg-galaxy-navy/70 border border-galaxy-border/30">
            {photo.tag || 'Memory'}
          </span>
          {photo.date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-2.5 h-2.5 text-starlight-blue/60" />
              {photo.date}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
