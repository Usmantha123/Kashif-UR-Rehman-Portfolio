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
    Server: <Server className="w-6 h-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    CreditCard: <CreditCard className="w-6 h-6 text-emerald-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-400" />,
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
    <section id="why-hire-me" className="py-20 sm:py-24 relative scroll-mt-24">
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
              className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 hover:shadow-glow transition-all duration-300 group"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent group-hover:via-emerald-400 transition-all duration-300" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {iconMap[item.icon] || <Server className="w-6 h-6 text-emerald-400" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mt-1 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">{item.badge}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

