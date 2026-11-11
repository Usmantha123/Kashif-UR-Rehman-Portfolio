import React, { useState } from 'react';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { personalData } from '../data/data';
import { trackConversion } from '../utils/analytics';

/**
 * Floating WhatsApp trigger on desktop and sticky bottom conversion bar on mobile
 */
export default function StickyActions() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleBooking = (e) => {
    trackConversion('click_mobile_book_interview', 'Sticky Mobile Bar');
    if (!personalData.bookingUrl) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (hidden on mobile) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute right-0 bottom-full mb-3 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-blue-500/40 text-white text-xs font-medium shadow-xl whitespace-nowrap animate-fade-in flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Chat with Kashif</span>
            </div>
          )}

          <a
            href={personalData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => trackConversion('click_floating_whatsapp', 'Desktop Float')}
            className="flex items-center justify-center w-14 h-14 p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-glow hover:shadow-glow-lg border border-blue-400/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Chat with Kashif on WhatsApp"
            title="Chat with Kashif"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar (hidden on md and larger) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/90 p-2.5 px-4 flex items-center justify-between gap-2.5 shadow-2xl safe-area-pb">
        {/* Book Interview */}
        <a
          href={personalData.bookingUrl || "#contact"}
          target={personalData.bookingUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={handleBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all text-center"
        >
          <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="truncate">Book Interview</span>
        </a>

        {/* WhatsApp */}
        <a
          href={personalData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion('click_mobile_whatsapp', 'Sticky Mobile Bar')}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-semibold bg-slate-800/90 text-slate-100 border border-slate-700/80 active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Direct Call */}
        <a
          href={`tel:${personalData.phoneRaw}`}
          onClick={() => trackConversion('click_mobile_call', 'Sticky Mobile Bar')}
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800/90 text-blue-400 border border-slate-700/80 active:scale-95 transition-all shrink-0"
          aria-label="Direct Phone Call to Kashif"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}

