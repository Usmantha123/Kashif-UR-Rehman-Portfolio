import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalData } from '../data/data';

/**
 * Footer component with copyright, navigation links, and back-to-top trigger
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[var(--bg)] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group font-mono font-bold text-lg text-slate-900 dark:text-white"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform text-sm">
                {personalData.initials}
              </span>
              <span>{personalData.name}</span>
            </a>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              {personalData.tagline}
            </p>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalData.socialLinks.email}
              className="p-2.5 rounded-xl text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/30 transition-all"
              aria-label="Email Kashif"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-xl text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/30 transition-all"
              aria-label="Scroll back to top"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-2">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="font-mono">Engineered with React 18, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
