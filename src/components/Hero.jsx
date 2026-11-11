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
  CheckCircle2,
  ExternalLink,
  Briefcase,
  Layers,
  CreditCard,
  Cloud,
  Code2,
} from 'lucide-react';
import { personalData, quickFacts } from '../data/data';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { trackConversion } from '../utils/analytics';
import profileImg from '../assets/profile.jpg';

/**
 * High-Conversion Recruiter-First Hero Section
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { displayText } = useTypingEffect(personalData.typingRoles, 75, 35, 1800);
  const [imgError, setImgError] = useState(false);
  const [hasValidImage, setHasValidImage] = useState(false);

  // Split headline neatly: main outcome + secondary tech line
  const [headlineMain, headlineTech] = personalData.headline.includes('|')
    ? personalData.headline.split('|').map((s) => s.trim())
    : [personalData.headline, ''];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
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

  const getQuickFactIcon = (id) => {
    switch (id) {
      case 'exp':
        return <Briefcase className="w-3.5 h-3.5 text-emerald-500" />;
      case 'projects':
        return <Layers className="w-3.5 h-3.5 text-emerald-500" />;
      case 'payments':
        return <CreditCard className="w-3.5 h-3.5 text-emerald-500" />;
      case 'cloud':
        return <Cloud className="w-3.5 h-3.5 text-emerald-500" />;
      default:
        return <Code2 className="w-3.5 h-3.5 text-emerald-500" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-grid-pattern scroll-mt-24"
    >
      {/* Soft Animated Aurora Gradient Mesh Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-aurora" />

      {/* Bottom Gradient Fade blending smoothly into TechMarquee */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Visual Pitch & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badges Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {personalData.availabilityStatus}
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
                <MapPin className="w-3 h-3 text-emerald-500" />
                {personalData.location}
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/5 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {personalData.openTo}
              </span>
            </motion.div>

            {/* Candidate Name (Largest) */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">
                {personalData.name}
              </h1>
            </motion.div>

            {/* Fluid Outcome-Focused Headline */}
            <motion.div variants={itemVariants} className="mt-3 space-y-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18]">
                {headlineMain}
              </h2>
              {headlineTech && (
                <p className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-400">
                  {headlineTech}
                </p>
              )}
            </motion.div>

            {/* Terminal Typing Line */}
            <motion.div
              variants={itemVariants}
              className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300 min-h-[26px]"
            >
              <span className="text-emerald-500 font-bold">&gt;</span>
              <span className="text-slate-400 dark:text-slate-500">Specialization:</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {displayText}
              </span>
              <span className="inline-block w-1.5 h-3.5 bg-emerald-500 animate-pulse ml-0.5" />
            </motion.div>

            {/* Description (max ~60ch, softer color) */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-[60ch] mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {personalData.tagline} Delivered 10+ production projects across high-concurrency microservices, localized payment gateways, and AI automation.
            </motion.p>

            {/* Conversion Actions in a Tidy Row */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {/* PRIMARY CTA */}
              <a
                href={personalData.bookingUrl || "#contact"}
                target={personalData.bookingUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow hover:shadow-glow-lg transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule an Interview</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* SECONDARY: WhatsApp */}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_hero_whatsapp', 'Hero Section')}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm backdrop-blur-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Me</span>
              </a>

              {/* SECONDARY: View CV */}
              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_hero_view_cv', 'Hero Section')}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm backdrop-blur-md transition-all active:scale-95 group"
              >
                <FileDown className="w-4 h-4 text-emerald-500" />
                <span>View CV</span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  (PDF)
                </span>
              </a>

              {/* TERTIARY: View Projects text link */}
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Verified Profile Row with Fading Gradient Divider */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent mb-4" />
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Verified Profile:
                </span>
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('click_hero_linkedin', 'Hero Section')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:border-emerald-500/40 transition-colors shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Avatar + Compact "Quick Facts" Cards */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-5 relative"
          >
            {/* Profile Avatar Frame with Refined Gradient Ring */}
            <div className="relative group">
              {/* Outer pulsing emerald gradient aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 rounded-full blur-md opacity-70 group-hover:opacity-95 transition duration-500 animate-pulse" />

              <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full p-[3px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center relative shadow-inner">
                  {/* Photo with fallback check */}
                  {!imgError && (
                    <img
                      src={profileImg}
                      alt={personalData.name}
                      onLoad={(e) => {
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

                  {/* High-End Initials Avatar Fallback */}
                  {(!hasValidImage || imgError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 text-center select-none p-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-1.5">
                        <Terminal className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="font-mono text-2xl font-extrabold text-white tracking-widest">
                        {personalData.initials}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 mt-1 uppercase tracking-wider">
                        Full Stack Dev
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Ring Tag (non-awkward position) */}
              <div className="absolute -bottom-1 right-2 sm:right-4 bg-slate-950/95 border border-emerald-500/40 rounded-full px-3 py-1 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wide">
                  Active Pro
                </span>
              </div>
            </div>

            {/* Compact "Quick Facts" Glass Stack */}
            <div className="w-full max-w-sm space-y-2 animate-float">
              {quickFacts.map((fact) => (
                <div
                  key={fact.id}
                  className="glass-card p-2.5 px-3.5 rounded-2xl shadow-sm hover:border-emerald-500/50 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-3 text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getQuickFactIcon(fact.id)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white font-mono leading-tight">
                        {fact.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                        {fact.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
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
