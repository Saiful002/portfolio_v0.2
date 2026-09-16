'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgressButton() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waveY = 100 - scrollProgress;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#12141a]/95 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden group transition-all duration-300 border-accent glow-accent"
    >
      {/* SVG Animated Liquid Water Wave Fill (using CSS variable var(--accent-neon)) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <clipPath id="circleClip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>

        <g clipPath="url(#circleClip)">
          <path
            d={`M 0,${waveY} Q 25,${waveY - 4} 50,${waveY} T 100,${waveY} V 100 H 0 Z`}
            style={{ fill: 'var(--accent-neon)' }}
            opacity="0.9"
            className="transition-all duration-150 ease-out"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values={`
                M 0,${waveY} Q 25,${waveY - 4} 50,${waveY} T 100,${waveY} V 100 H 0 Z;
                M 0,${waveY} Q 25,${waveY + 4} 50,${waveY} T 100,${waveY} V 100 H 0 Z;
                M 0,${waveY} Q 25,${waveY - 4} 50,${waveY} T 100,${waveY} V 100 H 0 Z
              `}
            />
          </path>
        </g>
      </svg>

      {/* Up Arrow Icon & Percent Indicator ALWAYS Pure White */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
        <ArrowUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" />
        <span className="text-[9px] font-mono font-bold tracking-tight text-white">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </motion.button>
  );
}
