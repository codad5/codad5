'use client';

import { useEffect, useState } from 'react';

/** True once the element with `id` has scrolled above the viewport top. */
export function useScrollPast(id: string) {
  const [pastEl, setPastEl] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastEl(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return pastEl;
}
