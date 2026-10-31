import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.25, rootMargin: '0px' }) {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasTriggered(true);
      } else {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView, hasTriggered];
}
