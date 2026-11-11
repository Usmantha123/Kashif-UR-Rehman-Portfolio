import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Section Heading component with modern developer aesthetic
 */
export default function SectionHeading({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

SectionHeading.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
};
