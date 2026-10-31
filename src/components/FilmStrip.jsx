import React, { useState } from 'react';
import Placeholder from './Placeholder';

export default function FilmStrip({ photo, onClick, className = '' }) {
  const [hasError, setHasError] = useState(false);
  const filename = photo.src ? photo.src.split('/').pop() : 'film-photo.jpg';

  return (
    <div
      onClick={onClick}
      className={`relative p-3 bg-[#0d1233] border-y-2 border-dashed border-lavender/30 shadow-2xl rounded-sm cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Top sprocket holes */}
      <div className="flex justify-between items-center mb-2 px-1">
        {[...Array(6)].map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-2.5 h-3.5 rounded-sm bg-midnight-dark border border-lavender/20"
          />
        ))}
      </div>

      {/* Film image frame */}
      <div className="relative aspect-video w-full overflow-hidden rounded bg-black/60 border border-lavender/10">
        {!photo.src || hasError ? (
          <Placeholder
            filename={filename}
            aspectRatio="aspect-video"
            caption={photo.caption}
          />
        ) : (
          <img
            src={photo.src}
            alt={photo.caption || 'Film strip memory'}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* Bottom sprocket holes and film labels */}
      <div className="flex justify-between items-center mt-2 px-1">
        {[...Array(6)].map((_, i) => (
          <div
            key={`bot-${i}`}
            className="w-2.5 h-3.5 rounded-sm bg-midnight-dark border border-lavender/20"
          />
        ))}
      </div>

      {/* Film annotation */}
      <div className="flex items-center justify-between text-[11px] font-mono text-lavender-light/60 px-1 mt-2">
        <span>KODAK • 2026</span>
        <span className="font-handwriting text-sm text-slate-300">
          {photo.caption}
        </span>
        <span>FRAME #02</span>
      </div>
    </div>
  );
}
