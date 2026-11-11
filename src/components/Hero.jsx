import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  FileDown,
  MessageSquare,
  ArrowRight,
  Briefcase,
  Layers,
  Cloud,
  Code2,
  Github,
} from 'lucide-react';
import { personalData, quickFacts } from '../data/data';
import { trackConversion } from '../utils/analytics';
import profileImg from '../assets/profile.jpg';

/**
 * Modern Clean Hero — matches reference design
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);
  const [hasValidImage, setHasValidImage] = useState(false);

  // Tech stack badges shown under description
  const techBadges = ['Node.js', 'NestJS', 'React', 'TypeScript'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
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
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getQuickFactIcon = (id) => {
    const cls = 'w-5 h-5 text-blue-500';
    switch (id) {
      case 'exp':      return <Briefcase className={cls} />;
      case 'projects': return <Layers className={cls} />;
      case 'cloud':    return <Cloud className={cls} />;
      default:         return <Code2 className={cls} />;
    }
  };

  // Only show 4 stat cards (matching reference layout)
  const statFacts = quickFacts.filter((f) =>
    ['exp', 'projects', 'cloud', 'stack'].includes(f.id)
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden scroll-mt-20
                 bg-gradient-to-br from-[#EEF2FF] via-[#F0F4FF] to-[#E8EEFF]
                 dark:from-[#0B1120] dark:via-[#0D1528] dark:to-[#0B1120]"
    >
      {/* Soft blue blob background — top right behind photo */}
      <div className="absolute top-0 right-0 w-[55%] h-full
                      bg-gradient-to-bl from-blue-200/60 via-blue-100/40 to-transparent
                      dark:from-blue-900/20 dark:via-blue-800/10 dark:to-transparent
                      rounded-bl-[80px] pointer-events-none -z-10" />

      {/* Extra soft radial glow centre-left */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px]
                      bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0"
        >
          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left lg:pr-12 z-10">

            {/* Available badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                               bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200
                               shadow-md border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-base">🌟</span>
                {personalData.availabilityStatus}
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-tight tracking-tight
                             text-slate-900 dark:text-white">
                Hi, I&apos;m{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  {personalData.name}
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.div variants={itemVariants} className="mt-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                Backend &amp; Full Stack Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-[52ch] mx-auto lg:mx-0 leading-relaxed"
            >
              {personalData.tagline} Delivered 10+ production projects across high-concurrency
              microservices, localized payment gateways, and AI automation.
            </motion.p>

            {/* Tech stack badges */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium
                             bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                             border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {/* Primary */}
              <a
                href={personalData.bookingUrl || '#contact'}
                target={personalData.bookingUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm
                           bg-blue-600 hover:bg-blue-500 text-white
                           shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50
                           transition-all duration-200 active:scale-95
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule an Interview</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm
                           bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200
                           border border-slate-200 dark:border-slate-700
                           hover:border-blue-400/60 hover:bg-slate-50 dark:hover:bg-slate-700
                           shadow-sm transition-all duration-200 active:scale-95"
              >
                <Github className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>View Projects</span>
              </a>

              {/* WhatsApp */}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_hero_whatsapp', 'Hero Section')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm
                           bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200
                           border border-slate-200 dark:border-slate-700
                           hover:border-blue-400/60 hover:bg-slate-50 dark:hover:bg-slate-700
                           shadow-sm transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <span>WhatsApp Me</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Soft blue aura behind photo */}
              <div className="absolute inset-0 scale-110
                              bg-gradient-to-br from-blue-300/50 via-blue-200/40 to-indigo-200/30
                              dark:from-blue-600/30 dark:via-blue-500/20 dark:to-indigo-600/20
                              blur-2xl rounded-full pointer-events-none" />

              {/* Organic blob shape */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] overflow-hidden
                           bg-gradient-to-br from-blue-100 to-blue-200
                           dark:from-blue-900/40 dark:to-blue-800/40 shadow-2xl"
                style={{
                  borderRadius: '60% 40% 55% 45% / 55% 45% 60% 40%',
                }}
              >
                {!imgError && (
                  <img
                    src={profileImg}
                    alt={personalData.name}
                    onLoad={(e) => {
                      if (e.target.naturalWidth > 10) setHasValidImage(true);
                      else setImgError(true);
                    }}
                    onError={() => setImgError(true)}
                    className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                      hasValidImage ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="eager"
                  />
                )}
                {/* Fallback initials */}
                {(!hasValidImage || imgError) && (
                  <div className="absolute inset-0 flex items-center justify-center
                                  bg-gradient-to-br from-blue-200 to-blue-300
                                  dark:from-blue-900 dark:to-blue-800">
                    <span className="text-5xl font-black text-blue-600 dark:text-blue-300 tracking-widest">
                      {personalData.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Active for Hire badge */}
              <div className="absolute bottom-4 right-0 sm:-right-2
                             flex items-center gap-1.5 px-4 py-2 rounded-full
                             bg-white dark:bg-slate-800 shadow-lg
                             border border-slate-100 dark:border-slate-700">
                <span className="text-base">👑</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  + Active for Hire
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* STATS ROW */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statFacts.map((fact) => (
            <motion.div
              key={fact.id}
              variants={itemVariants}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl
                         bg-white dark:bg-slate-800/60
                         border border-slate-200/80 dark:border-slate-700/60
                         shadow-sm hover:shadow-md hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10
                              border border-blue-100 dark:border-blue-500/20
                              flex items-center justify-center shrink-0">
                {getQuickFactIcon(fact.id)}
              </div>
              <div>
                <p className="text-base font-black text-slate-900 dark:text-white leading-tight">
                  {fact.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  {fact.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
