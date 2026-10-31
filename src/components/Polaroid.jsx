import React, { useState } from 'react';
import Placeholder from './Placeholder';

export default function Polaroid({
  photo,
  onClick,
  rotation = 0,
  hasTape = true,
  className = '',
}) {
  const [hasError, setHasError] = useState(false);
  const filename = photo.src ? photo.src.split('/').pop() : 'photo.jpg';

  return (
    <div
      onClick={onClick}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative p-3 pb-5 rounded bg-[#131A47] border border-lavender/25 shadow-xl transition-all duration-300 hover:scale-105 hover:z-20 hover:border-lavender/50 cursor-pointer ${className}`}
    >
      {/* Tape on top */}
      {hasTape && (
        <div className="scrapbook-tape -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
      )}

      {/* Photo frame */}
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-midnight-dark">
        {!photo.src || hasError ? (
          <Placeholder
            filename={filename}
            aspectRatio="aspect-square"
            caption={photo.caption}
          />
        ) : (
          <img
            src={photo.src}
            alt={photo.caption || 'Memory'}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* Handwritten caption on polaroid bottom */}
      <div className="mt-3 text-center px-1">
        <p className="font-handwriting text-base sm:text-lg text-slate-200 leading-snug">
          {photo.caption || 'A quiet memory'}
        </p>
        {photo.date && (
          <span className="text-[10px] text-lavender-light/50 font-mono tracking-wider">
            {photo.date}
          </span>
        )}
      </div>
    </div>
  );
}
