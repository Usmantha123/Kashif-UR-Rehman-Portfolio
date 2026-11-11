import { useState, useEffect } from 'react';

/**
 * Custom hook for smooth count-up number animation
 * @param {number} end - Target number to count up to
 * @param {number} duration - Total animation duration in ms
 * @param {number} decimals - Number of decimal places
 * @param {boolean} start - Trigger flag
 */
export function useCountUp(end, duration = 1800, decimals = 0, start = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out cubic formula
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * end;

      setCount(Number(currentVal.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, decimals, start]);

  return count;
}

