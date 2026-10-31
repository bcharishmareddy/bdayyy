import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import ParticleWaves from './components/ParticleWaves';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import AppreciationCards from './components/AppreciationCards';
import ReminderSection from './components/ReminderSection';
import SarathSpotlight from './components/SarathSpotlight';
import PersonalMessages from './components/PersonalMessages';
import LetterSection from './components/LetterSection';
import BirthdayCelebration from './components/BirthdayCelebration';
import FinalSection from './components/FinalSection';
import Lightbox from './components/Lightbox';
import MusicToggle from './components/MusicToggle';

export default function App() {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenPhoto = (photoSrc) => {
    setLightboxPhotos([
      {
        src: photoSrc,
        caption: "Sarathuu — The man of the day",
        date: "November 1, 2026",
        tag: "Sarathuu",
      },
    ]);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  const handleScrollToNext = () => {
    const el = document.getElementById('intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030817] text-[#DDE6FF] selection:bg-[#C8B9FF]/30 selection:text-white">
      {/* Light Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Galaxy Canvas Starfield */}
      <StarBackground />

      {/* Luminous Flowing Particle Waves */}
      <ParticleWaves />

      {/* Ambient Music Toggle */}
      <MusicToggle />

      {/* Continuous Scrolling Website Content */}
      <main className="relative z-10">
        {/* SECTION 1: The Birthday Surprise — Hero Screen */}
        <HeroSection onExploreClick={handleScrollToNext} />

        {/* SECTION 2: The Introduction */}
        <Introduction />

        {/* SECTION 3: What Makes You Special */}
        <AppreciationCards />

        {/* SECTION 4: A Little Reminder */}
        <ReminderSection />

        {/* SECTION 5: Sarath's Photo & Heartfelt Matter About Him */}
        <SarathSpotlight onPhotoClick={handleOpenPhoto} />

        {/* SECTION 6: Things I May Not Say Often */}
        <PersonalMessages />

        {/* SECTION 7: A Personal Letter */}
        <LetterSection />

        {/* SECTION 8: Birthday Celebration (Blasting Celebration with Cake) */}
        <BirthdayCelebration />

        {/* SECTION 9: The Last Session of Wishing */}
        <FinalSection onScrollToTop={handleScrollToTop} />
      </main>

      {/* Full-Screen Interactive Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </div>
  );
}
