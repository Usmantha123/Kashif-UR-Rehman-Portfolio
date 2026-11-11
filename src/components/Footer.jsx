import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalData, navLinks } from '../data/data';

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
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group font-mono font-bold text-lg text-slate-900 dark:text-white"
            >
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform text-sm">
                {personalData.initials}
              </span>
              <span>{personalData.name}</span>
            </a>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              {personalData.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-emerald-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalData.socialLinks.email}
              className="p-2.5 rounded-xl text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-emerald-500/30 transition-all"
              aria-label="Email Kashif"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-xl text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-emerald-500/30 transition-all"
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
