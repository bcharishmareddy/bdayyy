import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import PhotoStar from './PhotoStar';

export default function Timeline({ entries = [], onPhotoClick }) {
  return (
    <div className="relative py-10 max-w-4xl mx-auto">
      {/* Central glowing constellation line */}
      <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-lavender/10 via-lavender/40 to-lavender/10" />

      <div className="space-y-12 sm:space-y-16">
        {entries.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className={`relative flex flex-col sm:flex-row items-start ${
                isEven ? 'sm:flex-row-reverse' : ''
              } gap-6 sm:gap-12`}
            >
              {/* Star Node on the Timeline */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-lavender border-2 border-[#0B1030] shadow-star-glow z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>

              {/* Content Card (Staggered) */}
              <div
                className={`ml-10 sm:ml-0 w-full sm:w-[calc(50%-2rem)] glass-card p-5 sm:p-6 rounded-xl border border-lavender/20 shadow-glass ${
                  isEven ? 'sm:text-right' : 'sm:text-left'
                }`}
              >
                {/* Month pill */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lavender/10 border border-lavender/25 text-lavender-light text-xs font-mono mb-2.5 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <Calendar className="w-3 h-3 text-lavender" />
                  <span>{item.month}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Optional Photo Attachment */}
                {item.photo && (
                  <div className="mt-4 pt-3 border-t border-lavender/10">
                    <PhotoStar
                      src={item.photo}
                      alt={item.title}
                      caption={`${item.title} — ${item.month}`}
                      aspectRatio="aspect-video"
                      className="rounded-lg max-w-xs mx-auto"
                      onClick={() => onPhotoClick && onPhotoClick(item.photo)}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
