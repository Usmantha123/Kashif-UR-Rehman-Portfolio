import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/data';

/**
 * Education Section displaying academic foundation and achievements
 */
export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-20 sm:py-28 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal foundation in software engineering, algorithms, and computing principles."
        />

        <div className="space-y-6">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="rounded-3xl p-6 sm:p-8 glass-card hover:border-emerald-500/40 hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top border gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background watermark icon */}
              <GraduationCap className="absolute -bottom-6 -right-6 w-36 h-36 text-slate-200/50 dark:text-slate-800/20 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                    <Award className="w-3.5 h-3.5" />
                    {edu.grade}
                  </span>
                </div>
              </div>

              {edu.description && (
                <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl border-t border-slate-200/80 dark:border-slate-800/80 pt-4 relative">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

