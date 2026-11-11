import { useState, useEffect } from 'react';

/**
 * Custom hook for smooth typing and deleting text animation
 * @param {string[]} words - Array of strings to cycle through
 * @param {number} typingSpeed - Delay between typed characters in ms
 * @param {number} deletingSpeed - Delay between deleted characters in ms
 * @param {number} pauseDuration - Pause time once word is fully typed
 */
export function useTypingEffect(words = [], typingSpeed = 90, deletingSpeed = 45, pauseDuration = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isTyping: !isPaused };
}

