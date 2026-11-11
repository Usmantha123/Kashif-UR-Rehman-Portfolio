import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  Layers,
  Cloud,
  CreditCard,
  ShieldCheck,
  GitBranch,
  Cpu,
  CheckCircle,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillsData } from '../data/data';

/**
 * Skills section displaying grouped technical proficiencies without arbitrary percentage bars
 */
export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const iconMap = {
    Server: <Server className="w-5 h-5 text-blue-400" />,
    Layout: <Layout className="w-5 h-5 text-blue-400" />,
    Database: <Database className="w-5 h-5 text-blue-400" />,
    Layers: <Layers className="w-5 h-5 text-blue-400" />,
    Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
    CreditCard: <CreditCard className="w-5 h-5 text-blue-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-blue-400" />,
    Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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
    <section id="skills" className="py-12 sm:py-16 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="Specialized in backend ecosystems, enterprise databases, cloud services, and production web architecture."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="relative rounded-2xl p-6 glass-card hover:border-blue-500/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle top border gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/15 transition-all duration-300 shrink-0">
                    {iconMap[group.icon] || <Cpu className="w-5 h-5 text-blue-400" />}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-500/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

