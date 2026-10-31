import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Maximize2, Image as ImageIcon } from 'lucide-react';

export default function SarathSpotlight({ onPhotoClick }) {
  const [hasError, setHasError] = useState(false);
  const photoSrc = "/images/sarath.jpg";

  return (
    <section id="spotlight" className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gradient from-galaxy-navy/70 via-starlight-blue/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-galaxy-navy/90 border border-galaxy-border text-starlight-blue text-xs font-mono tracking-widest uppercase shadow-glow-soft">
            <Star className="w-3.5 h-3.5 text-starlight-lavender fill-starlight-lavender animate-pulse" />
            <span>The Man of the Day</span>
            <Star className="w-3.5 h-3.5 text-starlight-lavender fill-starlight-lavender animate-pulse" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            The Person Behind The Smile.
          </h2>
          <p className="font-cursive text-2xl sm:text-3xl text-starlight-lavender">
            Dedicated to Sarathuu
          </p>
        </motion.div>

        {/* Central Masterpiece Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="galaxy-card p-8 sm:p-14 rounded-3xl border border-starlight-blue/40 shadow-2xl relative"
        >
          <div className="flex flex-col items-center text-center space-y-12 relative z-10">
            
            {/* CATCHY, ULTRA-PREMIUM ROYAL CELESTIAL PORTRAIT FRAME (NO CIRCULAR ROTATION) */}
            <div
              className="relative group cursor-pointer my-4 select-none"
              onClick={() => onPhotoClick && onPhotoClick(photoSrc)}
            >
              {/* 1. Breathing Luminous Cosmic Aura behind frame (no rotation) */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-starlight-blue/30 via-starlight-lavender/35 to-blue-600/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-cosmic-glow" />

              {/* 2. Outer Architectural Shadow Layer */}
              <div className="relative p-2.5 sm:p-3 rounded-3xl bg-gradient-to-b from-[#182a5c] via-[#091538] to-[#040c24] border-2 border-starlight-blue/50 shadow-[0_20px_60px_rgba(3,8,23,0.95)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-starlight-lavender/70">
                
                {/* 3. Top Royal Arch Crown Crest */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1 rounded-full bg-gradient-to-r from-[#0C1A3E] via-[#1E3A78] to-[#0C1A3E] border border-starlight-blue/70 shadow-[0_4px_16px_rgba(169,201,255,0.4)] flex items-center gap-2 z-20">
                  <span className="text-starlight-lavender text-xs">✦</span>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.22em] text-white uppercase whitespace-nowrap">
                    SPECIAL DEDICATION
                  </span>
                  <span className="text-starlight-lavender text-xs">✦</span>
                </div>

                {/* 4. Ornate Celestial SVG Corner Filigrees (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
                <div className="absolute top-2 left-2 w-7 h-7 pointer-events-none text-starlight-blue drop-shadow-[0_0_6px_rgba(169,201,255,0.8)] z-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 2 14 L 2 2 L 14 2" strokeLinecap="round" />
                    <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                    <polygon points="7,7 9,5 11,7 9,9" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-7 h-7 pointer-events-none text-starlight-lavender drop-shadow-[0_0_6px_rgba(200,185,255,0.8)] z-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 22 14 L 22 2 L 10 2" strokeLinecap="round" />
                    <circle cx="22" cy="2" r="1.5" fill="currentColor" />
                    <polygon points="17,7 19,5 15,7 17,9" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="absolute bottom-2 left-2 w-7 h-7 pointer-events-none text-starlight-lavender drop-shadow-[0_0_6px_rgba(200,185,255,0.8)] z-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 2 10 L 2 22 L 14 22" strokeLinecap="round" />
                    <circle cx="2" cy="22" r="1.5" fill="currentColor" />
                    <polygon points="7,17 9,15 11,17 9,19" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 w-7 h-7 pointer-events-none text-starlight-blue drop-shadow-[0_0_6px_rgba(169,201,255,0.8)] z-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 22 10 L 22 22 L 10 22" strokeLinecap="round" />
                    <circle cx="22" cy="22" r="1.5" fill="currentColor" />
                    <polygon points="17,17 19,15 15,17 17,19" fill="currentColor" stroke="none" />
                  </svg>
                </div>

                {/* 5. Inner Inset Golden-Silver Beveled Rail */}
                <div className="p-1 rounded-2xl bg-gradient-to-b from-starlight-blue/80 via-white/30 to-starlight-lavender/80 shadow-inner">
                  
                  {/* 6. Photo Window Canvas */}
                  <div className="relative w-64 sm:w-80 md:w-84 aspect-[3/4] rounded-[14px] overflow-hidden bg-gradient-to-b from-[#0A1638] via-[#040C22] to-[#020614]">
                    {!hasError ? (
                      <img
                        src={photoSrc}
                        alt="Sarathuu"
                        onError={() => setHasError(true)}
                        className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      /* Eye-Catching Constellation Silhouette Placeholder */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-b from-[#0B1A45] via-[#071334] to-[#03091E]">
                        
                        {/* Constellation background grid lines */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A9C9FF_1px,transparent_1px)] [background-size:16px_16px]" />
                        
                        {/* Central Glowing Celestial Avatar Frame */}
                        <div className="relative w-24 h-24 mb-4">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-starlight-blue via-starlight-lavender to-transparent p-[2px] shadow-glow-soft">
                            <div className="w-full h-full rounded-full bg-[#08153A] flex items-center justify-center">
                              <ImageIcon className="w-10 h-10 text-starlight-blue/90" />
                            </div>
                          </div>
                          {/* Pulsing satellite star */}
                          <div className="absolute -top-1 right-2 w-3 h-3 bg-starlight-lavender rounded-full shadow-[0_0_8px_#C8B9FF] animate-ping" />
                        </div>

                        <h4 className="font-serif text-xl font-semibold text-white tracking-wide">
                          Sarathuu's Portrait
                        </h4>
                        <p className="text-xs font-mono text-starlight-silver/80 mt-1">
                          sarath.jpg
                        </p>

                        <div className="mt-4 px-3.5 py-1.5 rounded-full bg-galaxy-navy/90 border border-starlight-blue/30 text-[11px] font-mono text-starlight-blue flex items-center gap-2 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5 text-starlight-lavender" />
                          <span>Place in /public/images/sarath.jpg</span>
                        </div>
                      </div>
                    )}

                    {/* 7. Mesmerizing Dynamic Starlight Glass Shimmer Sweep (Linear diagonal beam, no rotation) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="w-[120%] h-[200%] absolute -top-1/2 -left-1/4 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer-sweep" />
                    </div>

                    {/* 8. Hover Prompt Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3 h-3 text-starlight-blue" />
                        <span>Tap to View Photo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Polished Metallic Exhibition Plaque */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 sm:px-8 py-2 rounded-full bg-gradient-to-r from-[#0C1A3E] via-[#1A336C] to-[#0C1A3E] border-2 border-starlight-blue/80 shadow-[0_8px_25px_rgba(3,8,23,0.9),0_0_15px_rgba(169,201,255,0.4)] flex items-center gap-2.5 z-20 whitespace-nowrap">
                  <span className="text-starlight-lavender text-xs">✦</span>
                  <span className="font-serif font-bold text-xs sm:text-sm tracking-widest text-white uppercase drop-shadow">
                    SARATHUU
                  </span>
                  <span className="text-starlight-lavender text-xs">✦</span>
                </div>
              </div>
            </div>

            {/* Ornamental Cosmic Divider */}
            <div className="flex items-center justify-center gap-3 w-full max-w-md pt-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-starlight-blue/30 to-starlight-blue/60" />
              <div className="w-2 h-2 rotate-45 bg-starlight-lavender shadow-glow-soft" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-starlight-blue/30 to-starlight-blue/60" />
            </div>

            {/* Heartfelt Matter About Him */}
            <div className="space-y-6 max-w-2xl text-left sm:text-center">
              <h3 className="font-cursive text-3xl sm:text-4xl text-starlight-lavender text-glow-lavender text-center">
                "A friend who makes life lighter just by being in it."
              </h3>

              <div className="space-y-4 text-slate-100 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  There are people who come into our lives and leave an impression without even trying. <strong className="text-white font-medium">Sarathuu</strong>, you are genuinely one of the rarest people I know.
                </p>
                <p>
                  Your calm presence, your patience, and the way you listen when words are hard to find have meant more than you probably realize. You have stood by me with quiet loyalty, supported me during moments when things felt heavy, and offered understanding without asking for explanations.
                </p>
                <p className="font-serif italic text-lg sm:text-xl text-starlight-silver font-normal border-l-2 sm:border-l-0 sm:border-y border-starlight-blue/30 pl-3 sm:pl-0 sm:py-3">
                  "Never change your golden heart. The kindness and warmth you carry are gifts to everyone around you."
                </p>
              </div>

              {/* Footnote Badge */}
              <div className="pt-4 border-t border-galaxy-border/30 flex items-center justify-center gap-2 text-xs font-mono text-starlight-blue/70 tracking-wider uppercase">
                <Heart className="w-3.5 h-3.5 text-starlight-lavender fill-starlight-lavender" />
                <span>Dedicated to Sarathuu — Always</span>
                <Heart className="w-3.5 h-3.5 text-starlight-lavender fill-starlight-lavender" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
