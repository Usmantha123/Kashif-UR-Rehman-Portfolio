import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, X, FileDown, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navLinks, personalData } from '../data/data';
import { trackConversion } from '../utils/analytics';

/**
 * Refined Sticky Navigation Header with glassmorphism and clear active states
 */
export default function Navbar({ activeSection, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleBooking = (e) => {
    trackConversion('click_nav_book_interview', 'Navbar');
    if (!personalData.bookingUrl) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Initials */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1 transition-transform active:scale-95"
            aria-label="Kashif Ur Rehman - Return to top"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-400 to-emerald-300 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-xs sm:text-sm tracking-tighter text-emerald-400 group-hover:text-emerald-300">
                  {personalData.initials}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {personalData.name}
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Visible on lg and larger) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 p-1 rounded-full bg-slate-200/40 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-slate-950 dark:text-white bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items: Dual Conversion CTAs + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {/* Ghost CV Button */}
            <a
              href={personalData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('click_nav_cv', 'Navbar')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 hover:border-emerald-500/40 transition-all shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Open Resume (PDF)"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-500" />
              <span>CV</span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">PDF</span>
            </a>

            {/* Primary Book Interview Button */}
            <a
              href={personalData.bookingUrl || "#contact"}
              target={personalData.bookingUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={handleBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow hover:shadow-glow-lg transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Interview</span>
            </a>
          </div>

          {/* Mobile & Tablet Header Controls (Visible below lg) */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-50 lg:hidden bg-white/95 dark:bg-slate-950/98 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6 overflow-y-auto animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/25'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <a
              href={personalData.bookingUrl || "#contact"}
              target={personalData.bookingUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleBooking(e);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 shadow-glow"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Interview</span>
            </a>

            <a
              href={personalData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsMobileMenuOpen(false);
                trackConversion('click_nav_mobile_cv', 'Navbar Drawer');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
            >
              <FileDown className="w-4 h-4 text-emerald-500" />
              <span>View CV (PDF · {personalData.cvUpdatedDate})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};
