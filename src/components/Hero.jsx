import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  FileDown,
  MessageSquare,
  ArrowRight,
  MapPin,
  Linkedin,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { personalData, quickFacts } from '../data/data';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { trackConversion } from '../utils/analytics';
import profileImg from '../assets/profile.jpg';

/**
 * Recruiter-first Hero Section designed for <5s decision making
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { displayText } = useTypingEffect(personalData.typingRoles, 75, 35, 1800);
  const [imgError, setImgError] = useState(false);
  const [hasValidImage, setHasValidImage] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' },
    },
  };

  const handleBooking = (e) => {
    trackConversion('click_hero_schedule_interview', 'Hero Section');
    if (!personalData.bookingUrl) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-grid-pattern scroll-mt-24"
    >
      {/* Animated Aurora Mesh Background (Emerald + Teal + Indigo glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Outcome-Focused Recruiter Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status, Location & Remote Badge Chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                {personalData.availabilityStatus}
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {personalData.location}
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/5 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {personalData.openTo}
              </span>
            </motion.div>

            {/* Candidate Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                {personalData.name}
              </h1>
            </motion.div>

            {/* Outcome-focused Headline */}
            <motion.div variants={itemVariants} className="mt-3">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 tracking-tight leading-snug">
                {personalData.headline}
              </p>
            </motion.div>

            {/* Secondary Cycling Line - Glitch-Free Terminal Style */}
            <motion.div
              variants={itemVariants}
              className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-mono text-slate-700 dark:text-slate-300 min-h-[30px]"
            >
              <span className="text-emerald-500 font-bold">&gt;</span>
              <span className="text-slate-500 dark:text-slate-400">Specialization:</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {displayText}
              </span>
              <span className="inline-block w-1.5 h-4 bg-emerald-500 animate-pulse" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {personalData.tagline} Delivered 10+ production projects across high-concurrency microservices, localized payment gateways, and AI automation.
            </motion.p>

            {/* Conversion Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {/* PRIMARY CTA: Schedule an Interview */}
              <a
                href={personalData.bookingUrl || "#contact"}
                target={personalData.bookingUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow hover:shadow-glow-lg transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule an Interview</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp Me */}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_hero_whatsapp', 'Hero Section')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700/80 shadow-sm transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Me</span>
              </a>

              {/* Download CV */}
              <a
                href={personalData.resumePath}
                download="Kashif_Ur_Rehman_Resume.pdf"
                onClick={() => trackConversion('click_hero_download_cv', 'Hero Section')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-sm transition-all duration-200 hover:border-emerald-500/40 active:scale-95 group"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
                <span className="text-[11px] font-mono text-emerald-400/80">
                  (PDF · {personalData.cvUpdatedDate})
                </span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Socials & Trust Proof */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Verified Profile:
              </span>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_hero_linkedin', 'Hero Section')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <span className="text-xs text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>SonarQube &amp; Mend Bolt clean code track record</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: Visual Avatar + "Quick Facts" Glass Stack */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6 relative"
          >
            {/* Profile Avatar / Initials Frame */}
            <div className="relative group">
              {/* Outer pulsing emerald gradient aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />

              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-slate-950 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/40 flex items-center justify-center relative shadow-inner">
                  {/* Photo with fallback check */}
                  {!imgError && (
                    <img
                      src={profileImg}
                      alt={personalData.name}
                      onLoad={(e) => {
                        // If placeholder is just a dummy 1x1, show initials avatar instead of black void
                        if (e.target.naturalWidth > 10) {
                          setHasValidImage(true);
                        } else {
                          setImgError(true);
                        }
                      }}
                      onError={() => setImgError(true)}
                      className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                        hasValidImage ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                    />
                  )}

                  {/* High-End Initials Avatar (renders if no real photo or before load) */}
                  {(!hasValidImage || imgError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 text-center select-none p-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2">
                        <Terminal className="w-6 h-6 text-emerald-400" />
                      </div>
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-widest">
                        {personalData.initials}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 mt-1 uppercase tracking-wider">
                        Full Stack Dev
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Ring Tag */}
              <div className="absolute -bottom-1 -right-1 bg-slate-950 border border-emerald-500/40 rounded-full px-3 py-1 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                  Active
                </span>
              </div>
            </div>

            {/* "Quick Facts" Glass Card Stack (strictly from CV facts) */}
            <div className="w-full max-w-sm space-y-2.5 animate-float">
              {quickFacts.map((fact) => (
                <div
                  key={fact.id}
                  className="glass p-3 px-4 rounded-xl border border-slate-200/40 dark:border-slate-800/80 shadow-md hover:border-emerald-500/40 hover:shadow-glow transition-all flex items-center justify-between gap-3 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white font-mono">
                        {fact.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {fact.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    {fact.highlight}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
