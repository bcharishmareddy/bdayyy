import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ParticleWaves() {
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
    };

    window.addEventListener('resize', handleResize);

    // Dynamic wave particles drifting along sinusoidal paths
    const waveParticles = [];
    const particleCount = width < 768 ? 45 : 90;

    for (let i = 0; i < particleCount; i++) {
      waveParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseY: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        color: i % 3 === 0 ? '#C8B9FF' : i % 2 === 0 ? '#A9C9FF' : '#FFFFFF',
        alpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.4 + 0.2,
        frequency: Math.random() * 0.003 + 0.001,
        amplitude: Math.random() * 40 + 20,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        time += 0.006;
      }

      // Draw 3 layers of sweeping cosmic wave ribbons across the viewport
      drawSweepingWave(ctx, width, height, time, 0.0015, 60, 'rgba(169, 201, 255, 0.07)', 2);
      drawSweepingWave(ctx, width, height, time * 1.3 + 2, 0.002, 80, 'rgba(200, 185, 255, 0.05)', 2.5);
      drawSweepingWave(ctx, width, height, time * 0.8 + 4, 0.001, 50, 'rgba(221, 230, 255, 0.06)', 1.5);

      // Draw lateral flowing boundary waves
      drawLateralWaves(ctx, width, height, time);

      // Render drifting wave particles
      for (let i = 0; i < waveParticles.length; i++) {
        const p = waveParticles[i];

        if (!reducedMotion) {
          p.x += p.speed;
          if (p.x > width) p.x = 0;
          p.y = p.baseY + Math.sin(p.x * p.frequency + time * 3) * p.amplitude;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + i));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.radius * 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    // Horizontal sweeping sine ribbon
    function drawSweepingWave(context, w, h, t, freq, amp, color, strokeW) {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = strokeW;

      const segments = 40;
      for (let i = 0; i <= segments; i++) {
        const x = (w / segments) * i;
        const baseY = h * 0.45;
        const y = baseY + Math.sin(x * freq + t) * amp + Math.cos(x * freq * 0.6 - t) * (amp * 0.5);

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      context.stroke();
    }

    // Side boundary undulating waves
    function drawLateralWaves(context, w, h, t) {
      const sides = ['left', 'right'];
      sides.forEach((side) => {
        const isLeft = side === 'left';
        const originX = isLeft ? 0 : w;
        const maxDist = Math.min(w * 0.3, 260);

        for (let wave = 0; wave < 3; wave++) {
          context.beginPath();
          context.strokeStyle = wave % 2 === 0 ? 'rgba(169, 201, 255, 0.08)' : 'rgba(200, 185, 255, 0.06)';
          context.lineWidth = 1.5;

          const points = 30;
          for (let i = 0; i <= points; i++) {
            const y = (h / points) * i;
            const ny = y / h;
            const undulate = Math.sin(ny * 5 + t + wave) * 0.5 + Math.cos(ny * 3 - t * 0.5) * 0.5;
            const offset = Math.sin(ny * Math.PI) * maxDist * (0.4 + 0.6 * undulate);
            const x = isLeft ? originX + offset : originX - offset;

            if (i === 0) context.moveTo(x, y);
            else context.lineTo(x, y);
          }
          context.stroke();
        }
      });
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
