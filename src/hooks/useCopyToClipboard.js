import { useState, useCallback } from 'react';

/**
 * Custom hook to copy text to clipboard with feedback status
 * @param {number} resetTimeout - Time in ms before resetting copied state
 */
export function useCopyToClipboard(resetTimeout = 2500) {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = useCallback(
    async (text) => {
      if (!text) return false;

      let success = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          success = true;
        } else {
          // Fallback for non-https or older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          success = document.execCommand('copy');
          textArea.remove();
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
        success = false;
      }

      if (success) {
        setCopied(true);
        setCopiedText(text);
        setTimeout(() => {
          setCopied(false);
          setCopiedText(null);
        }, resetTimeout);
      }

      return success;
    },
    [resetTimeout]
  );

  return { copied, copiedText, copyToClipboard };
}

