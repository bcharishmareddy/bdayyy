import React from 'react';
import ChapterShell from '../components/ChapterShell';
import Envelope from '../components/Envelope';
import { content } from '../data/content';

export default function Ch7Letter() {
  const { chapterTag, title, subtitle } = content.ch7;

  return (
    <ChapterShell
      id="ch7"
      chapterNumber={6}
      chapterTag={chapterTag}
      title={title}
      subtitle={subtitle}
    >
      <Envelope />
    </ChapterShell>
  );
}
