# HAPPYYYY BDAYYYYY SARATHUUUUUUUUUUUUUUUU!!! ❤️

A bespoke, cinematic, deeply personal birthday celebration website built for **Sarath**, celebrating his birthday on **November 1, 2026**, and honoring a friendship that began in **February 2026**.

Designed with a breathtaking midnight-blue starry sky, thousands of glowing particles, flowing luminous particle waves on both sides, handwritten cursive typography, and continuous scrolling storytelling.

---

## ✨ Design & Visual Theme

- **Palette**:
  - Background: `#030817` (Deep Cosmic Midnight)
  - Secondary: `#07152F` (Deep Abyss)
  - Deep Navy: `#0B1940` (Celestial Navy)
  - Soft Blue: `#A9C9FF` (Luminous Starlight)
  - Lavender: `#C8B9FF` (Soft Starlight Lavender)
  - Silver: `#DDE6FF` (Moonlit Silver)
  - Pure White: `#FFFFFF` (Glow Highlights)
- **Typography**:
  - `Great Vibes` & `Allura` for elegant handwritten cursive greetings
  - `Cormorant Garamond` for emotional headings
  - `Inter` for clean, modern readability
- **Atmosphere**:
  - Canvas-based multi-layered starfield with thousands of twinkling stars
  - Flowing luminous particle waves undulating along both screen borders
  - Soft blue and lavender ambient backlights and film grain overlay
  - Glassmorphic cards with glowing starlight borders

---

## 🌟 Continuous Scrolling Website Structure

1. **Section 1: The Birthday Surprise — Hero Screen**
   - The main birthday greeting:
     `Happyyyy Bdayyyyy`
     `SARATHUUUUUUUUUUUUUUUU!!!` (Most prominent text)
   - Subtitle: *"A Chapter I Never Expected"*
   - Supporting line: *"Some people enter our lives unexpectedly and become someone we never want to lose."*
   - *"Today is all about youuuuu! ✨"*
   - Interactive button: *"There's Something for You ❤️"* (smoothly scrolls to Section 2).

2. **Section 2: The Introduction**
   - Heading: *"Some People Are Just Different."*
   - Heartfelt reflection on how an unexpected beginning in February 2026 became one of the most meaningful parts of life.

3. **Section 3: What Makes You Special**
   - Heading: *"What Makes You, YOU."*
   - Six animated glassmorphism cards:
     - **YOUR KINDNESS**
     - **YOUR SUPPORT**
     - **YOUR UNDERSTANDING**
     - **YOUR PATIENCE**
     - **YOUR POSITIVE PRESENCE**
     - **YOUR GENUINE NATURE**

4. **Section 4: A Little Reminder**
   - Heading: *"If You Ever Forget How Much You Matter..."*
   - Full-width cinematic text reveals with gentle glow.

5. **Section 5: Our Photographs**
   - Heading: *"A Few Moments Worth Keeping."*
   - Floating Polaroid-inspired photo frames with subtle rotations, tape textures, and hover animations.
   - Full-screen interactive lightbox (mobile swipe, arrow keys, ESC to close).
   - Centralized photo configuration in [`src/data/memories.js`](file:///d:/charishma%20reddy/bday/src/data/memories.js).
   - Missing photos automatically render elegant starry placeholders and never break the layout.

6. **Section 6: Things I May Not Say Often**
   - Heading: *"Things I Hope You Know."*
   - Six individual animated gratitude cards.

7. **Section 7: A Personal Letter (Emotional Highlight)**
   - Heading: *"Just Between You and Me."*
   - 3D interactive sealed envelope with an 'S' wax seal.
   - Clicking *"Open Your Letter 💌"* animates the envelope opening and unfolds the handwritten personal letter.

8. **Section 8: Birthday Celebration**
   - Heading: *"Today, The Universe Celebrates You."*
   - Animated celestial birthday cake with candles.
   - *"HAPPY BIRTHDAY, SARATH!"*
   - Interactive button: *"Make a Wish ✨"*
   - Clicking triggers a starburst celebration, lights the candles, and showers the screen with warm celestial confetti.

9. **Section 9: Final Screen**
   - *"Some people are unexpected gifts in our lives."*
   - *"And you are one of mine."*
   - Grand closing greeting:
     `Happyyyy Bdayyyyy SARATHUUUUUUUUUUUUUUUU!!! ❤️`
   - *"Made with love, appreciation and a little bit of magic."*
   - Button to replay the experience from the beginning.

---

## 📸 How to Add or Replace Photographs

1. Place your photo files inside:
   ```
   public/images/memories/
     ├── photo-1.jpg
     ├── photo-2.jpg
     ├── photo-3.jpg
     ├── photo-4.jpg
     ├── photo-5.jpg
     ├── photo-6.jpg
     ├── photo-7.jpg
     └── photo-8.jpg
   ```
2. Edit captions or dates in [`src/data/memories.js`](file:///d:/charishma%20reddy/bday/src/data/memories.js).
3. If any photo is not added yet, the site automatically displays a stylish starry placeholder ("Your photo goes here — photo-1.jpg") without breaking layout!

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment (Vercel / Netlify)

- **Vercel**: Import the repository on [vercel.com](https://vercel.com). Vite preset is detected automatically. Click Deploy.
- **Netlify**: Connect repository on [netlify.com](https://netlify.com). Build command: `npm run build`, Publish directory: `dist`.
