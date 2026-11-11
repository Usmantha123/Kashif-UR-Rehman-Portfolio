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

          {/* ── RIGHT COLUMN — Premium Floating Card Photo Section ── */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex items-center justify-center lg:justify-end relative select-none"
          >
            {/* Background Abstract Glow & Soft Shapes for Depth */}
            <div className="absolute -top-10 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-300/40 via-blue-200/30 to-transparent dark:from-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-blue-400/25 dark:bg-blue-500/15 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Floating Frame Container with 4-5s Gentle Motion */}
            <div className="relative group animate-float" style={{ animationDuration: '4.5s' }}>
              
              {/* Outer Decorative Subtle Ambient Glow Layer */}
              <div
                className="absolute inset-0 -rotate-3 scale-[1.03] bg-gradient-to-tr from-blue-400/30 via-blue-300/20 to-blue-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  borderRadius: '30% 24% 28% 22%',
                }}
              />

              {/* The Custom-Shaped Rotated Frame */}
              <div
                className="relative w-[290px] h-[300px] sm:w-[380px] sm:h-[390px] lg:w-[480px] lg:h-[490px]
                           border-[7px] border-white dark:border-slate-800/90
                           shadow-[0_20px_50px_rgba(59,130,246,0.28)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                           overflow-hidden -rotate-3 hover:rotate-0 hover:scale-[1.02]
                           transition-all duration-500 ease-out z-10"
                style={{
                  borderRadius: '30% 24% 28% 22%',
                  background: 'linear-gradient(135deg, #E6F0FF 0%, #8CB5FF 55%, #3B82F6 100%)',
                }}
              >
                {/* Photo Element counter-rotated so head stays straight and face/shoulders clearly visible */}
                {!imgError && (
                  <img
                    src={profileImg}
                    alt={personalData.name}
                    onLoad={(e) => {
                      if (e.target.naturalWidth > 10) setHasValidImage(true);
                      else setImgError(true);
                    }}
                    onError={() => setImgError(true)}
                    className={`w-full h-full object-cover object-top rotate-3 scale-110 transition-all duration-500 ${
                      hasValidImage ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      mixBlendMode: 'multiply',
                    }}
                    loading="eager"
                  />
                )}

                {/* High-End Initials Avatar Fallback */}
                {(!hasValidImage || imgError) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 text-center select-none rotate-3">
                    <span className="font-mono text-6xl font-black text-white tracking-widest drop-shadow-md">
                      {personalData.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* ── Active for Hire Badge ── */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-4 right-1 sm:bottom-6 sm:-right-2 z-20
                           inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full
                           bg-white/95 dark:bg-slate-900/95 backdrop-blur-md
                           border border-slate-100 dark:border-slate-800
                           shadow-[0_10px_25px_rgba(37,99,235,0.2)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.4)]
                           cursor-default select-none animate-float"
                style={{ animationDuration: '3.8s', animationDelay: '0.5s' }}
              >
                {/* Gold Crown */}
                <span className="text-base sm:text-lg leading-none" role="img" aria-label="Crown">
                  👑
                </span>

                {/* Green Status Indicator */}
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>

                {/* Badge Text */}
                <span className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-blue-400 tracking-tight whitespace-nowrap">
                  Active for Hire
                </span>
              </motion.div>
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
