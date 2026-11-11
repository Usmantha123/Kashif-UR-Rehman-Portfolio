import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experienceData } from '../data/data';

/**
 * Vertical Timeline Experience section rendering professional career track
 */
export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 sm:py-28 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          subtitle="Proven track record in high-impact backend engineering, cloud platforms, and security."
        />

        <div className="relative mt-12 pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 border-emerald-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-base sm:text-lg flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                      <span>{item.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

