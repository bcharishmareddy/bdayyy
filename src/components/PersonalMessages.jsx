import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { content } from '../data/content';

export default function PersonalMessages() {
  const { messages } = content;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-blue/70 px-3 py-1 rounded-full bg-galaxy-navy/60 border border-galaxy-border inline-block">
            {messages.subtitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            {messages.heading}
          </h2>
        </motion.div>

        {/* 6 Individual Animated Text Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {messages.cards.map((messageText, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group galaxy-card p-6 sm:p-8 rounded-2xl border border-galaxy-border hover:border-starlight-lavender/50 transition-all duration-300 shadow-glass-card hover:shadow-glow-soft flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-starlight-blue/60">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-starlight-lavender" />
                    <span>Note 0{index + 1}</span>
                  </span>
                  <Heart className="w-3.5 h-3.5 text-starlight-lavender/40 group-hover:text-starlight-lavender transition-colors" />
                </div>

                <p className="font-serif text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
                  "{messageText}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-galaxy-border/20 text-right">
                <span className="text-[10px] font-mono text-starlight-silver/40">
                  For Sarathuu • Always
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
