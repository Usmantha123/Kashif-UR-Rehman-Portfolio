import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Info, MapPin, Globe, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/data';

/**
 * Enhanced Projects Grid with "Role · What I built · Tech" structured cards
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Works"
          title="Production Projects"
          subtitle="Battle-tested platforms delivered across AI pipelines, multi-role enterprise mobility, and blockchain real estate verification."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 glass-card hover:border-blue-500/40 hover:shadow-glow transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badges: Category & Client Country Tag */}
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                    {project.category}
                  </span>

                  {project.clientLocation && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      {project.clientLocation}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 mb-5">
                  {project.subtitle}
                </p>

                {/* Structured Recruiter Overview: Role · What I Built */}
                <div className="space-y-3 p-4 rounded-xl bg-slate-100/60 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-semibold uppercase text-slate-400 text-[10px] w-20 shrink-0 mt-0.5">
                      Role
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono font-semibold uppercase text-slate-400 text-[10px] w-20 shrink-0 mt-0.5">
                      What I Built
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.whatIBuilt || project.tagline}
                    </span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Info className="w-4 h-4" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {/* GitHub link - hidden unless populated in data.js */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {/* Live URL link - hidden unless populated in data.js */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
