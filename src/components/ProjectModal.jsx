import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { X, ExternalLink, Github, CheckCircle2, Layers, MapPin, Sparkles } from 'lucide-react';

/**
 * Accessible Project Details Modal with keyboard navigation and focus trapping
 */
export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element to restore focus on close
    const previousActiveElement = document.activeElement;

    // Focus close button initially
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key and focus trapping
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-medium tracking-wide uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{project.category || 'Featured Case Study'}</span>
            {project.clientLocation && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {project.clientLocation}
                </span>
              </>
            )}
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-emerald-400/90 font-medium text-sm sm:text-base mt-1">
            {project.subtitle}
          </p>
          {project.role && (
            <p className="text-xs font-mono text-slate-400 mt-2">
              <span className="text-slate-500 uppercase">Role:</span> {project.role}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-5">
          <p>{project.description}</p>
        </div>

        {/* Key Points / Implementation Highlights */}
        {project.keyPoints && project.keyPoints.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Architecture &amp; Backend Deliverables
            </h4>
            <ul className="space-y-2.5">
              {project.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links - stay hidden unless provided in data.js */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-4 pt-5 border-t border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-medium text-sm transition-colors shadow-lg shadow-emerald-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    category: PropTypes.string,
    clientLocation: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    keyPoints: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
