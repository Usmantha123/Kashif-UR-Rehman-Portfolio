import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Accessible back to top button that fades in after scrolling down
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-slate-900/90 dark:bg-slate-800/90 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

