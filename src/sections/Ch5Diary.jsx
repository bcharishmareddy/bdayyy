import React from 'react';
import ChapterShell from '../components/ChapterShell';
import DiaryPage from '../components/DiaryPage';
import { content } from '../data/content';

export default function Ch5Diary() {
  const { chapterTag, title, subtitle } = content.ch5;

  return (
    <ChapterShell
      id="ch5"
      chapterNumber={4}
      chapterTag={chapterTag}
      title={title}
      subtitle={subtitle}
    >
      <DiaryPage />
    </ChapterShell>
  );
}
