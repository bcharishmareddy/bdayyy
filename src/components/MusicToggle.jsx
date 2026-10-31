import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { content } from '../data/content';

export default function MusicToggle() {
  const [hasAudioFile, setHasAudioFile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = content.audio?.src || '/audio/ambient.mp3';

  // Check if audio file actually exists on server
  useEffect(() => {
    fetch(audioSrc, { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.status !== 404) {
          setHasAudioFile(true);
        } else {
          setHasAudioFile(false);
        }
      })
      .catch(() => {
        setHasAudioFile(false);
      });
  }, [audioSrc]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // If audio file doesn't exist, hide toggle completely
  if (!hasAudioFile) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <audio ref={audioRef} src={audioSrc} loop preload="none" />
      <button
        onClick={toggleMusic}
        className="group flex items-center gap-2 px-3.5 py-2 rounded-full glass-card border border-lavender/25 hover:border-lavender/50 text-slate-200 transition-all duration-300 shadow-glass hover:scale-105"
        aria-label={isPlaying ? 'Mute ambient music' : 'Play ambient music'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-lavender animate-pulse" />
            <span className="text-xs font-mono text-lavender-light hidden sm:inline">
              Music Playing
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
            <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 hidden sm:inline">
              Muted
            </span>
          </>
        )}
      </button>
    </div>
  );
}
