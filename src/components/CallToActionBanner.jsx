import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, MessageSquare, FileDown, ArrowRight, Sparkles } from 'lucide-react';
import { personalData } from '../data/data';
import { trackConversion } from '../utils/analytics';

/**
 * Full-width high-converting CTA banner before footer
 */
export default function CallToActionBanner() {
  const shouldReduceMotion = useReducedMotion();

  const handleBookingClick = (e) => {
    trackConversion('click_booking_cta_banner', 'CTA Banner');
    if (!personalData.bookingUrl) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95 to-emerald-950/40 border border-emerald-500/30 shadow-2xl text-center"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Immediate Impact</span>
          </div>

          {/* Headline */}
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Hiring a Backend / Full Stack Developer?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Let&apos;s schedule a 15-minute call.
            </span>
          </h2>

          <p className="relative mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a dedicated Node.js/NestJS engineer, microservice architect, or end-to-end full stack builder, I am ready to contribute from day one.
          </p>

          {/* Actions */}
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalData.bookingUrl || "#contact"}
              target={personalData.bookingUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={handleBookingClick}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow hover:shadow-glow-lg transition-all duration-200 active:scale-95 group"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Book an Interview</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('click_whatsapp_cta_banner', 'CTA Banner')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Me</span>
            </a>

            <a
              href={personalData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('view_cv_cta_banner', 'CTA Banner')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              <FileDown className="w-4 h-4 text-slate-400" />
              <span>View CV</span>
              <span className="text-[11px] font-mono text-emerald-400/80">({personalData.cvUpdatedDate})</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

