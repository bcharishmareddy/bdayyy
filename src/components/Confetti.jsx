import confetti from 'canvas-confetti';

export function fireWarmConfetti() {
  const duration = 4000;
  const animationEnd = Date.now() + duration;

  // Harmonious celestial palette
  const colors = ['#B9A7FF', '#9CC9FF', '#FFE3A8', '#F5A9C8', '#FFFFFF'];

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };

  // Immediate initial burst from center
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors,
    disableForReducedMotion: true,
  });

  frame();
}
