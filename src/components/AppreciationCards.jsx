import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Compass, Clock, Sparkles, Star } from 'lucide-react';
import { content } from '../data/content';

const iconMap = {
  Heart: Heart,
  Shield: Shield,
  Compass: Compass,
  Clock: Clock,
  Sparkles: Sparkles,
  Star: Star,
};

export default function AppreciationCards() {
  const { specialQualities } = content;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-blue/70 px-3 py-1 rounded-full bg-galaxy-navy/60 border border-galaxy-border inline-block">
            {specialQualities.subtitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            {specialQualities.heading}
          </h2>
        </motion.div>

        {/* 6 Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialQualities.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Star;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative galaxy-card p-7 sm:p-8 rounded-2xl border border-galaxy-border hover:border-starlight-blue/50 transition-all duration-300 shadow-glass-card flex flex-col justify-between"
              >
                {/* Soft glowing particle behind icon */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-starlight-blue/5 blur-xl group-hover:bg-starlight-blue/15 transition-all duration-300 pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon Emblem */}
                  <div className="w-12 h-12 rounded-xl bg-galaxy-deep border border-galaxy-border flex items-center justify-center text-starlight-blue group-hover:text-white group-hover:border-starlight-blue/60 group-hover:shadow-glow-soft transition-all duration-300">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide group-hover:text-starlight-lavender transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* Bottom starlight accent line */}
                <div className="pt-6 mt-6 border-t border-galaxy-border/30 flex items-center justify-between text-[11px] font-mono text-starlight-silver/50">
                  <span>Sarathuu • 0{index + 1}</span>
                  <Sparkles className="w-3 h-3 text-starlight-blue/40 group-hover:text-starlight-blue transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
