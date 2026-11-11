import React from 'react';
import { techMarqueeData } from '../data/data';
import {
  Server,
  Database,
  Cloud,
  CreditCard,
  ShieldCheck,
  GitBranch,
  Layers,
  Code2,
} from 'lucide-react';

/**
 * Tech Stack Marquee Strip with infinite continuous loop, pausing on hover
 */
export default function TechMarquee() {
  const getIcon = (category) => {
    switch (category) {
      case 'Runtime':
      case 'Framework':
        return <Server className="w-3.5 h-3.5 text-blue-500" />;
      case 'Frontend':
        return <Code2 className="w-3.5 h-3.5 text-blue-500" />;
      case 'NoSQL DB':
      case 'SQL DB':
        return <Database className="w-3.5 h-3.5 text-blue-500" />;
      case 'Fintech':
        return <CreditCard className="w-3.5 h-3.5 text-blue-500" />;
      case 'Cloud':
        return <Cloud className="w-3.5 h-3.5 text-blue-500" />;
      case 'Security':
        return <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />;
      case 'CI/CD':
        return <GitBranch className="w-3.5 h-3.5 text-blue-500" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-blue-500" />;
    }
  };

  const marqueeItems = [...techMarqueeData, ...techMarqueeData];

  return (
    <div className="relative w-full overflow-hidden py-3.5 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
      {/* Edge gradient mask for smooth fade out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      <div className="flex items-center">
        <div className="animate-marquee flex items-center gap-3 sm:gap-4 pl-4">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all whitespace-nowrap shadow-sm select-none"
            >
              {getIcon(item.category)}
              <span className="font-semibold text-slate-900 dark:text-white">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-sans">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
