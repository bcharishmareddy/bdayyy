import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles, Image } from 'lucide-react';

export default function Lightbox({
  photos = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
}) {
  const [imgError, setImgError] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && onNext) onNext();
      else if (diff < 0 && onPrev) onPrev();
    }
  };

  if (!isOpen || !currentPhoto) return null;

  const filename = currentPhoto.src ? currentPhoto.src.split('/').pop() : 'photo.jpg';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors duration-200"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal content container */}
        <div
          className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25 }}
            className="w-full flex flex-col items-center"
          >
            {/* Image Frame */}
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center bg-galaxy-dark shadow-2xl border border-galaxy-border">
              {!currentPhoto.src || imgError ? (
                <div className="w-[300px] sm:w-[480px] p-8 text-center flex flex-col items-center justify-center bg-galaxy-deep/70">
                  <div className="w-12 h-12 rounded-full bg-starlight-blue/10 border border-starlight-blue/30 flex items-center justify-center text-starlight-blue mb-3">
                    <Image className="w-6 h-6" />
                  </div>
                  <p className="text-base font-medium text-white">Your photo goes here</p>
                  <p className="text-xs font-mono text-starlight-silver/60 mt-1">{filename}</p>
                  <span className="text-[11px] font-mono text-starlight-blue/40 mt-3 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Place in /public/images/memories/</span>
                  </span>
                </div>
              ) : (
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.caption || 'Memory with Sarath'}
                  onError={() => setImgError(true)}
                  className="max-h-[70vh] max-w-full object-contain rounded-xl"
                />
              )}
            </div>

            {/* Caption & Metadata Footer */}
            <div className="mt-4 text-center max-w-xl px-4 space-y-1">
              <div className="flex items-center justify-center gap-3 text-xs text-starlight-silver/70 font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-galaxy-navy border border-galaxy-border">
                  {currentPhoto.tag || 'Memory'}
                </span>
                {currentPhoto.date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-starlight-blue" />
                    {currentPhoto.date}
                  </span>
                )}
                <span>
                  {currentIndex + 1} of {photos.length}
                </span>
              </div>
              <p className="font-cursive text-2xl sm:text-3xl text-slate-100">
                {currentPhoto.caption}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
