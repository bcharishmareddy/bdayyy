import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function StarBackground() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const starCount = isMobile ? 140 : 350;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Color palette from design specs:
    // White #FFFFFF, Soft blue #A9C9FF, Lavender #C8B9FF, Silver #DDE6FF
    const starColors = ['#FFFFFF', '#A9C9FF', '#C8B9FF', '#DDE6FF'];
    let stars = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.3,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          alpha: Math.random() * 0.75 + 0.25,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.1,
          driftY: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    initStars();

    // Occasional subtle shooting star
    let shootingStar = null;
    const maybeSpawnShootingStar = () => {
      if (!shootingStar && Math.random() < 0.005) {
        shootingStar = {
          x: Math.random() * (width * 0.8),
          y: Math.random() * (height * 0.4),
          length: Math.random() * 90 + 60,
          speed: Math.random() * 4 + 3.5,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          life: 0,
          maxLife: 40,
        };
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep midnight-blue radial background
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.25,
        20,
        width * 0.5,
        height * 0.6,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0B1940');
      bgGrad.addColorStop(0.4, '#07152F');
      bgGrad.addColorStop(1, '#030817');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft luminous nebula dust clouds
      const nebulaLeft = ctx.createRadialGradient(
        width * 0.15,
        height * 0.3,
        10,
        width * 0.15,
        height * 0.3,
        width * 0.4
      );
      nebulaLeft.addColorStop(0, 'rgba(169, 201, 255, 0.045)');
      nebulaLeft.addColorStop(0.7, 'rgba(200, 185, 255, 0.015)');
      nebulaLeft.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaLeft;
      ctx.fillRect(0, 0, width, height);

      const nebulaRight = ctx.createRadialGradient(
        width * 0.85,
        height * 0.7,
        10,
        width * 0.85,
        height * 0.7,
        width * 0.45
      );
      nebulaRight.addColorStop(0, 'rgba(200, 185, 255, 0.04)');
      nebulaRight.addColorStop(0.7, 'rgba(169, 201, 255, 0.015)');
      nebulaRight.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaRight;
      ctx.fillRect(0, 0, width, height);

      // Render twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!reducedMotion) {
          star.twinklePhase += star.twinkleSpeed;
          star.x += star.driftX;
          star.y += star.driftY;

          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }

        const currentAlpha = star.alpha * (0.65 + 0.35 * Math.sin(star.twinklePhase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fill();

        // Soft halo on larger stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.22;
          ctx.fill();
        }
      }

      // Render gentle shooting star
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
        shootGrad.addColorStop(0.65, 'rgba(169, 201, 255, 0.4)');
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
