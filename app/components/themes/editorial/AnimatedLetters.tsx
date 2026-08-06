'use client';

import { CSSProperties, useEffect, useState } from 'react';

const POP_COLORS = ['#e8734a', '#f2c14e', '#6fbf8b', '#5aa9e6', '#c77dff', '#ff6b6b', '#f2917a', '#8fd6c4'];

interface AnimatedLettersProps {
  text: string;
  className?: string;
  /** ms between each letter's entrance pop */
  letterDelay?: number;
}

export default function AnimatedLetters({ text, className = '', letterDelay = 110 }: AnimatedLettersProps) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPlay(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <span className={`ed-letters ${play ? 'ed-play' : ''} ${className}`}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="ed-letter"
          style={{
            ['--pop-delay' as string]: `${i * letterDelay}ms`,
            ['--pop-color' as string]: POP_COLORS[i % POP_COLORS.length],
          } as CSSProperties}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  );
}
