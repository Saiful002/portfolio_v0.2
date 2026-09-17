'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Code2,
  Briefcase,
  FolderGit2,
  History,
  GraduationCap,
  Mail,
} from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', id: 'about', icon: User },
  { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
  { name: 'Expertise', href: '#services', id: 'services', icon: Briefcase },
  { name: 'Portfolio', href: '#portfolio', id: 'portfolio', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', id: 'experience', icon: History },
  { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export default function FloatingSideNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // Show side menu only when top header has scrolled out of view (> 150px)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Track active section
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2.5 p-2 rounded-2xl bg-[#0d0f14]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center justify-center"
                aria-label={item.name}
              >
                {/* Tooltip on hover */}
                <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#12141a] text-white text-xs font-semibold tracking-wide border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap flex items-center gap-1.5 translate-x-2 group-hover:translate-x-0">
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                </div>

                {/* Nav Button */}
                <div
                  className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-[#08090b] shadow-[0_0_15px_var(--accent-glow)] scale-105'
                      : 'text-[#8c9aa7] hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
