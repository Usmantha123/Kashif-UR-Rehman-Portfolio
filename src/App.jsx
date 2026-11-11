import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import WhyHireMe from './components/WhyHireMe';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StickyActions from './components/StickyActions';
import Toast from './components/Toast';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTIONS = ['home', 'why-hire-me', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

/**
 * Root Application Component with Recruiter-First Conversion Architecture
 */
export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(SECTIONS, 100);

  // Global Toast State
  const [toast, setToast] = useState({
    message: '',
    type: 'success',
  });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'success' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased transition-colors duration-300 pb-16 md:pb-0">
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero with Quick Facts */}
        <Hero />

        {/* Tech Stack Marquee Strip */}
        <TechMarquee />

        {/* 2. "Why Hire Me" Value Proposition */}
        <WhyHireMe />

        {/* 3. About & Verified Stats */}
        <About />

        {/* 4. Categorized Skills */}
        <Skills />

        {/* 5. Experience Timeline */}
        <Experience />

        {/* 6. Production Projects with Structured Overview */}
        <Projects />

        {/* 7. Academic Background */}
        <Education />

        {/* 8. Contact & Quick Channels */}
        <Contact onShowToast={showToast} />

        {/* Pre-Footer Final Conversion Banner */}
        <CallToActionBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Sticky Conversion Controls */}
      <StickyActions />

      {/* Back to Top floating button */}
      <BackToTop />

      {/* Toast notifications */}
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}
