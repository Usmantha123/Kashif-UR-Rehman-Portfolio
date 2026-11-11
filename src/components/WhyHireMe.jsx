import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Server, ShieldCheck, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { whyHireMeData } from '../data/data';

/**
 * "Why Hire Me" Strip highlighting 4 core CV-verified engineering strengths
 */
export default function WhyHireMe() {
  const shouldReduceMotion = useReducedMotion();

  const iconMap = {
    Server: <Server className="w-6 h-6 text-blue-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    CreditCard: <CreditCard className="w-6 h-6 text-blue-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-blue-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5 },
    },
  };

  return (
    <section id="why-hire-me" className="pt-12 pb-6 sm:pt-16 sm:pb-8 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Value Proposition"
          title="Why Hire Kashif?"
          subtitle="Battle-tested backend engineering focused on scalability, rock-solid security, and revenue-critical payment workflows."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyHireMeData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 glass-card hover:border-blue-500/40 hover:shadow-glow transition-all duration-300 group overflow-hidden"
            >
              {/* Animated gradient top-border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-700/60 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

              {/* Subtle bg glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-500/15 transition-all duration-300">
                  {iconMap[item.icon] || <Server className="w-6 h-6 text-blue-400" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 mt-1.5 mb-3 tracking-wide uppercase">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="relative mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="truncate">{item.badge}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

