import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Compass, Shield, Smile, Eye, Home } from 'lucide-react';
import { content } from '../data/content';

const cardIcons = [
  Heart,    // 1. You make people feel less alone.
  Shield,   // 2. Your presence speaks louder than promises.
  Sparkles, // 3. You have a heart that knows how to look after people.
  Eye,      // 4. You notice the things others might overlook.
  Home,     // 5. You make unfamiliar places feel a little safer.
  Star,     // 6. The world needs more people with a heart like yours.
];

export default function ReminderSection() {
  const { reminder } = content;

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-12 z-10 overflow-hidden">
      {/* Background galaxy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial-gradient from-galaxy-navy/35 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-starlight-lavender/80 px-3.5 py-1 rounded-full bg-galaxy-navy/70 border border-galaxy-border inline-block shadow-glow-soft">
            {reminder.subtitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white text-glow-white">
            {reminder.heading}
          </h2>
          <p className="font-cursive text-2xl sm:text-3xl text-starlight-blue">
            Dedicated to Sarathuu
          </p>
        </motion.div>

        {/* 6 Elegant Glassmorphism Cards Grid with Unique Subtle Reveal Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reminder.messages.map((message, index) => {
            const IconComponent = cardIcons[index % cardIcons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-[#091538]/90 backdrop-blur-md p-7 sm:p-8 rounded-2xl border border-starlight-blue/30 hover:border-starlight-blue/70 transition-all duration-300 shadow-xl hover:shadow-glow-soft flex flex-col justify-between"
              >
                {/* Luminous accent backdrop on hover */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-starlight-blue/10 blur-xl group-hover:bg-starlight-blue/20 transition-all duration-300 pointer-events-none" />

                <div className="space-y-5">
                  {/* Card Number Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-starlight-lavender/70 px-2.5 py-0.5 rounded-full bg-galaxy-navy border border-galaxy-border">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-galaxy-deep border border-galaxy-border flex items-center justify-center text-starlight-blue group-hover:text-white group-hover:border-starlight-blue/60 group-hover:shadow-glow-soft transition-all duration-300">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Card Message Text - Crystal Clear, Sharp & Readable */}
                  <p className="font-serif text-xl sm:text-2xl text-white font-medium leading-relaxed group-hover:text-starlight-lavender transition-colors duration-300">
                    "{message}"
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 mt-6 border-t border-galaxy-border/30 flex items-center justify-between text-[11px] font-mono text-starlight-silver/50">
                  <span>For Sarathuu</span>
                  <Heart className="w-3.5 h-3.5 text-starlight-lavender/40 group-hover:text-starlight-lavender group-hover:fill-starlight-lavender transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
