import React from 'react';
import { Image, Sparkles } from 'lucide-react';

export default function Placeholder({
  filename = 'memory-photo.jpg',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  caption = '',
}) {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-lg bg-midnight-deep/50 border border-dashed border-lavender/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden group transition-colors duration-300 hover:border-lavender/50 ${className}`}
    >
      {/* Background subtle starry glow */}
      <div className="absolute inset-0 bg-radial-gradient from-lavender/5 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-2.5 max-w-xs">
        <div className="w-10 h-10 rounded-full bg-lavender/10 border border-lavender/25 flex items-center justify-center text-lavender-light">
          <Image className="w-5 h-5 opacity-75" />
        </div>
        <div>
          <p className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide">
            Your photo goes here
          </p>
          <p className="text-[11px] font-mono text-lavender-light/70 mt-0.5 truncate max-w-[200px]">
            {filename}
          </p>
        </div>
        {caption && (
          <p className="text-xs font-handwriting text-slate-400 italic mt-1 line-clamp-2">
            "{caption}"
          </p>
        )}
      </div>

      <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] text-lavender-light/40 font-mono">
        <Sparkles className="w-2.5 h-2.5" />
        <span>/public/images/memories/</span>
      </div>
    </div>
  );
}
