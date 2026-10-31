import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function StarField() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Star data
    const starCount = Math.min(220, Math.floor((width * height) / 6000));
    let stars = [];

    // Colors matching design system: midnight navy, lavender, light blue, soft pink, starlight white
    const starColors = [
      '#FFFFFF',
      '#B9A7FF', // lavender
      '#9CC9FF', // light blue
      '#F5A9C8', // subtle pink
      '#FFE3A8', // warm starlight
    ];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.3,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          alpha: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.12,
          driftY: (Math.random() - 0.5) * 0.12,
        });
      }
    };

    initStars();

    // Occasional gentle shooting star
    let shootingStar = null;
    const maybeSpawnShootingStar = () => {
      if (!shootingStar && Math.random() < 0.004) {
        shootingStar = {
          x: Math.random() * (width * 0.7),
          y: Math.random() * (height * 0.4),
          length: Math.random() * 90 + 50,
          speed: Math.random() * 4 + 3,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          life: 0,
          maxLife: 45,
        };
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle celestial backdrop gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#10163E');
      bgGrad.addColorStop(0.5, '#0B1030');
      bgGrad.addColorStop(1, '#070A20');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw faint nebula clouds
      const nebula = ctx.createRadialGradient(
        width * 0.8,
        height * 0.2,
        20,
        width * 0.8,
        height * 0.2,
        width * 0.45
      );
      nebula.addColorStop(0, 'rgba(185, 167, 255, 0.04)');
      nebula.addColorStop(0.6, 'rgba(156, 201, 255, 0.02)');
      nebula.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!reducedMotion) {
          star.twinklePhase += star.twinkleSpeed;
          star.x += star.driftX;
          star.y += star.driftY;

          // Wrap edges
          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }

        const currentAlpha =
          star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fill();

        // Soft glow for larger stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.25;
          ctx.fill();
        }
      }

      // Draw shooting star if active
      if (!reducedMotion) {
        maybeSpawnShootingStar();
      }

      if (shootingStar) {
        ctx.save();
        ctx.beginPath();
        const tailX =
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY =
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const shootGrad = ctx.createLinearGradient(
          tailX,
          tailY,
          shootingStar.x,
          shootingStar.y
        );
        shootGrad.addColorStop(0, 'transparent');
        shootGrad.addColorStop(0.7, 'rgba(185, 167, 255, 0.4)');
        shootGrad.addColorStop(1, 'rgba(255, 255, 255, 0.95)');

        ctx.strokeStyle = shootGrad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.life++;

        if (
          shootingStar.life > shootingStar.maxLife ||
          shootingStar.x > width ||
          shootingStar.y > height
        ) {
          shootingStar = null;
        }
        ctx.restore();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
