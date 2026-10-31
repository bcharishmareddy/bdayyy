import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MailOpen } from 'lucide-react';
import { content } from '../data/content';

export default function LetterSection() {
  const { letter } = content;
  // 'sealed' | 'opening' | 'open'
  const [stage, setStage] = useState('sealed');

  const handleOpenLetter = () => {
    if (stage !== 'sealed') return;
    setStage('opening');
    setTimeout(() => {
      setStage('open');
    }, 1100);
  };

  const handleCloseLetter = () => {
    setStage('sealed');
  };

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-12 z-10">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-lavender/70 px-3.5 py-1 rounded-full bg-galaxy-navy/60 border border-galaxy-border inline-block">
            Personal & Confidential
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            {letter.heading}
          </h2>
          <p className="font-cursive text-2xl sm:text-3xl text-starlight-blue">
            {letter.teaserText}
          </p>
        </motion.div>

        {/* Interactive Envelope or Revealed Letter */}
        <div className="flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === 'sealed' || stage === 'opening' ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col items-center"
              >
                {/* Ambient Soft Glow */}
                <div className="absolute -inset-10 rounded-full bg-starlight-blue/10 blur-3xl pointer-events-none -z-10" />

                {/* 3D Envelope Container */}
                <div
                  onClick={handleOpenLetter}
                  className="relative w-[310px] sm:w-[420px] h-[210px] sm:h-[270px] cursor-pointer group transition-transform duration-500 hover:scale-105"
                >
                  {/* Envelope Base */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-galaxy-navy to-galaxy-deep border border-galaxy-border shadow-2xl overflow-hidden" />

                  {/* Envelope Flap Triangular Fold (Left & Right) */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                      background: 'linear-gradient(180deg, #0e1e4a 0%, #07152f 100%)',
                      border: '1px solid rgba(169, 201, 255, 0.2)',
                    }}
                  />

                  {/* Top Flap (Rotates on open) */}
                  <motion.div
                    initial={{ rotateX: 0 }}
                    animate={stage === 'opening' ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      transformOrigin: 'top center',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      background: 'linear-gradient(180deg, #132559 0%, #0b1940 100%)',
                      borderTop: '1px solid rgba(169, 201, 255, 0.3)',
                    }}
                    className="absolute top-0 left-0 right-0 h-[115px] sm:h-[145px] shadow-lg flex items-center justify-center"
                  >
                    {/* Wax Monogram Seal */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-starlight-lavender via-[#8E77E5] to-galaxy-navy border-2 border-starlight-silver/80 shadow-glow-star flex items-center justify-center">
                      <span className="font-serif text-lg font-bold text-white tracking-widest">
                        S
                      </span>
                    </div>
                  </motion.div>

                  {/* Inside letter peek */}
                  <div className="absolute inset-x-6 top-6 h-36 rounded-lg bg-galaxy-deep border border-starlight-blue/30 p-4 flex flex-col items-center justify-center text-center z-10 opacity-80">
                    <p className="font-cursive text-2xl text-starlight-lavender">
                      Dear Sarathuu,
                    </p>
                    <span className="text-[10px] font-mono text-starlight-silver/50 mt-1">
                      Tap below to read
                    </span>
                  </div>
                </div>

                {/* Open Letter Action Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 text-center"
                >
                  <button
                    onClick={handleOpenLetter}
                    disabled={stage === 'opening'}
                    className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-galaxy-navy via-galaxy-deep to-galaxy-navy border border-starlight-blue/40 hover:border-starlight-blue text-white font-medium text-base tracking-wide transition-all duration-300 shadow-glow-soft hover:shadow-glow-lg hover:scale-105"
                  >
                    <MailOpen className="w-5 h-5 text-starlight-lavender group-hover:rotate-12 transition-transform duration-300" />
                    <span>{stage === 'opening' ? 'Opening...' : letter.openButtonText}</span>
                  </button>
                  <p className="text-xs text-starlight-silver/50 font-mono mt-2.5">
                    Written with genuine appreciation • Click to unseal
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              /* Expanded Letter Sheet */
              <motion.div
                key="letter-sheet"
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 30 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative letter-sheet max-w-3xl w-full rounded-3xl p-8 sm:p-14 text-left shadow-2xl relative overflow-hidden"
              >
                {/* Watermark */}
                <div className="absolute top-6 right-8 text-starlight-blue/10 font-serif text-7xl select-none pointer-events-none">
                  ✧
                </div>

                <div className="space-y-6">
                  {/* Salutation */}
                  <p className="font-cursive text-3xl sm:text-4xl text-starlight-lavender">
                    {letter.greeting}
                  </p>

                  {/* Letter Paragraphs */}
                  <div className="space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed font-light">
                    {letter.paragraphs.map((para, idx) => (
                      <p
                        key={idx}
                        className={
                          idx === 0 || idx === letter.paragraphs.length - 1
                            ? 'font-serif text-xl sm:text-2xl text-white font-normal'
                            : ''
                        }
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Closing */}
                  <div className="pt-8 border-t border-galaxy-border/40 mt-8 space-y-2">
                    <p className="font-serif italic text-xl sm:text-2xl text-starlight-silver">
                      {letter.closing}
                    </p>
                    <p className="text-slate-300 text-sm font-light">
                      {letter.signOff}
                    </p>
                    <p className="font-cursive text-3xl sm:text-4xl text-starlight-lavender text-glow-lavender">
                      {letter.signature}
                    </p>
                  </div>
                </div>

                {/* Close/Fold Back Button */}
                <div className="mt-10 text-center">
                  <button
                    onClick={handleCloseLetter}
                    className="text-xs font-mono text-starlight-silver/50 hover:text-starlight-blue transition-colors py-1.5 px-4 rounded-full border border-galaxy-border/50 hover:border-starlight-blue/50"
                  >
                    ← Fold letter back into envelope
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
