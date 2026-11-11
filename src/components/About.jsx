import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Briefcase, FolderGit2, Cloud, CreditCard, Shield, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aboutData } from '../data/data';
import { useCountUp } from '../hooks/useCountUp';
import PropTypes from 'prop-types';

/**
 * Animated Stat Item that counts up when scrolled into view
 */
function StatCard({ stat, inView }) {
  const count = useCountUp(stat.value, 1600, stat.decimals, inView);

  const statIcons = {
    exp: <Briefcase className="w-5 h-5 text-emerald-400" />,
    projects: <FolderGit2 className="w-5 h-5 text-emerald-400" />,
    clouds: <Cloud className="w-5 h-5 text-emerald-400" />,
    payments: <CreditCard className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <div className="p-6 rounded-2xl glass-card hover:border-emerald-500/40 hover:shadow-glow transition-all duration-300 group overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-500/15 transition-all duration-300">
        {statIcons[stat.id] || <Code2 className="w-5 h-5 text-emerald-400" />}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tighter">
          {count}
        </span>
        <span className="text-2xl font-bold text-emerald-500 font-mono">
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">
        {stat.label}
      </p>
    </div>
  );
}

StatCard.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string,
    label: PropTypes.string.isRequired,
    decimals: PropTypes.number,
  }).isRequired,
  inView: PropTypes.bool.isRequired,
};

/**
 * About Section containing the professional narrative and live animated statistics
 */
export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Architecting Resilient & Scalable Solutions"
          subtitle="Engineering robust backends, microservices, and AI integrations."
        />

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl glass-card p-8 sm:p-10"
        >
          <div className="flex items-center gap-2 mb-4 text-emerald-500 font-mono text-xs uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Professional Summary</span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-justify sm:text-left">
            {aboutData.bio}
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {aboutData.stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

