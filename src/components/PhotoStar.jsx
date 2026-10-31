import React, { useState } from 'react';
import Placeholder from './Placeholder';

export default function PhotoStar({
  src,
  alt = 'Friendship memory',
  caption = '',
  date = '',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  onClick,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract filename for placeholder
  const filename = src ? src.split('/').pop() : 'memory.jpg';

  if (!src || hasError) {
    return (
      <div onClick={onClick} className={`cursor-pointer ${className}`}>
        <Placeholder
          filename={filename}
          aspectRatio={aspectRatio}
          caption={caption}
        />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg bg-midnight-deep/40 group cursor-pointer border border-lavender/15 transition-all duration-300 hover:border-lavender/40 hover:shadow-star-glow ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } group-hover:scale-105`}
      />

      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        {caption && (
          <p className="font-handwriting text-sm text-slate-100 line-clamp-2">
            {caption}
          </p>
        )}
        {date && (
          <span className="text-[10px] uppercase tracking-wider text-lavender-light/70 font-mono mt-0.5">
            {date}
          </span>
        )}
      </div>
    </div>
  );
}
