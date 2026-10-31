import { useState, useEffect } from 'react';
import { content } from '../data/content';

export function useUnlock() {
  const [now, setNow] = useState(() => new Date());

  // Check URL param ?preview=1
  const isPreview = typeof window !== 'undefined' && 
    (new URLSearchParams(window.location.search).get('preview') === '1' ||
     new URLSearchParams(window.location.search).get('preview') === 'true');

  const unlockDate = new Date(content.unlockTime);
  const isLockedConfig = content.lockEnabled !== false;

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const diffMs = unlockDate.getTime() - now.getTime();
  const isTimeUnlocked = diffMs <= 0;

  // Unlocked if lock is disabled, if preview flag is present, or if current time has passed unlock time
  const isUnlocked = !isLockedConfig || isPreview || isTimeUnlocked;

  // Countdown parts
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    isUnlocked,
    isPreview,
    isLockedConfig,
    diffMs,
    countdown: { days, hours, minutes, seconds, totalSeconds },
    unlockDate,
  };
}
