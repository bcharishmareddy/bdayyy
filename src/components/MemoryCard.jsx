import React, { useState } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import Placeholder from './Placeholder';

export default function MemoryCard({ photo, onClick, className = '' }) {
  const [hasError, setHasError] = useState(false);
  const filename = photo.src ? photo.src.split('/').pop() : 'memory.jpg';

  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl glass-card border border-lavender/20 p-3 sm:p-4 transition-all duration-300 hover:border-lavender/40 hover:shadow-star-glow hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${className}`}
    >
      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-midnight-dark mb-3">
        {!photo.src || hasError ? (
          <Placeholder
            filename={filename}
            aspectRatio="aspect-[4/3]"
            caption={photo.caption}
          />
        ) : (
          <img
            src={photo.src}
            alt={photo.caption || 'Memory card'}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] text-lavender-light/60">
          <span className="px-2 py-0.5 rounded-full bg-lavender/10 border border-lavender/20 font-medium">
            {photo.category || 'Memory'}
          </span>
          {photo.date && (
            <span className="flex items-center gap-1 font-mono text-[10px]">
              <Calendar className="w-3 h-3 text-lavender/60" />
              {photo.date}
            </span>
          )}
        </div>
        <p className="font-handwriting text-base sm:text-lg text-slate-100 leading-snug">
          {photo.caption || 'A moment we shared'}
        </p>
      </div>
    </div>
  );
}
