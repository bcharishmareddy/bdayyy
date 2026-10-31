import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import Letter from './Letter';

export default function Envelope() {
  // states: 'sealed' | 'opening' | 'sliding' | 'opened'
  const [stage, setStage] = useState('sealed');

  const handleOpen = () => {
    if (stage !== 'sealed') return;
    setStage('opening');

    // Flap opens ~900ms
    setTimeout(() => {
      setStage('sliding');

      // Letter slides out ~700ms
      setTimeout(() => {
        setStage('opened');
      }, 700);
    }, 900);
  };

  const handleClose = () => {
    setStage('sealed');
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
      {stage === 'opened' ? (
        <Letter onFoldBack={handleClose} />
      ) : (
        <div className="relative flex flex-col items-center">
          {/* Ambient Glow */}
          <div className="absolute -inset-10 rounded-full bg-lavender/10 blur-3xl -z-10" />

          {/* Interactive Sealed Envelope Container */}
          <div
            onClick={handleOpen}
            className={`relative w-[310px] sm:w-[380px] h-[210px] sm:h-[250px] cursor-pointer group transition-transform duration-500 ${
              stage === 'sealed' ? 'hover:scale-105' : ''
            }`}
          >
            {/* Envelope Back Base */}
            <div className="absolute inset-0 rounded-xl bg-[#141B4D] border border-lavender/30 shadow-2xl overflow-hidden" />

            {/* Sliding Letter Preview (slides up during 'sliding') */}
            <motion.div
              initial={{ y: 0 }}
              animate={
                stage === 'sliding'
                  ? { y: -160, opacity: 1 }
                  : { y: 0, opacity: 0.9 }
              }
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 right-4 top-4 h-[180px] rounded-lg letter-sheet border border-lavender/40 p-4 shadow-lg z-10 flex flex-col justify-center items-center text-center"
            >
              <div className="w-8 h-8 rounded-full bg-lavender/10 flex items-center justify-center mb-2">
                <Sparkles className="w-4 h-4 text-lavender" />
              </div>
              <p className="font-handwriting text-xl text-slate-200">
                Dear Sarath,
              </p>
              <p className="text-[11px] font-mono text-lavender-light/50 mt-1">
                A letter for your birthday
              </p>
            </motion.div>

            {/* Envelope Front Left & Right Fold Triangles */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                background: 'linear-gradient(180deg, #18225E 0%, #10163E 100%)',
                border: '1px solid rgba(185, 167, 255, 0.25)',
              }}
            />

            {/* Top Flap (rotates open during 'opening' and 'sliding') */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={
                stage === 'opening' || stage === 'sliding'
                  ? { rotateX: 180, zIndex: 5 }
                  : { rotateX: 0, zIndex: 30 }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: 'top center',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, #1C266B 0%, #141B4D 100%)',
                borderTop: '1px solid rgba(185, 167, 255, 0.35)',
              }}
              className="absolute top-0 left-0 right-0 h-[115px] sm:h-[135px] shadow-lg flex items-center justify-center"
            >
              {/* Wax Seal placed on the point of the flap */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-lavender via-lavender-dim to-midnight border-2 border-starlight-gold/60 shadow-star-glow flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-white tracking-widest">
                  S
                </span>
              </div>
            </motion.div>
          </div>

          {/* Action Prompt below envelope */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <button
              onClick={handleOpen}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-lavender/15 hover:bg-lavender/25 border border-lavender/30 text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-star-glow hover:scale-105"
            >
              <Heart className="w-4 h-4 text-starlight-pink fill-starlight-pink" />
              <span>Tap to unseal Sarath's letter</span>
            </button>
            <p className="text-xs text-lavender-light/50 font-mono mt-2">
              Sealed under the stars • Click to open
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
