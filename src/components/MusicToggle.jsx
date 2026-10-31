import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { content } from '../data/content';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = content.audio?.src || '/audio/ambient.mp3';

  // Attempt auto-start on first user interaction anywhere on page (browser policy compliant)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !hasStartedOnce) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStartedOnce(true);
            cleanup();
          })
          .catch(() => {
            // Browser still blocked or user didn't engage with media element directly
          });
      }
    };

    const cleanup = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return cleanup;
  }, [hasStartedOnce]);

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStartedOnce(true);
        })
        .catch((err) => {
          console.log('Audio play failed:', err);
        });
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src="/audio/music.mpeg" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-500 shadow-[0_8px_25px_rgba(3,8,23,0.8)] backdrop-blur-xl border ${
          isPlaying
            ? 'bg-gradient-to-r from-[#0C1B42]/95 via-[#182C66]/95 to-[#0C1B42]/95 border-starlight-blue shadow-[0_0_20px_rgba(169,201,255,0.4)] scale-105'
            : 'bg-[#060F26]/90 border-starlight-blue/30 hover:border-starlight-lavender/60 hover:scale-105'
        }`}
        aria-label={isPlaying ? 'Pause music' : 'Play special music for Sarathuu'}
      >
        {isPlaying ? (
          <>
            {/* Spinning disc / pulsating equalizer bars */}
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-1 bg-starlight-blue rounded-full animate-bounce [animation-delay:0ms] h-full" />
              <span className="w-1 bg-starlight-lavender rounded-full animate-bounce [animation-delay:150ms] h-2.5" />
              <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:300ms] h-3.5" />
            </div>

            <Volume2 className="w-4 h-4 text-starlight-blue" />
            <span className="text-xs font-mono font-medium text-white tracking-wider flex items-center gap-1">
              <span>Playing For Sarathuu</span>
              <span className="text-[10px] text-starlight-lavender">♫</span>
            </span>
          </>
        ) : (
          <>
            <div className="relative">
              <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-starlight-lavender transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-starlight-blue animate-ping" />
            </div>
            <span className="text-xs font-mono text-slate-300 group-hover:text-white transition-colors tracking-wide flex items-center gap-1.5">
              <span>Play Song</span>
              <Music className="w-3 h-3 text-starlight-lavender animate-pulse" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
