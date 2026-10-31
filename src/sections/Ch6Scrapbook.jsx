import React, { useState } from 'react';
import ChapterShell from '../components/ChapterShell';
import Polaroid from '../components/Polaroid';
import FilmStrip from '../components/FilmStrip';
import MemoryCard from '../components/MemoryCard';
import Timeline from '../components/Timeline';
import { content } from '../data/content';

export default function Ch6Scrapbook({ onOpenLightbox }) {
  const { chapterTag, title, subtitle, timeline } = content.ch6;
  const { photos } = content.ch3;
  const [activeTab, setActiveTab] = useState('scrapbook'); // 'scrapbook' | 'timeline'

  // Pre-assigned playful rotations for the scrapbook items
  const rotations = [-2.5, 3.2, -1.8, 2.5, -3.1, 1.9, -2.2];

  return (
    <ChapterShell
      id="ch6"
      chapterNumber={5}
      chapterTag={chapterTag}
      title={title}
      subtitle={subtitle}
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* View Switcher: Interactive Scrapbook vs Chronological Timeline */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('scrapbook')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === 'scrapbook'
                ? 'bg-lavender text-midnight font-semibold shadow-star-glow scale-105'
                : 'bg-midnight-deep/60 text-slate-300 hover:text-white hover:bg-midnight-deep border border-lavender/20'
            }`}
          >
            ✧ Memory Scrapbook
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === 'timeline'
                ? 'bg-lavender text-midnight font-semibold shadow-star-glow scale-105'
                : 'bg-midnight-deep/60 text-slate-300 hover:text-white hover:bg-midnight-deep border border-lavender/20'
            }`}
          >
            ⏱ Feb – Nov 2026 Timeline
          </button>
        </div>

        {/* Tab 1: Interactive Scrapbook (Polaroids, FilmStrips, MemoryCards) */}
        {activeTab === 'scrapbook' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start pt-4">
            {photos.map((photo, index) => {
              const rot = rotations[index % rotations.length];

              if (photo.layout === 'filmstrip') {
                return (
                  <div key={photo.id || index} className="sm:col-span-2 lg:col-span-1">
                    <FilmStrip
                      photo={photo}
                      onClick={() => onOpenLightbox && onOpenLightbox(photo, photos)}
                    />
                  </div>
                );
              }

              if (photo.layout === 'memory-card') {
                return (
                  <MemoryCard
                    key={photo.id || index}
                    photo={photo}
                    onClick={() => onOpenLightbox && onOpenLightbox(photo, photos)}
                  />
                );
              }

              // Default: Polaroid layout
              return (
                <Polaroid
                  key={photo.id || index}
                  photo={photo}
                  rotation={rot}
                  hasTape={true}
                  onClick={() => onOpenLightbox && onOpenLightbox(photo, photos)}
                />
              );
            })}
          </div>
        )}

        {/* Tab 2: Chronological Timeline (February to November 2026) */}
        {activeTab === 'timeline' && (
          <Timeline
            entries={timeline}
            onPhotoClick={(src) =>
              onOpenLightbox &&
              onOpenLightbox(
                {
                  src,
                  caption: 'Timeline memory',
                  date: '2026',
                  category: 'Timeline',
                },
                [{ src, caption: 'Timeline memory', date: '2026', category: 'Timeline' }]
              )
            }
          />
        )}
      </div>
    </ChapterShell>
  );
}
